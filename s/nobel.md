# ノーベル製菓株式会社 ふうのデザイン

- 出典: https://www.nobel.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／料理･食べ物･飲み物･食品製造／レスポンシブ

#fff7eb の地に `#f7ccd0` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 2、セクション間 36px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fff7eb;
  --main: #f7ccd0;
  --sub: #dd0014;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #f7ccd0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "M PLUS Rounded 1c", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1104px;
  --read: 888px;
  --section-y: 36px;
  --gap: 16px;
  --radius: 22px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fff7eb` | 72.6% |
| 主色 | `#f7ccd0` | 17.4% |
| 副色 | `#dd0014` | 7.8% |

文字色は `#333333` / `#ffffff` / `#848484` / `#e60013`。

- 主色 `#f7ccd0` は差し色ではなく**面**で使う。画面の17%を占めている。
- 影は`rgb(235, 211, 192) 2px 2px 6px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fff7eb` | 2 | 0 | 0 | 0 |
| `#ffffff` | 27 | 40 | 4 | 5 |
| `#d80012` | 1 | 0 | 0 | 0 |
| `#e60013` | 19 | 15 | 14 | 8 |
| `#333333` | 0 | 56 | 0 | 0 |
| `#848484` | 0 | 31 | 0 | 0 |

- `#f7ccd0` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#f7ccd0` |
| `#e60013` | `#ffffff` |
| `#fff7eb`（地） | `#f7ccd0` |
| `#d80012` | `#ffffff` |

```css
.section{ --on:#f7ccd0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: M PLUS Rounded 1c
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 37px | 1.5 |
| 見出し | 19px | — |
| 小見出し | 18px | — |
| リード | 17px | — |
| 本文 | 16px | 2 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1104px／読ませる段は 888px
- セクションの上下余白: 36 / 112 / 160 / 48px（基本は 36px）
- 並びの間隔: 7 / 10 / 16 / 17px
- 角丸: 22px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 640 / 600 / 567 / 480 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 2 |
| 見出し | 37px | 30px / 行間 1.5 |
| セクションの上下余白 | 36px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 7px |

- 本文は 16px → 13px、セクション余白は 36px → 60px（PCの167%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 52px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.624327px;
}
.btn-sub{
  background: #e60013; color: #ffffff;
  border: 1px solid #e60013;
  border-radius: 1440px; padding: 9px 17px; min-height: 52px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.624327px;
}
.btn-sub{
  background: transparent; color: #e60013;
  border-radius: 0px; padding: 0px 0px; min-height: 29px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.624327px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#e60013` | ヒーロー（画像） | — | 全幅 |
| 2 | 940px | — | 1カラム・画像あり | — | 全面 |
| 3 | 2020px | `#fff7eb` | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1480px | `#d80012` | 5カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1620px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 3000px | `#fff7eb` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#e60013`（2） / `#fff7eb`（2） / `#d80012`（1）
- 見出しは左0／中央4。


## 部品

囲み（11箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 22px;
  padding: 0px 0px;
  box-shadow: rgb(235, 211, 192) 2px 2px 6px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #e60013;
  border-radius: 999px; padding: 6px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 22px だが、**完全な円は別扱い**で 26 箇所ある（48px×9、16px×6、32px×6）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 55枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（28枚）、1:1（10枚）、2:3（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f7ccd0 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent;
  border-radius:22px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:52px;
  font-size:17px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:13px; --section-y:60px; --gap:7px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#f7ccd0` の面を全幅で交互に置く。主色は画面の17%を占めるだけ使う。
- 余白 36px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 22px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（22px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
