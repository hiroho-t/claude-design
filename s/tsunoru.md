# TSUNORU（つのる） ふうのデザイン

- 出典: https://tsuno-ru.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: プラットフォーム･コミュニティサイト／地域･地方創生･政治･行政･自治体･NPO／レスポンシブ

#f5f5f5 の地に `#1d60cc` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 2、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #1d60cc;
  --sub: #f2d422;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #1d60cc;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 996px;
  --read: 668px;
  --section-y: 52px;
  --gap: 14px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 90.9% |
| 主色 | `#1d60cc` | 2.1% |
| 副色 | `#f2d422` | 1.8% |

文字色は `#000000` / `#ffffff` / `#1d60cc` / `#11a73b`。

- 主色 `#1d60cc` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.16) 0px 1px 2px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 22 | 0 | 0 | 4 |
| `#ffffff` | 75 | 87 | 0 | 0 |
| `#1d60cc` | 17 | 48 | 0 | 9 |
| `#2e363b` | 18 | 20 | 0 | 1 |
| `#eaeaea` | 2 | 0 | 0 | 1 |
| `#000000` | 0 | 138 | 0 | 0 |
| `#11a73b` | 0 | 30 | 0 | 0 |

- `#1d60cc` は面17箇所・文字48箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#1d60cc` |
| `#f5f5f5`（地） | `#1d60cc` |
| `#1d60cc`（主色） | `#ffffff` |
| `#f2d431` | `#1d60cc` |

```css
.section{ --on:#1d60cc }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 700 / 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 50px | 1 |
| 見出し | 34px | 1 |
| 小見出し | 30px | 1 |
| リード | 24px | — |
| リード | 20px | — |
| リード | 16px | — |
| 本文 | 14px | 2 |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 996px／読ませる段は 668px
- セクションの上下余白: 52 / 60 / 120 / 40px（基本は 52px）
- 並びの間隔: 4 / 10 / 14 / 20px
- 角丸: 10px が基本。大きな面だけ 6px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1130 / 782 / 769 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 15px / 行間 1.43 |
| 見出し | 50px | 19px / 行間 1.67 |
| セクションの上下余白 | 52px | 36px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 14px | 21px |

- 本文は 14px → 15px、セクション余白は 52px → 36px（PCの69%）。
- 文字サイズの段は 21 / 17 / 15 / 12 / 11px。

## ボタン

```css
.btn{
  background: #1d60cc; color: #ffffff;
  border-radius: 20px; padding: 0px 0px; min-height: 64px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.15px;
}
.btn-sub{
  background: #f5f5f5; color: #333333;
  border-radius: 6px; padding: 0px 20px; min-height: 38px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.15px;
}
.btn-sub{
  background: #f55b79; color: #ffffff;
  border-radius: 20px; padding: 0px 0px; min-height: 64px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.15px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 7180px | `#f5f5f5` | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 1000px | `#eaeaea` | 2カラム・画像あり | — | 全幅 |
| 3 | 1060px | `#f5f5f5` | 3カラム・画像あり | — | 全面 |
| 4 | 580px | `#2e363b` | 6カラム・画像あり | — | 全面 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（20） / `#f5f5f5`（2） / `#1d60cc`（2） / `#f2d431`（1）
- 見出しは左0／中央1。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 6px;
  padding: 60px 20px;
}
```

ラベル・タグ

```css
.chip{
  background: #f5f5f5; color: #333333;
  border-radius: 6px; padding: 0px 20px; font-size: 12px;
}
```

## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 2 箇所ある（72px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 38枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 4:3（12枚）、3:2（7枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1d60cc }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:7180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:6px; padding:60px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#1d60cc; color:#ffffff; border-radius:20px;
  padding:0px 0px; min-height:64px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:15px; --section-y:36px; --gap:21px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#f5f5f5` のまま。主色 `#1d60cc` は文字と小さな部品にだけ使う。
- 余白 52px と行間 2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 6px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（10px と 6px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
