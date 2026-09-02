# 通信制大学 星槎大学 ふうのデザイン

- 出典: https://seisa.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／学校･教育／レスポンシブ

白地に `#d6cebd` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d6cebd;
  --sub: #a6b3a9;
  --ink: #111111;
  --ink-rev: #555555;
  --on: #d6cebd;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "sans-serif", sans-serif;
  --fs-body: 15px;
  --lh-body: 1;
  --container: 1092px;
  --read: 988px;
  --section-y: 56px;
  --gap: 50px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 84.3% |
| 主色 | `#e2e7e5` | 5.3% |
| 副色 | `#a6b3a9` | 2.2% |
| 差し色 | `#d6cebd` | 2.2% |
| 差し色 | `#838581` | 1.7% |

文字色は `#111111` / `#555555` / `#f679a1` / `#00a491`。

- 主色 `#d6cebd` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f6f6` | 2 | 0 | 0 | 0 |
| `#000000` | 1 | 1 | 0 | 0 |
| `#ffffff` | 36 | 5 | 0 | 29 |
| `#2cbf13` | 1 | 0 | 1 | 1 |
| `#00a491` | 1 | 19 | 1 | 0 |
| `#111111` | 0 | 75 | 0 | 0 |
| `#555555` | 0 | 33 | 0 | 0 |
| `#f679a1` | 0 | 2 | 1 | 0 |

- `#d6cebd` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#d6cebd` |
| `#f3f4f8` | `#d6cebd` |
| `#f6f6f6` | `#d6cebd` |
| `#000000` | `#555555` |

```css
.section{ --on:#d6cebd }                     /* 地の面 */
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: sans-serif
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | — |
| 見出し | 20px | — |
| 本文 | 15px | 1.8 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1092px／読ませる段は 988px
- セクションの上下余白: 56 / 100 / 40 / 52px（基本は 56px）
- 並びの間隔: 35 / 50px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 700px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1 | 15px / 行間 1 |
| 見出し | 22px | 19px / 行間 1 |
| セクションの上下余白 | 56px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 50px | 30px |

- 本文は 15px → 15px、セクション余白は 56px → 24px（PCの43%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #111111;
  border-radius: 0px; padding: 4px 25px; min-height: 29px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.5px;
}
.btn-sub{
  background: #ffffff; color: #111111;
  border-radius: 0px; padding: 10px 20px; min-height: 40px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.5px;
}
.btn-sub{
  background: transparent; color: #666666;
  border: 1px solid #dcdcdc;
  border-radius: 0px; padding: 2px 4px; min-height: 40px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 580px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 440px | — | 1カラム・画像あり | — | 全面 |
| 3 | 340px | — | 1カラム・文字だけ | — | — |
| 4 | 280px | — | 帯・区切り | — | — |
| 5 | 1540px | — | 3カラム・画像あり | 左 | 右（50:50） |
| 6 | 580px | — | 1カラム・画像あり | 右 | — |
| 7 | 620px | — | 1カラム・画像あり | 右 | 見出しの下 |
| 8 | 1440px | — | 1カラム・画像あり | — | 全面 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#f3f4f8`（1） / `#f6f6f6`（1） / `#000000`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 50:50。半分ずつには割らない。


## 部品

囲み（18箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 5px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 5px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 41枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 4:3（39枚）、21:9（1枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d6cebd }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:580px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }
.card{ background:transparent;
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#111111; border-radius:0px;
  padding:4px 25px; min-height:29px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:700px){
  :root{ --fs-body:15px; --section-y:24px; --gap:30px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d6cebd` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
