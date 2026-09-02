# バクラク ふうのデザイン

- 出典: https://bakuraku.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#0e63c4` を大きな面で置く配色。影を使って浮かせる。本文 12px・行間 1.5、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0e63c4;
  --sub: #004ba1;
  --ink: #233447;
  --ink-rev: #ffffff;
  --on: #0e63c4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.5;
  --container: 1132px;
  --read: 780px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 58.8% |
| 主色 | `#0e63c4` | 8.3% |
| 副色 | `#004ba1` | 5.7% |
| 差し色 | `#c8d7dc` | 4.6% |
| 差し色 | `#002e68` | 4.5% |
| 差し色 | `#014088` | 4.4% |

文字色は `#233447` / `#ffffff` / `#0e63c4` / `#7e90a3`。

- 主色 `#0e63c4` は差し色ではなく**面**で使う。画面の8%を占めている。
- 影は`rgb(207, 227, 255) 0px 0px 24px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f7f7` | 10 | 0 | 0 | 3 |
| `#ffffff` | 37 | 45 | 0 | 7 |
| `#0e63c4` | 9 | 12 | 3 | 5 |
| `#cfe3ff` | 1 | 0 | 0 | 0 |
| `#ddfc54` | 7 | 0 | 0 | 2 |
| `#233447` | 0 | 88 | 0 | 0 |
| `#7e90a3` | 0 | 8 | 0 | 0 |

- `#0e63c4` は面9箇所・文字12箇所を行き来する。ボタンの地にも使う。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0e63c4` |
| `#0e63c4`（主色） | `#ffffff` |
| `#f7f7f7` | `#0e63c4` |
| `#cfe3ff` | `#0e63c4` |

```css
.section{ --on:#0e63c4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f7f7f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 1.3 |
| 見出し | 56px | 1.5 |
| 小見出し | 40px | 1.5 |
| リード | 24px | 1.25 |
| リード | 20px | 1.25 |
| リード | 18px | 1.5 |
| リード | 16px | — |

- 本文は 12px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1132px／読ませる段は 780px
- セクションの上下余白: 80 / 40 / 56 / 64px（基本は 80px）
- 並びの間隔: 4 / 8 / 16 / 24px
- 角丸: 0px が基本。大きな面だけ 6px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1080 / 1079 / 1024 / 767 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 64px | 32px / 行間 1.3 |
| セクションの上下余白 | 80px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 24px |

- 本文は 12px → 12px、セクション余白は 80px → 24px（PCの30%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #233447;
  border-radius: 9999px; padding: 12px 24px; min-height: 49px;
  font-size: 20px; font-weight: 600; letter-spacing: 1px;
}
.btn-sub{
  background: #00967b; color: #ffffff;
  border-radius: 0px; padding: 4px 8px; min-height: 35px;
  font-size: 18px; font-weight: 600; letter-spacing: 0.36px;
}
.btn-sub{
  background: #f7f7f7; color: #4c6075;
  border-radius: 6px; padding: 24px 16px; min-height: 80px;
  font-size: 20px; font-weight: 500; letter-spacing: 2%;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1800px | — | ヒーロー（画像） | 左 | 右（43:57） |
| 2 | 1780px | `#f7f7f7` | 6カラム・画像あり | 中央 | — |
| 3 | 1160px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1600px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1060px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 640px | `#0e63c4` | 1カラム・画像あり | 左 | — |
| 7 | 1000px | `#f4f9ff` | 4カラム・画像あり | 中央 | — |
| 8 | 1100px | — | 4カラム・画像あり | — | 全面 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#0e63c4` の面が 4 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（22） / `#0e63c4`（4） / `#f7f7f7`（2） / `#cfe3ff`（1）
- 見出しは左3／中央4。
- 2カラムの分け方は 43:57。半分ずつには割らない。


## 部品

囲み（15箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 6px;
  padding: 24px 24px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（40px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 17枚使っている
- 比率は 1:1（9枚）、4:3（4枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0e63c4 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:6px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#233447; border-radius:9999px;
  padding:12px 24px; min-height:49px;
  font-size:20px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:12px; --section-y:24px; --gap:24px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#0e63c4` の面を全幅で交互に置く。主色は画面の8%を占めるだけ使う。
- 余白 80px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 6px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 6px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
