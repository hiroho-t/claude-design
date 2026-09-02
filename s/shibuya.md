# 渋谷区公式サイト ふうのデザイン

- 出典: https://www.city.shibuya.tokyo.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／ポータルサイト･メディア･情報サイト／地域･地方創生･政治･行政･自治体･NPO

白地に `#4d65cb` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #4d65cb;
  --sub: #74748a;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #4d65cb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "OT-UDShinGoCOnizPr6N-Reg", sans-serif;
  --font-en: "OT-UDShinGoCOnizPr6N-Reg", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 1368px;
  --read: 668px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 50.3% |
| 主色 | `#e6e6f0` | 28.5% |
| 副色 | `#74748a` | 11.8% |
| 差し色 | `#b5a7ab` | 2.2% |
| 差し色 | `#c7cccf` | 2.1% |
| 差し色 | `#111012` | 1.8% |

文字色は `#000000` / `#ffffff` / `#74748a` / `#4d65cb`。

- 主色 `#4d65cb` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e6e6f0` | 4 | 0 | 20 | 1 |
| `#ffffff` | 25 | 16 | 0 | 4 |
| `#74748a` | 1 | 5 | 0 | 0 |
| `#000000` | 2 | 72 | 0 | 0 |
| `#424257` | 1 | 0 | 0 | 1 |
| `#4d65cb` | 0 | 1 | 0 | 0 |

- `#4d65cb` は文字色として1箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e6e6f0` | `#4d65cb` |
| `#ffffff`（地） | `#4d65cb` |
| `#74748a` | `#ffffff` |

```css
.section{ --on:#4d65cb }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#e6e6f0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: OT-UDShinGoCOnizPr6N-Reg
- 欧文: OT-UDShinGoCOnizPr6N-Reg
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.6 |
| 見出し | 28px | — |
| 小見出し | 20px | — |
| 本文 | 16px | 1.6 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1368px／読ませる段は 668px
- セクションの上下余白: 40 / 36 / 44 / 52px（基本は 40px）
- 並びの間隔: px
- 角丸: 20px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1160 / 1090 / 1025 / 1024 / 750px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 16px / 行間 1.6 |
| 見出し | 34px | 30px / 行間 1.6 |
| セクションの上下余白 | 40px | 52px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 40px → 52px（PCの130%）。
- 文字サイズの段は 24 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 20px; padding: 18px 40px; min-height: 60px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.48px;
}
.btn-sub{
  background: #e6e6f0; color: #000000;
  border-radius: 15px; padding: 8px 13px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.48px;
}
.btn-sub{
  background: #424257; color: #ffffff;
  border-radius: 20px; padding: 32px 5px; min-height: 50px;
  font-size: 10px; font-weight: 400; letter-spacing: 0.1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | — | — |
| 2 | 380px | — | 4カラム | 中央 | — |
| 3 | 280px | — | 6カラム | — | — |
| 4 | 1000px | — | 1カラム・画像あり | — | — |
| 5 | 400px | — | 1カラム・画像あり | — | 全面 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e6e6f0`（2） / `#ffffff`（1） / `#74748a`（1）
- 見出しは左0／中央1。


## 部品

囲み（18箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 26px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border-radius: 6px; padding: 4px 7px; font-size: 12px;
}
```

## 丸いもの

角丸は 20px だが、**完全な円は別扱い**で 1 箇所ある（24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 1枚使っている
- 比率は 16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4d65cb }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:26px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:20px;
  padding:18px 40px; min-height:60px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:750px){
  :root{ --fs-body:16px; --section-y:52px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#4d65cb` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（20px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
