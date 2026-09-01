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
  const useBg = {}, useText = {}, useBorder = {}, useBtn = {};   // 色の使われ方（箇所数）
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
      const c = rgb(cs.color); if (c) { bump(inkWeight, hex(c), w * fs); bump(useText, hex(c), 1); }
      bump(sizeWeight, round(fs, 1), w);
      bump(faceWeight, cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(), w);
    }

    // 色が使われている箇所を数える（面か、枠か）
    if (r.width >= 24 && r.height >= 24) {
      const b = rgb(cs.backgroundColor); if (b) bump(useBg, hex(b), 1);
      if (parseFloat(cs.borderTopWidth) > 0) { const bc = rgb(cs.borderTopColor); if (bc) bump(useBorder, hex(bc), 1); }
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

  for (const b of buttons) if (b.bg !== 'transparent') bump(useBtn, b.bg, 1);

  return {
    title: document.title,
    desc: document.querySelector('meta[name=description]')?.content || '',
    htmlBg, bgArea, inkWeight, sizeWeight, faceWeight, useBg, useText, useBorder, useBtn,
    radius, shadow, gaps, sectionPad, containers, buttons, headings,
    bodyFs: bodyFs ? +bodyFs : null, bodyLh, bodyLs, bp,
  };
});


/* ---- 2巡目：ページ全体の組み立て方を見る（セクションの並び・部品・画像） ---- */
const shape = await page.evaluate(() => {
  const V = { w: innerWidth, h: innerHeight };
  const rgb = v => {
    const m = /rgba?\(([^)]+)\)/.exec(v || ''); if (!m) return null;
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    if (p.length >= 4 && p[3] < 0.15) return null;
    return p;
  };
  const hex = c => '#' + c.slice(0, 3).map(n => Math.round(n).toString(16).padStart(2, '0')).join('');
  const bump = (m, k, w = 1) => { if (k != null) m[k] = (m[k] || 0) + w; };
  const round = (n, s = 1) => Math.round(n / s) * s;
  const vis = el => { const c = getComputedStyle(el), r = el.getBoundingClientRect();
    return c.display !== 'none' && c.visibility !== 'hidden' && r.width > 0 && r.height > 0; };

  // ページのセクション＝「全幅の子を一番多く持つ要素」の子たち
  let host = null, best = 0;
  for (const el of document.querySelectorAll('body, body *')) {
    let n = 0;
    for (const k of el.children) {
      const r = k.getBoundingClientRect();
      if (r.width >= V.w * 0.95 && r.height >= 120 && vis(k)) n++;
    }
    if (n > best) { best = n; host = el; }
  }

  // 横並びの列数を数える（幅のそろった兄弟が2つ以上）
  const colsIn = root => {
    let found = 0;
    for (const el of root.querySelectorAll('*')) {
      const cs = getComputedStyle(el);
      if (!/flex|grid/.test(cs.display)) continue;
      const kids = [...el.children].filter(vis).map(k => k.getBoundingClientRect());
      if (kids.length < 2) continue;
      const w0 = kids[0].width;
      if (w0 < 140 || kids.some(k => Math.abs(k.width - w0) > 12)) continue;
      if (kids[0].height < 80) continue;
      found = Math.max(found, Math.min(kids.length, 6));
    }
    return found;
  };

  const sections = [];
  if (host) {
    for (const el of host.children) {
      if (!vis(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.height < 120) continue;
      const bg = rgb(getComputedStyle(el).backgroundColor);

      // セクションの中の組み方（見出しと画像がどこにあるか）
      const head = [...el.querySelectorAll('h1,h2,h3')].find(h => {
        const hr = h.getBoundingClientRect(); return hr.width > 0 && (h.innerText || '').trim().length > 1;
      });
      let align = null, media = 'none', split = null;
      if (head) {
        const hr = head.getBoundingClientRect();
        const c = (hr.left + hr.right) / 2 - r.left, mid = r.width / 2;
        align = Math.abs(c - mid) < r.width * 0.06 ? '中央' : (c < mid ? '左' : '右');
      }
      const pics = [...el.querySelectorAll('img,picture,video,svg')]
        .map(i => i.getBoundingClientRect()).filter(b => b.width > 120 && b.height > 80)
        .sort((a, b) => b.width * b.height - a.width * a.height);
      if (pics.length) {
        const b = pics[0];
        if (b.width >= r.width * 0.95) media = '全幅';
        else if (head) {
          const hr = head.getBoundingClientRect();
          const overlap = b.top < hr.bottom && b.bottom > hr.top;   // 見出しと同じ高さに並ぶか
          if (!overlap) media = '見出しの下';
          else media = (b.left + b.right) / 2 < (hr.left + hr.right) / 2 ? '左' : '右';
          if (overlap) split = `${Math.round(b.width / r.width * 100)}:${100 - Math.round(b.width / r.width * 100)}`;
        } else media = '全面';
      }
      sections.push({
        h: round(r.height, 20),
        full: r.width >= V.w * 0.95,
        cols: colsIn(el),
        img: !!el.querySelector('img,picture,video,svg'),
        bg: bg ? hex(bg) : null,
        align, media, split,
      });
    }
  }

  // 面の階層（大きな箱に使われている地色）
  const surfaces = {};
  for (const el of document.querySelectorAll('body *')) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 280 || r.height < 120) continue;
    const c = rgb(getComputedStyle(el).backgroundColor);
    if (c) bump(surfaces, hex(c));
  }

  // くり返し出てくる箱＝カード。同じ見た目のものが2つ以上あるものだけ
  const cards = {};
  for (const el of document.querySelectorAll('body *')) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (r.width < 180 || r.width > 760 || r.height < 120 || r.height > 720) continue;
    const own = rgb(cs.backgroundColor), bd = parseFloat(cs.borderTopWidth) || 0;
    const par = el.parentElement ? rgb(getComputedStyle(el.parentElement).backgroundColor) : null;
    const painted = own && (!par || hex(own) !== hex(par));
    if (!painted && bd === 0 && cs.boxShadow === 'none') continue;
    if (!el.querySelector('img,p,h1,h2,h3,h4,span,div')) continue;
    // その囲みが乗っている面の色（線の色は面によって変わるため）
    let onBg = null;
    for (let a = el.parentElement; a; a = a.parentElement) {
      const c = rgb(getComputedStyle(a).backgroundColor);
      if (c) { onBg = hex(c); break; }
    }
    const key = JSON.stringify({
      onBg,
      bg: own ? hex(own) : 'transparent',
      radius: round(parseFloat(cs.borderTopLeftRadius) || 0, 1),
      pad: [cs.paddingTop, cs.paddingLeft].map(v => round(parseFloat(v) || 0, 2)).join('/'),
      border: bd ? `${round(bd, 1)}px ${hex(rgb(cs.borderTopColor) || [0, 0, 0])}` : null,
      shadow: cs.boxShadow === 'none' ? null : cs.boxShadow,
    });
    bump(cards, key);
  }

  // タグ・ラベルのような小さい部品
  const chips = {};
  for (const el of document.querySelectorAll('body *')) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    const t = (el.innerText || '').trim();
    if (!t || t.length > 14 || r.height < 18 || r.height > 44 || r.width < 32 || r.width > 240) continue;
    const rad = parseFloat(cs.borderTopLeftRadius) || 0;
    const own = rgb(cs.backgroundColor), bd = parseFloat(cs.borderTopWidth) || 0;
    if (!own && bd === 0) continue;
    if (rad < 4) continue;
    // 余白のない「丸いだけの箱」はタグではないので外す
    if ((parseFloat(cs.paddingLeft) || 0) < 4) continue;
    bump(chips, JSON.stringify({
      bg: own ? hex(own) : 'transparent',
      color: hex(rgb(cs.color) || [0, 0, 0]),
      radius: /%|9999|99px/.test(cs.borderTopLeftRadius) || rad >= r.height / 2 ? '999px' : round(rad, 1) + 'px',
      pad: `${round(parseFloat(cs.paddingTop) || 0, 1)}px ${round(parseFloat(cs.paddingLeft) || 0, 1)}px`,
      fs: round(parseFloat(cs.fontSize), 1),
      border: bd ? `${round(bd, 1)}px` : null,
    }));
  }

  // 画像の扱い
  const ratios = {}, imgRadius = {};
  let fullBleed = 0, imgs = 0;
  for (const el of document.querySelectorAll('img,picture,video')) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 160 || r.height < 90) continue;
    imgs++;
    if (r.width >= V.w * 0.95) fullBleed++;
    const known = [[16, 9], [3, 2], [4, 3], [1, 1], [3, 4], [2, 3], [21, 9]];
    const a = r.width / r.height;
    const near = known.reduce((b, k) => Math.abs(k[0] / k[1] - a) < Math.abs(b[0] / b[1] - a) ? k : b, known[0]);
    if (Math.abs(near[0] / near[1] - a) < 0.14) bump(ratios, near.join(':'));
    bump(imgRadius, round(parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0, 1));
  }

  // 完全な円（角を丸めないルールとは別扱い。丸のモチーフとして使われる）
  const circles = {};
  for (const el of document.querySelectorAll('body *')) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (r.width < 16 || r.width > 360 || Math.abs(r.width - r.height) > 2) continue;
    const rad = cs.borderTopLeftRadius;
    const isCircle = /%/.test(rad) ? parseFloat(rad) >= 45 : (parseFloat(rad) || 0) >= r.width / 2 - 1;
    if (!isCircle) continue;
    if (!rgb(cs.backgroundColor) && (parseFloat(cs.borderTopWidth) || 0) === 0) continue;
    bump(circles, round(r.width, 8));
  }

  return { sections: sections.slice(0, 20), surfaces, cards, chips, ratios, imgRadius, fullBleed, imgs, circles };
});

