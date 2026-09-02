# 情報科学芸術大学院大学 [IAMAS] ふうのデザイン

- 出典: https://www.iamas.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／学校･教育／レスポンシブ

白地に `#7c5e4e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.43、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7c5e4e;
  --sub: #cbcbcd;
  --ink: #000000;
  --ink-rev: #838587;
  --on: #7c5e4e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Inter", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.43;
  --container: 600px;
  --read: 800px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 72% |
| 主色 | `#e4e6eb` | 8.2% |
| 副色 | `#cbcbcd` | 3.7% |
| 差し色 | `#131112` | 2.7% |
| 差し色 | `#7c5e4e` | 2.7% |
| 差し色 | `#919092` | 1.9% |

文字色は `#000000` / `#838587` / `#ffffff` / `#c0c4c9`。

- 主色 `#7c5e4e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 13 | 19 | 0 | 1 |
| `#e6e6e6` | 5 | 0 | 0 | 0 |
| `#2641f0` | 1 | 29 | 1 | 1 |
| `#000000` | 0 | 161 | 1 | 0 |
| `#838587` | 0 | 31 | 0 | 0 |
| `#c0c4c9` | 0 | 4 | 0 | 0 |

- `#7c5e4e` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#7c5e4e` |
| `#e4e6eb` | `#7c5e4e` |
| `#e6e6e6` | `#7c5e4e` |

```css
.section{ --on:#7c5e4e }                     /* 地の面 */
.section--main{ background:var(--main); color:#838587; --on:#838587 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#838587 }
.section--main .btn--fill{ background:#838587; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Inter
- 欧文: Inter
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | — |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.43 |
| 補助 | 13px | — |

- 本文は 14px・行間 1.43。

## レイアウト

- コンテンツ幅: 最大 600px／読ませる段は 800px
- セクションの上下余白: 120 / 52 / 40 / 60px（基本は 120px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1340 / 1280 / 1024 / 1023px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.43 | 16px / 行間 1.5 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 16px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 36 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #2641f0; color: #ffffff;
  border: 1px solid #2641f0;
  border-radius: 16px; padding: 0px 0px; min-height: 32px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #000000;
  border-radius: 16px; padding: 0px 0px; min-height: 32px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 120px | `#ffffff` | 帯・区切り | — | — |
| 3 | 900px | — | 1カラム・画像あり | — | 全面 |
| 4 | 660px | `#ffffff` | 1カラム・文字だけ | 左 | — |
| 5 | 900px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1620px | — | 2カラム・画像あり | 右 | 見出しの下 |
| 7 | 1200px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 620px | — | 1カラム・画像あり | 右 | 左（44:56） |
| 9 | 1400px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 10 | 580px | — | 1カラム・画像あり | — | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#e4e6eb`（4） / `#e6e6e6`（1）
- 見出しは左1／中央3。
- 2カラムの分け方は 44:56。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border-radius: 999px; padding: 0px 10px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 44枚使っている
- 比率は 3:2（15枚）、4:3（12枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7c5e4e }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#838587; --on:#838587 }
.section--main .btn--fill{ background:#838587; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#2641f0; color:#ffffff; border-radius:16px;
  padding:0px 0px; min-height:32px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#7c5e4e` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.43 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.43 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
