# Hondaグループキャリア採用サイト ふうのデザイン

- 出典: https://www.honda-jobs.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／製造業･工業･メーカー･商社･物流／車･乗り物･モビリティ

白地に `#b0f2be` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.75、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b0f2be;
  --sub: #b0f2be;
  --ink: #0b191f;
  --ink-rev: #ffffff;
  --on: #b0f2be;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "HondaGlobalFontJP-Bold", sans-serif;
  --font-en: "HondaGlobalFontJP-Bold", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 1200px;
  --read: 588px;
  --section-y: 64px;
  --gap: 9px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.7% |
| 主色 | `#0b191f` | 9.3% |
| 副色 | `#b0f2be` | 4.9% |
| 差し色 | `#dd1d1d` | 4.1% |
| 差し色 | `#94abaa` | 2.7% |
| 差し色 | `#dfd6d6` | 2.4% |

文字色は `#0b191f` / `#ffffff` / `#565f63` / `#dd1d1d`。

- 主色 `#b0f2be` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(26, 2, 2, 0.1) 0px 0px 64px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 34 | 73 | 18 | 2 |
| `#f5f5f5` | 127 | 0 | 1 | 62 |
| `#0b191f` | 1 | 104 | 0 | 0 |
| `#dd1d1d` | 11 | 5 | 4 | 2 |
| `#565f63` | 0 | 116 | 1 | 0 |

- `#b0f2be` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#b0f2be` |
| `#f0f0f0` | `#b0f2be` |
| `#f5f5f5` | `#b0f2be` |
| `#dd1d1d` | `#ffffff` |

```css
.section{ --on:#b0f2be }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: HondaGlobalFontJP-Bold
- 欧文: HondaGlobalFontJP-Bold
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 1.5 |
| 見出し | 24px | 1.5 |
| 小見出し | 20px | — |
| リード | 18px | — |
| リード | 16px | 1.5 |
| 本文 | 14px | 1.75 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 588px
- セクションの上下余白: 64 / 120 / 80 / 40px（基本は 64px）
- 並びの間隔: 4 / 8 / 9 / 24px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 64px | 36px / 行間 1.5 |
| セクションの上下余白 | 64px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 9px | 4px |

- 本文は 14px → 14px、セクション余白は 64px → 40px（PCの63%）。
- 文字サイズの段は 24 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #f0f0f0; color: #565f63;
  border-radius: 4px; padding: 4px 8px; min-height: 26px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #0b191f;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 18px; font-weight: 400; letter-spacing: 1.44px;
}
.btn-sub{
  background: transparent; color: #0b191f;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 20px; font-weight: 700; letter-spacing: 1.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 300px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1700px | `#ffffff` | 3カラム・画像あり | 左 | 見出しの下 |
| 3 | 2780px | `#f5f5f5` | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 740px | — | 1カラム・文字だけ | 中央 | — |
| 5 | 500px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 900px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション。
- 使われている面の色: `#ffffff`（19） / `#f0f0f0`（4） / `#f5f5f5`（1） / `#dd1d1d`（1）
- 見出しは左1／中央3。


## 部品

囲み（13箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 12px;
  padding: 16px 16px;
}
```

ラベル・タグ

```css
.chip{
  background: #f0f0f0; color: #565f63;
  border-radius: 4px; padding: 4px 8px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 55 箇所ある（40px×21、24px×13、32px×10）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 30枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 16:9（16枚）、3:2（13枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b0f2be }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:300px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:12px; padding:16px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f0f0f0; color:#565f63; border-radius:4px;
  padding:4px 8px; min-height:26px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:4px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b0f2be` は文字と小さな部品にだけ使う。
- 余白 64px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
