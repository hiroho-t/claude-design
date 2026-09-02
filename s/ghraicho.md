# 乗鞍高原 温泉の宿 Raicho ふうのデザイン

- 出典: https://ghraicho.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ホテル･旅館･温泉／旅行･観光･遊び

#e4edf0 の地に `#a0b8b0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 2、セクション間 452px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #e4edf0;
  --main: #a0b8b0;
  --sub: #a0b8b0;
  --ink: #ffffff;
  --ink-rev: #032621;
  --on: #a0b8b0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "TsukuGoPr5-D", sans-serif;
  --font-en: "TsukuGoPr5-D", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 920px;
  --read: 856px;
  --section-y: 452px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#e4edf0` | 42.5% |
| 主色 | `#011014` | 13.4% |
| 副色 | `#a0b8b0` | 5.1% |
| 差し色 | `#576454` | 5.1% |
| 差し色 | `#bacfc6` | 4.9% |
| 差し色 | `#333936` | 4.5% |

文字色は `#ffffff` / `#032621` / `#011014` / `#000000`。

- 主色 `#a0b8b0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.2) 0px 2px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e4edf0` | 6 | 0 | 0 | 0 |
| `#011014` | 3 | 9 | 0 | 0 |
| `#728c93` | 9 | 0 | 5 | 0 |
| `#ffffff` | 9 | 69 | 1 | 8 |
| `#000000` | 2 | 2 | 0 | 0 |
| `#032621` | 0 | 39 | 1 | 0 |

- `#a0b8b0` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e4edf0`（地） | `#a0b8b0` |
| `#011014` | `#032621` |
| `#728c93` | `#032621` |

```css
.section{ --on:#a0b8b0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#032621; --on:#032621 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#032621 }
.section--main .btn--fill{ background:#032621; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: TsukuGoPr5-D
- 欧文: TsukuGoPr5-D
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 31px | 1.5 |
| 見出し | 21px | — |
| 小見出し | 17px | 1.5 |
| 本文 | 14px | 2 |
| 補助 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 920px／読ませる段は 856px
- セクションの上下余白: 452 / 92 / 144 / 40px（基本は 452px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1280 / 1024 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 15px / 行間 1.75 |
| 見出し | 31px | 21px / 行間 1.75 |
| セクションの上下余白 | 452px | 40px |
| 左右の余白 | — | 39px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 15px、セクション余白は 452px → 40px（PCの9%）。
- 文字サイズの段は 15 / 12 / 11 / 10 / 9px。

## ボタン

```css
.btn{
  background: #ffffff; color: #011014;
  border-radius: 0px; padding: 14px 28px; min-height: 57px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.413265px;
}
.btn-sub{
  background: #ffffff; color: #011014;
  border-radius: 0px; padding: 13px 13px; min-height: 51px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.413265px;
}
.btn-sub{
  background: #ffffff; color: #011014;
  border-radius: 0px; padding: 24px 0px; min-height: 72px;
  font-size: 12px; font-weight: 500; letter-spacing: 3.61607px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#e4edf0` | ヒーロー（画像） | 右 | 左（63:37） |
| 2 | 900px | `#e4edf0` | 1カラム・画像あり | 右 | 左（63:37） |
| 3 | 900px | `#e4edf0` | 1カラム・画像あり | 右 | 左（63:37） |
| 4 | 900px | `#e4edf0` | 1カラム・画像あり | 右 | 左（63:37） |
| 5 | 1320px | `#e4edf0` | 1カラム・画像あり | 左 | 右（23:77） |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e4edf0`（6） / `#011014`（2） / `#728c93`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 63:37 / 63:37 / 63:37 / 63:37 / 23:77。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（40px×2、16px×1、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 14枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（8枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a0b8b0 }
.container{ width:min(100% - 78px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#032621; --on:#032621 }
.section--main .btn--fill{ background:#032621; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#011014; border-radius:0px;
  padding:14px 28px; min-height:57px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:40px; }
  .container{ width:calc(100% - 78px) }
}
```

## 守ること

やること

- 地は `#e4edf0` のまま。主色 `#a0b8b0` は文字と小さな部品にだけ使う。
- 余白 452px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 12px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
