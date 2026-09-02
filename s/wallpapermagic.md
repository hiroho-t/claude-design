# WALLPAPER MAGIC ふうのデザイン

- 出典: https://wallpapermagic.net/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

#f2e2cb の地に `#f2e2cb` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1.5、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2e2cb;
  --main: #f2e2cb;
  --sub: #5a8866;
  --ink: #444444;
  --ink-rev: #ffffff;
  --on: #f2e2cb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", sans-serif;
  --font-en: "Kaimin Sora Bold", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 568px;
  --read: 648px;
  --section-y: 152px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2e2cb` | 73.5% |
| 主色 | `#ffffff` | 10.3% |
| 副色 | `#5a8866` | 2.8% |
| 差し色 | `#b76952` | 2.3% |
| 差し色 | `#a1b3a3` | 2.2% |
| 差し色 | `#cac4b2` | 2.1% |

文字色は `#444444` / `#ffffff`。

- 主色 `#f2e2cb` は差し色ではなく**面**で使う。画面の74%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5eadb` | 2 | 0 | 0 | 0 |
| `#eeeeee` | 1 | 0 | 0 | 0 |
| `#f2e2cb` | 19 | 0 | 0 | 18 |
| `#ffffff` | 3 | 9 | 0 | 0 |
| `#d37457` | 9 | 0 | 0 | 4 |
| `#444444` | 0 | 63 | 0 | 0 |

- `#f2e2cb` は面として19箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5eadb` | `#f2e2cb` |
| `#eeeeee` | `#f2e2cb` |
| `#f2e2cb`（地） | `#f2e2cb` |
| `#ffffff` | `#f2e2cb` |

```css
.section{ --on:#f2e2cb }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic Antique
- 欧文: Kaimin Sora Bold
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | 1.5 |
| 見出し | 36px | 1.5 |
| 小見出し | 28px | 1.5 |
| リード | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 1.5 |
| 補助 | 11px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 568px／読ませる段は 648px
- セクションの上下余白: 152 / 40 / 60 / 72px（基本は 152px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1680 / 1600 / 1340 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 14px / 行間 1.75 |
| 見出し | 44px | 26px / 行間 1.5 |
| セクションの上下余白 | 152px | 32px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 152px → 32px（PCの21%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #f2e2cb; color: #444444;
  border-radius: 0px; padding: 10px 0px; min-height: 38px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
.btn-sub{
  background: #d37457; color: #ffffff;
  border-radius: 100px; padding: 15px 15px; min-height: 55px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.64px;
}
.btn-sub{
  background: #d37457; color: #ffffff;
  border-radius: 100px; padding: 15px 15px; min-height: 58px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1540px | — | ヒーロー | 右 | — |
| 2 | 620px | — | 1カラム・画像あり | — | 全面 |
| 3 | 1840px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1580px | `#f5eadb` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 820px | `#f5eadb` | 1カラム・画像あり | 右 | 左（28:72） |
| 6 | 960px | `#f2e2cb` | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 620px | `#ffffff` | 1カラム・画像あり | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#f2e2cb` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f5eadb`（2） / `#eeeeee`（1） / `#f2e2cb`（1） / `#ffffff`（1）
- 見出しは左0／中央3。
- 2カラムの分け方は 28:72。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（32px×2、48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 30枚使っている
- 比率は 1:1（8枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f2e2cb }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1540px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f2e2cb; color:#444444; border-radius:0px;
  padding:10px 0px; min-height:38px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地色と主色 `#f2e2cb` の面を全幅で交互に置く。主色は画面の74%を占めるだけ使う。
- 余白 152px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
