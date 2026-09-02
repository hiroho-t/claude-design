# 株式会社昭和工業 ふうのデザイン

- 出典: https://showa-kogyo.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建設･インフラ･土木･設備／ビルメンテナンス･清掃･警備

白地に `#5bc0f4` を大きな面で置く配色。影も枠線もほとんど使わない。本文 17px・行間 1.9、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #5bc0f4;
  --sub: #5bc0f4;
  --ink: #212121;
  --ink-rev: #000000;
  --on: #5bc0f4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 17px;
  --lh-body: 1.9;
  --container: 1272px;
  --read: 648px;
  --section-y: 40px;
  --gap: 17px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 57.6% |
| 主色 | `#cbcbcb` | 11.4% |
| 副色 | `#5bc0f4` | 8.3% |
| 差し色 | `#dedddb` | 7.5% |
| 差し色 | `#00ab0f` | 4.8% |
| 差し色 | `#a3c1b5` | 3.6% |

文字色は `#212121` / `#000000` / `#ffffff` / `#028ad0`。

- 主色 `#5bc0f4` は差し色ではなく**面**で使う。画面の8%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 6 | 0 | 0 | 0 |
| `#ffffff` | 3 | 5 | 0 | 1 |
| `#ededed` | 3 | 0 | 0 | 3 |
| `#f75e18` | 1 | 0 | 0 | 1 |
| `#028ad0` | 1 | 1 | 0 | 0 |
| `#212121` | 0 | 46 | 0 | 0 |
| `#000000` | 0 | 15 | 0 | 0 |

- `#5bc0f4` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5` | `#5bc0f4` |
| `#ffffff`（地） | `#5bc0f4` |

```css
.section{ --on:#5bc0f4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | — |
| 本文 | 17px | 1.9 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 12px | — |
| 注記 | 1px | — |

- 本文は 17px・行間 1.9。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1272px／読ませる段は 648px
- セクションの上下余白: 40 / 72 / 80 / 136px（基本は 40px）
- 並びの間隔: 10 / 16 / 17 / 27px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.9 | 14px / 行間 2 |
| 見出し | 20px | 1px |
| セクションの上下余白 | 40px | 28px |
| 左右の余白 | — | 35px |
| 並びの間隔 | 17px | 17px |

- 本文は 17px → 14px、セクション余白は 40px → 28px（PCの70%）。
- 文字サイズの段は 28 / 18 / 15 / 14 / 1px。

## ボタン

```css
.btn{
  background: #ededed; color: #000000;
  border-radius: 30px; padding: 20px 22px; min-height: 63px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ededed; color: #000000;
  border-radius: 30px; padding: 21px 21px; min-height: 63px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 30px; padding: 20px 22px; min-height: 70px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 360px | — | ヒーロー | 左 | — |
| 2 | 800px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 3 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 260px | — | 帯・区切り | 左 | 右（11:89） |
| 5 | 560px | `#f5f5f5` | 1カラム・画像あり | 左 | — |
| 6 | 1400px | — | 1カラム・画像あり | 左 | 見出しの下 |

- 全6セクション。
- 使われている面の色: `#f5f5f5`（6） / `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 11:89。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #f5f5f5;
  border-radius: 0px;
  padding: 20px 22px;
}
```


## 画像

- 16枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（4枚）、4:3（2枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#5bc0f4 }
.container{ width:min(100% - 70px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:360px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#f5f5f5;
  border-radius:0px; padding:20px 22px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ededed; color:#000000; border-radius:30px;
  padding:20px 22px; min-height:63px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:28px; --gap:17px; }
  .container{ width:calc(100% - 70px) }
}
```

## 守ること

やること

- 地色と主色 `#5bc0f4` の面を交互に置く。主色は画面の8%を占めるだけ使う。
- 余白 40px と行間 1.9 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.9 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。
