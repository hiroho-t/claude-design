# あかつき証券 ふうのデザイン

- 出典: https://www.akatsuki-sc.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／金融･投資･保険･士業／レスポンシブ

白地に `#161f2e` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.5、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #161f2e;
  --sub: #efeff2;
  --ink: #ffffff;
  --ink-rev: #0a2146;
  --on: #161f2e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1148px;
  --read: 560px;
  --section-y: 88px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 51.3% |
| 主色 | `#161f2e` | 19.3% |
| 副色 | `#efeff2` | 9.6% |
| 差し色 | `#915c4e` | 4.2% |
| 差し色 | `#2e416b` | 3.6% |
| 差し色 | `#5e3035` | 3.6% |

文字色は `#ffffff` / `#0a2146` / `#ced0d3` / `#34363b`。

- 主色 `#161f2e` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は`rgb(227, 227, 227) 4px 4px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 19 | 77 | 3 | 0 |
| `#161f2e` | 2 | 0 | 0 | 0 |
| `#efeff2` | 4 | 0 | 0 | 0 |
| `#204077` | 1 | 0 | 0 | 0 |
| `#0a2146` | 7 | 38 | 0 | 7 |
| `#ced0d3` | 0 | 3 | 0 | 0 |
| `#34363b` | 0 | 12 | 0 | 0 |

- `#161f2e` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#161f2e` |
| `#efeff2` | `#161f2e` |
| `#161f2e`（主色） | `#0a2146` |
| `#204077` | `#0a2146` |

```css
.section{ --on:#161f2e }                     /* 地の面 */
.section--main{ background:var(--main); color:#0a2146; --on:#0a2146 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0a2146 }
.section--main .btn--fill{ background:#0a2146; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.35 |
| 見出し | 22px | 1.35 |
| 小見出し | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1148px／読ませる段は 560px
- セクションの上下余白: 88 / 56 / 40 / 52px（基本は 88px）
- 並びの間隔: 7 / 14 / 27px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 1100 / 1000 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 14px / 行間 1.35 |
| 見出し | 30px | 14px / 行間 1.35 |
| セクションの上下余白 | 88px | 48px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 14px | 8px |

- 本文は 16px → 14px、セクション余白は 88px → 48px（PCの55%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 27px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.32px;
}
.btn-sub{
  background: #0b4199; color: #ffffff;
  border-radius: 9999px; padding: 0px 12px; min-height: 27px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #34363b;
  border: 1px solid #e2e2e6;
  border-radius: 0px; padding: 30px 0px; min-height: 50px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 600px | — | 1カラム・画像あり | — | 全幅 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#161f2e` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（12） / `#efeff2`（3） / `#161f2e`（2） / `#204077`（1）


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 0px 0px;
  box-shadow: rgb(227, 227, 227) 4px 4px 16px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #0b4199; color: #ffffff;
  border-radius: 999px; padding: 0px 12px; font-size: 13px;
}
```

## 画像

- 27枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 21:9（10枚）、16:9（4枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#161f2e }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0a2146; --on:#0a2146 }
.section--main .btn--fill{ background:#0a2146; color:var(--main) }
.card{ background:#ffffff;
  border-radius:4px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:27px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:48px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#161f2e` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 88px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
