# SISI（シシ） ふうのデザイン

- 出典: https://sisi.tokyo/shop
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／美容･化粧品･コスメ･ケア用品

白地に `#fcede1` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 1.5、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fcede1;
  --sub: #dfe8e5;
  --ink: #444444;
  --ink-rev: #000000;
  --on: #fcede1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "SS Soil", sans-serif;
  --font-en: "SS Soil", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.5;
  --container: 1360px;
  --read: 660px;
  --section-y: 100px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 66.6% |
| 主色 | `#000000` | 6.6% |
| 副色 | `#dfe8e5` | 5.6% |
| 差し色 | `#fcede1` | 4.4% |
| 差し色 | `#fff590` | 3% |
| 差し色 | `#ffeb36` | 3% |

文字色は `#444444` / `#000000` / `#ffffff` / `#999999`。

- 主色 `#fcede1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 59 | 50 | 1 | 8 |
| `#000000` | 21 | 105 | 57 | 16 |
| `#eeeeee` | 1 | 0 | 16 | 0 |
| `#444444` | 0 | 16 | 0 | 0 |
| `#999999` | 0 | 8 | 0 | 0 |

- `#fcede1` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#fcede1` |
| `#fcfcfc` | `#fcede1` |
| `#000000` | `#000000` |

```css
.section{ --on:#fcede1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: SS Soil
- 欧文: SS Soil
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | — |
| 見出し | 16px | — |
| 小見出し | 15px | — |
| リード | 14px | — |
| リード | 13px | — |
| 本文 | 12px | 1.5 |

- 本文は 12px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 660px
- セクションの上下余白: 100 / 52 / 64 / 72px（基本は 100px）
- 並びの間隔: 2 / 4 / 14 / 20px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1279 / 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.5 | 12px / 行間 1.5 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 76px |
| 並びの間隔 | 14px | 2px |

- 本文は 12px → 12px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 18 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 70px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.42px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px; padding: 0px 70px; min-height: 60px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.42px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #000000;
  border-radius: 30px; padding: 0px 44px; min-height: 40px;
  font-size: 14px; font-weight: 350; letter-spacing: 0.42px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 9 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 10 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 11 | 820px | — | 1カラム・画像あり | — | 全幅 |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（41） / `#fcfcfc`（3） / `#000000`（2）


## 部品

囲み（14箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 18px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 17 箇所ある（32px×11、232px×3、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 52枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 1:1（29枚）、16:9（11枚）、4:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fcede1 }
.container{ width:min(100% - 152px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:70px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:641px){
  :root{ --fs-body:12px; --section-y:32px; --gap:2px; }
  .container{ width:calc(100% - 152px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#fcede1` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
