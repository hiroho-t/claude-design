# 遠野ジンギスカン ふうのデザイン

- 出典: https://tono-jingisukan.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／料理･食べ物･飲み物･食品製造

#fcf9e7 の地に `#a69a82` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2.14、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fcf9e7;
  --main: #a69a82;
  --ink: #000000;
  --ink-rev: #333333;
  --on: #a69a82;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Acme", sans-serif;
  --fs-body: 14px;
  --lh-body: 2.14;
  --container: 1100px;
  --read: 752px;
  --section-y: 140px;
  --gap: 59px;
  --radius: 25px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fcf9e7` | 92.3% |
| 主色 | `#a69a82` | 2.7% |

文字色は `#000000` / `#333333` / `#b30001` / `#ffffff`。

- 主色 `#a69a82` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 16 | 10 | 0 | 0 |
| `#fcf9e7` | 3 | 0 | 0 | 0 |
| `#000000` | 2 | 108 | 13 | 0 |
| `#b30001` | 5 | 52 | 5 | 4 |
| `#333333` | 0 | 3 | 0 | 0 |

- `#a69a82` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#a69a82` |
| `#fcf9e7`（地） | `#a69a82` |
| `#000000` | `#333333` |

```css
.section{ --on:#a69a82 }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fcf9e7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Acme
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1.42 |
| 見出し | 38px | 1.4 |
| 小見出し | 30px | 1.6 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2.14 |

- 本文は 14px・行間 2.14。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 752px
- セクションの上下余白: 140 / 100 / 160 / 172px（基本は 140px）
- 並びの間隔: 59px
- 角丸: 25px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2.14 | 14px / 行間 2.14 |
| 見出し | 42px | 30px / 行間 1.46 |
| セクションの上下余白 | 140px | 60px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 59px | 19px |

- 本文は 14px → 14px、セクション余白は 140px → 60px（PCの43%）。
- 文字サイズの段は 30 / 22 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 25px; padding: 0px 0px; min-height: 31px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.28px;
}
.btn-sub{
  background: #b30001; color: #ffffff;
  border: 1px solid #b30001;
  border-radius: 25px; padding: 0px 0px; min-height: 50px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#ffffff` | ヒーロー（画像） | — | 全面 |
| 2 | 860px | `#ffffff` | 2カラム・画像あり | 右 | — |
| 3 | 2520px | `#ffffff` | 3カラム・画像あり | 中央 | 全幅 |
| 4 | 720px | `#ffffff` | 6カラム | — | — |
| 5 | 1380px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1240px | `#fcf9e7` | 1カラム・画像あり | 左 | 見出しの下 |
| 7 | 700px | — | 1カラム・文字だけ | — | — |
| 8 | 1120px | `#ffffff` | 4カラム・画像あり | 左 | 見出しの下 |
| 9 | 2060px | `#fcf9e7` | 5カラム・画像あり | 左 | 全幅 |
| 10 | 900px | — | 1カラム・文字だけ | — | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（15） / `#fcf9e7`（3） / `#000000`（2）
- 見出しは左3／中央2。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 10px 10px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #333333;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 12px; font-size: 16px;
}
```

## 丸いもの

角丸は 25px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 23枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 16:9（7枚）、3:2（6枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a69a82 }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:10px 10px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:25px;
  padding:0px 0px; min-height:31px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:60px; --gap:19px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#fcf9e7` のまま。主色 `#a69a82` は文字と小さな部品にだけ使う。
- 余白 140px と行間 2.14 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.14 より詰めない。
- 中途半端な角丸（25px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
