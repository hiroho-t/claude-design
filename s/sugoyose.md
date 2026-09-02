# オンライン寄せ書き【スゴヨセ】無料・大人数でも簡単作成 ふうのデザイン

- 出典: https://sugoyose.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／本･出版･印刷

白地に `#e7caba` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.43、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e7caba;
  --sub: #acb4b6;
  --ink: #666666;
  --ink-rev: #333333;
  --on: #e7caba;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.43;
  --container: 1120px;
  --read: 940px;
  --section-y: 120px;
  --gap: 50px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 82.7% |
| 主色 | `#edeef1` | 5.5% |
| 副色 | `#acb4b6` | 1.8% |
| 差し色 | `#cedada` | 1.8% |
| 差し色 | `#6b787c` | 1.7% |
| 差し色 | `#e7caba` | 1.6% |

文字色は `#666666` / `#333333` / `#ff8053` / `#ffffff`。

- 主色 `#e7caba` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 24px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 6 | 11 | 0 | 0 |
| `#f8f8f8` | 3 | 0 | 0 | 0 |
| `#fdf2ee` | 1 | 0 | 0 | 0 |
| `#dddddd` | 3 | 0 | 0 | 0 |
| `#ff8053` | 3 | 17 | 0 | 3 |
| `#666666` | 0 | 94 | 0 | 0 |
| `#333333` | 3 | 60 | 1 | 3 |

- `#e7caba` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e7caba` |
| `#f8f8f8` | `#e7caba` |

```css
.section{ --on:#e7caba }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Helvetica Neue
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.53 |
| 見出し | 36px | 1.36 |
| 小見出し | 24px | 1 |
| リード | 22px | 1.58 |
| リード | 18px | — |
| リード | 16px | 1.5 |
| 本文 | 14px | 1.43 |

- 本文は 14px・行間 1.43。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 940px
- セクションの上下余白: 120 / 40 / 60 / 92px（基本は 120px）
- 並びの間隔: 2 / 50px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 992 / 769 / 768 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.43 | 10px / 行間 1 |
| 見出し | 38px | 28px / 行間 1.36 |
| セクションの上下余白 | 120px | 60px |
| 左右の余白 | — | 15px |
| 並びの間隔 | 50px | 2px |

- 本文は 14px → 10px、セクション余白は 120px → 60px（PCの50%）。
- 文字サイズの段は 18 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ff8053; color: #ffffff;
  border-radius: 100px; padding: 0px 0px; min-height: 54px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
.btn-sub{
  background: #333333; color: #ffffff;
  border-radius: 100px; padding: 0px 0px; min-height: 54px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
.btn-sub{
  background: #0047b2; color: #ffffff;
  border: 1px solid #0047b2;
  border-radius: 0px; padding: 10px 10px; min-height: 43px;
  font-size: 14px; font-weight: 300; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 460px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 360px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 160px | — | 2カラム・画像あり | — | 全面 |
| 4 | 280px | — | 帯・区切り | — | 全面 |
| 5 | 1960px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 2120px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 760px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 720px | — | 3カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション。
- 使われている面の色: `#ffffff`（4） / `#f8f8f8`（3）
- 見出しは左1／中央5。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #f8f8f8;
  border-radius: 50px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 91枚使っている
- 比率は 1:1（60枚）、16:9（16枚）、3:2（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e7caba }
.container{ width:min(100% - 30px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:460px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#f8f8f8;
  border-radius:50px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ff8053; color:#ffffff; border-radius:100px;
  padding:0px 0px; min-height:54px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:10px; --section-y:60px; --gap:2px; }
  .container{ width:calc(100% - 30px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e7caba` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.43 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 50px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.43 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
