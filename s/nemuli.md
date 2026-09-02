# nemuli 公式 ふうのデザイン

- 出典: https://nemuli.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／生活用品･雑貨･インテリア･家具

#f2f2f2 の地に `#345378` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2f2f2;
  --main: #345378;
  --sub: #c6c6c8;
  --ink: #222222;
  --ink-rev: #000000;
  --on: #345378;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Helvetica Neue", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1096px;
  --read: 1240px;
  --section-y: 120px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2f2f2` | 67.6% |
| 主色 | `#a0968b` | 5.5% |
| 副色 | `#c6c6c8` | 3.9% |
| 差し色 | `#e0e1e3` | 3.2% |
| 差し色 | `#6d6965` | 2.8% |
| 差し色 | `#bbb6b2` | 2.6% |

文字色は `#222222` / `#000000` / `#345378` / `#222a33`。

- 主色 `#345378` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(34, 34, 34, 0) 0px 4px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 13 | 12 | 0 | 0 |
| `#f2f2f2` | 10 | 0 | 0 | 0 |
| `#e1e3e5` | 7 | 0 | 1 | 6 |
| `#dfe7f2` | 1 | 0 | 0 | 0 |
| `#2886f6` | 3 | 0 | 0 | 3 |
| `#222222` | 0 | 81 | 0 | 0 |
| `#000000` | 0 | 16 | 0 | 0 |
| `#345378` | 2 | 27 | 0 | 2 |
| `#222a33` | 0 | 10 | 0 | 0 |

- `#345378` は文字色として27箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#345378` |
| `#f8f7f4` | `#345378` |
| `#dfe7f2` | `#345378` |
| `#e1e3e5` | `#345378` |

```css
.section{ --on:#345378 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f2f2f2` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Helvetica Neue
- 欧文: Helvetica Neue
- ウェイトは 900 / 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 60px | 0.98 |
| 見出し | 32px | 1.6 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.3 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1096px／読ませる段は 1240px
- セクションの上下余白: 120 / 60 / 100 / 80px（基本は 120px）
- 並びの間隔: 10 / 14 / 20 / 32px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 990 / 989 / 767 / 750 / 749px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 60px | 24px / 行間 1.6 |
| セクションの上下余白 | 120px | 52px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 20px | 20px |

- 本文は 16px → 14px、セクション余白は 120px → 52px（PCの43%）。
- 文字サイズの段は 20 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #e1e3e5; color: #5c5c5c;
  border-radius: 40px; padding: 5px 20px; min-height: 31px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.6px;
}
.btn-sub{
  background: #2886f6; color: #ffffff;
  border-radius: 60px; padding: 18px 50px; min-height: 76px;
  font-size: 18px; font-weight: 500; letter-spacing: 0.6px;
}
.btn-sub{
  background: #345378; color: #ffffff;
  border-radius: 29px; padding: 0px 30px; min-height: 47px;
  font-size: 20px; font-weight: 400; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | 左 | 右（50:50） |
| 2 | 2000px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 2640px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 920px | — | 4カラム・画像あり | 左 | 右（29:71） |
| 5 | 760px | — | 1カラム・画像あり | 右 | — |
| 6 | 600px | — | 1カラム・画像あり | — | 全面 |
| 7 | 3000px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1520px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 9 | 1400px | — | 1カラム・画像あり | — | 全面 |
| 10 | 2460px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 11 | 760px | — | 1カラム・画像あり | 右 | — |
| 12 | 900px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 13 | 1240px | — | 1カラム・画像あり | 中央 | — |
| 14 | 440px | — | 1カラム・文字だけ | — | — |

- 全14セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（13） / `#f8f7f4`（4） / `#dfe7f2`（1） / `#e1e3e5`（1）
- 見出しは左3／中央6。
- 2カラムの分け方は 50:50 / 29:71。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 12px 12px;
}
```

ラベル・タグ

```css
.chip{
  background: #e1e3e5; color: #5c5c5c;
  border-radius: 999px; padding: 5px 20px; font-size: 14px;
}
```

## 画像

- 42枚使っている
- 比率は 16:9（13枚）、3:2（8枚）、3:4（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#345378 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:12px 12px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e1e3e5; color:#5c5c5c; border-radius:40px;
  padding:5px 20px; min-height:31px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:52px; --gap:20px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#f2f2f2` のまま。主色 `#345378` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。
