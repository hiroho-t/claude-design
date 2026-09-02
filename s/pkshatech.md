# PKSHA Technology Inc. ふうのデザイン

- 出典: https://www.pkshatech.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／科学･研究

#e9e9e9 の地に `#e9e9e9` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.6、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #e9e9e9;
  --main: #e9e9e9;
  --ink: #121213;
  --ink-rev: #ffffff;
  --on: #e9e9e9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Satoshi", sans-serif;
  --font-en: "Satoshi", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.6;
  --container: 828px;
  --read: 572px;
  --section-y: 48px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#e9e9e9` | 97.2% |
| 主色 | `#cfd1d5` | 2.4% |

文字色は `#121213` / `#ffffff` / `#828282` / `#000000`。

- 主色 `#e9e9e9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 14 | 28 | 3 | 7 |
| `#9fa9b3` | 1 | 0 | 0 | 0 |
| `#848487` | 0 | 33 | 1 | 0 |
| `#121213` | 12 | 122 | 1 | 0 |
| `#000000` | 0 | 1 | 1 | 0 |

- `#e9e9e9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#e9e9e9` |
| `#9fa9b3` | `#e9e9e9` |

```css
.section{ --on:#e9e9e9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#e9e9e9` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Satoshi
- 欧文: Satoshi
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1 |
| 見出し | 26px | 1.6 |
| 小見出し | 22px | 1 |
| リード | 17px | — |
| 本文 | 15px | 1.4 |
| 補助 | 14px | 1 |
| 注記 | 13px | — |

- 本文は 15px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 828px／読ませる段は 572px
- セクションの上下余白: 48 / 52 / 56 / 68px（基本は 48px）
- 並びの間隔: 6 / 22 / 24 / 28px
- 角丸: 0px が基本。大きな面だけ 31px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1023 / 640 / 639 / 630 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.6 | 12px / 行間 1.6 |
| 見出し | 56px | 49px / 行間 1 |
| セクションの上下余白 | 48px | 24px |
| 左右の余白 | — | 22px |
| 並びの間隔 | 24px | 12px |

- 本文は 15px → 12px、セクション余白は 48px → 24px（PCの50%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #121213;
  border-radius: 31px; padding: 24px 17px; min-height: 65px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.864px;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 0px; padding: 6px 9px; min-height: 39px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.648px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 4880px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 800px | — | 1カラム・文字だけ | 左 | — |
| 3 | 420px | — | 4カラム・画像あり | 左 | — |
| 4 | 640px | — | 1カラム・画像あり | 左 | 右（77:23） |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#9fa9b3`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 77:23。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 298px 60px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（32px×7、24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 7枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（5枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e9e9e9 }
.container{ width:min(100% - 44px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:4880px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:298px 60px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#121213; border-radius:31px;
  padding:24px 17px; min-height:65px;
  font-size:17px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:12px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 44px) }
}
```

## 守ること

やること

- 地は `#e9e9e9` のまま。主色 `#e9e9e9` は文字と小さな部品にだけ使う。
- 余白 48px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 31px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
