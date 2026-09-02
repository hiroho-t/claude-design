# 株式会社HA ふうのデザイン

- 出典: https://ha-ru2017.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／建設･インフラ･土木･設備／レスポンシブ

白地に `#9bbfd4` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #9bbfd4;
  --sub: #eaeaea;
  --ink: #1c1c1c;
  --ink-rev: #ffffff;
  --on: #9bbfd4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Archivo", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 608px;
  --read: 596px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 51.9% |
| 主色 | `#1c1c1c` | 19.1% |
| 副色 | `#eaeaea` | 8.4% |
| 差し色 | `#465052` | 6.5% |
| 差し色 | `#9bbfd4` | 2.7% |
| 差し色 | `#4c91ad` | 2.5% |

文字色は `#1c1c1c` / `#ffffff` / `#777777` / `#c0c0c0`。

- 主色 `#9bbfd4` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 6 | 22 | 0 | 0 |
| `#1c1c1c` | 2 | 80 | 0 | 0 |
| `#aaaaaa` | 1 | 0 | 0 | 0 |
| `#777777` | 0 | 36 | 0 | 0 |
| `#c0c0c0` | 0 | 10 | 0 | 0 |

- `#9bbfd4` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#9bbfd4` |
| `#1c1c1c` | `#ffffff` |
| `#aaaaaa` | `#9bbfd4` |

```css
.section{ --on:#9bbfd4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Archivo
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.6 |
| 見出し | 32px | — |
| 小見出し | 20px | — |
| リード | 18px | — |
| リード | 15px | — |
| 本文 | 14px | 1.2 |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 608px／読ませる段は 596px
- セクションの上下余白: 60 / 96 / 120 / 124px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 992 / 991 / 768 / 576 / 575px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 14px / 行間 2 |
| 見出し | 48px | 14px / 行間 1.2 |
| セクションの上下余白 | 60px | 168px |
| 左右の余白 | — | 69px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 60px → 168px（PCの280%）。
- 文字サイズの段は 70 / 50 / 30 / 15 / 14px。

## ボタン

```css

```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1920px | — | ヒーロー（画像） | 左 | 右（18:82） |
| 2 | 1000px | `#ffffff` | 1カラム・画像あり | 左 | — |
| 3 | 980px | `#1c1c1c` | 3カラム・画像あり | 右 | 見出しの下 |
| 4 | 900px | `#ffffff` | 6カラム | 左 | — |
| 5 | 900px | — | 1カラム・文字だけ | — | — |
| 6 | 800px | `#ffffff` | 2カラム | 左 | — |
| 7 | 1540px | `#ffffff` | 1カラム・画像あり | 右 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（6） / `#1c1c1c`（2） / `#aaaaaa`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 18:82。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 28枚使っている
- 比率は 4:3（24枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#9bbfd4 }
.container{ width:min(100% - 138px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1920px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:168px; }
  .container{ width:calc(100% - 138px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#9bbfd4` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
