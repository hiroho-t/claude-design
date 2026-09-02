# 株式会社出前館 採用情報 ふうのデザイン

- 出典: https://recruit.demae-can.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#da3734` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #da3734;
  --sub: #da3734;
  --ink: #000000;
  --ink-rev: #333333;
  --on: #da3734;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "LINE Seed JP", sans-serif;
  --font-en: "LINE Seed JP", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1220px;
  --read: 920px;
  --section-y: 152px;
  --gap: 24px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 89.2% |
| 主色 | `#e8e8e9` | 2.1% |
| 副色 | `#da3734` | 1.6% |

文字色は `#000000` / `#333333` / `#212121` / `#ffffff`。

- 主色 `#da3734` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 0px 2px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 27 | 14 | 0 | 0 |
| `#f5f5f5` | 10 | 0 | 0 | 6 |
| `#da3734` | 42 | 5 | 2 | 0 |
| `#000000` | 1 | 13 | 0 | 0 |
| `#202020` | 0 | 17 | 0 | 0 |
| `#333333` | 0 | 28 | 0 | 0 |

- `#da3734` は面として42箇所、文字として5箇所。塗りが主役。ボタンの地には使っていない。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#da3734` |
| `#f5f5f5` | `#da3734` |
| `#da3734`（主色） | `#333333` |

```css
.section{ --on:#da3734 }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: LINE Seed JP
- 欧文: LINE Seed JP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.75 |
| 見出し | 35px | 1.7 |
| 小見出し | 22px | — |
| リード | 20px | — |
| リード | 18px | 1.5 |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1220px／読ませる段は 920px
- セクションの上下余白: 152 / 40 / 120 / 72px（基本は 152px）
- 並びの間隔: 8 / 16 / 24 / 40px
- 角丸: 16px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1020 / 768 / 767 / 500px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2.3 |
| 見出し | 48px | 32px / 行間 1.75 |
| セクションの上下余白 | 152px | 56px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 24px | 16px |

- 本文は 16px → 14px、セクション余白は 152px → 56px（PCの37%）。
- 文字サイズの段は 24 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #f5f5f5; color: #333333;
  border-radius: 4px; padding: 0px 16px; min-height: 80px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #212121;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 1380px | — | 3カラム・画像あり | 右 | 見出しの下 |
| 3 | 940px | — | 3カラム・画像あり | — | 全面 |
| 4 | 1520px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1060px | `#f5f5f5` | 6カラム・画像あり | 中央 | 右（46:54） |
| 6 | 1080px | `#ffffff` | 3カラム・画像あり | 中央 | 右（32:68） |
| 7 | 760px | — | 2カラム・画像あり | 左 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（24） / `#f5f5f5`（4） / `#da3734`（2）
- 見出しは左2／中央3。
- 2カラムの分け方は 46:54 / 32:68。半分ずつには割らない。


## 部品

囲み（18箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 16px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 16px だが、**完全な円は別扱い**で 38 箇所ある（24px×35、32px×2、16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 36枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（23枚）、16:9（4枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#da3734 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#ffffff;
  border-radius:16px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f5f5f5; color:#333333; border-radius:4px;
  padding:0px 16px; min-height:80px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:56px; --gap:16px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#da3734` は文字と小さな部品にだけ使う。
- 余白 152px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（16px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
