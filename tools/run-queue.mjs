#!/usr/bin/env node
/**
 * data/queue-<cat>.json のサイトを順に測って、一覧に足していく。
 *
 *   node tools/run-queue.mjs practical [同時数]
 *
 * ・すでに s/<slug>.md があるものは飛ばす（途中で止めても続きから再開できる）
 * ・つながらない／消えているサイトは飛ばす
 * ・ボット避けで拒否されたサイトも飛ばす（拒否画面を測ってしまわないため）
 * 結果は data/status-<cat>.json に残す。
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFile } from 'node:child_process';

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const cat = process.argv[2] || 'practical';
const LIMIT = Math.max(1, Math.min(4, +(process.argv[3] || 3)));
const Q = JSON.parse(readFileSync(`data/queue-${cat}.json`, 'utf8'));
const statusFile = `data/status-${cat}.json`;
const status = existsSync(statusFile) ? JSON.parse(readFileSync(statusFile, 'utf8')) : {};
const save = () => writeFileSync(statusFile, JSON.stringify(status, null, 2));

const BLOCK = /(access denied|forbidden|just a moment|attention required|お探しのページ|ページが見つかりません|404 not found|domain (is )?for sale|このドメイン)/i;

/** 測る前に、生きているか・拒否されないかを軽く見る */
async function alive(url) {
  const ctl = AbortSignal.timeout(20000);
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'ja' }, redirect: 'follow', signal: ctl });
    if (!r.ok) return { ok: false, why: `HTTP ${r.status}` };
    const html = (await r.text()).slice(0, 40000);
    const title = (/<title[^>]*>([\s\S]{0,200}?)<\/title>/i.exec(html)?.[1] || '').trim();
    if (BLOCK.test(title)) return { ok: false, why: `拒否/不在（${title.slice(0, 40)}）` };
    if (html.length < 500) return { ok: false, why: '中身が空' };
    return { ok: true };
  } catch (e) { return { ok: false, why: String(e.message || e).slice(0, 60) }; }
}

const run = (args) => new Promise(res => {
  execFile('sh', args, { timeout: 900000, maxBuffer: 1 << 24 }, (err, so, se) =>
    res({ ok: !err, out: (so || '') + (se || '') }));
});

const items = Q.items.filter(x => x.url);
let done = 0, added = 0, skipped = 0;
const t0 = Date.now();

async function work(it) {
  if (existsSync(`s/${it.slug}.md`)) { status[it.slug] = { state: 'done' }; skipped++; return; }
  if (status[it.slug]?.state === 'skip') { skipped++; return; }
  const a = await alive(it.url);
  if (!a.ok) { status[it.slug] = { state: 'skip', why: a.why, url: it.url }; skipped++; save(); return; }
  writeFileSync(`data/${it.slug}.cats.json`, JSON.stringify(it.cats));
  const r = await run(['tools/add.sh', it.url, it.slug, '']);
  if (r.ok && existsSync(`s/${it.slug}.md`)) { status[it.slug] = { state: 'done' }; added++; }
  else { status[it.slug] = { state: 'skip', why: '測定に失敗', url: it.url }; skipped++; }
  save();
}

const queue = [...items];
await Promise.all(Array.from({ length: LIMIT }, async () => {
  while (queue.length) {
    const it = queue.shift();
    await work(it);
    done++;
    const per = (Date.now() - t0) / done / 1000;
    process.stderr.write(`\r${done}/${items.length}  追加${added} 飛ばし${skipped}  残り約${Math.round(per * (items.length - done) / 60)}分   `);
  }
}));
process.stderr.write('\n');
console.log(`完了: 追加 ${added}件／飛ばし ${skipped}件`);
