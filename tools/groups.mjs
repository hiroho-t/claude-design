#!/usr/bin/env node
/**
 * SANKOU! の「カテゴリ検索」の大分類（タイプ／業種･ジャンル／…）を取り込む。
 *   node tools/groups.mjs
 * → data/categories.json の各カテゴリーに group と order を足す
 */
import { readFileSync, writeFileSync } from 'node:fs';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

// サイドバーが省略されずに入っている個別ページから取る
const html = await fetch('https://sankoudesign.com/web/takedahp/', { headers: { 'User-Agent': UA } }).then(r => r.text());
const side = /<div id="outersidebar"[\s\S]*/i.exec(html)?.[0] || html;

const groups = [];
// 見出しのない最初のかたまり（ノーコードなど）
const first = /<p class="title">[\s\S]*?<ul class="category">([\s\S]*?)<\/ul>/i.exec(side);
if (first) groups.push({ name: '制作ツール・特徴', slugs: [...first[1].matchAll(/\/category\/([a-z0-9-]+)\//g)].map(m => m[1]) });
for (const m of side.matchAll(/<div class="category_box">\s*<h2>([\s\S]*?)<\/h2>([\s\S]*?)(?=<div class="category_box">|<\/div>\s*<\/div>\s*<footer|$)/gi)) {
  groups.push({
    name: m[1].replace(/<[^>]*>/g, '').trim(),
    slugs: [...m[2].matchAll(/\/category\/([a-z0-9-]+)\//g)].map(x => x[1]),
  });
}

const cats = JSON.parse(readFileSync('data/categories.json', 'utf8'));
let order = 0;
for (const g of groups) for (const s of g.slugs) {
  if (!cats[s]) continue;
  cats[s].group = g.name;
  cats[s].order = order++;
}
for (const c of Object.values(cats)) if (c.order == null) { c.group = c.group || 'その他'; c.order = 9999; }
writeFileSync('data/categories.json', JSON.stringify(cats, null, 2));
writeFileSync('data/groups.json', JSON.stringify(groups.map(g => g.name), null, 2));
console.log(groups.map(g => `${g.name}（${g.slugs.length}）`).join(' / '));
