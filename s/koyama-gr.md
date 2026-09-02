# 湖山医療福祉グループ ふうのデザイン

- 出典: https://www.koyama-gr.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／病院･クリニック･歯医者･医療･薬／福祉･介護

白地に `#619fbb` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #619fbb;
  --sub: #e4e6e3;
  --ink: #000000;
  --ink-rev: #171717;
  --on: #619fbb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Open Sans", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1100px;
  --read: 720px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.4% |
| 主色 | `#619fbb` | 9.6% |
| 副色 | `#e4e6e3` | 3.6% |
| 差し色 | `#d0ccc4` | 3% |
| 差し色 | `#50454a` | 2.9% |
| 差し色 | `#898a87` | 2.6% |

文字色は `#000000` / `#171717` / `#8c8c8c` / `#ffffff`。

- 主色 `#619fbb` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 1px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 33 | 38 | 1 | 6 |
| `#edf3f7` | 3 | 0 | 32 | 0 |
| `#619fbb` | 18 | 2 | 7 | 8 |
| `#171717` | 0 | 57 | 0 | 0 |
| `#000000` | 0 | 95 | 0 | 0 |
| `#8c8c8c` | 0 | 78 | 0 | 0 |

- `#619fbb` は面として18箇所、文字として2箇所。塗りが主役。ボタンの地にも使う。枠線にも7箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#619fbb` |
| `#edf3f7` | `#619fbb` |
| `#619fbb`（主色） | `#619fbb` |

```css
.section{ --on:#619fbb }                     /* 地の面 */
.section--main{ background:var(--main); color:#171717; --on:#171717 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#171717 }
.section--main .btn--fill{ background:#171717; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ebeeef`。ただしその囲みは `#edf3f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Open Sans
- ウェイトは 500 / 300 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 24px | 1.6 |
| 小見出し | 20px | — |
| リード | 18px | 1.5 |
| 本文 | 16px | 1.8 |
| 補助 | 14px | 1.5 |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 720px
- セクションの上下余白: 120 / 56 / 80 / 96px（基本は 120px）
- 並びの間隔: 4 / 16 / 80px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1100 / 896 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 16px / 行間 1.8 |
| 見出し | 28px | 14px / 行間 1.5 |
| セクションの上下余白 | 120px | 24px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 16px | 16px |

- 本文は 16px → 16px、セクション余白は 120px → 24px（PCの20%）。
- 文字サイズの段は 24 / 20 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #ebeeef;
  border-radius: 0px; padding: 24px 0px; min-height: 54px;
  font-size: 16px; font-weight: 300; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 27px;
  font-size: 18px; font-weight: 700; letter-spacing: 0.32px;
}
.btn-sub{
  background: #619fbb; color: #ffffff;
  border: 1px solid #619fbb;
  border-radius: 9999px; padding: 22px 24px; min-height: 75px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 180px | — | 3カラム・画像あり | — | 全面 |
| 3 | 780px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 820px | — | 4カラム・画像あり | — | 全面 |
| 5 | 1640px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 1300px | — | 5カラム・画像あり | 右 | 見出しの下 |
| 7 | 1220px | — | 6カラム・画像あり | 左 | — |
| 8 | 720px | — | 3カラム・画像あり | 右 | 左（19:81） |
| 9 | 980px | — | 4カラム・画像あり | — | 全面 |
| 10 | 820px | — | 3カラム・画像あり | 右 | 左（17:83） |
| 11 | 1020px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 12 | 1020px | — | 1カラム・文字だけ | 左 | — |
| 13 | 660px | — | 1カラム・画像あり | — | 全幅 |
| 14 | 600px | — | 4カラム | 左 | — |

- 全14セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#619fbb` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（15） / `#edf3f7`（3） / `#619fbb`（1）
- 見出しは左4／中央2。
- 2カラムの分け方は 19:81 / 17:83。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #ebeeef。面によって入れ替える */
  border-radius: 3px;
  padding: 10px 10px;
}
```

ラベル・タグ

```css
.chip{
  background: #f7f8fa; color: #000000;
  border-radius: 999px; padding: 0px 16px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 21 箇所ある（24px×19、48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 51枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（17枚）、16:9（8枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#619fbb }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#171717; --on:#171717 }
.section--main .btn--fill{ background:#171717; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:3px; padding:10px 10px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:24px 0px; min-height:54px;
  font-size:16px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:896px){
  :root{ --fs-body:16px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地色と主色 `#619fbb` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 120px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 3px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
