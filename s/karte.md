# CXプラットフォーム KARTE（カルテ） ふうのデザイン

- 出典: https://karte.io/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#02211e` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.75、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #02211e;
  --sub: #22a29c;
  --ink: #00100e;
  --ink-rev: #fafafa;
  --on: #02211e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "HCo Gotham SSm", sans-serif;
  --font-en: "HCo Gotham SSm", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 584px;
  --read: 1200px;
  --section-y: 140px;
  --gap: 12px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 57.5% |
| 主色 | `#02211e` | 11.5% |
| 副色 | `#22a29c` | 5.7% |
| 差し色 | `#2e2e2e` | 5.2% |
| 差し色 | `#818dbf` | 4.7% |
| 差し色 | `#dfdcdd` | 3.3% |

文字色は `#00100e` / `#fafafa` / `#1a1a1a` / `#0e8989`。

- 主色 `#02211e` は差し色ではなく**面**で使う。画面の12%を占めている。
- 影は`rgba(0, 16, 14, 0.01) 0px 4px 20px 8px, rgba(0, 16, 14, 0.02) 0px 4px 10px -2px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 15 | 67 | 0 | 4 |
| `#02211e` | 1 | 0 | 0 | 0 |
| `#2aab9f` | 2 | 0 | 0 | 1 |
| `#f0f1f1` | 1 | 0 | 0 | 0 |
| `#1a1a1a` | 3 | 16 | 0 | 1 |
| `#00100e` | 1 | 32 | 0 | 0 |
| `#0e8989` | 0 | 1 | 0 | 0 |

- `#02211e` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#02211e` |
| `#fafafa` | `#02211e` |
| `#2aab9f` | `#02211e` |
| `#02211e`（主色） | `#fafafa` |

```css
.section{ --on:#02211e }                     /* 地の面 */
.section--main{ background:var(--main); color:#fafafa; --on:#fafafa }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#fafafa }
.section--main .btn--fill{ background:#fafafa; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fafafa` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: HCo Gotham SSm
- 欧文: HCo Gotham SSm
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.4 |
| 見出し | 48px | 1.4 |
| 小見出し | 32px | — |
| リード | 22px | 1.65 |
| リード | 20px | 1 |
| 本文 | 16px | 1.19 |
| 補助 | 14px | 1.43 |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 584px／読ませる段は 1200px
- セクションの上下余白: 140 / 40 / 80 / 192px（基本は 140px）
- 並びの間隔: 4 / 8 / 12 / 16px
- 角丸: 8px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1023 / 768 / 767 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 12px / 行間 1.67 |
| 見出し | 56px | 32px / 行間 1.4 |
| セクションの上下余白 | 140px | 48px |
| 左右の余白 | — | 18px |
| 並びの間隔 | 12px | 4px |

- 本文は 16px → 12px、セクション余白は 140px → 48px（PCの34%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #1a1a1a;
  border: 1px;
  border-radius: 999px; padding: 0px 16px; min-height: 40px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.24px;
}
.btn-sub{
  background: transparent; color: null;
  border: 1px;
  border-radius: 999px; padding: 0px 16px; min-height: 40px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.28px;
}
.btn-sub{
  background: transparent; color: null;
  border: 1px;
  border-radius: 999px; padding: 0px 28px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.28px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 260px | — | 6カラム・画像あり | — | 全面 |
| 3 | 1180px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1140px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 720px | — | 1カラム・画像あり | 左 | 右（40:60） |
| 6 | 880px | — | 5カラム・画像あり | — | 全面 |
| 7 | 1200px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 700px | — | 1カラム・画像あり | 左 | 右（36:64） |
| 9 | 1020px | — | 3カラム | 中央 | — |
| 10 | 800px | — | 1カラム・画像あり | 右 | 左（33:67） |
| 11 | 960px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 12 | 320px | — | 帯・区切り | — | — |
| 13 | 1200px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 14 | 880px | `#fafafa` | 3カラム・画像あり | 左 | 見出しの下 |

- 全14セクション。
- 主色 `#02211e` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（7） / `#fafafa`（2） / `#2aab9f`（1） / `#02211e`（1）
- 見出しは左5／中央5。
- 2カラムの分け方は 40:60 / 36:64 / 33:67。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 16px;
  padding: 12px 12px;
  box-shadow: rgba(0, 16, 14, 0.01) 0px 4px 20px 8px, rgba(0, 16, 14, 0.02) 0px 4px 10px -2px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #1a1a1a;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 16px; font-size: 12px;
}
```

## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 5 箇所ある（40px×4、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 37枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（10枚）、16:9（10枚）、4:3（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#02211e }
.container{ width:min(100% - 36px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#fafafa; --on:#fafafa }
.section--main .btn--fill{ background:#fafafa; color:var(--main) }
.card{ background:#ffffff;
  border-radius:16px; padding:12px 12px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#1a1a1a; border-radius:999px;
  padding:0px 16px; min-height:40px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:48px; --gap:4px; }
  .container{ width:calc(100% - 36px) }
}
```

## 守ること

やること

- 地色と主色 `#02211e` の面を交互に置く。主色は画面の12%を占めるだけ使う。
- 余白 140px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（8px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
