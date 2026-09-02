# AOAO SAPPORO ふうのデザイン

- 出典: https://aoao-sapporo.blue/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／体験･交流／商業施設･レジャー施設･文化施設

白地に `#21348c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #21348c;
  --sub: #010101;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #21348c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "League Spartan", sans-serif;
  --font-en: "League Spartan", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1176px;
  --read: 652px;
  --section-y: 60px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68.4% |
| 主色 | `#d2d2d2` | 11.9% |
| 副色 | `#010101` | 5.7% |
| 差し色 | `#181c1d` | 2.5% |
| 差し色 | `#a2b1af` | 2.2% |
| 差し色 | `#2a3241` | 2.2% |

文字色は `#333333` / `#ffffff` / `#4d4d4d` / `#21348c`。

- 主色 `#21348c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f2f2` | 4 | 0 | 0 | 0 |
| `#d2d2d2` | 3 | 0 | 1 | 0 |
| `#ffffff` | 24 | 11 | 0 | 0 |
| `#21348c` | 3 | 1 | 4 | 0 |
| `#333333` | 1 | 183 | 5 | 0 |
| `#4d4d4d` | 0 | 39 | 0 | 0 |

- `#21348c` は面として3箇所、文字として1箇所。塗りが主役。ボタンの地には使っていない。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#d2d2d2` | `#21348c` |
| `#f2f2f2` | `#21348c` |

```css
.section{ --on:#21348c }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: League Spartan
- 欧文: League Spartan
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1 |
| 見出し | 24px | 1.5 |
| 本文 | 16px | 1 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1176px／読ませる段は 652px
- セクションの上下余白: 60 / 80 / 44 / 92px（基本は 60px）
- 並びの間隔: 10 / 15 / 30 / 45px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 768 / 767 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 16px / 行間 1 |
| 見出し | 48px | 42px / 行間 1 |
| セクションの上下余白 | 60px | 60px |
| 左右の余白 | — | 68px |
| 並びの間隔 | 30px | 15px |

- 本文は 16px → 16px、セクション余白は 60px → 60px（PCの100%）。
- 文字サイズの段は 18 / 16 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #333333;
  border: 1px solid #333333;
  border-radius: 30px; padding: 0px 0px; min-height: 27px;
  font-size: 11px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border: 1px solid #333333;
  border-radius: 30px; padding: 0px 0px; min-height: 39px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 320px | — | 帯・区切り | 中央 | — |
| 3 | 920px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 4 | 300px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 540px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 1300px | `#f2f2f2` | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 380px | `#f2f2f2` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#d2d2d2`（3） / `#f2f2f2`（2）
- 見出しは左2／中央4。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #4d4d4d;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 15px; font-size: 10px;
}
```

## 画像

- 61枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 4:3（38枚）、1:1（10枚）、16:9（6枚）
- 角丸 5px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#21348c }
.container{ width:min(100% - 136px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#333333; border-radius:30px;
  padding:0px 0px; min-height:27px;
  font-size:11px; font-weight:400 }

img{ width:100%; height:auto; border-radius:5px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:60px; --gap:15px; }
  .container{ width:calc(100% - 136px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#21348c` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 5px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。
