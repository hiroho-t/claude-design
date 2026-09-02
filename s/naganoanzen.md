# 長野安全自動車 ふうのデザイン

- 出典: https://naganoanzen.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／暮らし･生活／車･乗り物･モビリティ

白地に `#0b318f` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0b318f;
  --sub: #fdc201;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #0b318f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "presicav", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 736px;
  --read: 828px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69.3% |
| 主色 | `#0b318f` | 21.9% |
| 副色 | `#fdc201` | 1.5% |

文字色は `#333333` / `#ffffff`。

- 主色 `#0b318f` は差し色ではなく**面**で使う。画面の22%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#0b318f` | 9 | 0 | 7 | 7 |
| `#ffffff` | 2 | 14 | 0 | 0 |
| `#333333` | 0 | 46 | 0 | 0 |

- `#0b318f` は面として9箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。枠線にも7箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0b318f` |
| `#0b318f`（主色） | `#ffffff` |

```css
.section{ --on:#0b318f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: presicav
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.2 |
| 見出し | 30px | — |
| 小見出し | 20px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 736px／読ませる段は 828px
- セクションの上下余白: 40 / 76 / 52 / 72px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 900 / 782 / 781 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 1.85 |
| 見出し | 40px | 30px / 行間 1.2 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 13px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 16 / 13 / 12 / 10 / 9px。

## ボタン

```css
.btn{
  background: #0b318f; color: #ffffff;
  border: 1px solid #0b318f;
  border-radius: 20px; padding: 10px 26px; min-height: 36px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 36px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
}
.btn-sub{
  background: #0b318f; color: #ffffff;
  border: 1px solid #0b318f;
  border-radius: 30px; padding: 5px 23px; min-height: 40px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 140px | — | ヒーロー（画像） | — | — |
| 2 | 4440px | — | 6カラム・画像あり | 中央 | 全幅 |
| 3 | 900px | `#0b318f` | 1カラム・文字だけ | — | — |
| 4 | 1100px | — | 6カラム・画像あり | 左 | 見出しの下 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#0b318f` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（2） / `#0b318f`（2）
- 見出しは左1／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #0b318f; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 10px 26px; font-size: 14px;
}
```

## 画像

- 21枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（11枚）、1:1（6枚）、2:3（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0b318f }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#0b318f; color:#ffffff; border-radius:20px;
  padding:10px 26px; min-height:36px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:13px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#0b318f` の面を全幅で交互に置く。主色は画面の22%を占めるだけ使う。
- 余白 40px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。
