# キチナングループ ふうのデザイン

- 出典: https://www.kichinan.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／求人･マッチング･転職･人材ビジネス／製造業･工業･メーカー･商社･物流

白地に `#3a75bb` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.75、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #3a75bb;
  --sub: #1a335b;
  --ink: #ffffff;
  --ink-rev: #242424;
  --on: #3a75bb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Outfit", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 1200px;
  --read: 600px;
  --section-y: 64px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 44.2% |
| 主色 | `#3a75bb` | 25.2% |
| 副色 | `#1a335b` | 11.4% |
| 差し色 | `#b3bdc7` | 4.5% |
| 差し色 | `#e4e9ef` | 2.9% |
| 差し色 | `#cbd7e0` | 2.7% |

文字色は `#ffffff` / `#242424` / `#3a75bb` / `#5eaad7`。

- 主色 `#3a75bb` は差し色ではなく**面**で使う。画面の25%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#3a75bb` | 12 | 28 | 8 | 5 |
| `#edf5fc` | 7 | 0 | 0 | 0 |
| `#1a335b` | 2 | 2 | 2 | 0 |
| `#ffffff` | 29 | 151 | 22 | 5 |
| `#242424` | 0 | 42 | 0 | 0 |
| `#5eaad7` | 1 | 7 | 2 | 0 |

- `#3a75bb` は面12箇所・文字28箇所を行き来する。ボタンの地にも使う。枠線にも8箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#3a75bb` |
| `#3a75bb`（主色） | `#242424` |
| `#edf5fc` | `#3a75bb` |
| `#1a335b` | `#242424` |

```css
.section{ --on:#3a75bb }                     /* 地の面 */
.section--main{ background:var(--main); color:#242424; --on:#242424 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#242424 }
.section--main .btn--fill{ background:#242424; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#edf5fc` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Outfit
- ウェイトは 700 / 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 25px | — |
| 見出し | 20px | 1.5 |
| 小見出し | 18px | — |
| 本文 | 16px | 1.75 |
| 補助 | 15px | — |
| 注記 | 13px | — |
| 注記 | 12px | 1 |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 600px
- セクションの上下余白: 64 / 80 / 160 / 96px（基本は 64px）
- 並びの間隔: 4 / 6 / 12 / 16px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1729 / 1300 / 769 / 768 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 25px | 10px / 行間 1 |
| セクションの上下余白 | 64px | 32px |
| 左右の余白 | — | 27px |
| 並びの間隔 | 12px | 8px |

- 本文は 16px → 14px、セクション余白は 64px → 32px（PCの50%）。
- 文字サイズの段は 17 / 15 / 14 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 999px; padding: 7px 12px; min-height: 33px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #3a75bb; color: #ffffff;
  border: 1px solid #3a75bb;
  border-radius: 999px; padding: 20px 24px; min-height: 68px;
  font-size: 18px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #3a75bb;
  border: 1px solid #3a75bb;
  border-radius: 2px; padding: 0px 0px; min-height: 88px;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1440px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1180px | — | 4カラム・画像あり | — | 全幅 |
| 3 | 1040px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 4 | 1480px | — | 6カラム・画像あり | 左 | — |
| 5 | 240px | — | 帯・区切り | 左 | — |
| 6 | 2020px | `#3a75bb` | 3カラム・画像あり | 左 | 右（44:56） |
| 7 | 920px | — | 5カラム・画像あり | 右 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#3a75bb` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（7） / `#3a75bb`（3） / `#edf5fc`（3） / `#1a335b`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 44:56。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 8px;
  padding: 16px 16px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 7px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 55枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:4（28枚）、4:3（5枚）、3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3a75bb }
.container{ width:min(100% - 54px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1440px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#242424; --on:#242424 }
.section--main .btn--fill{ background:#242424; color:var(--main) }
.card{ background:#ffffff;
  border-radius:8px; padding:16px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:999px;
  padding:7px 12px; min-height:33px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 54px) }
}
```

## 守ること

やること

- 地色と主色 `#3a75bb` の面を全幅で交互に置く。主色は画面の25%を占めるだけ使う。
- 余白 64px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
