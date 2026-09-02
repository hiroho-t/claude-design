# インユース MOONSTAR ふうのデザイン

- 出典: https://products.inuse.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ファッション･アパレル･アクセサリー･ジュエリー／レスポンシブ

白地に `#f2f1ed` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.8、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f2f1ed;
  --sub: #1d1d1d;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #f2f1ed;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-PAotoGothicStdN-DeBold", sans-serif;
  --font-en: "MFW-PAotoGothicStdN-DeBold", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.8;
  --container: 1000px;
  --read: 908px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 91.8% |
| 主色 | `#f2f1ed` | 6.3% |
| 副色 | `#1d1d1d` | 1.6% |

文字色は `#000000` / `#ffffff`。

- 主色 `#f2f1ed` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f1ed` | 1 | 0 | 0 | 0 |
| `#1d1d1d` | 2 | 0 | 1 | 1 |
| `#ffffff` | 1 | 9 | 0 | 1 |
| `#000000` | 0 | 76 | 0 | 0 |

- `#f2f1ed` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f2f1ed`（主色） | `#f2f1ed` |
| `#1d1d1d` | `#ffffff` |

```css
.section{ --on:#f2f1ed }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: MFW-PAotoGothicStdN-DeBold
- 欧文: MFW-PAotoGothicStdN-DeBold
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 18px | 1.15 |
| 見出し | 17px | — |
| 本文 | 15px | 1.6 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 11px | — |

- 本文は 15px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 908px
- セクションの上下余白: 60 / 76 / 152 / 40px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1199 / 782 / 781 / 600 / 500px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.8 | 15px / 行間 2.17 |
| セクションの上下余白 | 60px | 360px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 15px、セクション余白は 60px → 360px（PCの600%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 0px; padding: 10px 14px; min-height: 35px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #1d1d1d; color: #ffffff;
  border: 1px solid #1d1d1d;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #c3c3c3;
  border-radius: 0px; padding: 15px 20px; min-height: 49px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 580px | — | ヒーロー（画像） | — | 全面 |
| 2 | 580px | — | 1カラム・画像あり | — | 全面 |
| 3 | 580px | — | 1カラム・画像あり | — | 全面 |
| 4 | 580px | — | 1カラム・画像あり | — | 全面 |
| 5 | 580px | — | 1カラム・画像あり | — | 全面 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f2f1ed`（1） / `#1d1d1d`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 53枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 2:3（29枚）、4:3（15枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f2f1ed }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:580px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:0px;
  padding:10px 14px; min-height:35px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:15px; --section-y:360px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#f2f1ed` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
