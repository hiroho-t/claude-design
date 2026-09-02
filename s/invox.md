# invox受取請求書 ふうのデザイン

- 出典: https://invox.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#0094ff` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.71、セクション間 104px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0094ff;
  --ink: #474241;
  --ink-rev: #0094ff;
  --on: #0094ff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.71;
  --container: 1120px;
  --read: 700px;
  --section-y: 104px;
  --gap: 16px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 96.2% |

文字色は `#474241` / `#0094ff` / `#ffffff` / `#a678d6`。

- 主色 `#0094ff` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(71, 66, 65, 0.2) 0px -2px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 19 | 6 | 0 | 9 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#ffcc00` | 24 | 1 | 35 | 16 |
| `#474241` | 5 | 352 | 49 | 0 |
| `#e34047` | 1 | 0 | 0 | 0 |
| `#0094ff` | 0 | 7 | 0 | 0 |
| `#a678d6` | 1 | 1 | 1 | 0 |

- `#0094ff` は文字色として7箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0094ff` |
| `#000000` | `#0094ff` |

```css
.section{ --on:#0094ff }                     /* 地の面 */
.section--main{ background:var(--main); color:#0094ff; --on:#0094ff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0094ff }
.section--main .btn--fill{ background:#0094ff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.56 |
| 見出し | 24px | — |
| 小見出し | 18px | 1.56 |
| リード | 16px | 1.63 |
| 本文 | 14px | 1.71 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.71。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 700px
- セクションの上下余白: 104 / 80 / 40 / 36px（基本は 104px）
- 並びの間隔: 8 / 10 / 16 / 24px
- 角丸: 16px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1100 / 991 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.71 | 14px / 行間 1.86 |
| 見出し | 36px | 32px / 行間 1.38 |
| セクションの上下余白 | 104px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 16px |

- 本文は 14px → 14px、セクション余白は 104px → 24px（PCの23%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #474241;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffcc00; color: #474241;
  border: 2px solid #ffcc00;
  border-radius: 70px; padding: 0px 0px; min-height: 46px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #474241;
  border: 2px solid #ffcc00;
  border-radius: 70px; padding: 0px 0px; min-height: 46px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | 左 | 右（46:54） |
| 2 | 200px | — | 帯・区切り | — | 全幅 |
| 3 | 540px | — | 3カラム | 中央 | — |
| 4 | 1000px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 2120px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1080px | — | 1カラム・文字だけ | 中央 | — |
| 7 | 1060px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1420px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 860px | `#ffffff` | 3カラム・画像あり | 中央 | 見出しの下 |
| 10 | 4840px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 11 | 1800px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 12 | 840px | — | 6カラム・画像あり | 中央 | — |
| 13 | 1400px | — | 6カラム・画像あり | 中央 | — |
| 14 | 2220px | — | 1カラム・画像あり | 中央 | — |
| 15 | 740px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全15セクション。
- 使われている面の色: `#ffffff`（7） / `#000000`（1）
- 見出しは左1／中央13。
- 2カラムの分け方は 46:54。半分ずつには割らない。


## 部品

囲み（24箇所で同じ形）

```css
.card{
  background: transparent;
  border: 2px solid var(--on);   /* 実測は #474241。面によって入れ替える */
  border-radius: 16px;
  padding: 8px 8px;
}
```


## 画像

- 75枚使っている
- 比率は 16:9（32枚）、21:9（30枚）、3:2（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0094ff }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0094ff; --on:#0094ff }
.section--main .btn--fill{ background:#0094ff; color:var(--main) }
.card{ background:transparent; border:2px solid var(--on);
  border-radius:16px; padding:8px 8px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#474241; border-radius:0px;
  padding:0px 0px; min-height:56px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0094ff` は文字と小さな部品にだけ使う。
- 余白 104px と行間 1.71 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.71 より詰めない。
- 中途半端な角丸（16px と 0px 以外）を混ぜない。
