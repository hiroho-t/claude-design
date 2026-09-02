# 「LEE（リー）」 ふうのデザイン

- 出典: https://lee.hpplus.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／生活用品･雑貨･インテリア･家具／ファッション･アパレル･アクセサリー･ジュエリー

白地に `#e66a4f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.6、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e66a4f;
  --sub: #ebe6dd;
  --ink: #000000;
  --ink-rev: #333333;
  --on: #e66a4f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.6;
  --container: 1120px;
  --read: 640px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 72.9% |
| 主色 | `#e66a4f` | 6.2% |
| 副色 | `#ebe6dd` | 5.5% |
| 差し色 | `#d6d0c9` | 5.2% |
| 差し色 | `#b4b0aa` | 2.7% |
| 差し色 | `#454141` | 2.5% |

文字色は `#000000` / `#333333` / `#555555` / `#ffffff`。

- 主色 `#e66a4f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 291 | 33 | 2 | 45 |
| `#f5f5f5` | 4 | 0 | 0 | 0 |
| `#e66a4f` | 8 | 4 | 0 | 2 |
| `#333333` | 1 | 221 | 6 | 0 |
| `#707070` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 407 | 0 | 0 |
| `#555555` | 0 | 399 | 21 | 0 |

- `#e66a4f` は面として8箇所、文字として4箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e66a4f` |
| `#e66a4f`（主色） | `#333333` |
| `#f5f5f5` | `#e66a4f` |
| `#333333` | `#333333` |

```css
.section{ --on:#e66a4f }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#e66a4f` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.6 |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| 本文 | 14px | 1.6 |
| 補助 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 640px
- セクションの上下余白: 80 / 40 / 100 / 52px（基本は 80px）
- 並びの間隔: 4 / 16px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 1280 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.6 | 12px / 行間 1.6 |
| 見出し | 48px | 32px / 行間 1.6 |
| セクションの上下余白 | 80px | 412px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 16px | 4px |

- 本文は 14px → 12px、セクション余白は 80px → 412px（PCの515%）。
- 文字サイズの段は 32 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #555555;
  border: 1px solid #555555;
  border-radius: 20px; padding: 6px 12px; min-height: 26px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.6px;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.6px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 0px; padding: 4px 10px; min-height: 28px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | — | 全面 |
| 2 | 2760px | — | 6カラム・画像あり | 左 | 右（47:53） |
| 3 | 540px | — | 6カラム・画像あり | — | 全面 |
| 4 | 1380px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1020px | — | 4カラム・画像あり | 中央 | 右（35:65） |
| 6 | 6180px | — | 6カラム・画像あり | 左 | 右（50:50） |
| 7 | 1400px | `#e66a4f` | 6カラム・画像あり | 左 | 見出しの下 |

- 全7セクション。
- 使われている面の色: `#ffffff`（13） / `#e66a4f`（3） / `#f5f5f5`（1） / `#333333`（1）
- 見出しは左4／中央1。
- 2カラムの分け方は 47:53 / 35:65 / 50:50。半分ずつには割らない。


## 部品

囲み（126箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 20px 20px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #555555;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 6px 12px; font-size: 12px;
}
```

## 画像

- 275枚使っている
- 比率は 1:1（173枚）、3:4（78枚）、3:2（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e66a4f }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:20px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#555555; border-radius:20px;
  padding:6px 12px; min-height:26px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:412px; --gap:4px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e66a4f` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。
