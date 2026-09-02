# 一色法律事務所・外国法共同事業 ISSHIKI & PARTNERS ふうのデザイン

- 出典: https://www.isshiki-law.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

#ebeae9 の地に `#081b25` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.86、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ebeae9;
  --main: #081b25;
  --sub: #081b25;
  --ink: #444444;
  --ink-rev: #ffffff;
  --on: #081b25;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FP-KoburinaGoStdN-W3", sans-serif;
  --font-en: "FP-KoburinaGoStdN-W3", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.86;
  --container: 700px;
  --read: 768px;
  --section-y: 152px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ebeae9` | 81.6% |
| 主色 | `#b5bdbb` | 5.2% |
| 副色 | `#081b25` | 3.6% |
| 差し色 | `#d0d8d6` | 3.5% |
| 差し色 | `#2b2c2f` | 2.8% |
| 差し色 | `#314850` | 1.7% |

文字色は `#444444` / `#ffffff`。

- 主色 `#081b25` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.16) 0px 10px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e3e2e0` | 1 | 0 | 0 | 0 |
| `#ebeae9` | 2 | 0 | 0 | 0 |
| `#444444` | 2 | 39 | 0 | 2 |
| `#ffffff` | 2 | 8 | 0 | 2 |

- `#081b25` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ebeae9`（地） | `#081b25` |
| `#e3e2e0` | `#081b25` |

```css
.section{ --on:#081b25 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: FP-KoburinaGoStdN-W3
- 欧文: FP-KoburinaGoStdN-W3
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1.5 |
| 本文 | 14px | 1.86 |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.86。

## レイアウト

- コンテンツ幅: 最大 700px／読ませる段は 768px
- セクションの上下余白: 152 / 80 / 44 / 84px（基本は 152px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 1024 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.86 | 15px / 行間 1.86 |
| 見出し | 24px | 22px / 行間 1.52 |
| セクションの上下余白 | 152px | 92px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 15px、セクション余白は 152px → 92px（PCの61%）。
- 文字サイズの段は 23 / 15 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #444444;
  border: 1px solid #999999;
  border-radius: 0px; padding: 7px 0px; min-height: 43px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.4px;
}
.btn-sub{
  background: #444444; color: #ffffff;
  border-radius: 0px; padding: 8px 16px; min-height: 38px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.2px;
}
.btn-sub{
  background: #ffffff; color: #444444;
  border-radius: 0px; padding: 8px 16px; min-height: 38px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 200px | `#ebeae9` | ヒーロー（画像） | — | — |
| 2 | 700px | — | 1カラム・画像あり | 左 | 右（92:8） |
| 3 | 360px | — | 1カラム・文字だけ | 左 | — |
| 4 | 420px | — | 1カラム・画像あり | 左 | 右（48:52） |
| 5 | 420px | — | 1カラム・画像あり | 右 | 左（48:52） |
| 6 | 620px | — | 1カラム・画像あり | 左 | 全幅 |

- 全6セクション。
- 使われている面の色: `#ebeae9`（1） / `#e3e2e0`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 92:8 / 48:52 / 48:52。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 4枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（2枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#081b25 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:200px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#444444; border-radius:0px;
  padding:7px 0px; min-height:43px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:15px; --section-y:92px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ebeae9` のまま。主色 `#081b25` は文字と小さな部品にだけ使う。
- 余白 152px と行間 1.86 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.86 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
