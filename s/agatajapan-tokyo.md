# 東京都に関する記事一覧 ふうのデザイン

- 出典: https://agatajapan.com/tokyo/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／旅行･観光･遊び／体験･交流

白地に `#b71503` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b71503;
  --sub: #dfe6ed;
  --ink: #333333;
  --ink-rev: #b61503;
  --on: #b71503;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Times New Roman", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.6;
  --container: 1200px;
  --read: 860px;
  --section-y: 40px;
  --gap: 15px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.2% |
| 主色 | `#b71503` | 12.8% |
| 副色 | `#dfe6ed` | 7.1% |
| 差し色 | `#c5d0d6` | 7% |
| 差し色 | `#a59187` | 5.7% |
| 差し色 | `#833f34` | 3.2% |

文字色は `#333333` / `#b61503` / `#ffffff` / `#6d6d6d`。

- 主色 `#b71503` は差し色ではなく**面**で使う。画面の13%を占めている。
- 影は`rgba(0, 0, 0, 0.14) 0px 2px 14px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 82 | 1 | 0 |
| `#f1f1f1` | 30 | 0 | 0 | 0 |
| `#b71503` | 17 | 56 | 0 | 3 |
| `#fff5f5` | 6 | 0 | 0 | 0 |
| `#999999` | 1 | 0 | 0 | 0 |
| `#333333` | 0 | 153 | 0 | 0 |
| `#6d6d6d` | 0 | 29 | 0 | 0 |

- `#b71503` は文字色として56箇所で使うのが主。面としては17箇所しかないが、1枚が大きく画面の13%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f7f7` | `#b71503` |
| `#fff5f5` | `#b71503` |
| `#ffffff`（地） | `#b71503` |
| `#f1f1f1` | `#b71503` |

```css
.section{ --on:#b71503 }                     /* 地の面 */
.section--main{ background:var(--main); color:#b61503; --on:#b61503 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#b61503 }
.section--main .btn--fill{ background:#b61503; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Times New Roman
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.2 |
| 見出し | 24px | 1.2 |
| 小見出し | 18px | 1.5 |
| リード | 16px | — |
| 本文 | 14px | 1.2 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 860px
- セクションの上下余白: 40 / 44 / 52 / 48px（基本は 40px）
- 並びの間隔: 3 / 5 / 15 / 32px
- 角丸: 0px が基本。大きな面だけ 13px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1200 / 992 / 768 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.6 | 12px / 行間 1.5 |
| 見出し | 32px | 20px / 行間 1.4 |
| セクションの上下余白 | 40px | 124px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 15px | 15px |

- 本文は 14px → 12px、セクション余白は 40px → 124px（PCの310%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 11px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 48px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #b71503; color: #ffffff;
  border-radius: 100px; padding: 12px 28px; min-height: 48px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー（画像） | 左 | — |
| 2 | 140px | `#ffffff` | 帯・区切り | — | — |
| 3 | 7380px | — | 6カラム・画像あり | 中央 | 右（83:17） |
| 4 | 1060px | — | 1カラム・画像あり | — | 全面 |

- 全4セクション。
- 使われている面の色: `#f7f7f7`（12） / `#fff5f5`（6） / `#ffffff`（2） / `#f1f1f1`（1）
- 見出しは左1／中央1。
- 2カラムの分け方は 83:17。半分ずつには割らない。


## 部品

囲み（15箇所で同じ形）

```css
.card{
  background: #f1f1f1;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #999999; color: #ffffff;
  border-radius: 999px; padding: 0px 8px; font-size: 11px;
}
```

## 画像

- 34枚使っている
- 比率は 3:2（16枚）、4:3（16枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b71503 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#b61503; --on:#b61503 }
.section--main .btn--fill{ background:#b61503; color:var(--main) }
.card{ background:#f1f1f1;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:26px;
  font-size:11px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:124px; --gap:15px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#b71503` の面を交互に置く。主色は画面の13%を占めるだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 13px 以外）を混ぜない。
