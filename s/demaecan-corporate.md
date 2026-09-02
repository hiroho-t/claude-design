# 株式会社出前館 ふうのデザイン

- 出典: https://corporate.demae-can.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#f23b3b` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.75、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f23b3b;
  --sub: #84735f;
  --ink: #212121;
  --ink-rev: #ffffff;
  --on: #f23b3b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "LINE Seed JP", sans-serif;
  --font-en: "LINE Seed JP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 964px;
  --read: 592px;
  --section-y: 60px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.3% |
| 主色 | `#f23b3b` | 17% |
| 副色 | `#84735f` | 3.3% |

文字色は `#212121` / `#ffffff` / `#616161` / `#da3734`。

- 主色 `#f23b3b` は差し色ではなく**面**で使う。画面の17%を占めている。
- 影は`rgba(0, 0, 0, 0.05) 0px 5px 30px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 25 | 1 | 5 |
| `#f5f5f5` | 6 | 0 | 0 | 5 |
| `#da3734` | 10 | 14 | 3 | 1 |
| `#212121` | 0 | 40 | 0 | 0 |
| `#616161` | 0 | 16 | 0 | 0 |

- `#f23b3b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f23b3b` |
| `#f5f5f5` | `#f23b3b` |

```css
.section{ --on:#f23b3b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: LINE Seed JP
- 欧文: LINE Seed JP
- ウェイトは 900 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 41px | 1.5 |
| 見出し | 32px | 1.5 |
| 小見出し | 24px | — |
| 本文 | 16px | 1.75 |
| 補助 | 14px | 1.75 |
| 注記 | 12px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 964px／読ませる段は 592px
- セクションの上下余白: 60 / 120 / 80 / 124px（基本は 60px）
- 並びの間隔: 20 / 28 / 30 / 32px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 992 / 801 / 800 / 601 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 41px | 29px / 行間 1.5 |
| セクションの上下余白 | 60px | 80px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 30px | 20px |

- 本文は 16px → 14px、セクション余白は 60px → 80px（PCの133%）。
- 文字サイズの段は 17 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #fef5f5; color: #da3734;
  border-radius: 30px; padding: 2px 20px; min-height: 27px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #212121;
  border-radius: 40px; padding: 10px 25px; min-height: 48px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #212121;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | 右 | — |
| 2 | 540px | — | 2カラム・画像あり | — | 全面 |
| 3 | 1060px | — | 1カラム・画像あり | 左 | — |
| 4 | 1060px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1000px | — | 2カラム・画像あり | 中央 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#f5f5f5`（1）
- 見出しは左1／中央2。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dddddd。面によって入れ替える */
  border-radius: 5px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #fef5f5; color: #da3734;
  border-radius: 999px; padding: 2px 20px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 14 箇所ある（24px×10、32px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 4枚使っている
- 比率は 一定しない
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f23b3b }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#fef5f5; color:#da3734; border-radius:30px;
  padding:2px 20px; min-height:27px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:801px){
  :root{ --fs-body:14px; --section-y:80px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#f23b3b` の面を全幅で交互に置く。主色は画面の17%を占めるだけ使う。
- 余白 60px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
