# アクシージア(AXXZIA) ふうのデザイン

- 出典: https://axxzia.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／美容･化粧品･コスメ･ケア用品

白地に `#7492b9` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.38、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7492b9;
  --sub: #c1bfbe;
  --ink: #333333;
  --ink-rev: #999999;
  --on: #7492b9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.38;
  --container: 1260px;
  --read: 600px;
  --section-y: 72px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.6% |
| 主色 | `#b0afaf` | 9.9% |
| 副色 | `#c1bfbe` | 1.9% |

文字色は `#333333` / `#999999` / `#ffffff` / `#7492b9`。

- 主色 `#7492b9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#333333` | 11 | 72 | 2 | 0 |
| `#ffffff` | 18 | 14 | 0 | 0 |
| `#f4f5f7` | 2 | 0 | 0 | 0 |
| `#ebebeb` | 0 | 0 | 1 | 0 |
| `#999999` | 0 | 49 | 0 | 0 |
| `#7492b9` | 0 | 7 | 7 | 0 |

- `#7492b9` は文字色として7箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも7箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#7492b9` |
| `#333333` | `#999999` |
| `#f4f5f7` | `#7492b9` |

```css
.section{ --on:#7492b9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#999999; --on:#999999 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#999999 }
.section--main .btn--fill{ background:#999999; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f4f5f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.67 |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| リード | 15px | — |
| リード | 14px | 1 |
| 本文 | 13px | 1.38 |
| 補助 | 12px | — |

- 本文は 13px・行間 1.38。

## レイアウト

- コンテンツ幅: 最大 1260px／読ませる段は 600px
- セクションの上下余白: 72 / 120 / 64 / 80px（基本は 72px）
- 並びの間隔: 2 / 20px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1701 / 1500 / 1200 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.38 | 16px / 行間 1.67 |
| 見出し | 34px | 12px / 行間 1 |
| セクションの上下余白 | 72px | 28px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 20px | —px |

- 本文は 13px → 16px、セクション余白は 72px → 28px（PCの39%）。
- 文字サイズの段は 28 / 17 / 16 / 15 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #7492b9;
  border: 1px solid #7492b9;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 540px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1020px | — | 1カラム・文字だけ | 左 | — |
| 4 | 1320px | `#f4f5f7` | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 640px | — | 1カラム・文字だけ | 中央 | — |
| 6 | 780px | — | 2カラム・画像あり | 左 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（12） / `#333333`（11） / `#f4f5f7`（2）
- 見出しは左3／中央2。


## 部品

囲み（11箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、16:9（9枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7492b9 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#999999; --on:#999999 }
.section--main .btn--fill{ background:#999999; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#7492b9; border-radius:0px;
  padding:0px 0px; min-height:26px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:28px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#7492b9` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.38 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.38 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
