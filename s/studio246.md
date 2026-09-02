# 大阪・神戸・京都・名古屋の音楽スタジオ・バンド練習は【スタジオ246】 ふうのデザイン

- 出典: https://widewindows.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／スタジオ･レンタルスペース･シェアオフィス／音楽･芸能･映画･テレビ･配信

白地に `#db2020` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.75、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #db2020;
  --sub: #222222;
  --ink: #ffffff;
  --ink-rev: #222222;
  --on: #db2020;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Geologica", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 1088px;
  --read: 1162px;
  --section-y: 84px;
  --gap: 24px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 46% |
| 主色 | `#db2020` | 18.6% |
| 副色 | `#222222` | 17.3% |
| 差し色 | `#b3ae9e` | 7.6% |
| 差し色 | `#645e5d` | 3.8% |
| 差し色 | `#494c4d` | 3.3% |

文字色は `#ffffff` / `#222222` / `#6c6c6c` / `#740e0e`。

- 主色 `#db2020` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は`rgba(34, 34, 34, 0.1) 5px 10px 30px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#222222` | 35 | 35 | 0 | 7 |
| `#db2020` | 9 | 6 | 0 | 1 |
| `#aaaaaa` | 1 | 0 | 13 | 0 |
| `#f8f8f8` | 1 | 0 | 0 | 0 |
| `#a70f0f` | 1 | 0 | 0 | 0 |
| `#ffffff` | 8 | 74 | 0 | 2 |
| `#6c6c6c` | 0 | 17 | 0 | 0 |
| `#740e0e` | 0 | 1 | 0 | 0 |

- `#db2020` は面として9箇所、文字として6箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#222222` | `#222222` |
| `#db2020`（主色） | `#222222` |
| `#aaaaaa` | `#db2020` |
| `#f8f8f8` | `#db2020` |

```css
.section{ --on:#db2020 }                     /* 地の面 */
.section--main{ background:var(--main); color:#222222; --on:#222222 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#222222 }
.section--main .btn--fill{ background:#222222; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ebebeb`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Geologica
- ウェイトは 600 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | — |
| 見出し | 18px | — |
| 小見出し | 17px | 1.2 |
| 本文 | 16px | 1.75 |
| 補助 | 15px | — |
| 注記 | 14px | 1.5 |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1088px／読ませる段は 1162px
- セクションの上下余白: 84 / 36 / 104 / 112px（基本は 84px）
- 並びの間隔: 7 / 8 / 24 / 37px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1023 / 767 / 600 / 567 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 14px / 行間 1.75 |
| セクションの上下余白 | 84px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 24px | 7px |

- 本文は 16px → 14px、セクション余白は 84px → 24px（PCの29%）。
- 文字サイズの段は 20 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #222222; color: #ffffff;
  border-radius: 9999px; padding: 7px 15px; min-height: 56px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.786938px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.786938px;
}
.btn-sub{
  background: transparent; color: #222222;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.786938px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#aaaaaa` | ヒーロー（画像） | — | 全幅 |
| 2 | 400px | `#db2020` | 1カラム・画像あり | — | — |
| 3 | 820px | — | 6カラム・画像あり | 左 | 全幅 |
| 4 | 720px | `#f8f8f8` | 3カラム・画像あり | 左 | 見出しの下 |
| 5 | 1640px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 820px | — | 4カラム・画像あり | 左 | 全幅 |
| 7 | 840px | `#222222` | 2カラム・画像あり | 左 | 全幅 |
| 8 | 980px | — | 5カラム・画像あり | 左 | 全幅 |
| 9 | 480px | — | 6カラム・画像あり | 中央 | — |
| 10 | 500px | — | 6カラム・画像あり | 左 | 左（20:80） |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#db2020` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#222222`（5） / `#db2020`（2） / `#aaaaaa`（1） / `#f8f8f8`（1）
- 見出しは左6／中央2。
- 2カラムの分け方は 20:80。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #ebebeb。面によって入れ替える */
  border-radius: 5px;
  padding: 16px 14px;
}
```

ラベル・タグ

```css
.chip{
  background: #222222; color: #ffffff;
  border-radius: 999px; padding: 5px 13px; font-size: 16px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 18 箇所ある（56px×11、24px×7）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 77枚使っている。うち 12 枚は画面いっぱいに置く
- 比率は 3:2（47枚）、1:1（16枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#db2020 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#222222; --on:#222222 }
.section--main .btn--fill{ background:#222222; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:5px; padding:16px 14px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#222222; color:#ffffff; border-radius:9999px;
  padding:7px 15px; min-height:56px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:24px; --gap:7px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#db2020` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 84px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
