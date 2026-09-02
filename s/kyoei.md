# 株式会社 協栄 ふうのデザイン

- 出典: https://www.kyoei-corp.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／ビルメンテナンス･清掃･警備／レスポンシブ

白地に `#fce7de` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 17px・行間 2、セクション間 200px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fce7de;
  --sub: #2d4d59;
  --ink: #4b5158;
  --ink-rev: #ffffff;
  --on: #fce7de;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Overpass", sans-serif;
  --fs-body: 17px;
  --lh-body: 2;
  --container: 1320px;
  --read: 600px;
  --section-y: 200px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.5% |
| 主色 | `#fce7de` | 6.7% |
| 副色 | `#2d4d59` | 2.3% |
| 差し色 | `#808186` | 2.2% |

文字色は `#4b5158` / `#ffffff` / `#909598` / `#ec4e4e`。

- 主色 `#fce7de` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.16) 0px 10px 50px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 7 | 9 | 1 | 2 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#4b5158` | 0 | 99 | 5 | 0 |
| `#909598` | 0 | 26 | 0 | 0 |
| `#ec4e4e` | 0 | 7 | 0 | 0 |

- `#fce7de` は

## 文字

- 和文: Noto Sans JP
- 欧文: Overpass
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.5 |
| 見出し | 18px | — |
| 本文 | 17px | 2 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1320px／読ませる段は 600px
- セクションの上下余白: 200 / 100 / 60 / 120px（基本は 200px）
- 並びの間隔: 20 / 30px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1470 / 1340 / 768 / 767 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2 | 14px / 行間 2 |
| セクションの上下余白 | 200px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 30px | 12px |

- 本文は 17px → 14px、セクション余白は 200px → 40px（PCの20%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #4b5158;
  border-radius: 0px; padding: 5px 50px; min-height: 50px;
  font-size: 20px; font-weight: 400; letter-spacing: 0.85px;
}
.btn-sub{
  background: transparent; color: #4b5158;
  border: 1px solid #4b5158;
  border-radius: 0px; padding: 10px 52px; min-height: 90px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.85px;
}
.btn-sub{
  background: transparent; color: #4b5158;
  border: 1px solid #4b5158;
  border-radius: 0px; padding: 10px 50px; min-height: 70px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.85px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 右（48:52） |
| 2 | 4680px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 1820px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 920px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 800px | — | 1カラム・文字だけ | 左 | — |
| 6 | 1600px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2）
- 見出しは左5／中央1。
- 2カラムの分け方は 48:52。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 0px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 25px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 30枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（16枚）、16:9（8枚）、21:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fce7de }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.card{ background:transparent;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#4b5158; border-radius:0px;
  padding:5px 50px; min-height:50px;
  font-size:20px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:12px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#fce7de` は文字と小さな部品にだけ使う。
- 余白 200px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
