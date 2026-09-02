# 株式会社パートナーズ ふうのデザイン

- 出典: https://partners-re.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／金融･投資･保険･士業

白地に `#0080d9` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 168px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0080d9;
  --sub: #9dc8e4;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #0080d9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 1280px;
  --read: 648px;
  --section-y: 168px;
  --gap: 48px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 61.4% |
| 主色 | `#0080d9` | 14.6% |
| 副色 | `#9dc8e4` | 5% |
| 差し色 | `#d0d0d0` | 4.4% |
| 差し色 | `#e2eff3` | 4.3% |
| 差し色 | `#6493b6` | 4% |

文字色は `#000000` / `#ffffff` / `#8c8c8c` / `#0080d9`。

- 主色 `#0080d9` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#eff6f7` | 2 | 0 | 0 | 0 |
| `#0080d9` | 5 | 7 | 0 | 4 |
| `#000000` | 0 | 31 | 0 | 0 |
| `#ffffff` | 0 | 33 | 7 | 0 |
| `#8c8c8c` | 0 | 13 | 0 | 0 |

- `#0080d9` は面5箇所・文字7箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eff6f7` | `#0080d9` |
| `#0080d9`（主色） | `#ffffff` |
| `#f7f7f7` | `#0080d9` |

```css
.section{ --on:#0080d9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.8 |
| 見出し | 26px | 1.6 |
| 小見出し | 19px | 1.6 |
| リード | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 1.8 |
| 補助 | 13px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 648px
- セクションの上下余白: 168 / 128 / 40 / 100px（基本は 168px）
- 並びの間隔: 16 / 32 / 48 / 192px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 11px / 行間 1.6 |
| 見出し | 32px | 18px / 行間 1.6 |
| セクションの上下余白 | 168px | 84px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 48px | 8px |

- 本文は 14px → 11px、セクション余白は 168px → 84px（PCの50%）。
- 文字サイズの段は 21 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #0080d9; color: #ffffff;
  border-radius: 100px; padding: 8px 20px; min-height: 80px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 52px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 2800px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 2060px | `#eff6f7` | 1カラム・画像あり | 左 | 全幅 |
| 3 | 440px | — | 4カラム・画像あり | — | — |
| 4 | 1100px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 900px | — | 1カラム・画像あり | 左 | 右（14:86） |
| 6 | 320px | — | 帯・区切り | 左 | — |

- 全6セクション。
- 主色 `#0080d9` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#eff6f7`（1） / `#0080d9`（1） / `#f7f7f7`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 14:86。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #eaf7fe; color: #0080d9;
  border-radius: 999px; padding: 4px 16px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 11 箇所ある（64px×7、48px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 3:4（9枚）、3:2（7枚）、21:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0080d9 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:2800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#0080d9; color:#ffffff; border-radius:100px;
  padding:8px 20px; min-height:80px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:11px; --section-y:84px; --gap:8px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#0080d9` の面を交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 168px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
