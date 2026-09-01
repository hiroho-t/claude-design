#!/usr/bin/env node
/**
 * data/<slug>.json ＋ data/<slug>.palette.json から、
 * 配布する s/<slug>.md と一覧用の data.json を作る。
 *
 *   node tools/build.mjs <slug> "<業種>"
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { detailPage } from './page.mjs';

const [slug, industryArg = ''] = process.argv.slice(2);
const d = JSON.parse(readFileSync(`data/${slug}.json`, 'utf8'));
// SANKOU! から引き継いだカテゴリー。
// ただし、こちらが実際に観察していない分類（動き・制作ツール・見た印象）は載せない。
// 作品を外すのではなく、その作品の「その分類だけ」を書かない。
const CAT_GROUPS_OK = ['タイプ', '業種･ジャンル', '色･配色', '書体'];
const CAT_SLUGS_OK = new Set(['roundedcorners', 'jumprate', 'responsive', '1column', '2column',
  'bold-headings', 'thin-headings', 'whitespace', 'dividers', 'card-list']);
const catDict = existsSync('data/categories.json')
  ? JSON.parse(readFileSync('data/categories.json', 'utf8')) : {};
const keepCat = c => CAT_GROUPS_OK.includes(catDict[c.slug]?.group) || CAT_SLUGS_OK.has(c.slug);

const sankRaw = existsSync(`data/${slug}.cats.json`)
  ? JSON.parse(readFileSync(`data/${slug}.cats.json`, 'utf8')) : null;
const sank = sankRaw ? sankRaw.filter(keepCat) : null;
const industry = industryArg
  || (sank ? sank.filter(c => c.slug !== 'web').slice(0, 3).map(c => c.name).join('／') : '');

const palette = existsSync(`data/${slug}.palette.json`)
  ? JSON.parse(readFileSync(`data/${slug}.palette.json`, 'utf8')) : d.bg;

/** 有料の和文フォントは、無料で近いものに読み替える */
const SUB = [
  [/ゴシックMB101|見出ゴ|新ゴ|中ゴシック|ゴシックMB/, ['Zen Kaku Gothic New', 'Noto Sans JP']],
  [/A1ゴシック|筑紫[AB]?ゴ/,                          ['Zen Kaku Gothic Antique', 'Noto Sans JP']],
  [/リュウミン|A1明朝|筑紫[AB]?明朝|秀英/,             ['Shippori Mincho', 'Noto Serif JP']],
  [/游明朝|Yu Mincho|Hiragino Mincho/,                ['Zen Old Mincho', 'Noto Serif JP']],
  [/游ゴシック|Yu Gothic|Hiragino|ヒラギノ/,           ['Noto Sans JP']],
];
const freeAlt = f => (SUB.find(([re]) => re.test(f)) || [, null])[1];
const isJa = f => /[ぁ-んァ-ヶ一-龠]/.test(f) || /Noto Sans JP|Zen |Yu |Hiragino|Meiryo/i.test(f);

const ja = d.fonts.find(f => isJa(f.family)) || d.fonts[0];
const en = d.fonts.find(f => !isJa(f.family));
const alt = freeAlt(ja?.family || '');

