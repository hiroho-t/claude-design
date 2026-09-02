# H.P. Music School ふうのデザイン

- 出典: https://school.hpmusic.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／スクール･習い事･教材／音楽･芸能･映画･テレビ･配信

#f0f7fc の地に `#479cd7` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 1.5、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f0f7fc;
  --main: #479cd7;
  --ink: #ffffff;
  --ink-rev: #222222;
  --on: #479cd7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Barlow", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 840px;
  --read: 920px;
  --section-y: 40px;
  --gap: 24px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f0f7fc` | 85.5% |
| 主色 | `#479cd7` | 13.7% |

文字色は `#ffffff` / `#222222` / `#479cd7` / `#555555`。

- 主色 `#479cd7` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は`rgba(25, 44, 63, 0.08) 0px 16px 40px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 32 | 146 | 9 | 1 |
| `#43bdea` | 35 | 0 | 0 | 3 |
| `#f48fb7` | 33 | 0 | 0 | 1 |
| `#eebc0b` | 33 | 0 | 0 | 1 |
| `#479cd7` | 9 | 69 | 0 | 7 |
| `#222222` | 0 | 40 | 0 | 0 |
| `#555555` | 0 | 4 | 0 | 0 |

- `#479cd7` は文字色として69箇所で使うのが主。面としては9箇所しかないが、1枚が大きく画面の14%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eebc0b` | `#479cd7` |
| `#43bdea` | `#479cd7` |
| `#f48fb7` | `#479cd7` |
| `#ffffff` | `#479cd7` |

```css
.section{ --on:#479cd7 }                     /* 地の面 */
.section--main{ background:var(--main); color:#222222; --on:#222222 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#222222 }
.section--main .btn--fill{ background:#222222; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f0f7fc` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Barlow
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 240px | — |
| 見出し | 40px | 1.5 |
| 小見出し | 32px | 1.5 |
| リード | 24px | 1.5 |
| リード | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 1.5 |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 840px／読ませる段は 920px
- セクションの上下余白: 40 / 80 / 68 / 100px（基本は 40px）
- 並びの間隔: 8 / 16 / 24 / 40px
- 角丸: 16px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1000 / 960 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 13px / 行間 2.46 |
| 見出し | 240px | 24px / 行間 1.5 |
| セクションの上下余白 | 40px | 24px |
| 左右の余白 | — | 67px |
| 並びの間隔 | 24px | 8px |

- 本文は 14px → 13px、セクション余白は 40px → 24px（PCの60%）。
- 文字サイズの段は 24 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #479cd7; color: #ffffff;
  border-radius: 16px; padding: 8px 16px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffa723; color: #ffffff;
  border-radius: 16px; padding: 8px 16px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1060px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 2280px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1060px | — | 1カラム・画像あり | 右 | 右（52:48） |
| 5 | 1320px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#eebc0b`（16） / `#43bdea`（16） / `#f48fb7`（16） / `#ffffff`（7）
- 見出しは左1／中央2。
- 2カラムの分け方は 52:48。半分ずつには割らない。


## 部品

囲み（16箇所で同じ形）

```css
.card{
  background: #eebc0b;
  border-radius: 40px;
  padding: 0px 0px;
  box-shadow: rgba(25, 44, 63, 0.08) 0px 16px 40px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f0f7fc; color: #479cd7;
  border-radius: 8px; padding: 8px 16px; font-size: 18px;
}
```

## 丸いもの

角丸は 16px だが、**完全な円は別扱い**で 9 箇所ある（56px×7、24px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 52枚使っている
- 比率は 16:9（50枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#479cd7 }
.container{ width:min(100% - 134px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#222222; --on:#222222 }
.section--main .btn--fill{ background:#222222; color:var(--main) }
.card{ background:#eebc0b;
  border-radius:40px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:48px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 134px) }
}
```

## 守ること

やること

- 地色と主色 `#479cd7` の面を全幅で交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 40px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 40px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（16px と 40px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
