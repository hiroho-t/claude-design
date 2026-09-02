# 大森さくら保育園 ふうのデザイン

- 出典: https://omori-sakura.iwamiginzan.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／保育園･幼稚園･こども園／ベビー･子ども･子育て

#fdfcf9 の地に `#0079c3` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.7、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fdfcf9;
  --main: #0079c3;
  --ink: #000000;
  --ink-rev: #0079c3;
  --on: #0079c3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "-apple-system", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.7;
  --container: 1084px;
  --read: 824px;
  --section-y: 52px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fdfcf9` | 90% |
| 主色 | `#353b2b` | 1.9% |

文字色は `#000000` / `#0079c3` / `#ffffff` / `#8b8b8b`。

- 主色 `#0079c3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fdfcf9` | 11 | 17 | 0 | 2 |
| `#f8f4e9` | 1 | 0 | 0 | 0 |
| `#eae06d` | 8 | 0 | 8 | 0 |
| `#cacacb` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 75 | 0 | 0 |
| `#0079c3` | 0 | 29 | 2 | 0 |
| `#8b8b8b` | 0 | 1 | 0 | 0 |

- `#0079c3` は文字色として29箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fdfcf9`（地） | `#0079c3` |
| `#eae06d` | `#0079c3` |
| `#f8f4e9` | `#0079c3` |

```css
.section{ --on:#0079c3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#0079c3; --on:#0079c3 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0079c3 }
.section--main .btn--fill{ background:#0079c3; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Yu Gothic（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: -apple-system
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.9 |
| 見出し | 32px | 1.7 |
| 小見出し | 28px | 1.7 |
| リード | 22px | 1.7 |
| リード | 20px | — |
| 本文 | 16px | 1.7 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1084px／読ませる段は 824px
- セクションの上下余白: 52 / 120 / 40 / 100px（基本は 52px）
- 並びの間隔: 30px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1290 / 1001 / 1000 / 600 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.7 | 16px / 行間 1.7 |
| 見出し | 34px | 21px / 行間 1.7 |
| セクションの上下余白 | 52px | 32px |
| 左右の余白 | — | 42px |
| 並びの間隔 | 30px | 15px |

- 本文は 16px → 16px、セクション余白は 52px → 32px（PCの62%）。
- 文字サイズの段は 18 / 16 / 14 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #0079c3;
  border: 2px solid #0079c3;
  border-radius: 100px; padding: 20px 0px; min-height: 78px;
  font-size: 20px; font-weight: 700; letter-spacing: 2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 9 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 10 | 820px | — | 1カラム・画像あり | — | 全幅 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fdfcf9`（5） / `#eae06d`（3） / `#f8f4e9`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 62枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 3:2（32枚）、1:1（17枚）、16:9（10枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0079c3 }
.container{ width:min(100% - 84px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0079c3; --on:#0079c3 }
.section--main .btn--fill{ background:#0079c3; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#0079c3; border-radius:100px;
  padding:20px 0px; min-height:78px;
  font-size:20px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:16px; --section-y:32px; --gap:15px; }
  .container{ width:calc(100% - 84px) }
}
```

## 守ること

やること

- 地は `#fdfcf9` のまま。主色 `#0079c3` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
