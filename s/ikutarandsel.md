# 【2027年新入学】生田ランドセル ふうのデザイン

- 出典: https://www.randsel.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／製造業･工業･メーカー･商社･物流

白地に `#2c6330` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2c6330;
  --sub: #7a7859;
  --ink: #272727;
  --ink-rev: #ffffff;
  --on: #2c6330;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Helvetica Neue", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 1100px;
  --read: 992px;
  --section-y: 152px;
  --gap: 25px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 72.5% |
| 主色 | `#2c6330` | 19.7% |
| 副色 | `#7a7859` | 3.5% |
| 差し色 | `#b7baaa` | 2.4% |
| 差し色 | `#2f3e2a` | 1.9% |

文字色は `#272727` / `#ffffff` / `#286432`。

- 主色 `#2c6330` は差し色ではなく**面**で使う。画面の20%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f3eb` | 5 | 0 | 0 | 0 |
| `#ffffff` | 9 | 64 | 6 | 0 |
| `#555134` | 1 | 0 | 0 | 0 |
| `#fbf9f5` | 1 | 0 | 0 | 0 |
| `#286432` | 5 | 24 | 16 | 3 |
| `#272727` | 0 | 76 | 1 | 0 |

- `#2c6330` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#2c6330` |
| `#f7f3eb` | `#2c6330` |
| `#555134` | `#ffffff` |
| `#fef4e7` | `#2c6330` |

```css
.section{ --on:#2c6330 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f6f3ec` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Helvetica Neue
- 欧文: Helvetica Neue
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1 |
| 見出し | 18px | 1 |
| 小見出し | 16px | 1 |
| 本文 | 14px | 1 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 992px
- セクションの上下余白: 152 / 52 / 40 / 100px（基本は 152px）
- 並びの間隔: 15 / 20 / 25 / 30px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 767 / 640 / 600 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 15px / 行間 1 |
| 見出し | 24px | 15px / 行間 1 |
| セクションの上下余白 | 152px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 25px | 10px |

- 本文は 14px → 15px、セクション余白は 152px → 40px（PCの26%）。
- 文字サイズの段は 18 / 17 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #286432;
  border: 1px solid #286432;
  border-radius: 40px; padding: 0px 50px; min-height: 45px;
  font-size: 14px; font-weight: 500; letter-spacing: 2.4px;
}
.btn-sub{
  background: transparent; color: #286432;
  border: 1px solid #286432;
  border-radius: 30px; padding: 0px 30px; min-height: 46px;
  font-size: 13px; font-weight: 500; letter-spacing: 2.4px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50px; padding: 0px 0px; min-height: 45px;
  font-size: 13px; font-weight: 500; letter-spacing: 2.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全面 |
| 2 | 720px | — | 1カラム・画像あり | 左 | 右（44:56） |
| 3 | 900px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 2200px | `#ffffff` | 3カラム・画像あり | 右 | 全幅 |
| 5 | 1500px | `#f6f3ec` | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1620px | `#fbf8f4` | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1000px | `#ffffff` | 1カラム・画像あり | 左 | — |
| 8 | 1200px | `#fbf9f5` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#f7f3eb`（2） / `#555134`（1） / `#fef4e7`（1）
- 見出しは左2／中央4。
- 2カラムの分け方は 44:56。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 39枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 4:3（16枚）、1:1（11枚）、3:2（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2c6330 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#286432; border-radius:40px;
  padding:0px 50px; min-height:45px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#2c6330` の面を全幅で交互に置く。主色は画面の20%を占めるだけ使う。
- 余白 152px と行間 1 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。
