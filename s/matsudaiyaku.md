# 松田医薬品の入浴剤・石鹸 ふうのデザイン

- 出典: https://matsudaiyaku.shop/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: ECサイト･オンラインショップ／生活用品･雑貨･インテリア･家具／美容･化粧品･コスメ･ケア用品

#fcfaf7 の地に `#082945` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fcfaf7;
  --main: #082945;
  --sub: #262412;
  --ink: #141414;
  --ink-rev: #ffffff;
  --on: #082945;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", sans-serif;
  --font-en: "Noto Serif JP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1380px;
  --read: 1236px;
  --section-y: 120px;
  --gap: 27px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fcfaf7` | 30.6% |
| 主色 | `#082945` | 18.7% |
| 副色 | `#262412` | 12.3% |
| 差し色 | `#03172f` | 8.5% |
| 差し色 | `#4f3b19` | 7.8% |
| 差し色 | `#b06e15` | 6.3% |

文字色は `#141414` / `#ffffff` / `#000000` / `#005f98`。

- 主色 `#082945` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は`rgba(0, 0, 0, 0) 0px 0px 0px 2px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fcfaf7` | 20 | 15 | 0 | 5 |
| `#e9e3d8` | 3 | 0 | 10 | 1 |
| `#141414` | 8 | 109 | 0 | 8 |
| `#c84f4f` | 2 | 0 | 0 | 2 |
| `#f1ece4` | 6 | 0 | 0 | 2 |
| `#000000` | 0 | 20 | 4 | 0 |
| `#005f98` | 0 | 2 | 0 | 0 |

- `#082945` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#082945` |
| `#fcfaf7`（地） | `#082945` |
| `#e9e3d8` | `#082945` |

```css
.section{ --on:#082945 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#fcfaf7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic Antique
- 欧文: Noto Serif JP
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.3 |
| 見出し | 32px | 1.3 |
| 小見出し | 24px | 1.3 |
| リード | 21px | — |
| リード | 20px | — |
| リード | 18px | — |
| リード | 17px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1380px／読ませる段は 1236px
- セクションの上下余白: 120 / 140 / 52 / 160px（基本は 120px）
- 並びの間隔: 8 / 20 / 27 / 40px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 990 / 989 / 959 / 750 / 749px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 17px / 行間 1.4 |
| 見出し | 36px | 25px / 行間 1.3 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 27px | 4px |

- 本文は 16px → 17px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 17 / 16 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: #141414; color: #ffffff;
  border-radius: 4px; padding: 0px 0px; min-height: 58px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.6px;
}
.btn-sub{
  background: #c84f4f; color: #ffffff;
  border-radius: 9px; padding: 0px 30px; min-height: 55px;
  font-size: 15px; font-weight: 400; letter-spacing: 1px;
}
.btn-sub{
  background: #ffffff; color: #005f98;
  border: 1px solid #e9e3d8;
  border-radius: 4px; padding: 6px 6px; min-height: 30px;
  font-size: 12px; font-weight: 500; letter-spacing: 1.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 580px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1600px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 140px | — | 帯・区切り | — | — |
| 4 | 980px | — | 1カラム・文字だけ | 右 | — |
| 5 | 5240px | — | 1カラム・画像あり | 中央 | 左（9:91） |
| 6 | 1440px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 660px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1180px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 9 | 560px | — | 2カラム | — | — |
| 10 | 860px | — | 1カラム・文字だけ | 中央 | — |
| 11 | 520px | — | 4カラム | 中央 | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（6） / `#fcfaf7`（4） / `#e9e3d8`（2）
- 見出しは左1／中央6。
- 2カラムの分け方は 9:91。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 0px;
  padding: 8px 10px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #005f98;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 6px 6px; font-size: 12px;
}
```

## 画像

- 16枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、1:1（2枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#082945 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:580px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:8px 10px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#141414; color:#ffffff; border-radius:4px;
  padding:0px 0px; min-height:58px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:750px){
  :root{ --fs-body:17px; --section-y:40px; --gap:4px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#082945` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 120px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
