# wanna manna（ワナマナ）台灣早餐〜台湾朝食の新習慣〜 ふうのデザイン

- 出典: https://wanna-manna.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／料理･食べ物･飲み物･食品製造

#f9f6f4 の地に `#1d462f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2.2、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f9f6f4;
  --main: #1d462f;
  --sub: #1d462f;
  --ink: #004b34;
  --ink-rev: #ffffff;
  --on: #1d462f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins-Medium", sans-serif;
  --fs-body: 15px;
  --lh-body: 2.2;
  --container: 1200px;
  --read: 572px;
  --section-y: 152px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f9f6f4` | 62% |
| 主色 | `#1a1e1a` | 5.9% |
| 副色 | `#1d462f` | 5.8% |
| 差し色 | `#804f2b` | 5.4% |
| 差し色 | `#3b3d31` | 5% |
| 差し色 | `#be9263` | 4.8% |

文字色は `#004b34` / `#ffffff` / `#b6946d` / `#a9876d`。

- 主色 `#1d462f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f0ec` | 2 | 0 | 0 | 0 |
| `#ffffff` | 4 | 3 | 0 | 0 |
| `#004b34` | 0 | 29 | 4 | 0 |
| `#b6946d` | 0 | 1 | 0 | 0 |
| `#a9876d` | 0 | 1 | 0 | 0 |

- `#1d462f` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#1d462f` |
| `#f5f0ec` | `#1d462f` |

```css
.section{ --on:#1d462f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f9f6f4` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins-Medium
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | — |
| 見出し | 40px | 1 |
| 小見出し | 20px | — |
| リード | 18px | 1 |
| 本文 | 15px | 2.2 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 572px
- セクションの上下余白: 152 / 200 / 44 / 60px（基本は 152px）
- 並びの間隔: px
- 角丸: 20px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 1200 / 1000 / 751 / 750px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2.2 | 14px / 行間 2.15 |
| 見出し | 44px | 25px / 行間 1 |
| セクションの上下余白 | 152px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 14px、セクション余白は 152px → 32px（PCの21%）。
- 文字サイズの段は 27 / 16 / 14 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #004b34;
  border: 1px solid #004b34;
  border-radius: 100px; padding: 0px 0px; min-height: 54px;
  font-size: 18px; font-weight: 500; letter-spacing: 0.75px;
}
.btn-sub{
  background: transparent; color: #004b34;
  border: 1px solid #004b34;
  border-radius: 100px; padding: 0px 0px; min-height: 48px;
  font-size: 15px; font-weight: 500; letter-spacing: 2.25px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 960px | — | ヒーロー（画像） | 中央 | 右（50:50） |
| 2 | 940px | — | 1カラム・画像あり | 右 | 左（43:57） |
| 3 | 1100px | — | 1カラム・画像あり | — | 全面 |
| 4 | 360px | — | 1カラム・画像あり | — | 全面 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#f5f0ec`（2）
- 見出しは左0／中央1。
- 2カラムの分け方は 50:50 / 43:57。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 0px 0px;
}
```


## 画像

- 11枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 4:3（4枚）、16:9（2枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1d462f }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:960px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#004b34; border-radius:100px;
  padding:0px 0px; min-height:54px;
  font-size:18px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:751px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f9f6f4` のまま。主色 `#1d462f` は文字と小さな部品にだけ使う。
- 余白 152px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.2 より詰めない。
- 中途半端な角丸（20px と 0px 以外）を混ぜない。
