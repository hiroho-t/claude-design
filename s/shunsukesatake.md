# サタケシュンスケ / イラストレーター・キャラクターデザイナー ふうのデザイン

- 出典: https://shunsukesatake.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ポートフォリオサイト･プロフィールサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

#fffefd の地に `#2d190a` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 1.6、セクション間 36px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fffefd;
  --main: #2d190a;
  --sub: #666666;
  --ink: #2d1001;
  --ink-rev: #ffffff;
  --on: #2d190a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.6;
  --container: 1304px;
  --read: 680px;
  --section-y: 36px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fffefd` | 58.7% |
| 主色 | `#2d190a` | 9.6% |
| 副色 | `#666666` | 7.3% |
| 差し色 | `#ebe7e4` | 4.6% |
| 差し色 | `#dbccc6` | 3.4% |
| 差し色 | `#9dbec3` | 3.2% |

文字色は `#2d1001` / `#ffffff` / `#6d6c69` / `#000000`。

- 主色 `#2d190a` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#666666` | 12 | 21 | 0 | 0 |
| `#2d1001` | 6 | 82 | 0 | 0 |
| `#ffffff` | 2 | 28 | 1 | 0 |
| `#fceede` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#2d190a` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#666666` | `#ffffff` |
| `#f0f0f0` | `#2d190a` |
| `#2d1001` | `#ffffff` |

```css
.section{ --on:#2d190a }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#eeeeee`。ただしその囲みは `#fffefd` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | — |
| 見出し | 20px | 1.5 |
| 本文 | 18px | 1.6 |
| 補助 | 16px | 1 |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 18px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1304px／読ませる段は 680px
- セクションの上下余白: 36 / 92 / 48 / 120px（基本は 36px）
- 並びの間隔: 8 / 15 / 20 / 32px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1150 / 1024 / 880 / 768 / 430px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.6 | 15px / 行間 1.7 |
| 見出し | 22px | 17px / 行間 1 |
| セクションの上下余白 | 36px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 20px | 8px |

- 本文は 18px → 15px、セクション余白は 36px → 32px（PCの89%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 35px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.65px;
}
.btn-sub{
  background: transparent; color: #2d1001;
  border: 1px solid #dfdcd9;
  border-radius: 1440px; padding: 11px 15px; min-height: 38px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.64px;
}
.btn-sub{
  background: transparent; color: #2d1001;
  border: 1px solid #dfdcd9;
  border-radius: 1440px; padding: 15px 25px; min-height: 60px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 900px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#666666`（12） / `#f0f0f0`（3） / `#2d1001`（3）


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #eeeeee。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #2d1001;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 11px 15px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 9 箇所ある（24px×5、32px×2、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 28枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（26枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2d190a }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:35px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:880px){
  :root{ --fs-body:15px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#2d190a` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 36px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
