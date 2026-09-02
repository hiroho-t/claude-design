# 株式会社GoodTheWhat ふうのデザイン

- 出典: https://www.goodthewhat.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#1a1a1a` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2.2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1a1a1a;
  --sub: #cab4b6;
  --ink: #1a1a1a;
  --ink-rev: #fafafa;
  --on: #1a1a1a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "din-2014", sans-serif;
  --font-en: "din-2014", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.2;
  --container: 1296px;
  --read: 584px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.3% |
| 主色 | `#1a1a1a` | 5.6% |
| 副色 | `#cab4b6` | 3.5% |

文字色は `#1a1a1a` / `#fafafa` / `#f1f1f1`。

- 主色 `#1a1a1a` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 0px 0px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fafafa` | 19 | 12 | 0 | 0 |
| `#1a1a1a` | 5 | 75 | 2 | 4 |
| `#f1f1f1` | 1 | 4 | 28 | 0 |

- `#1a1a1a` は文字色として75箇所で使うのが主。面としては5箇所しかないが、1枚が大きく画面の6%を占める。ボタンの地にも使う。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1a1a1a` |
| `#fafafa` | `#1a1a1a` |
| `#f1f1f1` | `#1a1a1a` |
| `#1a1a1a`（主色） | `#fafafa` |

```css
.section{ --on:#1a1a1a }                     /* 地の面 */
.section--main{ background:var(--main); color:#fafafa; --on:#fafafa }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#fafafa }
.section--main .btn--fill{ background:#fafafa; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: din-2014
- 欧文: din-2014
- ウェイトは 800 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | — |
| 見出し | 32px | — |
| 小見出し | 20px | 1 |
| リード | 18px | — |
| 本文 | 16px | 2.2 |
| 補助 | 12px | — |

- 本文は 16px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1296px／読ませる段は 584px
- セクションの上下余白: 40 / 240 / 60 / 360px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 834 / 782 / 600 / 500 / 499px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.2 | 16px / 行間 1.5 |
| 見出し | 52px | 18px / 行間 1 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 35 / 22 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: #1a1a1a; color: #f1f1f1;
  border-radius: 0px; padding: 24px 0px; min-height: 80px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #f1f1f1;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 440px | — | ヒーロー（画像） | — | 全面 |
| 2 | 6200px | — | 3カラム・画像あり | 左 | 全幅 |
| 3 | 900px | — | 1カラム・画像あり | — | 全面 |

- 全3セクション。
- 使われている面の色: `#ffffff`（17） / `#fafafa`（1） / `#f1f1f1`（1） / `#1a1a1a`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（14箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #1a1a1a;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 20px; font-size: 16px;
}
```

## 画像

- 25枚使っている
- 比率は 4:3（17枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1a1a1a }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:440px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#fafafa; --on:#fafafa }
.section--main .btn--fill{ background:#fafafa; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#1a1a1a; color:#f1f1f1; border-radius:0px;
  padding:24px 0px; min-height:80px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:834px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1a1a1a` は文字と小さな部品にだけ使う。
- 余白 40px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。