const name = (d.title || slug).split(/[|｜–—-]/)[0].trim();
const today = new Date().toLocaleDateString('sv-SE');   // 端末の日付（UTCだと1日ずれる）
const pad = d.sectionPad[0]?.px || 0;
const rad = d.radius[0]?.px ?? 0;
const cont = d.container[0]?.px;
const read = d.container.slice(1).map(c => c.px).sort((a, b) => a - b)[0];
const gaps = d.gap.map(g => g.px).sort((a, b) => a - b);
// 主色＝面積のある色のうち、灰色でないもの。無ければ文字色から拾う（白基調のサイト）
const isGray = h => { if (!/^#[0-9a-f]{6}$/i.test(h || '')) return true;
  const [r, g, b] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
  return Math.max(r, g, b) - Math.min(r, g, b) < 24; };
const paletteMain = palette.find(c => !isGray(c.hex));
const main = paletteMain
  || (d.accent ? { hex: d.accent, pct: null } : null)
  || palette.find(c => c.hex.toLowerCase() !== '#ffffff') || palette[0];
/** 主色が「面」として効いているか（塗りで使われているか） */
const mainIsArea = !!paletteMain && paletteMain.pct >= 8;
const roles = ['地', '主色', '副色', '差し色', '差し色'];

const h = Object.entries(d.headings).flatMap(([, v]) => v);
const lhOf = px => h.find(x => x.fs === px)?.lh ?? (px === d.body.fs ? d.body.lh : null);

// 文字サイズの段。見出しの実測値も混ぜ、本文サイズを基準に役割を振る
const ladder = (() => {
  const set = new Set([...d.sizes.map(s => s.px), ...h.map(x => x.fs), d.body.fs].filter(Boolean));
  const px = [...set].sort((a, b) => b - a);
  const big = px.filter(v => v > d.body.fs);
  const small = px.filter(v => v < d.body.fs);
  const bigName = ['大見出し', '見出し', '小見出し', 'リード'];
  const smallName = ['補助', '注記'];
  return [
    ...big.map((v, i) => ({ px: v, role: bigName[i] || 'リード' })),
    { px: d.body.fs, role: '本文' },
    ...small.map((v, i) => ({ px: v, role: smallName[i] || '注記' })),
  ].slice(0, 7);
})();

const secName = (x, i) => {
  if (i === 0) return x.img ? 'ヒーロー（画像）' : 'ヒーロー';
  if (x.cols >= 2) return `${x.cols}カラム${x.img ? '・画像あり' : ''}`;
  if (x.h <= 320) return '帯・区切り';
  return x.img ? '1カラム・画像あり' : '1カラム・文字だけ';
};
const secs = d.sections || [];
const allFull = secs.length > 0 && secs.every(x => x.full);
const mainSurf = (d.surfaces || []).find(s2 => s2.hex.toLowerCase() === main.hex.toLowerCase());
const img = d.images || { n: 0, ratios: [], radius: [] };
const usage = d.usage || [];
const circles = d.circles || { n: 0, sizes: [] };

/** 面の上に置く線と文字の色（明暗のコントラストで決まる） */
const lum = h => { if (!/^#[0-9a-f]{6}$/i.test(h || '')) return 1;
  const [r, g, b] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
  return .2126 * r + .7152 * g + .0722 * b; };
const inkRev = d.ink[1]?.hex || '#ffffff';
const onOf = hex => (lum(hex) > .55 ? main.hex : inkRev);
const surfaces = (d.surfaces || []).map(s2 => ({ ...s2, on: onOf(s2.hex) }));
const mob = d.mobile || {};
const uMain = usage.find(u => u.hex.toLowerCase() === main.hex.toLowerCase());
const sidePad = mob.sidePad ?? 20;

/** 主色の使われ方を一言でまとめる */
const usageNote = () => {
  if (!uMain) return '';
  const { 面: bg, 文字: tx, 枠: bd, ボタン: bt } = uMain;
  const parts = [];
  if (tx >= bg * 3) parts.push(`文字色として${tx}箇所で使うのが主。面としては${bg}箇所しかないが、1枚が大きく画面の${Math.round(main.pct)}%を占める`);
  else if (bg >= tx) parts.push(`面として${bg}箇所、文字として${tx}箇所。塗りが主役`);
  else parts.push(`面${bg}箇所・文字${tx}箇所を行き来する`);
  if (bt) parts.push(`ボタンの地にも使う`); else parts.push(`ボタンの地には使っていない`);
  if (bd) parts.push(`枠線にも${bd}箇所`);
  return parts.join('。') + '。';
};

const md = `# ${name} ふうのデザイン

- 出典: ${d.url}
- 実測: ${today}／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ${d.tags.join(' / ')}${industry ? `\n- 業種: ${industry}` : ''}

${describe(d, palette, main)}

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

\`\`\`css
:root{
  --bg: ${palette[0].hex};
  --main: ${main.hex};${palette[2] ? `\n  --sub: ${palette[2].hex};` : ''}
  --ink: ${d.ink[0].hex};${d.ink[1] ? `\n  --ink-rev: ${d.ink[1].hex};` : ''}
  --on: ${main.hex};   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: ${(alt || [ja?.family]).map(f => `"${f}"`).join(', ')}, sans-serif;
  --font-en: ${en ? `"${en.family}", ` : ''}sans-serif;
  --fs-body: ${d.body.fs}px;
  --lh-body: ${d.body.lh};
  --container: ${cont}px;${read ? `\n  --read: ${read}px;` : ''}
  --section-y: ${pad}px;
  --gap: ${gaps[Math.floor(gaps.length / 2)] ?? 16}px;
  --radius: ${rad}px;
}
\`\`\`

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
${palette.map((c, i) => `| ${roles[i] || '差し色'} | \`${c.hex}\` | ${c.pct}% |`).join('\n')}

