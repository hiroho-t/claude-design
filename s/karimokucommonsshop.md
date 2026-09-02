# Karimoku Commons Shop ふうのデザイン

- 出典: https://commons-shop.karimoku.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ECサイト･オンラインショップ／生活用品･雑貨･インテリア･家具／レスポンシブ

白地に `#decfc3` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.75、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #decfc3;
  --sub: #decfc3;
  --ink: #000000;
  --ink-rev: #969696;
  --on: #decfc3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "fot-cezanne-pron", sans-serif;
  --font-en: "fot-cezanne-pron", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.75;
  --container: 1280px;
  --read: 612px;
  --section-y: 48px;
  --gap: 6px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 58% |
| 主色 | `#c2b6ab` | 14.3% |
| 副色 | `#decfc3` | 5.7% |
| 差し色 | `#c89c5f` | 5.1% |
| 差し色 | `#e7e0d7` | 3.5% |
| 差し色 | `#97704b` | 2.6% |

文字色は `#000000` / `#969696` / `#484743` / `#ffffff`。

- 主色 `#decfc3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fbf9f6` | 44 | 9 | 0 | 16 |
| `#dcdcdc` | 39 | 2 | 0 | 0 |
| `#bbbbbb` | 8 | 0 | 0 | 0 |
| `#e7e0d6` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 113 | 0 | 0 |
| `#969696` | 0 | 18 | 5 | 0 |
| `#484743` | 0 | 15 | 5 | 0 |

- `#decfc3` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#dcdcdc` | `#decfc3` |
| `#fbf9f6` | `#decfc3` |
| `#ffffff`（地） | `#decfc3` |
| `#e7e0d6` | `#decfc3` |

```css
.section{ --on:#decfc3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#969696; --on:#969696 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#969696 }
.section--main .btn--fill{ background:#969696; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: fot-cezanne-pron
- 欧文: fot-cezanne-pron
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | — |
| 見出し | 24px | — |
| 小見出し | 20px | — |
| リード | 16px | — |
| リード | 13px | — |
| 本文 | 12px | 1.75 |

- 本文は 12px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 612px
- セクションの上下余白: 48 / 80 / 64 / 32px（基本は 48px）
- 並びの間隔: 3 / 4 / 6 / 8px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 990 / 989 / 749 / 720 / 719px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.75 | 10px / 行間 1.75 |
| セクションの上下余白 | 48px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 6px | 4px |

- 本文は 12px → 10px、セクション余白は 48px → 32px（PCの67%）。
- 文字サイズの段は 17 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 0px; padding: 0px 4px; min-height: 28px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | — | 全面 |
| 2 | 920px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 1140px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 580px | — | 1カラム・画像あり | 左 | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#dcdcdc`（4） / `#fbf9f6`（2） / `#ffffff`（1） / `#e7e0d6`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（34箇所で同じ形）

```css
.card{
  background: #dcdcdc;
  border-radius: 4px;
  padding: 200px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（24px×12）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 64枚使っている
- 比率は 1:1（55枚）、3:4（5枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#decfc3 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#969696; --on:#969696 }
.section--main .btn--fill{ background:#969696; color:var(--main) }
.card{ background:#dcdcdc;
  border-radius:4px; padding:200px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:0px;
  padding:0px 4px; min-height:28px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:749px){
  :root{ --fs-body:10px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#decfc3` は文字と小さな部品にだけ使う。
- 余白 48px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
