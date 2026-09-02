# Paw Park ふうのデザイン

- 出典: https://pawpark.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／ペット･動物･生き物／レスポンシブ

#f2eeea の地に `#e2c16f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2eeea;
  --main: #e2c16f;
  --ink: #333333;
  --ink-rev: #7e7c7a;
  --on: #e2c16f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Maru Gothic", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1120px;
  --read: 1160px;
  --section-y: 88px;
  --gap: 16px;
  --radius: 38px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2eeea` | 92.9% |
| 主色 | `#25282d` | 2.5% |

文字色は `#333333` / `#7e7c7a` / `#f7f6f5` / `#e2c16f`。

- 主色 `#e2c16f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2eeea` | 1 | 0 | 0 | 0 |
| `#f7f6f5` | 16 | 21 | 0 | 0 |
| `#ece6dc` | 1 | 0 | 2 | 0 |
| `#e2c16f` | 3 | 20 | 0 | 0 |
| `#4a81a3` | 1 | 0 | 0 | 0 |
| `#333333` | 0 | 47 | 0 | 0 |
| `#7e7c7a` | 0 | 7 | 0 | 0 |

- `#e2c16f` は文字色として20箇所で使うのが主。面としては3箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f6f5` | `#e2c16f` |
| `#f2eeea`（地） | `#e2c16f` |
| `#ece6dc` | `#e2c16f` |
| `#e2c16f`（主色） | `#e2c16f` |

```css
.section{ --on:#e2c16f }                     /* 地の面 */
.section--main{ background:var(--main); color:#7e7c7a; --on:#7e7c7a }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#7e7c7a }
.section--main .btn--fill{ background:#7e7c7a; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ece6dc`。ただしその囲みは `#f7f6f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Maru Gothic
- 欧文: Material Icons
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | — |
| 見出し | 32px | 1.4 |
| 小見出し | 28px | 1.4 |
| リード | 18px | — |
| 本文 | 16px | — |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1160px
- セクションの上下余白: 88 / 72 / 80 / 132px（基本は 88px）
- 並びの間隔: 8 / 12 / 16 / 20px
- 角丸: 38px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 16px |
| 見出し | 36px | 22px / 行間 1.4 |
| セクションの上下余白 | 88px | 88px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | 16px |

- 本文は 16px → 16px、セクション余白は 88px → 88px（PCの100%）。
- 文字サイズの段は 24 / 22 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #333333;
  border-radius: 2px; padding: 0px 0px; min-height: 46px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 17px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | — |
| 2 | 900px | — | 1カラム・画像あり | — | — |
| 3 | 900px | — | 6カラム・画像あり | — | — |
| 4 | 200px | — | 帯・区切り | — | — |
| 5 | 480px | — | 1カラム・画像あり | 中央 | 右（52:48） |
| 6 | 200px | — | 帯・区切り | — | — |
| 7 | 820px | — | 2カラム・画像あり | 右 | 左（19:81） |
| 8 | 920px | — | 3カラム・画像あり | 右 | 左（19:81） |
| 9 | 200px | — | 帯・区切り | — | — |
| 10 | 540px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 11 | 200px | — | 帯・区切り | — | — |
| 12 | 860px | — | 1カラム・画像あり | 左 | — |
| 13 | 200px | — | 帯・区切り | — | — |
| 14 | 980px | — | 4カラム・画像あり | — | 全面 |

- 全14セクション。
- 使われている面の色: `#f7f6f5`（2） / `#f2eeea`（1） / `#ece6dc`（1） / `#e2c16f`（1）
- 見出しは左2／中央1。
- 2カラムの分け方は 52:48 / 19:81 / 19:81。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #ece6dc。面によって入れ替える */
  border-radius: 0px;
  padding: 20px 0px;
}
```


## 画像

- 32枚使っている
- 比率は 1:1（18枚）、3:4（8枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e2c16f }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#7e7c7a; --on:#7e7c7a }
.section--main .btn--fill{ background:#7e7c7a; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:20px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#333333; border-radius:2px;
  padding:0px 0px; min-height:46px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:16px; --section-y:88px; --gap:16px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f2eeea` のまま。主色 `#e2c16f` は文字と小さな部品にだけ使う。
- 余白 88px と行間 null を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（38px と 0px 以外）を混ぜない。
