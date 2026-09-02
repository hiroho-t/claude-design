# 【公式】次世代型テレマティクスサービス ふうのデザイン

- 出典: https://www.ntt.com/business/services/linkeeth/lp/linkeeth.html
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#e4fcff` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 2、セクション間 44px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e4fcff;
  --sub: #8cb1a5;
  --ink: #000000;
  --ink-rev: #edf8fa;
  --on: #e4fcff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Roboto", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1200px;
  --read: 640px;
  --section-y: 44px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 54.3% |
| 主色 | `#e4fcff` | 19.2% |
| 副色 | `#8cb1a5` | 4.4% |
| 差し色 | `#4d9097` | 4.1% |
| 差し色 | `#b0e3dd` | 3.8% |
| 差し色 | `#b6eff7` | 3.7% |

文字色は `#000000` / `#edf8fa` / `#20aee5` / `#ffffff`。

- 主色 `#e4fcff` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は`rgba(44, 46, 53, 0.15) 0px 0px 60px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 22 | 29 | 0 | 0 |
| `#e6f7fa` | 10 | 3 | 0 | 0 |
| `#20aee5` | 3 | 39 | 17 | 0 |
| `#f3fbfd` | 10 | 0 | 0 | 0 |
| `#edebeb` | 1 | 0 | 13 | 0 |
| `#000000` | 0 | 62 | 0 | 0 |

- `#e4fcff` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e4fcff` |
| `#e6f7fa` | `#e4fcff` |
| `#20aee5` | `#e4fcff` |

```css
.section{ --on:#e4fcff }                     /* 地の面 */
.section--main{ background:var(--main); color:#edf8fa; --on:#edf8fa }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#edf8fa }
.section--main .btn--fill{ background:#edf8fa; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Roboto
- 欧文: Roboto
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1 |
| 見出し | 24px | — |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 2 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 640px
- セクションの上下余白: 44 / 52 / 56 / 100px（基本は 44px）
- 並びの間隔: 6 / 8 / 12 / 16px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 769 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 10px / 行間 1.75 |
| 見出し | 40px | 28px / 行間 1 |
| セクションの上下余白 | 44px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 12px | 4px |

- 本文は 15px → 10px、セクション余白は 44px → 40px（PCの91%）。
- 文字サイズの段は 28 / 16 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #20aee5;
  border: 1px solid #20aee5;
  border-radius: 15px; padding: 0px 19px; min-height: 30px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #20aee5;
  border: 1px solid #20aee5;
  border-radius: 30px; padding: 0px 0px; min-height: 60px;
  font-size: 14px; font-weight: 500; letter-spacing: 1.12px;
}
.btn-sub{
  background: transparent; color: #20aee5;
  border: 1px solid #20aee5;
  border-radius: 15px; padding: 0px 14px; min-height: 26px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 12200px | — | ヒーロー | — | — |
| 2 | 2140px | `#e6f7fa` | 1カラム・画像あり | 中央 | 全幅 |
| 3 | 2180px | `#ffffff` | 1カラム・画像あり | 中央 | — |
| 4 | 800px | — | 1カラム・画像あり | 左 | 右（12:88） |
| 5 | 1100px | — | 1カラム・画像あり | 右 | 左（49:51） |
| 6 | 860px | — | 1カラム・画像あり | 中央 | 右（14:86） |
| 7 | 1500px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 8 | 2120px | — | 1カラム・画像あり | 左 | — |
| 9 | 120px | `#ffffff` | 3カラム・画像あり | 左 | 見出しの下 |
| 10 | 700px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 11 | 400px | — | 2カラム・画像あり | 左 | — |
| 12 | 660px | — | 1カラム・画像あり | — | — |

- 全12セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（11） / `#e6f7fa`（1） / `#20aee5`（1）
- 見出しは左4／中央5。
- 2カラムの分け方は 12:88 / 49:51 / 14:86。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 30px;
  padding: 52px 56px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #20aee5;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 18px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 28 箇所ある（64px×10、80px×4、144px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 48枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、1:1（7枚）、16:9（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e4fcff }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:12200px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#edf8fa; --on:#edf8fa }
.section--main .btn--fill{ background:#edf8fa; color:var(--main) }
.card{ background:#ffffff;
  border-radius:30px; padding:52px 56px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#20aee5; border-radius:15px;
  padding:0px 19px; min-height:30px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:10px; --section-y:40px; --gap:4px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#e4fcff` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 44px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 30px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
