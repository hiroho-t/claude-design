# 株式会社estie（エスティ） ふうのデザイン

- 出典: https://www.estie.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／建築･住宅･不動産･空間設計･エクステリア

白地に `#194fff` を大きな面で置く配色。影も枠線もほとんど使わない。本文 12px・行間 1.67、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #194fff;
  --sub: #c3def0;
  --ink: #222222;
  --ink-rev: #72777d;
  --on: #194fff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "UDNumber", sans-serif;
  --font-en: "UDNumber", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.67;
  --container: 1000px;
  --read: 580px;
  --section-y: 80px;
  --gap: 30px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 66.2% |
| 主色 | `#194fff` | 8.3% |
| 副色 | `#c3def0` | 6% |
| 差し色 | `#a2b1c3` | 3.5% |
| 差し色 | `#e5f2fd` | 2.9% |
| 差し色 | `#928f95` | 2.5% |

文字色は `#222222` / `#72777d` / `#ffffff` / `#626a73`。

- 主色 `#194fff` は差し色ではなく**面**で使う。画面の8%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0f5fa` | 3 | 0 | 0 | 0 |
| `#194fff` | 1 | 0 | 0 | 0 |
| `#ffffff` | 1 | 10 | 0 | 0 |
| `#222222` | 0 | 52 | 0 | 0 |
| `#72777d` | 0 | 8 | 0 | 0 |
| `#626a73` | 0 | 4 | 0 | 0 |

- `#194fff` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f0f5fa` | `#194fff` |
| `#194fff`（主色） | `#72777d` |
| `#ffffff`（地） | `#194fff` |

```css
.section{ --on:#194fff }                     /* 地の面 */
.section--main{ background:var(--main); color:#72777d; --on:#72777d }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#72777d }
.section--main .btn--fill{ background:#72777d; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: UDNumber
- 欧文: UDNumber
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 72px | 1.38 |
| 見出し | 48px | — |
| 小見出し | 24px | — |
| リード | 20px | — |
| リード | 16px | — |
| リード | 14px | — |
| リード | 13px | — |

- 本文は 12px・行間 1.67。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 580px
- セクションの上下余白: 80 / 32 / 52 / 56px（基本は 80px）
- 並びの間隔: 17 / 20 / 30 / 50px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 1024 / 599px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.67 | 12px / 行間 1.67 |
| 見出し | 72px | 36px |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 30px | 20px |

- 本文は 12px → 12px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 18 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #e73c4a; color: #ffffff;
  border-radius: 999px; padding: 14px 14px; min-height: 56px;
  font-size: 14px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 160px | — | 3カラム・画像あり | — | 全面 |
| 3 | 1020px | — | 2カラム・画像あり | 中央 | 全幅 |
| 4 | 1080px | `#194fff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 680px | — | 1カラム・画像あり | 中央 | — |
| 6 | 940px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 480px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 8 | 620px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 500px | — | 1カラム・画像あり | 左 | 全幅 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#194fff` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f0f5fa`（3） / `#194fff`（1） / `#ffffff`（1）
- 見出しは左1／中央7。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 24枚使っている。うち 9 枚は画面いっぱいに置く
- 比率は 16:9（15枚）、21:9（1枚）
- 角丸 4px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#194fff }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#72777d; --on:#72777d }
.section--main .btn--fill{ background:#72777d; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e73c4a; color:#ffffff; border-radius:999px;
  padding:14px 14px; min-height:56px;
  font-size:14px; font-weight:600 }

img{ width:100%; height:auto; border-radius:4px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:599px){
  :root{ --fs-body:12px; --section-y:32px; --gap:20px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#194fff` の面を全幅で交互に置く。主色は画面の8%を占めるだけ使う。
- 余白 80px と行間 1.67 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 4px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.67 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。
