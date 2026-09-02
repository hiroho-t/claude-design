#!/usr/bin/env node
/**
 * カードに載せるサムネイル（ファーストビュー1440×900）を撮る。
 *   node tools/shot.mjs <URL> <slug>
 *   → shot/<slug>.png  ※このあと sips で webp 幅800に縮める
 */
import puppeteer from 'puppeteer-core';
import { writeFileSync, existsSync, copyFileSync } from 'node:fs';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const [url, slug] = process.argv.slice(2);
const b = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'new',
  args: ['--hide-scrollbars', '--force-device-scale-factor=1', '--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
// UAを名乗らないと弾くサイトがある（弾かれると Access Denied の画面を撮ってしまう）
await p.setUserAgent(UA);
await p.goto(url, { waitUntil: 'networkidle2', timeout: 120000 }).catch(() => {});
await new Promise(r => setTimeout(r, 3000));
// アニメーションを止めてから撮る（途中の状態で写らないように）
await p.evaluate(() => document.head.insertAdjacentHTML('beforeend',
  '<style>*,*::before,*::after{animation-play-state:paused!important;transition:none!important}</style>'));
await new Promise(r => setTimeout(r, 800));

// ボット避けで拒否された画面を撮っていないか確かめる
const BLOCK = /(access denied|forbidden|just a moment|attention required|error 10\d\d|ページが見つかりません|404)/i;
const page = await p.evaluate(() => ({
  title: document.title || '',
  text: (document.body.innerText || '').slice(0, 300),
  og: document.querySelector('meta[property="og:image"]')?.content || '',
  h: document.body.scrollHeight,
}));
const blocked = BLOCK.test(page.title) || BLOCK.test(page.text) || page.h < 700;

if (!blocked) {
  await p.screenshot({ path: `shot/${slug}.png`, fullPage: false });
  // 配色を数えるための全ページ画像。
  // ページによっては撮影から戻ってこないことがあるので、45秒で見切りをつけて
  // ファーストビューの画像で代用する（配色の比率は多少ぶれるが、止まるよりよい）
  const shotFull = p.screenshot({ path: `shot/${slug}-full.png`, fullPage: true });
  const ok = await Promise.race([
    shotFull.then(() => true).catch(() => false),
    new Promise(r => setTimeout(() => r(false), 45000)),
  ]);
  if (!ok) {
    copyFileSync(`shot/${slug}.png`, `shot/${slug}-full.png`);
    console.log('全ページの撮影に時間がかかりすぎたので、ファーストビューで代用');
  }
  console.log('saved shot/' + slug + '.png');
} else {
  // 撮れないサイトは OGP 画像で代える
  let og = page.og;
  if (!og) {
    const html = await fetch(url, { headers: { 'User-Agent': UA } }).then(r => r.text()).catch(() => '');
    og = /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i.exec(html)?.[1]
      || /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i.exec(html)?.[1] || '';
  }
  if (og) {
    const buf = await fetch(new URL(og, url).href, { headers: { 'User-Agent': UA } })
      .then(r => r.ok ? r.arrayBuffer() : null).catch(() => null);
    if (buf) {
      writeFileSync(`shot/${slug}.png`, Buffer.from(buf));
      writeFileSync(`shot/${slug}-full.png`, Buffer.from(buf));
      console.log('blocked → OGP画像を使用: ' + og);
    }
  }
  if (!existsSync(`shot/${slug}.png`)) {
    // OGPも無ければ、拒否画面でもとりあえず撮っておく（あとで差し替える）
    await p.screenshot({ path: `shot/${slug}.png`, fullPage: false });
    await p.screenshot({ path: `shot/${slug}-full.png`,
      clip: { x: 0, y: 0, width: 1440, height: Math.min(page.h, 20000) }, captureBeyondViewport: true });
    console.log('blocked かつ OGPなし: そのまま撮影');
  }
}
await b.close();
