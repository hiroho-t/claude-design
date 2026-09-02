# 賃貸住宅保険の専門会社 ふうのデザイン

- 出典: https://www.safesafe.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

#f4f3f2 の地に `#10263c` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1.86、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f4f3f2;
  --main: #10263c;
  --sub: #015ba8;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #10263c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lexend", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.86;
  --container: 1152px;
  --read: 988px;
  --section-y: 96px;
  --gap: 18px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f4f3f2` | 51.2% |
| 主色 | `#10263c` | 19.2% |
| 副色 | `#015ba8` | 7.4% |
| 差し色 | `#2f3d4e` | 5.5% |
| 差し色 | `#7697a0` | 5.2% |
| 差し色 | `#ccc5bc` | 5.1% |

文字色は `#ffffff` / `#000000` / `#1a1a1a` / `#a0a0a0`。

- 主色 `#10263c` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f4f3f2` | 7 | 0 | 6 | 3 |
| `#10263c` | 3 | 0 | 0 | 0 |
| `#ffffff` | 7 | 103 | 3 | 1 |
| `#005ba8` | 2 | 4 | 0 | 1 |
| `#e6e3dc` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 8 | 0 | 0 |
| `#1a1a1a` | 0 | 7 | 0 | 0 |
| `#a0a0a0` | 0 | 5 | 0 | 0 |

- `#10263c` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f4f3f2`（地） | `#10263c` |
| `#0d2134` | `#000000` |
| `#ffffff` | `#10263c` |
| `#f9f8f7` | `#10263c` |

```css
.section{ --on:#10263c }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#10263c` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Lexend
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | 1.6 |
| 見出し | 18px | — |
| 小見出し | 17px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.86 |

- 本文は 14px・行間 1.86。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 988px
- セクションの上下余白: 96 / 60 / 72 / 80px（基本は 96px）
- 並びの間隔: 3 / 18px
- 角丸: 0px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1025 / 1024 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.86 | 14px / 行間 1.75 |
| 見出し | 44px | 32px / 行間 1.6 |
| セクションの上下余白 | 96px | 24px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 18px | 3px |

- 本文は 14px → 14px、セクション余白は 96px → 24px（PCの25%）。
- 文字サイズの段は 17 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ededed; color: #000000;
  border-radius: 12px; padding: 20px 0px; min-height: 62px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #005ba8;
  border: 1px solid #ffffff;
  border-radius: 24px; padding: 0px 0px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #005ba8; color: #ffffff;
  border-radius: 12px; padding: 20px 0px; min-height: 62px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 900px | — | 1カラム・画像あり | — | 全面 |
| 3 | 900px | — | 1カラム・文字だけ | 中央 | — |
| 4 | 860px | `#f4f3f2` | 1カラム・画像あり | — | 全幅 |
| 5 | 1340px | `#f4f3f2` | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1160px | `#f9f8f7` | 1カラム・文字だけ | 右 | — |
| 7 | 1060px | `#005ba8` | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 400px | — | 1カラム・文字だけ | — | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f4f3f2`（3） / `#0d2134`（2） / `#ffffff`（1） / `#f9f8f7`（1）
- 見出しは左0／中央3。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #0d2134;
  border: 2px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 19px;
  padding: 0px 160px;
}
```

ラベル・タグ

```css
.chip{
  background: #e41a24; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 11px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（56px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 8枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（5枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#10263c }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#0d2134; border:2px solid var(--on);
  border-radius:19px; padding:0px 160px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ededed; color:#000000; border-radius:12px;
  padding:20px 0px; min-height:62px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:3px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地色と主色 `#10263c` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 96px と行間 1.86 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 19px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.86 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 12px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
