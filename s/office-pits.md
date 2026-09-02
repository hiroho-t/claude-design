# 株式会社オフィスコーポレーション ふうのデザイン

- 出典: https://www.office-pits.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

白地に `#009b70` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 252px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #009b70;
  --sub: #ededed;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #009b70;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Figtree", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 712px;
  --read: 588px;
  --section-y: 252px;
  --gap: 40px;
  --radius: 15px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 37.1% |
| 主色 | `#009b70` | 34.8% |
| 副色 | `#ededed` | 13.2% |
| 差し色 | `#acbbc1` | 4% |
| 差し色 | `#c0deeb` | 2.3% |
| 差し色 | `#c6c9c4` | 2% |

文字色は `#000000` / `#ffffff` / `#009b70`。

- 主色 `#009b70` は差し色ではなく**面**で使う。画面の35%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#009b70` | 2 | 11 | 0 | 0 |
| `#ededed` | 1 | 0 | 0 | 0 |
| `#ffffff` | 2 | 19 | 3 | 2 |
| `#000000` | 0 | 25 | 0 | 0 |

- `#009b70` は文字色として11箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の35%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#009b70`（主色） | `#ffffff` |
| `#ededed` | `#009b70` |

```css
.section{ --on:#009b70 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Figtree
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | 1.82 |
| 見出し | 18px | 1.5 |
| 小見出し | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2 |
| 補助 | 12px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 712px／読ませる段は 588px
- セクションの上下余白: 252 / 300 / 120 / 152px（基本は 252px）
- 並びの間隔: 10 / 30 / 40 / 55px
- 角丸: 15px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1500 / 1199 / 1099 / 1023px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 14px / 行間 1.72 |
| セクションの上下余白 | 252px | 100px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 40px | 20px |

- 本文は 14px → 14px、セクション余白は 252px → 100px（PCの40%）。
- 文字サイズの段は 51 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 21px; padding: 0px 0px; min-height: 42px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #009b70;
  border-radius: 8px; padding: 0px 15px; min-height: 80px;
  font-size: 21px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1080px | — | 6カラム・画像あり | 右 | 見出しの下 |
| 3 | 2120px | `#009b70` | 1カラム・画像あり | 右 | 左（48:52） |
| 4 | 760px | — | 1カラム・画像あり | 左 | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#009b70` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#009b70`（2） / `#ededed`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 48:52。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 15px だが、**完全な円は別扱い**で 2 箇所ある（24px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 47枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（30枚）、2:3（12枚）、3:4（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#009b70 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:21px;
  padding:0px 0px; min-height:42px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:100px; --gap:20px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#009b70` の面を全幅で交互に置く。主色は画面の35%を占めるだけ使う。
- 余白 252px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（15px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
