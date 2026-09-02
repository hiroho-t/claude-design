# 5歳児健診ポータル ふうのデザイン

- 出典: https://gosaiji-kenshin.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／病院･クリニック･歯医者･医療･薬／ベビー･子ども･子育て

#fff4e3 の地に `#fff4e3` を大きな面で置く配色。影も枠線もほとんど使わない。本文 20px・行間 2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fff4e3;
  --main: #fff4e3;
  --sub: #ffffff;
  --ink: #3a3a3a;
  --ink-rev: #ffffff;
  --on: #fff4e3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 20px;
  --lh-body: 2;
  --container: 644px;
  --read: 1084px;
  --section-y: 40px;
  --gap: 20px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fff4e3` | 57.1% |
| 主色 | `#ffe9ca` | 11.5% |
| 副色 | `#ffffff` | 7.9% |
| 差し色 | `#d26e49` | 6% |
| 差し色 | `#17aa6c` | 3.2% |
| 差し色 | `#3e7eb3` | 2.7% |

文字色は `#3a3a3a` / `#ffffff` / `#257ec7` / `#17aa6c`。

- 主色 `#fff4e3` は差し色ではなく**面**で使う。画面の57%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 53 | 16 | 0 | 5 |
| `#ffe9ca` | 15 | 0 | 1 | 10 |
| `#d26e49` | 4 | 1 | 0 | 0 |
| `#17aa6c` | 4 | 1 | 0 | 0 |
| `#257ec7` | 3 | 24 | 23 | 0 |
| `#3a3a3a` | 0 | 71 | 5 | 0 |

- `#fff4e3` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#fff4e3` |
| `#ffe9ca` | `#fff4e3` |
| `#ffd954` | `#fff4e3` |
| `#17aa6c` | `#ffffff` |

```css
.section{ --on:#fff4e3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#257ec7`。ただしその囲みは `#fff4e3` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Montserrat
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 24px | 1.8 |
| 本文 | 20px | 1.55 |
| 補助 | 18px | — |
| 注記 | 16px | 1.55 |
| 注記 | 12px | — |

- 本文は 20px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 644px／読ませる段は 1084px
- セクションの上下余白: 40 / 112 / 136 / 56px（基本は 40px）
- 並びの間隔: 12 / 16 / 20 / 32px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1023 / 767 / 639 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 2 | 15px / 行間 1.7 |
| 見出し | 28px | 18px / 行間 1.8 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 20px | 20px |

- 本文は 20px → 15px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 10px。

## ボタン

```css
.btn{
  background: #ffe9ca; color: #3a3a3a;
  border-radius: 0px; padding: 10px 30px; min-height: 45px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #3a3a3a;
  border-radius: 0px; padding: 8px 0px; min-height: 38px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 20px; font-weight: 700; letter-spacing: 2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 920px | — | ヒーロー | — | — |
| 2 | 1780px | — | 1カラム・画像あり | — | 全面 |
| 3 | 960px | — | 4カラム・画像あり | 右 | 見出しの下 |
| 4 | 240px | — | 帯・区切り | — | — |
| 5 | 800px | — | 1カラム・画像あり | 右 | 左（48:52） |
| 6 | 360px | — | 1カラム・文字だけ | — | — |
| 7 | 1140px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 8 | 160px | — | 帯・区切り | — | — |
| 9 | 740px | — | 6カラム・画像あり | 左 | 左（59:41） |
| 10 | 160px | — | 帯・区切り | — | — |
| 11 | 460px | — | 1カラム・画像あり | 左 | 右（12:88） |
| 12 | 160px | — | 帯・区切り | — | — |
| 13 | 560px | — | 1カラム・画像あり | 左 | 右（16:84） |

- 全13セクション。
- 使われている面の色: `#ffffff`（22） / `#ffe9ca`（5） / `#ffd954`（2） / `#17aa6c`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 48:52 / 59:41 / 12:88 / 16:84。半分ずつには割らない。


## 部品

囲み（21箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 3px solid var(--on);   /* 実測は #257ec7。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 18 箇所ある（48px×13、40px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 50枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（26枚）、4:3（11枚）、1:1（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fff4e3 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:920px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:3px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffe9ca; color:#3a3a3a; border-radius:0px;
  padding:10px 30px; min-height:45px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:15px; --section-y:32px; --gap:20px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#fff4e3` の面を交互に置く。主色は画面の57%を占めるだけ使う。
- 余白 40px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 3px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
