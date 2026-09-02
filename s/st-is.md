# 東京理科大学 創域理工学部 情報計算科学科 ふうのデザイン

- 出典: https://dept.tus.ac.jp/st-is/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／学校･教育

#f7f7f7 の地に `#00d764` を大きな面で置く配色。影も枠線もほとんど使わない。本文 13px・行間 2、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f7f7;
  --main: #00d764;
  --ink: #1d1d1d;
  --ink-rev: #000000;
  --on: #00d764;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Helvetica Neue", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 13px;
  --lh-body: 2;
  --container: 652px;
  --read: 816px;
  --section-y: 112px;
  --gap: 15px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f7f7` | 81.4% |
| 主色 | `#00d764` | 11.4% |

文字色は `#1d1d1d` / `#000000` / `#ffffff` / `#00d764`。

- 主色 `#00d764` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 7 | 7 | 0 | 3 |
| `#f7f7f7` | 10 | 0 | 0 | 0 |
| `#00d764` | 1 | 14 | 15 | 0 |
| `#1d1d1d` | 0 | 47 | 0 | 0 |
| `#000000` | 0 | 47 | 0 | 0 |

- `#00d764` は文字色として14箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の11%を占める。ボタンの地には使っていない。枠線にも15箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f7f7`（地） | `#00d764` |
| `#ffffff` | `#00d764` |
| `#00d764`（主色） | `#00d764` |

```css
.section{ --on:#00d764 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f7f7f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Helvetica Neue
- 欧文: Helvetica Neue
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | 1 |
| 見出し | 16px | — |
| 小見出し | 15px | — |
| リード | 14px | 2 |
| 本文 | 13px | 2 |
| 補助 | 12px | — |

- 本文は 13px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 652px／読ませる段は 816px
- セクションの上下余白: 112 / 144 / 32 / 56px（基本は 112px）
- 並びの間隔: 11 / 15 / 40px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 769 / 768 / 500 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 2 | 15px / 行間 1.8 |
| セクションの上下余白 | 112px | 32px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 15px | 5px |

- 本文は 13px → 15px、セクション余白は 112px → 32px（PCの29%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #00d764;
  border-radius: 50px; padding: 9px 16px; min-height: 32px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 360px | — | ヒーロー（画像） | 右 | 左（11:89） |
| 2 | 1340px | `#00d764` | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 1120px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 1180px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 480px | — | 2カラム・画像あり | 左 | 右（47:53） |
| 6 | 860px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 2340px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 8 | 1820px | — | 1カラム・画像あり | — | 全面 |

- 全8セクション。
- 主色 `#00d764` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f7f7f7`（9） / `#ffffff`（4） / `#00d764`（1）
- 見出しは左5／中央1。
- 2カラムの分け方は 11:89 / 47:53。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #f7f7f7;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #1d1d1d;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 10px 10px; font-size: 12px;
}
```

## 画像

- 29枚使っている
- 比率は 1:1（10枚）、16:9（9枚）、3:2（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00d764 }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:360px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#f7f7f7;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:15px; --section-y:32px; --gap:5px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地色と主色 `#00d764` の面を交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 112px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。
