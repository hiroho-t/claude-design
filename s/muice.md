# muice（ミュアイス） ふうのデザイン

- 出典: https://muice.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／美容･化粧品･コスメ･ケア用品／レスポンシブ

白地に `#ae9abb` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.4、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ae9abb;
  --sub: #d9d5db;
  --ink: #838383;
  --ink-rev: #ffffff;
  --on: #ae9abb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.4;
  --container: 1200px;
  --read: 952px;
  --section-y: 88px;
  --gap: 25px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 57.2% |
| 主色 | `#f2e7e6` | 16.3% |
| 副色 | `#d9d5db` | 16% |
| 差し色 | `#000000` | 9.7% |

文字色は `#838383` / `#ffffff` / `#ae9abb` / `#606060`。

- 主色 `#ae9abb` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 2 | 20 | 1 | 0 |
| `#f2e7e6` | 2 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#f2f0f4` | 2 | 0 | 0 | 0 |
| `#d1ccda` | 1 | 0 | 1 | 0 |
| `#838383` | 0 | 47 | 0 | 0 |
| `#ae9abb` | 4 | 18 | 6 | 0 |
| `#606060` | 0 | 21 | 0 | 0 |

- `#ae9abb` は文字色として18箇所で使うのが主。面としては4箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも6箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ae9abb` |
| `#f2e7e6` | `#ae9abb` |
| `#f9f2f2` | `#ae9abb` |
| `#f2f0f4` | `#ae9abb` |

```css
.section{ --on:#ae9abb }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 400 / 200 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 50px | — |
| 見出し | 42px | — |
| 小見出し | 18px | — |
| リード | 16px | — |
| リード | 14px | 2.57 |
| 本文 | 12px | 1.4 |
| 補助 | 11px | — |

- 本文は 12px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 952px
- セクションの上下余白: 88 / 100 / 112 / 120px（基本は 88px）
- 並びの間隔: 10 / 18 / 25 / 30px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 768 / 640 / 600 / 390px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.4 | 10px / 行間 1.4 |
| 見出し | 50px | 14px / 行間 2.57 |
| セクションの上下余白 | 88px | 28px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 25px | 10px |

- 本文は 12px → 10px、セクション余白は 88px → 28px（PCの32%）。
- 文字サイズの段は 16 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ae9abb;
  border: 1px solid #ae9abb;
  border-radius: 50%; padding: 0px 0px; min-height: 48px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%; padding: 0px 0px; min-height: 48px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ae9abb;
  border: 1px solid #ae9abb;
  border-radius: 50%; padding: 0px 0px; min-height: 65px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1720px | — | 4カラム・画像あり | 中央 | 全幅 |
| 3 | 1420px | — | 6カラム・画像あり | 中央 | 全幅 |
| 4 | 1140px | — | 1カラム・画像あり | — | 全面 |
| 5 | 1040px | `#f2e7e6` | 6カラム・画像あり | 左 | 右（21:79） |
| 6 | 860px | — | 1カラム・文字だけ | 左 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#f2e7e6`（1） / `#f9f2f2`（1） / `#f2f0f4`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 21:79。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 34枚使っている。うち 10 枚は画面いっぱいに置く
- 比率は 1:1（20枚）、16:9（7枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ae9abb }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ae9abb; border-radius:50%;
  padding:0px 0px; min-height:48px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:10px; --section-y:28px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ae9abb` は文字と小さな部品にだけ使う。
- 余白 88px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。
