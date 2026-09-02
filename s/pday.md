# 【最短翌日出荷 / 最短60分店仕上】オリジナル卓上&壁掛カレンダーがすぐ作れる ふうのデザイン

- 出典: https://pday.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／生活用品･雑貨･インテリア･家具

#f7f7f7 の地に `#f7f7f7` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f7f7;
  --main: #f7f7f7;
  --sub: #c5cbc8;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #f7f7f7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 1320px;
  --read: 564px;
  --section-y: 92px;
  --gap: 80px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f7f7` | 62.5% |
| 主色 | `#909ea0` | 30.3% |
| 副色 | `#c5cbc8` | 3.9% |

文字色は `#000000` / `#ffffff` / `#eeeeee` / `#909ea0`。

- 主色 `#f7f7f7` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#909ea0` | 4 | 5 | 4 | 2 |
| `#ffffff` | 3 | 18 | 0 | 0 |
| `#222222` | 1 | 5 | 0 | 0 |
| `#000000` | 0 | 65 | 0 | 0 |
| `#eeeeee` | 0 | 9 | 0 | 0 |

- `#f7f7f7` は

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1 |
| 見出し | 20px | 1.7 |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 1.8 |
| 補助 | 12px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1320px／読ませる段は 564px
- セクションの上下余白: 92 / 80 / 200 / 100px（基本は 92px）
- 並びの間隔: 10 / 40 / 80 / 120px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1024 / 768 / 750px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 15px / 行間 1 |
| 見出し | 24px | 25px / 行間 1.4 |
| セクションの上下余白 | 92px | 52px |
| 左右の余白 | — | 37px |
| 並びの間隔 | 80px | 10px |

- 本文は 14px → 15px、セクション余白は 92px → 52px（PCの57%）。
- 文字サイズの段は 25 / 21 / 19 / 15 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
.btn-sub{
  background: #909ea0; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
.btn-sub{
  background: #909ea0; color: #ffffff;
  border-radius: 30px; padding: 0px 0px; min-height: 60px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | — | 全面 |
| 2 | 680px | — | 1カラム・画像あり | 右 | 左（29:71） |
| 3 | 1740px | `#909ea0` | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 3060px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 840px | — | 4カラム・画像あり | 左 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#909ea0`（2）
- 見出しは左1／中央2。
- 2カラムの分け方は 29:71。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 7 箇所ある（56px×4、120px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 24枚使っている
- 比率は 4:3（22枚）、16:9（1枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f7f7f7 }
.container{ width:min(100% - 74px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:80px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:52px; --gap:10px; }
  .container{ width:calc(100% - 74px) }
}
```

## 守ること

やること

- 地は `#f7f7f7` のまま。主色 `#f7f7f7` は文字と小さな部品にだけ使う。
- 余白 92px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
