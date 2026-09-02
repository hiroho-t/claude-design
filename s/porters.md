# ポーターズ株式会社 ふうのデザイン

- 出典: https://www.porters.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

#24211e の地に `#24211e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.92、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #24211e;
  --main: #24211e;
  --sub: #667c7d;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #24211e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.92;
  --container: 1200px;
  --read: 600px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#24211e` | 79% |
| 主色 | `#ffffff` | 11.3% |
| 副色 | `#667c7d` | 2.2% |

文字色は `#ffffff` / `#000000`。

- 主色 `#24211e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 3 | 96 | 6 | 2 |
| `#24211e` | 4 | 0 | 0 | 0 |
| `#000000` | 3 | 35 | 0 | 0 |
| `#2c2926` | 1 | 0 | 0 | 0 |

- `#24211e` は面として4箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#24211e`（地） | `#000000` |
| `#000000` | `#000000` |
| `#2c2926` | `#000000` |
| `#ffffff` | `#24211e` |

```css
.section{ --on:#000000 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#24211e` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 18px | 1.78 |
| 小見出し | 15px | 1 |
| リード | 14px | — |
| 本文 | 13px | 1.92 |
| 補助 | 12px | — |
| 注記 | 10px | 1 |

- 本文は 13px・行間 1.92。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 600px
- セクションの上下余白: 100 / 200 / 40 / 44px（基本は 100px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1333 / 1100 / 1024 / 800px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.92 | 13px / 行間 1.54 |
| 見出し | 28px | 14px / 行間 1 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 16px | —px |

- 本文は 13px → 13px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.75px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 5px; padding: 0px 0px; min-height: 50px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.75px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1420px | — | ヒーロー（画像） | 中央 | 右（75:25） |
| 2 | 560px | — | 1カラム・画像あり | 中央 | 全幅 |
| 3 | 820px | — | 2カラム・画像あり | 右 | 見出しの下 |
| 4 | 960px | — | 2カラム・画像あり | 右 | 見出しの下 |
| 5 | 480px | — | 1カラム・画像あり | — | — |
| 6 | 620px | — | 1カラム・文字だけ | 左 | — |
| 7 | 120px | — | 帯・区切り | 左 | — |
| 8 | 760px | `#24211e` | 1カラム・画像あり | 左 | 全幅 |

- 全8セクション。
- 使われている面の色: `#24211e`（3） / `#000000`（2） / `#2c2926`（1） / `#ffffff`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 75:25。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #24211e;
  border-radius: 0px;
  padding: 46px 48px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（64px×3、48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 12枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（4枚）、4:3（3枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#000000 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1420px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#24211e;
  border-radius:0px; padding:46px 48px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 0px; min-height:50px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:800px){
  :root{ --fs-body:13px; --section-y:40px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#24211e` のまま。主色 `#24211e` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.92 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.92 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
