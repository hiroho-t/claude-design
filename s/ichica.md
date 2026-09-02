# イチカ ふうのデザイン

- 出典: https://tenri-ichica.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／金融･投資･保険･士業／地域･地方創生･政治･行政･自治体･NPO

#f5f3ee の地に `#665944` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 17px・行間 1.5、セクション間 208px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f3ee;
  --main: #665944;
  --sub: #a0a38d;
  --ink: #316043;
  --ink-rev: #fd816a;
  --on: #665944;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: sans-serif;
  --fs-body: 17px;
  --lh-body: 1.5;
  --container: 800px;
  --read: 600px;
  --section-y: 208px;
  --gap: 69px;
  --radius: 52px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f3ee` | 70.9% |
| 主色 | `#d9e5d4` | 17% |
| 副色 | `#a0a38d` | 3.8% |
| 差し色 | `#b0c3b0` | 3.1% |
| 差し色 | `#665944` | 2.9% |
| 差し色 | `#d2cfc3` | 2.1% |

文字色は `#316043` / `#fd816a` / `#ffffff`。

- 主色 `#665944` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#d9e5d4` | 2 | 0 | 0 | 0 |
| `#316043` | 1 | 54 | 19 | 1 |
| `#f5f3ee` | 6 | 0 | 0 | 0 |
| `#fd816a` | 0 | 6 | 0 | 0 |
| `#ffffff` | 0 | 1 | 0 | 0 |

- `#665944` は

## 文字

- 和文: Zen Kaku Gothic New
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | 1 |
| 見出し | 45px | 1.63 |
| 小見出し | 39px | 1.62 |
| リード | 32px | 1.5 |
| リード | 22px | 2 |
| リード | 19px | — |
| 本文 | 17px | 1.5 |

- 本文は 17px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 800px／読ませる段は 600px
- セクションの上下余白: 208 / 36 / 44 / 68px（基本は 208px）
- 並びの間隔: 69px
- 角丸: 52px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 960 / 768 / 640 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 52px | 28px / 行間 1.63 |
| セクションの上下余白 | 208px | 148px |
| 左右の余白 | — | 33px |
| 並びの間隔 | 69px | 50px |

- 本文は 17px → 12px、セクション余白は 208px → 148px（PCの71%）。
- 文字サイズの段は 28 / 23 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #316043; color: #ffffff;
  border: 2px solid #316043;
  border-radius: 13px; padding: 26px 26px; min-height: 82px;
  font-size: 17px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #316043;
  border: 2px solid #316043;
  border-radius: 9px; padding: 22px 43px; min-height: 67px;
  font-size: 19px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #316043;
  border: 2px solid #316043;
  border-radius: 9px; padding: 26px 60px; min-height: 75px;
  font-size: 19px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | 左 | 右（53:47） |
| 2 | 460px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 540px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 4 | 2280px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1180px | — | 1カラム・画像あり | 中央 | — |
| 6 | 760px | — | 1カラム・画像あり | 左 | 右（11:89） |

- 全6セクション。
- 使われている面の色: `#d9e5d4`（1）
- 見出しは左4／中央2。
- 2カラムの分け方は 53:47 / 11:89。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 25枚使っている
- 比率は 3:2（16枚）、1:1（8枚）、4:3（1枚）
- 角丸 52px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#665944 }
.container{ width:min(100% - 66px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#316043; color:#ffffff; border-radius:13px;
  padding:26px 26px; min-height:82px;
  font-size:17px; font-weight:400 }

img{ width:100%; height:auto; border-radius:52px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:148px; --gap:50px; }
  .container{ width:calc(100% - 66px) }
}
```

## 守ること

やること

- 地は `#f5f3ee` のまま。主色 `#665944` は文字と小さな部品にだけ使う。
- 余白 208px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 52px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（52px と 0px 以外）を混ぜない。
