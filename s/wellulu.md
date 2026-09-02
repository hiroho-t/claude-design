# Wellulu ふうのデザイン

- 出典: https://wellulu.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／体験･交流／レスポンシブ

白地に `#e7cc6c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 1.5、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e7cc6c;
  --sub: #e7cc6c;
  --ink: #000000;
  --ink-rev: #888888;
  --on: #e7cc6c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.5;
  --container: 1268px;
  --read: 624px;
  --section-y: 100px;
  --gap: 9px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 75% |
| 主色 | `#e5e9e9` | 5.6% |
| 副色 | `#e7cc6c` | 3.6% |
| 差し色 | `#cecfcf` | 3.5% |
| 差し色 | `#94d3e4` | 2.5% |
| 差し色 | `#939da5` | 1.9% |

文字色は `#000000` / `#888888` / `#949494`。

- 主色 `#e7cc6c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#96d3e5` | 31 | 0 | 0 | 0 |
| `#e7cc6c` | 27 | 0 | 0 | 0 |
| `#c47ce7` | 7 | 0 | 0 | 0 |
| `#f28e8e` | 4 | 0 | 0 | 0 |
| `#364bb3` | 4 | 0 | 0 | 0 |
| `#000000` | 0 | 902 | 40 | 0 |
| `#888888` | 0 | 25 | 0 | 0 |
| `#949494` | 0 | 9 | 0 | 0 |

- `#e7cc6c` は面として27箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#96d3e5` | `#e7cc6c` |
| `#e7cc6c`（主色） | `#e7cc6c` |
| `#c47ce7` | `#e7cc6c` |

```css
.section{ --on:#e7cc6c }                     /* 地の面 */
.section--main{ background:var(--main); color:#888888; --on:#888888 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#888888 }
.section--main .btn--fill{ background:#888888; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 600 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | 1.5 |
| 本文 | 18px | 1.5 |
| 補助 | 16px | 1.6 |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 11px | — |

- 本文は 18px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1268px／読ませる段は 624px
- セクションの上下余白: 100 / 40 / 60 / 52px（基本は 100px）
- 並びの間隔: 6 / 7 / 9 / 11px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 782 / 767 / 737 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.5 | 14px / 行間 1.5 |
| 見出し | 22px | 13px / 行間 1.6 |
| セクションの上下余白 | 100px | 52px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 9px | 7px |

- 本文は 18px → 14px、セクション余白は 100px → 52px（PCの52%）。
- 文字サイズの段は 22 / 14 / 12 / 10 / 9px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 100px; padding: 10px 20px; min-height: 36px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 8px; padding: 13px 16px; min-height: 47px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー | 中央 | — |
| 2 | 1240px | — | 6カラム | 中央 | — |
| 3 | 1140px | — | 6カラム | 中央 | — |
| 4 | 1100px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 920px | — | 4カラム | 左 | — |
| 6 | 3520px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 180px | — | 2カラム・画像あり | — | 全面 |
| 8 | 340px | — | 2カラム・画像あり | 中央 | — |
| 9 | 600px | — | 4カラム | 中央 | — |

- 全9セクション。
- 使われている面の色: `#96d3e5`（26） / `#e7cc6c`（23） / `#c47ce7`（3）
- 見出しは左1／中央7。


## 部品

囲み（30箇所で同じ形）

```css
.card{
  background: #96d3e5;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 10px 20px; font-size: 14px;
}
```

## 画像

- 44枚使っている
- 比率は 4:3（39枚）、3:2（3枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e7cc6c }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#888888; --on:#888888 }
.section--main .btn--fill{ background:#888888; color:var(--main) }
.card{ background:#96d3e5;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:100px;
  padding:10px 20px; min-height:36px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:52px; --gap:7px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e7cc6c` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。
