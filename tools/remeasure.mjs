#!/usr/bin/env node
/**
 * 台帳の測り方を増やしたあと、載っているサイトを測り直す。
 *
 *   node tools/remeasure.mjs headSpace [同時数]   # その項目が無いサイトだけ測り直す
 *   node tools/remeasure.mjs --all [同時数]       # 全部測り直す
 *
 * ・途中で止めても、次に走らせると続きからになる（項目が入ったものは飛ばす）
 * ・写真と配色（palette）はそのまま。数値だけ測り直して s/*.md を作り直す
 * ・測れなかったサイトは data/remeasure-status.json に残す
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { execFile } from 'node:child_process';

const field = process.argv[2] || 'headSpace';
const LIMIT = Math.max(1, Math.min(4, +(process.argv[3] || 3)));
const STATUS = 'data/remeasure-status.json';
const status = existsSync(STATUS) ? JSON.parse(readFileSync(STATUS, 'utf8')) : {};
const save = () => writeFileSync(STATUS, JSON.stringify(status, null, 2));

const slugs = readdirSync('data')
  .filter(f => /\.json$/.test(f) && !/\.(cats|palette)\.json$/.test(f)
    && !/^(categories|groups|queue-|status-|remeasure-status)/.test(f))
  .map(f => f.replace(/\.json$/, ''))
  .filter(slug => existsSync(`s/${slug}.md`));

const need = slugs.filter(slug => {
  if (status[slug]?.state === 'skip') return false;
  if (field === '--all') return true;
  try { return JSON.parse(readFileSync(`data/${slug}.json`, 'utf8'))[field] === undefined; }
  catch { return false; }
});

console.log(`載っているサイト ${slugs.length}件／測り直す ${need.length}件（同時 ${LIMIT}）`);

const run = (args) => new Promise(res =>
  execFile('node', args, { timeout: 300000, maxBuffer: 1 << 24 }, (err, so, se) =>
    res({ ok: !err, out: (so || '') + (se || '') })));

let done = 0, ok = 0, ng = 0;
const t0 = Date.now();
const queue = [...need];

await Promise.all(Array.from({ length: LIMIT }, async () => {
  while (queue.length) {
    const slug = queue.shift();
    const url = (() => { try { return JSON.parse(readFileSync(`data/${slug}.json`, 'utf8')).url; } catch { return null; } })();
    if (url) {
      const before = readFileSync(`data/${slug}.json`, 'utf8');
      const r = await run(['tools/extract.mjs', url, slug]);
      if (r.ok) {
        const b = await run(['tools/build.mjs', slug, '']);
        if (b.ok) { status[slug] = { state: 'done' }; ok++; }
        else { writeFileSync(`data/${slug}.json`, before); status[slug] = { state: 'skip', why: '作り直しに失敗' }; ng++; }
      } else {
        // 測れなかったら前の数値を戻す。欠けた台帳を置かない
        writeFileSync(`data/${slug}.json`, before);
        status[slug] = { state: 'skip', why: r.out.split('\n').filter(Boolean).pop()?.slice(0, 80) || '測定に失敗' };
        ng++;
      }
      save();
    } else { ng++; }
    done++;
    const per = (Date.now() - t0) / done / 1000;
    process.stderr.write(`\r${done}/${need.length}  済${ok} 不可${ng}  残り約${Math.round(per * (need.length - done) / 60)}分   `);
  }
}));
process.stderr.write('\n');
console.log(`完了: 測り直し ${ok}件／測れず ${ng}件`);
