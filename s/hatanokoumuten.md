# 株式会社波多野工務店 採用サイト ふうのデザイン

- 出典: https://hatanokoumuten.site/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

#f7f6f2 の地に `#3e1f00` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f6f2;
  --main: #3e1f00;
  --ink: #3e1f00;
  --ink-rev: #476c53;
  --on: #3e1f00;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1100px;
  --read: 860px;
  --section-y: 100px;
  --gap: 70px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f6f2` | 93.6% |
| 主色 | `#6c7172` | 1.6% |

文字色は `#3e1f00` / `#476c53` / `#ffffff`。

- 主色 `#3e1f00` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 19 | 14 | 0 | 3 |
| `#f0efe9` | 5 | 0 | 0 | 0 |
| `#476c53` | 4 | 31 | 7 | 4 |
| `#3e1f00` | 0 | 76 | 1 | 0 |

- `#3e1f00` は文字色として76箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#3e1f00` |
| `#f0efe9` | `#3e1f00` |

```css
.section{ --on:#3e1f00 }                     /* 地の面 */
.section--main{ background:var(--main); color:#476c53; --on:#476c53 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#476c53 }
.section--main .btn--fill{ background:#476c53; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f7f6f2` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 24px | 1.6 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 2 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 860px
- セクションの上下余白: 100 / 140 / 60 / 160px（基本は 100px）
- 並びの間隔: 70px
- 角丸: 10px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 961 / 960 / 600 / 561 / 560px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 16px / 行間 2.1 |
| 見出し | 32px | 22px / 行間 1.5 |
| セクションの上下余白 | 100px | 52px |
| 左右の余白 | — | 18px |
| 並びの間隔 | 70px | 25px |

- 本文は 16px → 16px、セクション余白は 100px → 52px（PCの52%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #476c53; color: #ffffff;
  border: 1px solid #476c53;
  border-radius: 30px; padding: 7px 18px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.2px;
}
.btn-sub{
  background: #ffffff; color: #476c53;
  border: 1px solid #476c53;
  border-radius: 0px; padding: 45px 10px; min-height: 79px;
  font-size: 12px; font-weight: 700; letter-spacing: 1.152px;
}
.btn-sub{
  background: #476c53; color: #ffffff;
  border: 1px solid #476c53;
  border-radius: 0px; padding: 45px 10px; min-height: 79px;
  font-size: 12px; font-weight: 700; letter-spacing: 1.152px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 3020px | — | 1カラム・画像あり | 右 | 左（80:20） |
| 3 | 1480px | — | 2カラム・画像あり | 右 | 左（43:57） |
| 4 | 820px | — | 1カラム・文字だけ | 右 | — |
| 5 | 1020px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 6 | 620px | — | 1カラム・文字だけ | 左 | — |
| 7 | 720px | `#f0efe9` | 3カラム・画像あり | 左 | 右（25:75） |
| 8 | 1500px | — | 1カラム・画像あり | — | 全面 |
| 9 | 580px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 10 | 660px | — | 1カラム・文字だけ | 左 | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（13） / `#f0efe9`（5）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 80:20 / 43:57 / 25:75。半分ずつには割らない。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #476c53; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 7px 18px; font-size: 14px;
}
```

## 画像

- 21枚使っている
- 比率は 1:1（12枚）、3:2（4枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3e1f00 }
.container{ width:min(100% - 36px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#476c53; --on:#476c53 }
.section--main .btn--fill{ background:#476c53; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#476c53; color:#ffffff; border-radius:30px;
  padding:7px 18px; min-height:30px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:16px; --section-y:52px; --gap:25px; }
  .container{ width:calc(100% - 36px) }
}
```

## 守ること

やること

- 地は `#f7f6f2` のまま。主色 `#3e1f00` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（10px と 30px 以外）を混ぜない。
