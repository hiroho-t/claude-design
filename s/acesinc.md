# 企業のAI導入を戦略から実装まで伴走支援 ふうのデザイン

- 出典: https://acesinc.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#2d2d2d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 20px・行間 1.6、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2d2d2d;
  --sub: #dcdede;
  --ink: #121212;
  --ink-rev: #c7c7c7;
  --on: #2d2d2d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-YuGoPr6N-Medium", sans-serif;
  --font-en: "MFW-YuGoPr6N-Medium", sans-serif;
  --fs-body: 20px;
  --lh-body: 1.6;
  --container: 1280px;
  --read: 620px;
  --section-y: 160px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.6% |
| 主色 | `#2d2d2d` | 3.6% |
| 副色 | `#dcdede` | 2% |
| 差し色 | `#656464` | 1.8% |

文字色は `#121212` / `#c7c7c7` / `#757575` / `#000000`。

- 主色 `#2d2d2d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 3 | 0 | 0 |
| `#c7c7c7` | 8 | 8 | 0 | 0 |
| `#2d2d2d` | 2 | 0 | 0 | 1 |
| `#121212` | 0 | 55 | 16 | 0 |
| `#757575` | 0 | 21 | 0 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#2d2d2d` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#2d2d2d` |
| `#c7c7c7` | `#2d2d2d` |
| `#f9f9f9` | `#2d2d2d` |
| `#2d2d2d`（主色） | `#c7c7c7` |

```css
.section{ --on:#2d2d2d }                     /* 地の面 */
.section--main{ background:var(--main); color:#c7c7c7; --on:#c7c7c7 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#c7c7c7 }
.section--main .btn--fill{ background:#c7c7c7; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: MFW-YuGoPr6N-Medium
- 欧文: MFW-YuGoPr6N-Medium
- ウェイトは 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | — |
| 見出し | 40px | 1.5 |
| 小見出し | 28px | — |
| 本文 | 20px | 1.4 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 20px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 620px
- セクションの上下余白: 160 / 32 / 80px（基本は 160px）
- 並びの間隔: 8 / 16 / 20 / 40px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1140 / 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 1.6 | 16px |
| 見出し | 52px | 16px / 行間 1.4 |
| セクションの上下余白 | 160px | 80px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 40px |

- 本文は 20px → 16px、セクション余白は 160px → 80px（PCの50%）。
- 文字サイズの段は 24 / 20 / 18 / 16 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #121212;
  border-radius: 0px; padding: 16px 16px; min-height: 52px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #2d2d2d; color: #ffffff;
  border-radius: 2px; padding: 16px 16px; min-height: 52px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー | 左 | — |
| 2 | 2080px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 3 | 1000px | — | 2カラム・画像あり | 左 | — |
| 4 | 1060px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 1240px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 1080px | — | 1カラム・画像あり | 左 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#c7c7c7`（2） / `#f9f9f9`（1） / `#2d2d2d`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 35枚使っている
- 比率は 3:2（18枚）、1:1（8枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2d2d2d }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#c7c7c7; --on:#c7c7c7 }
.section--main .btn--fill{ background:#c7c7c7; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#121212; border-radius:0px;
  padding:16px 16px; min-height:52px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:16px; --section-y:80px; --gap:40px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#2d2d2d` は文字と小さな部品にだけ使う。
- 余白 160px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。
