# 加和太建設株式会社 ふうのデザイン

- 出典: https://www.kawata.org/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／建設･インフラ･土木･設備

白地に `#aaced8` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 20px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #aaced8;
  --sub: #807b6a;
  --ink: #000000;
  --ink-rev: #1672c7;
  --on: #aaced8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 20px;
  --lh-body: 1.6;
  --container: 1216px;
  --read: 836px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.1% |
| 主色 | `#e7f7f7` | 2.4% |
| 副色 | `#807b6a` | 2.3% |
| 差し色 | `#aaced8` | 1.7% |
| 差し色 | `#cce1e4` | 1.6% |
| 差し色 | `#b2ad9d` | 1.6% |

文字色は `#000000` / `#1672c7` / `#ffffff`。

- 主色 `#aaced8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 23 | 11 | 0 | 0 |
| `#ecfaff` | 19 | 0 | 0 | 0 |
| `#000000` | 11 | 114 | 0 | 11 |
| `#d9d9d9` | 0 | 0 | 5 | 0 |
| `#1672c7` | 0 | 23 | 0 | 0 |

- `#aaced8` は

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Inter
- ウェイトは 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 2.1 |
| 本文 | 20px | 1.6 |
| 補助 | 18px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 20px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1216px／読ませる段は 836px
- セクションの上下余白: 40 / 44 / 60 / 160px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1360 / 1025 / 1024 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 1.6 | 17px / 行間 1.6 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 41px |
| 並びの間隔 | 16px | —px |

- 本文は 20px → 17px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 27 / 19 / 17 / 15 / 12px。

## ボタン

```css
.btn{
  background: #000000; color: #ffffff;
  border-radius: 40px; padding: 0px 0px; min-height: 54px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 40px; padding: 0px 0px; min-height: 72px;
  font-size: 18px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 40px; padding: 0px 0px; min-height: 52px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 8980px | — | ヒーロー（画像） | — | 全面 |
| 2 | 540px | — | 1カラム・文字だけ | 右 | — |
| 3 | 1080px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 1600px | — | 2カラム・画像あり | — | 全面 |
| 5 | 900px | — | 6カラム・画像あり | — | 全面 |
| 6 | 660px | — | 1カラム・画像あり | — | 全面 |
| 7 | 580px | — | 1カラム・画像あり | — | 全面 |
| 8 | 640px | — | 2カラム・画像あり | — | 全面 |
| 9 | 1000px | — | 6カラム・画像あり | — | 全面 |

- 全9セクション。
- 使われている面の色: `#ffffff`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 45枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（24枚）、3:4（5枚）、3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#aaced8 }
.container{ width:min(100% - 82px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:8980px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#000000; color:#ffffff; border-radius:40px;
  padding:0px 0px; min-height:54px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:17px; --section-y:32px; }
  .container{ width:calc(100% - 82px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#aaced8` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。
