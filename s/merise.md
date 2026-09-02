# 英語が好きになるミライズ英会話の教室・オンラインレッスン ふうのデザイン

- 出典: https://eikaiwa.merise.asia/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／スクール･習い事･教材

白地に `#d23339` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d23339;
  --sub: #e0e0e1;
  --ink: #2c2f2f;
  --ink-rev: #000000;
  --on: #d23339;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 1024px;
  --read: 1064px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 65.5% |
| 主色 | `#2d2f2f` | 5.8% |
| 副色 | `#e0e0e1` | 5.1% |
| 差し色 | `#d5cabf` | 4.4% |
| 差し色 | `#d23339` | 3.6% |
| 差し色 | `#86bcc0` | 3.2% |

文字色は `#2c2f2f` / `#000000` / `#ffffff` / `#d23339`。

- 主色 `#d23339` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 0px 4px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 3 | 0 | 0 | 0 |
| `#ffffff` | 34 | 36 | 0 | 1 |
| `#2c2f2f` | 1 | 77 | 0 | 0 |
| `#d23339` | 15 | 34 | 15 | 8 |
| `#4dbac1` | 3 | 1 | 0 | 1 |
| `#000000` | 0 | 10 | 0 | 0 |

- `#d23339` は面15箇所・文字34箇所を行き来する。ボタンの地にも使う。枠線にも15箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#d23339` |
| `#f5f5f5` | `#d23339` |
| `#4dbac1` | `#d23339` |
| `#2c2f2f` | `#000000` |

```css
.section{ --on:#d23339 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 600 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 28px | 1.5 |
| 小見出し | 24px | 1.5 |
| リード | 16px | — |
| リード | 15px | 1.5 |
| 本文 | 14px | 1 |
| 補助 | 12px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1024px／読ませる段は 1064px
- セクションの上下余白: 100 / 60 / 40 / 80px（基本は 100px）
- 並びの間隔: px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 981 / 980 / 782 / 600 / 100px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 14px / 行間 1 |
| 見出し | 32px | 15px / 行間 1.5 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 32 / 24 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #d23339; color: #ffffff;
  border-radius: 4px; padding: 26px 40px; min-height: 80px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 48px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #cfad5f; color: #ffffff;
  border-radius: 4px; padding: 0px 23px; min-height: 48px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 680px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 480px | `#f5f5f5` | 1カラム・画像あり | — | — |
| 3 | 420px | `#ffffff` | 3カラム・画像あり | — | 全面 |
| 4 | 980px | `#ffffff` | 2カラム・画像あり | 中央 | — |
| 5 | 1220px | `#ffffff` | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 4100px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 980px | — | 1カラム・画像あり | 中央 | — |
| 8 | 800px | — | 1カラム・文字だけ | — | — |
| 9 | 700px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 10 | 880px | — | 1カラム・文字だけ | 中央 | — |
| 11 | 220px | `#ffffff` | 帯・区切り | — | — |
| 12 | 320px | `#4dbac1` | 帯・区切り | — | — |

- 全12セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（18） / `#f5f5f5`（3） / `#4dbac1`（2） / `#2c2f2f`（1）
- 見出しは左0／中央6。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 5px;
  padding: 24px 24px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #d23339;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 6px 9px; font-size: 12px;
}
```

## 画像

- 31枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 1:1（9枚）、4:3（3枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d23339 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:680px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff;
  border-radius:5px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#d23339; color:#ffffff; border-radius:4px;
  padding:26px 40px; min-height:80px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d23339` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。
