# j.organic coffee ふうのデザイン

- 出典: https://www.jorganic-coffee.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／料理･食べ物･飲み物･食品製造

#f6f1ed の地に `#d0beb7` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 17px・行間 2、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f6f1ed;
  --main: #d0beb7;
  --sub: #d8dbdc;
  --ink: #4e4b49;
  --ink-rev: #ffffff;
  --on: #d0beb7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Klee One", sans-serif;
  --fs-body: 17px;
  --lh-body: 2;
  --container: 1108px;
  --read: 1196px;
  --section-y: 72px;
  --gap: 72px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f6f1ed` | 85.7% |
| 主色 | `#d0beb7` | 4.5% |
| 副色 | `#d8dbdc` | 2.1% |
| 差し色 | `#a9a7a2` | 1.8% |
| 差し色 | `#5b4b39` | 1.8% |
| 差し色 | `#302b23` | 1.6% |

文字色は `#4e4b49` / `#ffffff` / `#000000` / `#cac1b9`。

- 主色 `#d0beb7` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 5 | 47 | 0 | 3 |
| `#ede4e1` | 1 | 0 | 0 | 0 |
| `#cac1b9` | 7 | 2 | 0 | 7 |
| `#4e4b49` | 1 | 129 | 0 | 1 |
| `#000000` | 0 | 14 | 0 | 0 |

- `#d0beb7` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#d0beb7` |
| `#ede4e1` | `#d0beb7` |

```css
.section{ --on:#d0beb7 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Klee One
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 76px | — |
| 見出し | 59px | 2 |
| 小見出し | 33px | 2 |
| リード | 21px | — |
| リード | 20px | — |
| 本文 | 17px | 2 |
| 補助 | 16px | — |

- 本文は 17px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1108px／読ませる段は 1196px
- セクションの上下余白: 72 / 160 / 36 / 48px（基本は 72px）
- 並びの間隔: 24 / 25 / 72 / 144px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1700 / 1568 / 1200 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2 | 12px / 行間 2 |
| セクションの上下余白 | 72px | 80px |
| 左右の余白 | — | 35px |
| 並びの間隔 | 72px | 20px |

- 本文は 17px → 12px、セクション余白は 72px → 80px（PCの111%）。
- 文字サイズの段は 17 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #cac1b9; color: #4e4b49;
  border-radius: 720px; padding: 0px 0px; min-height: 67px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.84px;
}
.btn-sub{
  background: transparent; color: #4e4b49;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.84px;
}
.btn-sub{
  background: #ffffff; color: #4e4b49;
  border-radius: 720px; padding: 4px 13px; min-height: 28px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.84px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー（画像） | — | — |
| 2 | 780px | — | 1カラム・画像あり | — | 全面 |
| 3 | 1240px | — | 1カラム・画像あり | — | 全面 |
| 4 | 680px | — | 1カラム・文字だけ | 中央 | — |
| 5 | 760px | — | 2カラム・画像あり | — | 全面 |
| 6 | 340px | — | 1カラム・画像あり | — | 全面 |
| 7 | 1300px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 500px | — | 1カラム・画像あり | — | 全面 |
| 9 | 600px | — | 4カラム・画像あり | — | 全面 |
| 10 | 1080px | — | 1カラム・画像あり | — | 全面 |
| 11 | 1180px | — | 1カラム・画像あり | — | 全面 |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#ede4e1`（1）
- 見出しは左0／中央2。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #4e4b49;
  border-radius: 999px; padding: 4px 13px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（24px×1、72px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 27枚使っている
- 比率は 3:2（8枚）、3:4（4枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d0beb7 }
.container{ width:min(100% - 70px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#cac1b9; color:#4e4b49; border-radius:720px;
  padding:0px 0px; min-height:67px;
  font-size:17px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:80px; --gap:20px; }
  .container{ width:calc(100% - 70px) }
}
```

## 守ること

やること

- 地は `#f6f1ed` のまま。主色 `#d0beb7` は文字と小さな部品にだけ使う。
- 余白 72px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
