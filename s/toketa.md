# フォスタリングカードキット TOKETA ふうのデザイン

- 出典: https://toketa.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: LP（ランディングページ）／特設サイト･キャンペーンサイト･プロモーションサイト／生活用品･雑貨･インテリア･家具

白地に `#ffe9ac` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ffe9ac;
  --sub: #e5e0d7;
  --ink: #444444;
  --ink-rev: #53403b;
  --on: #ffe9ac;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-筑紫A丸ゴシック Std B", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 676px;
  --read: 736px;
  --section-y: 64px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 63.3% |
| 主色 | `#ffe9ac` | 17.3% |
| 副色 | `#e5e0d7` | 7.5% |
| 差し色 | `#bcd5cf` | 5.2% |
| 差し色 | `#f2d692` | 3% |
| 差し色 | `#bd9875` | 2.2% |

文字色は `#444444` / `#53403b` / `#403927` / `#ef744b`。

- 主色 `#ffe9ac` は差し色ではなく**面**で使う。画面の17%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fbfbfb` | 8 | 2 | 0 | 2 |
| `#feeaad` | 1 | 0 | 0 | 0 |
| `#eb6e4f` | 2 | 13 | 0 | 2 |
| `#53403b` | 1 | 6 | 0 | 0 |
| `#444444` | 0 | 43 | 0 | 0 |
| `#403927` | 0 | 16 | 0 | 0 |

- `#ffe9ac` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#feeaad` | `#ffe9ac` |
| `#fbfbfb` | `#ffe9ac` |
| `#ffffff`（地） | `#ffe9ac` |

```css
.section{ --on:#ffe9ac }                     /* 地の面 */
.section--main{ background:var(--main); color:#53403b; --on:#53403b }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#53403b }
.section--main .btn--fill{ background:#53403b; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: FOT-筑紫A丸ゴシック Std B
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1 |
| 見出し | 24px | 1 |
| 小見出し | 20px | — |
| リード | 18px | 1.6 |
| リード | 17px | 1.6 |
| 本文 | 16px | 1.8 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 676px／読ませる段は 736px
- セクションの上下余白: 64 / 84 / 92 / 140px（基本は 64px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.95 |
| 見出し | 30px | 19px / 行間 1.85 |
| セクションの上下余白 | 64px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 64px → 52px（PCの81%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 20px; font-weight: 400; letter-spacing: 1.8px;
}
.btn-sub{
  background: #eb6e4f; color: #ffffff;
  border-radius: 50px; padding: 16px 33px; min-height: 54px;
  font-size: 20px; font-weight: 400; letter-spacing: 1.8px;
}
.btn-sub{
  background: transparent; color: #eb6e4f;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 20px; font-weight: 400; letter-spacing: 1.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 380px | — | ヒーロー（画像） | 中央 | — |
| 2 | 760px | — | 1カラム・画像あり | 右 | 左（33:67） |
| 3 | 800px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 880px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 720px | — | 1カラム・画像あり | 右 | 全幅 |
| 6 | 2840px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 400px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 780px | — | 2カラム | — | — |
| 9 | 720px | — | 1カラム・画像あり | 右 | 全幅 |

- 全9セクション。
- 使われている面の色: `#feeaad`（1） / `#fbfbfb`（1） / `#ffffff`（1）
- 見出しは左0／中央4。
- 2カラムの分け方は 33:67。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 24枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（5枚）、4:3（5枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffe9ac }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:380px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#53403b; --on:#53403b }
.section--main .btn--fill{ background:#53403b; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:54px;
  font-size:20px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:14px; --section-y:52px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#ffe9ac` の面を交互に置く。主色は画面の17%を占めるだけ使う。
- 余白 64px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。
