# 生鮮流通に新しい循環を ふうのデザイン

- 出典: https://foodison.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#000a41` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #000a41;
  --sub: #ecd3c3;
  --ink: #000a41;
  --ink-rev: #ffffff;
  --on: #000a41;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Roboto Condensed", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1200px;
  --read: 720px;
  --section-y: 100px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 71% |
| 主色 | `#000a41` | 21.3% |
| 副色 | `#ecd3c3` | 1.9% |
| 差し色 | `#eeedee` | 1.6% |

文字色は `#000a41` / `#ffffff` / `#e7242e` / `#000000`。

- 主色 `#000a41` は差し色ではなく**面**で使う。画面の21%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 15 | 46 | 1 | 0 |
| `#f2f2f2` | 7 | 0 | 1 | 0 |
| `#000a41` | 7 | 46 | 3 | 0 |
| `#e7242e` | 7 | 4 | 0 | 6 |
| `#e3e3e3` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 2 | 0 | 0 |

- `#000a41` は文字色として46箇所で使うのが主。面としては7箇所しかないが、1枚が大きく画面の21%を占める。ボタンの地には使っていない。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f2f2f2` | `#000a41` |
| `#ffffff`（地） | `#000a41` |
| `#000a41`（主色） | `#ffffff` |

```css
.section{ --on:#000a41 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ゴシックMB101 M JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Roboto Condensed
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.4 |
| 見出し | 24px | — |
| 小見出し | 20px | 1.4 |
| リード | 18px | — |
| 本文 | 16px | — |
| 補助 | 15px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 720px
- セクションの上下余白: 100 / 104 / 212 / 40px（基本は 100px）
- 並びの間隔: 4 / 10 / 14 / 20px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 920 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 2 |
| セクションの上下余白 | 100px | 24px |
| 左右の余白 | — | 5px |
| 並びの間隔 | 14px | 4px |

- 本文は 16px → 14px、セクション余白は 100px → 24px（PCの24%）。
- 文字サイズの段は 24 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #e7242e; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 180px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 180px | — | 帯・区切り | — | 全幅 |
| 3 | 180px | — | 帯・区切り | — | 全幅 |
| 4 | 180px | — | 帯・区切り | — | 全幅 |
| 5 | 180px | — | 帯・区切り | — | 全幅 |
| 6 | 180px | — | 帯・区切り | — | 全幅 |
| 7 | 180px | — | 帯・区切り | — | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#000a41` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f2f2f2`（7） / `#ffffff`（4） / `#000a41`（1）


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #f2f2f2;
  border-radius: 0px;
  padding: 50px 50px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（48px×5、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 16枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 4:3（8枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#000a41 }
.container{ width:min(100% - 10px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f2f2f2;
  border-radius:0px; padding:50px 50px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e7242e; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:540px){
  :root{ --fs-body:14px; --section-y:24px; --gap:4px; }
  .container{ width:calc(100% - 10px) }
}
```

## 守ること

やること

- 地色と主色 `#000a41` の面を全幅で交互に置く。主色は画面の21%を占めるだけ使う。
- 余白 100px と行間 null を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
