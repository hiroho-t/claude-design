# クラスメソッド株式会社 ふうのデザイン

- 出典: https://classmethod.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／AI･人工知能

白地に `#97bdbe` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.7、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #97bdbe;
  --sub: #d0d1cd;
  --ink: #242422;
  --ink-rev: #666666;
  --on: #97bdbe;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "univia-pro", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.7;
  --container: 1200px;
  --read: 584px;
  --section-y: 72px;
  --gap: 16px;
  --radius: 6px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.7% |
| 主色 | `#111111` | 5.8% |
| 副色 | `#d0d1cd` | 3% |
| 差し色 | `#959598` | 2.5% |
| 差し色 | `#e6e1de` | 2% |
| 差し色 | `#97bdbe` | 1.8% |

文字色は `#242422` / `#666666` / `#555555` / `#ffffff`。

- 主色 `#97bdbe` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 1px 1px 1px 0px, rgba(0, 0, 0, 0.1) 0px 0px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 1 | 0 | 75 | 0 |
| `#ffffff` | 133 | 13 | 1 | 36 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#111111` | 1 | 0 | 0 | 0 |
| `#2d8de0` | 2 | 2 | 1 | 2 |
| `#242422` | 0 | 136 | 0 | 0 |
| `#666666` | 0 | 27 | 0 | 0 |
| `#555555` | 0 | 45 | 0 | 0 |

- `#97bdbe` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#97bdbe` |
| `#f5f5f5` | `#97bdbe` |
| `#111111` | `#666666` |
| `#000000` | `#666666` |

```css
.section{ --on:#97bdbe }                     /* 地の面 */
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#eaeaea`。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: univia-pro
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.7 |
| 見出し | 34px | 1.7 |
| 小見出し | 24px | 1.7 |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.7 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 584px
- セクションの上下余白: 72 / 84 / 80 / 40px（基本は 72px）
- 並びの間隔: 8 / 10 / 16 / 20px
- 角丸: 6px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 769 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.7 | 15px / 行間 1.7 |
| 見出し | 56px | 28px / 行間 1.3 |
| セクションの上下余白 | 72px | 32px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 16px | 6px |

- 本文は 16px → 15px、セクション余白は 72px → 32px（PCの44%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #242422;
  border-radius: 6px; padding: 16px 20px; min-height: 60px;
  font-size: 17px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #242422;
  border-radius: 6px; padding: 8px 20px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 27px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 560px | — | ヒーロー（画像） | 左 | 右（56:44） |
| 2 | 1220px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1520px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 880px | — | 3カラム・画像あり | 中央 | — |
| 5 | 540px | `#ffffff` | 4カラム・画像あり | 左 | 見出しの下 |
| 6 | 800px | — | 6カラム・画像あり | 左 | — |
| 7 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 500px | — | 2カラム・画像あり | 中央 | — |
| 9 | 740px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 10 | 300px | — | 3カラム・画像あり | 中央 | — |
| 11 | 540px | — | 1カラム・文字だけ | 中央 | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（18） / `#f5f5f5`（1） / `#111111`（1） / `#000000`（1）
- 見出しは左4／中央6。
- 2カラムの分け方は 56:44。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #eaeaea。面によって入れ替える */
  border-radius: 8px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #e66020; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 10px; font-size: 13px;
}
```

## 画像

- 18枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（7枚）、3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#97bdbe }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:560px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:8px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#242422; border-radius:6px;
  padding:16px 20px; min-height:60px;
  font-size:17px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:15px; --section-y:32px; --gap:6px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#97bdbe` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（6px と 0px 以外）を混ぜない。
