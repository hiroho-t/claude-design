# 株式会社コモドデザイン ふうのデザイン

- 出典: https://sr-comodo.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

白地に `#faeae0` を大きな面で置く配色。影も枠線もほとんど使わない。本文 17px・行間 2.5、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #faeae0;
  --sub: #19687a;
  --ink: #403128;
  --ink-rev: #ffffff;
  --on: #faeae0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Lato", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 17px;
  --lh-body: 2.5;
  --container: 1152px;
  --read: 1208px;
  --section-y: 72px;
  --gap: 16px;
  --radius: 36px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 58.8% |
| 主色 | `#faeae0` | 10% |
| 副色 | `#19687a` | 5.2% |
| 差し色 | `#ac977f` | 3.7% |
| 差し色 | `#b3a99b` | 3.4% |
| 差し色 | `#9e7d5e` | 3.1% |

文字色は `#403128` / `#ffffff` / `#166678` / `#b2a69a`。

- 主色 `#faeae0` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 13 | 0 | 0 |
| `#166678` | 3 | 3 | 0 | 1 |
| `#faeae0` | 1 | 0 | 0 | 0 |
| `#b2a69a` | 6 | 3 | 0 | 3 |
| `#403128` | 19 | 46 | 0 | 7 |

- `#faeae0` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#faeae0` |
| `#b2a69a` | `#faeae0` |
| `#166678` | `#ffffff` |
| `#faeae0`（主色） | `#faeae0` |

```css
.section{ --on:#faeae0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Lato
- 欧文: Lato
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.5 |
| 見出し | 29px | — |
| 小見出し | 22px | 1.8 |
| 本文 | 17px | 1.8 |
| 補助 | 15px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 2.5。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 1208px
- セクションの上下余白: 72 / 144 / 64 / 216px（基本は 72px）
- 並びの間隔: px
- 角丸: 36px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1280 / 1024 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2.5 | 14px / 行間 2.5 |
| 見出し | 30px | 20px / 行間 1.5 |
| セクションの上下余白 | 72px | 40px |
| 左右の余白 | — | 29px |
| 並びの間隔 | 16px | —px |

- 本文は 17px → 14px、セクション余白は 72px → 40px（PCの56%）。
- 文字サイズの段は 20 / 18 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.843338px;
}
.btn-sub{
  background: #403128; color: #ffffff;
  border-radius: 20px; padding: 7px 13px; min-height: 38px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.843338px;
}
.btn-sub{
  background: transparent; color: #403128;
  border-radius: 0px; padding: 0px 0px; min-height: 55px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.843338px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 2500px | — | ヒーロー（画像） | — | 全面 |
| 2 | 620px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 880px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 880px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 860px | — | 2カラム・画像あり | 左 | 右（63:37） |
| 6 | 860px | — | 2カラム・画像あり | 右 | 左（63:37） |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#faeae0` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（8） / `#b2a69a`（3） / `#166678`（1） / `#faeae0`（1）
- 見出しは左1／中央3。
- 2カラムの分け方は 63:37 / 63:37。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 36px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #403128; color: #ffffff;
  border-radius: 999px; padding: 7px 13px; font-size: 13px;
}
```

## 丸いもの

角丸は 36px だが、**完全な円は別扱い**で 14 箇所ある（24px×11、64px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている
- 比率は 16:9（8枚）、3:4（6枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#faeae0 }
.container{ width:min(100% - 58px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:2500px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:36px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 58px) }
}
```

## 守ること

やること

- 地色と主色 `#faeae0` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 72px と行間 2.5 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 36px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.5 より詰めない。
- 中途半端な角丸（36px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
