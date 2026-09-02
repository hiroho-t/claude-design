# 学校法人長尾学園 長尾幼稚園 ふうのデザイン

- 出典: https://www.nagaoyouchien.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／保育園･幼稚園･こども園／ベビー･子ども･子育て

白地に `#e88c3e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.88、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e88c3e;
  --sub: #b8c4c0;
  --ink: #000000;
  --ink-rev: #747474;
  --on: #e88c3e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.88;
  --container: 1000px;
  --read: 832px;
  --section-y: 56px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 74.1% |
| 主色 | `#e2d7dc` | 3.6% |
| 副色 | `#b8c4c0` | 2.9% |
| 差し色 | `#675954` | 2.9% |
| 差し色 | `#303234` | 2.6% |
| 差し色 | `#a9a8a6` | 2.3% |

文字色は `#000000` / `#747474` / `#ffffff` / `#222222`。

- 主色 `#e88c3e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#faf8f5` | 2 | 0 | 0 | 0 |
| `#f4ece2` | 1 | 0 | 0 | 0 |
| `#e88c3e` | 6 | 5 | 6 | 2 |
| `#000000` | 0 | 72 | 0 | 0 |
| `#747474` | 0 | 14 | 0 | 0 |
| `#ffffff` | 0 | 4 | 0 | 0 |
| `#222222` | 0 | 1 | 0 | 0 |

- `#e88c3e` は面として6箇所、文字として5箇所。塗りが主役。ボタンの地にも使う。枠線にも6箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#faf8f5` | `#e88c3e` |
| `#f4ece2` | `#e88c3e` |
| `#fcf9f7` | `#e88c3e` |

```css
.section{ --on:#e88c3e }                     /* 地の面 */
.section--main{ background:var(--main); color:#747474; --on:#747474 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#747474 }
.section--main .btn--fill{ background:#747474; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 37px | 1 |
| 見出し | 26px | 1.88 |
| 小見出し | 24px | 1.79 |
| 本文 | 16px | 1.88 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 1.88。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 832px
- セクションの上下余白: 56 / 116 / 120 / 144px（基本は 56px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 38px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1024 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.88 | 16px / 行間 1.73 |
| 見出し | 37px | 28px / 行間 1.67 |
| セクションの上下余白 | 56px | 36px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 56px → 36px（PCの64%）。
- 文字サイズの段は 18 / 17 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 83px; min-height: 65px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: #e88c3e; color: #ffffff;
  border: 2px solid #e88c3e;
  border-radius: 38px; padding: 0px 0px; min-height: 62px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 400px | — | 1カラム・画像あり | 左 | — |
| 3 | 1120px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 2020px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 620px | `#faf8f5` | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 320px | — | 3カラム・画像あり | 左 | 右（11:89） |
| 7 | 800px | — | 1カラム・画像あり | 左 | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#faf8f5`（1） / `#f4ece2`（1） / `#fcf9f7`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 11:89。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（64px×6）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 56枚使っている。うち 14 枚は画面いっぱいに置く
- 比率は 16:9（30枚）、1:1（8枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e88c3e }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#747474; --on:#747474 }
.section--main .btn--fill{ background:#747474; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 83px; min-height:65px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:36px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e88c3e` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1.88 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.88 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 38px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
