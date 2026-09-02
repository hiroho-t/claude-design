# 株式会社belmo l 香水, アウトドア, スポーツ l ニッチなニーズに応える専門商社 ふうのデザイン

- 出典: https://www.belmo.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

#f4ede5 の地に `#1b2839` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 null、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f4ede5;
  --main: #1b2839;
  --sub: #ffffff;
  --ink: #ffffff;
  --ink-rev: #b9b8b8;
  --on: #1b2839;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "DM Sans", sans-serif;
  --fs-body: 13px;
  --lh-body: null;
  --container: 1280px;
  --read: 600px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f4ede5` | 36.2% |
| 主色 | `#000000` | 21.9% |
| 副色 | `#ffffff` | 18.7% |
| 差し色 | `#1e2021` | 9.1% |
| 差し色 | `#474948` | 6.2% |
| 差し色 | `#d8dddf` | 3.7% |

文字色は `#ffffff` / `#b9b8b8` / `#1b2839` / `#000000`。

- 主色 `#1b2839` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 14 | 9 | 0 | 7 |
| `#f4ede5` | 3 | 0 | 0 | 0 |
| `#1e2021` | 10 | 0 | 0 | 0 |
| `#ffffff` | 4 | 53 | 3 | 0 |
| `#faf6f2` | 2 | 0 | 0 | 0 |
| `#b9b8b8` | 0 | 13 | 0 | 0 |
| `#1b2839` | 0 | 5 | 0 | 0 |

- `#1b2839` は文字色として5箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#1e2021` | `#b9b8b8` |
| `#000000` | `#b9b8b8` |
| `#f4ede5`（地） | `#1b2839` |
| `#ffffff` | `#1b2839` |

```css
.section{ --on:#1b2839 }                     /* 地の面 */
.section--main{ background:var(--main); color:#b9b8b8; --on:#b9b8b8 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#b9b8b8 }
.section--main .btn--fill{ background:#b9b8b8; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#1e2021` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: DM Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 18px | — |
| 見出し | 16px | — |
| 小見出し | 15px | 1 |
| リード | 14px | — |
| 本文 | 13px | — |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 13px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 600px
- セクションの上下余白: 100 / 56 / 60 / 132px（基本は 100px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1500 / 1024 / 959 / 569 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px | 13px / 行間 1.7 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 13px → 13px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 21 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.39px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 9999px; padding: 20px 45px; min-height: 62px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.39px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 9999px; padding: 22px 25px; min-height: 59px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.39px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 960px | `#f4ede5` | ヒーロー（画像） | 中央 | 右（66:34） |
| 2 | 1060px | `#000000` | 3カラム・画像あり | 中央 | 左（46:54） |
| 3 | 920px | `#f4ede5` | 1カラム・画像あり | 左 | 右（66:34） |
| 4 | 660px | `#ffffff` | 4カラム | 左 | — |
| 5 | 660px | `#f2f3f4` | 4カラム・画像あり | — | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#1e2021`（5） / `#000000`（5） / `#f4ede5`（3） / `#ffffff`（2）
- 見出しは左2／中央2。
- 2カラムの分け方は 66:34 / 46:54 / 66:34。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #1e2021;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #95b300;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 4px 8px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（40px×5、32px×2、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 4枚使っている
- 比率は 21:9（2枚）、3:2（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1b2839 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:960px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#b9b8b8; --on:#b9b8b8 }
.section--main .btn--fill{ background:#b9b8b8; color:var(--main) }
.card{ background:#1e2021;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:64px;
  font-size:13px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:569px){
  :root{ --fs-body:13px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f4ede5` のまま。主色 `#1b2839` は文字と小さな部品にだけ使う。
- 余白 100px と行間 null を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
