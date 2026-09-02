# ホテル・旅館のお仕事探し ふうのデザイン

- 出典: https://moshiyado.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／求人･マッチング･転職･人材ビジネス／ホテル･旅館･温泉

白地に `#338751` を大きな面で置く配色。影も枠線もほとんど使わない。本文 12px・行間 1.5、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #338751;
  --sub: #edecd7;
  --ink: #2e2e2e;
  --ink-rev: #666666;
  --on: #338751;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Public Sans", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.5;
  --container: 1120px;
  --read: 900px;
  --section-y: 40px;
  --gap: 8px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 49.1% |
| 主色 | `#338751` | 14.2% |
| 副色 | `#edecd7` | 13.2% |
| 差し色 | `#2e2e2e` | 12.5% |
| 差し色 | `#cfd0c6` | 4.9% |
| 差し色 | `#6ca07b` | 2.9% |

文字色は `#2e2e2e` / `#666666` / `#8a8a8a` / `#ffffff`。

- 主色 `#338751` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f4ea` | 9 | 0 | 0 | 0 |
| `#ffffff` | 45 | 34 | 5 | 28 |
| `#338751` | 2 | 9 | 0 | 1 |
| `#2e2e2e` | 2 | 200 | 8 | 0 |
| `#ddedce` | 7 | 0 | 0 | 3 |
| `#666666` | 0 | 58 | 0 | 0 |
| `#8a8a8a` | 0 | 52 | 0 | 0 |

- `#338751` は文字色として9箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の14%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#338751` |
| `#f5f4ea` | `#338751` |
| `#338751`（主色） | `#666666` |
| `#2e2e2e` | `#666666` |

```css
.section{ --on:#338751 }                     /* 地の面 */
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#338751` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Public Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | 1.5 |
| 見出し | 16px | 1.5 |
| 小見出し | 15px | — |
| リード | 14px | — |
| リード | 13px | — |
| 本文 | 12px | 1.5 |

- 本文は 12px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 900px
- セクションの上下余白: 40 / 100 / 48 / 80px（基本は 40px）
- 並びの間隔: 4 / 6 / 8 / 40px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 1024 / 768 / 767 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 20px | 18px / 行間 1.5 |
| セクションの上下余白 | 40px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 8px | 4px |

- 本文は 12px → 12px、セクション余白は 40px → 24px（PCの60%）。
- 文字サイズの段は 18 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #2e2e2e;
  border: 1px solid #e1e1d0;
  border-radius: 4px; padding: 1px 7px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #2e2e2e;
  border: 1px solid #2e2c29;
  border-radius: 24px; padding: 0px 18px; min-height: 48px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #666666;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 2200px | `#338751` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1540px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 700px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 5 | 620px | — | 1カラム・文字だけ | 左 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#338751` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（14） / `#f5f4ea`（5） / `#338751`（1） / `#2e2e2e`（1）
- 見出しは左3／中央1。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 8px;
  padding: 24px 24px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #2e2e2e;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 0px 7px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 5 箇所ある（48px×3、24px×1、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 23枚使っている
- 比率は 3:2（16枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#338751 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }
.card{ background:#ffffff;
  border-radius:8px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#2e2e2e; border-radius:4px;
  padding:1px 7px; min-height:29px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:24px; --gap:4px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#338751` の面を全幅で交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 40px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