文字色は ${d.ink.map(c => `\`${c.hex}\``).join(' / ')}。

- 主色 \`${main.hex}\` は${mainIsArea ? `差し色ではなく**面**で使う。画面の${Math.round(main.pct)}%を占めている` : '塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる'}。
- 影は${d.shadow.length ? `\`${d.shadow[0].css}\`` : '**使わない**（計測0件）。段差は色面の切り替えだけでつくる'}。

${usage.length ? `## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
${usage.map(u => `| \`${u.hex}\` | ${u.面} | ${u.文字} | ${u.枠} | ${u.ボタン} |`).join('\n')}

- \`${main.hex}\` は${usageNote()}

` : ''}${surfaces.length > 1 ? `## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
${surfaces.map(s2 => `| \`${s2.hex}\`${s2.hex.toLowerCase() === palette[0].hex.toLowerCase() ? '（地）' : s2.hex.toLowerCase() === main.hex.toLowerCase() ? '（主色）' : ''} | \`${s2.on}\` |`).join('\n')}

\`\`\`css
.section{ --on:${onOf(palette[0].hex)} }                     /* 地の面 */
.section--main{ background:var(--main); color:${inkRev}; --on:${inkRev} }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:${inkRev} }
.section--main .btn--fill{ background:${inkRev}; color:var(--main) }   /* 主色の面では反転 */
\`\`\`
${d.cards[0]?.onBg ? `
- 実測した囲みの線は \`${d.cards[0].border?.split(' ')[1] || ''}\`。ただしその囲みは \`${d.cards[0].onBg}\` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**
` : ''}
` : ''}## 文字

- 和文: ${ja?.family}${alt ? `（有料）→ 無料で近いのは **${alt[0]}**、なければ ${alt[1] || 'Noto Sans JP'}` : ''}
${en ? `- 欧文: ${en.family}\n` : ''}- ウェイトは ${[...new Set(h.map(x => x.weight))].join(' / ') || '400'} が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
${ladder.map(s => `| ${s.role} | ${s.px}px | ${lhOf(s.px) ?? '—'} |`).join('\n')}

- 本文は ${d.body.fs}px・行間 ${d.body.lh}${d.body.lh >= 1.9 ? '。日本語をゆったり組むのがこのサイトの要。詰めると別物になる' : ''}。

## レイアウト

- コンテンツ幅: 最大 ${cont}px${read ? `／読ませる段は ${read}px` : ''}
- セクションの上下余白: ${d.sectionPad.map(p => p.px).join(' / ')}px（基本は ${pad}px）
- 並びの間隔: ${gaps.join(' / ')}px
- 角丸: ${rad}px が基本${d.radius[1] ? `。大きな面だけ ${d.radius[1].px}px` : ''}。中途半端な角丸を混ぜない
- 画面幅の切り替え: ${d.bp.map(b => b.px).join(' / ')}px

${mob.bodyFs ? `## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | ${d.body.fs}px${d.body.lh ? ` / 行間 ${d.body.lh}` : ''} | ${mob.bodyFs}px${mob.bodyLh ? ` / 行間 ${mob.bodyLh}` : ''} |
${mob.h1 ? `| 見出し | ${ladder[0]?.px}px | ${mob.h1.fs}px${mob.h1.lh ? ` / 行間 ${mob.h1.lh}` : ''} |\n` : ''}| セクションの上下余白 | ${pad}px | ${mob.pad ?? '—'}px |
| 左右の余白 | — | ${sidePad}px |
| 並びの間隔 | ${gaps[Math.floor(gaps.length / 2)] ?? 16}px | ${mob.gap ?? '—'}px |

- 本文は ${d.body.fs}px → ${mob.bodyFs}px${mob.pad ? `、セクション余白は ${pad}px → ${mob.pad}px（PCの${Math.round(mob.pad / pad * 100)}%）` : ''}。
- 文字サイズの段は ${mob.sizes.join(' / ')}px。

