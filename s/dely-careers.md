# 採用情報 クラシル株式会社 ふうのデザイン

- 出典: https://kurashiru.co.jp/careers
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／企画･開発･マーケティング･コンサルティング／レスポンシブ

#2d3139 の地に `#60727f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #2d3139;
  --main: #60727f;
  --sub: #1b1d22;
  --ink: #ffffff;
  --ink-rev: #1b1d22;
  --on: #60727f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Poppins", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1208px;
  --read: 752px;
  --section-y: 80px;
  --gap: 15px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#2d3139` | 52.3% |
| 主色 | `#4a505f` | 19.1% |
| 副色 | `#1b1d22` | 14.6% |
| 差し色 | `#eceef4` | 5.5% |
| 差し色 | `#60727f` | 3.3% |
| 差し色 | `#9e9a99` | 2.1% |

文字色は `#ffffff` / `#1b1d22` / `#ffc4b4`。

- 主色 `#60727f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#1b1d22` | 12 | 6 | 0 | 0 |
| `#2d3139` | 4 | 0 | 0 | 0 |
| `#4a505f` | 3 | 0 | 0 | 0 |
| `#e9ecf3` | 1 | 0 | 0 | 0 |
| `#e55329` | 6 | 0 | 0 | 6 |
| `#ffffff` | 4 | 77 | 5 | 0 |
| `#ffc4b4` | 0 | 7 | 0 | 0 |

- `#60727f` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#2d3139`（地） | `#1b1d22` |
| `#1b1d22` | `#1b1d22` |
| `#4a505f` | `#1b1d22` |
| `#e9ecf3` | `#60727f` |

```css
.section{ --on:#1b1d22 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1b1d22; --on:#1b1d22 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1b1d22 }
.section--main .btn--fill{ background:#1b1d22; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#2d3139` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Poppins
- 欧文: Poppins
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 80px | 1.8 |
| 見出し | 67px | 1.3 |
| 小見出し | 28px | 1.8 |
| リード | 24px | — |
| リード | 22px | 1.5 |
| リード | 18px | — |
| 本文 | 16px | 1.8 |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1208px／読ませる段は 752px
- セクションの上下余白: 80 / 160 / 120 / 40px（基本は 80px）
- 並びの間隔: 8 / 15 / 34px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 1024 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 15px / 行間 1.6 |
| 見出し | 80px | 41px / 行間 1.3 |
| セクションの上下余白 | 80px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 15px | 8px |

- 本文は 16px → 15px、セクション余白は 80px → 40px（PCの50%）。
- 文字サイズの段は 48 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 100px; padding: 20px 56px; min-height: 76px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #e55329; color: #ffffff;
  border-radius: 10px; padding: 16px 5px; min-height: 61px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 61px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 160px | `#1b1d22` | 帯・区切り | 中央 | — |
| 3 | 1980px | `#2d3139` | 4カラム・画像あり | 中央 | 全幅 |
| 4 | 1000px | — | 1カラム・文字だけ | 中央 | — |
| 5 | 1180px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 920px | `#2d3139` | 5カラム・画像あり | 左 | 見出しの下 |
| 7 | 880px | — | 1カラム・文字だけ | 左 | — |
| 8 | 220px | — | 帯・区切り | — | — |

- 全8セクション。
- 使われている面の色: `#2d3139`（4） / `#1b1d22`（3） / `#4a505f`（3） / `#e9ecf3`（1）
- 見出しは左2／中央5。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #1b1d22;
  border-radius: 10px;
  padding: 36px 0px;
}
```


## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 2 箇所ある（32px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 29枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 4:3（16枚）、16:9（9枚）、21:9（2枚）
- 角丸 10px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1b1d22 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1b1d22; --on:#1b1d22 }
.section--main .btn--fill{ background:#1b1d22; color:var(--main) }
.card{ background:#1b1d22;
  border-radius:10px; padding:36px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:100px;
  padding:20px 56px; min-height:76px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:10px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:15px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#2d3139` のまま。主色 `#60727f` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 10px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
