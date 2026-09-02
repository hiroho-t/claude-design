# 内田鐵工所 ふうのデザイン

- 出典: https://uchida-st.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#695e4d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #695e4d;
  --sub: #695e4d;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #695e4d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lexend Deca", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 568px;
  --read: 720px;
  --section-y: 64px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 55.4% |
| 主色 | `#000000` | 18.8% |
| 副色 | `#695e4d` | 5.8% |
| 差し色 | `#3e3c3a` | 4% |
| 差し色 | `#a3916c` | 2.9% |
| 差し色 | `#83765f` | 2.8% |

文字色は `#ffffff` / `#000000` / `#afafaf` / `#a29069`。

- 主色 `#695e4d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 9 | 45 | 6 | 0 |
| `#8bce8f` | 1 | 0 | 0 | 0 |
| `#a29069` | 3 | 6 | 0 | 0 |
| `#ffffff` | 1 | 54 | 0 | 1 |
| `#afafaf` | 0 | 15 | 0 | 0 |

- `#695e4d` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#000000` | `#000000` |
| `#a29069` | `#695e4d` |
| `#8bce8f` | `#695e4d` |

```css
.section{ --on:#695e4d }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Lexend Deca
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 45px | 1.5 |
| 見出し | 30px | 1.5 |
| 本文 | 16px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |
| 注記 | 9px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 568px／読ませる段は 720px
- セクションの上下余白: 64 / 48 / 72 / 76px（基本は 64px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1250 / 1024 / 900 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| 見出し | 45px | 25px / 行間 1.5 |
| セクションの上下余白 | 64px | 40px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 64px → 40px（PCの63%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 30px; padding: 5px 18px; min-height: 33px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.5px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 30px; padding: 10px 0px; min-height: 44px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1400px | `#000000` | 1カラム・画像あり | — | 全面 |
| 3 | 1100px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 500px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 460px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 800px | — | 1カラム・画像あり | — | 全面 |
| 7 | 780px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 8 | 400px | — | 1カラム・文字だけ | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#000000`（8） / `#a29069`（2） / `#8bce8f`（1）
- 見出しは左0／中央5。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #a29069;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 18px; font-size: 14px;
}
```

## 画像

- 33枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（12枚）、2:3（3枚）、16:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#695e4d }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#a29069;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:30px;
  padding:5px 18px; min-height:33px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#695e4d` は文字と小さな部品にだけ使う。
- 余白 64px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。
