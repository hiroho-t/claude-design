# クラウド株式会社 ふうのデザイン

- 出典: https://www.cloudsoft.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／レスポンシブ

白地に `#04a7fc` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.7、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #04a7fc;
  --sub: #31b4f9;
  --ink: #2f3c3f;
  --ink-rev: #ffffff;
  --on: #04a7fc;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.7;
  --container: 960px;
  --read: 860px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 54.2% |
| 主色 | `#04a7fc` | 29.6% |
| 副色 | `#31b4f9` | 5.5% |
| 差し色 | `#0b41a0` | 2.7% |
| 差し色 | `#87bddb` | 1.6% |
| 差し色 | `#dcc5a7` | 1.6% |

文字色は `#2f3c3f` / `#ffffff` / `#778092` / `#0b41a0`。

- 主色 `#04a7fc` は差し色ではなく**面**で使う。画面の30%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 6px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#04a7fc` | 4 | 4 | 0 | 0 |
| `#ffffff` | 21 | 38 | 2 | 5 |
| `#f7f7f8` | 1 | 0 | 0 | 0 |
| `#0b41a0` | 4 | 5 | 4 | 2 |
| `#008840` | 4 | 0 | 0 | 0 |
| `#2f3c3f` | 0 | 39 | 0 | 0 |
| `#778092` | 0 | 14 | 0 | 0 |

- `#04a7fc` は面として4箇所、文字として4箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#04a7fc`（主色） | `#ffffff` |
| `#ffffff`（地） | `#04a7fc` |
| `#f7f7f8` | `#04a7fc` |
| `#0b41a0` | `#ffffff` |

```css
.section{ --on:#04a7fc }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#04a7fc` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Lato
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.3 |
| 見出し | 36px | 1.4 |
| 本文 | 16px | 1.7 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 960px／読ませる段は 860px
- セクションの上下余白: 100 / 60 / 44 / 52px（基本は 100px）
- 並びの間隔: px
- 角丸: 30px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 1140 / 960 / 768 / 550px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.7 | 16px / 行間 1.7 |
| 見出し | 56px | 36px / 行間 1.4 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 24 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #0b41a0; color: #ffffff;
  border: 2px solid #0b41a0;
  border-radius: 100px; padding: 18px 40px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #0b41a0;
  border-radius: 0px; padding: 0px 0px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 960px | `#04a7fc` | ヒーロー（画像） | — | 全面 |
| 2 | 120px | — | 帯・区切り | — | — |
| 3 | 580px | — | 1カラム・文字だけ | 中央 | — |
| 4 | 1420px | — | 2カラム・画像あり | 右 | 左（59:41） |
| 5 | 920px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1360px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1000px | `#04a7fc` | 1カラム・文字だけ | 中央 | — |
| 8 | 800px | — | 2カラム・画像あり | 左 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#04a7fc` の面が 4 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#04a7fc`（4） / `#ffffff`（2） / `#f7f7f8`（1） / `#0b41a0`（1）
- 見出しは左1／中央4。
- 2カラムの分け方は 59:41。半分ずつには割らない。


## 部品

囲み（14箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 30px;
  padding: 10px 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 10px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #04a7fc; color: #ffffff;
  border-radius: 999px; padding: 4px 18px; font-size: 14px;
}
```

## 画像

- 45枚使っている
- 比率は 3:2（28枚）、16:9（7枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#04a7fc }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:960px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:30px; padding:10px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:58px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#04a7fc` の面を全幅で交互に置く。主色は画面の30%を占めるだけ使う。
- 余白 100px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 30px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（30px と 0px 以外）を混ぜない。
