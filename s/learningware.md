# eラーニングシステム LearningWare（ラーニングウェア） ふうのデザイン

- 出典: https://www.pro-seeds.com/learningware/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

#f2f4f5 の地に `#01418e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.72、セクション間 180px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2f4f5;
  --main: #01418e;
  --sub: #cfd5da;
  --ink: #252a2f;
  --ink-rev: #ffffff;
  --on: #01418e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.72;
  --container: 1060px;
  --read: 652px;
  --section-y: 180px;
  --gap: 16px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2f4f5` | 88% |
| 主色 | `#01418e` | 6.2% |
| 副色 | `#cfd5da` | 1.8% |
| 差し色 | `#aaa9a6` | 1.5% |

文字色は `#252a2f` / `#ffffff` / `#01418e` / `#747b8a`。

- 主色 `#01418e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f4f5` | 30 | 0 | 1 | 23 |
| `#ffffff` | 33 | 48 | 1 | 5 |
| `#01418e` | 3 | 68 | 1 | 1 |
| `#50b0ea` | 2 | 27 | 14 | 1 |
| `#6e7380` | 0 | 12 | 0 | 0 |
| `#252a2f` | 0 | 191 | 0 | 0 |
| `#747b8a` | 0 | 28 | 0 | 0 |

- `#01418e` は文字色として68箇所で使うのが主。面としては3箇所しかないが、1枚が大きく画面の6%を占める。ボタンの地にも使う。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#01418e` |
| `#f2f4f5`（地） | `#01418e` |
| `#01418e`（主色） | `#ffffff` |

```css
.section{ --on:#01418e }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f2f4f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 18px | 1 |
| 本文 | 16px | 1.72 |
| 補助 | 14px | 1.72 |
| 注記 | 13px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1.72。

## レイアウト

- コンテンツ幅: 最大 1060px／読ませる段は 652px
- セクションの上下余白: 180 / 200 / 40 / 80px（基本は 180px）
- 並びの間隔: px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1299 / 1280 / 1200 / 1023 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.72 | 14px / 行間 1.72 |
| 見出し | 28px | 12px / 行間 1.72 |
| セクションの上下余白 | 180px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 180px → 32px（PCの18%）。
- 文字サイズの段は 24 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #f2f4f5; color: #252a2f;
  border-radius: 5px; padding: 0px 0px; min-height: 70px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.28px;
}
.btn-sub{
  background: #ffffff; color: #50b0ea;
  border-radius: 50px; padding: 0px 15px; min-height: 40px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.28px;
}
.btn-sub{
  background: #ffffff; color: #01418e;
  border-radius: 50px; padding: 0px 15px; min-height: 40px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.28px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 640px | — | ヒーロー（画像） | — | 全面 |
| 2 | 460px | `#f2f4f5` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 3160px | `#f2f4f5` | 6カラム・画像あり | 左 | 右（63:37） |
| 4 | 2220px | — | 1カラム・画像あり | 左 | — |
| 5 | 1100px | `#f2f4f5` | 1カラム・画像あり | 左 | 右（63:37） |
| 6 | 1700px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 6020px | `#f2f4f5` | 1カラム・画像あり | 左 | 見出しの下 |
| 8 | 1040px | `#f2f4f5` | 3カラム・画像あり | 左 | 見出しの下 |
| 9 | 1040px | `#ffffff` | 1カラム・画像あり | 左 | — |
| 10 | 420px | — | 1カラム・画像あり | — | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（17） / `#f2f4f5`（6） / `#01418e`（2）
- 見出しは左7／中央1。
- 2カラムの分け方は 63:37 / 63:37。半分ずつには割らない。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 5px;
  padding: 36px 36px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #50b0ea;
  border: 1px solid currentColor;
  border-radius: 5px; padding: 3px 5px; font-size: 12px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 19 箇所ある（48px×14、24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 105枚使っている
- 比率は 1:1（82枚）、16:9（9枚）、3:4（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#01418e }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:640px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:5px; padding:36px 36px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f2f4f5; color:#252a2f; border-radius:5px;
  padding:0px 0px; min-height:70px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f2f4f5` のまま。主色 `#01418e` は文字と小さな部品にだけ使う。
- 余白 180px と行間 1.72 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.72 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
