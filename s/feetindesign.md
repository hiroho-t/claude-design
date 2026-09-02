# 株式会社フィートインデザイン ふうのデザイン

- 出典: https://feetindesign.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#0b0085` を大きな面で置く配色。影も枠線もほとんど使わない。本文 13px・行間 1.5、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0b0085;
  --sub: #ccd2dc;
  --ink: #000b80;
  --ink-rev: #ffffff;
  --on: #0b0085;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "tke", sans-serif;
  --font-en: "tke", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.5;
  --container: 1192px;
  --read: 840px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 44.8% |
| 主色 | `#0b0085` | 26.3% |
| 副色 | `#ccd2dc` | 7.9% |
| 差し色 | `#9a806c` | 3.6% |
| 差し色 | `#617482` | 2.9% |
| 差し色 | `#010061` | 2.7% |

文字色は `#000b80` / `#ffffff` / `#999dcc`。

- 主色 `#0b0085` は差し色ではなく**面**で使う。画面の26%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 23 | 26 | 14 | 0 |
| `#0b0085` | 6 | 0 | 16 | 2 |
| `#041182` | 1 | 104 | 1 | 0 |
| `#999dcc` | 0 | 16 | 0 | 0 |

- `#0b0085` は面として6箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。枠線にも16箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0b0085` |
| `#0b0085`（主色） | `#ffffff` |
| `#070081` | `#ffffff` |

```css
.section{ --on:#0b0085 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#070081` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: tke
- 欧文: tke
- ウェイトは 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 84px | 1 |
| 見出し | 25px | 1.6 |
| 小見出し | 17px | — |
| リード | 16px | 1.5 |
| リード | 15px | — |
| リード | 14px | 1.6 |
| 本文 | 13px | 1.5 |

- 本文は 13px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1192px／読ませる段は 840px
- セクションの上下余白: 60 / 120 / 200 / 48px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 84px | 20px / 行間 1.3 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 16px | —px |

- 本文は 13px → 12px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 71px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.3px;
}
.btn-sub{
  background: #0b0085; color: #ffffff;
  border: 1px solid #0b0085;
  border-radius: 0px; padding: 27px 0px; min-height: 71px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.3px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 55px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.3px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 右（33:67） |
| 2 | 820px | — | 1カラム・画像あり | 左 | 全幅 |
| 3 | 2040px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 860px | `#0b0085` | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 1000px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 660px | `#070081` | 1カラム・画像あり | 左 | — |
| 7 | 800px | — | 1カラム・文字だけ | 左 | — |
| 8 | 480px | — | 1カラム・文字だけ | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#0b0085` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（19） / `#0b0085`（1） / `#070081`（1）
- 見出しは左5／中央3。
- 2カラムの分け方は 33:67。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 0px;
  padding: 58px 40px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（136px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（9枚）、3:4（2枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0b0085 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:0px; padding:58px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:71px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:12px; --section-y:32px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#0b0085` の面を全幅で交互に置く。主色は画面の26%を占めるだけ使う。
- 余白 60px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
