# 新規事業の伴走支援 ふうのデザイン

- 出典: https://alphadrive.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／企画･開発･マーケティング･コンサルティング／レスポンシブ

#f1f3f5 の地に `#005abe` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.5、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f1f3f5;
  --main: #005abe;
  --sub: #d4d2d3;
  --ink: #000000;
  --ink-rev: #919699;
  --on: #005abe;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "A+mfCv-AXIS Font ベーシック R ProN", sans-serif;
  --font-en: "nimbus-sans", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.5;
  --container: 636px;
  --read: 564px;
  --section-y: 40px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f1f3f5` | 86.1% |
| 主色 | `#005abe` | 4.6% |
| 副色 | `#d4d2d3` | 3.2% |
| 差し色 | `#a9b4c0` | 3.1% |
| 差し色 | `#2f3b4e` | 1.6% |
| 差し色 | `#5d768e` | 1.5% |

文字色は `#000000` / `#919699` / `#ffffff` / `#005abe`。

- 主色 `#005abe` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 193 | 39 | 0 | 2 |
| `#f1f3f5` | 11 | 0 | 0 | 8 |
| `#005abe` | 28 | 2 | 0 | 6 |
| `#000000` | 1 | 454 | 5 | 0 |
| `#919699` | 0 | 986 | 0 | 0 |

- `#005abe` は面として28箇所、文字として2箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#005abe`（主色） | `#919699` |
| `#000000` | `#919699` |
| `#f1f3f5`（地） | `#005abe` |

```css
.section{ --on:#005abe }                     /* 地の面 */
.section--main{ background:var(--main); color:#919699; --on:#919699 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#919699 }
.section--main .btn--fill{ background:#919699; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#000000` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: A+mfCv-AXIS Font ベーシック R ProN
- 欧文: nimbus-sans
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 240px | — |
| 見出し | 80px | 1 |
| 小見出し | 18px | 1.5 |
| リード | 16px | — |
| リード | 15px | 1.5 |
| 本文 | 13px | 1.5 |
| 補助 | 12px | — |

- 本文は 13px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 636px／読ませる段は 564px
- セクションの上下余白: 40 / 200 / 120 / 136px（基本は 40px）
- 並びの間隔: 2 / 12 / 20 / 40px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1279 / 1025 / 1024 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.5 | 11px / 行間 1.5 |
| 見出し | 240px | 48px / 行間 1 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 20px | 20px |

- 本文は 13px → 11px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #005abe; color: #ffffff;
  border-radius: 32px; padding: 0px 28px; min-height: 64px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 48px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 160px | — | 帯・区切り | — | — |
| 3 | 1280px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 1560px | — | 4カラム・画像あり | 左 | 全幅 |
| 5 | 2760px | — | 5カラム・画像あり | 左 | 右（44:56） |
| 6 | 900px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 600px | — | 1カラム・画像あり | 左 | 右（16:84） |
| 8 | 920px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 9 | 860px | — | 6カラム・画像あり | 左 | 見出しの下 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#005abe`（2） / `#000000`（1） / `#f1f3f5`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 44:56 / 16:84。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #005abe;
  border-radius: 0px;
  padding: 96px 64px;
}
```

ラベル・タグ

```css
.chip{
  background: #005abe; color: #000000;
  border-radius: 999px; padding: 0px 10px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（24px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 202枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（135枚）、3:2（15枚）、16:9（12枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#005abe }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#919699; --on:#919699 }
.section--main .btn--fill{ background:#919699; color:var(--main) }
.card{ background:#005abe;
  border-radius:0px; padding:96px 64px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:64px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:11px; --section-y:32px; --gap:20px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#f1f3f5` のまま。主色 `#005abe` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
