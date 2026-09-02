# 株式会社 エヴォワークス ふうのデザイン

- 出典: https://www.evoworx.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#60cfe0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 18px・行間 1.7、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #60cfe0;
  --ink: #140700;
  --ink-rev: #7a7a7a;
  --on: #60cfe0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", "Noto Sans JP", sans-serif;
  --font-en: "TTNormsPro", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.7;
  --container: 1120px;
  --read: 800px;
  --section-y: 32px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 90.4% |
| 主色 | `#c1c9cc` | 3% |

文字色は `#140700` / `#7a7a7a` / `#ffffff` / `#999999`。

- 主色 `#60cfe0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(255, 255, 255) 0px 0px 0px 10px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f2f2` | 26 | 0 | 0 | 0 |
| `#ffffff` | 4 | 8 | 0 | 0 |
| `#60cfe0` | 3 | 0 | 0 | 0 |
| `#2b7de3` | 3 | 0 | 0 | 0 |
| `#eeeb48` | 3 | 0 | 0 | 0 |
| `#140700` | 0 | 153 | 0 | 0 |
| `#7a7a7a` | 0 | 111 | 0 | 0 |
| `#999999` | 0 | 1 | 0 | 0 |

- `#60cfe0` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f2f2f2` | `#60cfe0` |
| `#ffffff`（地） | `#60cfe0` |

```css
.section{ --on:#60cfe0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#7a7a7a; --on:#7a7a7a }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#7a7a7a }
.section--main .btn--fill{ background:#7a7a7a; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: FOT-筑紫ゴシック Pro B（有料）→ 無料で近いのは **Zen Kaku Gothic Antique**、なければ Noto Sans JP
- 欧文: TTNormsPro
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 20px | 1.5 |
| 本文 | 18px | 1.6 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | 1.1 |
| 注記 | 10px | — |

- 本文は 18px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 800px
- セクションの上下余白: 32 / 64 / 120 / 80px（基本は 32px）
- 並びの間隔: 4 / 8 / 10 / 12px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1279 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.7 | 18px / 行間 1.7 |
| 見出し | 32px | 18px / 行間 1.5 |
| セクションの上下余白 | 32px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 10px | 10px |

- 本文は 18px → 18px、セクション余白は 32px → 32px（PCの100%）。
- 文字サイズの段は 18 / 15 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #111111; color: #ffffff;
  border-radius: 1440px; padding: 0px 40px; min-height: 80px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.9px;
}
.btn-sub{
  background: transparent; color: #140700;
  border-radius: 0px; padding: 8px 0px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.12px;
}
.btn-sub{
  background: #111111; color: #ffffff;
  border-radius: 1440px; padding: 10px 20px; min-height: 40px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.12px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | — |
| 2 | 6720px | — | 6カラム・画像あり | 左 | 右（69:31） |
| 3 | 360px | — | 1カラム・画像あり | — | — |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f2f2f2`（3） / `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 69:31。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #8845af;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ebebeb; color: #7a7a7a;
  border-radius: 999px; padding: 2px 12px; font-size: 10px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（48px×6、24px×2、32px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 109枚使っている
- 比率は 3:2（72枚）、3:4（13枚）、16:9（10枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#60cfe0 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#7a7a7a; --on:#7a7a7a }
.section--main .btn--fill{ background:#7a7a7a; color:var(--main) }
.card{ background:#8845af;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#111111; color:#ffffff; border-radius:1440px;
  padding:0px 40px; min-height:80px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:18px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#60cfe0` は文字と小さな部品にだけ使う。
- 余白 32px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
