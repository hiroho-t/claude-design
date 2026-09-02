# 株式会社アイテックムラモト ふうのデザイン

- 出典: https://i-tech-muramoto.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建設･インフラ･土木･設備／レスポンシブ

白地に `#05b193` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 null、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #05b193;
  --sub: #141414;
  --ink: #ffffff;
  --ink-rev: #5f5f5f;
  --on: #05b193;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Jost", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1180px;
  --read: 672px;
  --section-y: 40px;
  --gap: 48px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 47.9% |
| 主色 | `#05b193` | 24.2% |
| 副色 | `#141414` | 13.7% |
| 差し色 | `#232523` | 6.1% |
| 差し色 | `#323535` | 4.8% |

文字色は `#ffffff` / `#5f5f5f` / `#141414` / `#777777`。

- 主色 `#05b193` は差し色ではなく**面**で使う。画面の24%を占めている。
- 影は`rgba(0, 0, 0, 0.2) 1px 1px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 40 | 0 | 0 |
| `#05b193` | 5 | 3 | 0 | 1 |
| `#141414` | 7 | 11 | 0 | 0 |
| `#eeeeee` | 1 | 0 | 2 | 0 |
| `#000000` | 1 | 1 | 0 | 0 |
| `#5f5f5f` | 0 | 3 | 0 | 0 |
| `#777777` | 0 | 8 | 0 | 0 |

- `#05b193` は面として5箇所、文字として3箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#05b193` |
| `#141414` | `#5f5f5f` |
| `#05b193`（主色） | `#5f5f5f` |
| `#000000` | `#5f5f5f` |

```css
.section{ --on:#05b193 }                     /* 地の面 */
.section--main{ background:var(--main); color:#5f5f5f; --on:#5f5f5f }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#5f5f5f }
.section--main .btn--fill{ background:#5f5f5f; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 中ゴシックBBB JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Jost
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | — |
| 見出し | 18px | — |
| 本文 | 16px | — |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1180px／読ませる段は 672px
- セクションの上下余白: 40 / 120 / 60 / 160px（基本は 40px）
- 並びの間隔: 8 / 48px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 768 / 480 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 13px / 行間 1.7 |
| セクションの上下余白 | 40px | 40px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 48px | 8px |

- 本文は 16px → 13px、セクション余白は 40px → 40px（PCの100%）。
- 文字サイズの段は 20 / 16 / 15 / 13 / 10px。

## ボタン

```css
.btn{
  background: #002d72; color: #ffffff;
  border-radius: 50px; padding: 0px 0px; min-height: 70px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 50%; padding: 0px 0px; min-height: 70px;
  font-size: 10px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #002d72;
  border: 1px;
  border-radius: 50%; padding: 0px 0px; min-height: 60px;
  font-size: 24px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#05b193` | ヒーロー（画像） | — | 全面 |
| 2 | 900px | — | 1カラム・画像あり | — | — |
| 3 | 1140px | `#ffffff` | 1カラム・画像あり | — | 全面 |
| 4 | 740px | `#ffffff` | 4カラム | — | — |
| 5 | 700px | `#ffffff` | 2カラム | — | — |
| 6 | 1200px | `#ffffff` | 3カラム | — | — |
| 7 | 600px | `#ffffff` | 1カラム・文字だけ | — | — |
| 8 | 300px | — | 帯・区切り | — | — |
| 9 | 1260px | `#05b193` | 1カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#05b193` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（9） / `#141414`（7） / `#05b193`（3） / `#000000`（1）


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #141414;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（64px×2、56px×1、72px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 5枚使っている
- 比率は 3:4（4枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#05b193 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#5f5f5f; --on:#5f5f5f }
.section--main .btn--fill{ background:#5f5f5f; color:var(--main) }
.card{ background:#141414;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#002d72; color:#ffffff; border-radius:50px;
  padding:0px 0px; min-height:70px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#05b193` の面を全幅で交互に置く。主色は画面の24%を占めるだけ使う。
- 余白 40px と行間 null を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
