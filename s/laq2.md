# LAQ2（ラクツ） ふうのデザイン

- 出典: https://laq2.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／生活用品･雑貨･インテリア･家具／レスポンシブ

白地に `#1e3044` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.71、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1e3044;
  --sub: #f2eee9;
  --ink: #000000;
  --ink-rev: #1c1c1c;
  --on: #1e3044;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "noto-sans-cjk-jp", sans-serif;
  --font-en: "noto-sans-cjk-jp", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.71;
  --container: 952px;
  --read: 960px;
  --section-y: 152px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 56.4% |
| 主色 | `#212121` | 17.9% |
| 副色 | `#f2eee9` | 13% |
| 差し色 | `#d3d8d4` | 3.2% |
| 差し色 | `#1e3044` | 1.5% |

文字色は `#000000` / `#1c1c1c` / `#ffffff` / `#1b2538`。

- 主色 `#1e3044` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 3 | 41 | 0 | 0 |
| `#212121` | 2 | 21 | 0 | 0 |
| `#f2eee9` | 1 | 0 | 0 | 0 |
| `#ed6a10` | 1 | 0 | 0 | 0 |
| `#bf0000` | 1 | 0 | 0 | 0 |
| `#000000` | 2 | 53 | 2 | 1 |
| `#1b2538` | 0 | 5 | 5 | 0 |

- `#1e3044` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1e3044` |
| `#212121` | `#1c1c1c` |
| `#f2eee9` | `#1e3044` |
| `#ed6a10` | `#1c1c1c` |

```css
.section{ --on:#1e3044 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1c1c1c; --on:#1c1c1c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1c1c1c }
.section--main .btn--fill{ background:#1c1c1c; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: noto-sans-cjk-jp
- 欧文: noto-sans-cjk-jp
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.67 |
| 見出し | 30px | — |
| 小見出し | 24px | — |
| リード | 16px | — |
| 本文 | 14px | 1.71 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.71。

## レイアウト

- コンテンツ幅: 最大 952px／読ませる段は 960px
- セクションの上下余白: 152 / 80 / 40 / 52px（基本は 152px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 992 / 768 / 767 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.71 | 12px / 行間 2 |
| 見出し | 36px | 30px / 行間 1.73 |
| セクションの上下余白 | 152px | 80px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 12px、セクション余白は 152px → 80px（PCの53%）。
- 文字サイズの段は 30 / 20 / 18 / 16 / 12px。

## ボタン

```css
.btn{
  background: #000000; color: #ffffff;
  border-radius: 80px; padding: 28px 28px; min-height: 80px;
  font-size: 20px; font-weight: 200; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | — |
| 2 | 1960px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1780px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1780px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 900px | `#f2eee9` | 2カラム | 左 | — |
| 6 | 700px | — | 1カラム・文字だけ | 左 | — |
| 7 | 720px | — | 4カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#212121`（2） / `#f2eee9`（1） / `#ed6a10`（1）
- 見出しは左2／中央4。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 25枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（12枚）、4:3（11枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1e3044 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1c1c1c; --on:#1c1c1c }
.section--main .btn--fill{ background:#1c1c1c; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#000000; color:#ffffff; border-radius:80px;
  padding:28px 28px; min-height:80px;
  font-size:20px; font-weight:200 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:80px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1e3044` は文字と小さな部品にだけ使う。
- 余白 152px と行間 1.71 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.71 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
