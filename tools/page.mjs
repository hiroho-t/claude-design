/**
 * 詳細ページ p/<slug>.html を組み立てる。
 * 表や数字の羅列ではなく、実物のサイズ・色・角丸でそのまま見せるのが狙い。
 */
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const PANGRAM = 'あのイーハトーヴォのすきとおった風';
const EXT = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3h7v7h-1.5V5.56L5.06 12 4 10.94 10.44 4.5H6V3Z"/><path d="M3 5h2v1.5H4.5v5H10V11h1.5v2H3V5Z"/></svg>';
const REPO = 'https://github.com/hiroho-t/jp-styles/blob/main';

export function detailPage({ d, palette, md, name, industry, ja, en, alt, ladder, lhOf, cont, read, pad, rad, gaps, main, secs = [], secName, allFull, img = {}, usage = [], mob = {}, usageNote, sidePad, circles = { n: 0, sizes: [] }, surfaces = [], inkRev }) {
  const font = alt ? alt[0] : 'Noto Sans JP';
  const gf = [...new Set([font, 'Noto Sans JP'])].map(f => `family=${f.replace(/ /g, '+')}:wght@400;500;700`).join('&');
  const roles = ['地', '主色', '副色', '差し色', '差し色'];
  // 白抜きの部品は白地だと見えないので、主色を敷いて見せる
  const lum = h => { if (!/^#[0-9a-f]{6}$/i.test(h || '')) return 1;
    const [r, g, bl] = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255);
    return .2126 * r + .7152 * g + .0722 * bl; };
  const use = {
    地: 'ページ全体の下地',
    主色: '面で置く色。ボタンや線だけに使うと別物になる',
    副色: '主色を受ける面。区切りや帯に',
    差し色: '部分的なアクセント',
  };

  const colorCards = palette.map((c, i) => {
    const role = roles[i] || '差し色';
    return `<div class="c">
      <div class="chip" style="background:${esc(c.hex)}"></div>
      <div class="cmeta">
        <p class="crole">${esc(role)}<span>${c.pct}%</span></p>
        <button class="hex" data-copy="${esc(c.hex)}">${esc(c.hex)}</button>
        <p class="cuse">${esc(use[role])}</p>
      </div>
    </div>`;
  }).join('');

  const specimen = ladder.map(s => `<div class="sp">
      <p class="spmeta">${esc(s.role)}<span>${s.px}px${lhOf(s.px) ? ` / 行間 ${lhOf(s.px)}` : ''}</span></p>
      <p class="spdemo" style="font-size:${s.px}px;line-height:${lhOf(s.px) || 1.5}">${PANGRAM}</p>
    </div>`).join('');

  const spacing = [
    ['コンテンツ幅', `${cont}px`, `<div class="pv"><span style="width:100%;max-width:${Math.min(cont / 4, 260)}px"></span></div>`],
    read ? ['読ませる段の幅', `${read}px`, `<div class="pv"><span style="width:${Math.min(read / 4, 260)}px"></span></div>`] : null,
    ['セクションの上下余白', `${pad}px`, `<div class="pv"><span style="height:${Math.min(pad, 160)}px;width:3px"></span></div>`],
    ['並びの間隔', `${gaps.join(' / ')}px`, `<div class="pv gaps">${gaps.map(g => `<span style="width:${g}px"></span>`).join('')}</div>`],
    ['角丸', `${rad}px${d.radius[1] ? `（大きな面は ${d.radius[1].px}px）` : ''}`, `<div class="pv"><b style="border-radius:${rad}px"></b>${d.radius[1] ? `<b style="border-radius:${d.radius[1].px}px"></b>` : ''}</div>`],
    ['影', d.shadow.length ? esc(d.shadow[0].css) : 'なし', d.shadow.length ? `<div class="pv"><b style="box-shadow:${esc(d.shadow[0].css)};border-color:transparent"></b></div>` : '<div class="pv"><b></b></div>'],
    ['画面幅の切り替え', d.bp.map(b => b.px).join(' / ') + 'px', ''],
  ].filter(Boolean).map(([k, v, pv]) => `<tr><th>${k}</th><td>${v}</td><td class="pvcell">${pv}</td></tr>`).join('');

  const btns = d.buttons.map((b, i) => {
    const onDark = b.color && /^#/.test(b.color) && lum(b.color) > .7;
    return `<div class="btnrow" style="background:${onDark ? esc(main.hex) : 'var(--field)'};color:${onDark ? 'rgba(255,255,255,.72)' : 'var(--sub)'}">
      <span class="demo" style="background:${esc(b.bg)};color:${esc(b.color)};${b.border ? `border:${esc(b.border.replace(' ', ' solid '))};` : ''}border-radius:${esc(b.radius)};padding:${esc(b.pad)};min-height:${b.h}px;font-size:${b.fs}px;font-weight:${esc(b.weight)};letter-spacing:${esc(b.ls)}">${i ? 'もっと見る' : 'お問い合わせ'}</span>
      <code>${esc(b.bg)} / ${b.fs}px / ${esc(b.weight)} / 角丸 ${esc(b.radius)}</code>
    </div>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(name)} のスタイル｜日本のサイトのデザインを DESIGN.md に</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${gf}&display=swap" rel="stylesheet">
<style>
  :root{ --bg:#fff; --ink:#141414; --sub:#767676; --line:#e6e4e2; --field:#f4f3f1; --r:6px }
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--ink);font-family:"Noto Sans JP",sans-serif;line-height:1.9;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .top{padding:20px 32px;border-bottom:1px solid var(--line);font-size:12px;color:var(--sub)}
  .top a{text-decoration:none} .top a:hover{text-decoration:underline}

  .wrap{display:grid;grid-template-columns:minmax(0,1fr) 400px;gap:40px;padding:32px;align-items:start}
  section{padding:28px 0;border-top:1px solid var(--line)}
  section:first-of-type{border-top:0;padding-top:0}
  h2{font-size:12px;font-weight:700;letter-spacing:.16em;color:var(--sub);margin-bottom:18px}
  h1{font-size:24px;font-weight:700;line-height:1.5}
  .lead{margin-top:10px;font-size:14px;color:var(--sub);max-width:640px}
  .shot{display:block;border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-bottom:22px}
  .shot img{width:100%;display:block}
  .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
  .tags span{font-size:11px;color:var(--sub);border:1px solid var(--line);border-radius:99px;padding:3px 10px}
  .src{margin-top:16px}
  .src a{display:inline-flex;align-items:center;gap:8px;height:38px;padding:0 14px;font-size:13px;
    border:1px solid var(--line);border-radius:var(--r);text-decoration:none;color:var(--ink)}
  .src a:hover{background:var(--field)}
  .src svg{width:14px;height:14px;fill:currentColor;flex:none}
  .src span{color:var(--sub);font-size:11px}

  .ratio{display:flex;height:40px;border:1px solid var(--line);border-radius:6px;overflow:hidden;margin-bottom:20px}
  .ratio i{box-shadow:1px 0 0 var(--line) inset} .ratio i:first-child{box-shadow:none}
  .colors{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}
  .c{display:flex;gap:12px;border:1px solid var(--line);border-radius:8px;padding:12px}
  .chip{flex:0 0 44px;height:44px;border-radius:6px;border:1px solid var(--line)}
  .crole{font-size:12px;font-weight:700;line-height:1.6;display:flex;gap:8px;align-items:baseline}
  .crole span{font-weight:400;color:var(--sub);font-size:11px}
  .hex{font:inherit;font-size:12px;font-family:ui-monospace,Menlo,monospace;background:var(--field);
    border:0;border-radius:4px;padding:1px 7px;cursor:pointer;color:var(--ink);margin:2px 0}
  .hex:hover{background:#e8e6e3}
  .cuse{font-size:11px;color:var(--sub);line-height:1.7}

  .fonts{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:24px}
  .fonts div{border:1px solid var(--line);border-radius:8px;padding:12px 14px}
  .fonts p{font-size:11px;color:var(--sub);letter-spacing:.1em}
  .fonts strong{display:block;font-size:14px;margin-top:4px;line-height:1.6}
  .fonts em{font-style:normal;font-size:11px;color:var(--sub)}
  .sp{padding:14px 0;border-bottom:1px dashed var(--line)}
  .sp:last-child{border-bottom:0}
  .spmeta{font-size:11px;color:var(--sub);display:flex;gap:10px;margin-bottom:2px}
  .spdemo{font-family:"${esc(font)}","Noto Sans JP",sans-serif;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}

  table{width:100%;border-collapse:collapse;font-size:13px}
  th{text-align:left;font-weight:500;color:var(--sub);width:180px;vertical-align:top;padding:12px 0}
  td{padding:12px 0;vertical-align:top} td:first-of-type{width:220px}
  tr+tr th,tr+tr td{border-top:1px solid var(--line)}
  .pv span{display:block;background:var(--ink);height:3px}
  .pv.gaps{display:flex;gap:6px;align-items:center}
  .pv.gaps span{height:20px;background:var(--field);border:1px solid var(--line)}
  .pv b{display:inline-block;width:56px;height:36px;border:1px solid var(--ink);margin-right:8px}

  .btnrow{display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding:20px;border-radius:8px;margin-bottom:10px}
  .btnrow:last-child{margin-bottom:0}
  .btnrow .demo{display:inline-flex;align-items:center;justify-content:center;font-family:inherit}
  .btnrow code{font-size:11px;font-family:ui-monospace,Menlo,monospace;color:inherit}

  aside{position:sticky;top:32px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff}
  .ahead{display:flex;gap:8px;padding:12px;border-bottom:1px solid var(--line);align-items:center}
  .ahead p{font-size:12px;font-weight:700;flex:1}
  .ahead button,.ahead a{height:32px;padding:0 12px;display:inline-flex;align-items:center;font:inherit;font-size:11px;
    font-weight:700;border-radius:var(--r);cursor:pointer;text-decoration:none;border:1px solid var(--ink);background:var(--ink);color:#fff}
  .ahead a{background:transparent;color:var(--ink);border-color:var(--line);font-weight:500}
  .ahead button.done{background:#fff;color:var(--ink)}
  pre{margin:0;padding:14px;max-height:62vh;overflow:auto;font-size:11px;line-height:1.8;
    font-family:ui-monospace,Menlo,monospace;white-space:pre-wrap;word-break:break-word;color:#333}

  .sub{font-size:12px;font-weight:700;margin:26px 0 8px}
  .usage th{width:auto;display:flex;align-items:center;gap:8px;color:var(--ink)}
  .usage th i{width:14px;height:14px;border-radius:3px;border:1px solid var(--line);flex:none}
  .usage td{width:auto;text-align:right;font-family:ui-monospace,Menlo,monospace;font-size:12px}
  .usage tr:first-child td,.usage tr:first-child th{color:var(--sub);font-size:11px;font-weight:400}
  .note{font-size:12px;color:var(--sub);margin:12px 0}
  .note code{font-family:ui-monospace,Menlo,monospace;font-size:11px}
  .secs{display:flex;flex-direction:column;gap:3px}
  .sec{display:flex;align-items:center;gap:12px;padding:0 14px;border-radius:4px;font-size:12px;overflow:hidden}
  .secno{opacity:.6;font-size:11px;width:16px;flex:none}
  .secname{font-weight:700}
  .sech{margin-left:auto;opacity:.65;font-size:11px;font-family:ui-monospace,Menlo,monospace}
  .stage{padding:28px;border-radius:8px;display:flex;align-items:center;justify-content:center}
  .carddemo{width:min(320px,100%);display:flex;flex-direction:column;gap:10px}
  .carddemo i{display:block;height:8px;border-radius:2px}
  .chipdemo{display:inline-flex;align-items:center;justify-content:center;line-height:1.6}
  .imgs{display:flex;gap:16px;flex-wrap:wrap}
  .imgs div{width:150px}
  .imgs span{display:block;width:100%;background:var(--field);border:1px solid var(--line)}
  .imgs em{display:block;font-style:normal;font-size:11px;color:var(--sub);margin-top:6px}

  footer{border-top:1px solid var(--line);padding:28px 32px 56px;font-size:12px;color:var(--sub)}
  footer p{max-width:720px} footer a{color:var(--ink)}
  @media (max-width:900px){
    .wrap{grid-template-columns:1fr;gap:28px;padding:24px 20px}
    aside{position:static} .top,footer{padding-left:20px;padding-right:20px}
  }
</style>
</head>
<body>

<nav class="top"><a href="../index.html">一覧</a> ／ ${esc(name)}</nav>

<div class="wrap">
<main>
  <section>
    <a class="shot" href="${esc(d.url)}" target="_blank" rel="noopener"><img src="../shot/${esc(d.slug)}.jpg" alt="${esc(name)} のトップページ"></a>
    <h1>${esc(name)}</h1>
    <p class="lead">${esc(describeLead(d, palette, main))}</p>
    <div class="tags">${d.tags.map(t => `<span>${esc(t)}</span>`).join('')}${industry ? `<span>${esc(industry)}</span>` : ''}</div>
    <p class="src"><a href="${esc(d.url)}" target="_blank" rel="noopener">${EXT}${esc(d.url.replace(/^https?:\/\//, '').replace(/\/$/, ''))}<span>参考サイトを開く</span></a></p>
  </section>

  <section>
    <h2>配色</h2>
    <div class="ratio">${palette.map(c => `<i style="background:${esc(c.hex)};flex:${c.pct}"></i>`).join('')}</div>
    <div class="colors">${colorCards}</div>
    <p class="cuse" style="margin-top:14px">文字色は ${d.ink.map(c => `<code>${esc(c.hex)}</code>`).join(' / ')}。</p>
    ${usage.length ? `<h3 class="sub">どこに使っているか（箇所数）</h3>
    <table class="usage">
      <tr><th>色</th><td>面</td><td>文字</td><td>枠線</td><td>ボタンの地</td></tr>
      ${usage.map(u => `<tr><th><i style="background:${esc(u.hex)}"></i><code>${esc(u.hex)}</code></th>
        <td>${u.面}</td><td>${u.文字}</td><td>${u.枠}</td><td>${u.ボタン}</td></tr>`).join('')}
    </table>
    <p class="note"><code>${esc(main.hex)}</code> は${esc(usageNote ? usageNote() : '')}</p>` : ''}
  </section>

  <section>
    <h2>文字</h2>
    <div class="fonts">
      <div><p>和文</p><strong>${esc(ja?.family || '')}</strong>${alt ? `<em>有料。無料で近いのは ${esc(alt.join('、'))}</em>` : ''}</div>
      ${en ? `<div><p>欧文</p><strong>${esc(en.family)}</strong></div>` : ''}
      <div><p>本文</p><strong>${d.body.fs}px / 行間 ${d.body.lh}</strong><em>この見本は ${esc(font)} で表示しています</em></div>
    </div>
    ${specimen}
  </section>

  <section>
    <h2>余白とかたち</h2>
    <table>${spacing}</table>
  </section>

  ${d.buttons.length ? `<section>
    <h2>ボタン</h2>
    ${btns}
  </section>` : ''}

  ${secs.length ? `<section>
    <h2>ページの組み立て</h2>
    <p class="note">上から順に、実際に並んでいたセクション。高さの比率もそのまま。</p>
    <div class="secs">${secs.map((x, i) => {
      const hh = Math.max(26, Math.min(120, Math.round(x.h / 18)));
      const bg = x.bg || palette[0].hex;
      const dark = lum(bg) < .6;
      return `<div class="sec" style="height:${hh}px;background:${esc(bg)};color:${dark ? '#fff' : 'var(--ink)'};
        border:1px solid ${dark ? 'transparent' : 'var(--line)'}">
        <span class="secno">${i + 1}</span>
        <span class="secname">${esc(secName(x, i))}</span>
        <span class="sech">${x.h}px${x.bg ? ` ・ ${esc(x.bg)}` : ''}</span>
      </div>`;
    }).join('')}</div>
    <p class="note">全${secs.length}セクション${allFull ? '、すべて全幅' : ''}。</p>
    ${surfaces.length > 1 ? `<h3 class="sub">面と、その上に置く線・文字</h3>
    <table class="usage">
      <tr><th>面</th><td>使用箇所</td><td>線と文字</td></tr>
      ${surfaces.map(s2 => `<tr>
        <th><i style="background:${esc(s2.hex)}"></i><code>${esc(s2.hex)}</code></th>
        <td>${s2.n}</td>
        <td><i style="background:${esc(s2.on)};display:inline-block;width:12px;height:12px;border-radius:3px;border:1px solid var(--line);vertical-align:-2px;margin-right:6px"></i><code>${esc(s2.on)}</code></td>
      </tr>`).join('')}
    </table>
    <p class="note">線と文字の色は固定ではなく、乗っている面で入れ替える。</p>` : ''}
  </section>` : ''}

  ${(d.cards.length || d.chips.length) ? `<section>
    <h2>部品</h2>
    ${d.cards.length ? (() => { const c = d.cards[0];
      const light = (c.bg === 'transparent' ? (c.border ? lum(c.border.split(' ')[1] || '#000000') : 1) : lum(c.bg)) > .7;
      return `<div class="stage" style="background:${light ? esc(main.hex) : 'var(--field)'}">
        <div class="carddemo" style="background:${esc(c.bg)};${c.border ? `border:${esc(c.border.replace(' ', ' solid '))};` : ''}
          border-radius:${c.radius}px;padding:${esc(c.pad.replace('/', 'px '))}px;${c.shadow ? `box-shadow:${esc(c.shadow)};` : ''}">
          <i style="background:${light ? 'rgba(255,255,255,.5)' : 'var(--line)'}"></i>
          <i style="width:60%;background:${light ? 'rgba(255,255,255,.5)' : 'var(--line)'}"></i>
        </div>
      </div>
      <p class="note">同じ形が ${c.n} 箇所。角丸 ${c.radius}px${c.border ? ` ／ ${esc(c.border)} の線` : ''}${c.shadow ? '' : ' ／ 影なし'}</p>` })() : '<p class="note">囲みらしい繰り返しの箱はなかった。枠で囲まず、余白だけで区切っている。</p>'}
    ${circles.n ? `<p class="note">角丸は ${rad}px だが、完全な円は別扱いで ${circles.n} 箇所（${circles.sizes.map(c => `${c.px}px×${c.n}`).join('、')}）。角を丸めないことと、円のモチーフは両立する。</p>` : ''}
    ${d.chips.length ? (() => { const c = d.chips[0]; const light = lum(c.bg === 'transparent' ? '#ffffff' : c.bg) > .7;
      return `<div class="stage" style="background:${light ? 'var(--field)' : '#fff'}">
        <span class="chipdemo" style="background:${esc(c.bg)};color:${esc(c.color)};border-radius:${esc(c.radius)};
          padding:${esc(c.pad)};font-size:${c.fs}px;${c.border ? `border:${esc(c.border)} solid currentColor;` : ''}">タグ</span>
      </div>
      <p class="note">角丸 ${esc(c.radius)} ／ ${c.fs}px</p>` })() : ''}
  </section>` : ''}

  ${mob.bodyFs ? `<section>
    <h2>PCとスマホ</h2>
    <p class="note">同じサイトを390px幅で測り直した値。</p>
    <table>
      <tr><th></th><td>PC 1440px</td><td>スマホ 390px</td></tr>
      <tr><th>本文</th><td>${d.body.fs}px${d.body.lh ? ` / 行間 ${d.body.lh}` : ''}</td><td>${mob.bodyFs}px${mob.bodyLh ? ` / 行間 ${mob.bodyLh}` : ''}</td></tr>
      ${mob.h1 ? `<tr><th>見出し</th><td>${ladder[0]?.px}px</td><td>${mob.h1.fs}px</td></tr>` : ''}
      <tr><th>セクションの上下余白</th><td>${pad}px</td><td>${mob.pad ?? '—'}px</td></tr>
      <tr><th>左右の余白</th><td>—</td><td>${sidePad}px</td></tr>
      <tr><th>並びの間隔</th><td>${gaps[Math.floor(gaps.length / 2)] ?? 16}px</td><td>${mob.gap ?? '—'}px</td></tr>
    </table>
    <p class="note">文字サイズの段は ${mob.sizes.join(' / ')}px。${mob.pad ? `セクション余白はPCの${Math.round(mob.pad / pad * 100)}%まで詰める。` : ''}</p>
  </section>` : ''}

  ${img.n ? `<section>
    <h2>画像</h2>
    <div class="imgs">${(img.ratios || []).map(r => { const [a, b] = r.ratio.split(':').map(Number);
      return `<div><span style="aspect-ratio:${a}/${b};border-radius:${img.radius?.[0]?.px ?? 0}px"></span>
        <em>${esc(r.ratio)}・${r.n}枚</em></div>`; }).join('')}</div>
    <p class="note">${img.n}枚${img.fullBleed ? `。うち ${img.fullBleed} 枚は画面いっぱいに置く` : ''}。角丸 ${img.radius?.[0]?.px ?? 0}px。</p>
  </section>` : ''}
</main>

<aside>
  <div class="ahead">
    <p>DESIGN.md</p>
    <button id="copy">mdをコピー</button>
    <a href="${REPO}/s/${esc(d.slug)}.md" target="_blank" rel="noopener">mdファイル</a>
  </div>
  <pre id="md">${esc(md)}</pre>
</aside>
</div>

<footer>
  <p>掲載しているのは、各サイトを計測して得た色・寸法などの数値と、参考として添えたスクリーンショットです。
     文言・写真・ロゴは含めていません。著作権は各サイトの権利者に帰属します。
     スクリーンショットの掲載を希望されない場合はご連絡ください、確認のうえ削除します。</p>
  <p style="margin-top:12px">運営：<a href="https://startwith.org/" target="_blank" rel="noopener">合同会社StartWith</a></p>
</footer>

<script>
const flash = (el, msg) => { const b = el.textContent; el.textContent = msg; el.classList.add('done');
  setTimeout(() => { el.textContent = b; el.classList.remove('done'); }, 1500); };
document.getElementById('copy').addEventListener('click', async e => {
  try { await navigator.clipboard.writeText(document.getElementById('md').textContent); flash(e.target, 'コピーしました'); }
  catch { flash(e.target, 'コピーできません'); }
});
document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); flash(b, 'コピー'); } catch {}
}));
</script>
</body>
</html>`;
}

function describeLead(d, palette, main) {
  return `${palette[0].hex === '#ffffff' ? '白地' : palette[0].hex + ' の地'}に ${main.hex} を大きな面で置く配色。`
    + (d.shadow.length ? '影を使って浮かせる。' : '影も枠線もほとんど使わない。')
    + `本文 ${d.body.fs}px・行間 ${d.body.lh}、セクション間 ${d.sectionPad[0]?.px}px。`;
}
