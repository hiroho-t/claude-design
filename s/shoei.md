# 頌栄短期大学 ふうのデザイン

- 出典: https://www.glory-shoei.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／学校･教育／レスポンシブ

白地に `#beb0a6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #beb0a6;
  --sub: #d7dbd8;
  --ink: #222222;
  --ink-rev: #000000;
  --on: #beb0a6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 700px;
  --read: 800px;
  --section-y: 100px;
  --gap: 30px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.9% |
| 主色 | `#bdc8c7` | 4.2% |
| 副色 | `#d7dbd8` | 3.7% |
| 差し色 | `#2f2e2b` | 2.8% |
| 差し色 | `#edeee9` | 2.6% |
| 差し色 | `#beb0a6` | 2.5% |

文字色は `#222222` / `#000000` / `#514496` / `#02276e`。

- 主色 `#beb0a6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 1 | 0 | 0 |
| `#f5f5fa` | 11 | 0 | 4 | 0 |
| `#504894` | 1 | 13 | 4 | 1 |
| `#222222` | 0 | 18 | 0 | 0 |
| `#000000` | 0 | 59 | 0 | 0 |
| `#02276e` | 0 | 14 | 0 | 0 |

- `#beb0a6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5fa` | `#beb0a6` |
| `#ffffff`（地） | `#beb0a6` |
| `#f9f9fc` | `#beb0a6` |

```css
.section{ --on:#beb0a6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#f5f5fa`。ただしその囲みは `#f5f5fa` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Lato
- ウェイトは 400 / 600 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 62px | 1.08 |
| 見出し | 50px | 1.1 |
| 小見出し | 24px | 1.4 |
| リード | 22px | — |
| 本文 | 16px | 1.31 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 700px／読ませる段は 800px
- セクションの上下余白: 100 / 80 / 36 / 40px（基本は 100px）
- 並びの間隔: 8 / 20 / 30 / 40px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 14px / 行間 1.6 |
| 見出し | 62px | 33px / 行間 1.16 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 30px | 21px |

- 本文は 16px → 14px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 17 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #534098;
  border: 1px solid #534098;
  border-radius: 10px; padding: 0px 35px; min-height: 54px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.479693px;
}
.btn-sub{
  background: #504894; color: #ffffff;
  border: 1px solid #504894;
  border-radius: 5px; padding: 10px 20px; min-height: 35px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.479693px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 680px | — | ヒーロー（画像） | — | 全面 |
| 2 | 200px | — | 6カラム・画像あり | — | 全面 |
| 3 | 520px | — | 1カラム・文字だけ | 左 | — |
| 4 | 340px | — | 1カラム・画像あり | 左 | 右（45:55） |
| 5 | 1560px | `#f5f5fa` | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1360px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 740px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 8 | 700px | — | 1カラム・画像あり | 左 | 左（36:64） |
| 9 | 500px | — | 6カラム・画像あり | — | 全面 |
| 10 | 120px | — | 帯・区切り | — | — |

- 全10セクション。
- 使われている面の色: `#f5f5fa`（2） / `#ffffff`（1） / `#f9f9fc`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 45:55 / 36:64。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 4px solid var(--on);   /* 実測は #f5f5fa。面によって入れ替える */
  border-radius: 30px;
  padding: 0px 0px;
}
```


## 画像

- 43枚使っている
- 比率は 3:2（20枚）、16:9（10枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#beb0a6 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:680px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:transparent; border:4px solid var(--on);
  border-radius:30px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#534098; border-radius:10px;
  padding:0px 35px; min-height:54px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:40px; --gap:21px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#beb0a6` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 4px の線＋角丸 30px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。
