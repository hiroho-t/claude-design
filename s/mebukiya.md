# 【公式】 芽吹き屋 オンラインショップ ふうのデザイン

- 出典: https://www.mebukiya.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／料理･食べ物･飲み物･食品製造

白地に `#ecdbbb` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 1.5、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ecdbbb;
  --sub: #dfe0e1;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #ecdbbb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: sans-serif;
  --fs-body: 18px;
  --lh-body: 1.5;
  --container: 840px;
  --read: 1128px;
  --section-y: 96px;
  --gap: 24px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.1% |
| 主色 | `#c8caba` | 4% |
| 副色 | `#dfe0e1` | 3.9% |
| 差し色 | `#ecdbbb` | 2.1% |
| 差し色 | `#3f3025` | 1.8% |

文字色は `#000000` / `#ffffff`。

- 主色 `#ecdbbb` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 2 | 19 | 1 | 0 |
| `#f7f7f7` | 38 | 0 | 0 | 0 |
| `#000000` | 8 | 345 | 2 | 3 |

- `#ecdbbb` は

## 文字

- 和文: Zen Kaku Gothic New
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 2 |
| 見出し | 26px | 2 |
| 小見出し | 22px | — |
| 本文 | 18px | 1.5 |
| 補助 | 14px | — |
| 注記 | 11px | — |

- 本文は 18px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 840px／読ませる段は 1128px
- セクションの上下余白: 96 / 144 / 68 / 48px（基本は 96px）
- 並びの間隔: 4 / 24 / 48px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.5 | 14px / 行間 1.5 |
| 見出し | 30px | 20px / 行間 2 |
| セクションの上下余白 | 96px | 44px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 24px | 4px |

- 本文は 18px → 14px、セクション余白は 96px → 44px（PCの46%）。
- 文字サイズの段は 20 / 17 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #000000; color: #ffffff;
  border-radius: 100px; padding: 0px 0px; min-height: 80px;
  font-size: 9px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 8040px | `#ffffff` | ヒーロー（画像） | 右 | 全幅 |
| 2 | 1060px | — | 4カラム・画像あり | — | — |

- 全2セクション。
- 使われている面の色: `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 5px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f7f7f7; color: #000000;
  border-radius: 999px; padding: 4px 10px; font-size: 11px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 10 箇所ある（48px×5、80px×3、16px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 123枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（106枚）、3:4（14枚）、3:2（2枚）
- 角丸 5px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ecdbbb }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:8040px; display:grid; align-content:center }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#000000; color:#ffffff; border-radius:100px;
  padding:0px 0px; min-height:80px;
  font-size:9px; font-weight:500 }

img{ width:100%; height:auto; border-radius:5px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:44px; --gap:4px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ecdbbb` は文字と小さな部品にだけ使う。
- 余白 96px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 5px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
