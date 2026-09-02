# 武田病院画像診断センター ふうのデザイン

- 出典: https://topic.takedahp.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

#f8f8f8 の地に `#113b92` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 1.8、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f8f8f8;
  --main: #113b92;
  --sub: #1448aa;
  --ink: #4c5662;
  --ink-rev: #f4f4f4;
  --on: #113b92;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-UDShinGoPr6-Regular", sans-serif;
  --font-en: "MFW-UDShinGoPr6-Regular", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 1088px;
  --read: 576px;
  --section-y: 80px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f8f8f8` | 52.4% |
| 主色 | `#113b92` | 21.7% |
| 副色 | `#1448aa` | 5.9% |
| 差し色 | `#dfdbd5` | 5.6% |
| 差し色 | `#4a699a` | 4.7% |
| 差し色 | `#8caabc` | 4.7% |

文字色は `#4c5662` / `#f4f4f4` / `#23364c` / `#ffffff`。

- 主色 `#113b92` は差し色ではなく**面**で使う。画面の22%を占めている。
- 影は`rgba(0, 0, 0, 0.05) 0px 4px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#0f3991` | 1 | 0 | 0 | 0 |
| `#ffffff` | 11 | 25 | 4 | 0 |
| `#0633a7` | 2 | 0 | 0 | 0 |
| `#444444` | 0 | 5 | 8 | 0 |
| `#4c5662` | 0 | 59 | 0 | 0 |
| `#f4f4f4` | 0 | 29 | 1 | 0 |
| `#23364c` | 0 | 21 | 0 | 0 |

- `#113b92` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#113b92` |
| `#0633a7` | `#f4f4f4` |
| `#0f3991` | `#f4f4f4` |

```css
.section{ --on:#113b92 }                     /* 地の面 */
.section--main{ background:var(--main); color:#f4f4f4; --on:#f4f4f4 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#f4f4f4 }
.section--main .btn--fill{ background:#f4f4f4; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#bfbfbf`。ただしその囲みは `#f8f8f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: MFW-UDShinGoPr6-Regular
- 欧文: MFW-UDShinGoPr6-Regular
- ウェイトは 400 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | — |
| 見出し | 18px | 1 |
| 小見出し | 16px | — |
| 本文 | 14px | 1.8 |
| 補助 | 13px | — |
| 注記 | 12px | 1 |
| 注記 | 11px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1088px／読ませる段は 576px
- セクションの上下余白: 80 / 100 / 48 / 64px（基本は 80px）
- 並びの間隔: 16 / 24 / 32 / 48px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1023 / 1022 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 14px / 行間 1.7 |
| 見出し | 20px | 12px / 行間 1 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 32px | 17px |

- 本文は 14px → 14px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 25 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #444444;
  border: 1px solid #444444;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 900px | — | 1カラム・画像あり | — | 全面 |
| 3 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 880px | `#ffffff` | 1カラム・文字だけ | — | — |
| 5 | 900px | — | 1カラム・文字だけ | — | — |

- 全5セクション。
- 使われている面の色: `#ffffff`（3） / `#0633a7`（2） / `#0f3991`（1）


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #bfbfbf。面によって入れ替える */
  border-radius: 0px;
  padding: 80px 32px;
}
```


## 画像

- 26枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（15枚）、1:1（2枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#113b92 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#f4f4f4; --on:#f4f4f4 }
.section--main .btn--fill{ background:#f4f4f4; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:80px 32px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#444444; border-radius:0px;
  padding:0px 0px; min-height:54px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:32px; --gap:17px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#113b92` の面を交互に置く。主色は画面の22%を占めるだけ使う。
- 余白 80px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
