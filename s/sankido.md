# 三気堂薬局 ふうのデザイン

- 出典: https://sankido-kumamoto.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#fec6c9` を大きな面で置く配色。影を使って浮かせる。本文 17px・行間 1.4、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fec6c9;
  --sub: #cae1e5;
  --ink: #4d4d4d;
  --ink-rev: #666666;
  --on: #fec6c9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Shippori Antique", sans-serif;
  --fs-body: 17px;
  --lh-body: 1.4;
  --container: 1200px;
  --read: 1096px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 50px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 41.8% |
| 主色 | `#fec6c9` | 11.7% |
| 副色 | `#cae1e5` | 8.9% |
| 差し色 | `#e4e4e4` | 8.1% |
| 差し色 | `#0cb4cd` | 7.9% |
| 差し色 | `#223522` | 3.6% |

文字色は `#4d4d4d` / `#666666` / `#00b1cb` / `#000000`。

- 主色 `#fec6c9` は差し色ではなく**面**で使う。画面の12%を占めている。
- 影は`rgba(0, 0, 0, 0.25) 3px 3px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 26 | 3 | 0 | 2 |
| `#e4e4e4` | 2 | 0 | 0 | 0 |
| `#ff8040` | 5 | 0 | 0 | 0 |
| `#00b1cb` | 2 | 26 | 14 | 1 |
| `#4d4d4d` | 1 | 69 | 0 | 0 |
| `#666666` | 0 | 24 | 0 | 0 |
| `#000000` | 0 | 14 | 3 | 0 |

- `#fec6c9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#fec6c9` |
| `#ff8040` | `#fec6c9` |
| `#e4e4e4` | `#fec6c9` |
| `#00b1cb` | `#fec6c9` |

```css
.section{ --on:#fec6c9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Shippori Antique
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 本文 | 17px | 1 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 17px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 1096px
- セクションの上下余白: 120 / 40 / 44 / 48px（基本は 120px）
- 並びの間隔: px
- 角丸: 50px が基本。大きな面だけ 15px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 800px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.4 | 11px / 行間 1.75 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 17px → 11px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 17 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #00b1cb;
  border: 1px solid #00b1cb;
  border-radius: 50px; padding: 6px 13px; min-height: 26px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #fd6e9d;
  border-radius: 50px; padding: 0px 20px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.96px;
}
.btn-sub{
  background: #00b1cb; color: #ffffff;
  border-radius: 50px; padding: 0px 20px; min-height: 50px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.9px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 780px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1500px | — | 2カラム・画像あり | — | 全面 |
| 3 | 1400px | — | 4カラム・画像あり | 右 | 見出しの下 |
| 4 | 760px | `#e4e4e4` | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 400px | `#e4e4e4` | 2カラム | — | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（20） / `#ff8040`（5） / `#e4e4e4`（2） / `#00b1cb`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（13箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 15px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #00b1cb;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 6px 13px; font-size: 13px;
}
```

## 丸いもの

角丸は 50px だが、**完全な円は別扱い**で 7 箇所ある（48px×7）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 48枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 4:3（15枚）、3:2（14枚）、1:1（9枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fec6c9 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:780px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }
.card{ background:#ffffff;
  border-radius:15px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#00b1cb; border-radius:50px;
  padding:6px 13px; min-height:26px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:800px){
  :root{ --fs-body:11px; --section-y:40px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#fec6c9` の面を全幅で交互に置く。主色は画面の12%を占めるだけ使う。
- 余白 120px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 15px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.4 より詰めない。
- 中途半端な角丸（50px と 15px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
