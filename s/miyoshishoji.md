# ミヨシ商事株式会社 ふうのデザイン

- 出典: https://www.miyoshi-shoji.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／料理･食べ物･飲み物･食品製造

白地に `#e91e24` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.15、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e91e24;
  --sub: #2c2a2a;
  --ink: #262626;
  --ink-rev: #ffffff;
  --on: #e91e24;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.15;
  --container: 1150px;
  --read: 720px;
  --section-y: 80px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 50.2% |
| 主色 | `#63625d` | 10.5% |
| 副色 | `#2c2a2a` | 8.7% |
| 差し色 | `#4d4e49` | 6.7% |
| 差し色 | `#f8f3e7` | 5.1% |
| 差し色 | `#d3d9d9` | 3.2% |

文字色は `#262626` / `#ffffff` / `#000000` / `#e91e24`。

- 主色 `#e91e24` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 2 | 22 | 0 | 1 |
| `#262626` | 2 | 20 | 0 | 2 |
| `#faf7ef` | 2 | 0 | 0 | 2 |
| `#e5e5e5` | 0 | 0 | 2 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |
| `#e91e24` | 0 | 4 | 0 | 0 |

- `#e91e24` は文字色として4箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 54px | — |
| 見出し | 40px | 1.8 |
| 小見出し | 28px | 1.8 |
| リード | 18px | — |
| 本文 | 16px | 1.15 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.15。

## レイアウト

- コンテンツ幅: 最大 1150px／読ませる段は 720px
- セクションの上下余白: 80 / 120 / 60 / 64px（基本は 80px）
- 並びの間隔: 16 / 20 / 32 / 64px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1023 / 900 / 600 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.15 | 16px / 行間 1.8 |
| 見出し | 54px | 28px / 行間 1.8 |
| セクションの上下余白 | 80px | 80px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 32px | 16px |

- 本文は 16px → 16px、セクション余白は 80px → 80px（PCの100%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #262626; color: #ffffff;
  border-radius: 60px; padding: 0px 0px; min-height: 53px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.8px;
}
.btn-sub{
  background: #faf7ef; color: #262626;
  border-radius: 40px; padding: 12px 24px; min-height: 42px;
  font-size: 12px; font-weight: 600; letter-spacing: 0.8px;
}
.btn-sub{
  background: #ffffff; color: #262626;
  border-radius: 60px; padding: 0px 0px; min-height: 53px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 右（51:49） |
| 2 | 120px | — | 帯・区切り | — | 全面 |
| 3 | 1640px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 300px | — | 帯・区切り | 左 | — |
| 5 | 640px | — | 1カラム・文字だけ | 右 | — |
| 6 | 240px | — | 3カラム・画像あり | — | 全面 |

- 全6セクション。
- 使われている面の色: 
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 51:49。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #faf7ef; color: #262626;
  border-radius: 999px; padding: 12px 24px; font-size: 12px;
}
```

## 画像

- 30枚使っている
- 比率は 3:4（18枚）、3:2（6枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e91e24 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#262626; color:#ffffff; border-radius:60px;
  padding:0px 0px; min-height:53px;
  font-size:14px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:16px; --section-y:80px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e91e24` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.15 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.15 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。
