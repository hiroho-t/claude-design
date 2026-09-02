# 福岡･朝倉 工務店とつくる注文住宅なら想創舎（株）手嶋組 ふうのデザイン

- 出典: https://sososya.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア

白地に `#c0b59a` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c0b59a;
  --sub: #363530;
  --ink: #524b40;
  --ink-rev: #c6a648;
  --on: #c0b59a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-筑紫Aオールド明朝 Pr6N M{pm}", sans-serif;
  --font-en: "acumin-pro-wide", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.1;
  --container: 1124px;
  --read: 572px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69.4% |
| 主色 | `#e2e5dd` | 4.9% |
| 副色 | `#363530` | 4.2% |
| 差し色 | `#c0cdc2` | 3.2% |
| 差し色 | `#c0b59a` | 3.1% |
| 差し色 | `#dcd1c0` | 2.9% |

文字色は `#524b40` / `#c6a648` / `#ffffff`。

- 主色 `#c0b59a` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f8f5` | 1 | 0 | 0 | 0 |
| `#c6a648` | 1 | 7 | 0 | 1 |
| `#ffffff` | 1 | 1 | 0 | 0 |
| `#524b40` | 0 | 71 | 0 | 0 |

- `#c0b59a` は

## 文字

- 和文: FOT-筑紫Aオールド明朝 Pr6N M{pm}
- 欧文: acumin-pro-wide
- ウェイトは 400 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 17px | 1 |
| 本文 | 16px | 1.6 |
| 補助 | 15px | 1.6 |
| 注記 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | 1 |
| 注記 | 10px | 1 |

- 本文は 16px・行間 2.1。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1124px／読ませる段は 572px
- セクションの上下余白: 100 / 64 / 76 / 80px（基本は 100px）
- 並びの間隔: px
- 角丸: 30px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1380 / 1340 / 1320 / 1300 / 1240px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.1 | 13px / 行間 2.05 |
| 見出し | 17px | 10px / 行間 1 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 13px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #524b40;
  border: 1px solid #d1cdbf;
  border-radius: 30px; padding: 13px 0px; min-height: 46px;
  font-size: 15px; font-weight: 400; letter-spacing: 1.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 61px;
  font-size: 21px; font-weight: 400; letter-spacing: 2.1px;
}
.btn-sub{
  background: #c6a648; color: #ffffff;
  border-radius: 50px; padding: 19px 26px; min-height: 61px;
  font-size: 21px; font-weight: 400; letter-spacing: 2.1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 600px | — | 1カラム・画像あり | — | 全幅 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f9f8f5`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 40枚使っている。うち 12 枚は画面いっぱいに置く
- 比率は 21:9（12枚）、3:2（11枚）、4:3（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c0b59a }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#524b40; border-radius:30px;
  padding:13px 0px; min-height:46px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#c0b59a` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2.1 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.1 より詰めない。
- 中途半端な角丸（30px と 0px 以外）を混ぜない。
