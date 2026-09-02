# LINEヤフー株式会社 ふうのデザイン

- 出典: https://www.lycorp.co.jp/ja/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#b8cbdd` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.24、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b8cbdd;
  --sub: #3b3b3f;
  --ink: #2e2e2e;
  --ink-rev: #000000;
  --on: #b8cbdd;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "LINESeedJP", sans-serif;
  --font-en: "LINESeedJP", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.24;
  --container: 560px;
  --read: 1104px;
  --section-y: 40px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 56.1% |
| 主色 | `#ececec` | 15.9% |
| 副色 | `#3b3b3f` | 8.1% |
| 差し色 | `#b8cbdd` | 6.3% |
| 差し色 | `#bf9cbe` | 4.8% |
| 差し色 | `#292c2f` | 4.3% |

文字色は `#2e2e2e` / `#000000` / `#ffffff` / `#959595`。

- 主色 `#b8cbdd` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 25px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f4f4f4` | 17 | 0 | 12 | 0 |
| `#ffffff` | 38 | 8 | 0 | 2 |
| `#ececec` | 1 | 0 | 1 | 0 |
| `#353a3f` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 26 | 0 | 0 |
| `#2e2e2e` | 4 | 309 | 2 | 3 |
| `#959595` | 0 | 1 | 0 | 0 |

- `#b8cbdd` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#b8cbdd` |
| `#fdfdfd` | `#b8cbdd` |
| `#000000` | `#000000` |
| `#f4f4f4` | `#b8cbdd` |

```css
.section{ --on:#b8cbdd }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#353a3f` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: LINESeedJP
- 欧文: LINESeedJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1 |
| 見出し | 36px | 1.3 |
| 小見出し | 32px | 1.4 |
| リード | 24px | — |
| リード | 20px | 1.5 |
| リード | 18px | — |
| リード | 16px | 1.6 |

- 本文は 14px・行間 1.24。

## レイアウト

- コンテンツ幅: 最大 560px／読ませる段は 1104px
- セクションの上下余白: 40 / 52 / 120 / 180px（基本は 40px）
- 並びの間隔: 15 / 20 / 40 / 49px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 768 / 767 / 699 / 559px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.24 | 16px / 行間 1.5 |
| 見出し | 38px | 23px / 行間 1 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 40px | 20px |

- 本文は 14px → 16px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 24 / 16 / 15 / 13 / 12px。

## ボタン

```css
.btn{
  background: #2e2e2e; color: #ffffff;
  border: 1px solid #2e2e2e;
  border-radius: 8px; padding: 15px 50px; min-height: 49px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #2e2e2e;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 12px; font-weight: 700; letter-spacing: -0.24px;
}
.btn-sub{
  background: #ffffff; color: #2e2e2e;
  border: 1px solid #d0d0d0;
  border-radius: 4px; padding: 0px 16px; min-height: 32px;
  font-size: 12px; font-weight: 700; letter-spacing: -0.24px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | — | 全面 |
| 2 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 600px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 600px | — | 1カラム・画像あり | — | 全幅 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（22） / `#fdfdfd`（4） / `#000000`（1） / `#f4f4f4`（1）


## 部品

囲み（16箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 26px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（48px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 67枚使っている。うち 15 枚は画面いっぱいに置く
- 比率は 16:9（26枚）、21:9（22枚）、3:2（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b8cbdd }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:32px 26px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#2e2e2e; color:#ffffff; border-radius:8px;
  padding:15px 50px; min-height:49px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b8cbdd` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.24 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.24 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
