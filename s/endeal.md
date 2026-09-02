# 大阪の遺品整理・生前整理・買取ならエンディール ふうのデザイン

- 出典: https://endeal.net/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／暮らし･生活

白地に `#fce9d7` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fce9d7;
  --sub: #60433a;
  --ink: #482607;
  --ink-rev: #ffffff;
  --on: #fce9d7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "新丸ゴ DB", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1100px;
  --read: 616px;
  --section-y: 56px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 44.9% |
| 主色 | `#fce9d7` | 28.4% |
| 副色 | `#60433a` | 4.5% |
| 差し色 | `#f87444` | 4.4% |
| 差し色 | `#82776b` | 4.3% |
| 差し色 | `#96c457` | 3.7% |

文字色は `#482607` / `#ffffff` / `#0068b7` / `#f76a0c`。

- 主色 `#fce9d7` は差し色ではなく**面**で使う。画面の28%を占めている。
- 影は`rgba(179, 59, 15, 0.2) 0px 3px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 109 | 91 | 9 | 27 |
| `#fce9d7` | 25 | 0 | 0 | 0 |
| `#f67e7c` | 3 | 2 | 1 | 0 |
| `#f6f3cd` | 2 | 0 | 0 | 0 |
| `#0eb88a` | 1 | 7 | 3 | 0 |
| `#482607` | 0 | 408 | 0 | 0 |
| `#0068b7` | 0 | 147 | 0 | 0 |
| `#f76a0c` | 23 | 46 | 48 | 5 |

- `#fce9d7` は面として25箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#fce9d7` |
| `#f7ecdf` | `#fce9d7` |
| `#f67e7c` | `#fce9d7` |
| `#ff6511` | `#ffffff` |

```css
.section{ --on:#fce9d7 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 新丸ゴ DB
- 欧文: YakuHanJP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 37px | 1.4 |
| 見出し | 28px | 1.4 |
| 小見出し | 21px | — |
| リード | 20px | — |
| リード | 18px | 1 |
| リード | 17px | 1 |
| 本文 | 16px | 1 |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 616px
- セクションの上下余白: 56 / 76 / 96 / 60px（基本は 56px）
- 並びの間隔: 8 / 10 / 12 / 20px
- 角丸: 0px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 880 / 768 / 640 / 430px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 14px / 行間 1 |
| 見出し | 37px | 14px / 行間 1 |
| セクションの上下余白 | 56px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 12px | 7px |

- 本文は 16px → 14px、セクション余白は 56px → 32px（PCの57%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 9px。

## ボタン

```css
.btn{
  background: #ffffff; color: #482607;
  border: 2px solid #b6a89c;
  border-radius: 1440px; padding: 8px 10px; min-height: 34px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffc2; color: #482607;
  border: 3px solid #f76a0c;
  border-radius: 1440px; padding: 0px 0px; min-height: 70px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.36px;
}
.btn-sub{
  background: #ffffff; color: #482607;
  border: 3px solid #f76a0c;
  border-radius: 1440px; padding: 0px 0px; min-height: 70px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.34px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー | — | — |
| 2 | 1320px | — | 1カラム・画像あり | 中央 | 右（23:77） |
| 3 | 2400px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 640px | — | 1カラム・画像あり | 中央 | 左（31:69） |
| 5 | 1420px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 420px | — | 1カラム・画像あり | 中央 | — |
| 7 | 10140px | `#fce9d7` | 6カラム・画像あり | 中央 | 見出しの下 |
| 8 | 520px | — | 1カラム・画像あり | 中央 | — |
| 9 | 1540px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 10 | 2020px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 11 | 1300px | — | 4カラム・画像あり | 左 | 右（14:86） |
| 12 | 1380px | — | 6カラム・画像あり | 中央 | — |
| 13 | 1000px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 14 | 1160px | — | 1カラム・画像あり | 中央 | — |

- 全14セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（24） / `#f7ecdf`（7） / `#f67e7c`（3） / `#ff6511`（1）
- 見出しは左1／中央12。
- 2カラムの分け方は 23:77 / 31:69 / 14:86。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #482607;
  border: 2px solid currentColor;
  border-radius: 999px; padding: 8px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 38 箇所ある（24px×8、32px×6、56px×6）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 78枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（35枚）、3:4（18枚）、2:3（14枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fce9d7 }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#482607; border-radius:1440px;
  padding:8px 10px; min-height:34px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:880px){
  :root{ --fs-body:14px; --section-y:32px; --gap:7px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#fce9d7` の面を全幅で交互に置く。主色は画面の28%を占めるだけ使う。
- 余白 56px と行間 1 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
