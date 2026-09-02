# ウチダビジネスソリューションズ ふうのデザイン

- 出典: https://www.uchida-bs.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

#f7f6f1 の地に `#5897ab` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f6f1;
  --main: #5897ab;
  --sub: #2b2b2b;
  --ink: #3c3c3c;
  --ink-rev: #ffffff;
  --on: #5897ab;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "DM Sans", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1240px;
  --read: 564px;
  --section-y: 140px;
  --gap: 28px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f6f1` | 62.6% |
| 主色 | `#4f4f4f` | 16.2% |
| 副色 | `#2b2b2b` | 10.6% |
| 差し色 | `#5897ab` | 3.7% |
| 差し色 | `#bfc1b8` | 3.3% |
| 差し色 | `#17768d` | 2% |

文字色は `#3c3c3c` / `#ffffff` / `#f2f1e9` / `#d6d6d6`。

- 主色 `#5897ab` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f6f1` | 3 | 2 | 0 | 0 |
| `#4f4f4f` | 1 | 0 | 0 | 0 |
| `#3c3c3c` | 2 | 29 | 6 | 0 |
| `#2b2b2b` | 1 | 0 | 0 | 0 |
| `#ffffff` | 2 | 16 | 2 | 0 |
| `#d6d6d6` | 0 | 9 | 1 | 0 |

- `#5897ab` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f6f1`（地） | `#5897ab` |
| `#3c3c3c` | `#ffffff` |
| `#2b2b2b` | `#ffffff` |
| `#4f4f4f` | `#ffffff` |

```css
.section{ --on:#5897ab }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: DM Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | — |
| 見出し | 19px | 1.4 |
| 小見出し | 18px | — |
| リード | 17px | — |
| 本文 | 16px | 1.8 |
| 補助 | 15px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1240px／読ませる段は 564px
- セクションの上下余白: 140 / 40 / 48 / 64px（基本は 140px）
- 並びの間隔: 12 / 14 / 28 / 32px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1399 / 1023 / 768 / 767 / 479px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 17px / 行間 2 |
| セクションの上下余白 | 140px | 28px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 28px | 17px |

- 本文は 16px → 17px、セクション余白は 140px → 28px（PCの20%）。
- 文字サイズの段は 25 / 17 / 16 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 1440px; padding: 20px 0px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.79992px;
}
.btn-sub{
  background: transparent; color: #3c3c3c;
  border: 1px solid #3c3c3c;
  border-radius: 1440px; padding: 20px 0px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.79992px;
}
.btn-sub{
  background: transparent; color: #d6d6d6;
  border: 1px solid #d6d6d6;
  border-radius: 1440px; padding: 14px 0px; min-height: 52px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.79992px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#f7f6f1` | ヒーロー（画像） | — | 全面 |
| 2 | 140px | — | 帯・区切り | — | 全幅 |
| 3 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 4060px | — | 5カラム・画像あり | 中央 | 全幅 |
| 5 | 920px | — | 1カラム・画像あり | 右 | 見出しの下 |
| 6 | 2240px | — | 3カラム・画像あり | 左 | 全幅 |
| 7 | 1060px | `#f7f6f1` | 1カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション。
- 使われている面の色: `#f7f6f1`（3） / `#3c3c3c`（1） / `#2b2b2b`（1） / `#4f4f4f`（1）
- 見出しは左1／中央2。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（40px×3、56px×1、136px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 73枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（43枚）、16:9（12枚）、3:4（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#5897ab }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:1440px;
  padding:20px 0px; min-height:64px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:17px; --section-y:28px; --gap:17px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#f7f6f1` のまま。主色 `#5897ab` は文字と小さな部品にだけ使う。
- 余白 140px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
