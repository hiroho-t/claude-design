# HAA 公式オンラインストア ふうのデザイン

- 出典: https://haajapan.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／生活用品･雑貨･インテリア･家具

#fafafd の地に `#4b3624` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fafafd;
  --main: #4b3624;
  --sub: #26282b;
  --ink: #1a1a1a;
  --ink-rev: #ffffff;
  --on: #4b3624;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-GJGothicBBBProN-Medium", sans-serif;
  --font-en: "MFW-GJGothicBBBProN-Medium", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1212px;
  --read: 633px;
  --section-y: 100px;
  --gap: 8px;
  --radius: 2px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fafafd` | 65.7% |
| 主色 | `#e8ecef` | 16.2% |
| 副色 | `#26282b` | 6.6% |
| 差し色 | `#cccccd` | 5.9% |
| 差し色 | `#4b3624` | 2.4% |
| 差し色 | `#8a7963` | 2.4% |

文字色は `#1a1a1a` / `#ffffff` / `#000000` / `#976f22`。

- 主色 `#4b3624` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fafafd` | 66 | 65 | 2 | 1 |
| `#e8ecef` | 4 | 0 | 0 | 0 |
| `#f2f2f2` | 14 | 0 | 0 | 0 |
| `#26282b` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 40 | 1 | 0 |
| `#1a1a1a` | 0 | 148 | 0 | 0 |
| `#976f22` | 0 | 1 | 0 | 0 |

- `#4b3624` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fafafd`（地） | `#4b3624` |
| `#f2f2f2` | `#4b3624` |
| `#e8ecef` | `#4b3624` |
| `#edf0ee` | `#4b3624` |

```css
.section{ --on:#4b3624 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#edf0ee` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: MFW-GJGothicBBBProN-Medium
- 欧文: MFW-GJGothicBBBProN-Medium
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1.75 |
| 見出し | 22px | 1.75 |
| 小見出し | 17px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2 |
| 補助 | 13px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1212px／読ませる段は 633px
- セクションの上下余白: 100 / 84 / 68 / 60px（基本は 100px）
- 並びの間隔: 4 / 6 / 8 / 11px
- 角丸: 2px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1366 / 992 / 768 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 12px / 行間 2 |
| 見出し | 26px | 23px / 行間 1.75 |
| セクションの上下余白 | 100px | 56px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 8px | 6px |

- 本文は 14px → 12px、セクション余白は 100px → 56px（PCの56%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #1a1a1a;
  border: 1px solid #808080;
  border-radius: 2px; padding: 12px 34px; min-height: 51px;
  font-size: 17px; font-weight: 500; letter-spacing: 2.53001px;
}
.btn-sub{
  background: #fafafd; color: #1a1a1a;
  border: 1px solid #000000;
  border-radius: 2px; padding: 0px 17px; min-height: 37px;
  font-size: 12px; font-weight: 500; letter-spacing: 1.15959px;
}
.btn-sub{
  background: transparent; color: #1a1a1a;
  border: 1px solid #808080;
  border-radius: 2px; padding: 12px 0px; min-height: 51px;
  font-size: 17px; font-weight: 500; letter-spacing: 2.53001px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | 左 | 右（67:33） |
| 2 | 740px | `#fafafd` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 900px | `#e8ecef` | 2カラム・画像あり | 右 | 左（39:61） |
| 4 | 700px | `#fafafd` | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 760px | `#e8ecef` | 2カラム・画像あり | 左 | 右（84:16） |
| 6 | 840px | `#fafafd` | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 760px | `#edf0ee` | 6カラム・画像あり | 中央 | — |
| 8 | 2080px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 9 | 480px | `#f2efeb` | 1カラム・文字だけ | 左 | — |
| 10 | 500px | — | 1カラム・画像あり | 中央 | 全幅 |
| 11 | 400px | `#fdf9f2` | 5カラム・画像あり | — | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fafafd`（21） / `#f2f2f2`（14） / `#e8ecef`（2） / `#edf0ee`（1）
- 見出しは左4／中央5。
- 2カラムの分け方は 67:33 / 39:61 / 84:16。半分ずつには割らない。


## 部品

囲み（18箇所で同じ形）

```css
.card{
  background: #fafafd;
  border-radius: 2px;
  padding: 34px 42px;
}
```


## 画像

- 27枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:4（13枚）、1:1（9枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4b3624 }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#fafafd;
  border-radius:2px; padding:34px 42px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#1a1a1a; border-radius:2px;
  padding:12px 34px; min-height:51px;
  font-size:17px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:56px; --gap:6px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#fafafd` のまま。主色 `#4b3624` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 2px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（2px と 0px 以外）を混ぜない。
