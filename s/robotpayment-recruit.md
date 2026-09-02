# 採用情報 ふうのデザイン

- 出典: https://www.robotpayment.co.jp/recruit/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#112d61` を大きな面で置く配色。影も枠線もほとんど使わない。本文 20px・行間 2、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #112d61;
  --sub: #091d44;
  --ink: #172e59;
  --ink-rev: #ffffff;
  --on: #112d61;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans CJK JP Subset", sans-serif;
  --font-en: "Noto Sans CJK JP Subset", sans-serif;
  --fs-body: 20px;
  --lh-body: 2;
  --container: 1200px;
  --read: 704px;
  --section-y: 60px;
  --gap: 60px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 75.2% |
| 主色 | `#112d61` | 10.8% |
| 副色 | `#091d44` | 2.4% |
| 差し色 | `#264170` | 1.5% |
| 差し色 | `#bfcace` | 1.5% |

文字色は `#172e59` / `#ffffff` / `#ed3242` / `#0d234d`。

- 主色 `#112d61` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f3f4f6` | 10 | 0 | 0 | 5 |
| `#ffffff` | 3 | 15 | 0 | 2 |
| `#112d61` | 3 | 68 | 0 | 0 |
| `#e02838` | 1 | 0 | 0 | 1 |
| `#344c79` | 1 | 0 | 0 | 0 |
| `#ed3242` | 0 | 4 | 0 | 0 |
| `#0d234d` | 0 | 2 | 0 | 0 |

- `#112d61` は文字色として68箇所で使うのが主。面としては3箇所しかないが、1枚が大きく画面の11%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f3f4f6` | `#112d61` |
| `#112d61`（主色） | `#ffffff` |
| `#ffffff`（地） | `#112d61` |

```css
.section{ --on:#112d61 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans CJK JP Subset
- 欧文: Noto Sans CJK JP Subset
- ウェイトは 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.25 |
| 見出し | 24px | — |
| 本文 | 20px | 2 |
| 補助 | 18px | — |
| 注記 | 16px | — |
| 注記 | 14px | — |

- 本文は 20px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 704px
- セクションの上下余白: 60 / 100 / 160 / 40px（基本は 60px）
- 並びの間隔: 4 / 40 / 60 / 100px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 750 / 640 / 600 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 2 | 16px / 行間 1.5 |
| 見出し | 48px | 24px / 行間 1.4 |
| セクションの上下余白 | 60px | 40px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 60px | 13px |

- 本文は 20px → 16px、セクション余白は 60px → 40px（PCの67%）。
- 文字サイズの段は 24 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #f3f4f6; color: #556685;
  border-radius: 0px; padding: 5px 0px; min-height: 29px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #0d234d;
  border-radius: 2px; padding: 20px 20px; min-height: 81px;
  font-size: 24px; font-weight: 900; letter-spacing: 0;
}
.btn-sub{
  background: #e02838; color: #ffffff;
  border-radius: 0px; padding: 17px 34px; min-height: 50px;
  font-size: 15px; font-weight: 900; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | — | — |
| 2 | 2660px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 3 | 420px | `#f3f4f6` | 1カラム・文字だけ | — | — |
| 4 | 420px | `#f3f4f6` | 1カラム・文字だけ | — | — |
| 5 | 420px | `#f3f4f6` | 1カラム・文字だけ | — | — |
| 6 | 420px | `#f3f4f6` | 1カラム・文字だけ | — | — |
| 7 | 400px | — | 1カラム・画像あり | 左 | — |
| 8 | 560px | — | 5カラム・画像あり | — | 全面 |
| 9 | 800px | — | 1カラム・文字だけ | 中央 | — |

- 全9セクション。
- 主色 `#112d61` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f3f4f6`（5） / `#112d61`（3） / `#ffffff`（1）
- 見出しは左2／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 30枚使っている
- 比率は 2:3（10枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#112d61 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f3f4f6; color:#556685; border-radius:0px;
  padding:5px 0px; min-height:29px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:16px; --section-y:40px; --gap:13px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地色と主色 `#112d61` の面を交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 60px と行間 2 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。
