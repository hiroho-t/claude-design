# 株式会社クラウディアホールディングス ふうのデザイン

- 出典: https://www.kuraudia.holdings/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ファッション･アパレル･アクセサリー･ジュエリー／ウェディング

#f4f0ed の地に `#e0cdba` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.25、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f4f0ed;
  --main: #e0cdba;
  --sub: #c8161d;
  --ink: #222222;
  --ink-rev: #686464;
  --on: #e0cdba;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Bricolage Grotesque", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.25;
  --container: 1080px;
  --read: 1016px;
  --section-y: 32px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f4f0ed` | 68.6% |
| 主色 | `#e0cdba` | 7.3% |
| 副色 | `#c8161d` | 6.9% |
| 差し色 | `#e7c37f` | 3.8% |
| 差し色 | `#d3d5d3` | 3.6% |
| 差し色 | `#a9a49f` | 2.7% |

文字色は `#222222` / `#686464` / `#ffffff` / `#ebe2e0`。

- 主色 `#e0cdba` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#c8161d` | 1 | 0 | 0 | 0 |
| `#ffffff` | 8 | 25 | 0 | 0 |
| `#87acae` | 2 | 0 | 0 | 0 |
| `#9f8d82` | 1 | 0 | 0 | 1 |
| `#be875b` | 0 | 2 | 0 | 0 |
| `#222222` | 0 | 13 | 0 | 0 |
| `#686464` | 0 | 25 | 0 | 0 |
| `#ebe2e0` | 0 | 15 | 0 | 0 |

- `#e0cdba` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#e0cdba` |
| `#c8161d` | `#686464` |

```css
.section{ --on:#e0cdba }                     /* 地の面 */
.section--main{ background:var(--main); color:#686464; --on:#686464 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#686464 }
.section--main .btn--fill{ background:#686464; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#e7dcd5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Bricolage Grotesque
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 本文 | 16px | 1.88 |
| 補助 | 15px | 1.87 |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 16px・行間 2.25。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1080px／読ませる段は 1016px
- セクションの上下余白: 32 / 104 / 124 / 64px（基本は 32px）
- 並びの間隔: 6 / 12 / 16 / 40px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 769 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.25 | 14px / 行間 2.29 |
| 見出し | 16px | 13px / 行間 1.85 |
| セクションの上下余白 | 32px | 32px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 16px | 16px |

- 本文は 16px → 14px、セクション余白は 32px → 32px（PCの100%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #9f8d82; color: #ffffff;
  border-radius: 2px; padding: 8px 12px; min-height: 46px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 900px | — | 1カラム・文字だけ | — | — |
| 3 | 900px | — | 1カラム・文字だけ | — | — |
| 4 | 900px | — | 1カラム・文字だけ | — | — |
| 5 | 900px | — | 1カラム・文字だけ | — | — |
| 6 | 900px | — | 1カラム・文字だけ | — | — |
| 7 | 900px | — | 1カラム・文字だけ | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（8） / `#c8161d`（1）


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 32px 24px;
}
```


## 画像

- 29枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 1:1（14枚）、3:2（7枚）、16:9（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e0cdba }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#686464; --on:#686464 }
.section--main .btn--fill{ background:#686464; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:32px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#9f8d82; color:#ffffff; border-radius:2px;
  padding:8px 12px; min-height:46px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:32px; --gap:16px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地は `#f4f0ed` のまま。主色 `#e0cdba` は文字と小さな部品にだけ使う。
- 余白 32px と行間 2.25 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.25 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。
