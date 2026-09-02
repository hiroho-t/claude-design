# 社会福祉法人さつき会 ふうのデザイン

- 出典: https://satsukikai-oshima.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／福祉･介護

#faf4ea の地に `#f39800` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 null、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #faf4ea;
  --main: #f39800;
  --ink: #555555;
  --ink-rev: #000000;
  --on: #f39800;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 800px;
  --read: 596px;
  --section-y: 88px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#faf4ea` | 96.1% |

文字色は `#555555` / `#000000` / `#333333` / `#f39800`。

- 主色 `#f39800` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 2px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#faf4ea` | 8 | 0 | 0 | 0 |
| `#fffbf5` | 15 | 2 | 0 | 5 |
| `#f0e9d9` | 1 | 0 | 0 | 0 |
| `#f39800` | 2 | 3 | 1 | 1 |
| `#90e0ae` | 1 | 0 | 0 | 0 |
| `#555555` | 0 | 74 | 1 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |
| `#333333` | 0 | 1 | 0 | 0 |

- `#f39800` は面2箇所・文字3箇所を行き来する。ボタンの地にも使う。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#faf4ea`（地） | `#f39800` |
| `#ffffff` | `#f39800` |
| `#f0e9d9` | `#f39800` |
| `#fffbf5` | `#f39800` |

```css
.section{ --on:#f39800 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#faf4ea` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 見出ゴMB1（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Lato
- ウェイトは 500 / 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | — |
| 見出し | 28px | 1.4 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.7 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 800px／読ませる段は 596px
- セクションの上下余白: 88 / 136 / 92 / 104px（基本は 88px）
- 並びの間隔: 12 / 32 / 45px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 16px |
| 見出し | 48px | 15px / 行間 1.7 |
| セクションの上下余白 | 88px | 24px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 32px | 16px |

- 本文は 16px → 16px、セクション余白は 88px → 24px（PCの27%）。
- 文字サイズの段は 18 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #fffbf5; color: #555555;
  border: 1px solid #d6cdbb;
  border-radius: 50px; padding: 24px 64px; min-height: 79px;
  font-size: 16px; font-weight: 500; letter-spacing: 4px;
}
.btn-sub{
  background: #f39800; color: #ffffff;
  border: 1px solid #f39800;
  border-radius: 8px; padding: 12px 24px; min-height: 45px;
  font-size: 16px; font-weight: 500; letter-spacing: 1.6px;
}
.btn-sub{
  background: #ffffff; color: #555555;
  border: 1px solid #555555;
  border-radius: 128px; padding: 20px 24px; min-height: 78px;
  font-size: 18px; font-weight: 300; letter-spacing: 2.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#f0e9d9` | ヒーロー（画像） | — | 全幅 |
| 2 | 360px | `#faf4ea` | 1カラム・画像あり | — | — |
| 3 | 1040px | `#faf4ea` | 2カラム・画像あり | 左 | 右（50:50） |
| 4 | 900px | — | 1カラム・文字だけ | — | — |
| 5 | 940px | `#faf4ea` | 2カラム・画像あり | 左 | 右（38:62） |
| 6 | 380px | `#faf4ea` | 1カラム・文字だけ | 中央 | — |
| 7 | 860px | `#faf4ea` | 3カラム | 中央 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#faf4ea`（8） / `#ffffff`（3） / `#f0e9d9`（1） / `#fffbf5`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 50:50 / 38:62。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #fffbf5;
  border-radius: 50px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（40px×4、144px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 7枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:4（3枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f39800 }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#fffbf5;
  border-radius:50px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#fffbf5; color:#555555; border-radius:50px;
  padding:24px 64px; min-height:79px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:16px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地は `#faf4ea` のまま。主色 `#f39800` は文字と小さな部品にだけ使う。
- 余白 88px と行間 null を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 50px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
