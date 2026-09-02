# ネコリパブリック 保護猫専用の不妊手術病院 ほごねこクリニック ふうのデザイン

- 出典: https://hogoneco-clinic.neco-republic.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ペット･動物･生き物

白地に `#f9bd41` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 1.87、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f9bd41;
  --sub: #998f4e;
  --ink: #2f2f2f;
  --ink-rev: #000000;
  --on: #f9bd41;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Ubuntu", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.87;
  --container: 800px;
  --read: 1004px;
  --section-y: 80px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68.8% |
| 主色 | `#f9bd41` | 25% |
| 副色 | `#998f4e` | 1.9% |
| 差し色 | `#d2d5c0` | 1.6% |

文字色は `#2f2f2f` / `#000000` / `#ffffff` / `#ffad03`。

- 主色 `#f9bd41` は差し色ではなく**面**で使う。画面の25%を占めている。
- 影は`rgba(0, 0, 0, 0.3) 0px 1px 4px -1px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 31 | 0 | 1 |
| `#f8b62d` | 12 | 12 | 0 | 0 |
| `#fff9f2` | 48 | 0 | 0 | 0 |
| `#e5e3df` | 1 | 0 | 0 | 0 |
| `#ffb415` | 5 | 0 | 5 | 4 |
| `#2f2f2f` | 8 | 75 | 0 | 0 |
| `#000000` | 0 | 34 | 0 | 0 |
| `#ffad03` | 0 | 28 | 0 | 0 |

- `#f9bd41` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f9bd41` |
| `#f8b62d` | `#f9bd41` |
| `#e5e3df` | `#f9bd41` |
| `#fff9f2` | `#f9bd41` |

```css
.section{ --on:#f9bd41 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Ubuntu
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.74 |
| 見出し | 22px | 1.82 |
| 小見出し | 20px | 1.8 |
| リード | 16px | — |
| 本文 | 15px | 1.87 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 1.87。

## レイアウト

- コンテンツ幅: 最大 800px／読ませる段は 1004px
- セクションの上下余白: 80 / 40 / 92 / 96px（基本は 80px）
- 並びの間隔: 9 / 10px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1024 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.87 | 15px / 行間 1.87 |
| 見出し | 38px | 28px / 行間 1.86 |
| セクションの上下余白 | 80px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | —px |

- 本文は 15px → 15px、セクション余白は 80px → 60px（PCの75%）。
- 文字サイズの段は 18 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffb415; color: #ffffff;
  border: 2px solid #ffb415;
  border-radius: 70px; padding: 0px 0px; min-height: 70px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: #48b428; color: #ffffff;
  border-radius: 50px; padding: 0px 0px; min-height: 50px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 420px | — | 1カラム・画像あり | 中央 | 右（50:50） |
| 3 | 260px | — | 6カラム・画像あり | — | 全幅 |
| 4 | 340px | — | 1カラム・文字だけ | 中央 | — |
| 5 | 940px | — | 1カラム・画像あり | 中央 | 右（76:24） |
| 6 | 1320px | — | 1カラム・文字だけ | 左 | — |
| 7 | 2300px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 8 | 1060px | — | 1カラム・画像あり | 右 | 左（78:22） |
| 9 | 720px | — | 1カラム・文字だけ | 中央 | — |
| 10 | 660px | `#fff9f2` | 4カラム・画像あり | 中央 | 見出しの下 |
| 11 | 900px | — | 1カラム・画像あり | 左 | 右（49:51） |

- 全11セクション。
- 使われている面の色: `#ffffff`（3） / `#f8b62d`（1） / `#e5e3df`（1） / `#fff9f2`（1）
- 見出しは左3／中央5。
- 2カラムの分け方は 50:50 / 76:24 / 78:22 / 49:51。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 82枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 4:3（42枚）、1:1（14枚）、16:9（10枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f9bd41 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffb415; color:#ffffff; border-radius:70px;
  padding:0px 0px; min-height:70px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:60px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#f9bd41` の面を交互に置く。主色は画面の25%を占めるだけ使う。
- 余白 80px と行間 1.87 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.87 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
