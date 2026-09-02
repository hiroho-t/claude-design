# 【公式】北海道最大の動物病院グループ ふうのデザイン

- 出典: https://midori-no-mori.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬

#fefefb の地に `#3fa037` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 1.5、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fefefb;
  --main: #3fa037;
  --sub: #deeee5;
  --ink: #ffffff;
  --ink-rev: #3fa037;
  --on: #3fa037;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Maru Gothic", sans-serif;
  --font-en: "Nunito", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 1200px;
  --read: 640px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fefefb` | 43.7% |
| 主色 | `#3fa037` | 28.6% |
| 副色 | `#deeee5` | 5.8% |
| 差し色 | `#cfd8cf` | 2.8% |
| 差し色 | `#6fb869` | 2.4% |
| 差し色 | `#76c383` | 2% |

文字色は `#ffffff` / `#3fa037` / `#828282` / `#d3edd1`。

- 主色 `#3fa037` は差し色ではなく**面**で使う。画面の29%を占めている。
- 影は`rgba(0, 0, 0, 0.15) 0px 4px 8px 3px, rgba(0, 0, 0, 0.3) 0px 1px 3px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#3fa037` | 8 | 41 | 0 | 4 |
| `#ffffff` | 5 | 135 | 6 | 4 |
| `#2c3134` | 6 | 0 | 0 | 0 |
| `#1a6585` | 4 | 0 | 0 | 0 |
| `#828282` | 0 | 2 | 0 | 0 |
| `#d3edd1` | 0 | 3 | 0 | 0 |

- `#3fa037` は文字色として41箇所で使うのが主。面としては8箇所しかないが、1枚が大きく画面の29%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#3fa037`（主色） | `#3fa037` |
| `#ffffff` | `#3fa037` |

```css
.section{ --on:#3fa037 }                     /* 地の面 */
.section--main{ background:var(--main); color:#3fa037; --on:#3fa037 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#3fa037 }
.section--main .btn--fill{ background:#3fa037; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Maru Gothic
- 欧文: Nunito
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 80px | — |
| 見出し | 32px | 1.5 |
| 小見出し | 20px | — |
| リード | 16px | — |
| 本文 | 14px | 1.5 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 640px
- セクションの上下余白: 80 / 120 / 60 / 72px（基本は 80px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 15px / 行間 1.5 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 15px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 21 / 19 / 17 / 15 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #3fa037;
  border-radius: 6px; padding: 0px 0px; min-height: 34px;
  font-size: 14px; font-weight: 700; letter-spacing: 1.33px;
}
.btn-sub{
  background: transparent; color: #3fa037;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 14px; font-weight: 700; letter-spacing: 1.33px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 16px; font-weight: 700; letter-spacing: 1.52px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 160px | — | ヒーロー（画像） | — | 全面 |
| 2 | 7760px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 1700px | — | 6カラム・画像あり | — | 全面 |
| 4 | 900px | — | 1カラム・文字だけ | — | — |
| 5 | 900px | — | 1カラム・文字だけ | — | — |
| 6 | 900px | — | 1カラム・文字だけ | — | — |
| 7 | 900px | — | 1カラム・文字だけ | — | — |
| 8 | 900px | — | 1カラム・文字だけ | — | — |
| 9 | 900px | — | 1カラム・文字だけ | — | — |

- 全9セクション。
- 主色 `#3fa037` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#3fa037`（3） / `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #2c3134; color: #ffffff;
  border-radius: 4px; padding: 4px 8px; font-size: 12px;
}
```

## 画像

- 40枚使っている
- 比率は 1:1（18枚）、4:3（12枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3fa037 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:160px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#3fa037; --on:#3fa037 }
.section--main .btn--fill{ background:#3fa037; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#3fa037; border-radius:6px;
  padding:0px 0px; min-height:34px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:15px; --section-y:32px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#3fa037` の面を交互に置く。主色は画面の29%を占めるだけ使う。
- 余白 80px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
