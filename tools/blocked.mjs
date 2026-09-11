#!/usr/bin/env node
/**
 * 測りに行けなかったサイトの一覧を blocked.json にまとめる。
 *
 *   node tools/blocked.mjs
 *
 * 台帳（data.json）に載るのは「測れたサイト」だけなので、
 * ボット避けで断られたサイトや、消えたサイトは、載っていないのか
 * 測れなかったのかが外から分からなかった。その印をここに残す。
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

/** 断られ方を、後から見て分かる言い方に直す */
const kind = why => {
  if (/403|forbidden|拒否|just a moment|attention required/i.test(why)) return 'ボット避けで断られた';
  if (/404|見つかりません|not found/i.test(why)) return 'ページが無い';
  if (/中身が空/.test(why)) return '中身が取れない（JSで組んでいる等）';
  if (/timeout|timed out|ETIMEDOUT|abort/i.test(why)) return 'つながらない';
  if (/測定に失敗/.test(why)) return '測る途中で失敗した';
  return why || '理由不明';
};

export function writeBlocked() {
  const seen = {};
  for (const f of readdirSync('data').filter(x => /^status-.*\.json$/.test(x))) {
    const st = JSON.parse(readFileSync(`data/${f}`, 'utf8'));
    for (const [slug, v] of Object.entries(st)) {
      if (v.state !== 'skip') continue;
      seen[slug] = { slug, url: v.url || null, blocked: true, why: kind(v.why), raw: v.why || null };
    }
  }
  // すでに測れているものは外す（あとから測り直して成功したぶん）
  const out = Object.values(seen)
    .filter(x => !existsSync(`s/${x.slug}.md`))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  writeFileSync('blocked.json', JSON.stringify(out, null, 2));
  return out.length;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(`blocked.json に ${writeBlocked()}件`);
}
