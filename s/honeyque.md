# 【公式】HONEYQUE（ハニーク） ふうのデザイン

- 出典: https://honeyque.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / モノトーン
- 業種: ブランドサイト･サービスサイト／美容･化粧品･コスメ･ケア用品／レスポンシブ

#f3f1e7 の地に `#d84850` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.88、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f3f1e7;
  --main: #d84850;
  --sub: #e5cfd0;
  --ink: #232323;
  --ink-rev: #ffffff;
  --on: #d84850;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "TTNorms-pro-Bold", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.88;
  --container: 600px;
  --read: 1240px;
  --section-y: 120px;
  --gap: 55px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f3f1e7` | 50.8% |
| 主色 | `#ffffff` | 37.4% |
| 副色 | `#e5cfd0` | 2.4% |
| 差し色 | `#d84850` | 2.1% |
| 差し色 | `#fb7f68` | 1.6% |
| 差し色 | `#e7b35e` | 1.6% |

文字色は `#232323` / `#ffffff`。

- 主色 `#d84850` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f3f1e7` | 1 | 0 | 0 | 0 |
| `#ffffff` | 2 | 1 | 0 | 0 |
| `#222222` | 0 | 121 | 0 | 0 |
| `#000000` | 0 | 0 | 15 | 0 |

- `#d84850` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#d84850` |
| `#f3f1e7`（地） | `#d84850` |

```css
.section{ --on:#d84850 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: TTNorms-pro-Bold
- ウェイトは 400 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | — |
| 見出し | 24px | 1.5 |
| 小見出し | 18px | 1.5 |
| 本文 | 16px | 1.88 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.88。

## レイアウト

- コンテンツ幅: 最大 600px／読ませる段は 1240px
- セクションの上下余白: 120 / 140 / 160 / 200px（基本は 120px）
- 並びの間隔: 40 / 55px
- 角丸: 30px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.88 | 12px / 行間 2.5 |
| 見出し | 30px | 12px / 行間 1.67 |
| セクションの上下余白 | 120px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 55px | —px |

- 本文は 16px → 12px、セクション余白は 120px → 52px（PCの43%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #232323;
  border: 2px solid #000000;
  border-radius: 30px; padding: 0px 0px; min-height: 60px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.9px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー（画像） | — | 全面 |
| 2 | 820px | — | 3カラム・画像あり | — | 全幅 |
| 3 | 1480px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 5780px | `#f3f1e7` | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 760px | — | 6カラム・画像あり | 中央 | 左（27:73） |
| 6 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 640px | `#ffffff` | 3カラム・画像あり | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#f3f1e7`（1）
- 見出しは左1／中央2。
- 2カラムの分け方は 27:73。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 30px だが、**完全な円は別扱い**で 3 箇所ある（48px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 43枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 3:2（25枚）、1:1（13枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d84850 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#232323; border-radius:30px;
  padding:0px 0px; min-height:60px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:12px; --section-y:52px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f3f1e7` のまま。主色 `#d84850` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.88 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.88 より詰めない。
- 中途半端な角丸（30px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
