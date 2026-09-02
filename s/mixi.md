# 株式会社MIXI ふうのデザイン

- 出典: https://mixi.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#e5004d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.4、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e5004d;
  --sub: #000000;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #e5004d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "mixi-medium", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.4;
  --container: 1280px;
  --read: 632px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 74.6% |
| 主色 | `#7b7473` | 9% |
| 副色 | `#000000` | 6.6% |
| 差し色 | `#c5c0bd` | 1.8% |

文字色は `#000000` / `#ffffff`。

- 主色 `#e5004d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 6 | 65 | 0 | 1 |
| `#c4c4c4` | 2 | 0 | 0 | 0 |
| `#ffffff` | 8 | 43 | 0 | 2 |

- `#e5004d` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#000000` | `#ffffff` |
| `#c4c4c4` | `#e5004d` |

```css
.section{ --on:#e5004d }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: mixi-medium
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | — |
| 見出し | 25px | — |
| 小見出し | 15px | — |
| 本文 | 13px | 1.4 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 13px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 632px
- セクションの上下余白: 60 / 72 / 76 / 84px（基本は 60px）
- 並びの間隔: 5 / 15 / 16 / 40px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1320 / 1120 / 769 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.4 | 13px / 行間 1.4 |
| セクションの上下余白 | 60px | 28px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 5px |

- 本文は 13px → 13px、セクション余白は 60px → 28px（PCの47%）。
- 文字サイズの段は 27 / 20 / 15 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 55px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.26px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 3px; padding: 20px 80px; min-height: 55px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.26px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 3px; padding: 15px 0px; min-height: 70px;
  font-size: 13px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 780px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1140px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 3 | 1140px | `#c4c4c4` | 1カラム・文字だけ | 中央 | — |
| 4 | 640px | `#c4c4c4` | 6カラム・画像あり | — | 全面 |
| 5 | 800px | — | 1カラム・画像あり | 左 | 右（35:65） |
| 6 | 480px | — | 1カラム・画像あり | 中央 | 全幅 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#000000`（5） / `#c4c4c4`（2）
- 見出しは左2／中央2。
- 2カラムの分け方は 35:65。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #7b7b7b; color: #ffffff;
  border-radius: 999px; padding: 6px 9px; font-size: 10px;
}
```

## 画像

- 12枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（6枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e5004d }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:780px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 0px; min-height:55px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:13px; --section-y:28px; --gap:5px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e5004d` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。
