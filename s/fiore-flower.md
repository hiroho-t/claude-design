# 大阪府和泉市の葬儀用花・フラワーインテリアの販売 ふうのデザイン

- 出典: https://www.fiore-flower.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／農業･畜産業･林業･漁業･園芸／寺･神社･葬儀･仏壇

白地に `#93bb8f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 17px・行間 2、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #93bb8f;
  --sub: #e6ece3;
  --ink: #3b2f14;
  --ink-rev: #ffffff;
  --on: #93bb8f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Shippori Mincho", sans-serif;
  --fs-body: 17px;
  --lh-body: 2;
  --container: 1348px;
  --read: 672px;
  --section-y: 56px;
  --gap: 30px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.4% |
| 主色 | `#93bb8f` | 5.7% |
| 副色 | `#e6ece3` | 1.7% |

文字色は `#3b2f14` / `#ffffff` / `#db8d94` / `#999999`。

- 主色 `#93bb8f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 22 | 9 | 4 | 9 |
| `#f8f8f4` | 1 | 0 | 0 | 0 |
| `#93bb8f` | 1 | 0 | 0 | 0 |
| `#db8d94` | 1 | 5 | 9 | 0 |
| `#3b2f14` | 0 | 76 | 0 | 0 |
| `#999999` | 0 | 2 | 0 | 0 |

- `#93bb8f` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#93bb8f` |
| `#f8f8f4` | `#93bb8f` |
| `#93bb8f`（主色） | `#93bb8f` |

```css
.section{ --on:#93bb8f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Shippori Mincho
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.7 |
| 見出し | 18px | — |
| 本文 | 17px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 17px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1348px／読ませる段は 672px
- セクションの上下余白: 56 / 112 / 36 / 168px（基本は 56px）
- 並びの間隔: 20 / 30 / 87px
- 角丸: 20px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 3840 / 1599 / 1023 / 767 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2 | 14px / 行間 2 |
| セクションの上下余白 | 56px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 30px | 30px |

- 本文は 17px → 14px、セクション余白は 56px → 32px（PCの57%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #3b2f14;
  border-radius: 10px; padding: 12px 18px; min-height: 44px;
  font-size: 18px; font-weight: 500; letter-spacing: 0.830408px;
}
.btn-sub{
  background: transparent; color: #3b2f14;
  border-radius: 0px; padding: 0px 0px; min-height: 39px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.830408px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 39px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.830408px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 820px | — | 1カラム・画像あり | 左 | 右（23:77） |
| 3 | 380px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 4900px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 680px | — | 1カラム・画像あり | 左 | 右（17:83） |
| 6 | 580px | `#93bb8f` | 1カラム・画像あり | 右 | 左（43:57） |

- 全6セクション。
- 使われている面の色: `#ffffff`（4） / `#f8f8f4`（1） / `#93bb8f`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 23:77 / 17:83 / 43:57。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #3b2f14;
  border-radius: 10px; padding: 12px 18px; font-size: 18px;
}
```

## 丸いもの

角丸は 20px だが、**完全な円は別扱い**で 1 箇所ある（72px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 34枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（12枚）、16:9（9枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#93bb8f }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#3b2f14; border-radius:10px;
  padding:12px 18px; min-height:44px;
  font-size:18px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:32px; --gap:30px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#93bb8f` は文字と小さな部品にだけ使う。
- 余白 56px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（20px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
