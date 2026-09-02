# 愛媛 松前 歯医者 小児専門 ふうのデザイン

- 出典: https://shiki-kodomo-dc.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ベビー･子ども･子育て

#fdfdfd の地に `#dcb582` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fdfdfd;
  --main: #dcb582;
  --sub: #eaebe9;
  --ink: #666666;
  --ink-rev: #00a9e3;
  --on: #dcb582;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", "Noto Serif JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1064px;
  --read: 940px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fdfdfd` | 86.3% |
| 主色 | `#d3d6d1` | 3.9% |
| 副色 | `#eaebe9` | 2.1% |
| 差し色 | `#dcb582` | 2% |

文字色は `#666666` / `#00a9e3` / `#0091cf` / `#ffffff`。

- 主色 `#dcb582` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 4 | 5 | 0 | 0 |
| `#eff9fd` | 4 | 0 | 0 | 1 |
| `#f4c82d` | 5 | 0 | 0 | 5 |
| `#fdf6e8` | 1 | 0 | 0 | 0 |
| `#666666` | 0 | 26 | 0 | 0 |
| `#00a9e3` | 0 | 47 | 0 | 0 |
| `#0091cf` | 0 | 6 | 0 | 0 |

- `#dcb582` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#dcb582` |
| `#eff9fd` | `#dcb582` |

```css
.section{ --on:#dcb582 }                     /* 地の面 */
.section--main{ background:var(--main); color:#00a9e3; --on:#00a9e3 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#00a9e3 }
.section--main .btn--fill{ background:#00a9e3; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 秀英丸ゴシック L{pm}（有料）→ 無料で近いのは **Shippori Mincho**、なければ Noto Serif JP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 33px | 1.65 |
| 見出し | 28px | 1.75 |
| 小見出し | 20px | 1.65 |
| 本文 | 16px | 1.6 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1064px／読ませる段は 940px
- セクションの上下余白: 80 / 92 / 100 / 140px（基本は 80px）
- 並びの間隔: px
- 角丸: 30px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1580 / 1240 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 1 |
| 見出し | 33px | 20px / 行間 1.7 |
| セクションの上下余白 | 80px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 13px、セクション余白は 80px → 52px（PCの65%）。
- 文字サイズの段は 18 / 14 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: #f4c82d; color: #ffffff;
  border-radius: 30px; padding: 17px 30px; min-height: 51px;
  font-size: 16px; font-weight: 400; letter-spacing: 2.24px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 51px;
  font-size: 16px; font-weight: 400; letter-spacing: 2.24px;
}
.btn-sub{
  background: #eff9fd; color: #00a9e3;
  border-radius: 5px; padding: 17px 18px; min-height: 95px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.68px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 600px | — | 1カラム・画像あり | 中央 | 左（9:91） |
| 3 | 1160px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 340px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 880px | — | 1カラム・画像あり | 右 | 左（32:68） |
| 6 | 680px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 520px | `#eff9fd` | 2カラム・画像あり | 左 | 見出しの下 |
| 8 | 700px | — | 1カラム・画像あり | — | 全面 |

- 全8セクション。
- 使われている面の色: `#ffffff`（1） / `#eff9fd`（1）
- 見出しは左1／中央4。
- 2カラムの分け方は 9:91 / 32:68。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 27枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（7枚）、3:2（6枚）、4:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dcb582 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#00a9e3; --on:#00a9e3 }
.section--main .btn--fill{ background:#00a9e3; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f4c82d; color:#ffffff; border-radius:30px;
  padding:17px 30px; min-height:51px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:13px; --section-y:52px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#fdfdfd` のまま。主色 `#dcb582` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（30px と 0px 以外）を混ぜない。
