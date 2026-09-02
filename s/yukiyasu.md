# 幸保工務店 ふうのデザイン

- 出典: https://www.yukiyasu.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア

#efefec の地に `#1ebce2` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #efefec;
  --main: #1ebce2;
  --sub: #8d8982;
  --ink: #ffffff;
  --ink-rev: #333333;
  --on: #1ebce2;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1264px;
  --read: 720px;
  --section-y: 100px;
  --gap: 6px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#efefec` | 30.3% |
| 主色 | `#1ebce2` | 10.5% |
| 副色 | `#8d8982` | 9.2% |
| 差し色 | `#80776a` | 8.5% |
| 差し色 | `#cfcbc2` | 5.6% |
| 差し色 | `#212323` | 5.2% |

文字色は `#ffffff` / `#333333` / `#555555` / `#777777`。

- 主色 `#1ebce2` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は`rgba(0, 0, 0, 0.25) 0px 0px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#efefec` | 28 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#0bb5db` | 1 | 0 | 0 | 0 |
| `#0f96cf` | 6 | 3 | 1 | 1 |
| `#ffffff` | 20 | 94 | 20 | 11 |
| `#333333` | 0 | 26 | 4 | 0 |
| `#555555` | 0 | 21 | 0 | 0 |
| `#777777` | 0 | 13 | 0 | 0 |

- `#1ebce2` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#efefec`（地） | `#1ebce2` |
| `#00b0d7` | `#1ebce2` |
| `#0f96cf` | `#333333` |
| `#000000` | `#333333` |

```css
.section{ --on:#1ebce2 }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#efefec` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Helvetica Neue
- ウェイトは 500 / 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.4 |
| 見出し | 30px | — |
| 小見出し | 24px | 1 |
| リード | 20px | 1 |
| リード | 16px | — |
| 本文 | 14px | 2 |
| 補助 | 13px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1264px／読ませる段は 720px
- セクションの上下余白: 100 / 80 / 64 / 40px（基本は 100px）
- 並びの間隔: 4 / 6 / 80px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1024 / 1023 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 12px / 行間 1.6 |
| 見出し | 32px | 20px / 行間 1.4 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 6px | 6px |

- 本文は 14px → 12px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 20 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #555555;
  border: 1px solid #ffffff;
  border-radius: 100px; padding: 9px 15px; min-height: 32px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #b6b6b6; color: #ffffff;
  border-radius: 50px; padding: 10px 16px; min-height: 32px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border: 1px solid #333333;
  border-radius: 50px; padding: 9px 12px; min-height: 32px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.24px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 920px | — | ヒーロー（画像） | — | 全面 |
| 2 | 740px | `#0f96cf` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1120px | — | 1カラム・画像あり | 左 | 全幅 |
| 4 | 3500px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 3640px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 580px | — | 6カラム・画像あり | 左 | 右（50:50） |

- 全6セクション。
- 使われている面の色: `#efefec`（23） / `#00b0d7`（1） / `#0f96cf`（1） / `#000000`（1）
- 見出しは左2／中央3。
- 2カラムの分け方は 50:50。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #efefec;
  border-radius: 4px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #555555;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 9px 15px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 13 箇所ある（32px×7、80px×3、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 85枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（54枚）、1:1（12枚）、4:3（11枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1ebce2 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:920px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#efefec;
  border-radius:4px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#555555; border-radius:100px;
  padding:9px 15px; min-height:32px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:12px; --section-y:40px; --gap:6px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#1ebce2` の面を交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
