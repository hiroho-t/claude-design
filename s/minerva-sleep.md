# ミネルヴァスリープ ふうのデザイン

- 出典: https://minerva-sleep.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／生活用品･雑貨･インテリア･家具

白地に `#61625f` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #61625f;
  --sub: #f1f1e6;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #61625f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "-apple-system", sans-serif;
  --font-en: "-apple-system", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 700px;
  --read: 852px;
  --section-y: 52px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69% |
| 主色 | `#61625f` | 15.1% |
| 副色 | `#f1f1e6` | 6.2% |
| 差し色 | `#a8adaf` | 2.2% |
| 差し色 | `#94a0a2` | 2.2% |
| 差し色 | `#707b7e` | 1.6% |

文字色は `#000000` / `#ffffff` / `#f1f1e6` / `#3d3d3d`。

- 主色 `#61625f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(97, 97, 97, 0.1) 0px 10px 25px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 8 | 178 | 0 | 1 |
| `#ffffff` | 41 | 107 | 0 | 18 |
| `#61625f` | 2 | 0 | 0 | 0 |
| `#f1f1e6` | 1 | 1 | 0 | 0 |
| `#4f5b61` | 7 | 0 | 8 | 3 |
| `#3d3d3d` | 0 | 1 | 0 | 0 |

- `#61625f` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#61625f` |
| `#000000` | `#ffffff` |
| `#61625f`（主色） | `#ffffff` |
| `#f1f1e6` | `#61625f` |

```css
.section{ --on:#61625f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: -apple-system
- 欧文: -apple-system
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.4 |
| 見出し | 32px | 1 |
| 小見出し | 24px | 1 |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1 |
| 補助 | 14px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 700px／読ませる段は 852px
- セクションの上下余白: 52 / 80 / 140 / 72px（基本は 52px）
- 並びの間隔: 40px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 1024 / 896 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 14px / 行間 1 |
| 見出し | 40px | 23px / 行間 1.4 |
| セクションの上下余白 | 52px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 40px | 35px |

- 本文は 16px → 14px、セクション余白は 52px → 32px（PCの62%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 0px; padding: 28px 0px; min-height: 70px;
  font-size: 14px; font-weight: 400; letter-spacing: -0.7px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 0px; padding: 12px 20px; min-height: 36px;
  font-size: 12px; font-weight: 400; letter-spacing: -0.6px;
}
.btn-sub{
  background: #4f5b61; color: #ffffff;
  border: 1px solid #4f5b61;
  border-radius: 6px; padding: 15px 15px; min-height: 46px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 640px | — | ヒーロー（画像） | 左 | 左（72:28） |
| 2 | 940px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 3 | 700px | — | 1カラム・画像あり | 中央 | 右（94:6） |
| 4 | 1100px | `#ffffff` | 2カラム・画像あり | 右 | 見出しの下 |
| 5 | 860px | `#ffffff` | 1カラム・画像あり | 右 | 左（50:50） |
| 6 | 520px | — | 3カラム・画像あり | — | 全面 |
| 7 | 1100px | `#61625f` | 1カラム・画像あり | 中央 | 左（35:65） |
| 8 | 1400px | — | 1カラム・画像あり | — | 全面 |
| 9 | 960px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 10 | 620px | — | 1カラム・文字だけ | — | — |
| 11 | 500px | — | 6カラム・画像あり | — | 全面 |
| 12 | 940px | — | 6カラム・画像あり | 左 | — |
| 13 | 1020px | `#f1f1e6` | 3カラム・画像あり | 中央 | 見出しの下 |
| 14 | 1020px | — | 2カラム | 左 | — |
| 15 | 820px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 16 | 900px | `#ffffff` | 1カラム・画像あり | — | — |

- 全16セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（11） / `#000000`（7） / `#61625f`（2） / `#f1f1e6`（1）
- 見出しは左5／中央4。
- 2カラムの分け方は 72:28 / 94:6 / 50:50 / 35:65。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dcdcdc。面によって入れ替える */
  border-radius: 0px;
  padding: 40px 40px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 7px 15px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 29 箇所ある（24px×25、64px×3、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 37枚使っている
- 比率は 16:9（10枚）、4:3（10枚）、3:2（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#61625f }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:640px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:0px;
  padding:28px 0px; min-height:70px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:896px){
  :root{ --fs-body:14px; --section-y:32px; --gap:35px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#61625f` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
