# unico 児童発達支援・放課後等デイサービス ふうのデザイン

- 出典: https://unico-jp.net/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／福祉･介護／ベビー･子ども･子育て

白地に `#f0e0c1` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f0e0c1;
  --sub: #faeddc;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #f0e0c1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "heisei-kaku-gothic-std", sans-serif;
  --font-en: "heisei-kaku-gothic-std", sans-serif;
  --fs-body: 15px;
  --lh-body: 1;
  --container: 932px;
  --read: 612px;
  --section-y: 100px;
  --gap: 25px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.4% |
| 主色 | `#f0e0c1` | 4.9% |
| 副色 | `#faeddc` | 3% |
| 差し色 | `#767469` | 2.9% |
| 差し色 | `#3e2d23` | 2.1% |
| 差し色 | `#a59b8f` | 2.1% |

文字色は `#000000` / `#ffffff` / `#ee3b2c` / `#444444`。

- 主色 `#f0e0c1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fff7fd` | 5 | 25 | 0 | 0 |
| `#f8f3ec` | 1 | 0 | 2 | 0 |
| `#ee3b2c` | 13 | 8 | 6 | 13 |
| `#000000` | 0 | 32 | 0 | 0 |
| `#444444` | 0 | 3 | 0 | 0 |

- `#f0e0c1` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f0e0c1` |
| `#fff7fd` | `#f0e0c1` |
| `#f8f3ec` | `#f0e0c1` |

```css
.section{ --on:#f0e0c1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f8f3ec` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: heisei-kaku-gothic-std
- 欧文: heisei-kaku-gothic-std
- ウェイトは 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 156px | 1 |
| 見出し | 32px | 1 |
| 小見出し | 24px | 1 |
| リード | 21px | 1 |
| リード | 18px | — |
| 本文 | 15px | 2.13 |
| 補助 | 12px | — |

- 本文は 15px・行間 1。

## レイアウト

- コンテンツ幅: 最大 932px／読ませる段は 612px
- セクションの上下余白: 100 / 76 / 160 / 180px（基本は 100px）
- 並びの間隔: 10 / 25 / 30px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 960px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1 | 12px / 行間 1 |
| 見出し | 156px | 36px / 行間 1 |
| セクションの上下余白 | 100px | 52px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 25px | 5px |

- 本文は 15px → 12px、セクション余白は 100px → 52px（PCの52%）。
- 文字サイズの段は 20 / 18 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ee3b2c; color: #ffffff;
  border: 1px solid #ee3b2c;
  border-radius: 5px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.75px;
}
.btn-sub{
  background: #ee3b2c; color: #ffffff;
  border-radius: 16px; padding: 11px 14px; min-height: 32px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.75px;
}
.btn-sub{
  background: #ee3b2c; color: #ffffff;
  border-radius: 22px; padding: 0px 0px; min-height: 44px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1480px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 1460px | — | 1カラム・画像あり | — | 全面 |
| 3 | 880px | — | 1カラム・画像あり | 左 | 全幅 |
| 4 | 1540px | `#f8f3ec` | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1400px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1100px | `#fff7fd` | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 720px | — | 1カラム・文字だけ | 中央 | — |
| 8 | 880px | `#fff7fd` | 1カラム・文字だけ | 中央 | — |
| 9 | 500px | — | 1カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#fff7fd`（2） / `#f8f3ec`（1）
- 見出しは左1／中央6。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 48px 40px;
}
```


## 画像

- 22枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 4:3（10枚）、3:2（8枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f0e0c1 }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1480px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:48px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ee3b2c; color:#ffffff; border-radius:5px;
  padding:0px 0px; min-height:60px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:52px; --gap:5px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#f0e0c1` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。
