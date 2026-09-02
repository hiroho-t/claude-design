# 株式会社尾上建設 ふうのデザイン

- 出典: https://www.ogami.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／建設･インフラ･土木･設備

#1b2465 の地に `#1b2465` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 2、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #1b2465;
  --main: #1b2465;
  --sub: #495084;
  --ink: #ffffff;
  --ink-rev: #555555;
  --on: #1b2465;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "MFW-UDShinGoCOnizPr6-DeB", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1160px;
  --read: 1320px;
  --section-y: 64px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#1b2465` | 45.8% |
| 主色 | `#ffffff` | 15.8% |
| 副色 | `#495084` | 7.6% |
| 差し色 | `#494747` | 6.3% |
| 差し色 | `#817a74` | 4.8% |
| 差し色 | `#aba3a1` | 3.1% |

文字色は `#ffffff` / `#555555` / `#333333` / `#172a88`。

- 主色 `#1b2465` は差し色ではなく**面**で使う。画面の46%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 4px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#131b59` | 2 | 0 | 0 | 0 |
| `#ffffff` | 10 | 52 | 4 | 4 |
| `#1b2465` | 1 | 0 | 0 | 0 |
| `#172a88` | 1 | 3 | 0 | 0 |
| `#555555` | 0 | 4 | 0 | 0 |
| `#333333` | 0 | 11 | 0 | 0 |

- `#1b2465` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#131b59` | `#555555` |
| `#ffffff` | `#1b2465` |

```css
.section{ --on:#555555 }                     /* 地の面 */
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: MFW-UDShinGoCOnizPr6-DeB
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | 1 |
| 見出し | 26px | 1 |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 2 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1160px／読ませる段は 1320px
- セクションの上下余白: 64 / 80 / 108 / 172px（基本は 64px）
- 並びの間隔: 4 / 32px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1200 / 1023 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 10px / 行間 2 |
| 見出し | 52px | 20px / 行間 1 |
| セクションの上下余白 | 64px | 48px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 32px | —px |

- 本文は 14px → 10px、セクション余白は 64px → 48px（PCの75%）。
- 文字サイズの段は 20 / 18 / 16 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #383838;
  border: 1px solid #ffffff;
  border-radius: 50px; padding: 7px 10px; min-height: 26px;
  font-size: 10px; font-weight: 600; letter-spacing: 0.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 760px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 760px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 760px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 760px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#131b59`（2） / `#ffffff`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #111111;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 11px; font-size: 10px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（40px×1、48px×1、88px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 35枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、2:3（9枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#555555 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#383838; border-radius:50px;
  padding:7px 10px; min-height:26px;
  font-size:10px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:10px; --section-y:48px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地色と主色 `#1b2465` の面を全幅で交互に置く。主色は画面の46%を占めるだけ使う。
- 余白 64px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
