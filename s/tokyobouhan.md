# 東京都防犯ネットワーク ふうのデザイン

- 出典: https://www.bouhan.metro.tokyo.lg.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ポータルサイト･メディア･情報サイト／ベビー･子ども･子育て／地域･地方創生･政治･行政･自治体･NPO

白地に `#d3edf5` を大きな面で置く配色。影を使って浮かせる。本文 17px・行間 1.7、セクション間 44px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d3edf5;
  --sub: #abe29c;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #d3edf5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 17px;
  --lh-body: 1.7;
  --container: 808px;
  --read: 632px;
  --section-y: 44px;
  --gap: 13px;
  --radius: 32px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 46.4% |
| 主色 | `#d3edf5` | 18% |
| 副色 | `#abe29c` | 11.9% |
| 差し色 | `#fff2c3` | 8.7% |
| 差し色 | `#7b5e65` | 3.4% |
| 差し色 | `#96a2b0` | 3.1% |

文字色は `#333333` / `#ffffff` / `#8a8a8b` / `#ff706b`。

- 主色 `#d3edf5` は差し色ではなく**面**で使う。画面の18%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 5.27086px 5.27086px 21.0835px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 36 | 15 | 16 | 3 |
| `#d3edf5` | 7 | 0 | 0 | 5 |
| `#f6f6f6` | 10 | 0 | 0 | 0 |
| `#a5e1a0` | 3 | 0 | 0 | 1 |
| `#fff2c3` | 1 | 0 | 0 | 0 |
| `#333333` | 0 | 122 | 0 | 0 |
| `#8a8a8b` | 0 | 10 | 0 | 0 |
| `#ff706b` | 7 | 7 | 3 | 1 |

- `#d3edf5` は面として7箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#d3edf5` |
| `#f6f6f6` | `#d3edf5` |
| `#d3edf5`（主色） | `#d3edf5` |
| `#a5e1a0` | `#d3edf5` |

```css
.section{ --on:#d3edf5 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 53px | 1.3 |
| 見出し | 21px | 1.7 |
| 小見出し | 20px | 1.5 |
| リード | 19px | — |
| 本文 | 17px | 1.7 |
| 補助 | 15px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 808px／読ませる段は 632px
- セクションの上下余白: 44 / 128 / 36 / 64px（基本は 44px）
- 並びの間隔: 4 / 11 / 13 / 32px
- 角丸: 32px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.7 | 17px / 行間 1.7 |
| 見出し | 53px | 31px / 行間 1.4 |
| セクションの上下余白 | 44px | 32px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 13px | 10px |

- 本文は 17px → 17px、セクション余白は 44px → 32px（PCの73%）。
- 文字サイズの段は 19 / 17 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: #d3edf5; color: #333333;
  border-radius: 9999px; padding: 0px 0px; min-height: 36px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.47584px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 9999px; padding: 11px 46px; min-height: 45px;
  font-size: 17px; font-weight: 700; letter-spacing: 1.68668px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 9999px; padding: 16px 74px; min-height: 76px;
  font-size: 17px; font-weight: 700; letter-spacing: 1.68668px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | `#a5e1a0` | ヒーロー（画像） | — | 全幅 |
| 2 | 460px | `#ffffff` | 5カラム・画像あり | 右 | 右（29:71） |
| 3 | 1120px | `#fff2c3` | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 1040px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1040px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 2860px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 860px | `#d3edf5` | 3カラム・画像あり | 左 | 左（22:78） |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#d3edf5` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（13） / `#f6f6f6`（10） / `#d3edf5`（2） / `#a5e1a0`（1）
- 見出しは左4／中央1。
- 2カラムの分け方は 29:71 / 22:78。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #f6f6f6;
  border-radius: 32px;
  padding: 42px 42px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #ff706b;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 14px; font-size: 15px;
}
```

## 丸いもの

角丸は 32px だが、**完全な円は別扱い**で 37 箇所ある（48px×17、24px×12、32px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 34枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（17枚）、2:3（10枚）、16:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d3edf5 }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f6f6f6;
  border-radius:32px; padding:42px 42px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#d3edf5; color:#333333; border-radius:9999px;
  padding:0px 0px; min-height:36px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:17px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地色と主色 `#d3edf5` の面を全幅で交互に置く。主色は画面の18%を占めるだけ使う。
- 余白 44px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 32px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（32px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
