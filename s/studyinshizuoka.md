# STUDY IN SHIZUOKA ふうのデザイン

- 出典: https://studyinshizuoka.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／地域･地方創生･政治･行政･自治体･NPO／レスポンシブ

白地に `#d8eeff` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.75、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d8eeff;
  --sub: #eaf6d5;
  --ink: #4c4948;
  --ink-rev: #ffffff;
  --on: #d8eeff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto Flex", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 1200px;
  --read: 668px;
  --section-y: 100px;
  --gap: 22px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 52.7% |
| 主色 | `#d8eeff` | 15.5% |
| 副色 | `#eaf6d5` | 8.7% |
| 差し色 | `#b0bfcc` | 6.1% |
| 差し色 | `#cddbdd` | 4.4% |
| 差し色 | `#c7baa6` | 3.4% |

文字色は `#4c4948` / `#ffffff` / `#a5a4a3` / `#000000`。

- 主色 `#d8eeff` は差し色ではなく**面**で使う。画面の16%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 10 | 11 | 0 | 0 |
| `#d8eeff` | 5 | 0 | 1 | 0 |
| `#dedede` | 1 | 0 | 0 | 0 |
| `#fff57f` | 10 | 0 | 0 | 10 |
| `#eaf6d5` | 1 | 0 | 0 | 0 |
| `#4c4948` | 0 | 137 | 36 | 0 |
| `#a5a4a3` | 0 | 16 | 0 | 0 |
| `#000000` | 0 | 1 | 2 | 0 |

- `#d8eeff` は面として5箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#d8eeff`（主色） | `#d8eeff` |
| `#ffffff`（地） | `#d8eeff` |
| `#dedede` | `#d8eeff` |
| `#eaf6d5` | `#d8eeff` |

```css
.section{ --on:#d8eeff }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#4c4948`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto Flex
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 68px | — |
| 見出し | 64px | — |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 668px
- セクションの上下余白: 100 / 120 / 160 / 172px（基本は 100px）
- 並びの間隔: 15 / 20 / 22 / 80px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 992 / 769 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 15px / 行間 1.75 |
| セクションの上下余白 | 100px | 28px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 22px | 25px |

- 本文は 16px → 15px、セクション余白は 100px → 28px（PCの28%）。
- 文字サイズの段は 17 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #4c4948;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.96px;
}
.btn-sub{
  background: #fff57f; color: #4c4948;
  border: 1px solid #4c4948;
  border-radius: 1440px; padding: 0px 0px; min-height: 60px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.96px;
}
.btn-sub{
  background: #fff57f; color: #4c4948;
  border: 1px solid #4c4948;
  border-radius: 1440px; padding: 0px 0px; min-height: 48px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.84px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | `#d8eeff` | ヒーロー（画像） | — | 全面 |
| 2 | 240px | — | 6カラム・画像あり | — | 全面 |
| 3 | 220px | — | 帯・区切り | — | 全幅 |
| 4 | 680px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1100px | — | 1カラム・画像あり | 中央 | 左（20:80） |
| 6 | 700px | `#d8eeff` | 1カラム・画像あり | — | 全面 |
| 7 | 2720px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 920px | `#d8eeff` | 2カラム・画像あり | 中央 | 見出しの下 |
| 9 | 460px | — | 1カラム・画像あり | 左 | 右（57:43） |
| 10 | 560px | — | 1カラム・文字だけ | 中央 | — |
| 11 | 580px | — | 1カラム・画像あり | 中央 | — |

- 全11セクション。
- 主色 `#d8eeff` の面が 5 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#d8eeff`（5） / `#ffffff`（1） / `#dedede`（1） / `#eaf6d5`（1）
- 見出しは左1／中央6。
- 2カラムの分け方は 20:80 / 57:43。半分ずつには割らない。


## 部品

囲み（16箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #4c4948。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（160px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 62枚使っている
- 比率は 16:9（20枚）、4:3（18枚）、21:9（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d8eeff }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#4c4948; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:15px; --section-y:28px; --gap:25px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#d8eeff` の面を交互に置く。主色は画面の16%を占めるだけ使う。
- 余白 100px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
