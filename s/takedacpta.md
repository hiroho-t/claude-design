# たけだ税理士事務所 ふうのデザイン

- 出典: https://takedacpta.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／金融･投資･保険･士業

#f9f6f0 の地に `#1d4ed8` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f9f6f0;
  --main: #1d4ed8;
  --sub: #e4e2e1;
  --ink: #1c1917;
  --ink-rev: #1d4ed8;
  --on: #1d4ed8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "proxima-soft", sans-serif;
  --font-en: "proxima-soft", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1232px;
  --read: 564px;
  --section-y: 60px;
  --gap: 10px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f9f6f0` | 90.9% |
| 主色 | `#c5c3c1` | 3% |
| 副色 | `#e4e2e1` | 2.9% |

文字色は `#1c1917` / `#1d4ed8` / `#979591` / `#ea3800`。

- 主色 `#1d4ed8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f6f0` | 3 | 0 | 0 | 0 |
| `#ffffff` | 11 | 1 | 0 | 0 |
| `#ea3800` | 1 | 8 | 0 | 1 |
| `#1c1917` | 0 | 46 | 12 | 0 |
| `#1d4ed8` | 0 | 34 | 0 | 0 |
| `#979591` | 0 | 7 | 0 | 0 |

- `#1d4ed8` は文字色として34箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#1d4ed8` |
| `#f9f6f0`（地） | `#1d4ed8` |

```css
.section{ --on:#1d4ed8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1d4ed8; --on:#1d4ed8 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1d4ed8 }
.section--main .btn--fill{ background:#1d4ed8; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#1c1917`。ただしその囲みは `#f9f6f0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: proxima-soft
- 欧文: proxima-soft
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 2.2 |
| 見出し | 28px | 1.5 |
| 小見出し | 20px | 1.5 |
| リード | 18px | — |
| 本文 | 16px | 1.8 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1232px／読ませる段は 564px
- セクションの上下余白: 60 / 100 / 40 / 80px（基本は 60px）
- 並びの間隔: 4 / 8 / 10 / 30px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 992 / 991 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 32px | 24px / 行間 1.5 |
| セクションの上下余白 | 60px | 52px |
| 左右の余白 | — | 28px |
| 並びの間隔 | 10px | 10px |

- 本文は 16px → 14px、セクション余白は 60px → 52px（PCの87%）。
- 文字サイズの段は 24 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ea3800; color: #ffffff;
  border-radius: 100px; padding: 16px 32px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 700px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 700px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 700px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 700px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（11） / `#f9f6f0`（1）


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 2px solid var(--on);   /* 実測は #1c1917。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 19枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（6枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1d4ed8 }
.container{ width:min(100% - 56px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1d4ed8; --on:#1d4ed8 }
.section--main .btn--fill{ background:#1d4ed8; color:var(--main) }
.card{ background:#ffffff; border:2px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ea3800; color:#ffffff; border-radius:100px;
  padding:16px 32px; min-height:58px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:52px; --gap:10px; }
  .container{ width:calc(100% - 56px) }
}
```

## 守ること

やること

- 地は `#f9f6f0` のまま。主色 `#1d4ed8` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
