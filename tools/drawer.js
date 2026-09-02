// 一覧と同じ分類を出す。押すと一覧をその分類で開く。
(async () => {
  const KEEP_GROUPS = ['タイプ', '業種･ジャンル', '色･配色', '書体'];
  const KEEP_SLUGS = new Set(['jumprate','responsive','1column','2column','bold-headings','thin-headings','whitespace','dividers','card-list']);
  const TAG_GROUP = '特徴･スタイル';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const menubtn = document.getElementById('menubtn'), catnav = document.getElementById('catnav'), catlist = document.getElementById('catlist');
  const openNav = on => { menubtn.setAttribute('aria-expanded', on); catnav.hidden = !on; };
  menubtn.addEventListener('click', () => openNav(menubtn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') openNav(false); });
  document.addEventListener('click', e => {
    if (catnav.hidden) return;
    if (!catnav.contains(e.target) && !menubtn.contains(e.target)) openNav(false);
  });
  try {
    const [items, CATS, GROUPS] = await Promise.all([
      fetch('../data.json').then(r => r.json()),
      fetch('../categories.json').then(r => r.json()).catch(() => ({})),
      fetch('../groups.json').then(r => r.json()).catch(() => []),
    ]);
    const shown = c => KEEP_GROUPS.includes(CATS[c.slug]?.group) || KEEP_SLUGS.has(c.slug);
    const n = {};
    for (const x of items) {
      for (const c of (x.cats || []).filter(shown)) (n[c.slug] ||= { name: c.name, n: 0, g: CATS[c.slug]?.group, o: CATS[c.slug]?.order }).n++;
      for (const t of x.tags || []) (n['tag:' + t] ||= { name: t, n: 0, g: TAG_GROUP, o: -1 }).n++;
    }
    const bucket = {};
    for (const [slug, c] of Object.entries(n)) (bucket[c.g || 'その他'] ||= []).push({ slug, ...c, o: c.o ?? 9999 });
    const order = [...GROUPS, 'その他'].filter((v, i, a) => a.indexOf(v) === i);
    catlist.innerHTML = `<a href="../index.html">すべて<b>${items.length}</b></a>`
      + order.filter(g => bucket[g]?.length).map(g => `<p class="catnav__g">${esc(g)}</p>`
        + bucket[g].sort((a, b) => a.o - b.o || b.n - a.n)
          .map(c => `<a href="../index.html#c=${encodeURIComponent(c.slug)}">${esc(c.name)}<b>${c.n}</b></a>`).join('')).join('');
  } catch (e) { catlist.innerHTML = '<p class="catnav__g">読み込めませんでした</p>'; }
})();
