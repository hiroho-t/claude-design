# 株式会社アイデアクラウド − Opening new doors to collaboration. ふうのデザイン

- 出典: https://ideacloud.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／デザイン･イラスト･写真･映像･制作

白地に `#192c55` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 1.8、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #192c55;
  --ink: #192c55;
  --ink-rev: #000000;
  --on: #192c55;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.8;
  --container: 696px;
  --read: 1168px;
  --section-y: 80px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 88% |
| 主色 | `#192c55` | 8.6% |

文字色は `#192c55` / `#000000` / `#ffffff`。

- 主色 `#192c55` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 2 | 20 | 0 | 0 |
| `#f1f4f4` | 5 | 0 | 0 | 0 |
| `#192c55` | 15 | 63 | 0 | 0 |
| `#7486ff` | 1 | 0 | 0 | 0 |
| `#ffc1c2` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 3 | 0 | 0 |

- `#192c55` は文字色として63箇所で使うのが主。面としては15箇所しかないが、1枚が大きく画面の9%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#192c55` |
| `#f1f4f4` | `#192c55` |
| `#192c55`（主色） | `#000000` |

```css
.section{ --on:#192c55 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 600 / 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 45px | 1.16 |
| 見出し | 32px | 1.15 |
| 小見出し | 26px | — |
| リード | 18px | 1.67 |
| リード | 17px | — |
| リード | 16px | 2 |
| 本文 | 15px | 1.15 |

- 本文は 15px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 696px／読ませる段は 1168px
- セクションの上下余白: 80 / 160 / 192 / 200px（基本は 80px）
- 並びの間隔: 10 / 40 / 80px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 781 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.8 | 15px / 行間 2.13 |
| 見出し | 45px | 26px / 行間 1.15 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 40px | 10px |

- 本文は 15px → 15px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 24 / 18 / 15 / 14 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #192c55;
  border-radius: 50px; padding: 0px 50px; min-height: 50px;
  font-size: 15px; font-weight: 600; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #192c55;
  border-radius: 0px; padding: 0px 0px; min-height: 33px;
  font-size: 15px; font-weight: 600; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | 右 | 全幅 |
| 2 | 160px | — | 帯・区切り | — | — |
| 3 | 1080px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 2060px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 680px | `#f1f4f4` | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1020px | — | 1カラム・画像あり | 左 | 右（67:33） |
| 7 | 780px | — | 1カラム・画像あり | 左 | — |
| 8 | 300px | — | 帯・区切り | — | 全面 |

- 全8セクション。
- 主色 `#192c55` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（2） / `#f1f4f4`（1） / `#192c55`（1）
- 見出しは左2／中央3。
- 2カラムの分け方は 67:33。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #192c55; color: #ffffff;
  border-radius: 999px; padding: 4px 24px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 18 箇所ある（48px×12、104px×5、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 29枚使っている
- 比率は 16:9（8枚）、4:3（4枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#192c55 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#192c55; border-radius:50px;
  padding:0px 50px; min-height:50px;
  font-size:15px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:15px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#192c55` の面を交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 80px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
