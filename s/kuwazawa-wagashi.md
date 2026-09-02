# 福島県 ふうのデザイン

- 出典: https://kuwazawa-wagashi.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／料理･食べ物･飲み物･食品製造／レスポンシブ

#fffbf2 の地に `#5a4620` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 2.67、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fffbf2;
  --main: #5a4620;
  --ink: #5a4620;
  --ink-rev: #ffffff;
  --on: #5a4620;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", sans-serif;
  --font-en: "Shippori Mincho", sans-serif;
  --fs-body: 18px;
  --lh-body: 2.67;
  --container: 752px;
  --read: 584px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fffbf2` | 98.9% |

文字色は `#5a4620` / `#ffffff`。

- 主色 `#5a4620` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#5a4620` | 1 | 36 | 1 | 0 |
| `#fffbf2` | 1 | 0 | 0 | 0 |
| `#ffffff` | 0 | 19 | 1 | 0 |

- `#5a4620` は文字色として36箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fffbf2`（地） | `#5a4620` |
| `#5a4620`（主色） | `#ffffff` |

```css
.section{ --on:#5a4620 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Shippori Mincho
- 欧文: Shippori Mincho
- ウェイトは 600 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | — |
| 見出し | 24px | 2 |
| 小見出し | 20px | — |
| 本文 | 18px | 2.67 |
| 補助 | 16px | — |
| 注記 | 14px | 1 |

- 本文は 18px・行間 2.67。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 752px／読ませる段は 584px
- セクションの上下余白: 60 / 44 / 104 / 120px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 18px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1199 / 1000 / 999 / 560 / 559px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2.67 | 16px / 行間 2 |
| 見出し | 30px | 24px / 行間 2 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 16px | —px |

- 本文は 18px → 16px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 24 / 20 / 18 / 16 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 18px; padding: 0px 0px; min-height: 36px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.5px;
}
.btn-sub{
  background: transparent; color: #5a4620;
  border: 1px solid #5a4620;
  border-radius: 18px; padding: 0px 0px; min-height: 36px;
  font-size: 14px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 640px | — | 1カラム・文字だけ | — | — |
| 3 | 3020px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 600px | — | 1カラム・画像あり | 中央 | — |
| 5 | 640px | — | 1カラム・画像あり | — | 全面 |
| 6 | 260px | — | 帯・区切り | 中央 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fffbf2`（1） / `#5a4620`（1）
- 見出しは左0／中央4。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 16枚使っている
- 比率は 1:1（12枚）、3:2（2枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#5a4620 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:18px;
  padding:0px 0px; min-height:36px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:560px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#fffbf2` のまま。主色 `#5a4620` は文字と小さな部品にだけ使う。
- 余白 60px と行間 2.67 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.67 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 18px 以外）を混ぜない。
