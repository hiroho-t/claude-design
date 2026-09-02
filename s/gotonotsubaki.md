# 五島の椿オンラインショップ ふうのデザイン

- 出典: https://gotonotsubaki.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／美容･化粧品･コスメ･ケア用品

#f0eeec の地に `#003723` を大きな面で置く配色。影も枠線もほとんど使わない。本文 20px・行間 2、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f0eeec;
  --main: #003723;
  --sub: #cf000e;
  --ink: #cf000e;
  --ink-rev: #ffffff;
  --on: #003723;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "荳ｸ譏弱が繝ｼ繝ｫ繝� StdN R", sans-serif;
  --font-en: "AGaramondPro-Italic", sans-serif;
  --fs-body: 20px;
  --lh-body: 2;
  --container: 1152px;
  --read: 744px;
  --section-y: 160px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f0eeec` | 73.6% |
| 主色 | `#003723` | 12.4% |
| 副色 | `#cf000e` | 4.7% |
| 差し色 | `#9b6f65` | 1.6% |

文字色は `#cf000e` / `#ffffff` / `#003723`。

- 主色 `#003723` は差し色ではなく**面**で使う。画面の12%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0eeec` | 5 | 0 | 0 | 0 |
| `#cf000e` | 9 | 58 | 5 | 4 |
| `#003723` | 1 | 2 | 0 | 0 |
| `#ffffff` | 10 | 38 | 5 | 3 |

- `#003723` は面1箇所・文字2箇所を行き来する。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f0eeec`（地） | `#003723` |
| `#cf000e` | `#ffffff` |
| `#003723`（主色） | `#ffffff` |

```css
.section{ --on:#003723 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 荳ｸ譏弱が繝ｼ繝ｫ繝� StdN R
- 欧文: AGaramondPro-Italic
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 24px | 1.55 |
| 本文 | 20px | 1.55 |
| 補助 | 16px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 20px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 744px
- セクションの上下余白: 160 / 48 / 60 / 64px（基本は 160px）
- 並びの間隔: px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## ボタン

```css
.btn{
  background: transparent; color: #cf000e;
  border: 1px solid #cf000e;
  border-radius: 4px; padding: 0px 0px; min-height: 50px;
  font-size: 20px; font-weight: 400; letter-spacing: 2.4px;
}
.btn-sub{
  background: #cf000e; color: #ffffff;
  border-radius: 4px; padding: 0px 0px; min-height: 40px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.92px;
}
.btn-sub{
  background: #ffffff; color: #003723;
  border-radius: 4px; padding: 0px 0px; min-height: 40px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.92px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 2100px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1160px | `#f0eeec` | 1カラム・文字だけ | 中央 | — |
| 3 | 1620px | `#f0eeec` | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1220px | `#003723` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 940px | `#f0eeec` | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 860px | `#f0eeec` | 1カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#003723` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f0eeec`（5） / `#cf000e`（2） / `#003723`（1）
- 見出しは左1／中央5。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 18枚使っている
- 比率は 1:1（12枚）、16:9（5枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#003723 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:2100px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#cf000e; border-radius:4px;
  padding:0px 0px; min-height:50px;
  font-size:20px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#003723` の面を全幅で交互に置く。主色は画面の12%を占めるだけ使う。
- 余白 160px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。