` : ''}## ボタン

\`\`\`css
${d.buttons.map((b, i) => `.btn${i ? '-sub' : ''}{
  background: ${b.bg}; color: ${b.color};${b.border ? `\n  border: ${b.border.replace(' ', ' solid ')};` : ''}
  border-radius: ${b.radius}; padding: ${b.pad}; ${b.h ? `min-height: ${b.h}px;` : ''}
  font-size: ${b.fs}px; font-weight: ${b.weight}; letter-spacing: ${b.ls};
}`).join('\n')}
\`\`\`

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
${secs.map((x, i) => `| ${i + 1} | ${x.h}px | ${x.bg ? `\`${x.bg}\`` : '—'} | ${secName(x, i)} | ${x.align || '—'} | ${x.media === 'none' ? '—' : x.media}${x.split ? `（${x.split}）` : ''} |`).join('\n')}

- 全${secs.length}セクション${allFull ? '、すべて全幅' : ''}。${allFull ? '中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。' : ''}
${mainSurf && mainIsArea ? `- 主色 \`${main.hex}\` の面が ${mainSurf.n} 箇所。地色と主色の面を交互に置くのがリズムのつくり方。\n` : ''}- 使われている面の色: ${(d.surfaces || []).map(s2 => `\`${s2.hex}\`（${s2.n}）`).join(' / ')}
${(() => {
  const al = secs.map(x => x.align).filter(Boolean);
  const c = al.filter(a => a === '中央').length;
  if (!al.length) return '';
  return `- 見出しは${c === 0 ? '**全部左寄せ**。中央寄せは1つもない' : `左${al.filter(a => a === '左').length}／中央${c}`}。\n`;
})()}${(() => {
  const sp = secs.map(x => x.split).filter(Boolean);
  return sp.length ? `- 2カラムの分け方は ${sp.join(' / ')}。半分ずつには割らない。\n` : '';
})()}

## 部品

${d.cards.length ? `囲み（${d.cards[0].n}箇所で同じ形）

\`\`\`css
.card{
  background: ${d.cards[0].bg};${d.cards[0].border ? `\n  border: ${d.cards[0].border.split(' ')[0]} solid var(--on);   /* 実測は ${d.cards[0].border.split(' ')[1]}。面によって入れ替える */` : ''}
  border-radius: ${d.cards[0].radius}px;
  padding: ${d.cards[0].pad.split('/')[0]}px ${d.cards[0].pad.split('/')[1]}px;${d.cards[0].shadow ? `\n  box-shadow: ${d.cards[0].shadow};` : ''}
}
\`\`\`
` : '囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。\n'}
${d.chips.length ? `ラベル・タグ

\`\`\`css
.chip{
  background: ${d.chips[0].bg}; color: ${d.chips[0].color};${d.chips[0].border ? `\n  border: ${d.chips[0].border} solid currentColor;` : ''}
  border-radius: ${d.chips[0].radius}; padding: ${d.chips[0].pad}; font-size: ${d.chips[0].fs}px;
}
\`\`\`
` : ''}
${circles.n ? `## 丸いもの

角丸は ${rad}px だが、**完全な円は別扱い**で ${circles.n} 箇所ある（${circles.sizes.map(c => `${c.px}px×${c.n}`).join('、')}）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

` : ''}## 画像

- ${img.n}枚使っている${img.fullBleed ? `。うち ${img.fullBleed} 枚は画面いっぱいに置く` : ''}
- 比率は ${img.ratios.map(r => `${r.ratio}（${r.n}枚）`).join('、') || '一定しない'}
- 角丸 ${img.radius[0]?.px ?? 0}px。${(img.radius[0]?.px ?? 0) === 0 ? '切り抜かず四角のまま置く' : '画像も箱と同じだけ丸める'}

## すぐ使う骨格

