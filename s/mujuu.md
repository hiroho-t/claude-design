# 香りで睡眠をケアするアロマシリーズ ふうのデザイン

- 出典: https://mujuu.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／美容･化粧品･コスメ･ケア用品／レスポンシブ

白地に `#bbcbad` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 1.4、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #bbcbad;
  --sub: #dbdbda;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #bbcbad;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Old Mincho", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.4;
  --container: 1224px;
  --read: 720px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.4% |
| 主色 | `#2c423b` | 13% |
| 副色 | `#dbdbda` | 7.8% |
| 差し色 | `#bbcbad` | 1.9% |
| 差し色 | `#0a0d0a` | 1.9% |

文字色は `#ffffff` / `#000000` / `#191919` / `#333333`。

- 主色 `#bbcbad` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 1 | 63 | 5 | 0 |
| `#2c423b` | 2 | 0 | 0 | 0 |
| `#344842` | 1 | 0 | 0 | 0 |
| `#dbdbda` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 27 | 31 | 0 |
| `#191919` | 0 | 24 | 0 | 0 |
| `#333333` | 0 | 5 | 0 | 0 |

- `#bbcbad` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#2c423b` | `#000000` |
| `#ffffff`（地） | `#bbcbad` |
| `#344842` | `#000000` |
| `#dbdbda` | `#bbcbad` |

```css
.section{ --on:#bbcbad }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Old Mincho
- 欧文: Material Icons
- ウェイトは 500 / 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.4 |
| 見出し | 28px | 2 |
| 小見出し | 24px | 1.4 |
| リード | 21px | — |
| リード | 20px | — |
| 本文 | 18px | 1.4 |
| 補助 | 16px | — |

- 本文は 18px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1224px／読ませる段は 720px
- セクションの上下余白: 60 / 120 / 180 / 100px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 24px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1180 / 840 / 690 / 360px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.4 | 14px / 行間 2.4 |
| 見出し | 48px | 16px / 行間 1.4 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 18px → 14px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 24px; padding: 0px 0px; min-height: 40px;
  font-size: 21px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 24px; padding: 0px 0px; min-height: 40px;
  font-size: 21px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 900px | — | 1カラム・文字だけ | — | — |
| 3 | 900px | `#344842` | 1カラム・文字だけ | — | — |
| 4 | 900px | — | 1カラム・画像あり | — | 全面 |
| 5 | 1060px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 360px | — | 1カラム・文字だけ | 中央 | — |
| 7 | 900px | — | 1カラム・画像あり | — | 全面 |
| 8 | 680px | — | 1カラム・画像あり | 右 | 左（42:58） |
| 9 | 700px | — | 1カラム・画像あり | 左 | 右（50:50） |
| 10 | 680px | — | 1カラム・画像あり | 右 | 左（47:53） |
| 11 | 680px | — | 1カラム・画像あり | 左 | 右（47:53） |
| 12 | 840px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 13 | 580px | — | 1カラム・画像あり | 右 | 左（33:67） |
| 14 | 400px | — | 1カラム・画像あり | — | 全面 |
| 15 | 1180px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 16 | 1380px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 17 | 640px | `#dbdbda` | 1カラム・画像あり | 中央 | — |
| 18 | 440px | — | 1カラム・画像あり | — | — |
| 19 | 200px | — | 帯・区切り | — | — |

- 全19セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#2c423b`（2） / `#ffffff`（1） / `#344842`（1） / `#dbdbda`（1）
- 見出しは左3／中央5。
- 2カラムの分け方は 42:58 / 50:50 / 47:53 / 47:53 / 33:67。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 28枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（13枚）、3:2（4枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#bbcbad }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:24px;
  padding:0px 0px; min-height:40px;
  font-size:21px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#bbcbad` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 24px 以外）を混ぜない。
