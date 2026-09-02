# スペイン・中南米への留学ならスペイン留学.jp ふうのデザイン

- 出典: https://spainryugaku.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／スクール･習い事･教材

#e9e5de の地に `#11429f` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 2、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #e9e5de;
  --main: #11429f;
  --sub: #11429f;
  --ink: #08204d;
  --ink-rev: #333333;
  --on: #11429f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "REM", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1260px;
  --read: 1088px;
  --section-y: 92px;
  --gap: 8px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#e9e5de` | 59.6% |
| 主色 | `#ffffff` | 28.5% |
| 副色 | `#11429f` | 8.2% |
| 差し色 | `#eed492` | 3.2% |

文字色は `#08204d` / `#333333` / `#ffffff` / `#fffaad`。

- 主色 `#11429f` は差し色ではなく**面**で使う。画面の8%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 3px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e9e5de` | 1 | 0 | 20 | 0 |
| `#ffffff` | 12 | 22 | 13 | 4 |
| `#103f99` | 7 | 9 | 7 | 2 |
| `#ffc123` | 3 | 1 | 0 | 2 |
| `#ec6340` | 3 | 0 | 0 | 2 |
| `#08204d` | 0 | 66 | 4 | 0 |
| `#333333` | 0 | 31 | 0 | 0 |
| `#fffaad` | 0 | 3 | 0 | 0 |

- `#11429f` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#11429f` |
| `#103f99` | `#333333` |
| `#e9e5de`（地） | `#11429f` |
| `#ffc123` | `#11429f` |

```css
.section{ --on:#11429f }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: REM
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 23px | — |
| 見出し | 20px | 1.5 |
| 小見出し | 19px | 1.5 |
| 本文 | 16px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1260px／読ませる段は 1088px
- セクションの上下余白: 92 / 64 / 112 / 188px（基本は 92px）
- 並びの間隔: 5 / 7 / 8 / 11px
- 角丸: 5px が基本。大きな面だけ 9px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 767 / 600 / 567 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| セクションの上下余白 | 92px | 28px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 8px | 7px |

- 本文は 16px → 14px、セクション余白は 92px → 28px（PCの30%）。
- 文字サイズの段は 17 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #103f99;
  border: 1px solid #103f99;
  border-radius: 50%; padding: 0px 0px; min-height: 56px;
  font-size: 19px; font-weight: 700; letter-spacing: 0.786938px;
}
.btn-sub{
  background: transparent; color: #08204d;
  border-radius: 0px; padding: 0px 0px; min-height: 29px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.786938px;
}
.btn-sub{
  background: #ffffff; color: #08204d;
  border: 1px solid #08204d;
  border-radius: 9999px; padding: 3px 14px; min-height: 29px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.786938px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 320px | — | 帯・区切り | 中央 | 全幅 |
| 3 | 380px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 940px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1100px | — | 5カラム・画像あり | 左 | 全幅 |
| 6 | 760px | — | 1カラム・画像あり | 左 | 右（80:20） |
| 7 | 680px | — | 1カラム・画像あり | 中央 | 左（69:31） |

- 全7セクション。
- 使われている面の色: `#ffffff`（3） / `#103f99`（2） / `#e9e5de`（1） / `#ffc123`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 80:20 / 69:31。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: transparent;
  border: 5px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 50px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #08204d;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 14px; font-size: 14px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 29 箇所ある（56px×24、208px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 39枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 1:1（15枚）、3:4（5枚）、2:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#11429f }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:transparent; border:5px solid var(--on);
  border-radius:50px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#103f99; border-radius:50%;
  padding:0px 0px; min-height:56px;
  font-size:19px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:28px; --gap:7px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#11429f` の面を交互に置く。主色は画面の8%を占めるだけ使う。
- 余白 92px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 5px の線＋角丸 50px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（5px と 9px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
