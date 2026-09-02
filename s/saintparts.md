# 岐阜の廃車買取・中古部品のリサイクルパーツ ふうのデザイン

- 出典: https://www.saintparts.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／車･乗り物･モビリティ

白地に `#2b9494` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2b9494;
  --ink: #111111;
  --ink-rev: #444444;
  --on: #2b9494;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "futura", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1104px;
  --read: 780px;
  --section-y: 92px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.5% |
| 主色 | `#2b9494` | 11.1% |

文字色は `#111111` / `#444444` / `#ffffff` / `#f9f6f4`。

- 主色 `#2b9494` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 19 | 0 | 0 |
| `#f9f6f4` | 17 | 5 | 0 | 14 |
| `#249191` | 9 | 27 | 3 | 5 |
| `#ff7da2` | 2 | 0 | 1 | 0 |
| `#b0cb54` | 9 | 0 | 0 | 0 |
| `#111111` | 0 | 108 | 0 | 0 |
| `#444444` | 0 | 70 | 0 | 0 |

- `#2b9494` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f9f6f4` | `#2b9494` |
| `#ffffff`（地） | `#2b9494` |
| `#ff7da2` | `#2b9494` |
| `#249191` | `#444444` |

```css
.section{ --on:#2b9494 }                     /* 地の面 */
.section--main{ background:var(--main); color:#444444; --on:#444444 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#444444 }
.section--main .btn--fill{ background:#444444; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: ヒラギノ角ゴ ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: futura
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | — |
| 見出し | 17px | 1.69 |
| 本文 | 16px | 1.8 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1104px／読ませる段は 780px
- セクションの上下余白: 92 / 128 / 140 / 60px（基本は 92px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 768 / 767 / 374 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 13px / 行間 1.8 |
| 見出し | 34px | 14px / 行間 1.67 |
| セクションの上下余白 | 92px | 44px |
| 左右の余白 | — | 57px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 13px、セクション余白は 92px → 44px（PCの48%）。
- 文字サイズの段は 18 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #f9f6f4; color: #444444;
  border-radius: 0px; padding: 15px 10px; min-height: 39px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.624326px;
}
.btn-sub{
  background: transparent; color: #249191;
  border-radius: 0px; padding: 0px 0px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.624326px;
}
.btn-sub{
  background: #249191; color: #ffffff;
  border-radius: 999px; padding: 9px 19px; min-height: 30px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.624326px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | `#f9f6f4` | ヒーロー（画像） | — | 全面 |
| 2 | 520px | — | 1カラム・画像あり | 左 | 右（33:67） |
| 3 | 1360px | — | 6カラム・画像あり | 右 | 左（42:58） |
| 4 | 220px | — | 帯・区切り | — | 全面 |
| 5 | 720px | — | 3カラム・画像あり | 左 | 右（47:53） |
| 6 | 600px | `#f9f6f4` | 1カラム・画像あり | 左 | — |
| 7 | 800px | — | 1カラム・画像あり | 左 | 左（74:26） |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f9f6f4`（3） / `#ffffff`（1） / `#ff7da2`（1） / `#249191`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 33:67 / 42:58 / 47:53 / 74:26。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #249191; color: #ffffff;
  border-radius: 999px; padding: 9px 19px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 29 箇所ある（64px×8、32px×7、24px×6）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 26枚使っている
- 比率は 4:3（16枚）、16:9（6枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2b9494 }
.container{ width:min(100% - 114px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#444444; --on:#444444 }
.section--main .btn--fill{ background:#444444; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f9f6f4; color:#444444; border-radius:0px;
  padding:15px 10px; min-height:39px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:44px; }
  .container{ width:calc(100% - 114px) }
}
```

## 守ること

やること

- 地色と主色 `#2b9494` の面を全幅で交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 92px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
