# 城山熊野神社オフィシャルサイト ふうのデザイン

- 出典: https://shiroyamakumano-jinja.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／寺･神社･葬儀･仏壇／レスポンシブ

白地に `#8da57a` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 200px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #8da57a;
  --sub: #f2f0ec;
  --ink: #737373;
  --ink-rev: #ffffff;
  --on: #8da57a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "fot-tsukuaoldmin-pr6n", sans-serif;
  --font-en: "fot-tsukuaoldmin-pr6n", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1292px;
  --read: 644px;
  --section-y: 200px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 63.3% |
| 主色 | `#222222` | 13.5% |
| 副色 | `#f2f0ec` | 9.7% |
| 差し色 | `#8da57a` | 2.2% |
| 差し色 | `#46795f` | 2% |
| 差し色 | `#917c58` | 1.8% |

文字色は `#737373` / `#ffffff` / `#a3a3a3`。

- 主色 `#8da57a` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 2 | 28 | 0 | 0 |
| `#000000` | 3 | 0 | 0 | 0 |
| `#f2f0ec` | 1 | 0 | 0 | 0 |
| `#222222` | 2 | 0 | 0 | 1 |
| `#737373` | 0 | 28 | 0 | 0 |
| `#a3a3a3` | 0 | 3 | 0 | 0 |

- `#8da57a` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#000000` | `#ffffff` |
| `#ffffff`（地） | `#8da57a` |
| `#f2f0ec` | `#8da57a` |
| `#222222` | `#ffffff` |

```css
.section{ --on:#8da57a }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: fot-tsukuaoldmin-pr6n
- 欧文: fot-tsukuaoldmin-pr6n
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | 1.4 |
| 見出し | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1292px／読ませる段は 644px
- セクションの上下余白: 200 / 120 / 52 / 80px（基本は 200px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 896 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 2 |
| 見出し | 22px | 18px / 行間 1.5 |
| セクションの上下余白 | 200px | 80px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 200px → 80px（PCの40%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 10px。

## ボタン

```css
.btn{
  background: #222222; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 15px; font-weight: 300; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 6300px | — | 3カラム・画像あり | 中央 | 全幅 |
| 3 | 480px | `#222222` | 1カラム・画像あり | — | — |

- 全3セクション。
- 使われている面の色: `#000000`（3） / `#ffffff`（1） / `#f2f0ec`（1） / `#222222`（1）
- 見出しは左0／中央1。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #000000;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 18枚使っている
- 比率は 3:2（10枚）、2:3（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#8da57a }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#000000;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#222222; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:54px;
  font-size:15px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:896px){
  :root{ --fs-body:14px; --section-y:80px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#8da57a` は文字と小さな部品にだけ使う。
- 余白 200px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
