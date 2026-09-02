# おぶつだんの佐倉 和歌山にあるお仏壇お仏具専門店 ふうのデザイン

- 出典: https://sakura-butudan.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／寺･神社･葬儀･仏壇

白地に `#213647` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 2.13、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #213647;
  --sub: #344654;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #213647;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Shippori Mincho", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.13;
  --container: 1000px;
  --read: 800px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69.2% |
| 主色 | `#213647` | 10.8% |
| 副色 | `#344654` | 9.4% |
| 差し色 | `#485763` | 5.2% |
| 差し色 | `#c5b9a1` | 1.9% |
| 差し色 | `#a48c69` | 1.8% |

文字色は `#000000` / `#ffffff`。

- 主色 `#213647` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 14 | 90 | 1 | 2 |
| `#3b3529` | 1 | 0 | 0 | 0 |
| `#000000` | 3 | 98 | 0 | 0 |
| `#e6e4d0` | 1 | 0 | 0 | 1 |
| `#726d60` | 1 | 0 | 0 | 1 |

- `#213647` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fffef5` | `#213647` |
| `#000000` | `#ffffff` |
| `#ffffff`（地） | `#213647` |
| `#3b3529` | `#ffffff` |

```css
.section{ --on:#213647 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fffef5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Shippori Mincho
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 33px | 1.15 |
| 見出し | 28px | 1.15 |
| 小見出し | 22px | 1.15 |
| リード | 20px | 1.6 |
| リード | 17px | — |
| 本文 | 16px | 2.13 |
| 補助 | 15px | — |

- 本文は 16px・行間 2.13。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 800px
- セクションの上下余白: 40 / 72 / 80 / 112px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 768 / 767 / 600 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.13 | 16px / 行間 1.88 |
| 見出し | 33px | 15px / 行間 1.15 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 20 / 17 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 67px; min-height: 32px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.45px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 67px; min-height: 32px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.45px;
}
.btn-sub{
  background: #e6e4d0; color: #000000;
  border-radius: 0px; padding: 0px 30px; min-height: 70px;
  font-size: 15px; font-weight: 400; letter-spacing: 1.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#fffef5` | ヒーロー（画像） | 左 | 全幅 |
| 2 | 2220px | — | 3カラム・画像あり | 左 | 右（56:44） |
| 3 | 1900px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 980px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 2140px | — | 6カラム・画像あり | 中央 | 全幅 |
| 6 | 1040px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 160px | — | 帯・区切り | 左 | 右（48:52） |
| 8 | 260px | — | 帯・区切り | 中央 | — |

- 全8セクション。
- 使われている面の色: `#fffef5`（5） / `#000000`（3） / `#ffffff`（1） / `#3b3529`（1）
- 見出しは左3／中央5。
- 2カラムの分け方は 56:44 / 48:52。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #000000;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 113枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 4:3（44枚）、1:1（26枚）、2:3（18枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#213647 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#000000;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 67px; min-height:32px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#213647` の面を交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 40px と行間 2.13 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.13 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
