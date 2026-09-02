# 株式会社MAENI ふうのデザイン

- 出典: https://maeni.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

#f5f5f5 の地に `#96b0c4` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 1.5、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #96b0c4;
  --sub: #96b0c4;
  --ink: #212224;
  --ink-rev: #ffffff;
  --on: #96b0c4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Figtree", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.5;
  --container: 576px;
  --read: 864px;
  --section-y: 100px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 57.3% |
| 主色 | `#939393` | 8.3% |
| 副色 | `#96b0c4` | 6.7% |
| 差し色 | `#bfc7cc` | 5.6% |
| 差し色 | `#005ea9` | 5.1% |
| 差し色 | `#0e6fb9` | 5% |

文字色は `#212224` / `#ffffff` / `#005ca8` / `#333333`。

- 主色 `#96b0c4` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#005ca8` | 11 | 19 | 0 | 0 |
| `#f5f5f5` | 14 | 0 | 0 | 0 |
| `#ffffff` | 11 | 41 | 4 | 3 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#e5f0f5` | 7 | 0 | 0 | 0 |
| `#212224` | 0 | 83 | 0 | 0 |
| `#333333` | 0 | 3 | 0 | 0 |

- `#96b0c4` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5`（地） | `#96b0c4` |
| `#005ca8` | `#ffffff` |
| `#ffffff` | `#96b0c4` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#96b0c4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Figtree
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 本文 | 18px | 1.5 |
| 補助 | 16px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 11px | — |
| 注記 | 9px | — |

- 本文は 18px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 576px／読ませる段は 864px
- セクションの上下余白: 100 / 160 / 72 / 216px（基本は 100px）
- 並びの間隔: 5 / 7 / 14 / 32px
- 角丸: 0px が基本。大きな面だけ 18px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1600 / 1280 / 960 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.5 | 12px / 行間 2 |
| セクションの上下余白 | 100px | 24px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 14px | 6px |

- 本文は 18px → 12px、セクション余白は 100px → 24px（PCの24%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #333333;
  border: 1px solid #e6e6e6;
  border-radius: 9999px; padding: 14px 14px; min-height: 63px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.324px;
}
.btn-sub{
  background: transparent; color: #212224;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.405px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 9999px; padding: 14px 14px; min-height: 63px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.324px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 2060px | — | 5カラム・画像あり | 右 | 全幅 |
| 3 | 1160px | `#f5f5f5` | 1カラム・画像あり | 右 | 見出しの下 |
| 4 | 740px | `#f5f5f5` | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1320px | — | 3カラム・画像あり | 右 | 見出しの下 |
| 6 | 1220px | `#f5f5f5` | 1カラム・画像あり | 右 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f5f5`（6） / `#005ca8`（5） / `#ffffff`（1） / `#000000`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f5f5f5; color: #212224;
  border-radius: 999px; padding: 7px 11px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（32px×9、40px×1、56px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 55枚使っている。うち 15 枚は画面いっぱいに置く
- 比率は 3:4（15枚）、3:2（7枚）、2:3（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#96b0c4 }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#333333; border-radius:9999px;
  padding:14px 14px; min-height:63px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:12px; --section-y:24px; --gap:6px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#f5f5f5` のまま。主色 `#96b0c4` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 18px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
