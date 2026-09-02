# 熊本の介護求人なら【ケアプラス介護スタッフ】 ふうのデザイン

- 出典: https://www.care-plus.jp/staff/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ポータルサイト･メディア･情報サイト／求人･マッチング･転職･人材ビジネス

白地に `#69318e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #69318e;
  --sub: #dbdfd3;
  --ink: #999999;
  --ink-rev: #666666;
  --on: #69318e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Barlow Semi Condensed", sans-serif;
  --fs-body: 12px;
  --lh-body: 1;
  --container: 708px;
  --read: 560px;
  --section-y: 120px;
  --gap: 2px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 65.2% |
| 主色 | `#69318e` | 7.1% |
| 副色 | `#dbdfd3` | 5.7% |
| 差し色 | `#000000` | 5.5% |
| 差し色 | `#c3bfad` | 4.6% |
| 差し色 | `#8b8e66` | 3.8% |

文字色は `#999999` / `#666666` / `#95ae17` / `#ffffff`。

- 主色 `#69318e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 25 | 26 | 1 | 4 |
| `#f4f1f6` | 8 | 0 | 0 | 5 |
| `#69318e` | 4 | 10 | 1 | 2 |
| `#000000` | 1 | 18 | 0 | 0 |
| `#955ebf` | 2 | 0 | 0 | 0 |
| `#999999` | 0 | 13 | 0 | 0 |
| `#666666` | 0 | 7 | 0 | 0 |
| `#95ae17` | 6 | 29 | 5 | 5 |

- `#69318e` は面4箇所・文字10箇所を行き来する。ボタンの地にも使う。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#69318e` |
| `#955ebf` | `#666666` |
| `#f4f1f6` | `#69318e` |
| `#f7f7f7` | `#69318e` |

```css
.section{ --on:#69318e }                     /* 地の面 */
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e0e0e0`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Hiragino Kaku Gothic Pro（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Barlow Semi Condensed
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1 |
| 見出し | 22px | — |
| 小見出し | 18px | — |
| リード | 16px | 1.5 |
| リード | 14px | — |
| 本文 | 12px | 1 |

- 本文は 12px・行間 1。

## レイアウト

- コンテンツ幅: 最大 708px／読ませる段は 560px
- セクションの上下余白: 120 / 112 / 32 / 56px（基本は 120px）
- 並びの間隔: 1 / 2 / 32px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1279 / 1159 / 1024 / 779 / 329px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1 | 11px / 行間 1 |
| 見出し | 28px | 14px / 行間 1.5 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 2px | 4px |

- 本文は 12px → 11px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 16 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #95ae17;
  border-radius: 0px; padding: 0px 0px; min-height: 35px;
  font-size: 11px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #f7f7f7; color: #95ae17;
  border: 1px solid #e0e0e0;
  border-radius: 0px; padding: 6px 4px; min-height: 27px;
  font-size: 11px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー（画像） | — | — |
| 2 | 820px | — | 3カラム・画像あり | 左 | 右（51:49） |
| 3 | 2820px | — | 6カラム・画像あり | 右 | 見出しの下 |
| 4 | 700px | — | 1カラム・画像あり | 右 | 左（35:65） |
| 5 | 360px | — | 3カラム・画像あり | 中央 | 全幅 |
| 6 | 380px | `#69318e` | 1カラム・画像あり | — | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#955ebf`（1） / `#f4f1f6`（1） / `#f7f7f7`（1）
- 見出しは左1／中央1。
- 2カラムの分け方は 51:49 / 35:65。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e0e0e0。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 5px; padding: 5px 7px; font-size: 12px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 1 箇所ある（32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（18枚）、4:3（6枚）、1:1（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#69318e }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#95ae17; border-radius:0px;
  padding:0px 0px; min-height:35px;
  font-size:11px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:779px){
  :root{ --fs-body:11px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#69318e` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
