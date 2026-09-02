# AlphaDrive（アルファドライブ） ふうのデザイン

- 出典: https://corp.alphadrive.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／レスポンシブ

白地に `#9bf5c5` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2、セクション間 200px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #9bf5c5;
  --sub: #222c33;
  --ink: #444c55;
  --ink-rev: #99a1ac;
  --on: #9bf5c5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "A+mfCv-AXIS Font ベーシック R ProN", sans-serif;
  --font-en: "adrianna-extended", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1200px;
  --read: 592px;
  --section-y: 200px;
  --gap: 20px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87% |
| 主色 | `#e8f0f4` | 5.6% |
| 副色 | `#222c33` | 3.9% |

文字色は `#444c55` / `#99a1ac` / `#ffffff`。

- 主色 `#9bf5c5` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 70 | 6 | 0 | 3 |
| `#222c33` | 3 | 0 | 0 | 0 |
| `#9bf5c5` | 3 | 0 | 0 | 0 |
| `#444c55` | 0 | 143 | 0 | 0 |
| `#99a1ac` | 0 | 88 | 0 | 0 |

- `#9bf5c5` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#9bf5c5` |
| `#222c33` | `#99a1ac` |

```css
.section{ --on:#9bf5c5 }                     /* 地の面 */
.section--main{ background:var(--main); color:#99a1ac; --on:#99a1ac }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#99a1ac }
.section--main .btn--fill{ background:#99a1ac; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: A+mfCv-AXIS Font ベーシック R ProN
- 欧文: adrianna-extended
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.5 |
| 見出し | 19px | 1.75 |
| 小見出し | 17px | 1.75 |
| 本文 | 15px | 1.75 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 592px
- セクションの上下余白: 200 / 120 / 72 / 80px（基本は 200px）
- 並びの間隔: 8 / 12 / 20 / 24px
- 角丸: 8px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1025 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 13px / 行間 2 |
| 見出し | 48px | 17px / 行間 1.75 |
| セクションの上下余白 | 200px | 32px |
| 左右の余白 | — | 42px |
| 並びの間隔 | 20px | 12px |

- 本文は 15px → 13px、セクション余白は 200px → 32px（PCの16%）。
- 文字サイズの段は 17 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #444c55;
  border: 1px;
  border-radius: 32px; padding: 9px 16px; min-height: 32px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.65px;
}
.btn-sub{
  background: transparent; color: #444c55;
  border: 1px solid #003366;
  border-radius: 48px; padding: 10px 24px; min-height: 48px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.75px;
}
.btn-sub{
  background: #ffffff; color: #444c55;
  border-radius: 32px; padding: 0px 20px; min-height: 32px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.65px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 440px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 640px | — | 1カラム・画像あり | 中央 | — |
| 3 | 240px | — | 帯・区切り | — | — |
| 4 | 1920px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 5 | 4060px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 660px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 7 | 860px | — | 3カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（30） / `#222c33`（3）
- 見出しは左4／中央1。


## 部品

囲み（27箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 16px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #444c55;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 9px 16px; font-size: 13px;
}
```

## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 5 箇所ある（24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 65枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 16:9（54枚）、3:4（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#9bf5c5 }
.container{ width:min(100% - 84px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:440px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#99a1ac; --on:#99a1ac }
.section--main .btn--fill{ background:#99a1ac; color:var(--main) }
.card{ background:#ffffff;
  border-radius:16px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#444c55; border-radius:32px;
  padding:9px 16px; min-height:32px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:32px; --gap:12px; }
  .container{ width:calc(100% - 84px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#9bf5c5` は文字と小さな部品にだけ使う。
- 余白 200px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（8px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
