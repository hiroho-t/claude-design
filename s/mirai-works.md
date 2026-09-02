# みらいワークス ふうのデザイン

- 出典: https://mirai-works.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／サービス･アプリ･ツール･SaaS／求人･マッチング･転職･人材ビジネス

#f5f2f2 の地に `#bc0900` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.5、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f2f2;
  --main: #bc0900;
  --ink: #2c2c2c;
  --ink-rev: #ffffff;
  --on: #bc0900;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans Japanese", sans-serif;
  --font-en: "Noto Sans Japanese", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 760px;
  --read: 568px;
  --section-y: 56px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f2f2` | 82.9% |
| 主色 | `#2c2c2c` | 15.5% |

文字色は `#2c2c2c` / `#ffffff` / `#bc0900` / `#000000`。

- 主色 `#bc0900` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#2c2c2c` | 1 | 36 | 0 | 0 |
| `#ffffff` | 3 | 14 | 0 | 0 |
| `#f5f2f2` | 1 | 0 | 0 | 0 |
| `#dbdbdb` | 0 | 0 | 3 | 0 |
| `#bc0900` | 0 | 16 | 0 | 0 |
| `#000000` | 0 | 3 | 0 | 0 |

- `#bc0900` は文字色として16箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#bc0900` |
| `#2c2c2c` | `#ffffff` |

```css
.section{ --on:#bc0900 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e2dfdf`。ただしその囲みは `#f5f2f2` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans Japanese
- 欧文: Noto Sans Japanese
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 50px | 1.3 |
| 見出し | 24px | — |
| 小見出し | 21px | 1.5 |
| 本文 | 14px | 1.75 |
| 補助 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 760px／読ませる段は 568px
- セクションの上下余白: 56 / 84px（基本は 56px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 980 / 979 / 960 / 959 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 14px / 行間 1.5 |
| 見出し | 50px | 21px / 行間 1.5 |
| セクションの上下余白 | 56px | 80px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 56px → 80px（PCの143%）。
- 文字サイズの段は 40 / 20 / 14 / 12 / 10px。

## ボタン

```css

```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 3960px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 780px | — | 1カラム・画像あり | 中央 | — |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#2c2c2c`（1）
- 見出しは左0／中央2。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e2dfdf。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 5枚使っている
- 比率は 1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#bc0900 }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:3960px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:374px){
  :root{ --fs-body:14px; --section-y:80px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地は `#f5f2f2` のまま。主色 `#bc0900` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
