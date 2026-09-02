# スプラッシュトップ株式会社（Splashtop Inc.） ふうのデザイン

- 出典: https://company.splashtop.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

#fafaf5 の地に `#f5f17a` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.75、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fafaf5;
  --main: #f5f17a;
  --sub: #f5f17a;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #f5f17a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Helvetica", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 920px;
  --read: 928px;
  --section-y: 32px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fafaf5` | 67.7% |
| 主色 | `#333333` | 11.4% |
| 副色 | `#f5f17a` | 8.8% |
| 差し色 | `#e3e3d0` | 3.2% |
| 差し色 | `#c57d5e` | 3% |
| 差し色 | `#f7f6b7` | 1.8% |

文字色は `#333333` / `#ffffff` / `#1d252d` / `#ff5500`。

- 主色 `#f5f17a` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fafaf5` | 2 | 0 | 0 | 0 |
| `#f5f17a` | 2 | 0 | 1 | 0 |
| `#f2f2ed` | 3 | 0 | 0 | 0 |
| `#333333` | 1 | 82 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#ffffff` | 5 | 35 | 1 | 0 |
| `#1d252d` | 1 | 1 | 1 | 0 |
| `#ff5500` | 0 | 24 | 12 | 0 |

- `#f5f17a` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#f5f17a` |
| `#fafaf5`（地） | `#f5f17a` |
| `#f5f17a`（主色） | `#f5f17a` |
| `#f2f2ed` | `#f5f17a` |

```css
.section{ --on:#f5f17a }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Helvetica
- ウェイトは 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.3 |
| 見出し | 36px | 1.45 |
| 小見出し | 18px | — |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 920px／読ませる段は 928px
- セクションの上下余白: 32 / 80 / 136 / 144px（基本は 32px）
- 並びの間隔: 3 / 16 / 24 / 82px
- 角丸: 0px が基本。大きな面だけ 13px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 769 / 768 / 600 / 376px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 15px / 行間 1.71 |
| 見出し | 40px | 25px / 行間 1.41 |
| セクションの上下余白 | 32px | 84px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 24px | 17px |

- 本文は 16px → 15px、セクション余白は 32px → 84px（PCの263%）。
- 文字サイズの段は 25 / 17 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ff7733; color: #ffffff;
  border-radius: 34px; padding: 0px 0px; min-height: 67px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: #ccccc0; color: #ffffff;
  border-radius: 28px; padding: 0px 0px; min-height: 56px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: #0072ce; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px; padding: 8px 12px; min-height: 34px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 中央 | 左（30:70） |
| 2 | 680px | `#f2f2ed` | 2カラム・画像あり | 左 | 右（45:55） |
| 3 | 760px | `#f2f2ed` | 2カラム・画像あり | 右 | 左（45:55） |
| 4 | 1200px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 920px | `#333333` | 1カラム・画像あり | — | 全面 |
| 6 | 1000px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1160px | — | 4カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#f5f17a` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（4） / `#fafaf5`（2） / `#f5f17a`（2） / `#f2f2ed`（2）
- 見出しは左1／中央4。
- 2カラムの分け方は 30:70 / 45:55 / 45:55。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #47c9a4; color: #ffffff;
  border-radius: 999px; padding: 0px 16px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 36枚使っている
- 比率は 4:3（20枚）、3:2（6枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f5f17a }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ff7733; color:#ffffff; border-radius:34px;
  padding:0px 0px; min-height:67px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:15px; --section-y:84px; --gap:17px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地色と主色 `#f5f17a` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 32px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 13px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
