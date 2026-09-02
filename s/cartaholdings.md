# 株式会社CARTA HOLDINGS ふうのデザイン

- 出典: https://cartaholdings.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

#000000 の地に `#000000` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.5、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #000000;
  --main: #000000;
  --sub: #959791;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #000000;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "CezanneProN-M", sans-serif;
  --font-en: "CezanneProN-M", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 800px;
  --read: 600px;
  --section-y: 40px;
  --gap: 9px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#000000` | 36.9% |
| 主色 | `#f5f5f5` | 35.5% |
| 副色 | `#959791` | 8.5% |
| 差し色 | `#716f66` | 4.1% |
| 差し色 | `#808079` | 2.4% |
| 差し色 | `#4b473d` | 2.3% |

文字色は `#ffffff` / `#000000` / `#6d6d6d` / `#b2b2b2`。

- 主色 `#000000` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 8 | 37 | 0 | 3 |
| `#ffffff` | 7 | 28 | 0 | 2 |
| `#f5f5f5` | 2 | 0 | 0 | 0 |
| `#d9d9d9` | 0 | 0 | 1 | 0 |
| `#6d6d6d` | 0 | 3 | 3 | 0 |
| `#b2b2b2` | 0 | 10 | 0 | 0 |

- `#000000` は文字色として37箇所で使うのが主。面としては8箇所しかないが、1枚が大きく画面の37%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#000000` |
| `#000000`（地） | `#000000` |
| `#f5f5f5` | `#000000` |
| `#030303` | `#000000` |

```css
.section{ --on:#000000 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: CezanneProN-M
- 欧文: CezanneProN-M
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 60px | 1.4 |
| 見出し | 40px | 1.4 |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 800px／読ませる段は 600px
- セクションの上下余白: 40 / 152 / 52 / 100px（基本は 40px）
- 並びの間隔: 4 / 8 / 9 / 12px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 960 / 959 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 16px / 行間 1.5 |
| 見出し | 60px | 16px / 行間 1.5 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 33px |
| 並びの間隔 | 9px | 8px |

- 本文は 16px → 16px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #000000; color: #ffffff;
  border-radius: 9999px; padding: 20px 28px; min-height: 60px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 9999px; padding: 20px 28px; min-height: 60px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | 左 | 右（19:81） |
| 2 | 1120px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 540px | `#f5f5f5` | 1カラム・画像あり | 左 | — |
| 4 | 540px | `#f5f5f5` | 1カラム・画像あり | 左 | — |
| 5 | 1160px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#000000`（4） / `#f5f5f5`（2） / `#030303`（1）
- 見出しは左4／中央1。
- 2カラムの分け方は 19:81。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（32px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 70枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（42枚）、3:4（16枚）、1:1（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#000000 }
.container{ width:min(100% - 66px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#000000; color:#ffffff; border-radius:9999px;
  padding:20px 28px; min-height:60px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:16px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 66px) }
}
```

## 守ること

やること

- 地は `#000000` のまま。主色 `#000000` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
