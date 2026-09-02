# toutou coco ふうのデザイン

- 出典: https://toutoucoco.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／生活用品･雑貨･インテリア･家具

#f5f2e9 の地に `#f5f2e9` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.65、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f2e9;
  --main: #f5f2e9;
  --sub: #524e4e;
  --ink: #1c1b1b;
  --ink-rev: #ffffff;
  --on: #f5f2e9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Optima", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.65;
  --container: 1312px;
  --read: 592px;
  --section-y: 160px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f2e9` | 54.3% |
| 主色 | `#c9c1ba` | 13.2% |
| 副色 | `#524e4e` | 11.2% |
| 差し色 | `#a3a29b` | 6.4% |
| 差し色 | `#d9d3ce` | 4% |
| 差し色 | `#978f89` | 3.2% |

文字色は `#1c1b1b` / `#ffffff` / `#6a6a6a` / `#a8a6a6`。

- 主色 `#f5f2e9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 21 | 0 | 0 | 0 |
| `#524e4e` | 2 | 0 | 0 | 0 |
| `#f5f2e9` | 7 | 0 | 0 | 5 |
| `#ffffff` | 1 | 25 | 4 | 1 |
| `#1c1b1b` | 0 | 43 | 6 | 0 |
| `#6a6a6a` | 0 | 26 | 1 | 0 |
| `#a8a6a6` | 0 | 17 | 0 | 0 |

- `#f5f2e9` は面として7箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5` | `#f5f2e9` |
| `#524e4e` | `#ffffff` |

```css
.section{ --on:#f5f2e9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Optima
- ウェイトは 400 / 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1.65 |
| 見出し | 20px | 1.65 |
| 小見出し | 18px | — |
| リード | 16px | — |
| リード | 15px | 1.65 |
| リード | 14px | — |
| 本文 | 12px | 1.65 |

- 本文は 12px・行間 1.65。

## レイアウト

- コンテンツ幅: 最大 1312px／読ませる段は 592px
- セクションの上下余白: 160 / 60 / 72 / 76px（基本は 160px）
- 並びの間隔: 10 / 20 / 30 / 111px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 1008 / 1007 / 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.65 | 11px |
| 見出し | 24px | 20px / 行間 1.65 |
| セクションの上下余白 | 160px | 100px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 30px | 12px |

- 本文は 12px → 11px、セクション余白は 160px → 100px（PCの63%）。
- 文字サイズの段は 18 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #f5f2e9; color: #222222;
  border: 1px solid #222222;
  border-radius: 3px; padding: 12px 10px; min-height: 46px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.18px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 3px; padding: 12px 10px; min-height: 46px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.18px;
}
.btn-sub{
  background: #ffffff; color: #222222;
  border-radius: 0px; padding: 10px 10px; min-height: 64px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | — | — |
| 2 | 1060px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1100px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1040px | — | 1カラム・画像あり | 中央 | — |
| 5 | 480px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 6 | 860px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 780px | — | 4カラム・画像あり | 左 | — |
| 8 | 620px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f5f5`（21） / `#524e4e`（1）
- 見出しは左2／中央4。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 39枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（36枚）、3:4（2枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f5f2e9 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f5f2e9; color:#222222; border-radius:3px;
  padding:12px 10px; min-height:46px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:641px){
  :root{ --fs-body:11px; --section-y:100px; --gap:12px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f5f2e9` のまま。主色 `#f5f2e9` は文字と小さな部品にだけ使う。
- 余白 160px と行間 1.65 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.65 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。
