# 株式会社SUPER STUDIO 採用特設サイト ふうのデザイン

- 出典: https://careers.super-studio.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#6e95ff` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #6e95ff;
  --sub: #bcb9b7;
  --ink: #242a32;
  --ink-rev: #aab4c0;
  --on: #6e95ff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "__Noto_Sans_JP_6e7a57", sans-serif;
  --font-en: "__Noto_Sans_JP_6e7a57", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1120px;
  --read: 608px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68.3% |
| 主色 | `#d2d8e0` | 8.6% |
| 副色 | `#bcb9b7` | 8.5% |
| 差し色 | `#e5edf3` | 2.8% |
| 差し色 | `#2f3941` | 2.6% |
| 差し色 | `#566169` | 2.5% |

文字色は `#242a32` / `#aab4c0` / `#6e95ff` / `#ffffff`。

- 主色 `#6e95ff` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 26 | 10 | 0 | 2 |
| `#f2f7fd` | 4 | 0 | 0 | 0 |
| `#6e95ff` | 2 | 23 | 2 | 2 |
| `#242a32` | 1 | 52 | 0 | 1 |
| `#aab4c0` | 0 | 14 | 0 | 0 |

- `#6e95ff` は文字色として23箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#6e95ff` |
| `#f2f7fd` | `#6e95ff` |

```css
.section{ --on:#6e95ff }                     /* 地の面 */
.section--main{ background:var(--main); color:#aab4c0; --on:#aab4c0 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#aab4c0 }
.section--main .btn--fill{ background:#aab4c0; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: __Noto_Sans_JP_6e7a57
- 欧文: __Noto_Sans_JP_6e7a57
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 18px | — |
| 本文 | 16px | 2 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 608px
- セクションの上下余白: 80 / 40 / 120 / 128px（基本は 80px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 1025 / 769 / 481 / 321px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 24 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #6e95ff; color: #ffffff;
  border: 1px solid #6e95ff;
  border-radius: 40px; padding: 16px 20px; min-height: 48px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #6e95ff;
  border: 1px solid #cad1d9;
  border-radius: 40px; padding: 16px 20px; min-height: 48px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #242a32; color: #ffffff;
  border-radius: 40px; padding: 16px 24px; min-height: 56px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 340px | — | 1カラム・文字だけ | — | — |
| 3 | 400px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 660px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 620px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 500px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 820px | — | 6カラム・画像あり | 中央 | — |
| 8 | 640px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 820px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 10 | 540px | — | 1カラム・文字だけ | 左 | — |
| 11 | 660px | — | 1カラム・文字だけ | 左 | — |
| 12 | 520px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 13 | 440px | — | 1カラム・文字だけ | 左 | — |

- 全13セクション。
- 使われている面の色: `#ffffff`（10） / `#f2f7fd`（1）
- 見出しは左4／中央7。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 32px;
  padding: 40px 40px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 7 箇所ある（48px×7）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 24枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 16:9（13枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#6e95ff }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#aab4c0; --on:#aab4c0 }
.section--main .btn--fill{ background:#aab4c0; color:var(--main) }
.card{ background:#ffffff;
  border-radius:32px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#6e95ff; color:#ffffff; border-radius:40px;
  padding:16px 20px; min-height:48px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#6e95ff` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 32px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
