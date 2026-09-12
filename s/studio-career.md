# 採用情報 ふうのデザイン

- 出典: https://studio.inc/career
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / モノトーン
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

#eaeaea の地に `#eaeaea` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #eaeaea;
  --main: #eaeaea;
  --sub: #ffffff;
  --ink: #222222;
  --ink-rev: #000000;
  --on: #eaeaea;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Inter", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.6;
  --container: 704px;
  --read: 840px;
  --section-y: 40px;
  --gap: 20px;
  --radius: 12px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#eaeaea` | 43.3% |
| 主色 | `#222222` | 19.3% |
| 副色 | `#ffffff` | 16.8% |
| 差し色 | `#d3d2d1` | 7.4% |
| 差し色 | `#aaaeaa` | 3.3% |
| 差し色 | `#4d504d` | 2.8% |

文字色は `#222222` / `#000000` / `#ffffff` / `#cecece`。

- 主色 `#eaeaea` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#eaeaea` | 2 | 5 | 1 | 0 |
| `#ffffff` | 14 | 22 | 2 | 1 |
| `#222222` | 2 | 65 | 5 | 0 |
| `#000000` | 1 | 31 | 0 | 0 |
| `#f5f5f5` | 1 | 3 | 0 | 0 |
| `#cecece` | 0 | 1 | 0 | 0 |

- `#eaeaea` は面2箇所・文字5箇所を行き来する。ボタンの地には使っていない。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#eaeaea` |
| `#eaeaea`（地） | `#eaeaea` |
| `#000000` | `#000000` |
| `#f5f5f5` | `#eaeaea` |

```css
.section{ --on:#eaeaea }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Inter
- 欧文: Inter
- ウェイトは 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 | 上の余白 | 下の余白 |
|---|---|---|---|---|
| 大見出し | 48px | 1.4 | 20px | 48px |
| 見出し | 42px | 1.4 | 20px | 95px |
| 小見出し | 20px | 1.4 | — | 20px |
| リード | 18px | 1.4 | — | 20px |
| 本文 | 13px | 1.6 | — | — |
| 補助 | 12px | 1.4 | 64px | 8px |

- 余白は margin ではなく**実際に描かれた間隔**。その要素の上端 − ひとつ上の文字要素の下端（下はその逆）で測っている。行間の余りぶんを含む。
- 「—」は見出しに使われていないサイズ。測る相手がないので数字が出ない。
- 上の余白は、セクションの先頭に来る見出しだとセクションの上下余白（40px）を含む。まとまりの中の間隔は「見出しのまとまり」を見る。

- 本文は 13px・行間 1.6。

## 見出しのまとまり

小さいラベルを見出しの上に置く型を 4箇所で使っている（見出し5箇所のうち）。
「近接」はここの間隔で決まるので、セクションの上下余白より先にこちらをそろえる。

| | 実測 |
|---|---|
| ラベルの文字 | 英字 |
| ラベルのサイズ | 20px |
| ラベルの字間 | -0.05em |
| ラベルの太さ | 600 |
| ラベルの色 | `#222222` |
| ラベル → 見出し | 20px |
| 見出しのサイズ | 45px |
| 見出し → 本文 | — |
| 罫線 | なし |
| 組み方 | **箱で包む**（ラベルと見出しが1つのまとまりとして囲まれている） |

```html
<div class="c-head">
  <p class="c-head__label">SERVICE</p>
  <h2 class="c-head__title">サービス</h2>
</div>
<p>本文…</p>
```

```css
.c-head__label{ font-size:20px; font-weight:600; letter-spacing:-0.05em;
  color:#222222; text-transform:uppercase }
.c-head__title{ font-size:45px; margin-top:20px }
.c-head + *{ margin-top:20 }
```

- ラベルと見出しの間は 20px、見出しと本文の間は —。この2つを同じにしない。

## レイアウト

- コンテンツ幅: 最大 704px／読ませる段は 840px
- セクションの上下余白: 40 / 80 / 96 / 100px（基本は 40px）
- 並びの間隔: 8 / 16 / 20 / 40px
- 角丸: 12px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.6 | 13px / 行間 1.6 |
| 見出し | 48px | 28px / 行間 1.4 |
| セクションの上下余白 | 40px | 28px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 20px | 20px |

- 本文は 13px → 13px、セクション余白は 40px → 28px（PCの70%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 6px; padding: 11px 15px; min-height: 42px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #222222;
  border: 1px solid #222222;
  border-radius: 6px; padding: 11px 15px; min-height: 42px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#000000` | ヒーロー（画像） | 左 | 全幅 |
| 2 | 680px | — | 1カラム・文字だけ | 左 | — |
| 3 | 880px | — | 3カラム・画像あり | 左 | 右（22:78） |
| 4 | 800px | `#f5f5f5` | 6カラム・画像あり | — | 全面 |
| 5 | 1560px | `#222222` | 5カラム・画像あり | 左 | — |
| 6 | 640px | — | 4カラム・画像あり | 左 | — |
| 7 | 1200px | — | 2カラム・画像あり | 左 | 右（47:53） |
| 8 | 2560px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション。
- 使われている面の色: `#ffffff`（9） / `#eaeaea`（2） / `#000000`（1） / `#f5f5f5`（1）
- 見出しは左6／中央1。
- 2カラムの分け方は 22:78 / 47:53。半分ずつには割らない。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 24px 24px;
}
```


## 丸いもの

角丸は 12px だが、**完全な円は別扱い**で 7 箇所ある（32px×4、40px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 41枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（25枚）、3:2（8枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```html
<section class="section">
  <div class="container">
    <div class="c-head">
      <p class="c-head__label">SERVICE</p>
      <h2 class="c-head__title">サービス</h2>
    </div>
    <p>本文…</p>
  </div>
</section>
```

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#eaeaea }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.c-head__label{ font-size:20px; font-weight:600; letter-spacing:-0.05em; color:#222222 }
.c-head__title{ font-size:45px; margin-top:20px }
.c-head + *{ margin-top:20px }

.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:6px;
  padding:11px 15px; min-height:42px;
  font-size:13px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:28px; --gap:20px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#eaeaea` のまま。主色 `#eaeaea` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（12px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
