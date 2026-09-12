# 香りで睡眠をケアするアロマシリーズ ふうのデザイン

- 出典: https://mujuu.jp/
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／美容･化粧品･コスメ･ケア用品／レスポンシブ

白地に `#bbcbad` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #bbcbad;
  --sub: #dbdbda;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #bbcbad;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Old Mincho", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 580px;
  --read: 720px;
  --section-y: 80px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.4% |
| 主色 | `#2c423b` | 13% |
| 副色 | `#dbdbda` | 7.8% |
| 差し色 | `#bbcbad` | 1.9% |
| 差し色 | `#0a0d0a` | 1.9% |

文字色は `#000000` / `#ffffff` / `#005409` / `#333333`。

- 主色 `#bbcbad` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 12 | 44 | 0 | 7 |
| `#014b29` | 17 | 0 | 0 | 0 |
| `#344842` | 2 | 0 | 0 | 0 |
| `#2c423b` | 1 | 0 | 0 | 0 |
| `#d9d9d9` | 6 | 0 | 0 | 0 |
| `#000000` | 0 | 58 | 39 | 0 |
| `#005409` | 0 | 19 | 0 | 0 |
| `#333333` | 0 | 2 | 0 | 0 |

- `#bbcbad` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#014b29` | `#ffffff` |
| `#d9d9d9` | `#bbcbad` |
| `#ffffff`（地） | `#bbcbad` |
| `#344842` | `#ffffff` |

```css
.section{ --on:#bbcbad }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Old Mincho
- 欧文: Inter
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 24px | — |
| 小見出し | 20px | — |
| 本文 | 16px | — |
| 補助 | 14px | — |
| 注記 | 12px | — |


- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 580px／読ませる段は 720px
- セクションの上下余白: 80 / 100 / 60 / 96px（基本は 80px）
- 並びの間隔: 8 / 16 / 24 / 40px
- 角丸: 0px が基本。大きな面だけ 24px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1180 / 840 / 690 / 360px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 1.5 |
| セクションの上下余白 | 80px | 40px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 32px |

- 本文は 16px → 14px、セクション余白は 80px → 40px（PCの50%）。
- 文字サイズの段は 23 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 24px; padding: 12px 24px; min-height: 46px;
  font-size: 24px; font-weight: 700; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 46px;
  font-size: 24px; font-weight: 700; letter-spacing: 1.2px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #000000;
  border-radius: 24px; padding: 12px 24px; min-height: 46px;
  font-size: 24px; font-weight: 700; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 920px | — | ヒーロー（画像） | — | 全面 |
| 2 | 400px | — | 1カラム・文字だけ | — | — |
| 3 | 1240px | — | 2カラム・画像あり | — | 全面 |
| 4 | 360px | — | 4カラム・画像あり | — | 全面 |
| 5 | 400px | — | 1カラム・文字だけ | — | — |
| 6 | 500px | — | 2カラム・画像あり | — | 全面 |
| 7 | 500px | — | 1カラム・画像あり | — | 全面 |
| 8 | 400px | — | 1カラム・文字だけ | — | — |
| 9 | 1460px | `#ffffff` | 3カラム | — | — |
| 10 | 460px | — | 2カラム | — | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#014b29`（17） / `#d9d9d9`（6） / `#ffffff`（4） / `#344842`（2）


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #d9d9d9;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 10枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（5枚）、4:3（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#bbcbad }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:920px; display:grid; align-content:center }

.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#d9d9d9; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:24px;
  padding:12px 24px; min-height:46px;
  font-size:24px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:40px; --gap:32px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#bbcbad` は文字と小さな部品にだけ使う。
- 余白 80px と行間 null を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 24px 以外）を混ぜない。
