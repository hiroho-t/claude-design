#!/usr/bin/env node
/**
 * 実サイトから「デザインの数値」だけを抜き出して JSON にする。
 *
 *   node tools/extract.mjs <URL> <slug>
 *   → data/<slug>.json
 *
 * 抜くのは色コード・フォント名・サイズ・余白・角丸・影といった事実の数値だけ。
 * 文言も画像も持ち出さない。
 */
import puppeteer from 'puppeteer-core';
import { writeFileSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const [url, slug] = process.argv.slice(2);
if (!url || !slug) { console.error('使い方: node tools/extract.mjs <URL> <slug>'); process.exit(2); }

const browser = await puppeteer.launch({
  protocolTimeout: 600000, executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--font-render-hinting=none'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36');
await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
await new Promise(r => setTimeout(r, 2500));

// 遅延読み込みとスクロール発火のアニメを全部起こしてから測る
await page.evaluate(async () => {
  const s = ms => new Promise(r => setTimeout(r, ms));
  const step = Math.round(innerHeight * 0.7);
  const H = document.documentElement.scrollHeight;
  for (let y = 0; y < H; y += step) { scrollTo(0, y); await s(180); }
  scrollTo(0, 0); await s(1200);
});
await new Promise(r => setTimeout(r, 1500));

const raw = await page.evaluate(() => {
  const V = { w: innerWidth, h: innerHeight };
  const all = [...document.querySelectorAll('body *')];

  const visible = (el, cs, r) =>
    r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden';
    // opacity は見ない。スクロールで出るアニメの途中だと 0 のことがあり、実在する要素を落とすため

  const rgb = v => {
    const m = /rgba?\(([^)]+)\)/.exec(v || '');
    if (!m) return null;
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    if (p.length >= 4 && p[3] < 0.15) return null;      // ほぼ透明は色として数えない
    return { r: p[0], g: p[1], b: p[2], a: p.length >= 4 ? p[3] : 1 };
  };
  const hex = c => '#' + [c.r, c.g, c.b].map(n => Math.round(n).toString(16).padStart(2, '0')).join('');
  const bump = (map, key, w) => { if (key == null) return; map[key] = (map[key] || 0) + w; };

  const bgArea = {}, inkWeight = {}, sizeWeight = {}, faceWeight = {};
  const radius = {}, shadow = {}, gaps = {}, sectionPad = {}, containers = {};
  const buttons = [], headings = {};

  // 自前の背景色を持つ要素の面積（子が塗り直した分は差し引く）
  const ownBg = new Map();
  for (const el of all) {
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (!visible(el, cs, r)) continue;
    const c = rgb(cs.backgroundColor);
    if (c) ownBg.set(el, { hex: hex(c), area: Math.min(r.width, V.w) * r.height });
  }
  // SVGの図形塗り（背景色ではないので上のループでは拾えない）
  for (const el of document.querySelectorAll('svg path, svg polygon, svg rect, svg circle, svg ellipse')) {
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (r.width < 40 || r.height < 40) continue;
    const c = rgb(cs.fill);
    if (c) bump(bgArea, hex(c), Math.min(r.width, V.w) * Math.min(r.height, V.h * 3));
  }

  for (const [el, v] of ownBg) {
    let covered = 0;
    for (const kid of el.children) { const k = ownBg.get(kid); if (k) covered += k.area; }
    bump(bgArea, v.hex, Math.max(0, v.area - covered));
  }

  const round = (n, step = 1) => Math.round(n / step) * step;

  for (const el of all) {
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (!visible(el, cs, r)) continue;

    // 直下のテキストだけを数える（親で二重に数えないため）
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    const fs = parseFloat(cs.fontSize) || 0;
    if (own.length > 1 && fs) {
      const w = own.length;
      const c = rgb(cs.color); if (c) bump(inkWeight, hex(c), w * fs);
      bump(sizeWeight, round(fs, 1), w);
      bump(faceWeight, cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(), w);
    }

    // 角丸・影（地色か枠を持つ箱だけ）
    const hasBox = rgb(cs.backgroundColor) || parseFloat(cs.borderTopWidth) > 0;
    if (hasBox && r.width > 24 && r.height > 24) {
      const br = parseFloat(cs.borderTopLeftRadius) || 0;
      if (!/%/.test(cs.borderTopLeftRadius) && br < 60) bump(radius, round(br, 1), 1);
      if (cs.boxShadow && cs.boxShadow !== 'none') {
        const nums = (cs.boxShadow.replace(/rgba?\([^)]*\)/g, '').match(/-?[\d.]+px/g) || []).map(parseFloat);
        if (nums.some(n => Math.abs(n) > 0.5)) bump(shadow, cs.boxShadow, 1);   // 全部0pxの「影なし」を弾く
      }
    }

    // 並びの間隔
    if (/flex|grid/.test(cs.display) && cs.gap && cs.gap !== 'normal') {
      for (const g of cs.gap.split(' ')) { const n = parseFloat(g); if (n > 0) bump(gaps, round(n, 1), 1); }
    }

    // 中身の最大幅（中央寄せされた箱）
    if (r.width > 560 && r.width < V.w && el.children.length >= 2) {
      const mw = cs.maxWidth !== 'none' ? parseFloat(cs.maxWidth) : null;
      if (mw && mw > 560 && mw <= 1920) bump(containers, round(mw, 1), 2);
      bump(containers, round(r.width, 4), 1);
    }

    // セクションの上下余白（幅の広い箱の padding と margin をまとめて数える）
    const tag = el.tagName.toLowerCase();
    if (r.width > V.w * 0.55 && r.height > 160) {
      for (const p of [cs.paddingTop, cs.paddingBottom, cs.marginTop, cs.marginBottom]) {
        const n = parseFloat(p); if (n >= 32) bump(sectionPad, round(n, 4), 1);
      }
    }

    // ボタンらしきもの
    // innerText を使う。STUDIO 製などは <a> の中に <style> を持っていて textContent が汚れるため
    const txt = (el.innerText || '').trim();
    const cls = typeof el.className === 'string' ? el.className : '';
    const looksBtn = /^(a|button)$/.test(tag) || /(^|[-_ ])(btn|button)([-_ ]|$)/i.test(cls)
      || el.getAttribute('role') === 'button' || cs.cursor === 'pointer';
    if (looksBtn && txt.length > 0 && txt.length < 24 &&
        r.height >= 26 && r.height <= 96 && r.width >= 56 && r.width < 460 &&
        (rgb(cs.backgroundColor) || parseFloat(cs.borderTopWidth) > 0
         || [...el.children].some(k => rgb(getComputedStyle(k).backgroundColor)))) {
      // 文字の色とサイズは、地色を持つ箱ではなく実際に字が入っている要素から取る
      const hasOwnText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      const src = hasOwnText ? el : ([...el.querySelectorAll('*')].find(k =>
        [...k.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) || el);
      const tcs = getComputedStyle(src);
      buttons.push({
        bg: rgb(cs.backgroundColor) ? hex(rgb(cs.backgroundColor)) : 'transparent',
        color: rgb(tcs.color) ? hex(rgb(tcs.color)) : null,
        border: parseFloat(cs.borderTopWidth) > 0 ? `${round(parseFloat(cs.borderTopWidth), 1)}px ${rgb(cs.borderTopColor) ? hex(rgb(cs.borderTopColor)) : ''}`.trim() : null,
        radius: round(parseFloat(cs.borderTopLeftRadius) || 0, 1) + (/%/.test(cs.borderTopLeftRadius) ? '%' : 'px'),
        pad: `${round(parseFloat(cs.paddingTop), 1)}px ${round(parseFloat(cs.paddingRight), 1)}px`,
        fs: round(parseFloat(tcs.fontSize), 1), weight: tcs.fontWeight,
        h: round(r.height, 1), ls: tcs.letterSpacing === 'normal' ? '0' : tcs.letterSpacing,
      });
    }

    // 見出し
    if (/^h[1-4]$/.test(tag) && own.length > 1) {
      const lh = parseFloat(cs.lineHeight);
      (headings[tag] ||= []).push({
        fs: round(fs, 1), weight: cs.fontWeight,
        lh: lh ? +(lh / fs).toFixed(2) : null,
        ls: cs.letterSpacing === 'normal' ? '0' : (parseFloat(cs.letterSpacing) / fs).toFixed(3) + 'em',
        family: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
      });
    }
  }

  // 本文の行間・字間（一番よく使われている文字サイズの要素から）
  const bodyFs = Object.entries(sizeWeight).sort((a, b) => b[1] - a[1])[0]?.[0];
  let bodyLh = null, bodyLs = null;
  for (const el of all) {
    const cs = getComputedStyle(el);
    const fs = parseFloat(cs.fontSize);
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    if (own.length > 20 && Math.round(fs) == bodyFs) {
      const lh = parseFloat(cs.lineHeight);
      bodyLh = lh ? +(lh / fs).toFixed(2) : null;
      bodyLs = cs.letterSpacing === 'normal' ? '0' : (parseFloat(cs.letterSpacing) / fs).toFixed(3) + 'em';
      break;
    }
  }

  // ブレークポイント（読めるスタイルシートだけ）
  const bp = {};
  for (const ss of document.styleSheets) {
    let rules; try { rules = ss.cssRules; } catch { continue; }
    const walk = rs => { for (const r of rs) {
      if (r.media) { const m = /\((?:max|min)-width:\s*([\d.]+)px\)/g; let x;
        while ((x = m.exec(r.conditionText || r.media.mediaText))) bump(bp, Math.round(+x[1]), 1); }
      if (r.cssRules) { try { walk(r.cssRules); } catch {} }
    } };
    walk(rules);
  }

  const htmlBg = (() => { const c = rgb(getComputedStyle(document.body).backgroundColor); return c ? hex(c) : '#ffffff'; })();

  return {
    title: document.title,
    desc: document.querySelector('meta[name=description]')?.content || '',
    htmlBg, bgArea, inkWeight, sizeWeight, faceWeight,
    radius, shadow, gaps, sectionPad, containers, buttons, headings,
    bodyFs: bodyFs ? +bodyFs : null, bodyLh, bodyLs, bp,
  };
});

await browser.close();

/* ---- ここから整理（近い色をまとめ、上位だけ残す） ---- */
const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);
const toRgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const near = (a, b) => { const [x, y, z] = toRgb(a), [p, q, r] = toRgb(b); return Math.hypot(x - p, y - q, z - r) < 12; };

