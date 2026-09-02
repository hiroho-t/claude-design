# ドコモSMTBネット銀行 採用サイト ふうのデザイン

- 出典: https://recruit.netbk.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／金融･投資･保険･士業

白地に `#52aedf` を大きな面で置く配色。影を使って浮かせる。本文 20px・行間 1.75、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #52aedf;
  --sub: #1f8ee1;
  --ink: #333333;
  --ink-rev: #6e6e6e;
  --on: #52aedf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 20px;
  --lh-body: 1.75;
  --container: 1040px;
  --read: 1016px;
  --section-y: 120px;
  --gap: 8px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 64.3% |
| 主色 | `#52aedf` | 9.2% |
| 副色 | `#1f8ee1` | 8.2% |
| 差し色 | `#0772e0` | 6.3% |
| 差し色 | `#37ace4` | 5.4% |
| 差し色 | `#46c8eb` | 2.6% |

文字色は `#333333` / `#6e6e6e` / `#ffffff` / `#1b1b1b`。

- 主色 `#52aedf` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 2px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 79 | 40 | 4 | 62 |
| `#edf6ff` | 5 | 0 | 0 | 0 |
| `#f5f5f5` | 4 | 0 | 0 | 0 |
| `#0068de` | 5 | 6 | 5 | 5 |
| `#cfebff` | 2 | 0 | 0 | 0 |
| `#333333` | 0 | 27 | 0 | 0 |
| `#6e6e6e` | 0 | 98 | 0 | 0 |
| `#1b1b1b` | 0 | 26 | 0 | 0 |

- `#52aedf` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#52aedf` |
| `#edf6ff` | `#52aedf` |
| `#f5f5f5` | `#52aedf` |

```css
.section{ --on:#52aedf }                     /* 地の面 */
.section--main{ background:var(--main); color:#6e6e6e; --on:#6e6e6e }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#6e6e6e }
.section--main .btn--fill{ background:#6e6e6e; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 1 |
| 見出し | 32px | 1.75 |
| 小見出し | 24px | — |
| 本文 | 20px | 1.75 |
| 補助 | 18px | — |
| 注記 | 16px | — |
| 注記 | 14px | — |

- 本文は 20px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1040px／読ませる段は 1016px
- セクションの上下余白: 120 / 80 / 40 / 900px（基本は 120px）
- 並びの間隔: 4 / 5 / 8 / 16px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 820 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 1.75 | 14px / 行間 2 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 8px | 8px |

- 本文は 20px → 14px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 13px。

## ボタン

```css
.btn{
  background: #ffffff; color: #6e6e6e;
  border: 1px solid #e9e9e9;
  border-radius: 128px; padding: 7px 11px; min-height: 31px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #6e6e6e;
  border-radius: 0px; padding: 0px 0px; min-height: 31px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #0068de; color: #ffffff;
  border: 2px solid #0068de;
  border-radius: 60px; padding: 12px 12px; min-height: 61px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 520px | — | ヒーロー（画像） | — | — |
| 2 | 900px | `#ffffff` | 4カラム・画像あり | — | 全幅 |
| 3 | 600px | — | 1カラム・画像あり | 中央 | — |
| 4 | 880px | `#edf6ff` | 4カラム・画像あり | 右 | 左（31:69） |
| 5 | 1320px | `#ffffff` | 6カラム・画像あり | 中央 | — |
| 6 | 700px | `#edf6ff` | 2カラム・画像あり | 左 | 右（33:67） |
| 7 | 560px | — | 1カラム・文字だけ | — | — |
| 8 | 720px | `#ffffff` | 3カラム・画像あり | 左 | — |
| 9 | 860px | `#ffffff` | 3カラム・画像あり | — | 全面 |
| 10 | 420px | `#f5f5f5` | 1カラム・画像あり | — | — |
| 11 | 900px | — | 1カラム・画像あり | — | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（8） / `#edf6ff`（2） / `#f5f5f5`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 31:69 / 33:67。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #333333;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 7px 11px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（32px×6、40px×5、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 2:3（12枚）、4:3（9枚）、3:4（9枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#52aedf }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:520px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#6e6e6e; --on:#6e6e6e }
.section--main .btn--fill{ background:#6e6e6e; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#6e6e6e; border-radius:128px;
  padding:7px 11px; min-height:31px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:820px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地色と主色 `#52aedf` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 120px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
