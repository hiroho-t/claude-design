# 中谷会計事務所 ふうのデザイン

- 出典: https://nakatani-tac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

白地に `#e4cdbb` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 100px・行間 1、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e4cdbb;
  --sub: #f2ede8;
  --ink: #ffffff;
  --ink-rev: #523c3c;
  --on: #e4cdbb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Outfit", sans-serif;
  --font-en: "Outfit", sans-serif;
  --fs-body: 100px;
  --lh-body: 1;
  --container: 1328px;
  --read: 588px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 77.7% |
| 主色 | `#2b2825` | 15% |
| 副色 | `#f2ede8` | 4.1% |
| 差し色 | `#e4cdbb` | 2.1% |

文字色は `#ffffff` / `#523c3c` / `#727171` / `#a5a5a5`。

- 主色 `#e4cdbb` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 12 | 51 | 0 | 3 |
| `#727171` | 0 | 23 | 4 | 0 |
| `#523c3c` | 0 | 21 | 0 | 0 |
| `#a5a5a5` | 0 | 5 | 2 | 0 |

- `#e4cdbb` は

## 文字

- 和文: Outfit
- 欧文: Outfit
- ウェイトは 400 / 100 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 本文 | 100px | 1 |
| 補助 | 67px | 1.2 |
| 注記 | 17px | — |
| 注記 | 16px | — |
| 注記 | 15px | 1.4 |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 100px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1328px／読ませる段は 588px
- セクションの上下余白: 60 / 120 / 80 / 100px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1199 / 992 / 991 / 767 / 575px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 100px / 行間 1 | 14px / 行間 2.3 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 100px → 14px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 100 / 30 / 16 / 14 / 13px。

## ボタン

```css
.btn{
  background: transparent; color: #b2a1a1;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 60px; font-weight: 100; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #b2a1a1;
  border-radius: 0px; padding: 0px 0px; min-height: 76px;
  font-size: 60px; font-weight: 100; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1400px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 1000px | — | 1カラム・文字だけ | 中央 | — |
| 3 | 1360px | `#ffffff` | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 1040px | — | 2カラム・画像あり | 左 | 右（28:72） |
| 5 | 420px | `#ffffff` | 1カラム・文字だけ | 左 | — |
| 6 | 2680px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 7 | 2980px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9）
- 見出しは左5／中央2。
- 2カラムの分け方は 28:72。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 14枚使っている
- 比率は 3:2（8枚）、1:1（5枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e4cdbb }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1400px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#b2a1a1; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:60px; font-weight:100 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e4cdbb` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。
