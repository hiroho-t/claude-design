# アコーダー 採用サイト ふうのデザイン

- 出典: https://www.accorder.co.jp/recruit/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 採用サイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#69554b` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2.3、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #69554b;
  --sub: #333333;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #69554b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "balboa", sans-serif;
  --fs-body: 15px;
  --lh-body: 2.3;
  --container: 1240px;
  --read: 820px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 35.7% |
| 主色 | `#0b0a0a` | 18.5% |
| 副色 | `#333333` | 15.8% |
| 差し色 | `#848a8c` | 8.2% |
| 差し色 | `#222325` | 5.6% |
| 差し色 | `#69554b` | 4.7% |

文字色は `#000000` / `#ffffff` / `#ababab` / `#777777`。

- 主色 `#69554b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 10 | 32 | 0 | 1 |
| `#f8f8f8` | 3 | 0 | 0 | 0 |
| `#000000` | 3 | 41 | 3 | 1 |
| `#d30600` | 2 | 0 | 0 | 0 |
| `#ababab` | 0 | 1 | 0 | 0 |
| `#777777` | 0 | 1 | 0 | 0 |

- `#69554b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#69554b` |
| `#000000` | `#ffffff` |
| `#f8f8f8` | `#69554b` |
| `#d30600` | `#ffffff` |

```css
.section{ --on:#69554b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: balboa
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 110px | — |
| 見出し | 32px | — |
| 小見出し | 20px | 1 |
| リード | 16px | — |
| 本文 | 15px | 2.3 |
| 補助 | 14px | — |

- 本文は 15px・行間 2.3。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1240px／読ませる段は 820px
- セクションの上下余白: 52 / 48 / 64 / 76px（基本は 52px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 55px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 782 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2.3 | 14px / 行間 1.9 |
| 見出し | 110px | 16px / 行間 1 |
| セクションの上下余白 | 52px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 6px |

- 本文は 15px → 14px、セクション余白は 52px → 32px（PCの62%）。
- 文字サイズの段は 18 / 16 / 15 / 14 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 15px 58px; min-height: 46px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.5px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #000000;
  border-radius: 0px; padding: 1px 6px; min-height: 42px;
  font-size: 13px; font-weight: 400; letter-spacing: 1px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 42px;
  font-size: 13px; font-weight: 700; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 580px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 980px | `#f8f8f8` | 1カラム・文字だけ | — | — |
| 3 | 760px | `#f8f8f8` | 1カラム・画像あり | — | — |
| 4 | 1700px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1920px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#000000`（2） / `#f8f8f8`（2） / `#d30600`（1）
- 見出しは左1／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 8 箇所ある（48px×7、16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 4枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#69554b }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:580px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:15px 58px; min-height:46px;
  font-size:15px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:32px; --gap:6px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#69554b` は文字と小さな部品にだけ使う。
- 余白 52px と行間 2.3 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.3 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 55px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
