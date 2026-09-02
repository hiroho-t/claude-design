# 木村石鹸 公式サイト／本店オンラインストア ふうのデザイン

- 出典: https://www.kimurasoap.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／ECサイト･オンラインショップ

白地に `#1989f0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 1.42、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1989f0;
  --sub: #adafb1;
  --ink: #373635;
  --ink-rev: #747369;
  --on: #1989f0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.42;
  --container: 1120px;
  --read: 1024px;
  --section-y: 40px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 88.4% |
| 主色 | `#e1e2e5` | 4.3% |
| 副色 | `#adafb1` | 3.4% |
| 差し色 | `#d1d0d1` | 2% |

文字色は `#373635` / `#747369` / `#ffffff` / `#1989f0`。

- 主色 `#1989f0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(204, 202, 189) 0px 0px 0px 1px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 27 | 25 | 13 | 0 |
| `#faf7e8` | 2 | 0 | 0 | 0 |
| `#cccabd` | 1 | 0 | 3 | 0 |
| `#373635` | 6 | 241 | 0 | 5 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#747369` | 0 | 30 | 0 | 0 |
| `#1989f0` | 0 | 1 | 0 | 0 |

- `#1989f0` は文字色として1箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1989f0` |
| `#fcfbf5` | `#1989f0` |
| `#faf7e8` | `#1989f0` |
| `#cccabd` | `#1989f0` |

```css
.section{ --on:#1989f0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#747369; --on:#747369 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#747369 }
.section--main .btn--fill{ background:#747369; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 16px | — |
| 見出し | 15px | 1.45 |
| 小見出し | 14px | 1.45 |
| リード | 13px | — |
| 本文 | 12px | 1.42 |
| 補助 | 11px | 1.36 |

- 本文は 12px・行間 1.42。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1024px
- セクションの上下余白: 40 / 120 / 64 / 80px（基本は 40px）
- 並びの間隔: 2 / 4 / 10 / 16px
- 角丸: 0px が基本。大きな面だけ 6px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 990 / 989 / 768 / 750 / 749px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.42 | 13px / 行間 1.54 |
| 見出し | 16px | 12px / 行間 1.4 |
| セクションの上下余白 | 40px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 10px | 10px |

- 本文は 12px → 13px、セクション余白は 40px → 40px（PCの100%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #373635; color: #ffffff;
  border-radius: 10px; padding: 0px 16px; min-height: 44px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.26px;
}
.btn-sub{
  background: #373635; color: #ffffff;
  border-radius: 0px; padding: 0px 30px; min-height: 47px;
  font-size: 15px; font-weight: 400; letter-spacing: 1px;
}
.btn-sub{
  background: #373635; color: #ffffff;
  border-radius: 6px; padding: 0px 16px; min-height: 40px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.26px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 9 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 10 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 11 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 12 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 13 | 840px | — | 1カラム・画像あり | — | 全幅 |

- 全13セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（13） / `#fcfbf5`（2） / `#faf7e8`（2） / `#cccabd`（1）


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #fcfbf5;
  border-radius: 6px;
  padding: 0px 0px;
}
```


## 画像

- 81枚使っている。うち 13 枚は画面いっぱいに置く
- 比率は 1:1（57枚）、16:9（13枚）、4:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1989f0 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#747369; --on:#747369 }
.section--main .btn--fill{ background:#747369; color:var(--main) }
.card{ background:#fcfbf5;
  border-radius:6px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#373635; color:#ffffff; border-radius:10px;
  padding:0px 16px; min-height:44px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1989f0` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.42 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 6px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.42 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 6px 以外）を混ぜない。
