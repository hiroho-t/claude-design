# MPN［一般社団法人 MPN］ ふうのデザイン

- 出典: https://www.mpn.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／音楽･芸能･映画･テレビ･配信／レスポンシブ

白地に `#014099` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.4、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #014099;
  --sub: #bbb4aa;
  --ink: #212121;
  --ink-rev: #333333;
  --on: #014099;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.4;
  --container: 864px;
  --read: 1152px;
  --section-y: 80px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 80.9% |
| 主色 | `#edeae5` | 15.1% |
| 副色 | `#bbb4aa` | 1.6% |

文字色は `#212121` / `#333333` / `#000000` / `#ffffff`。

- 主色 `#014099` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 14 | 4 | 0 | 0 |
| `#edeae5` | 1 | 0 | 0 | 0 |
| `#faf8f6` | 1 | 0 | 0 | 0 |
| `#014099` | 1 | 3 | 0 | 0 |
| `#212121` | 0 | 57 | 0 | 0 |
| `#333333` | 0 | 49 | 0 | 0 |
| `#000000` | 0 | 3 | 0 | 0 |

- `#014099` は文字色として3箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#014099` |
| `#edeae5` | `#014099` |
| `#faf8f6` | `#014099` |

```css
.section{ --on:#014099 }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#555555`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ヒラギノ角ゴ W4 JIS2004（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Montserrat
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1.4 |
| 見出し | 28px | 1.8 |
| 小見出し | 24px | 1.4 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.4 |

- 本文は 14px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 864px／読ませる段は 1152px
- セクションの上下余白: 80 / 100 / 40 / 140px（基本は 80px）
- 並びの間隔: 20 / 24px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.4 | 13px / 行間 1.7 |
| 見出し | 42px | 20px / 行間 1.8 |
| セクションの上下余白 | 80px | 64px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 24px | 10px |

- 本文は 14px → 13px、セクション余白は 80px → 64px（PCの80%）。
- 文字サイズの段は 20 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #212121;
  border: 1px solid #cdcdcd;
  border-radius: 0px; padding: 30px 0px; min-height: 82px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー | — | — |
| 2 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 600px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（13） / `#edeae5`（1） / `#faf8f6`（1）


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #555555。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（32px×2、64px×1、112px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 28枚使っている。うち 13 枚は画面いっぱいに置く
- 比率は 21:9（13枚）、1:1（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#014099 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#212121; border-radius:0px;
  padding:30px 0px; min-height:82px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:13px; --section-y:64px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#014099` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
