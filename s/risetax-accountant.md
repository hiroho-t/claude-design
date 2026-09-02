# 税理士法人ライズ ふうのデザイン

- 出典: https://rise-tax.com/accountant/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／金融･投資･保険･士業

#f0f0f0 の地に `#4b89ab` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f0f0f0;
  --main: #4b89ab;
  --sub: #2d3243;
  --ink: #2d3243;
  --ink-rev: #ffffff;
  --on: #4b89ab;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Outfit", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1260px;
  --read: 1100px;
  --section-y: 56px;
  --gap: 15px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f0f0f0` | 61.5% |
| 主色 | `#4b89ab` | 22.9% |
| 副色 | `#2d3243` | 8% |
| 差し色 | `#dbdddf` | 4.5% |

文字色は `#2d3243` / `#ffffff` / `#239ccf` / `#7b7e89`。

- 主色 `#4b89ab` は差し色ではなく**面**で使う。画面の23%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0f0f0` | 1 | 0 | 0 | 0 |
| `#4b89ab` | 3 | 0 | 0 | 1 |
| `#2d3243` | 5 | 59 | 5 | 1 |
| `#d9dadc` | 5 | 0 | 0 | 0 |
| `#ffffff` | 13 | 62 | 0 | 0 |
| `#239ccf` | 4 | 1 | 0 | 3 |
| `#7b7e89` | 1 | 1 | 2 | 1 |

- `#4b89ab` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#4b89ab`（主色） | `#ffffff` |
| `#ffffff` | `#4b89ab` |
| `#f0f0f0`（地） | `#4b89ab` |
| `#d9dadc` | `#4b89ab` |

```css
.section{ --on:#4b89ab }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Outfit
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 39px | 1.6 |
| 見出し | 28px | 1.6 |
| 小見出し | 19px | — |
| リード | 18px | — |
| リード | 17px | 2 |
| 本文 | 16px | 2 |
| 補助 | 15px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1260px／読ませる段は 1100px
- セクションの上下余白: 56 / 60 / 120 / 52px（基本は 56px）
- 並びの間隔: 8 / 14 / 15 / 40px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 782 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| 見出し | 39px | 13px / 行間 2 |
| セクションの上下余白 | 56px | 60px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 15px | 8px |

- 本文は 16px → 14px、セクション余白は 56px → 60px（PCの107%）。
- 文字サイズの段は 37 / 24 / 16 / 14 / 13px。

## ボタン

```css
.btn{
  background: transparent; color: #2d3243;
  border-radius: 0px; padding: 0px 23px; min-height: 30px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.6px;
}
.btn-sub{
  background: #239ccf; color: #ffffff;
  border-radius: 5px; padding: 0px 9px; min-height: 28px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1520px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 1840px | `#4b89ab` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 820px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 940px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 760px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1500px | — | 4カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#4b89ab` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#4b89ab`（2） / `#ffffff`（2） / `#f0f0f0`（1） / `#d9dadc`（1）
- 見出しは左1／中央5。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #239ccf; color: #ffffff;
  border-radius: 5px; padding: 0px 9px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 13 箇所ある（136px×5、40px×4、144px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 23枚使っている
- 比率は 3:2（13枚）、16:9（3枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4b89ab }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1520px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#2d3243; border-radius:0px;
  padding:0px 23px; min-height:30px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:60px; --gap:8px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地色と主色 `#4b89ab` の面を全幅で交互に置く。主色は画面の23%を占めるだけ使う。
- 余白 56px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
