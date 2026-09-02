# Ready Crew（レディクル） ふうのデザイン

- 出典: https://readycrew.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／求人･マッチング･転職･人材ビジネス

白地に `#e10029` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.5、セクション間 44px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e10029;
  --sub: #d6d8da;
  --ink: #282c32;
  --ink-rev: #e10029;
  --on: #e10029;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "ryo-gothic-plusn", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1120px;
  --read: 960px;
  --section-y: 44px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 82.7% |
| 主色 | `#e10029` | 6.1% |
| 副色 | `#d6d8da` | 2.5% |
| 差し色 | `#f1e6e8` | 2% |
| 差し色 | `#dfa4ae` | 1.9% |
| 差し色 | `#8d8f93` | 1.8% |

文字色は `#282c32` / `#e10029` / `#000000` / `#ffffff`。

- 主色 `#e10029` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e10029` | 15 | 56 | 7 | 5 |
| `#fcf8f7` | 39 | 44 | 7 | 5 |
| `#374149` | 11 | 4 | 5 | 9 |
| `#282c32` | 0 | 120 | 0 | 0 |
| `#000000` | 0 | 15 | 0 | 0 |

- `#e10029` は文字色として56箇所で使うのが主。面としては15箇所しかないが、1枚が大きく画面の6%を占める。ボタンの地にも使う。枠線にも7箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fcf8f7` | `#e10029` |
| `#e10029`（主色） | `#e10029` |
| `#ffffff`（地） | `#e10029` |

```css
.section{ --on:#e10029 }                     /* 地の面 */
.section--main{ background:var(--main); color:#e10029; --on:#e10029 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#e10029 }
.section--main .btn--fill{ background:#e10029; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: ryo-gothic-plusn
- ウェイトは 900 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.4 |
| 見出し | 34px | 1.2 |
| 小見出し | 30px | 1.4 |
| リード | 28px | 1.4 |
| リード | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 960px
- セクションの上下余白: 44 / 120 / 60 / 80px（基本は 44px）
- 並びの間隔: 2 / 8 / 16 / 33px
- 角丸: 4px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1279 / 1024 / 1023 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 12px / 行間 1 |
| 見出し | 38px | 24px / 行間 1.4 |
| セクションの上下余白 | 44px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | 2px |

- 本文は 16px → 12px、セクション余白は 44px → 32px（PCの73%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #e10029; color: #ffffff;
  border: 2px solid #e10029;
  border-radius: 4px; padding: 0px 0px; min-height: 50px;
  font-size: 14px; font-weight: 900; letter-spacing: 0;
}
.btn-sub{
  background: #374149; color: #ffffff;
  border-radius: 26px; padding: 0px 0px; min-height: 30px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #374149; color: #ffffff;
  border: 2px solid #374149;
  border-radius: 4px; padding: 0px 0px; min-height: 44px;
  font-size: 14px; font-weight: 800; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | 中央 | 右（40:60） |
| 2 | 380px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 420px | — | 1カラム・画像あり | 左 | 右（43:57） |
| 4 | 1380px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1600px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 5140px | — | 3カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fcf8f7`（11） / `#e10029`（5） / `#ffffff`（1）
- 見出しは左1／中央5。
- 2カラムの分け方は 40:60 / 43:57。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #fcf8f7;
  border-radius: 8px;
  padding: 82px 0px;
}
```


## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 11 箇所ある（48px×3、160px×3、192px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 21枚使っている
- 比率は 1:1（7枚）、16:9（5枚）、4:3（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e10029 }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#e10029; --on:#e10029 }
.section--main .btn--fill{ background:#e10029; color:var(--main) }
.card{ background:#fcf8f7;
  border-radius:8px; padding:82px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e10029; color:#ffffff; border-radius:4px;
  padding:0px 0px; min-height:50px;
  font-size:14px; font-weight:900 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:32px; --gap:2px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e10029` は文字と小さな部品にだけ使う。
- 余白 44px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（4px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
