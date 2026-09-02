# 株式会社映像システム ふうのデザイン

- 出典: https://www.eizo-system.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／レスポンシブ／1カラム

白地に `#e94709` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.7、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e94709;
  --sub: #737f81;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #e94709;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "NeueHaasUnicaPro-Light", sans-serif;
  --font-en: "NeueHaasUnicaPro-Light", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.7;
  --container: 580px;
  --read: 572px;
  --section-y: 140px;
  --gap: 8px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 42.5% |
| 主色 | `#222222` | 34.4% |
| 副色 | `#737f81` | 9.7% |
| 差し色 | `#d3dcd3` | 2.9% |
| 差し色 | `#121215` | 2.6% |
| 差し色 | `#565857` | 2.4% |

文字色は `#222222` / `#ffffff`。

- 主色 `#e94709` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 70 | 1 | 3 |
| `#222222` | 5 | 43 | 0 | 1 |
| `#f2f2f2` | 3 | 0 | 2 | 2 |
| `#464646` | 4 | 0 | 0 | 4 |
| `#e94709` | 5 | 0 | 0 | 2 |

- `#e94709` は面として5箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e94709` |
| `#222222` | `#ffffff` |
| `#f2f2f2` | `#e94709` |

```css
.section{ --on:#e94709 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: NeueHaasUnicaPro-Light
- 欧文: NeueHaasUnicaPro-Light
- ウェイトは 400 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.35 |
| 見出し | 22px | 1.4 |
| 小見出し | 18px | 1.1 |
| リード | 16px | 1.4 |
| 本文 | 15px | 1.7 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 580px／読ませる段は 572px
- セクションの上下余白: 140 / 80 / 64 / 132px（基本は 140px）
- 並びの間隔: 1 / 4 / 8 / 40px
- 角丸: 0px が基本。大きな面だけ 6px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1000 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.7 | 15px / 行間 1.95 |
| 見出し | 48px | 40px / 行間 1.25 |
| セクションの上下余白 | 140px | 68px |
| 左右の余白 | — | 27px |
| 並びの間隔 | 8px | 6px |

- 本文は 15px → 15px、セクション余白は 140px → 68px（PCの49%）。
- 文字サイズの段は 15 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #464646; color: #ffffff;
  border-radius: 6px; padding: 0px 0px; min-height: 57px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.6px;
}
.btn-sub{
  background: #f0f0f0; color: #222222;
  border: 3px solid #f0f0f0;
  border-radius: 4px; padding: 10px 29px; min-height: 50px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #e94709; color: #ffffff;
  border-radius: 6px; padding: 4px 10px; min-height: 29px;
  font-size: 12px; font-weight: 600; letter-spacing: 0.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 1100px | `#222222` | 2カラム・画像あり | 左 | 見出しの下 |
| 3 | 1180px | `#ffffff` | 6カラム・画像あり | 右 | 左（33:67） |
| 4 | 520px | `#f2f2f2` | 1カラム・文字だけ | 左 | — |
| 5 | 560px | `#ffffff` | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 560px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#222222`（4） / `#f2f2f2`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 33:67。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（48px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 65枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（49枚）、21:9（9枚）、16:9（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e94709 }
.container{ width:min(100% - 54px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#464646; color:#ffffff; border-radius:6px;
  padding:0px 0px; min-height:57px;
  font-size:15px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:68px; --gap:6px; }
  .container{ width:calc(100% - 54px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e94709` は文字と小さな部品にだけ使う。
- 余白 140px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 6px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
