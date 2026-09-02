# 大学共同利用機関法人 人間文化研究機構 ふうのデザイン

- 出典: https://www.rekihaku.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／商業施設･レジャー施設･文化施設／歴史･文化財･伝統

白地に `#ffeb64` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 2、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ffeb64;
  --sub: #fff08c;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #ffeb64;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Urbanist", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1000px;
  --read: 1130px;
  --section-y: 72px;
  --gap: 45px;
  --radius: 12px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 42.3% |
| 主色 | `#ffeb64` | 20.2% |
| 副色 | `#fff08c` | 17.4% |
| 差し色 | `#b8bfbc` | 8.1% |
| 差し色 | `#c8cecc` | 5.4% |
| 差し色 | `#686759` | 2.6% |

文字色は `#000000` / `#ffffff` / `#e68900` / `#01a295`。

- 主色 `#ffeb64` は差し色ではなく**面**で使う。画面の20%を占めている。
- 影は`rgba(0, 0, 0, 0.2) 6px 6px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 31 | 23 | 0 | 6 |
| `#fff089` | 1 | 0 | 0 | 0 |
| `#000000` | 12 | 199 | 8 | 6 |
| `#f0f0f0` | 9 | 0 | 4 | 4 |
| `#ffea5c` | 1 | 0 | 0 | 0 |
| `#e68900` | 0 | 11 | 0 | 0 |
| `#01a295` | 0 | 1 | 0 | 0 |

- `#ffeb64` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ffeb64` |
| `#fff089` | `#ffeb64` |

```css
.section{ --on:#ffeb64 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fff089` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Urbanist
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 31px | 1.1 |
| 見出し | 17px | — |
| 本文 | 16px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 1130px
- セクションの上下余白: 72 / 52 / 76 / 84px（基本は 72px）
- 並びの間隔: 12 / 30 / 45 / 70px
- 角丸: 12px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1380 / 1366 / 1365 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 1.2 |
| 見出し | 31px | 25px / 行間 1.21 |
| セクションの上下余白 | 72px | 44px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 45px | 28px |

- 本文は 16px → 14px、セクション余白は 72px → 44px（PCの61%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border: 1px solid #000000;
  border-radius: 6px; padding: 5px 10px; min-height: 30px;
  font-size: 11px; font-weight: 600; letter-spacing: 1.1px;
}
.btn-sub{
  background: #fdb1a2; color: #000000;
  border-radius: 6px; padding: 0px 5px; min-height: 29px;
  font-size: 12px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 3px 0px; min-height: 30px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.42px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1340px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 3 | 2340px | — | 6カラム・画像あり | 左 | 右（30:70） |
| 4 | 2380px | — | 4カラム・画像あり | 中央 | 全幅 |
| 5 | 2220px | `#ffffff` | 4カラム・画像あり | 中央 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（10） / `#fff089`（1）
- 見出しは左1／中央3。
- 2カラムの分け方は 30:70。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 48px 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 10px 10px 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 6px; padding: 5px 10px; font-size: 11px;
}
```

## 丸いもの

角丸は 12px だが、**完全な円は別扱い**で 13 箇所ある（32px×5、24px×3、16px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 37枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 3:4（14枚）、4:3（7枚）、3:2（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffeb64 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:48px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:6px;
  padding:5px 10px; min-height:30px;
  font-size:11px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:44px; --gap:28px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#ffeb64` の面を全幅で交互に置く。主色は画面の20%を占めるだけ使う。
- 余白 72px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（12px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
