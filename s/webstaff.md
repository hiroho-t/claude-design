# ウェブスタッフ ふうのデザイン

- 出典: https://www.webstaff.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／プラットフォーム･コミュニティサイト／サービス･アプリ･ツール･SaaS

白地に `#dabbbe` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.75、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #dabbbe;
  --sub: #ecedf2;
  --ink: #222222;
  --ink-rev: #333333;
  --on: #dabbbe;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Helvetica Neue", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 1200px;
  --read: 968px;
  --section-y: 40px;
  --gap: 6px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 61.3% |
| 主色 | `#222222` | 15.9% |
| 副色 | `#ecedf2` | 6.8% |
| 差し色 | `#dcdee4` | 4.2% |
| 差し色 | `#dabbbe` | 2.5% |
| 差し色 | `#8b9093` | 2.5% |

文字色は `#222222` / `#333333` / `#9b9b9b` / `#707070`。

- 主色 `#dabbbe` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.07) 0px -1px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 47 | 21 | 0 | 7 |
| `#222222` | 3 | 123 | 0 | 0 |
| `#f8f8f8` | 9 | 0 | 0 | 2 |
| `#333333` | 8 | 10 | 2 | 0 |
| `#e40065` | 13 | 31 | 1 | 11 |
| `#9b9b9b` | 0 | 43 | 0 | 0 |
| `#707070` | 1 | 47 | 0 | 1 |

- `#dabbbe` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#dabbbe` |
| `#222222` | `#333333` |
| `#f8f8f8` | `#dabbbe` |

```css
.section{ --on:#dabbbe }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#eeeeee`。ただしその囲みは `#f8f8f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Helvetica Neue
- 欧文: Helvetica Neue
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 28px | 1.75 |
| 小見出し | 24px | — |
| リード | 18px | 1.75 |
| リード | 16px | 1.75 |
| 本文 | 14px | 1.75 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 968px
- セクションの上下余白: 40 / 100 / 60 / 80px（基本は 40px）
- 並びの間隔: 4 / 5 / 6 / 48px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1101 / 1100 / 481 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 13px / 行間 1.75 |
| 見出し | 32px | 24px / 行間 1.5 |
| セクションの上下余白 | 40px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 6px | 5px |

- 本文は 14px → 13px、セクション余白は 40px → 40px（PCの100%）。
- 文字サイズの段は 24 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #00b7b7;
  border-radius: 0px; padding: 0px 0px; min-height: 29px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 74px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #222222;
  border-radius: 0px; padding: 0px 0px; min-height: 49px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 180px | `#222222` | 帯・区切り | — | — |
| 3 | 380px | `#f8f8f8` | 1カラム・画像あり | 左 | — |
| 4 | 2120px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 5 | 780px | `#f8f8f8` | 6カラム・画像あり | 中央 | — |
| 6 | 480px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 7 | 740px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 640px | `#222222` | 1カラム・画像あり | 左 | 右（47:53） |
| 9 | 560px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 10 | 660px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 11 | 900px | — | 1カラム・画像あり | 左 | — |
| 12 | 1060px | — | 1カラム・画像あり | 左 | — |
| 13 | 920px | — | 1カラム・画像あり | 中央 | — |
| 14 | 980px | `#222222` | 4カラム・画像あり | — | — |

- 全14セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（22） / `#222222`（3） / `#f8f8f8`（3）
- 見出しは左6／中央5。
- 2カラムの分け方は 47:53。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #eeeeee。面によって入れ替える */
  border-radius: 20px;
  padding: 24px 24px;
}
```

ラベル・タグ

```css
.chip{
  background: #e40065; color: #ffffff;
  border-radius: 999px; padding: 9px 18px; font-size: 11px;
}
```

## 画像

- 22枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 16:9（7枚）、21:9（6枚）、3:4（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dabbbe }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:20px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#00b7b7; border-radius:0px;
  padding:0px 0px; min-height:29px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:481px){
  :root{ --fs-body:13px; --section-y:40px; --gap:5px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#dabbbe` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 20px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。