/* ---- 3巡目：スマホ幅（390px）で本文まわりだけ測り直す ---- */
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.reload({ waitUntil: 'networkidle2', timeout: 90000 }).catch(() => {});
await new Promise(r => setTimeout(r, 2500));
await page.evaluate(async () => {
  const s = ms => new Promise(r => setTimeout(r, ms));
  const step = Math.round(innerHeight * 0.7), H = document.documentElement.scrollHeight;
  for (let y = 0; y < H; y += step) { scrollTo(0, y); await s(140); }
  scrollTo(0, 0); await s(1000);
});

const mobile = await page.evaluate(() => {
  const V = { w: innerWidth };
  const bump = (m, k, w = 1) => { if (k != null) m[k] = (m[k] || 0) + w; };
  const round = (n, st = 1) => Math.round(n / st) * st;
  const vis = (cs, r) => cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0;

  const sizeW = {}, pads = {}, gaps = {}, conts = {};
  const heads = {};
  let bodyLh = null, bodyFs = null;

  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    if (!vis(cs, r)) continue;
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    const fs = parseFloat(cs.fontSize) || 0;
    if (own.length > 1 && fs) bump(sizeW, round(fs, 1), own.length);
    if (r.width > V.w * 0.55 && r.height > 120) {
      for (const p of [cs.paddingTop, cs.paddingBottom, cs.marginTop, cs.marginBottom]) {
        const n = parseFloat(p); if (n >= 24) bump(pads, round(n, 4), 1);
      }
    }
    if (/flex|grid/.test(cs.display) && cs.gap && cs.gap !== 'normal') {
      for (const g of cs.gap.split(' ')) { const n = parseFloat(g); if (n > 0) bump(gaps, round(n, 1), 1); }
    }
    if (r.width > V.w * 0.6 && r.width <= V.w && el.children.length >= 2) bump(conts, round(V.w - r.width, 2), 1);
    if (/^h[1-3]$/.test(el.tagName.toLowerCase()) && own.length > 1) {
      const lh = parseFloat(cs.lineHeight);
      bump(heads[el.tagName.toLowerCase()] ||= {}, JSON.stringify({ fs: round(fs, 1), lh: lh ? +(lh / fs).toFixed(2) : null }), 1);
    }
  }
  bodyFs = +Object.entries(sizeW).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el), fs = parseFloat(cs.fontSize);
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    if (own.length > 20 && Math.round(fs) === bodyFs) {
      const lh = parseFloat(cs.lineHeight); bodyLh = lh ? +(lh / fs).toFixed(2) : null; break;
    }
  }
  const top1 = o => Object.entries(o).sort((a, b) => b[1] - a[1])[0];
  return {
    bodyFs, bodyLh,
    sizes: Object.entries(sizeW).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([px]) => +px).sort((a, b) => b - a),
    pad: top1(pads) ? +top1(pads)[0] : null,
    gap: top1(gaps) ? +top1(gaps)[0] : null,
    sidePad: top1(conts) ? Math.round(+top1(conts)[0] / 2) : null,
    h1: heads.h1 ? JSON.parse(top1(heads.h1)[0]) : (heads.h2 ? JSON.parse(top1(heads.h2)[0]) : null),
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

  // ページ全体の組み立て
  sections: shape.sections,
  surfaces: top(shape.surfaces, 4).map(([h, n]) => ({ hex: h, n })),
  cards: top(shape.cards, 2).map(([k, n]) => ({ ...JSON.parse(k), n })).filter(c => c.n >= 2),
  chips: top(shape.chips, 2).map(([k, n]) => ({ ...JSON.parse(k), n })).filter(c => c.n >= 2),
  images: {
    n: shape.imgs, fullBleed: shape.fullBleed,
    ratios: top(shape.ratios, 3).map(([r, n]) => ({ ratio: r, n })),
    radius: top(shape.imgRadius, 2).map(([r, n]) => ({ px: +r, n })),
  },
  circles: (() => {
    const e = Object.entries(shape.circles).sort((a, b) => b[1] - a[1]);
    return { n: e.reduce((t, [, n]) => t + n, 0), sizes: e.slice(0, 3).map(([px, n]) => ({ px: +px, n })) };
  })(),
  mobile,
};

// 色ごとの使われ方を、代表色にまとめ直す（近い色は同じ色として数える）
{
  const reps = [...out.bg, ...out.ink].map(c => c.hex).filter((h, i, a) => a.indexOf(h) === i);
  const tally = {};
  const put = (src, key) => { for (const [h, n] of Object.entries(src)) {
    const rep = reps.find(r => near(r, h)); if (!rep) continue;
    (tally[rep] ||= { hex: rep, 面: 0, 文字: 0, 枠: 0, ボタン: 0 })[key] += n;
  } };
  put(raw.useBg, '面'); put(raw.useText, '文字'); put(raw.useBorder, '枠'); put(raw.useBtn, 'ボタン');
  out.usage = reps.map(h => tally[h]).filter(Boolean);
}

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
