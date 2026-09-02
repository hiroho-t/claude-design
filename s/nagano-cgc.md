# 長野県信用保証協会 ふうのデザイン

- 出典: https://www.nagano-cgc.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

白地に `#00ad9b` を大きな面で置く配色。影も枠線もほとんど使わない。本文 13px・行間 2.87、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #00ad9b;
  --sub: #cfe1e0;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #00ad9b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 13px;
  --lh-body: 2.87;
  --container: 1120px;
  --read: 1032px;
  --section-y: 72px;
  --gap: 15px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 60.2% |
| 主色 | `#00ad9b` | 12.6% |
| 副色 | `#cfe1e0` | 4.7% |
| 差し色 | `#4b464b` | 4.3% |
| 差し色 | `#5da4d4` | 2.6% |
| 差し色 | `#aec1c2` | 2.4% |

文字色は `#333333` / `#ffffff` / `#cae7e4` / `#00ad9b`。

- 主色 `#00ad9b` は差し色ではなく**面**で使う。画面の13%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#edf6f5` | 4 | 0 | 0 | 0 |
| `#00ad9b` | 8 | 11 | 21 | 0 |
| `#ffffff` | 21 | 18 | 0 | 1 |
| `#cae7e4` | 11 | 2 | 2 | 5 |
| `#3c8fd5` | 1 | 0 | 0 | 0 |
| `#333333` | 0 | 124 | 0 | 0 |

- `#00ad9b` は面8箇所・文字11箇所を行き来する。ボタンの地には使っていない。枠線にも21箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#00ad9b` |
| `#edf6f5` | `#00ad9b` |
| `#00ad9b`（主色） | `#ffffff` |

```css
.section{ --on:#00ad9b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#00ad9b`。ただしその囲みは `#00ad9b` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Montserrat
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 33px | 1.15 |
| 見出し | 24px | 1.15 |
| 小見出し | 20px | — |
| リード | 16px | — |
| リード | 15px | — |
| リード | 14px | — |
| 本文 | 13px | 2.87 |

- 本文は 13px・行間 2.87。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1032px
- セクションの上下余白: 72 / 40 / 100 / 44px（基本は 72px）
- 並びの間隔: 5 / 11 / 15 / 16px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1025 / 768 / 540 / 375px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 2.87 | 10px / 行間 1.58 |
| 見出し | 33px | 20px / 行間 1.15 |
| セクションの上下余白 | 72px | 40px |
| 左右の余白 | — | 43px |
| 並びの間隔 | 15px | 5px |

- 本文は 13px → 10px、セクション余白は 72px → 40px（PCの56%）。
- 文字サイズの段は 16 / 13 / 12 / 10 / 9px。

## ボタン

```css
.btn{
  background: #cae7e4; color: #333333;
  border-radius: 5px; padding: 9px 9px; min-height: 36px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border: 1px solid #00ad9b;
  border-radius: 99px; padding: 0px 0px; min-height: 39px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #333333;
  border: 1px solid #00ad9b;
  border-radius: 99px; padding: 0px 0px; min-height: 39px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1420px | `#00ad9b` | 6カラム・画像あり | 中央 | — |
| 3 | 620px | — | 1カラム・文字だけ | 中央 | — |
| 4 | 940px | `#edf6f5` | 5カラム・画像あり | 左 | 見出しの下 |
| 5 | 360px | — | 1カラム・画像あり | — | 全面 |

- 全5セクション。
- 主色 `#00ad9b` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（14） / `#edf6f5`（3） / `#00ad9b`（1）
- 見出しは左1／中央2。


## 部品

囲み（11箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #00ad9b。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 画像

- 8枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（5枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00ad9b }
.container{ width:min(100% - 86px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#cae7e4; color:#333333; border-radius:5px;
  padding:9px 9px; min-height:36px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:10px; --section-y:40px; --gap:5px; }
  .container{ width:calc(100% - 86px) }
}
```

## 守ること

やること

- 地色と主色 `#00ad9b` の面を交互に置く。主色は画面の13%を占めるだけ使う。
- 余白 72px と行間 2.87 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.87 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。
