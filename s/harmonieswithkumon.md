# Harmonies with KUMON ふうのデザイン

- 出典: https://harmonies.kumon.ne.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／学校･教育／ベビー･子ども･子育て

白地に `#c9e2e8` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c9e2e8;
  --sub: #e0d7da;
  --ink: #374653;
  --ink-rev: #209cdb;
  --on: #c9e2e8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.6;
  --container: 1080px;
  --read: 700px;
  --section-y: 40px;
  --gap: 10px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.6% |
| 主色 | `#c9e2e8` | 5.5% |
| 副色 | `#e0d7da` | 2.7% |
| 差し色 | `#b3aa9e` | 2.2% |
| 差し色 | `#6c685a` | 2.1% |
| 差し色 | `#d7cdad` | 2.1% |

文字色は `#374653` / `#209cdb` / `#8b8b87` / `#ed99a3`。

- 主色 `#c9e2e8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(128, 139, 149, 0.16) 0px 0px 26px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f2` | 7 | 0 | 0 | 0 |
| `#ffffff` | 62 | 8 | 0 | 47 |
| `#70bee6` | 4 | 15 | 5 | 2 |
| `#f5ced2` | 10 | 0 | 0 | 0 |
| `#babab8` | 1 | 0 | 0 | 1 |
| `#374653` | 0 | 138 | 1 | 0 |
| `#209cdb` | 0 | 3 | 0 | 0 |
| `#8b8b87` | 0 | 67 | 0 | 0 |
| `#ed99a3` | 2 | 25 | 22 | 1 |

- `#c9e2e8` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f2` | `#c9e2e8` |
| `#ffffff`（地） | `#c9e2e8` |

```css
.section{ --on:#c9e2e8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#209cdb; --on:#209cdb }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#209cdb }
.section--main .btn--fill{ background:#209cdb; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f2` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Poppins
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 17px | 1.6 |
| 本文 | 15px | 1.6 |
| 補助 | 13px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 15px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1080px／読ませる段は 700px
- セクションの上下余白: 40 / 104 / 76 / 36px（基本は 40px）
- 並びの間隔: 6 / 8 / 10 / 16px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1184 / 768 / 767 / 700 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.6 | 13px / 行間 1.6 |
| セクションの上下余白 | 40px | 36px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 10px | 8px |

- 本文は 15px → 13px、セクション余白は 40px → 36px（PCの90%）。
- 文字サイズの段は 19 / 15 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #8b8b87;
  border-radius: 0px; padding: 0px 7px; min-height: 28px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.3px;
}
.btn-sub{
  background: #ffffff; color: #ed99a3;
  border: 1px solid #ed99a3;
  border-radius: 10px; padding: 3px 11px; min-height: 31px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.26px;
}
.btn-sub{
  background: #ffffff; color: #ed99a3;
  border: 1px solid #ed99a3;
  border-radius: 10px; padding: 3px 11px; min-height: 26px;
  font-size: 10px; font-weight: 500; letter-spacing: -0.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#f5f5f2` | ヒーロー（画像） | — | 全面 |
| 2 | 5580px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 920px | — | 3カラム・画像あり | 右 | — |

- 全3セクション。
- 使われている面の色: `#f5f5f2`（3） / `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 0px 0px;
  box-shadow: rgba(128, 139, 149, 0.16) 0px 0px 26px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #ed99a3;
  border: 1px solid currentColor;
  border-radius: 10px; padding: 3px 22px; font-size: 13px;
}
```

## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 14 箇所ある（40px×10、32px×3、64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 37枚使っている
- 比率は 3:2（32枚）、3:4（4枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c9e2e8 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#209cdb; --on:#209cdb }
.section--main .btn--fill{ background:#209cdb; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#8b8b87; border-radius:0px;
  padding:0px 7px; min-height:28px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:36px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#c9e2e8` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
