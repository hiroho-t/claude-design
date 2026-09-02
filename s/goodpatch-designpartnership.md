# デザインの力でビジネスを前進させる ふうのデザイン

- 出典: https://design-partnership.goodpatch.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#ba5333` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ba5333;
  --sub: #ba5333;
  --ink: #3a3e40;
  --ink-rev: #5f5f5f;
  --on: #ba5333;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 592px;
  --read: 672px;
  --section-y: 100px;
  --gap: 28px;
  --radius: 48px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 84.7% |
| 主色 | `#2b2d2e` | 5.8% |
| 副色 | `#ba5333` | 4.1% |
| 差し色 | `#b4bcc6` | 2.3% |
| 差し色 | `#2780cf` | 1.9% |

文字色は `#3a3e40` / `#5f5f5f` / `#96a0a6` / `#ffffff`。

- 主色 `#ba5333` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 33 | 28 | 1 | 17 |
| `#096fca` | 21 | 4 | 3 | 2 |
| `#2b2d2e` | 1 | 6 | 0 | 0 |
| `#eeeeee` | 6 | 0 | 17 | 0 |
| `#73b6ee` | 1 | 0 | 0 | 0 |
| `#3a3e40` | 0 | 107 | 1 | 0 |
| `#5f5f5f` | 0 | 6 | 0 | 0 |
| `#96a0a6` | 0 | 36 | 0 | 0 |

- `#ba5333` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ba5333` |
| `#eeeeee` | `#ba5333` |
| `#096fca` | `#5f5f5f` |
| `#2b2d2e` | `#5f5f5f` |

```css
.section{ --on:#ba5333 }                     /* 地の面 */
.section--main{ background:var(--main); color:#5f5f5f; --on:#5f5f5f }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#5f5f5f }
.section--main .btn--fill{ background:#5f5f5f; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.6 |
| 見出し | 26px | — |
| 小見出し | 25px | 1.4 |
| リード | 22px | 1.3 |
| リード | 15px | — |
| 本文 | 14px | 2 |
| 補助 | 13px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 592px／読ませる段は 672px
- セクションの上下余白: 100 / 200 / 120 / 172px（基本は 100px）
- 並びの間隔: 8 / 20 / 28 / 120px
- 角丸: 48px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 768 / 600 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 12px / 行間 2 |
| 見出し | 38px | 24px / 行間 1.6 |
| セクションの上下余白 | 100px | 24px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 28px | 16px |

- 本文は 14px → 12px、セクション余白は 100px → 24px（PCの24%）。
- 文字サイズの段は 20 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #3a3e40;
  border-radius: 0px; padding: 0px 0px; min-height: 74px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.6px;
}
.btn-sub{
  background: #ffffff; color: #3a3e40;
  border: 2px solid #e9e9e9;
  border-radius: 48px; padding: 16px 30px; min-height: 49px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.6px;
}
.btn-sub{
  background: #ffffff; color: #3a3e40;
  border: 2px solid #e9e9e9;
  border-radius: 48px; padding: 24px 30px; min-height: 65px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#096fca` | ヒーロー（画像） | — | 全幅 |
| 2 | 640px | — | 1カラム・画像あり | 左 | — |
| 3 | 1220px | — | 2カラム・画像あり | 中央 | — |
| 4 | 800px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1740px | — | 3カラム・画像あり | 右 | 左（31:69） |
| 6 | 3080px | — | 6カラム・画像あり | 右 | 左（56:44） |
| 7 | 1720px | — | 6カラム・画像あり | 左 | — |
| 8 | 1620px | — | 3カラム・画像あり | — | 全面 |
| 9 | 1100px | — | 2カラム・画像あり | — | 全幅 |

- 全9セクション。
- 使われている面の色: `#ffffff`（14） / `#eeeeee`（6） / `#096fca`（1） / `#2b2d2e`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 31:69 / 56:44。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 50px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #096fca; color: #ffffff;
  border-radius: 999px; padding: 5px 5px; font-size: 12px;
}
```

## 画像

- 10枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（5枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ba5333 }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#5f5f5f; --on:#5f5f5f }
.section--main .btn--fill{ background:#5f5f5f; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:50px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#3a3e40; border-radius:0px;
  padding:0px 0px; min-height:74px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ba5333` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（48px と 0px 以外）を混ぜない。
