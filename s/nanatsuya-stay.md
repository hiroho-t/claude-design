# ななつやステイ ふうのデザイン

- 出典: https://nanatsuya-stay.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ホテル･旅館･温泉／スタジオ･レンタルスペース･シェアオフィス

白地に `#e5e2d7` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e5e2d7;
  --sub: #eeeeee;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #e5e2d7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 1008px;
  --read: 720px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 56.6% |
| 主色 | `#e5e2d7` | 17.5% |
| 副色 | `#eeeeee` | 12.1% |
| 差し色 | `#979797` | 8.7% |
| 差し色 | `#5c5550` | 4.3% |

文字色は `#ffffff` / `#000000` / `#979797` / `#333333`。

- 主色 `#e5e2d7` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 40 | 5 | 1 |
| `#979797` | 1 | 1 | 0 | 0 |
| `#eeeeee` | 3 | 0 | 0 | 0 |
| `#000000` | 1 | 24 | 3 | 1 |
| `#333333` | 0 | 1 | 0 | 0 |

- `#e5e2d7` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e5e2d7` |
| `#eeeeee` | `#e5e2d7` |
| `#979797` | `#e5e2d7` |

```css
.section{ --on:#e5e2d7 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: A1ゴシック R JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic Antique**、なければ Noto Sans JP
- 欧文: Montserrat
- ウェイトは 500 / 400 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 16px | 1.1 |
| 小見出し | 15px | — |
| 本文 | 14px | 1.8 |
| 補助 | 13px | — |
| 注記 | 12px | 1 |
| 注記 | 10px | 1 |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1008px／読ませる段は 720px
- セクションの上下余白: 52 / 152 / 200 / 100px（基本は 52px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 16px |
| 見出し | 24px | 10px / 行間 1 |
| セクションの上下余白 | 52px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 16px、セクション余白は 52px → 32px（PCの62%）。
- 文字サイズの段は 24 / 16 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%; padding: 0px 0px; min-height: 90px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.7px;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 128px; padding: 20px 40px; min-height: 62px;
  font-size: 18px; font-weight: 500; letter-spacing: 1.8px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border: 1px solid #000000;
  border-radius: 128px; padding: 0px 100px; min-height: 90px;
  font-size: 24px; font-weight: 400; letter-spacing: 2.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1640px | — | ヒーロー | — | — |
| 2 | 900px | — | 2カラム | 左 | — |
| 3 | 900px | — | 3カラム | — | — |
| 4 | 700px | — | 1カラム・文字だけ | — | — |
| 5 | 1560px | `#ffffff` | 2カラム・画像あり | — | 全面 |
| 6 | 780px | — | 1カラム・文字だけ | — | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#eeeeee`（3） / `#979797`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 50px;
  padding: 50px 60px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 10px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（352px×3、88px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 3枚使っている
- 比率は 21:9（1枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e5e2d7 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1640px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:50px; padding:50px 60px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:50%;
  padding:0px 0px; min-height:90px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e5e2d7` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 50px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
