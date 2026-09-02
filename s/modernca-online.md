# MODERNCA ONLINE ふうのデザイン

- 出典: https://modernca-online.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／料理･食べ物･飲み物･食品製造

白地に `#dcd2b6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #dcd2b6;
  --sub: #1b1d21;
  --ink: #404040;
  --ink-rev: #ffffff;
  --on: #dcd2b6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Old Mincho", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1280px;
  --read: 624px;
  --section-y: 160px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 64.4% |
| 主色 | `#f2eeea` | 8.7% |
| 副色 | `#1b1d21` | 3.6% |
| 差し色 | `#bcbbb0` | 3.5% |
| 差し色 | `#dcd2b6` | 3.1% |
| 差し色 | `#432819` | 3% |

文字色は `#404040` / `#ffffff` / `#a0793d` / `#838383`。

- 主色 `#dcd2b6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 6 | 9 | 0 | 1 |
| `#f4f4f4` | 1 | 0 | 0 | 0 |
| `#404040` | 3 | 46 | 0 | 0 |
| `#a0793d` | 0 | 11 | 0 | 0 |
| `#838383` | 0 | 10 | 0 | 0 |

- `#dcd2b6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#dcd2b6` |
| `#f4f4f4` | `#dcd2b6` |

```css
.section{ --on:#dcd2b6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Old Mincho
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 80px | 1 |
| 見出し | 78px | — |
| 小見出し | 32px | 1 |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 2 |
| 補助 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 624px
- セクションの上下余白: 160 / 48 / 80 / 100px（基本は 160px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 990 / 989 / 750 / 749px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 16px / 行間 2 |
| 見出し | 80px | 32px / 行間 1 |
| セクションの上下余白 | 160px | 24px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 160px → 24px（PCの15%）。
- 文字サイズの段は 78 / 20 / 18 / 16 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #404040;
  border: 1px solid #707070;
  border-radius: 100px; padding: 4px 20px; min-height: 27px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #404040;
  border-radius: 0px; padding: 0px 48px; min-height: 80px;
  font-size: 24px; font-weight: 400; letter-spacing: 1.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1060px | — | ヒーロー（画像） | — | 全面 |
| 2 | 5120px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 940px | — | 2カラム・画像あり | — | 全面 |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#f4f4f4`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #404040;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 4px 20px; font-size: 12px;
}
```

## 画像

- 34枚使っている
- 比率は 3:4（24枚）、21:9（3枚）、3:2（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dcd2b6 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1060px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#404040; border-radius:100px;
  padding:4px 20px; min-height:27px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:750px){
  :root{ --fs-body:16px; --section-y:24px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#dcd2b6` は文字と小さな部品にだけ使う。
- 余白 160px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
