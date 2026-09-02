# ウェブ制作会社ベイジ ふうのデザイン

- 出典: https://baigie.me/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／企画･開発･マーケティング･コンサルティング

白地に `#e6e6e6` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 19px・行間 1.7、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e6e6e6;
  --sub: #242422;
  --ink: #242422;
  --ink-rev: #555555;
  --on: #e6e6e6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "ryo-gothic-plusn", sans-serif;
  --font-en: "ryo-gothic-plusn", sans-serif;
  --fs-body: 19px;
  --lh-body: 1.7;
  --container: 580px;
  --read: 780px;
  --section-y: 100px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.7% |
| 主色 | `#e6e6e6` | 10.7% |
| 副色 | `#242422` | 7.3% |
| 差し色 | `#9c9b95` | 3.1% |
| 差し色 | `#c0c3c1` | 2.9% |
| 差し色 | `#50524e` | 1.8% |

文字色は `#242422` / `#555555` / `#ffffff` / `#888888`。

- 主色 `#e6e6e6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(230, 230, 230) 0px 0px 0px 1px inset`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 4 | 0 | 1 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#242422` | 11 | 145 | 2 | 5 |
| `#e6e6e6` | 6 | 0 | 11 | 0 |
| `#ffffff` | 5 | 31 | 0 | 3 |
| `#555555` | 0 | 6 | 0 | 0 |
| `#888888` | 0 | 27 | 0 | 0 |

- `#e6e6e6` は面として6箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。枠線にも11箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5` | `#e6e6e6` |
| `#e6e6e6`（主色） | `#e6e6e6` |
| `#242422` | `#555555` |
| `#000000` | `#555555` |

```css
.section{ --on:#e6e6e6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: ryo-gothic-plusn
- 欧文: ryo-gothic-plusn
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 25px | 1.5 |
| 本文 | 19px | 1.7 |
| 補助 | 17px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 19px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 580px／読ませる段は 780px
- セクションの上下余白: 100 / 72 / 48 / 88px（基本は 100px）
- 並びの間隔: 12 / 20 / 24 / 40px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 781 / 767 / 736 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 19px / 行間 1.7 | 15px / 行間 1.7 |
| 見出し | 25px | 14px / 行間 1.5 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 28px |
| 並びの間隔 | 24px | 24px |

- 本文は 19px → 15px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 16 / 15 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #242422; color: #ffffff;
  border-radius: 4px; padding: 0px 0px; min-height: 36px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #242422;
  border-radius: 0px; padding: 42px 60px; min-height: 90px;
  font-size: 18px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #242422;
  border: 1px solid #d8d8d8;
  border-radius: 4px; padding: 0px 0px; min-height: 40px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | 左 | 右（37:63） |
| 2 | 140px | — | 2カラム・画像あり | — | 全面 |
| 3 | 1440px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 340px | — | 1カラム・画像あり | — | 全面 |
| 5 | 680px | `#f5f5f5` | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 400px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 640px | — | 1カラム・画像あり | 左 | — |
| 8 | 920px | — | 6カラム・画像あり | 中央 | — |
| 9 | 620px | `#f5f5f5` | 3カラム・画像あり | 中央 | — |
| 10 | 1240px | — | 2カラム・画像あり | 左 | 見出しの下 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f5f5`（3） / `#e6e6e6`（1） / `#242422`（1） / `#000000`（1）
- 見出しは左3／中央4。
- 2カラムの分け方は 37:63。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e6e6e6。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 25 箇所ある（16px×11、48px×8、24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 53枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 4:3（24枚）、16:9（5枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e6e6e6 }
.container{ width:min(100% - 56px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#242422; color:#ffffff; border-radius:4px;
  padding:0px 0px; min-height:36px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:15px; --section-y:32px; --gap:24px; }
  .container{ width:calc(100% - 56px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e6e6e6` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
