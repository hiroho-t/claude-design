# エネクラウド株式会社 ふうのデザイン

- 出典: https://enecloud.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／レスポンシブ／1カラム

白地に `#f49c06` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f49c06;
  --sub: #f49c06;
  --ink: #404040;
  --ink-rev: #ffffff;
  --on: #f49c06;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1224px;
  --read: 648px;
  --section-y: 80px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.3% |
| 主色 | `#ebf0f3` | 12.3% |
| 副色 | `#f49c06` | 8.5% |
| 差し色 | `#ec6c00` | 6% |
| 差し色 | `#bbbdbb` | 2.9% |
| 差し色 | `#35bda4` | 2.7% |

文字色は `#404040` / `#ffffff` / `#ec6c00` / `#808282`。

- 主色 `#f49c06` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 4 | 20 | 0 | 0 |
| `#ebf0f3` | 3 | 0 | 0 | 0 |
| `#f5f7f9` | 1 | 0 | 0 | 0 |
| `#404040` | 0 | 44 | 0 | 0 |
| `#ec6c00` | 0 | 9 | 0 | 0 |
| `#808282` | 0 | 4 | 0 | 0 |

- `#f49c06` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f49c06` |
| `#f1f5f7` | `#f49c06` |
| `#ebf0f3` | `#f49c06` |

```css
.section{ --on:#f49c06 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ebf0f3` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | — |
| 見出し | 20px | — |
| 小見出し | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 10px | 1.4 |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1224px／読ませる段は 648px
- セクションの上下余白: 80 / 64 / 152 / 76px（基本は 80px）
- 並びの間隔: 10 / 12 / 24 / 40px
- 角丸: 0px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 990 / 840 / 690 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 2 |
| 見出し | 32px | 10px / 行間 1.4 |
| セクションの上下余白 | 80px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 10px |

- 本文は 16px → 14px、セクション余白は 80px → 24px（PCの30%）。
- 文字サイズの段は 24 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | 右 | 全幅 |
| 2 | 1580px | `#ebf0f3` | 2カラム・画像あり | 左 | 見出しの下 |
| 3 | 880px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 760px | — | 2カラム・画像あり | 左 | 全幅 |
| 5 | 980px | — | 1カラム・画像あり | 左 | 右（56:44） |
| 6 | 520px | — | 1カラム・画像あり | — | 全面 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#f1f5f7`（2） / `#ebf0f3`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 56:44。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 50px;
  padding: 0px 0px;
}
```


## 画像

- 19枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（8枚）、3:2（3枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f49c06 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:50px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:24px; --gap:10px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#f49c06` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 80px と行間 null を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 50px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 12px 以外）を混ぜない。
