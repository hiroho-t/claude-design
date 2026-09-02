# 株式会社リクルート ふうのデザイン

- 出典: https://www.recruit.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#0065bd` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 20px・行間 1.5、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0065bd;
  --sub: #909896;
  --ink: #2d3133;
  --ink-rev: #0065bd;
  --on: #0065bd;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Tazugane Gothic", sans-serif;
  --font-en: "Tazugane Gothic", sans-serif;
  --fs-body: 20px;
  --lh-body: 1.5;
  --container: 1168px;
  --read: 696px;
  --section-y: 120px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.2% |
| 主色 | `#2d3133` | 5.2% |
| 副色 | `#909896` | 2.8% |
| 差し色 | `#e1e5e7` | 2.5% |
| 差し色 | `#807c73` | 2.3% |
| 差し色 | `#ccccca` | 2.1% |

文字色は `#2d3133` / `#0065bd` / `#000000` / `#646d76`。

- 主色 `#0065bd` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 6 | 0 | 0 |
| `#f3f5fa` | 4 | 0 | 0 | 0 |
| `#2d3133` | 1 | 79 | 0 | 0 |
| `#0065bd` | 1 | 12 | 0 | 1 |
| `#838484` | 0 | 0 | 3 | 0 |
| `#000000` | 0 | 4 | 0 | 0 |
| `#646d76` | 0 | 17 | 0 | 0 |

- `#0065bd` は文字色として12箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0065bd` |
| `#f3f5fa` | `#0065bd` |
| `#2d3133` | `#0065bd` |

```css
.section{ --on:#0065bd }                     /* 地の面 */
.section--main{ background:var(--main); color:#0065bd; --on:#0065bd }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0065bd }
.section--main .btn--fill{ background:#0065bd; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#dfe2e5`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Tazugane Gothic
- 欧文: Tazugane Gothic
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.5 |
| 見出し | 30px | 1.5 |
| 本文 | 20px | 1.5 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 20px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1168px／読ませる段は 696px
- セクションの上下余白: 120 / 80 / 176 / 32px（基本は 120px）
- 並びの間隔: 4 / 5 / 12 / 16px
- 角丸: 0px が基本。大きな面だけ 17px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1767 / 1170 / 1023 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 1.5 | 12px / 行間 1.55 |
| 見出し | 36px | 24px / 行間 1.5 |
| セクションの上下余白 | 120px | 44px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 12px | 8px |

- 本文は 20px → 12px、セクション余白は 120px → 44px（PCの37%）。
- 文字サイズの段は 18 / 16 / 15 / 13 / 12px。

## ボタン

```css
.btn{
  background: #0065bd; color: #ffffff;
  border-radius: 17px; padding: 0px 0px; min-height: 26px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 920px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 860px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 540px | `#f3f5fa` | 1カラム・文字だけ | 左 | — |
| 5 | 1100px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 580px | `#f3f5fa` | 1カラム・画像あり | 中央 | — |
| 7 | 580px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#f3f5fa`（3） / `#2d3133`（1）
- 見出しは左1／中央6。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dfe2e5。面によって入れ替える */
  border-radius: 0px;
  padding: 40px 40px;
}
```

ラベル・タグ

```css
.chip{
  background: #f3f5fa; color: #646d76;
  border-radius: 4px; padding: 1px 8px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（32px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 29枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（23枚）、21:9（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0065bd }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0065bd; --on:#0065bd }
.section--main .btn--fill{ background:#0065bd; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#0065bd; color:#ffffff; border-radius:17px;
  padding:0px 0px; min-height:26px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:44px; --gap:8px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0065bd` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 17px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
