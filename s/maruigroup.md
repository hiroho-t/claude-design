# 株式会社 丸井グループ MARUI GROUP CO., LTD. ふうのデザイン

- 出典: https://www.0101maruigroup.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

#acdac7 の地に `#acdac7` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 1、セクション間 104px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #acdac7;
  --main: #acdac7;
  --sub: #dadedc;
  --ink: #52645a;
  --ink-rev: #ffffff;
  --on: #acdac7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 15px;
  --lh-body: 1;
  --container: 788px;
  --read: 964px;
  --section-y: 104px;
  --gap: 8px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#acdac7` | 57.5% |
| 主色 | `#ffffff` | 33.7% |
| 副色 | `#dadedc` | 3.6% |

文字色は `#52645a` / `#ffffff` / `#696969` / `#4599b1`。

- 主色 `#acdac7` は差し色ではなく**面**で使う。画面の58%を占めている。
- 影は`rgba(101, 101, 101, 0.15) 5px 5px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 66 | 0 | 0 |
| `#f7f7f7` | 5 | 0 | 0 | 3 |
| `#f0f0f0` | 9 | 0 | 3 | 0 |
| `#52645a` | 13 | 102 | 0 | 2 |
| `#5b6e63` | 2 | 0 | 0 | 2 |
| `#696969` | 0 | 1 | 0 | 0 |
| `#4599b1` | 0 | 5 | 5 | 0 |

- `#acdac7` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#acdac7` |
| `#f7f7f7` | `#acdac7` |
| `#f0f0f0` | `#acdac7` |

```css
.section{ --on:#acdac7 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 23px | — |
| 見出し | 21px | 1.65 |
| 本文 | 15px | 1.5 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 15px・行間 1。

## レイアウト

- コンテンツ幅: 最大 788px／読ませる段は 964px
- セクションの上下余白: 104 / 60 / 136 / 56px（基本は 104px）
- 並びの間隔: 3 / 6 / 8 / 21px
- 角丸: 0px が基本。大きな面だけ 21px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1200 / 821 / 750 / 0px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1 | 17px / 行間 1.44 |
| 見出し | 23px | 17px / 行間 1.44 |
| セクションの上下余白 | 104px | 32px |
| 左右の余白 | — | 19px |
| 並びの間隔 | 8px | 6px |

- 本文は 15px → 17px、セクション余白は 104px → 32px（PCの31%）。
- 文字サイズの段は 25 / 17 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: #f7f7f7; color: #52645a;
  border-radius: 0px; padding: 30px 0px; min-height: 44px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #5b6e63; color: #ffffff;
  border-radius: 9999px; padding: 15px 16px; min-height: 46px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #52645a; color: #ffffff;
  border-radius: 9999px; padding: 11px 16px; min-height: 34px;
  font-size: 11px; font-weight: 400; letter-spacing: 0.105417px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1040px | — | ヒーロー（画像） | — | 全面 |
| 2 | 800px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 880px | — | 1カラム・画像あり | 右 | 全幅 |
| 4 | 1260px | `#ffffff` | 3カラム・画像あり | 右 | 左（39:61） |
| 5 | 820px | — | 1カラム・画像あり | 中央 | — |
| 6 | 460px | — | 6カラム・画像あり | — | 全面 |
| 7 | 720px | — | 1カラム・画像あり | 右 | 全幅 |
| 8 | 1360px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 9 | 1040px | — | 1カラム・画像あり | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#f7f7f7`（1） / `#f0f0f0`（1）
- 見出しは左0／中央3。
- 2カラムの分け方は 39:61。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #4599b1;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 9px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 16 箇所ある（32px×9、56px×6、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 26枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:4（11枚）、16:9（10枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#acdac7 }
.container{ width:min(100% - 38px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1040px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f7f7f7; color:#52645a; border-radius:0px;
  padding:30px 0px; min-height:44px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:821px){
  :root{ --fs-body:17px; --section-y:32px; --gap:6px; }
  .container{ width:calc(100% - 38px) }
}
```

## 守ること

やること

- 地色と主色 `#acdac7` の面を全幅で交互に置く。主色は画面の58%を占めるだけ使う。
- 余白 104px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 21px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
