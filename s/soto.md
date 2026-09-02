# SOTO ふうのデザイン

- 出典: https://soto.shinfuji.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／生活用品･雑貨･インテリア･家具／レスポンシブ

白地に `#cac914` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #cac914;
  --sub: #8d939b;
  --ink: #ffffff;
  --ink-rev: #cac914;
  --on: #cac914;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 1312px;
  --read: 930px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 66% |
| 主色 | `#545454` | 12.5% |
| 副色 | `#8d939b` | 10.7% |
| 差し色 | `#a2a2a1` | 3.9% |
| 差し色 | `#332f29` | 2% |
| 差し色 | `#3d4245` | 1.6% |

文字色は `#ffffff` / `#cac914` / `#090909` / `#f6f6f6`。

- 主色 `#cac914` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 44 | 161 | 4 | 0 |
| `#161616` | 2 | 0 | 0 | 0 |
| `#000000` | 4 | 0 | 0 | 4 |
| `#333333` | 1 | 0 | 0 | 0 |
| `#cac914` | 0 | 36 | 13 | 0 |
| `#090909` | 0 | 2 | 0 | 0 |
| `#f6f6f6` | 0 | 2 | 33 | 0 |

- `#cac914` は文字色として36箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも13箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#cac914` |
| `#161616` | `#cac914` |
| `#1a1a1a` | `#cac914` |

```css
.section{ --on:#cac914 }                     /* 地の面 */
.section--main{ background:var(--main); color:#cac914; --on:#cac914 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#cac914 }
.section--main .btn--fill{ background:#cac914; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#f4f5f5`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | 1 |
| 見出し | 46px | — |
| 小見出し | 33px | 1 |
| リード | 20px | 1.6 |
| リード | 18px | — |
| 本文 | 16px | 1.6 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1312px／読ませる段は 930px
- セクションの上下余白: 60 / 64 / 92 / 100px（基本は 60px）
- 並びの間隔: px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1023 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 11px / 行間 1.6 |
| 見出し | 52px | 16px / 行間 1 |
| セクションの上下余白 | 60px | 364px |
| 左右の余白 | — | 62px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 11px、セクション余白は 60px → 364px（PCの607%）。
- 文字サイズの段は 23 / 15 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 38px; padding: 10px 58px; min-height: 39px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #cac914;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #cac914;
  border: 1px solid #2b2b2b;
  border-radius: 28px; padding: 5px 44px; min-height: 28px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー | 左 | — |
| 2 | 900px | — | 1カラム・文字だけ | 左 | — |
| 3 | 980px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1120px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1120px | — | 1カラム・文字だけ | 左 | — |
| 6 | 1420px | — | 2カラム | 左 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（34） / `#161616`（1） / `#1a1a1a`（1）
- 見出しは左4／中央2。


## 部品

囲み（30箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #f4f5f5。面によって入れ替える */
  border-radius: 4px;
  padding: 500px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #000000; color: #cac914;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 18px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 16 箇所ある（32px×13、40px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 51枚使っている
- 比率は 3:4（30枚）、1:1（18枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#cac914 }
.container{ width:min(100% - 124px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#cac914; --on:#cac914 }
.section--main .btn--fill{ background:#cac914; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:4px; padding:500px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:38px;
  padding:10px 58px; min-height:39px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:11px; --section-y:364px; }
  .container{ width:calc(100% - 124px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#cac914` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 4px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
