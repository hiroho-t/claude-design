# リーン・サイト運営プラットフォーム KARTE Blocks ふうのデザイン

- 出典: https://blocks.karte.io/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#12a0a0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #12a0a0;
  --sub: #12a0a0;
  --ink: #00100e;
  --ink-rev: #354341;
  --on: #12a0a0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1040px;
  --read: 660px;
  --section-y: 64px;
  --gap: 24px;
  --radius: 12px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.5% |
| 主色 | `#e5efef` | 5.2% |
| 副色 | `#12a0a0` | 3.1% |
| 差し色 | `#c9cccb` | 1.8% |
| 差し色 | `#a8babb` | 1.7% |

文字色は `#00100e` / `#354341` / `#ffffff` / `#12a0a0`。

- 主色 `#12a0a0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 16, 14, 0.08) 0px 4px 10px -2px, rgba(0, 16, 14, 0.03) 0px 4px 20px 8px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f8f8` | 9 | 0 | 0 | 0 |
| `#ffffff` | 15 | 8 | 2 | 4 |
| `#12a0a0` | 5 | 14 | 0 | 4 |
| `#00100e` | 0 | 121 | 0 | 0 |
| `#354341` | 0 | 19 | 0 | 0 |

- `#12a0a0` は面5箇所・文字14箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f8f8` | `#12a0a0` |
| `#ffffff`（地） | `#12a0a0` |
| `#12a0a0`（主色） | `#354341` |

```css
.section{ --on:#12a0a0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#354341; --on:#354341 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#354341 }
.section--main .btn--fill{ background:#354341; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 900 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.6 |
| 見出し | 36px | 1.4 |
| 小見出し | 32px | 1.5 |
| リード | 24px | — |
| リード | 20px | 1.6 |
| リード | 18px | — |
| 本文 | 16px | 2 |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1040px／読ませる段は 660px
- セクションの上下余白: 64 / 56 / 80 / 160px（基本は 64px）
- 並びの間隔: 8 / 16 / 24 / 64px
- 角丸: 12px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 1.84 |
| 見出し | 48px | 36px / 行間 1.4 |
| セクションの上下余白 | 64px | 24px |
| 左右の余白 | — | 40px |
| 並びの間隔 | 24px | 8px |

- 本文は 16px → 14px、セクション余白は 64px → 24px（PCの38%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #12a0a0; color: #ffffff;
  border-radius: 78px; padding: 0px 0px; min-height: 59px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.32px;
}
.btn-sub{
  background: #ffffff; color: #00100e;
  border-radius: 64px; padding: 13px 20px; min-height: 40px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
}
.btn-sub{
  background: #12a0a0; color: #ffffff;
  border-radius: 54px; padding: 13px 32px; min-height: 40px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 440px | — | ヒーロー（画像） | 中央 | 右（66:34） |
| 2 | 300px | — | 帯・区切り | — | — |
| 3 | 680px | — | 1カラム・画像あり | — | 全面 |
| 4 | 1160px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1260px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 4480px | — | 2カラム・画像あり | 中央 | 全幅 |
| 7 | 960px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1200px | `#f7f8f8` | 4カラム・画像あり | 中央 | 見出しの下 |
| 9 | 380px | `#12a0a0` | 1カラム・画像あり | 中央 | 見出しの下 |

- 全9セクション。
- 使われている面の色: `#f7f8f8`（9） / `#ffffff`（4） / `#12a0a0`（1）
- 見出しは左0／中央7。
- 2カラムの分け方は 66:34。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #f0f1f1。面によって入れ替える */
  border-radius: 12px;
  padding: 0px 0px;
  box-shadow: rgba(0, 16, 14, 0.08) 0px 4px 10px -2px, rgba(0, 16, 14, 0.03) 0px 4px 20px 8px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #00100e;
  border-radius: 999px; padding: 13px 20px; font-size: 14px;
}
```

## 画像

- 29枚使っている
- 比率は 3:2（8枚）、4:3（7枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#12a0a0 }
.container{ width:min(100% - 80px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:440px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#354341; --on:#354341 }
.section--main .btn--fill{ background:#354341; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:12px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#12a0a0; color:#ffffff; border-radius:78px;
  padding:0px 0px; min-height:59px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:641px){
  :root{ --fs-body:14px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 80px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#12a0a0` は文字と小さな部品にだけ使う。
- 余白 64px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（12px と 0px 以外）を混ぜない。
