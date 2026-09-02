# 株式会社DAY TO LIFE（旧 株式会社麦の穂） ふうのデザイン

- 出典: https://www.daytolife.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／料理･食べ物･飲み物･食品製造／レスポンシブ

白地に `#eb5c3c` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #eb5c3c;
  --sub: #6abd79;
  --ink: #262626;
  --ink-rev: #ffffff;
  --on: #eb5c3c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Albert Sans", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1248px;
  --read: 848px;
  --section-y: 100px;
  --gap: 5px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 58.8% |
| 主色 | `#eb5c3c` | 9.4% |
| 副色 | `#6abd79` | 9.3% |
| 差し色 | `#00749b` | 6.2% |
| 差し色 | `#c7d1c4` | 3.4% |
| 差し色 | `#f2f1e8` | 3% |

文字色は `#262626` / `#ffffff` / `#afafaf`。

- 主色 `#eb5c3c` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#eb5c3c` | 2 | 0 | 0 | 0 |
| `#6abd79` | 1 | 0 | 0 | 0 |
| `#f9f9f9` | 29 | 12 | 0 | 1 |
| `#00749b` | 1 | 0 | 0 | 0 |
| `#ebd100` | 1 | 0 | 0 | 0 |
| `#262626` | 5 | 52 | 0 | 0 |
| `#afafaf` | 0 | 12 | 0 | 0 |

- `#eb5c3c` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#eb5c3c` |
| `#eb5c3c`（主色） | `#ffffff` |
| `#f4dda5` | `#eb5c3c` |
| `#6abd79` | `#eb5c3c` |

```css
.section{ --on:#eb5c3c }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Albert Sans
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | — |
| 見出し | 18px | — |
| 本文 | 16px | 2 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1248px／読ませる段は 848px
- セクションの上下余白: 100 / 84 / 88 / 92px（基本は 100px）
- 並びの間隔: 2 / 5px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| セクションの上下余白 | 100px | 28px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 5px | —px |

- 本文は 16px → 14px、セクション余白は 100px → 28px（PCの28%）。
- 文字サイズの段は 15 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
.btn-sub{
  background: transparent; color: #262626;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.65px;
}
.btn-sub{
  background: transparent; color: #262626;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー | — | — |
| 2 | 800px | — | 1カラム・文字だけ | 左 | — |
| 3 | 620px | — | 1カラム・文字だけ | — | — |
| 4 | 1260px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1400px | — | 6カラム | 中央 | — |
| 6 | 1200px | — | 1カラム・文字だけ | 右 | — |
| 7 | 840px | — | 1カラム・文字だけ | 中央 | — |
| 8 | 740px | — | 1カラム・文字だけ | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#eb5c3c` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（8） / `#eb5c3c`（2） / `#f4dda5`（1） / `#6abd79`（1）
- 見出しは左1／中央4。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #262626; color: #ffffff;
  border-radius: 999px; padding: 5px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 21 箇所ある（40px×12、64px×9）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 8枚使っている
- 比率は 3:2（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#eb5c3c }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:28px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地色と主色 `#eb5c3c` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
