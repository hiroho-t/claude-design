# フジオカデンタルクリニック │ 三木市・北鈴蘭台の歯科医院 ふうのデザイン

- 出典: https://fujioka-dental.jp/index.html
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#2f6284` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2f6284;
  --sub: #2f6284;
  --ink: #333333;
  --ink-rev: #00406c;
  --on: #2f6284;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 1248px;
  --read: 600px;
  --section-y: 84px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 61.6% |
| 主色 | `#e2e6e9` | 11.3% |
| 副色 | `#2f6284` | 7.6% |
| 差し色 | `#c2bebb` | 7.1% |
| 差し色 | `#00406c` | 6% |
| 差し色 | `#b8a292` | 2.8% |

文字色は `#333333` / `#00406c` / `#ffffff` / `#5298d6`。

- 主色 `#2f6284` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#cde2f3` | 1 | 0 | 0 | 0 |
| `#ffffff` | 2 | 21 | 2 | 0 |
| `#00406c` | 1 | 27 | 0 | 0 |
| `#5298d6` | 3 | 13 | 0 | 0 |
| `#333333` | 0 | 23 | 0 | 0 |

- `#2f6284` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#cde2f3` | `#2f6284` |
| `#ffffff`（地） | `#2f6284` |
| `#00406c` | `#00406c` |

```css
.section{ --on:#2f6284 }                     /* 地の面 */
.section--main{ background:var(--main); color:#00406c; --on:#00406c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#00406c }
.section--main .btn--fill{ background:#00406c; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Montserrat
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.7 |
| 見出し | 39px | 1.6 |
| 小見出し | 36px | 1.6 |
| リード | 32px | — |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.6 |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1248px／読ませる段は 600px
- セクションの上下余白: 84 / 72 / 88 / 172px（基本は 84px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 16px / 行間 1.6 |
| 見出し | 40px | 24px / 行間 1.5 |
| セクションの上下余白 | 84px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 84px → 32px（PCの38%）。
- 文字サイズの段は 24 / 20 / 18 / 16 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #5298d6;
  border-radius: 0px; padding: 0px 56px; min-height: 28px;
  font-size: 18px; font-weight: 600; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | `#cde2f3` | ヒーロー（画像） | — | 全幅 |
| 2 | 700px | — | 1カラム・画像あり | 右 | 左（60:40） |
| 3 | 520px | — | 6カラム・画像あり | — | 全面 |
| 4 | 1120px | — | 6カラム | 左 | — |
| 5 | 900px | — | 2カラム・画像あり | 中央 | 左（52:48） |
| 6 | 1140px | — | 2カラム・画像あり | 中央 | 右（52:48） |
| 7 | 1400px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 8 | 500px | — | 2カラム | — | — |

- 全8セクション。
- 使われている面の色: `#cde2f3`（1） / `#ffffff`（1） / `#00406c`（1）
- 見出しは左1／中央3。
- 2カラムの分け方は 60:40 / 52:48 / 52:48。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 10px;
  padding: 26px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（40px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 12枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 4:3（6枚）、3:2（4枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2f6284 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#00406c; --on:#00406c }
.section--main .btn--fill{ background:#00406c; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:26px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#5298d6; border-radius:0px;
  padding:0px 56px; min-height:28px;
  font-size:18px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#2f6284` は文字と小さな部品にだけ使う。
- 余白 84px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
