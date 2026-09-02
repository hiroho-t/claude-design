# 枚方市立生涯学習交流センター・枚方市立市駅前図書館 ふうのデザイン

- 出典: https://hirakata-elcl.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／体験･交流／商業施設･レジャー施設･文化施設

#faf7f5 の地に `#4c3422` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #faf7f5;
  --main: #4c3422;
  --sub: #4c3422;
  --ink: #614a3f;
  --ink-rev: #f2f2f2;
  --on: #4c3422;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1248px;
  --read: 684px;
  --section-y: 72px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#faf7f5` | 87.5% |
| 主色 | `#eee8d8` | 2.7% |
| 副色 | `#4c3422` | 2% |
| 差し色 | `#329c87` | 1.9% |
| 差し色 | `#dad5cd` | 1.8% |
| 差し色 | `#afa09c` | 1.8% |

文字色は `#614a3f` / `#f2f2f2` / `#e78aa6` / `#317559`。

- 主色 `#4c3422` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(97, 74, 63, 0.16) 0px 32px 32px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fdfbfa` | 53 | 3 | 0 | 17 |
| `#f1dec1` | 8 | 0 | 2 | 0 |
| `#ebebeb` | 10 | 0 | 0 | 10 |
| `#614a3f` | 3 | 186 | 4 | 3 |
| `#f5c760` | 1 | 0 | 0 | 1 |
| `#f2f2f2` | 0 | 5 | 0 | 0 |
| `#e78aa6` | 0 | 2 | 0 | 0 |
| `#317559` | 0 | 5 | 0 | 0 |

- `#4c3422` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fdfbfa` | `#4c3422` |
| `#ffffff` | `#4c3422` |
| `#f1dec1` | `#4c3422` |

```css
.section{ --on:#4c3422 }                     /* 地の面 */
.section--main{ background:var(--main); color:#f2f2f2; --on:#f2f2f2 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#f2f2f2 }
.section--main .btn--fill{ background:#f2f2f2; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#faf7f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1 |
| 見出し | 26px | 1.5 |
| 小見出し | 22px | — |
| 本文 | 16px | 1.8 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1248px／読ませる段は 684px
- セクションの上下余白: 72 / 32 / 40 / 44px（基本は 72px）
- 並びの間隔: 5 / 10 / 20 / 80px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1290 / 769 / 768 / 600 / 349px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 16px / 行間 1.8 |
| 見出し | 40px | 27px / 行間 1 |
| セクションの上下余白 | 72px | 60px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 20px | 4px |

- 本文は 16px → 16px、セクション余白は 72px → 60px（PCの83%）。
- 文字サイズの段は 19 / 16 / 15 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #614a3f;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #614a3f;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ebebeb; color: #614a3f;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 7000px | — | ヒーロー | — | — |
| 2 | 900px | — | 1カラム・画像あり | 右 | — |
| 3 | 7000px | — | 6カラム・画像あり | 左 | 全幅 |

- 全3セクション。
- 使われている面の色: `#fdfbfa`（8） / `#ffffff`（4） / `#f1dec1`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（16箇所で同じ形）

```css
.card{
  background: #fdfbfa;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #614a3f; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 14px 25px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（80px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 40枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 21:9（16枚）、1:1（11枚）、4:3（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4c3422 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:7000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#f2f2f2; --on:#f2f2f2 }
.section--main .btn--fill{ background:#f2f2f2; color:var(--main) }
.card{ background:#fdfbfa;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#614a3f; border-radius:0px;
  padding:0px 0px; min-height:30px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:16px; --section-y:60px; --gap:4px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#faf7f5` のまま。主色 `#4c3422` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
