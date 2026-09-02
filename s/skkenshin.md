# 済生会熊本予防医療センター ふうのデザイン

- 出典: https://sk-kenshin.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

#0c212b の地に `#0c212b` を大きな面で置く配色。影を使って浮かせる。本文 13px・行間 1.7、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #0c212b;
  --main: #0c212b;
  --sub: #8b6421;
  --ink: #7e7e69;
  --ink-rev: #d3d3bf;
  --on: #0c212b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Marcellus", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.7;
  --container: 576px;
  --read: 1184px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#0c212b` | 48.2% |
| 主色 | `#dedece` | 12.4% |
| 副色 | `#8b6421` | 11.5% |
| 差し色 | `#3c5249` | 4.9% |
| 差し色 | `#afb3ad` | 4.5% |
| 差し色 | `#6e7c71` | 4.5% |

文字色は `#7e7e69` / `#d3d3bf` / `#474435` / `#ffffff`。

- 主色 `#0c212b` は差し色ではなく**面**で使う。画面の48%を占めている。
- 影は`rgba(0, 0, 0, 0.03) 0px 2px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#061c26` | 3 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#eeeee8` | 17 | 3 | 2 | 1 |
| `#e3e3d5` | 1 | 0 | 0 | 0 |
| `#03141c` | 1 | 0 | 0 | 0 |
| `#7e7e69` | 0 | 21 | 0 | 0 |
| `#d3d3bf` | 0 | 68 | 18 | 0 |
| `#474435` | 0 | 39 | 0 | 0 |
| `#ffffff` | 5 | 12 | 1 | 0 |

- `#0c212b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eeeee8` | `#0c212b` |
| `#f9f9f6` | `#0c212b` |
| `#061c26` | `#d3d3bf` |
| `#ffffff` | `#0c212b` |

```css
.section{ --on:#d3d3bf }                     /* 地の面 */
.section--main{ background:var(--main); color:#d3d3bf; --on:#d3d3bf }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#d3d3bf }
.section--main .btn--fill{ background:#d3d3bf; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#061c26` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Marcellus
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 17px | 1.5 |
| 見出し | 16px | 1.5 |
| 小見出し | 15px | 1.5 |
| リード | 14px | — |
| 本文 | 13px | 1.7 |
| 補助 | 12px | 1 |
| 注記 | 11px | — |

- 本文は 13px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 576px／読ませる段は 1184px
- セクションの上下余白: 80 / 48 / 64 / 120px（基本は 80px）
- 並びの間隔: 4 / 8 / 16 / 32px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1679 / 1024 / 1023 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.7 | 13px / 行間 1.7 |
| 見出し | 17px | 12px / 行間 1 |
| セクションの上下余白 | 80px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 8px |

- 本文は 13px → 13px、セクション余白は 80px → 24px（PCの30%）。
- 文字サイズの段は 15 / 14 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #474435;
  border: 1px solid #c6c6c6;
  border-radius: 4px; padding: 10px 16px; min-height: 39px;
  font-size: 11px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #474435;
  border-radius: 4px; padding: 0px 0px; min-height: 82px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #f9f9f6; color: #474435;
  border-radius: 0px; padding: 32px 32px; min-height: 82px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 480px | — | ヒーロー | 左 | — |
| 2 | 1420px | — | 6カラム・画像あり | 左 | 全幅 |
| 3 | 880px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 880px | `#e3e3d5` | 3カラム・画像あり | 中央 | 見出しの下 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#eeeee8`（15） / `#f9f9f6`（3） / `#061c26`（2） / `#ffffff`（1）
- 見出しは左3／中央1。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #eeeee8;
  border-radius: 4px;
  padding: 24px 24px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #474435;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 10px 16px; font-size: 11px;
}
```

## 画像

- 23枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 2:3（18枚）、3:4（3枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d3d3bf }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:480px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#d3d3bf; --on:#d3d3bf }
.section--main .btn--fill{ background:#d3d3bf; color:var(--main) }
.card{ background:#eeeee8;
  border-radius:4px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#474435; border-radius:4px;
  padding:10px 16px; min-height:39px;
  font-size:11px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#0c212b` の面を全幅で交互に置く。主色は画面の48%を占めるだけ使う。
- 余白 80px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。