function mergeColors(map, n) {
  const out = [];
  for (const [h, w] of Object.entries(map).sort((a, b) => b[1] - a[1])) {
    const hit = out.find(o => near(o.hex, h));
    if (hit) hit.w += w; else out.push({ hex: h, w });
  }
  const sum = out.reduce((s, o) => s + o.w, 0) || 1;
  return out.slice(0, n).map(o => ({ hex: o.hex, pct: +(o.w / sum * 100).toFixed(1) }));
}

const sizes = top(raw.sizeWeight, 6).map(([s, w]) => ({ px: +s, w })).sort((a, b) => b.px - a.px);
const btnKey = b => [b.bg, b.color, b.radius, b.pad, b.fs].join('|');
const btnCount = {};
for (const b of raw.buttons) (btnCount[btnKey(b)] ||= { b, n: 0 }).n++;

const out = {
  slug, url,
  title: raw.title, desc: raw.desc,
  bg: mergeColors(raw.bgArea, 5),
  ink: mergeColors(raw.inkWeight, 4),
  pageBg: raw.htmlBg,
  fonts: top(raw.faceWeight, 4).map(([f, w]) => ({ family: f, w: Math.round(w) })),
  sizes,
  body: { fs: raw.bodyFs, lh: raw.bodyLh, ls: raw.bodyLs },
  headings: Object.fromEntries(Object.entries(raw.headings).map(([k, v]) => {
    const c = {}; for (const h of v) (c[JSON.stringify(h)] ||= { h, n: 0 }).n++;
    return [k, Object.values(c).sort((a, b) => b.n - a.n).slice(0, 2).map(x => x.h)];
  })),
  radius: top(raw.radius, 4).map(([r, n]) => ({ px: +r, n })),
  shadow: top(raw.shadow, 2).map(([s, n]) => ({ css: s, n })),
  gap: top(raw.gaps, 4).map(([g, n]) => ({ px: +g, n })),
  sectionPad: top(raw.sectionPad, 4).map(([p, n]) => ({ px: +p, n })),
  container: top(raw.containers, 3).map(([w, n]) => ({ px: +w, n })),
  buttons: Object.values(btnCount).sort((a, b) => b.n - a.n).slice(0, 3).map(x => ({ ...x.b, n: x.n })),
  bp: top(raw.bp, 5).map(([b, n]) => ({ px: +b, n })).sort((a, b) => b.px - a.px),
};

// 抽出値からそのまま決まるタグ（人の主観を入れない）
const gray = h => { const [r, g, b] = toRgb(h); return Math.max(r, g, b) - Math.min(r, g, b) < 24; };
out.accent = (out.ink.concat(out.bg).find(c => !gray(c.hex)) || {}).hex || null;
const pad = out.sectionPad[0]?.px || 0;
out.tags = [
  /明朝|Mincho|Serif|Shuei|Ryumin/i.test(out.fonts[0]?.family || '') ? '明朝' : 'ゴシック',
  pad >= 120 ? '余白ひろい' : pad >= 64 ? '余白ふつう' : '余白つまった',
  (out.radius[0]?.px || 0) >= 12 ? '角丸' : '角ばった',
  out.accent && !gray(out.accent) ? '色つき' : 'モノトーン',
];

writeFileSync(new URL(`../data/${slug}.json`, import.meta.url), JSON.stringify(out, null, 2));
console.log('saved data/' + slug + '.json');
