# 有限会社包装社 ふうのデザイン

- 出典: https://housousha.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#4b6aa5` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 2、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #4b6aa5;
  --sub: #a9afb7;
  --ink: #ffffff;
  --ink-rev: #212122;
  --on: #4b6aa5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Manrope", sans-serif;
  --font-en: "Manrope", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1140px;
  --read: 720px;
  --section-y: 92px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.5% |
| 主色 | `#4b6aa5` | 12.9% |
| 副色 | `#a9afb7` | 12% |
| 差し色 | `#e9ecee` | 5.1% |
| 差し色 | `#d4d2d0` | 2.5% |
| 差し色 | `#b7d2ed` | 2.1% |

文字色は `#ffffff` / `#212122` / `#4b6aa5` / `#a9afb7`。

- 主色 `#4b6aa5` は差し色ではなく**面**で使う。画面の13%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 5 | 64 | 0 | 0 |
| `#f2f4f5` | 12 | 0 | 0 | 2 |
| `#4b6aa5` | 2 | 21 | 0 | 0 |
| `#a9afb7` | 7 | 1 | 0 | 6 |
| `#5075bb` | 1 | 1 | 0 | 0 |
| `#212122` | 0 | 28 | 0 | 0 |

- `#4b6aa5` は文字色として21箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の13%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f2f4f5` | `#4b6aa5` |
| `#ffffff`（地） | `#4b6aa5` |
| `#4b6aa5`（主色） | `#212122` |
| `#a9afb7` | `#4b6aa5` |

```css
.section{ --on:#4b6aa5 }                     /* 地の面 */
.section--main{ background:var(--main); color:#212122; --on:#212122 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#212122 }
.section--main .btn--fill{ background:#212122; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Manrope
- 欧文: Manrope
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 20px | 1.2 |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 1.2 |
| 補助 | 14px | 1.2 |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1140px／読ませる段は 720px
- セクションの上下余白: 92 / 108 / 44 / 80px（基本は 92px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 992 / 991 / 768 / 576 / 575px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 14px / 行間 2 |
| 見出し | 24px | 14px / 行間 1.2 |
| セクションの上下余白 | 92px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 14px、セクション余白は 92px → 40px（PCの43%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #4b6aa5;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 16px; font-weight: 600; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.2px;
}
.btn-sub{
  background: #a9afb7; color: #ffffff;
  border-radius: 5px; padding: 6px 10px; min-height: 30px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 右 | 左（16:84） |
| 2 | 1540px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 900px | `#4b6aa5` | 6カラム・画像あり | 左 | 右（33:67） |
| 4 | 760px | — | 6カラム | 中央 | — |
| 5 | 1120px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1140px | — | 3カラム・画像あり | 中央 | 全幅 |
| 7 | 760px | — | 1カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#4b6aa5` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f2f4f5`（10） / `#ffffff`（4） / `#4b6aa5`（2） / `#a9afb7`（1）
- 見出しは左2／中央4。
- 2カラムの分け方は 16:84 / 33:67。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #a9afb7; color: #ffffff;
  border-radius: 5px; padding: 6px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 21 箇所ある（16px×19、48px×1、56px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 20枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、1:1（7枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4b6aa5 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#212122; --on:#212122 }
.section--main .btn--fill{ background:#212122; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#4b6aa5; border-radius:0px;
  padding:0px 0px; min-height:30px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#4b6aa5` の面を全幅で交互に置く。主色は画面の13%を占めるだけ使う。
- 余白 92px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
