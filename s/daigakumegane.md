# 大学眼鏡 ふうのデザイン

- 出典: https://daigakumegane.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／小売･製造小売（SPA）／レスポンシブ

#fffaf1 の地に `#b49646` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1、セクション間 244px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fffaf1;
  --main: #b49646;
  --sub: #201f1d;
  --ink: #080808;
  --ink-rev: #464543;
  --on: #b49646;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 1200px;
  --read: 808px;
  --section-y: 244px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fffaf1` | 46.8% |
| 主色 | `#b49646` | 25.2% |
| 副色 | `#201f1d` | 8.5% |
| 差し色 | `#ece5d8` | 8.2% |
| 差し色 | `#090909` | 7.3% |
| 差し色 | `#5e6354` | 2.2% |

文字色は `#080808` / `#464543` / `#979797` / `#d0d0d0`。

- 主色 `#b49646` は差し色ではなく**面**で使う。画面の25%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#b49646` | 9 | 34 | 1 | 1 |
| `#fffaf1` | 11 | 0 | 0 | 0 |
| `#080808` | 12 | 44 | 1 | 6 |
| `#ece5d8` | 1 | 0 | 0 | 0 |
| `#ffffff` | 6 | 14 | 0 | 1 |
| `#464543` | 0 | 15 | 0 | 0 |
| `#979797` | 0 | 13 | 0 | 0 |
| `#d0d0d0` | 0 | 5 | 0 | 0 |

- `#b49646` は文字色として34箇所で使うのが主。面としては9箇所しかないが、1枚が大きく画面の25%を占める。ボタンの地にも使う。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#b49646`（主色） | `#b49646` |
| `#080808` | `#464543` |
| `#fffaf1`（地） | `#b49646` |
| `#ffffff` | `#b49646` |

```css
.section{ --on:#b49646 }                     /* 地の面 */
.section--main{ background:var(--main); color:#464543; --on:#464543 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#464543 }
.section--main .btn--fill{ background:#464543; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fffaf1` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 17px | 1.4 |
| 見出し | 15px | — |
| 本文 | 14px | 1 |
| 補助 | 13px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 808px
- セクションの上下余白: 244 / 72 / 52 / 104px（基本は 244px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 959 / 569 / 360 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 13px / 行間 1.6 |
| セクションの上下余白 | 244px | 108px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 13px、セクション余白は 244px → 108px（PCの44%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #080808; color: #ffffff;
  border-radius: 9999px; padding: 16px 37px; min-height: 32px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #080808; color: #ffffff;
  border-radius: 9999px; padding: 11px 0px; min-height: 33px;
  font-size: 11px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1140px | `#080808` | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 2360px | `#b49646` | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 920px | — | 4カラム・画像あり | 中央 | — |
| 4 | 700px | — | 1カラム・画像あり | 左 | — |
| 5 | 400px | — | 2カラム・画像あり | 左 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#b49646` の面が 5 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#b49646`（5） / `#080808`（3） / `#fffaf1`（3） / `#ffffff`（2）
- 見出しは左2／中央3。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #b49646;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #b49646; color: #ffffff;
  border-radius: 4px; padding: 5px 8px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 17 箇所ある（24px×9、16px×5、64px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 7枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 4:3（2枚）、16:9（1枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b49646 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#464543; --on:#464543 }
.section--main .btn--fill{ background:#464543; color:var(--main) }
.card{ background:#b49646;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:569px){
  :root{ --fs-body:13px; --section-y:108px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#b49646` の面を全幅で交互に置く。主色は画面の25%を占めるだけ使う。
- 余白 244px と行間 1 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
