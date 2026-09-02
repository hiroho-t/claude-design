# 介護施設の防災・減災ガイド ふうのデザイン

- 出典: https://bousai-fukushi.org/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／福祉･介護／レスポンシブ

#f8eb77 の地に `#f8eb77` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 1.86、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f8eb77;
  --main: #f8eb77;
  --sub: #ebe9df;
  --ink: #272724;
  --ink-rev: #ffffff;
  --on: #f8eb77;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Arvo", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.86;
  --container: 1120px;
  --read: 692px;
  --section-y: 72px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f8eb77` | 83.5% |
| 主色 | `#ffffff` | 9.2% |
| 副色 | `#ebe9df` | 3.7% |

文字色は `#272724` / `#ffffff` / `#99914d` / `#99978a`。

- 主色 `#f8eb77` は差し色ではなく**面**で使う。画面の84%を占めている。
- 影は`rgba(39, 39, 36, 0.3) 3px 4px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 17 | 0 | 0 |
| `#f8eb77` | 1 | 0 | 0 | 0 |
| `#ebe9df` | 5 | 0 | 0 | 0 |
| `#272724` | 19 | 86 | 6 | 8 |
| `#f8f0ad` | 1 | 0 | 0 | 0 |
| `#99914d` | 0 | 2 | 0 | 0 |
| `#99978a` | 0 | 2 | 0 | 0 |

- `#f8eb77` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#f8eb77` |
| `#f8eb77`（地） | `#f8eb77` |
| `#cfe6f4` | `#f8eb77` |
| `#f8f0ad` | `#f8eb77` |

```css
.section{ --on:#f8eb77 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f8eb77` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Arvo
- ウェイトは 700 / 500 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1.57 |
| 見出し | 26px | 1.54 |
| 小見出し | 21px | — |
| リード | 19px | 2 |
| リード | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 1.86 |

- 本文は 14px・行間 1.86。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 692px
- セクションの上下余白: 72 / 160 / 80 / 100px（基本は 72px）
- 並びの間隔: 6 / 8 / 14 / 15px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 840 / 839 / 782 / 781 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.86 | 14px / 行間 1.86 |
| 見出し | 42px | 33px / 行間 1.52 |
| セクションの上下余白 | 72px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 14px | 8px |

- 本文は 14px → 14px、セクション余白は 72px → 40px（PCの56%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #272724; color: #ffffff;
  border-radius: 8px; padding: 13px 10px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #272724;
  border-radius: 0px; padding: 0px 0px; min-height: 35px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 19px 20px; min-height: 75px;
  font-size: 12px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1660px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1000px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 3380px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1180px | — | 1カラム・画像あり | 中央 | — |
| 6 | 1020px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 860px | — | 3カラム・画像あり | 中央 | — |
| 8 | 380px | — | 1カラム・画像あり | 中央 | — |

- 全8セクション。
- 主色 `#f8eb77` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（6） / `#f8eb77`（1） / `#cfe6f4`（1） / `#f8f0ad`（1）
- 見出しは左0／中央7。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #272724;
  border: 1px solid currentColor;
  border-radius: 6px; padding: 0px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（16px×6、32px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 35枚使っている
- 比率は 4:3（16枚）、16:9（7枚）、1:1（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f8eb77 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#272724; color:#ffffff; border-radius:8px;
  padding:13px 10px; min-height:60px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#f8eb77` の面を交互に置く。主色は画面の84%を占めるだけ使う。
- 余白 72px と行間 1.86 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.86 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
