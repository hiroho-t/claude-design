# 株式会社Cygames（サイゲームス） ふうのデザイン

- 出典: https://www.cygames.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／漫画･アニメ･ゲーム／レスポンシブ

白地に `#3860be` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.78、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #3860be;
  --sub: #c9c8c4;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #3860be;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.78;
  --container: 1236px;
  --read: 660px;
  --section-y: 60px;
  --gap: 25px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 52.6% |
| 主色 | `#000000` | 12.2% |
| 副色 | `#c9c8c4` | 5.7% |
| 差し色 | `#e2dcd4` | 4.3% |
| 差し色 | `#3c3d3e` | 3.5% |
| 差し色 | `#929496` | 3.5% |

文字色は `#000000` / `#ffffff` / `#999999` / `#3860be`。

- 主色 `#3860be` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 3.08571px 14.4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 3 | 0 | 0 | 0 |
| `#000000` | 19 | 52 | 1 | 3 |
| `#ffffff` | 16 | 82 | 7 | 0 |
| `#dddddd` | 2 | 0 | 3 | 0 |
| `#7f7f7f` | 1 | 0 | 0 | 0 |
| `#999999` | 0 | 1 | 0 | 0 |
| `#3860be` | 0 | 2 | 0 | 0 |

- `#3860be` は文字色として2箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#000000` | `#ffffff` |
| `#ffffff`（地） | `#3860be` |
| `#f5f5f5` | `#3860be` |
| `#dddddd` | `#3860be` |

```css
.section{ --on:#3860be }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 700 / 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 62px | 1.17 |
| 見出し | 30px | — |
| 小見出し | 27px | 1.15 |
| リード | 21px | 1.15 |
| リード | 19px | — |
| リード | 16px | — |
| 本文 | 14px | 1.78 |

- 本文は 14px・行間 1.78。

## レイアウト

- コンテンツ幅: 最大 1236px／読ませる段は 660px
- セクションの上下余白: 60 / 40 / 52 / 68px（基本は 60px）
- 並びの間隔: 3 / 10 / 25 / 26px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1400 / 835 / 600 / 550px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.78 | 12px / 行間 1.66 |
| 見出し | 62px | 21px / 行間 1.15 |
| セクションの上下余白 | 60px | 44px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 25px | 16px |

- 本文は 14px → 12px、セクション余白は 60px → 44px（PCの73%）。
- 文字サイズの段は 15 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 5px; padding: 0px 50px; min-height: 45px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 82px;
  font-size: 19px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 5px; padding: 0px 31px; min-height: 82px;
  font-size: 19px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 900px | — | 1カラム・画像あり | — | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#000000`（12） / `#ffffff`（6） / `#f5f5f5`（3） / `#dddddd`（1）


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #000000;
  border-radius: 5px;
  padding: 0px 108px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 0px;
}
```


## 画像

- 23枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 3:2（14枚）、21:9（1枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3860be }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#000000;
  border-radius:5px; padding:0px 108px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:5px;
  padding:0px 50px; min-height:45px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:835px){
  :root{ --fs-body:12px; --section-y:44px; --gap:16px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#3860be` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.78 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.78 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。
