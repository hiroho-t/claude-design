#!/usr/bin/env node
/**
 * 台帳の測り方を増やしたあと、載っているサイトを測り直す。
 *
 *   node tools/remeasure.mjs headSpace [同時数]   # その欄が無いサイトだけ測り直す
 *   node tools/remeasure.mjs --all [同時数]       # 全部測り直す
 *   node tools/remeasure.mjs --build-only         # 測らずに s/*.md と data.json を作り直すだけ
 *
 * 2段に分けてある。
 *   1段目 … tools/extract.mjs を同時に走らせて数値だけ取る（相手のサーバーに当たる。同時3まで）
 *   2段目 … tools/build.mjs を1件ずつ走らせて s/*.md・p/*.html・data.json を作る
 * build を同時に走らせない理由：data.json を全員で読み書きするので、
 * 同時に走らせると data.json が壊れる（2026-09-12に実際に壊した）。
 *
 * ・途中で止めても、次に走らせると続きからになる
 * ・測れなかったサイトは前の数値に戻す。欠けた台帳を置かない
 * ・写真と配色（palette）はそのまま。数値だけ測り直す
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { execFile } from 'node:child_process';

const field = process.argv[2] || 'headSpace';
const LIMIT = Math.max(1, Math.min(4, +(process.argv[3] || 3)));
const STATUS = 'data/remeasure-status.json';
const status = existsSync(STATUS) ? JSON.parse(readFileSync(STATUS, 'utf8')) : {};
const save = () => writeFileSync(STATUS, JSON.stringify(status, null, 2));
const read = f => JSON.parse(readFileSync(f, 'utf8'));

const listed = readdirSync('data')
  .filter(f => /\.json$/.test(f) && !/\.(cats|palette)\.json$/.test(f)
    && !/^(categories|groups|queue-|status-|remeasure-status)/.test(f))
  .map(f => f.replace(/\.json$/, ''))
  .filter(slug => existsSync(`s/${slug}.md`));

const run = (args) => new Promise(res =>
  execFile('node', args, { timeout: 300000, maxBuffer: 1 << 24 }, (err, so, se) =>
    res({ ok: !err, out: ((so || '') + (se || '')).trim() })));

const buildOnly = field === '--build-only';

/* ---- 1段目：測る ---- */
let measured = [];
if (!buildOnly) {
  const need = listed.filter(slug => {
    if (status[slug]?.state === '測れない') return false;     // 何度当たっても駄目だったもの
    if (field === '--all') return true;
    try { return read(`data/${slug}.json`)[field] === undefined; } catch { return false; }
  });
  console.log(`載っているサイト ${listed.length}件／測り直す ${need.length}件（同時 ${LIMIT}）`);

  const queue = [...need];
  let done = 0, ok = 0, ng = 0;
  const t0 = Date.now();
  await Promise.all(Array.from({ length: LIMIT }, async () => {
    while (queue.length) {
      const slug = queue.shift();
      const before = readFileSync(`data/${slug}.json`, 'utf8');
      const url = (() => { try { return JSON.parse(before).url; } catch { return null; } })();
      if (url) {
        const r = await run(['tools/extract.mjs', url, slug]);
        if (r.ok) { status[slug] = { state: '測った' }; measured.push(slug); ok++; }
        else {
          writeFileSync(`data/${slug}.json`, before);          // 前の数値に戻す
          status[slug] = { state: '測れない', why: r.out.split('\n').filter(Boolean).pop()?.slice(0, 80) || '測定に失敗' };
          ng++;
        }
        save();
      } else ng++;
      done++;
      const per = (Date.now() - t0) / done / 1000;
      process.stderr.write(`\r測定 ${done}/${need.length}  済${ok} 不可${ng}  残り約${Math.round(per * (need.length - done) / 60)}分   `);
    }
  }));
  process.stderr.write('\n');
  console.log(`測定: ${ok}件／測れず ${ng}件`);
}

/* ---- 2段目：作り直す（1件ずつ。data.json を全員で触るため） ---- */
const toBuild = buildOnly ? listed : listed.filter(s => measured.includes(s) || status[s]?.state === '測った');
console.log(`作り直す ${toBuild.length}件`);
let bok = 0, bng = [];
for (const [i, slug] of toBuild.entries()) {
  const b = await run(['tools/build.mjs', slug, '']);
  // 測れなかった記録は上書きしない（--build-only で消してしまわないため）
  if (b.ok) { if (status[slug]?.state !== '測れない') status[slug] = { state: 'done' }; bok++; }
  else { status[slug] = { state: '作り直せない', why: b.out.split('\n').filter(Boolean).pop()?.slice(0, 80) }; bng.push(slug); }
  if (i % 20 === 0) save();
  process.stderr.write(`\r作り直し ${i + 1}/${toBuild.length}  済${bok} 不可${bng.length}   `);
}
process.stderr.write('\n');
save();

// 作った data.json が読めるか、最後にかならず見る
try { const l = read('data.json'); console.log(`data.json は読めます（${l.length}件）`); }
catch (e) { console.error(`data.json が壊れています: ${e.message}`); process.exitCode = 1; }
console.log(`完了: 作り直し ${bok}件${bng.length ? `／失敗 ${bng.join(' ')}` : ''}`);
