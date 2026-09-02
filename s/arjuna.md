# 福岡 ブランディング・ブランディングデザイン・パッケージ・ロゴ デザイン事務所 株式会社アルジュナ ふうのデザイン

- 出典: https://arjuna.ne.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#cdcdb5` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1、セクション間 76px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #cdcdb5;
  --sub: #141a1c;
  --ink: #1f1f1f;
  --ink-rev: #ffffff;
  --on: #cdcdb5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "mr-eaves-modern", sans-serif;
  --fs-body: 15px;
  --lh-body: 1;
  --container: 1248px;
  --read: 756px;
  --section-y: 76px;
  --gap: 16px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 63.2% |
| 主色 | `#f0f0e4` | 10.3% |
| 副色 | `#141a1c` | 2.9% |
| 差し色 | `#cdcdb5` | 2.9% |
| 差し色 | `#daded4` | 2.9% |
| 差し色 | `#616955` | 2.9% |

文字色は `#1f1f1f` / `#ffffff` / `#a7a381` / `#a0a0a0`。

- 主色 `#cdcdb5` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 76 | 0 | 1 |
| `#000000` | 12 | 0 | 0 | 0 |
| `#f8f8f8` | 1 | 0 | 0 | 0 |
| `#ffe109` | 1 | 0 | 0 | 0 |
| `#1f1f1f` | 36 | 164 | 3 | 36 |
| `#a7a381` | 0 | 12 | 0 | 0 |
| `#a0a0a0` | 0 | 6 | 0 | 0 |

- `#cdcdb5` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#000000` | `#ffffff` |
| `#ffffff`（地） | `#cdcdb5` |
| `#ffe109` | `#cdcdb5` |
| `#f8f8f8` | `#cdcdb5` |

```css
.section{ --on:#cdcdb5 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: mr-eaves-modern
- ウェイトは 300 / 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | 1.6 |
| 見出し | 29px | 1 |
| 小見出し | 19px | 1.5 |
| リード | 18px | — |
| リード | 17px | — |
| リード | 16px | — |
| 本文 | 15px | 1 |

- 本文は 15px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1248px／読ませる段は 756px
- セクションの上下余白: 76 / 144 / 40 / 136px（基本は 76px）
- 並びの間隔: px
- 角丸: 16px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1000 / 960 / 801 / 800 / 420px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1 | 15px / 行間 1 |
| 見出し | 44px | 25px / 行間 1.4 |
| セクションの上下余白 | 76px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 15px、セクション余白は 76px → 52px（PCの68%）。
- 文字サイズの段は 17 / 15 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: #1f1f1f; color: #ffffff;
  border-radius: 16px; padding: 6px 14px; min-height: 32px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.39px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 36px;
  font-size: 14px; font-weight: 300; letter-spacing: 0.42px;
}
.btn-sub{
  background: #1f1f1f; color: #ffffff;
  border-radius: 18px; padding: 9px 14px; min-height: 36px;
  font-size: 14px; font-weight: 300; letter-spacing: 0.42px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1180px | — | ヒーロー（画像） | 右 | 左（43:57） |
| 2 | 760px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 1180px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 760px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 2220px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 960px | — | 1カラム・画像あり | 左 | 右（87:13） |
| 7 | 1020px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 8 | 600px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 9 | 540px | `#f8f8f8` | 2カラム | 左 | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#000000`（12） / `#ffffff`（2） / `#ffe109`（1） / `#f8f8f8`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 43:57 / 87:13。半分ずつには割らない。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #000000;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #1f1f1f; color: #ffffff;
  border-radius: 999px; padding: 6px 14px; font-size: 13px;
}
```

## 画像

- 70枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 3:2（31枚）、21:9（11枚）、2:3（10枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#cdcdb5 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#000000;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#1f1f1f; color:#ffffff; border-radius:16px;
  padding:6px 14px; min-height:32px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:801px){
  :root{ --fs-body:15px; --section-y:52px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#cdcdb5` は文字と小さな部品にだけ使う。
- 余白 76px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（16px と 0px 以外）を混ぜない。
