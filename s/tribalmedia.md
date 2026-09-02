# 株式会社トライバルメディアハウス ふうのデザイン

- 出典: https://www.tribalmedia.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#182456` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #182456;
  --sub: #dedcd4;
  --ink: #221815;
  --ink-rev: #ffffff;
  --on: #182456;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1200px;
  --read: 724px;
  --section-y: 100px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.3% |
| 主色 | `#182456` | 6.3% |
| 副色 | `#dedcd4` | 3% |
| 差し色 | `#cbcac9` | 2.1% |
| 差し色 | `#efefef` | 1.9% |
| 差し色 | `#86aeb6` | 1.6% |

文字色は `#221815` / `#ffffff` / `#000000` / `#808080`。

- 主色 `#182456` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 34 | 21 | 3 | 9 |
| `#f2f2f2` | 7 | 0 | 0 | 0 |
| `#dbdbdb` | 1 | 0 | 7 | 0 |
| `#182456` | 1 | 0 | 0 | 0 |
| `#e43d1b` | 1 | 1 | 1 | 1 |
| `#221815` | 0 | 132 | 0 | 0 |
| `#000000` | 1 | 11 | 0 | 0 |
| `#808080` | 0 | 16 | 0 | 0 |

- `#182456` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#182456` |
| `#f2f2f2` | `#182456` |
| `#dbdbdb` | `#182456` |
| `#182456`（主色） | `#ffffff` |

```css
.section{ --on:#182456 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#dbdbdb` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.25 |
| 見出し | 32px | 1.25 |
| 小見出し | 24px | — |
| リード | 22px | 1.5 |
| リード | 20px | 1.5 |
| リード | 18px | 1.4 |
| 本文 | 16px | 2 |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 724px
- セクションの上下余白: 100 / 48 / 32 / 40px（基本は 100px）
- 並びの間隔: 12 / 20 / 32 / 40px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 16px / 行間 2 |
| 見出し | 36px | 20px / 行間 1.25 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 32px | 10px |

- 本文は 16px → 16px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #221815;
  border: 1px solid #d1d1d1;
  border-radius: 32px; padding: 10px 38px; min-height: 64px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #221815;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 20px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 520px | `#ffffff` | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 300px | — | 帯・区切り | 左 | 全幅 |
| 3 | 1180px | `#ffffff` | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1620px | `#f2f2f2` | 5カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1520px | `#ffffff` | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 800px | `#f2f2f2` | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 460px | `#ffffff` | 3カラム・画像あり | 左 | — |
| 8 | 460px | `#f2f2f2` | 3カラム・画像あり | 左 | — |
| 9 | 560px | `#ffffff` | 1カラム・画像あり | 中央 | — |
| 10 | 500px | `#f2f2f2` | 2カラム・画像あり | 左 | 見出しの下 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（21） / `#f2f2f2`（4） / `#dbdbdb`（1） / `#182456`（1）
- 見出しは左4／中央6。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 20px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 24枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 16:9（14枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#182456 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:520px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:20px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#221815; border-radius:32px;
  padding:10px 38px; min-height:64px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#182456` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
