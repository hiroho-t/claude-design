# THEO [テオ] by お金のデザイン ふうのデザイン

- 出典: https://theo.blue/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#065fe3` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #065fe3;
  --sub: #dde3dc;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #065fe3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1120px;
  --read: 640px;
  --section-y: 56px;
  --gap: 18px;
  --radius: 15px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.9% |
| 主色 | `#065fe3` | 7.2% |
| 副色 | `#dde3dc` | 4.2% |
| 差し色 | `#d3b26e` | 4% |
| 差し色 | `#0350bd` | 3.1% |
| 差し色 | `#997c5f` | 3% |

文字色は `#333333` / `#ffffff` / `#0350bf` / `#808080`。

- 主色 `#065fe3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f2f2` | 24 | 0 | 0 | 0 |
| `#065fe3` | 1 | 0 | 0 | 0 |
| `#ffffff` | 18 | 98 | 0 | 3 |
| `#0350bf` | 12 | 61 | 5 | 4 |
| `#0184c9` | 1 | 0 | 0 | 0 |
| `#333333` | 10 | 76 | 1 | 6 |
| `#808080` | 0 | 17 | 0 | 0 |

- `#065fe3` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f2f2f2` | `#065fe3` |
| `#ffffff`（地） | `#065fe3` |
| `#f2f6fd` | `#065fe3` |
| `#0350bf` | `#ffffff` |

```css
.section{ --on:#065fe3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Hiragino Sans（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Lato
- ウェイトは 700 / 400 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1.5 |
| 見出し | 20px | 1.5 |
| 小見出し | 18px | 1.5 |
| 本文 | 16px | — |
| 補助 | 14px | 1.71 |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 640px
- セクションの上下余白: 56 / 32 / 40 / 64px（基本は 56px）
- 並びの間隔: 6 / 12 / 18 / 24px
- 角丸: 15px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1119 / 768 / 430 / 360 / 359px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 1.5 |
| 見出し | 24px | 20px / 行間 1.5 |
| セクションの上下余白 | 56px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 18px | 10px |

- 本文は 16px → 14px、セクション余白は 56px → 32px（PCの57%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #333333; color: #ffffff;
  border-radius: 48px; padding: 14px 14px; min-height: 56px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #0350bf; color: #ffffff;
  border: 2px solid #0350bf;
  border-radius: 4px; padding: 0px 0px; min-height: 40px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 180px | — | 帯・区切り | 中央 | — |
| 3 | 400px | — | 2カラム・画像あり | — | 全面 |
| 4 | 2480px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 5 | 1760px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 860px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 680px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1740px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 900px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 10 | 920px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 11 | 540px | — | 1カラム・文字だけ | 左 | — |
| 12 | 440px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 13 | 760px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 14 | 320px | — | 帯・区切り | 左 | — |

- 全14セクション。
- 使われている面の色: `#f2f2f2`（17） / `#ffffff`（7） / `#f2f6fd`（2） / `#0350bf`（2）
- 見出しは左4／中央8。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #f2f2f2;
  border-radius: 15px;
  padding: 28px 212px;
}
```

ラベル・タグ

```css
.chip{
  background: #0350bf; color: #ffffff;
  border-radius: 999px; padding: 4px 18px; font-size: 14px;
}
```

## 丸いもの

角丸は 15px だが、**完全な円は別扱い**で 8 箇所ある（24px×4、40px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 82枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（33枚）、3:4（14枚）、1:1（13枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#065fe3 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f2f2f2;
  border-radius:15px; padding:28px 212px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:56px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#065fe3` は文字と小さな部品にだけ使う。
- 余白 56px と行間 null を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 15px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（15px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
