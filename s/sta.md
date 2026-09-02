# Sta. ふうのデザイン

- 出典: https://online-sta.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／料理･食べ物･飲み物･食品製造

#adadaf の地に `#adadaf` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.5、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #adadaf;
  --main: #adadaf;
  --sub: #bbc6ce;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #adadaf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "RotisSansSerif-Bold", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.5;
  --container: 640px;
  --read: 588px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#adadaf` | 59.9% |
| 主色 | `#191c1b` | 14.7% |
| 副色 | `#bbc6ce` | 4.5% |
| 差し色 | `#545c54` | 2.6% |
| 差し色 | `#304243` | 2.5% |
| 差し色 | `#667a7b` | 2.4% |

文字色は `#000000` / `#ffffff` / `#adadaf`。

- 主色 `#adadaf` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 4 | 6 | 0 | 0 |
| `#adadaf` | 1 | 2 | 0 | 0 |
| `#000000` | 7 | 117 | 4 | 4 |

- `#adadaf` は面1箇所・文字2箇所を行き来する。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#adadaf` |
| `#adadaf`（地） | `#adadaf` |

```css
.section{ --on:#adadaf }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: A+EqpB-游ゴシック体 Pr6N D（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: RotisSansSerif-Bold
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1 |
| 見出し | 26px | 1.8 |
| 小見出し | 17px | — |
| リード | 14px | — |
| 本文 | 12px | 1.5 |
| 補助 | 11px | — |

- 本文は 12px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 640px／読ませる段は 588px
- セクションの上下余白: 120 / 240 / 56 / 124px（基本は 120px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1620 / 1280 / 960 / 768 / 580px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 30px | 20px / 行間 1.8 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 40px |
| 並びの間隔 | 16px | 40px |

- 本文は 12px → 12px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 24 / 20 / 16 / 12 / 10px。

## ボタン

```css
.btn{
  background: #000000; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 44px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.84px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 右 | 全幅 |
| 2 | 720px | — | 1カラム・画像あり | — | 全面 |
| 3 | 1540px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1060px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#adadaf`（1）
- 見出しは左0／中央2。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 7枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:4（4枚）、4:3（2枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#adadaf }
.container{ width:min(100% - 80px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#000000; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:44px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:40px; --gap:40px; }
  .container{ width:calc(100% - 80px) }
}
```

## 守ること

やること

- 地は `#adadaf` のまま。主色 `#adadaf` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
