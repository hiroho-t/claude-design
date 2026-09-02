# Webサイトを、成果を生む基盤へ。 ふうのデザイン

- 出典: https://studio.design/ja/business
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: LP（ランディングページ）／BtoBのサイト／Web･IT･XR･デジタル･テクノロジー

白地に `#0766f4` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0766f4;
  --sub: #0c1d3c;
  --ink: #222222;
  --ink-rev: #f7f7f7;
  --on: #0766f4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Material Symbols Outlined", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1312px;
  --read: 592px;
  --section-y: 80px;
  --gap: 24px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 60.3% |
| 主色 | `#0766f4` | 15% |
| 副色 | `#0c1d3c` | 5.1% |
| 差し色 | `#e6e8eb` | 4.3% |
| 差し色 | `#224f98` | 3.7% |
| 差し色 | `#c3cddb` | 2.6% |

文字色は `#222222` / `#f7f7f7` / `#0766f4` / `#333333`。

- 主色 `#0766f4` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e1e1e1` | 1 | 0 | 19 | 0 |
| `#ffffff` | 23 | 5 | 0 | 0 |
| `#222222` | 2 | 135 | 0 | 0 |
| `#f6f6f6` | 29 | 40 | 4 | 1 |
| `#0766f4` | 24 | 34 | 4 | 7 |
| `#333333` | 0 | 18 | 0 | 0 |

- `#0766f4` は面24箇所・文字34箇所を行き来する。ボタンの地にも使う。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0766f4` |
| `#f6f6f6` | `#0766f4` |
| `#0766f4`（主色） | `#f7f7f7` |
| `#222222` | `#f7f7f7` |

```css
.section{ --on:#0766f4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#f7f7f7; --on:#f7f7f7 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#f7f7f7 }
.section--main .btn--fill{ background:#f7f7f7; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e6e6e6`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ゴシックMB101 R JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Material Symbols Outlined
- ウェイトは 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.3 |
| 見出し | 30px | 1.2 |
| 小見出し | 18px | 1.4 |
| リード | 17px | — |
| 本文 | 16px | 1 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1312px／読ませる段は 592px
- セクションの上下余白: 80 / 96 / 88 / 40px（基本は 80px）
- 並びの間隔: 8 / 16 / 24 / 32px
- 角丸: 8px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 14px / 行間 1.8 |
| 見出し | 40px | 28px / 行間 1.3 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 8px |

- 本文は 16px → 14px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 24 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #0766f4; color: #ffffff;
  border: 1px solid #0766f4;
  border-radius: 500px; padding: 16px 24px; min-height: 54px;
  font-size: 14px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #0766f4; color: #ffffff;
  border-radius: 16px; padding: 8px 16px; min-height: 32px;
  font-size: 13px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #0766f4; color: #f6f6f6;
  border-radius: 999px; padding: 0px 0px; min-height: 38px;
  font-size: 14px; font-weight: 600; letter-spacing: -0.28px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#222222` | ヒーロー（画像） | — | 全面 |
| 2 | 840px | `#ffffff` | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 2020px | `#222222` | 3カラム・画像あり | 中央 | 全幅 |
| 4 | 560px | `#ffffff` | 1カラム・画像あり | 右 | 左（68:32） |
| 5 | 620px | `#ffffff` | 1カラム・画像あり | 左 | 右（69:31） |
| 6 | 1380px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1640px | `#ffffff` | 3カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1560px | `#ffffff` | 4カラム・画像あり | 中央 | 見出しの下 |
| 9 | 760px | — | 4カラム・画像あり | 右 | 見出しの下 |
| 10 | 580px | — | 1カラム・画像あり | 左 | 右（43:57） |
| 11 | 640px | — | 3カラム・画像あり | 右 | — |
| 12 | 1060px | `#ffffff` | 5カラム | 中央 | — |
| 13 | 540px | — | 4カラム | 左 | — |

- 全13セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#0766f4` の面が 4 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（14） / `#f6f6f6`（4） / `#0766f4`（4） / `#222222`（2）
- 見出しは左3／中央6。
- 2カラムの分け方は 68:32 / 69:31 / 43:57。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e6e6e6。面によって入れ替える */
  border-radius: 8px;
  padding: 24px 24px;
}
```

ラベル・タグ

```css
.chip{
  background: #f6f6f6; color: #000000;
  border-radius: 999px; padding: 5px 12px; font-size: 16px;
}
```

## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 16 箇所ある（24px×12、32px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 3:2（6枚）、1:1（4枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0766f4 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#f7f7f7; --on:#f7f7f7 }
.section--main .btn--fill{ background:#f7f7f7; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:8px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#0766f4; color:#ffffff; border-radius:500px;
  padding:16px 24px; min-height:54px;
  font-size:14px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#0766f4` の面を全幅で交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 80px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（8px と 12px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