上の \`:root\` と合わせて、これをそのまま置けば土台になる。

\`\`\`css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:${onOf(palette[0].hex)} }
.container{ width:min(100% - ${sidePad * 2}px, var(--container)); margin-inline:auto }
${read ? `.read{ max-width:var(--read) }\n` : ''}
.hero{ ${secs[0] ? `min-height:${secs[0].h}px;` : ''} display:grid; align-content:center }
${surfaces.length > 1 ? `.section--main{ background:var(--main); color:${inkRev}; --on:${inkRev} }
.section--main .btn--fill{ background:${inkRev}; color:var(--main) }\n` : ''}${d.cards.length ? `.card{ background:${d.cards[0].bg};${d.cards[0].border ? ` border:${d.cards[0].border.split(' ')[0]} solid var(--on);` : ''}
  border-radius:${d.cards[0].radius}px; padding:${d.cards[0].pad.split('/')[0]}px ${d.cards[0].pad.split('/')[1]}px }\n` : ''}${d.buttons[0] ? `.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:${d.buttons[0].bg}; color:${d.buttons[0].color}; border-radius:${d.buttons[0].radius};
  padding:${d.buttons[0].pad}; min-height:${d.buttons[0].h}px;
  font-size:${d.buttons[0].fs}px; font-weight:${d.buttons[0].weight} }\n` : ''}
img{ width:100%; height:auto; border-radius:${img.radius?.[0]?.px ?? 0}px; aspect-ratio:${(img.ratios[0]?.ratio || '16:9').replace(':', '/')}; object-fit:cover }

@media (max-width:${d.bp.find(b => b.px <= 900)?.px || 768}px){
  :root{${mob.bodyFs ? ` --fs-body:${mob.bodyFs}px;` : ''}${mob.pad ? ` --section-y:${mob.pad}px;` : ''}${mob.gap ? ` --gap:${mob.gap}px;` : ''} }
  .container{ width:calc(100% - ${sidePad * 2}px) }
}
\`\`\`

## 守ること

やること

- ${mainIsArea ? `地色と主色 \`${main.hex}\` の面を${allFull ? '全幅で' : ''}交互に置く。主色は画面の${Math.round(main.pct)}%を占めるだけ使う` : `地は \`${palette[0].hex}\` のまま。主色 \`${main.hex}\` は文字と小さな部品にだけ使う`}。
- 余白 ${pad}px と行間 ${d.body.lh} を先に決めてから中身を入れる。
- 画像は ${img.ratios[0]?.ratio || '16:9'} に統一し、角丸は ${img.radius[0]?.px ?? 0}px。
- 線と文字の色は面ごとに入れ替える（\`--on\` を面のクラスで上書きする）。固定色で書かない。
${d.cards.length ? `- 囲みは ${d.cards[0].border ? `${d.cards[0].border.split(' ')[0]} の線` : '塗り'}＋角丸 ${d.cards[0].radius}px でそろえる。\n` : ''}
やらないこと

- ${d.shadow.length ? '指定以外の影を足さない' : '影をつけない（このサイトには1つもない）'}。
- ${mainIsArea ? '主色を線やボタンだけの差し色に使わない。面で使わないと別物になる' : '主色を大きな面に塗らない。塗った瞬間に別物になる'}。
- 本文の行間を ${d.body.lh} より詰めない。${rad === 0 ? '角を丸めない。' : ''}
- 中途半端な角丸（${rad}px と ${d.radius[1]?.px ?? 32}px 以外）を混ぜない。${circles.n ? '完全な円は別枠なので、消さなくてよい。' : ''}
`;

writeFileSync(`s/${slug}.md`, md);

// 詳細ページ（実物のサイズ・色・角丸でそのまま見せる）
writeFileSync(`p/${slug}.html`, detailPage({
  d, palette, md, name, industry, ja, en, alt, ladder, lhOf, cont, read, pad, rad, gaps, main,
  secs, secName, allFull, img, usage, mob, usageNote, sidePad, circles, surfaces, inkRev,
}));

// 一覧用
const list = existsSync('data.json') ? JSON.parse(readFileSync('data.json', 'utf8')) : [];
const entry = { slug, name, url: d.url, industry, tags: d.tags, accent: main.hex,
  palette: palette.slice(0, 4).map(c => ({ hex: c.hex, pct: c.pct })),
  ...(sank ? { cats: sank.map(c => ({ slug: c.slug, name: c.name })) } : {}) };
const i = list.findIndex(x => x.slug === slug);
i < 0 ? list.push(entry) : (list[i] = entry);
writeFileSync('data.json', JSON.stringify(list, null, 2));

console.log(`s/${slug}.md (${md.split('\n').length}行) ／ p/${slug}.html ／ data.json を更新`);

/** 数値から機械的に一言つくる（書き手の主観を入れない） */
function describe(d, palette, main) {
  const parts = [];
  parts.push(`${palette[0].hex === '#ffffff' ? '白地' : `${palette[0].hex} の地`}に \`${main.hex}\` を${mainIsArea ? '大きな面で置く' : '文字と細部だけで効かせる'}配色。`);
  parts.push(d.shadow.length ? '影を使って浮かせる。' : '影も枠線もほとんど使わない。');
  parts.push(`本文 ${d.body.fs}px・行間 ${d.body.lh}、セクション間 ${d.sectionPad[0]?.px}px。`);
  return parts.join('');
}
