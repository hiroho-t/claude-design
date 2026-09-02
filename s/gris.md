# Gris ふうのデザイン

- 出典: https://gris.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／生活用品･雑貨･インテリア･家具／ペット･動物･生き物

#d8d8d8 の地に `#d8d8d8` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #d8d8d8;
  --main: #d8d8d8;
  --sub: #a8a7a7;
  --ink: #151515;
  --ink-rev: #ffffff;
  --on: #d8d8d8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "helvetica", sans-serif;
  --font-en: "helvetica", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 720px;
  --read: 1376px;
  --section-y: 32px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#d8d8d8` | 83.9% |
| 主色 | `#bfbebf` | 4.5% |
| 副色 | `#a8a7a7` | 4% |
| 差し色 | `#131212` | 3.9% |
| 差し色 | `#817f7d` | 3.7% |

文字色は `#151515` / `#ffffff`。

- 主色 `#d8d8d8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#d8d8d8` | 233 | 0 | 0 | 1 |
| `#151515` | 187 | 365 | 0 | 0 |
| `#ffffff` | 13 | 27 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#aaaaaa` | 1 | 0 | 0 | 0 |

- `#d8d8d8` は面として233箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#d8d8d8`（地） | `#d8d8d8` |
| `#151515` | `#ffffff` |
| `#ffffff` | `#d8d8d8` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#d8d8d8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#d8d8d8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: helvetica
- 欧文: helvetica
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 39px | 1.3 |
| 見出し | 31px | 1.3 |
| 小見出し | 25px | — |
| リード | 20px | 1.5 |
| 本文 | 16px | 1.8 |
| 補助 | 13px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 720px／読ませる段は 1376px
- セクションの上下余白: 32 / 64px（基本は 32px）
- 並びの間隔: 8 / 16px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 1024 / 768 / 640 / 375px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 16px / 行間 1.8 |
| 見出し | 39px | 31px / 行間 1.3 |
| セクションの上下余白 | 32px | 292px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | 8px |

- 本文は 16px → 16px、セクション余白は 32px → 292px（PCの913%）。
- 文字サイズの段は 31 / 25 / 20 / 16 / 13px。

## ボタン

```css
.btn{
  background: #d8d8d8; color: #151515;
  border-radius: 0px; padding: 16px 16px; min-height: 61px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 960px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 520px | — | 1カラム・文字だけ | — | — |
| 3 | 700px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 700px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 5 | 720px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 720px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 2000px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 8 | 400px | — | 1カラム・文字だけ | — | — |
| 9 | 580px | — | 3カラム・画像あり | 左 | 見出しの下 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#d8d8d8`（223） / `#151515`（187） / `#ffffff`（13） / `#000000`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（61箇所で同じ形）

```css
.card{
  background: #d8d8d8;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 218 箇所ある（16px×109、24px×109）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 200枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:4（182枚）、3:2（18枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d8d8d8 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:960px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#d8d8d8;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#d8d8d8; color:#151515; border-radius:0px;
  padding:16px 16px; min-height:61px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:292px; --gap:8px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#d8d8d8` のまま。主色 `#d8d8d8` は文字と小さな部品にだけ使う。
- 余白 32px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
