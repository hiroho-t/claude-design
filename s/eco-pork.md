# 株式会社Eco ふうのデザイン

- 出典: https://www.eco-pork.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

#f4f1ef の地に `#0f3c3c` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.7、セクション間 undefinedpx。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f4f1ef;
  --main: #0f3c3c;
  --ink: #333333;
  --ink-rev: #fafafa;
  --on: #0f3c3c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Montserrat", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.7;
  --container: 1296px;
  --read: 576px;
  --section-y: 0px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f4f1ef` | 97.3% |

文字色は `#333333` / `#fafafa` / `#0f3c3c` / `#009b4a`。

- 主色 `#0f3c3c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.3) 0px 0px 9px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f4f1ee` | 4 | 0 | 0 | 0 |
| `#0f3c3c` | 4 | 17 | 0 | 0 |
| `#009b4a` | 5 | 6 | 0 | 0 |
| `#faf9f7` | 7 | 26 | 0 | 0 |
| `#333333` | 0 | 19 | 0 | 0 |

- `#0f3c3c` は文字色として17箇所で使うのが主。面としては4箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f4f1ee` | `#0f3c3c` |
| `#0f3c3c`（主色） | `#fafafa` |
| `#faf9f7` | `#0f3c3c` |
| `#f4f2ee` | `#0f3c3c` |

```css
.section{ --on:#0f3c3c }                     /* 地の面 */
.section--main{ background:var(--main); color:#fafafa; --on:#fafafa }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#fafafa }
.section--main .btn--fill{ background:#fafafa; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#0f3c3c` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Montserrat
- 欧文: Montserrat
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 43px | — |
| 見出し | 40px | — |
| 小見出し | 37px | — |
| リード | 17px | — |
| 本文 | 14px | 1.7 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1296px／読ませる段は 576px
- セクションの上下余白: px（基本は 0px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1921 / 1280 / 1024 / 1023 / 680px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.7 | 16px / 行間 1.8 |
| セクションの上下余白 | 0px | —px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 16px。
- 文字サイズの段は 27 / 24 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffd2cd; color: #000000;
  border-radius: 0px; padding: 6px 20px; min-height: 27px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | `#f4f1ee` | ヒーロー（画像） | 左 | — |
| 2 | 1640px | — | 2カラム・画像あり | 中央 | 右（43:57） |
| 3 | 1060px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 680px | `#f4f2ee` | 3カラム・画像あり | 中央 | — |
| 5 | 960px | — | 2カラム・画像あり | 中央 | — |
| 6 | 280px | — | 帯・区切り | — | 全面 |
| 7 | 820px | `#0f3c3c` | 2カラム・画像あり | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f4f1ee`（3） / `#0f3c3c`（2） / `#faf9f7`（1） / `#f4f2ee`（1）
- 見出しは左1／中央4。
- 2カラムの分け方は 43:57。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #fafafa;
  border-radius: 100px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #009b4a; color: #fafafa;
  border-radius: 999px; padding: 2px 10px; font-size: 10px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（72px×4、184px×3、24px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 2枚使っている
- 比率は 1:1（1枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0f3c3c }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#fafafa; --on:#fafafa }
.section--main .btn--fill{ background:#fafafa; color:var(--main) }
.card{ background:#fafafa;
  border-radius:100px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffd2cd; color:#000000; border-radius:0px;
  padding:6px 20px; min-height:27px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:680px){
  :root{ --fs-body:16px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f4f1ef` のまま。主色 `#0f3c3c` は文字と小さな部品にだけ使う。
- 余白 0px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 100px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
