#!/usr/bin/env node
/**
 * SANKOU! のカテゴリーから、掲載されているサイトの一覧を作る。
 *
 *   node tools/collect.mjs practical
 *   → data/queue-practical.json（slug／名前／URL／カテゴリー）
 *
 * SANKOU! のページそのものは使わない。載っている外部サイトのURLと、
 * そのサイトに付けられたカテゴリー名だけをもらって、計測は各サイトに直接おこなう。
 * 相手のサーバーに負荷をかけないよう、1件ずつ間隔をあけて取る。
 */
import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'node:fs';

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const BASE = 'https://sankoudesign.com';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const get = async (url, asJson) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'ja' } });
      if (r.status === 404) return null;
      if (!r.ok) throw new Error(r.status);
      return asJson ? await r.json() : await r.text();
    } catch (e) { await sleep(1500 * (i + 1)); }
  }
  return null;
};

const catSlug = process.argv[2] || 'practical';
if (!existsSync('data')) mkdirSync('data');

/* ---- カテゴリー名の対応表（slug → 日本語）。1回作れば使い回せる ---- */
let cats = existsSync('data/categories.json') ? JSON.parse(readFileSync('data/categories.json', 'utf8')) : null;
if (!cats) {
  cats = {};
  for (let p = 1; p <= 4; p++) {
    const j = await get(`${BASE}/wp-json/wp/v2/categories?per_page=100&page=${p}&_fields=id,slug,name,parent,count`, true);
    if (!j?.length) break;
    for (const c of j) cats[c.slug] = { id: c.id, name: c.name, parent: c.parent, count: c.count };
    await sleep(400);
  }
  const byId = Object.fromEntries(Object.values(cats).map(c => [c.id, c]));
  for (const c of Object.values(cats)) c.group = c.parent ? (byId[c.parent]?.name || '') : '';
  writeFileSync('data/categories.json', JSON.stringify(cats, null, 2));
  console.log(`カテゴリー ${Object.keys(cats).length}件を data/categories.json に保存`);
}

const target = cats[catSlug];
if (!target) { console.error(`カテゴリー ${catSlug} が見つかりません`); process.exit(1); }
console.log(`${catSlug}（${target.name}）… ${target.count}件`);

/* ---- 一覧をAPIで取る ---- */
const posts = [];
for (let p = 1; p <= 20; p++) {
  const j = await get(`${BASE}/wp-json/wp/v2/posts?categories=${target.id}&per_page=100&page=${p}&_fields=id,slug,title,link,class_list,date`, true);
  if (!j?.length) break;
  posts.push(...j);
  process.stderr.write(`\r一覧 ${posts.length}/${target.count}`);
  await sleep(500);
}
process.stderr.write('\n');

/* ---- 1件ずつ、掲載先のURLを見にいく ---- */
const out = [];
for (const [i, p] of posts.entries()) {
  const html = await get(p.link, false);
  let url = null;
  if (html) {
    const m = /<h1[^>]*class="[^"]*gosite[^"]*"[^>]*>\s*<a[^>]+href="(https?:\/\/[^"]+)"/i.exec(html);
    url = m ? m[1] : null;
  }
  const c = (p.class_list || []).filter(x => x.startsWith('category-')).map(x => x.slice(9));
  out.push({
    slug: p.slug,
    name: p.title.rendered.replace(/&amp;/g, '&').replace(/&#\d+;/g, ''),
    url,
    date: p.date.slice(0, 10),
    cats: c.filter(x => cats[x]).map(x => ({ slug: x, name: cats[x].name, group: cats[x].group })),
    source: p.link,
  });
  process.stderr.write(`\rURL ${i + 1}/${posts.length} ${p.slug}      `);
  await sleep(700);
}
process.stderr.write('\n');

const file = `data/queue-${catSlug}.json`;
writeFileSync(file, JSON.stringify({ category: { slug: catSlug, name: target.name }, items: out }, null, 2));
console.log(`${file} に ${out.length}件（URLが取れなかったもの ${out.filter(x => !x.url).length}件）`);
