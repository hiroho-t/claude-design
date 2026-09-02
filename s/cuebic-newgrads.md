# RECRUIT 株式会社キュービック 新卒採用 ふうのデザイン

- 出典: https://cuebic.co.jp/recruit/newgrads/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／デザイン･イラスト･写真･映像･制作

白地に `#003b85` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.7、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #003b85;
  --sub: #015fad;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #003b85;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Red Hat Display", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.7;
  --container: 636px;
  --read: 836px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 37.7% |
| 主色 | `#003b85` | 30% |
| 副色 | `#015fad` | 4.5% |
| 差し色 | `#000000` | 3.7% |
| 差し色 | `#002f69` | 3.2% |
| 差し色 | `#6e737c` | 2.9% |

文字色は `#000000` / `#ffffff` / `#003b85` / `#72787c`。

- 主色 `#003b85` は差し色ではなく**面**で使う。画面の30%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#003b85` | 4 | 6 | 3 | 0 |
| `#ffffff` | 2 | 24 | 2 | 0 |
| `#002f6a` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 20 | 0 | 0 |
| `#72787c` | 0 | 6 | 0 | 0 |

- `#003b85` は面4箇所・文字6箇所を行き来する。ボタンの地には使っていない。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#003b85`（主色） | `#ffffff` |
| `#ffffff`（地） | `#003b85` |
| `#002f6a` | `#ffffff` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#003b85 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Red Hat Display
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.65 |
| 見出し | 46px | 1.36 |
| 小見出し | 28px | 1.7 |
| リード | 24px | 1.7 |
| リード | 22px | — |
| リード | 18px | — |
| 本文 | 16px | 1.7 |

- 本文は 16px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 636px／読ませる段は 836px
- セクションの上下余白: 40 / 80 / 100 / 112px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1240 / 1060 / 782 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.7 | 14px / 行間 1.7 |
| 見出し | 48px | 35px / 行間 1.36 |
| セクションの上下余白 | 40px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 40px → 40px（PCの100%）。
- 文字サイズの段は 35 / 16 / 15 / 14 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 30px; padding: 15px 60px; min-height: 61px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #003b85;
  border: 2px solid #003b85;
  border-radius: 30px; padding: 15px 60px; min-height: 61px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1360px | — | 1カラム・画像あり | 中央 | 全幅 |
| 3 | 1400px | `#003b85` | 1カラム・画像あり | 左 | 全幅 |
| 4 | 780px | `#003b85` | 1カラム・画像あり | 右 | 左（78:22） |
| 5 | 920px | `#003b85` | 1カラム・画像あり | 左 | 右（50:50） |
| 6 | 1120px | `#003b85` | 1カラム・画像あり | 右 | 全幅 |
| 7 | 1080px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 8 | 1440px | — | 1カラム・文字だけ | 中央 | — |
| 9 | 780px | — | 1カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#003b85` の面が 4 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#003b85`（4） / `#ffffff`（2） / `#002f6a`（1） / `#000000`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 78:22 / 50:50。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 10枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（3枚）、3:4（2枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#003b85 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:30px;
  padding:15px 60px; min-height:61px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#003b85` の面を全幅で交互に置く。主色は画面の30%を占めるだけ使う。
- 余白 40px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。
