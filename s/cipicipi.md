# CipiCipi（シピシピ） ふうのデザイン

- 出典: https://cipicipi.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／美容･化粧品･コスメ･ケア用品／レスポンシブ

白地に `#fbcce4` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 1.4、セクション間 200px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fbcce4;
  --sub: #eea5b5;
  --ink: #ffffff;
  --ink-rev: #1c1c1c;
  --on: #fbcce4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "classico-urw", sans-serif;
  --font-en: "classico-urw", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.4;
  --container: 864px;
  --read: 904px;
  --section-y: 200px;
  --gap: 50px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 56.8% |
| 主色 | `#fbcce4` | 11.4% |
| 副色 | `#eea5b5` | 7.1% |
| 差し色 | `#ea7ba2` | 6.4% |
| 差し色 | `#e5dadc` | 5.2% |
| 差し色 | `#88424c` | 3.2% |

文字色は `#ffffff` / `#1c1c1c`。

- 主色 `#fbcce4` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fdf9f7` | 11 | 65 | 9 | 0 |
| `#f9dce8` | 3 | 0 | 0 | 0 |
| `#eda4bb` | 3 | 0 | 0 | 0 |
| `#fedef5` | 3 | 0 | 0 | 0 |
| `#ea7aa2` | 3 | 0 | 0 | 0 |
| `#1c1c1c` | 0 | 45 | 3 | 0 |

- `#fbcce4` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fdf9f7` | `#fbcce4` |
| `#ffffff`（地） | `#fbcce4` |
| `#f9dce8` | `#fbcce4` |
| `#eda4bb` | `#fbcce4` |

```css
.section{ --on:#fbcce4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1c1c1c; --on:#1c1c1c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1c1c1c }
.section--main .btn--fill{ background:#1c1c1c; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: classico-urw
- 欧文: classico-urw
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1 |
| 見出し | 26px | — |
| 小見出し | 21px | 1.7 |
| リード | 19px | — |
| 本文 | 18px | 1 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 18px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 864px／読ませる段は 904px
- セクションの上下余白: 200 / 40 / 80 / 96px（基本は 200px）
- 並びの間隔: 12 / 30 / 50 / 60px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1281 / 1267 / 1024 / 1023px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.4 | 12px / 行間 2 |
| 見出し | 30px | 16px / 行間 1 |
| セクションの上下余白 | 200px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 50px | 10px |

- 本文は 18px → 12px、セクション余白は 200px → 40px（PCの20%）。
- 文字サイズの段は 21 / 15 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 9999px; padding: 0px 0px; min-height: 46px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.84px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 82px;
  font-size: 11px; font-weight: 400; letter-spacing: 0.66px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | 右 | 左（33:67） |
| 2 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 3 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 4 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 5 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 6 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 7 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 8 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |
| 9 | 720px | — | 2カラム・画像あり | 右 | 左（33:67） |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fdf9f7`（4） / `#ffffff`（3） / `#f9dce8`（3） / `#eda4bb`（3）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 33:67 / 33:67 / 33:67 / 33:67 / 33:67 / 33:67 / 33:67 / 33:67 / 33:67。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #f9dce8;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（40px×3、48px×1、56px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 67枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 1:1（60枚）、3:2（6枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fbcce4 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1c1c1c; --on:#1c1c1c }
.section--main .btn--fill{ background:#1c1c1c; color:var(--main) }
.card{ background:#f9dce8;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:9999px;
  padding:0px 0px; min-height:46px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#fbcce4` の面を全幅で交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 200px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
