# 【公式】山本珈琲 オンラインショップ ふうのデザイン

- 出典: https://yamamotocoffeekan.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ECサイト･オンラインショップ／料理･食べ物･飲み物･食品製造／レスポンシブ

白地に `#62352d` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 21px・行間 1.5、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #62352d;
  --sub: #62352d;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #62352d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 21px;
  --lh-body: 1.5;
  --container: 692px;
  --read: 792px;
  --section-y: 64px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.7% |
| 主色 | `#e4dad3` | 6.4% |
| 副色 | `#62352d` | 2.1% |
| 差し色 | `#efefef` | 2% |
| 差し色 | `#937b60` | 1.9% |
| 差し色 | `#b7b8b0` | 1.7% |

文字色は `#222222` / `#ffffff` / `#aaaaaa` / `#473a2c`。

- 主色 `#62352d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(221, 221, 221) 0px 0px 0px 1px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 26 | 40 | 84 | 0 |
| `#f8f5f3` | 9 | 0 | 1 | 1 |
| `#222222` | 0 | 166 | 0 | 0 |
| `#4b3e2f` | 3 | 2 | 40 | 3 |
| `#aaaaaa` | 0 | 3 | 0 | 0 |

- `#62352d` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#62352d` |
| `#e4dad3` | `#62352d` |
| `#f8f5f3` | `#62352d` |

```css
.section{ --on:#62352d }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f8f5f3` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Poppins
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 本文 | 21px | 1.5 |
| 補助 | 18px | — |
| 注記 | 17px | 1.5 |
| 注記 | 16px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 21px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 692px／読ませる段は 792px
- セクションの上下余白: 64 / 92 / 56 / 84px（基本は 64px）
- 並びの間隔: 4 / 7 / 10 / 19px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 641px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 21px / 行間 1.5 | 18px / 行間 1.5 |
| 見出し | 21px | 14px / 行間 1.5 |
| セクションの上下余白 | 64px | 40px |
| 左右の余白 | — | 45px |
| 並びの間隔 | 10px | 6px |

- 本文は 21px → 18px、セクション余白は 64px → 40px（PCの63%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: #4b3e2f; color: #ffffff;
  border: 1px solid #4b3e2f;
  border-radius: 9999px; padding: 16px 16px; min-height: 69px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.391837px;
}
.btn-sub{
  background: #f8f5f3; color: #222222;
  border: 1px solid #f8f5f3;
  border-radius: 9999px; padding: 10px 23px; min-height: 47px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.321735px;
}
.btn-sub{
  background: #473a2c; color: #ffffff;
  border: 1px solid #473a2c;
  border-radius: 9999px; padding: 10px 23px; min-height: 47px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.321735px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | — | ヒーロー（画像） | — | 全面 |
| 2 | 520px | `#f8f5f3` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1000px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1100px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 5 | 760px | — | 1カラム・画像あり | — | 全面 |
| 6 | 580px | `#f8f5f3` | 2カラム・画像あり | — | 全面 |
| 7 | 840px | — | 1カラム・画像あり | 左 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（23） / `#e4dad3`（20） / `#f8f5f3`（2）
- 見出しは左1／中央3。


## 部品

囲み（20箇所で同じ形）

```css
.card{
  background: #e4dad3;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 39 箇所ある（40px×31、32px×6、48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 41枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（30枚）、4:3（5枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#62352d }
.container{ width:min(100% - 90px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#e4dad3;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#4b3e2f; color:#ffffff; border-radius:9999px;
  padding:16px 16px; min-height:69px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:641px){
  :root{ --fs-body:18px; --section-y:40px; --gap:6px; }
  .container{ width:calc(100% - 90px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#62352d` は文字と小さな部品にだけ使う。
- 余白 64px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
