# 福岡デザイン&テクノロジー専門学校 ふうのデザイン

- 出典: https://www.fca.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／デザイン･イラスト･写真･映像･制作

白地に `#e60012` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.5、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e60012;
  --ink: #231815;
  --ink-rev: #ffffff;
  --on: #e60012;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "LINESeedJP", sans-serif;
  --font-en: "LINESeedJP", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.5;
  --container: 1296px;
  --read: 956px;
  --section-y: 48px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 93.6% |

文字色は `#231815` / `#ffffff` / `#e60012` / `#727171`。

- 主色 `#e60012` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 59 | 137 | 44 | 25 |
| `#f4f4f4` | 2 | 0 | 0 | 0 |
| `#333333` | 1 | 0 | 0 | 0 |
| `#fb909a` | 1 | 0 | 0 | 0 |
| `#1c1cc9` | 1 | 0 | 0 | 0 |
| `#231815` | 4 | 140 | 16 | 1 |
| `#e60012` | 12 | 24 | 7 | 10 |
| `#727171` | 0 | 19 | 1 | 0 |

- `#e60012` は面12箇所・文字24箇所を行き来する。ボタンの地にも使う。枠線にも7箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e60012` |
| `#f4f4f4` | `#e60012` |
| `#fb909a` | `#e60012` |
| `#1c1cc9` | `#ffffff` |

```css
.section{ --on:#e60012 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: LINESeedJP
- 欧文: LINESeedJP
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 33px | 2 |
| 見出し | 29px | 1.3 |
| 小見出し | 28px | 1.5 |
| リード | 19px | — |
| リード | 16px | 1.3 |
| リード | 15px | — |
| リード | 14px | — |

- 本文は 13px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1296px／読ませる段は 956px
- セクションの上下余白: 48 / 112 / 56 / 84px（基本は 48px）
- 並びの間隔: 5 / 8 / 16 / 19px
- 角丸: 0px が基本。大きな面だけ 9px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1299 / 1023 / 767 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.5 | 13px / 行間 2 |
| 見出し | 33px | 20px / 行間 2 |
| セクションの上下余白 | 48px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 13px |

- 本文は 13px → 13px、セクション余白は 48px → 60px（PCの125%）。
- 文字サイズの段は 15 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #231815;
  border: 1px solid #dbdbdb;
  border-radius: 9999px; padding: 2px 12px; min-height: 30px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.312163px;
}
.btn-sub{
  background: #ffffff; color: #231815;
  border: 1px solid #231815;
  border-radius: 9999px; padding: 9px 68px; min-height: 58px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.312163px;
}
.btn-sub{
  background: transparent; color: #231815;
  border-radius: 0px; padding: 0px 0px; min-height: 39px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.312163px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 880px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 280px | — | 5カラム・画像あり | — | 全面 |
| 3 | 120px | — | 帯・区切り | 中央 | — |
| 4 | 180px | — | 帯・区切り | 左 | 見出しの下 |
| 5 | 1040px | `#f4f4f4` | 5カラム・画像あり | 中央 | 右（41:59） |
| 6 | 3280px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1940px | `#f4f4f4` | 6カラム・画像あり | 中央 | 全幅 |
| 8 | 860px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 9 | 1220px | `#333333` | 1カラム・画像あり | 中央 | 全幅 |
| 10 | 620px | — | 1カラム・画像あり | 左 | 右（15:85） |
| 11 | 460px | — | 1カラム・画像あり | 左 | 全幅 |
| 12 | 740px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全12セクション。
- 使われている面の色: `#ffffff`（13） / `#f4f4f4`（2） / `#fb909a`（1） / `#1c1cc9`（1）
- 見出しは左3／中央7。
- 2カラムの分け方は 41:59 / 15:85。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dbdbdb。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（24px×1、48px×1、80px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 62枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（23枚）、3:4（8枚）、1:1（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e60012 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:880px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#231815; border-radius:9999px;
  padding:2px 12px; min-height:30px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:13px; --section-y:60px; --gap:13px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e60012` は文字と小さな部品にだけ使う。
- 余白 48px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 9px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
