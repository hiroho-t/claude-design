# 京都移住計画 ふうのデザイン

- 出典: https://kyoto-iju.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ポータルサイト･メディア･情報サイト／求人･マッチング･転職･人材ビジネス／旅行･観光･遊び

#f5f5f0 の地に `#f5f18d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f0;
  --main: #f5f18d;
  --ink: #333333;
  --ink-rev: #6f6f6f;
  --on: #f5f18d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 900px;
  --read: 820px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f0` | 89.3% |
| 主色 | `#dbe3e9` | 1.9% |

文字色は `#333333` / `#6f6f6f`。

- 主色 `#f5f18d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 44 | 0 | 0 | 24 |
| `#f5f18d` | 15 | 0 | 0 | 7 |
| `#f5f5f0` | 0 | 0 | 2 | 0 |
| `#a4ccea` | 2 | 0 | 0 | 2 |
| `#333333` | 0 | 255 | 23 | 0 |
| `#6f6f6f` | 0 | 5 | 0 | 0 |

- `#f5f18d` は面として15箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#f5f18d` |
| `#f5f18d`（主色） | `#f5f18d` |

```css
.section{ --on:#f5f18d }                     /* 地の面 */
.section--main{ background:var(--main); color:#6f6f6f; --on:#6f6f6f }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#6f6f6f }
.section--main .btn--fill{ background:#6f6f6f; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Poppins
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | — |
| 見出し | 28px | — |
| 小見出し | 24px | 1.5 |
| リード | 18px | 1.5 |
| 本文 | 16px | 1.6 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 900px／読ませる段は 820px
- セクションの上下余白: 40 / 100 / 52 / 44px（基本は 40px）
- 並びの間隔: px
- 角丸: 20px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 901 / 900 / 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 14px / 行間 1.5 |
| セクションの上下余白 | 40px | 28px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 40px → 28px（PCの70%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #333333;
  border-radius: 900px; padding: 7px 14px; min-height: 27px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border: 1px solid #333333;
  border-radius: 900px; padding: 7px 14px; min-height: 31px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border-radius: 0px; padding: 0px 0px; min-height: 36px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 640px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 680px | — | 6カラム・画像あり | — | 全面 |
| 3 | 4280px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 700px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 5 | 920px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1680px | `#f5f18d` | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 540px | — | 1カラム・画像あり | 中央 | 左（22:78） |

- 全7セクション。
- 使われている面の色: `#ffffff`（20） / `#f5f18d`（2）
- 見出しは左0／中央5。
- 2カラムの分け方は 22:78。半分ずつには割らない。


## 部品

囲み（20箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 30px 30px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #333333;
  border-radius: 999px; padding: 7px 14px; font-size: 14px;
}
```

## 画像

- 60枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（47枚）、1:1（6枚）、2:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f5f18d }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:640px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#6f6f6f; --on:#6f6f6f }
.section--main .btn--fill{ background:#6f6f6f; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:30px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#333333; border-radius:900px;
  padding:7px 14px; min-height:27px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:14px; --section-y:28px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#f5f5f0` のまま。主色 `#f5f18d` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（20px と 3px 以外）を混ぜない。
