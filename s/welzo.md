# 株式会社welzo ふうのデザイン

- 出典: https://www.welzo.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／農業･畜産業･林業･漁業･園芸

白地に `#dfcfbe` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #dfcfbe;
  --sub: #a9b7a8;
  --ink: #251e1c;
  --ink-rev: #ffffff;
  --on: #dfcfbe;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 624px;
  --read: 652px;
  --section-y: 112px;
  --gap: 50px;
  --radius: 45px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 84.1% |
| 主色 | `#251e1c` | 3.6% |
| 副色 | `#a9b7a8` | 1.8% |
| 差し色 | `#dfcfbe` | 1.8% |
| 差し色 | `#987451` | 1.6% |
| 差し色 | `#4a5756` | 1.5% |

文字色は `#251e1c` / `#ffffff` / `#168352` / `#473221`。

- 主色 `#dfcfbe` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px 0px 56.25px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 7 | 14 | 1 | 0 |
| `#f4f4f4` | 2 | 1 | 2 | 1 |
| `#168352` | 9 | 5 | 8 | 8 |
| `#251e1c` | 1 | 65 | 0 | 0 |
| `#473221` | 1 | 4 | 0 | 0 |

- `#dfcfbe` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#dfcfbe` |
| `#f4f4f4` | `#dfcfbe` |
| `#251e1c` | `#ffffff` |

```css
.section{ --on:#dfcfbe }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f4f4f4` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | 2.2 |
| 見出し | 41px | 1.03 |
| 小見出し | 29px | 1.79 |
| リード | 20px | — |
| リード | 17px | — |
| 本文 | 16px | 2.64 |
| 補助 | 15px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 624px／読ませる段は 652px
- セクションの上下余白: 112 / 32 / 84 / 92px（基本は 112px）
- 並びの間隔: 19 / 50px
- 角丸: 45px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1680 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 1.7 |
| 見出し | 52px | 11px / 行間 1.5 |
| セクションの上下余白 | 112px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 50px | —px |

- 本文は 16px → 14px、セクション余白は 112px → 32px（PCの29%）。
- 文字サイズの段は 21 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #168352; color: #ffffff;
  border: 2px solid #168352;
  border-radius: 45px; padding: 24px 62px; min-height: 68px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.585px;
}
.btn-sub{
  background: #f4f4f4; color: #ffffff;
  border-radius: 23px; padding: 0px 2px; min-height: 33px;
  font-size: 11px; font-weight: 700; letter-spacing: 0.45px;
}
.btn-sub{
  background: #168352; color: #ffffff;
  border: 2px solid #168352;
  border-radius: 45px; padding: 17px 24px; min-height: 56px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.495px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 980px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 3420px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1020px | — | 1カラム・画像あり | 左 | 右（12:88） |
| 5 | 820px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 860px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 600px | — | 1カラム・画像あり | 左 | 全幅 |
| 8 | 900px | — | 1カラム・画像あり | — | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#f4f4f4`（1） / `#251e1c`（1）
- 見出しは左4／中央2。
- 2カラムの分け方は 12:88。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 45px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 56.25px 0px;
}
```


## 丸いもの

角丸は 45px だが、**完全な円は別扱い**で 2 箇所ある（144px×1、320px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 28枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（12枚）、16:9（8枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dfcfbe }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent;
  border-radius:45px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#168352; color:#ffffff; border-radius:45px;
  padding:24px 62px; min-height:68px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#dfcfbe` は文字と小さな部品にだけ使う。
- 余白 112px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 45px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（45px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
