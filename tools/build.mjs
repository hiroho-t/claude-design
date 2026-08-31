#!/usr/bin/env node
/**
 * data/<slug>.json ＋ data/<slug>.palette.json から、
 * 配布する s/<slug>.md と一覧用の data.json を作る。
 *
 *   node tools/build.mjs <slug> "<業種>"
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { detailPage } from './page.mjs';

const [slug, industry = ''] = process.argv.slice(2);
const d = JSON.parse(readFileSync(`data/${slug}.json`, 'utf8'));
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
const main = palette.find(c => c.hex.toLowerCase() !== '#ffffff') || palette[0];
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

- 主色 \`${main.hex}\` は差し色ではなく**面**で使う。画面の${Math.round(main.pct)}%を占めている。
- 影は${d.shadow.length ? `\`${d.shadow[0].css}\`` : '**使わない**（計測0件）。段差は色面の切り替えだけでつくる'}。

## 文字

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

## ボタン

\`\`\`css
${d.buttons.map((b, i) => `.btn${i ? '-sub' : ''}{
  background: ${b.bg}; color: ${b.color};${b.border ? `\n  border: ${b.border.replace(' ', ' solid ')};` : ''}
  border-radius: ${b.radius}; padding: ${b.pad}; ${b.h ? `min-height: ${b.h}px;` : ''}
  font-size: ${b.fs}px; font-weight: ${b.weight}; letter-spacing: ${b.ls};
}`).join('\n')}
\`\`\`

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 |
|---|---|---|---|
${secs.map((x, i) => `| ${i + 1} | ${x.h}px | ${x.bg ? `\`${x.bg}\`` : '—'} | ${secName(x, i)} |`).join('\n')}

- 全${secs.length}セクション${allFull ? '、すべて全幅' : ''}。${allFull ? '中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。' : ''}
${mainSurf ? `- 主色 \`${main.hex}\` の面が ${mainSurf.n} 箇所。地色と主色の面を交互に置くのがリズムのつくり方。\n` : ''}- 使われている面の色: ${(d.surfaces || []).map(s2 => `\`${s2.hex}\`（${s2.n}）`).join(' / ')}

## 部品

${d.cards.length ? `囲み（${d.cards[0].n}箇所で同じ形）

\`\`\`css
.card{
  background: ${d.cards[0].bg};${d.cards[0].border ? `\n  border: ${d.cards[0].border.replace(' ', ' solid ')};` : ''}
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
## 画像

- ${img.n}枚使っている${img.fullBleed ? `。うち ${img.fullBleed} 枚は画面いっぱいに置く` : ''}
- 比率は ${img.ratios.map(r => `${r.ratio}（${r.n}枚）`).join('、') || '一定しない'}
- 角丸 ${img.radius[0]?.px ?? 0}px。${(img.radius[0]?.px ?? 0) === 0 ? '切り抜かず四角のまま置く' : '画像も箱と同じだけ丸める'}

## 守ること

やること

- 地色と主色 \`${main.hex}\` の面を${allFull ? '全幅で' : ''}交互に置く。主色は画面の${Math.round(main.pct)}%を占めるだけ使う。
- 余白 ${pad}px と行間 ${d.body.lh} を先に決めてから中身を入れる。
- 画像は ${img.ratios[0]?.ratio || '16:9'} に統一し、角丸は ${img.radius[0]?.px ?? 0}px。
${d.cards.length ? `- 囲みは ${d.cards[0].border ? `${d.cards[0].border.split(' ')[0]} の線` : '塗り'}＋角丸 ${d.cards[0].radius}px でそろえる。\n` : ''}
やらないこと

- ${d.shadow.length ? '指定以外の影を足さない' : '影をつけない（このサイトには1つもない）'}。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を ${d.body.lh} より詰めない。${rad === 0 ? '角を丸めない。' : ''}
- 中途半端な角丸（${rad}px と ${d.radius[1]?.px ?? 32}px 以外）を混ぜない。
`;

writeFileSync(`s/${slug}.md`, md);

// 詳細ページ（実物のサイズ・色・角丸でそのまま見せる）
writeFileSync(`p/${slug}.html`, detailPage({
  d, palette, md, name, industry, ja, en, alt, ladder, lhOf, cont, read, pad, rad, gaps, main,
  secs, secName, allFull, img,
}));

// 一覧用
const list = existsSync('data.json') ? JSON.parse(readFileSync('data.json', 'utf8')) : [];
const entry = { slug, name, url: d.url, industry, tags: d.tags, accent: main.hex, palette: palette.slice(0, 4).map(c => ({ hex: c.hex, pct: c.pct })) };
const i = list.findIndex(x => x.slug === slug);
i < 0 ? list.push(entry) : (list[i] = entry);
writeFileSync('data.json', JSON.stringify(list, null, 2));

console.log(`s/${slug}.md (${md.split('\n').length}行) ／ p/${slug}.html ／ data.json を更新`);

/** 数値から機械的に一言つくる（書き手の主観を入れない） */
function describe(d, palette, main) {
  const parts = [];
  parts.push(`${palette[0].hex === '#ffffff' ? '白地' : `${palette[0].hex} の地`}に \`${main.hex}\` を大きな面で置く配色。`);
  parts.push(d.shadow.length ? '影を使って浮かせる。' : '影も枠線もほとんど使わない。');
  parts.push(`本文 ${d.body.fs}px・行間 ${d.body.lh}、セクション間 ${d.sectionPad[0]?.px}px。`);
  return parts.join('');
}
