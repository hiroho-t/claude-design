# 株式会社Jdex ふうのデザイン

- 出典: https://j-dex.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

#353031 の地に `#b7282e` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 2、セクション間 68px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #353031;
  --main: #b7282e;
  --sub: #464b67;
  --ink: #ffffff;
  --ink-rev: #b7282e;
  --on: #b7282e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Outfit", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 616px;
  --read: 880px;
  --section-y: 68px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#353031` | 80.6% |
| 主色 | `#b7282e` | 8.6% |
| 副色 | `#464b67` | 6.2% |

文字色は `#ffffff` / `#b7282e` / `#353031`。

- 主色 `#b7282e` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は`rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#353031` | 2 | 10 | 0 | 0 |
| `#57669e` | 2 | 0 | 0 | 0 |
| `#b7282e` | 9 | 11 | 2 | 5 |
| `#ffffff` | 5 | 80 | 0 | 1 |
| `#f5f5f5` | 1 | 0 | 0 | 0 |

- `#b7282e` は面9箇所・文字11箇所を行き来する。ボタンの地にも使う。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#b7282e` |
| `#57669e` | `#b7282e` |
| `#353031`（地） | `#b7282e` |
| `#f5f5f5` | `#b7282e` |

```css
.section{ --on:#b7282e }                     /* 地の面 */
.section--main{ background:var(--main); color:#b7282e; --on:#b7282e }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#b7282e }
.section--main .btn--fill{ background:#b7282e; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Outfit
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | 1.5 |
| 本文 | 16px | 1.87 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | 2 |
| 注記 | 11px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 616px／読ませる段は 880px
- セクションの上下余白: 68 / 60 / 112 / 36px（基本は 68px）
- 並びの間隔: px
- 角丸: 20px が基本。大きな面だけ 25px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1250 / 1200 / 1100 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 2 |
| 見出し | 20px | 10px / 行間 2 |
| セクションの上下余白 | 68px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 13px、セクション余白は 68px → 32px（PCの47%）。
- 文字サイズの段は 15 / 14 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: #b7282e; color: #ffffff;
  border-radius: 25px; padding: 0px 0px; min-height: 46px;
  font-size: 20px; font-weight: 400; letter-spacing: 0.5px;
}
.btn-sub{
  background: #b7282e; color: #ffffff;
  border: 1px solid #b7282e;
  border-radius: 10px; padding: 0px 0px; min-height: 75px;
  font-size: 20px; font-weight: 400; letter-spacing: 0.5px;
}
.btn-sub{
  background: #ffffff; color: #353031;
  border-radius: 5px; padding: 7px 0px; min-height: 36px;
  font-size: 11px; font-weight: 500; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー | — | — |
| 2 | 900px | `#353031` | 1カラム・画像あり | — | — |
| 3 | 5860px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 780px | `#b7282e` | 2カラム・画像あり | — | — |
| 5 | 900px | `#353031` | 1カラム・文字だけ | — | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#57669e`（2） / `#353031`（2） / `#f5f5f5`（1）
- 見出しは左0／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 20px だが、**完全な円は別扱い**で 2 箇所ある（40px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 13枚使っている
- 比率は 3:2（6枚）、1:1（2枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b7282e }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#b7282e; --on:#b7282e }
.section--main .btn--fill{ background:#b7282e; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#b7282e; color:#ffffff; border-radius:25px;
  padding:0px 0px; min-height:46px;
  font-size:20px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:32px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#b7282e` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 68px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（20px と 25px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
