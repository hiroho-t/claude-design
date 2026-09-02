# はとの里動物病院 ふうのデザイン

- 出典: https://hatonosato.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬

白地に `#f87f5b` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.87、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f87f5b;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #f87f5b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.87;
  --container: 1056px;
  --read: 976px;
  --section-y: 84px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 100% |

文字色は `#000000` / `#ffffff`。

- 主色 `#f87f5b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fafafa` | 4 | 9 | 0 | 0 |
| `#f87f5b` | 3 | 0 | 0 | 1 |
| `#262626` | 3 | 0 | 0 | 3 |
| `#000000` | 0 | 60 | 0 | 0 |

- `#f87f5b` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f87f5b` |
| `#fafafa` | `#f87f5b` |

```css
.section{ --on:#f87f5b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Poppins
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.95 |
| 見出し | 19px | 1.15 |
| 小見出し | 17px | — |
| 本文 | 16px | 1.87 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 1.87。

## レイアウト

- コンテンツ幅: 最大 1056px／読ませる段は 976px
- セクションの上下余白: 84 / 40 / 60 / 72px（基本は 84px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 18px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.87 | 16px / 行間 1.87 |
| 見出し | 28px | 21px / 行間 1.7 |
| セクションの上下余白 | 84px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 84px → 40px（PCの48%）。
- 文字サイズの段は 17 / 16 / 15 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 2px solid #ededed;
  border-radius: 18px; padding: 6px 5px; min-height: 36px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #262626; color: #ffffff;
  border-radius: 0px; padding: 6px 44px; min-height: 48px;
  font-size: 21px; font-weight: 600; letter-spacing: 1.26501px;
}
.btn-sub{
  background: #262626; color: #ffffff;
  border-radius: 0px; padding: 5px 42px; min-height: 48px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 240px | `#ffffff` | ヒーロー | — | — |
| 2 | 780px | — | 1カラム・画像あり | 中央 | 左（92:8） |
| 3 | 1220px | — | 1カラム・画像あり | — | 全面 |
| 4 | 780px | — | 1カラム・画像あり | — | 全面 |
| 5 | 880px | — | 1カラム・画像あり | — | 全面 |
| 6 | 900px | — | 1カラム・画像あり | — | 全面 |
| 7 | 860px | — | 1カラム・画像あり | — | 全面 |
| 8 | 1960px | — | 1カラム・画像あり | — | 全幅 |
| 9 | 720px | — | 1カラム・画像あり | — | 全面 |

- 全9セクション。
- 使われている面の色: `#ffffff`（2） / `#fafafa`（1）
- 見出しは左0／中央1。
- 2カラムの分け方は 92:8。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 2px solid currentColor;
  border-radius: 999px; padding: 6px 5px; font-size: 12px;
}
```

## 画像

- 4枚使っている
- 比率は 16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f87f5b }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:240px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:18px;
  padding:6px 5px; min-height:36px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:40px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#f87f5b` は文字と小さな部品にだけ使う。
- 余白 84px と行間 1.87 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.87 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 18px 以外）を混ぜない。
