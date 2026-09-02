# アーク ペーパードライバースクール ふうのデザイン

- 出典: https://arc-pds.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／車･乗り物･モビリティ／スクール･習い事･教材

#fff7e8 の地に `#4082c4` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.88、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fff7e8;
  --main: #4082c4;
  --sub: #cac6bf;
  --ink: #111111;
  --ink-rev: #4d5859;
  --on: #4082c4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "M PLUS 1p", sans-serif;
  --font-en: "M PLUS 1p", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.88;
  --container: 624px;
  --read: 712px;
  --section-y: 52px;
  --gap: 10px;
  --radius: 26px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fff7e8` | 90.2% |
| 主色 | `#dbd6d0` | 1.8% |
| 副色 | `#cac6bf` | 1.7% |

文字色は `#111111` / `#4d5859` / `#ffffff` / `#4082c4`。

- 主色 `#4082c4` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(77, 88, 89) 0px 3.08571px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 43 | 15 | 15 | 4 |
| `#f7e9cf` | 15 | 0 | 0 | 0 |
| `#4082c4` | 1 | 5 | 0 | 0 |
| `#74b3e2` | 1 | 0 | 0 | 0 |
| `#f28851` | 1 | 0 | 0 | 0 |
| `#111111` | 0 | 116 | 0 | 0 |
| `#4d5859` | 0 | 26 | 39 | 0 |

- `#4082c4` は文字色として5箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#4082c4` |
| `#f7e9cf` | `#4082c4` |
| `#74b3e2` | `#4082c4` |
| `#4082c4`（主色） | `#4d5859` |

```css
.section{ --on:#4082c4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#4d5859; --on:#4d5859 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#4d5859 }
.section--main .btn--fill{ background:#4d5859; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#4d5859`。ただしその囲みは `#fff7e8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: M PLUS 1p
- 欧文: M PLUS 1p
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 66px | 1.4 |
| 見出し | 43px | — |
| 小見出し | 41px | 2 |
| リード | 25px | 2 |
| リード | 19px | — |
| 本文 | 16px | 2 |
| 補助 | 15px | — |

- 本文は 16px・行間 1.88。

## レイアウト

- コンテンツ幅: 最大 624px／読ませる段は 712px
- セクションの上下余白: 52 / 60 / 144 / 156px（基本は 52px）
- 並びの間隔: 5 / 8 / 10 / 21px
- 角丸: 26px が基本。大きな面だけ 21px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 767 / 640 / 600 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.88 | 16px / 行間 2 |
| 見出し | 66px | 34px / 行間 1.4 |
| セクションの上下余白 | 52px | 28px |
| 左右の余白 | — | 65px |
| 並びの間隔 | 10px | 10px |

- 本文は 16px → 16px、セクション余白は 52px → 28px（PCの54%）。
- 文字サイズの段は 27 / 20 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #111111;
  border-radius: 0px; padding: 0px 0px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #f4bb3e; color: #111111;
  border-radius: 14px; padding: 1px 13px; min-height: 31px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #111111;
  border: 2px solid #4d5859;
  border-radius: 26px; padding: 2px 0px; min-height: 51px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 220px | — | ヒーロー（画像） | — | 全面 |
| 2 | 220px | — | 6カラム・画像あり | — | 全面 |
| 3 | 220px | — | 6カラム・画像あり | — | 全面 |
| 4 | 220px | — | 6カラム・画像あり | — | 全面 |
| 5 | 220px | — | 6カラム・画像あり | — | 全面 |
| 6 | 220px | — | 6カラム・画像あり | — | 全面 |
| 7 | 220px | — | 6カラム・画像あり | — | 全面 |
| 8 | 220px | — | 6カラム・画像あり | — | 全面 |
| 9 | 220px | — | 6カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（21） / `#f7e9cf`（10） / `#74b3e2`（1） / `#4082c4`（1）


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 2px solid var(--on);   /* 実測は #4d5859。面によって入れ替える */
  border-radius: 16px;
  padding: 42px 42px;
  box-shadow: rgb(77, 88, 89) 0px 3.08571px 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f4bb3e; color: #111111;
  border-radius: 14px; padding: 1px 13px; font-size: 14px;
}
```

## 丸いもの

角丸は 26px だが、**完全な円は別扱い**で 20 箇所ある（16px×9、24px×9、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 121枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（90枚）、3:2（24枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4082c4 }
.container{ width:min(100% - 130px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:220px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#4d5859; --on:#4d5859 }
.section--main .btn--fill{ background:#4d5859; color:var(--main) }
.card{ background:#ffffff; border:2px solid var(--on);
  border-radius:16px; padding:42px 42px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#111111; border-radius:0px;
  padding:0px 0px; min-height:29px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:28px; --gap:10px; }
  .container{ width:calc(100% - 130px) }
}
```

## 守ること

やること

- 地は `#fff7e8` のまま。主色 `#4082c4` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1.88 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.88 より詰めない。
- 中途半端な角丸（26px と 21px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
