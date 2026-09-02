# さくら不動産 ふうのデザイン

- 出典: https://sakurafudousan.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

白地に `#ecccdf` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 1.8、セクション間 44px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ecccdf;
  --sub: #254577;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #ecccdf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-PA1GothicStdN-Regular", sans-serif;
  --font-en: "MFW-PA1GothicStdN-Regular", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.8;
  --container: 880px;
  --read: 960px;
  --section-y: 44px;
  --gap: 16px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 57% |
| 主色 | `#ecccdf` | 7.6% |
| 副色 | `#254577` | 6.3% |
| 差し色 | `#5a8bb1` | 5.5% |
| 差し色 | `#f5e6fa` | 4.8% |
| 差し色 | `#69645a` | 4.6% |

文字色は `#000000` / `#ffffff` / `#e63278` / `#dc3a86`。

- 主色 `#ecccdf` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 4 | 34 | 0 | 0 |
| `#254577` | 5 | 0 | 3 | 0 |
| `#e63278` | 6 | 5 | 6 | 6 |
| `#000000` | 0 | 116 | 0 | 0 |
| `#dc3a86` | 0 | 1 | 0 | 0 |

- `#ecccdf` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ecccdf` |
| `#254577` | `#ffffff` |

```css
.section{ --on:#ecccdf }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: MFW-PA1GothicStdN-Regular
- 欧文: MFW-PA1GothicStdN-Regular
- ウェイトは 400 / 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 35px | 1.5 |
| 見出し | 23px | — |
| 小見出し | 20px | — |
| リード | 16px | — |
| リード | 15px | 1.5 |
| リード | 13px | — |
| 本文 | 12px | 1.5 |

- 本文は 12px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 880px／読ませる段は 960px
- セクションの上下余白: 44 / 80 / 120 / 40px（基本は 44px）
- 並びの間隔: px
- 角丸: 5px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 1024 / 782 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.8 | 14px / 行間 2 |
| 見出し | 35px | 10px / 行間 1.5 |
| セクションの上下余白 | 44px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 12px → 14px、セクション余白は 44px → 32px（PCの73%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #e63278; color: #ffffff;
  border: 1px solid #e63278;
  border-radius: 3px; padding: 3px 20px; min-height: 29px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.5px;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #254577;
  border-radius: 5px; padding: 10px 33px; min-height: 52px;
  font-size: 20px; font-weight: 400; letter-spacing: 0.5px;
}
.btn-sub{
  background: #e63278; color: #ffffff;
  border: 1px solid #e63278;
  border-radius: 4px; padding: 10px 0px; min-height: 43px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1100px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1180px | `#ffffff` | 4カラム・画像あり | 中央 | 見出しの下 |
| 3 | 660px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 4 | 660px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 360px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 1640px | — | 1カラム・画像あり | 右 | 左（45:55） |

- 全6セクション。
- 使われている面の色: `#ffffff`（2） / `#254577`（1）
- 見出しは左2／中央1。
- 2カラムの分け方は 45:55。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 15px; font-size: 11px;
}
```

## 画像

- 22枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（16枚）、1:1（2枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ecccdf }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1100px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e63278; color:#ffffff; border-radius:3px;
  padding:3px 20px; min-height:29px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ecccdf` は文字と小さな部品にだけ使う。
- 余白 44px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（5px と 3px 以外）を混ぜない。
