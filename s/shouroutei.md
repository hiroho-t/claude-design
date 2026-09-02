# 和風処 鐘楼亭 ふうのデザイン

- 出典: https://shouroutei.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／料理･食べ物･飲み物･食品製造

白地に `#ffffff` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ffffff;
  --ink: #333333;
  --ink-rev: #000000;
  --on: #ffffff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", "Noto Serif JP", sans-serif;
  --font-en: "Noto Serif JP", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 764px;
  --read: 640px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 92.2% |

文字色は `#333333` / `#000000` / `#f7f7f7` / `#ffffff`。

- 主色 `#ffffff` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 3 | 2 | 0 | 0 |
| `#f7f7f7` | 2 | 3 | 0 | 0 |
| `#eeeeee` | 3 | 0 | 0 | 0 |
| `#333333` | 1 | 41 | 0 | 0 |
| `#000000` | 0 | 4 | 0 | 0 |

- `#ffffff` は面として3箇所、文字として2箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ffffff` |
| `#eeeeee` | `#ffffff` |
| `#f7f7f7` | `#ffffff` |

```css
.section{ --on:#ffffff }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: リュウミン R-KL JIS2004（有料）→ 無料で近いのは **Shippori Mincho**、なければ Noto Serif JP
- 欧文: Noto Serif JP
- ウェイトは 500 / 900 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.4 |
| 見出し | 40px | — |
| 小見出し | 28px | 1.4 |
| リード | 16px | 1.7 |
| 本文 | 15px | 2 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 764px／読ませる段は 640px
- セクションの上下余白: 52 / 136 / 140 / 112px（基本は 52px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 360px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 14px / 行間 2 |
| 見出し | 48px | 28px / 行間 1.4 |
| セクションの上下余白 | 52px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 14px、セクション余白は 52px → 32px（PCの62%）。
- 文字サイズの段は 28 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #333333;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 760px | — | 1カラム・画像あり | — | 全面 |
| 3 | 1040px | — | 1カラム・文字だけ | — | — |
| 4 | 1040px | — | 1カラム・文字だけ | — | — |
| 5 | 180px | — | 帯・区切り | 左 | — |
| 6 | 840px | — | 2カラム・画像あり | 右 | 左（62:38） |
| 7 | 1180px | — | 1カラム・画像あり | 左 | 右（62:38） |
| 8 | 540px | — | 3カラム | 中央 | — |
| 9 | 1040px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 10 | 640px | `#ffffff` | 1カラム・画像あり | 左 | — |

- 全10セクション。
- 使われている面の色: `#ffffff`（3） / `#eeeeee`（3） / `#f7f7f7`（2）
- 見出しは左3／中央2。
- 2カラムの分け方は 62:38 / 62:38。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 9枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（3枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffffff }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#333333; border-radius:0px;
  padding:0px 0px; min-height:28px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ffffff` は文字と小さな部品にだけ使う。
- 余白 52px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
