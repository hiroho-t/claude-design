# クラシア訪問看護ステーション ふうのデザイン

- 出典: https://classia.biz/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／福祉･介護／レスポンシブ

白地に `#fff8d3` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 null、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fff8d3;
  --sub: #d1d2ce;
  --ink: #4f4844;
  --ink-rev: #ffffff;
  --on: #fff8d3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "UD新丸ゴ M JIS2004", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 852px;
  --read: 580px;
  --section-y: 92px;
  --gap: 7px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.1% |
| 主色 | `#fff8d3` | 3.9% |
| 副色 | `#d1d2ce` | 2.5% |
| 差し色 | `#e3e3e3` | 1.7% |

文字色は `#4f4844` / `#ffffff` / `#333333` / `#a7a49d`。

- 主色 `#fff8d3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(218, 218, 218, 0.3) 0px 2px 25px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 31 | 19 | 0 | 10 |
| `#fff8d3` | 2 | 0 | 0 | 0 |
| `#eeeeee` | 6 | 0 | 12 | 0 |
| `#fdfcf3` | 1 | 0 | 0 | 0 |
| `#f6f2e4` | 5 | 0 | 0 | 0 |
| `#4f4844` | 2 | 63 | 0 | 0 |
| `#333333` | 0 | 8 | 0 | 0 |
| `#a7a49d` | 0 | 10 | 0 | 0 |

- `#fff8d3` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#fff8d3` |
| `#eeeeee` | `#fff8d3` |
| `#fff8d3`（主色） | `#fff8d3` |
| `#fd8399` | `#fff8d3` |

```css
.section{ --on:#fff8d3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: UD新丸ゴ M JIS2004
- ウェイトは 400 / 800 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | — |
| 見出し | 36px | 1.24 |
| 小見出し | 34px | — |
| リード | 32px | 1.24 |
| リード | 24px | — |
| リード | 20px | 1.4 |
| 本文 | 16px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 852px／読ませる段は 580px
- セクションの上下余白: 92 / 132 / 164 / 172px（基本は 92px）
- 並びの間隔: 4 / 6 / 7 / 10px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1513 / 1280 / 990 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 1.7 |
| 見出し | 38px | 20px / 行間 1.4 |
| セクションの上下余白 | 92px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 7px | 24px |

- 本文は 16px → 14px、セクション余白は 92px → 24px（PCの26%）。
- 文字サイズの段は 24 / 16 / 15 / 14 / 13px。

## ボタン

```css
.btn{
  background: #ffffff; color: #4f4844;
  border: 1px solid #e9e9e9;
  border-radius: 300px; padding: 0px 25px; min-height: 56px;
  font-size: 16px; font-weight: 700; letter-spacing: 1.6px;
}
.btn-sub{
  background: #ffffff; color: #4f4844;
  border: 1px solid #e9e9e9;
  border-radius: 300px; padding: 15px 30px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 1.6px;
}
.btn-sub{
  background: transparent; color: #4f4844;
  border-radius: 0px; padding: 0px 0px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 1.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | — |
| 2 | 900px | `#fff8d3` | 3カラム・画像あり | 左 | 全幅 |
| 3 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 2680px | `#ffffff` | 4カラム・画像あり | 中央 | — |
| 5 | 300px | `#ffffff` | 3カラム・画像あり | — | — |
| 6 | 580px | — | 2カラム・画像あり | 左 | — |
| 7 | 700px | — | 2カラム・画像あり | 左 | — |
| 8 | 740px | `#ffffff` | 2カラム・画像あり | 左 | — |

- 全8セクション。
- 使われている面の色: `#ffffff`（7） / `#eeeeee`（5） / `#fff8d3`（1） / `#fd8399`（1）
- 見出しは左4／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #333333;
  border-radius: 9px; padding: 1px 10px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 19 箇所ある（72px×11、40px×3、160px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 4枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fff8d3 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#4f4844; border-radius:300px;
  padding:0px 25px; min-height:56px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:540px){
  :root{ --fs-body:14px; --section-y:24px; --gap:24px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#fff8d3` は文字と小さな部品にだけ使う。
- 余白 92px と行間 null を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
