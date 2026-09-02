# アーツカウンシル金沢 ふうのデザイン

- 出典: https://artscouncil-kanazawa.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: 体験･交流／カルチャー･アート／レスポンシブ

白地に `#1cc18e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1cc18e;
  --sub: #463a3a;
  --ink: #333333;
  --ink-rev: #999999;
  --on: #1cc18e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "dnp-shuei-gothic-gin-std", sans-serif;
  --font-en: "dnp-shuei-gothic-gin-std", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 640px;
  --read: 600px;
  --section-y: 120px;
  --gap: 20px;
  --radius: 2px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69.2% |
| 主色 | `#1cc18e` | 5.8% |
| 副色 | `#463a3a` | 5.5% |
| 差し色 | `#ffe6e6` | 5.3% |
| 差し色 | `#dfd8ca` | 4.1% |
| 差し色 | `#9a9f9b` | 4% |

文字色は `#333333` / `#999999` / `#ffffff` / `#1cc18e`。

- 主色 `#1cc18e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fef6f6` | 9 | 0 | 3 | 3 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#ffffff` | 7 | 31 | 0 | 0 |
| `#1cc18e` | 5 | 6 | 0 | 3 |
| `#ffe5e5` | 1 | 0 | 0 | 0 |
| `#333333` | 2 | 133 | 11 | 1 |
| `#999999` | 0 | 31 | 0 | 0 |

- `#1cc18e` は面5箇所・文字6箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1cc18e` |
| `#fef6f6` | `#1cc18e` |
| `#000000` | `#999999` |
| `#e9f7f6` | `#1cc18e` |

```css
.section{ --on:#1cc18e }                     /* 地の面 */
.section--main{ background:var(--main); color:#999999; --on:#999999 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#999999 }
.section--main .btn--fill{ background:#999999; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e6e6e6`。ただしその囲みは `#e9f7f6` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: dnp-shuei-gothic-gin-std
- 欧文: dnp-shuei-gothic-gin-std
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 20px | — |
| 小見出し | 16px | — |
| 本文 | 14px | 1.8 |
| 補助 | 12px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 640px／読ませる段は 600px
- セクションの上下余白: 120 / 80 / 40 / 160px（基本は 120px）
- 並びの間隔: 20px
- 角丸: 2px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 961 / 960 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 14px / 行間 1.8 |
| セクションの上下余白 | 120px | 80px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 10px |

- 本文は 14px → 14px、セクション余白は 120px → 80px（PCの67%）。
- 文字サイズの段は 16 / 14 / 12 / 10 / 9px。

## ボタン

```css
.btn{
  background: #f5f5f5; color: #333333;
  border-radius: 20px; padding: 0px 16px; min-height: 38px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.56px;
}
.btn-sub{
  background: #1cc18e; color: #ffffff;
  border-radius: 32px; padding: 0px 0px; min-height: 44px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.56px;
}
.btn-sub{
  background: #1cc18e; color: #ffffff;
  border-radius: 20px; padding: 0px 16px; min-height: 38px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | — | 全面 |
| 2 | 720px | — | 4カラム・画像あり | — | 全面 |
| 3 | 1140px | — | 6カラム・画像あり | — | 全面 |
| 4 | 1120px | `#fcf5f0` | 2カラム・画像あり | — | 全面 |
| 5 | 1120px | — | 6カラム・画像あり | — | 全面 |
| 6 | 960px | `#fef6f6` | 1カラム・画像あり | — | 全面 |
| 7 | 920px | `#fef6f6` | 1カラム・文字だけ | — | — |
| 8 | 700px | — | 1カラム・画像あり | — | 全面 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#fef6f6`（2） / `#000000`（1） / `#e9f7f6`（1）


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e6e6e6。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f5f5f5; color: #333333;
  border-radius: 999px; padding: 0px 16px; font-size: 14px;
}
```

## 丸いもの

角丸は 2px だが、**完全な円は別扱い**で 7 箇所ある（40px×4、24px×1、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 51枚使っている
- 比率は 1:1（25枚）、2:3（20枚）、21:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1cc18e }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#999999; --on:#999999 }
.section--main .btn--fill{ background:#999999; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f5f5f5; color:#333333; border-radius:20px;
  padding:0px 16px; min-height:38px;
  font-size:14px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:80px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1cc18e` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（2px と 40px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
