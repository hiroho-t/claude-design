# 株式会社ビーワークス ふうのデザイン

- 出典: https://beeworks.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#ff8400` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 18px・行間 1.6、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ff8400;
  --sub: #ff8400;
  --ink: #000000;
  --ink-rev: #677697;
  --on: #ff8400;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "__Noto_Sans_JP_e33d59", sans-serif;
  --font-en: "__Noto_Sans_JP_e33d59", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.6;
  --container: 1164px;
  --read: 660px;
  --section-y: 120px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 54.7% |
| 主色 | `#e9ebf2` | 21.5% |
| 副色 | `#ff8400` | 5.5% |
| 差し色 | `#0d172a` | 3.4% |
| 差し色 | `#ccd1d5` | 2.7% |
| 差し色 | `#414a52` | 2.3% |

文字色は `#000000` / `#677697` / `#ffffff` / `#060812`。

- 主色 `#ff8400` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e9ebf2` | 14 | 0 | 2 | 1 |
| `#e1e2e8` | 1 | 0 | 0 | 0 |
| `#ffffff` | 8 | 8 | 0 | 2 |
| `#ff8400` | 8 | 1 | 0 | 0 |
| `#0d172a` | 3 | 0 | 2 | 2 |
| `#000000` | 0 | 197 | 0 | 0 |
| `#677697` | 0 | 145 | 0 | 0 |
| `#060812` | 10 | 1 | 0 | 0 |

- `#ff8400` は面として8箇所、文字として1箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e9ebf2` | `#ff8400` |
| `#ff8400`（主色） | `#ff8400` |
| `#ffffff`（地） | `#ff8400` |
| `#e1e2e8` | `#ff8400` |

```css
.section{ --on:#ff8400 }                     /* 地の面 */
.section--main{ background:var(--main); color:#677697; --on:#677697 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#677697 }
.section--main .btn--fill{ background:#677697; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: __Noto_Sans_JP_e33d59
- 欧文: __Noto_Sans_JP_e33d59
- ウェイトは 650 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1.5 |
| 本文 | 18px | 1.6 |
| 補助 | 16px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 18px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1164px／読ませる段は 660px
- セクションの上下余白: 120 / 60 / 72 / 80px（基本は 120px）
- 並びの間隔: 7 / 16 / 20 / 48px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 896 / 550 / 426 / 425 / 400px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.6 | 17px / 行間 1.6 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 20px | 32px |

- 本文は 18px → 17px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 17 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 2px solid #c1c7d5;
  border-radius: 9999px; padding: 10px 10px; min-height: 64px;
  font-size: 16px; font-weight: 650; letter-spacing: 1.28px;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 2px solid #c1c7d5;
  border-radius: 9999px; padding: 8px 12px; min-height: 52px;
  font-size: 14px; font-weight: 650; letter-spacing: 1.12px;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 2px solid #c1c7d5;
  border-radius: 9999px; padding: 10px 20px; min-height: 46px;
  font-size: 15px; font-weight: 650; letter-spacing: 1.16px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 900px | — | 1カラム・画像あり | 右 | 右（29:71） |
| 3 | 860px | `#e9ebf2` | 5カラム・画像あり | 左 | 右（28:72） |
| 4 | 1080px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 620px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 860px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 7 | 980px | — | 1カラム・画像あり | 中央 | 右（30:70） |
| 8 | 360px | `#e9ebf2` | 1カラム・画像あり | 左 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e9ebf2`（4） / `#ff8400`（2） / `#ffffff`（2） / `#e1e2e8`（1）
- 見出しは左5／中央1。
- 2カラムの分け方は 29:71 / 28:72 / 30:70。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 73 箇所ある（120px×58、40px×10、32px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 59枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（51枚）、16:9（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff8400 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#677697; --on:#677697 }
.section--main .btn--fill{ background:#677697; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:9999px;
  padding:10px 10px; min-height:64px;
  font-size:16px; font-weight:650 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:896px){
  :root{ --fs-body:17px; --section-y:32px; --gap:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ff8400` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
