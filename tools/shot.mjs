#!/usr/bin/env node
/**
 * カードに載せるサムネイル（ファーストビュー1440×900）を撮る。
 *   node tools/shot.mjs <URL> <slug>
 *   → shot/<slug>.png  ※このあと sips で webp 幅800に縮める
 */
import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const [url, slug] = process.argv.slice(2);
const b = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'new',
  args: ['--hide-scrollbars', '--force-device-scale-factor=1', '--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await p.goto(url, { waitUntil: 'networkidle2', timeout: 120000 }).catch(() => {});
await new Promise(r => setTimeout(r, 3000));
// アニメーションを止めてから撮る（途中の状態で写らないように）
await p.evaluate(() => document.head.insertAdjacentHTML('beforeend',
  '<style>*,*::before,*::after{animation-play-state:paused!important;transition:none!important}</style>'));
await new Promise(r => setTimeout(r, 800));
await p.screenshot({ path: `shot/${slug}.png`, fullPage: false });
// 配色を数えるための全ページ画像（公開しない。data/ を作ったら消してよい）
await p.screenshot({ path: `shot/${slug}-full.png`, fullPage: true });
await b.close();
console.log('saved shot/' + slug + '.png');
