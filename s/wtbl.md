# 静岡東部の土木・解体工事会社 ふうのデザイン

- 出典: https://wtbl.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／建設･インフラ･土木･設備／レスポンシブ

白地に `#212121` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #212121;
  --sub: #d1cdc0;
  --ink: #212121;
  --ink-rev: #ffffff;
  --on: #212121;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 664px;
  --read: 580px;
  --section-y: 32px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 79.7% |
| 主色 | `#212121` | 11.7% |
| 副色 | `#d1cdc0` | 1.7% |

文字色は `#212121` / `#ffffff` / `#333333` / `#000000`。

- 主色 `#212121` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 10 | 0 | 0 |
| `#eeeeee` | 4 | 0 | 1 | 0 |
| `#212121` | 5 | 24 | 2 | 1 |
| `#333333` | 0 | 4 | 0 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#212121` は文字色として24箇所で使うのが主。面としては5箇所しかないが、1枚が大きく画面の12%を占める。ボタンの地にも使う。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#212121` |
| `#eeeeee` | `#212121` |
| `#212121`（主色） | `#ffffff` |

```css
.section{ --on:#212121 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ゴシックMB101 R JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Material Icons
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 68px | 1.4 |
| 見出し | 55px | 1.4 |
| 小見出し | 43px | 1.4 |
| リード | 24px | — |
| リード | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 2 |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 664px／読ませる段は 580px
- セクションの上下余白: 32 / 52 / 156 / 180px（基本は 32px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 14px / 行間 2 |
| 見出し | 68px | 26px / 行間 1.4 |
| セクションの上下余白 | 32px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 14px、セクション余白は 32px → 52px（PCの163%）。
- 文字サイズの段は 24 / 16 / 14 / 13 / 10px。

## ボタン

```css
.btn{
  background: #212121; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 76px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 700px | `#ffffff` | 1カラム・文字だけ | 中央 | — |
| 4 | 3220px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 1740px | `#ffffff` | 1カラム・画像あり | 左 | — |
| 6 | 820px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |
| 7 | 560px | — | 1カラム・画像あり | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（8） / `#eeeeee`（4） / `#212121`（1）
- 見出しは左3／中央1。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #eeeeee;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 5枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#212121 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#eeeeee;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#212121; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:76px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:52px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#212121` は文字と小さな部品にだけ使う。
- 余白 32px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
