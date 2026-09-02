# 安心安全デザイン研究室 ふうのデザイン

- 出典: https://aa-design-lab.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 科学･研究／レスポンシブ／1カラム

#f9efe8 の地に `#f2e3d6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.4、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f9efe8;
  --main: #f2e3d6;
  --sub: #666666;
  --ink: #666666;
  --ink-rev: #ffffff;
  --on: #f2e3d6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.4;
  --container: 568px;
  --read: 600px;
  --section-y: 112px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f9efe8` | 81.5% |
| 主色 | `#000000` | 11.2% |
| 副色 | `#666666` | 4.5% |

文字色は `#666666` / `#ffffff` / `#999999` / `#888888`。

- 主色 `#f2e3d6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9efe8` | 4 | 1 | 0 | 0 |
| `#000000` | 1 | 1 | 0 | 0 |
| `#eeeeee` | 1 | 0 | 0 | 0 |
| `#f2e3d6` | 2 | 0 | 0 | 0 |
| `#666666` | 5 | 28 | 4 | 4 |
| `#ffffff` | 1 | 15 | 1 | 0 |
| `#999999` | 0 | 3 | 0 | 0 |
| `#888888` | 0 | 2 | 0 | 0 |

- `#f2e3d6` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f9efe8`（地） | `#f2e3d6` |
| `#f2e3d6`（主色） | `#f2e3d6` |
| `#ffffff` | `#f2e3d6` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#f2e3d6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f9efe8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Lato
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.5 |
| 見出し | 20px | — |
| 小見出し | 16px | — |
| リード | 15px | — |
| リード | 14px | — |
| 本文 | 12px | 1.4 |

- 本文は 12px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 568px／読ませる段は 600px
- セクションの上下余白: 112 / 60 / 80 / 100px（基本は 112px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.4 | 12px / 行間 1.4 |
| 見出し | 40px | 22px / 行間 1.5 |
| セクションの上下余白 | 112px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 12px → 12px、セクション余白は 112px → 52px（PCの46%）。
- 文字サイズの段は 22 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #666666;
  border: 1px solid #e8d4c7;
  border-radius: 0px; padding: 15px 0px; min-height: 36px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.4px;
}
.btn-sub{
  background: #666666; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 16px; font-weight: 400; letter-spacing: 3.68px;
}
.btn-sub{
  background: transparent; color: #666666;
  border: 1px solid #666666;
  border-radius: 64px; padding: 20px 30px; min-height: 64px;
  font-size: 16px; font-weight: 400; letter-spacing: 3.68px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#f9efe8` | ヒーロー（画像） | — | 全幅 |
| 2 | 680px | — | 1カラム・画像あり | — | — |
| 3 | 340px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 600px | — | 1カラム・画像あり | — | 全面 |
| 5 | 1020px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 520px | — | 1カラム・画像あり | 右 | 左（46:54） |
| 7 | 520px | — | 1カラム・画像あり | 左 | 右（46:54） |
| 8 | 400px | `#eeeeee` | 1カラム・文字だけ | — | — |

- 全8セクション。
- 使われている面の色: `#f9efe8`（3） / `#f2e3d6`（2） / `#ffffff`（1） / `#000000`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 46:54 / 46:54。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #f2e3d6;
  border-radius: 30px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（240px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 6枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（3枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f2e3d6 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f2e3d6;
  border-radius:30px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#666666; border-radius:0px;
  padding:15px 0px; min-height:36px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:12px; --section-y:52px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f9efe8` のまま。主色 `#f2e3d6` は文字と小さな部品にだけ使う。
- 余白 112px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 30px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
