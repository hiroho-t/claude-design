# 蓼科のホテル【公式】ホテル ドゥ ラルパージュ（HÔTEL de L'ALPAGE） ふうのデザイン

- 出典: https://hotelalpage.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／ホテル･旅館･温泉

#f2f2f2 の地に `#2e5a65` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 2、セクション間 104px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2f2f2;
  --main: #2e5a65;
  --sub: #f0e6db;
  --ink: #ffffff;
  --ink-rev: #2e5a65;
  --on: #2e5a65;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Cinzel", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 676px;
  --read: 1036px;
  --section-y: 104px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2f2f2` | 61.9% |
| 主色 | `#a6b3ab` | 12.4% |
| 副色 | `#f0e6db` | 8.7% |
| 差し色 | `#565c5d` | 6.1% |
| 差し色 | `#343e3f` | 4% |
| 差し色 | `#12110f` | 2.4% |

文字色は `#ffffff` / `#2e5a65` / `#444444` / `#ba915b`。

- 主色 `#2e5a65` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f2f2` | 2 | 0 | 1 | 0 |
| `#a6b3ab` | 2 | 1 | 0 | 1 |
| `#f0e6db` | 1 | 0 | 0 | 0 |
| `#e2ceb8` | 1 | 0 | 0 | 0 |
| `#d0b08d` | 1 | 0 | 0 | 0 |
| `#ffffff` | 5 | 60 | 6 | 0 |
| `#2e5a65` | 1 | 5 | 0 | 1 |
| `#444444` | 1 | 8 | 0 | 0 |
| `#ba915b` | 4 | 6 | 0 | 3 |

- `#2e5a65` は文字色として5箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#2e5a65` |
| `#f2f2f2`（地） | `#2e5a65` |
| `#f0e6db` | `#2e5a65` |
| `#e2ceb8` | `#2e5a65` |

```css
.section{ --on:#2e5a65 }                     /* 地の面 */
.section--main{ background:var(--main); color:#2e5a65; --on:#2e5a65 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#2e5a65 }
.section--main .btn--fill{ background:#2e5a65; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Cinzel
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 100px | 1 |
| 見出し | 60px | 1.3 |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 2 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 676px／読ませる段は 1036px
- セクションの上下余白: 104 / 56 / 132 / 60px（基本は 104px）
- 並びの間隔: 6 / 10 / 20 / 25px
- 角丸: 0px が基本。大きな面だけ 25px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1000 / 750 / 600 / 500px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 15px / 行間 2 |
| 見出し | 100px | 15px / 行間 2 |
| セクションの上下余白 | 104px | 24px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 20px | 6px |

- 本文は 15px → 15px、セクション余白は 104px → 24px（PCの23%）。
- 文字サイズの段は 45 / 25 / 16 / 15 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 35px 0px; min-height: 85px;
  font-size: 16px; font-weight: 700; letter-spacing: 1.6px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 25px; padding: 13px 30px; min-height: 50px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 20px 0px; min-height: 54px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1060px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 640px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 680px | `#f0e6db` | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 900px | `#f2f2f2` | 1カラム・画像あり | 左 | 右（35:65） |
| 5 | 660px | — | 1カラム・画像あり | 中央 | 全幅 |
| 6 | 660px | — | 1カラム・画像あり | 中央 | 全幅 |
| 7 | 660px | — | 1カラム・画像あり | 中央 | 全幅 |
| 8 | 560px | `#e2ceb8` | 2カラム・画像あり | 右 | 左（49:51） |
| 9 | 660px | — | 1カラム・画像あり | 中央 | 全幅 |
| 10 | 740px | `#a6b3ab` | 1カラム・画像あり | 中央 | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#f2f2f2`（2） / `#f0e6db`（1） / `#e2ceb8`（1）
- 見出しは左1／中央7。
- 2カラムの分け方は 35:65 / 49:51。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（72px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 12枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 21:9（4枚）、4:3（3枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2e5a65 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1060px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#2e5a65; --on:#2e5a65 }
.section--main .btn--fill{ background:#2e5a65; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:35px 0px; min-height:85px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:750px){
  :root{ --fs-body:15px; --section-y:24px; --gap:6px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#f2f2f2` のまま。主色 `#2e5a65` は文字と小さな部品にだけ使う。
- 余白 104px と行間 2 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 25px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
