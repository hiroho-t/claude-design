# 株式会社スタメン ふうのデザイン

- 出典: https://stmn.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#1888f0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 1.92、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1888f0;
  --sub: #595959;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #1888f0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "__Inter_516c7b", sans-serif;
  --font-en: "__Inter_516c7b", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.92;
  --container: 1116px;
  --read: 590px;
  --section-y: 96px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 77.6% |
| 主色 | `#262626` | 7.4% |
| 副色 | `#595959` | 6.8% |
| 差し色 | `#9c9c9a` | 1.5% |

文字色は `#000000` / `#ffffff` / `#1888f0`。

- 主色 `#1888f0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.09) 2px 2px 17px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e8e8e8` | 1 | 0 | 0 | 0 |
| `#f9f9f9` | 4 | 34 | 0 | 0 |
| `#262626` | 1 | 0 | 0 | 0 |
| `#1888f0` | 3 | 4 | 11 | 0 |
| `#000000` | 0 | 90 | 5 | 0 |

- `#1888f0` は面3箇所・文字4箇所を行き来する。ボタンの地には使っていない。枠線にも11箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1888f0` |
| `#e8e8e8` | `#1888f0` |
| `#262626` | `#ffffff` |

```css
.section{ --on:#1888f0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#e8e8e8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: __Inter_516c7b
- 欧文: __Inter_516c7b
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 17px | — |
| 見出し | 16px | — |
| 本文 | 15px | 1.92 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 11px | — |

- 本文は 15px・行間 1.92。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1116px／読ませる段は 590px
- セクションの上下余白: 96 / 248 / 72 / 80px（基本は 96px）
- 並びの間隔: 5 / 11 / 16 / 38px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1650 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.92 | 14px / 行間 1.7 |
| セクションの上下余白 | 96px | 32px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 16px | 8px |

- 本文は 15px → 14px、セクション余白は 96px → 32px（PCの33%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 2px solid #1888f0;
  border-radius: 74px; padding: 0px 0px; min-height: 44px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.16px;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 42px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.16px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 42px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.16px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1040px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1040px | — | 1カラム・画像あり | 中央 | 全幅 |
| 3 | 280px | — | 帯・区切り | — | 全面 |
| 4 | 1260px | — | 1カラム・画像あり | 左 | 右（20:80） |
| 5 | 1300px | `#e8e8e8` | 4カラム・画像あり | 左 | 見出しの下 |
| 6 | 1200px | — | 1カラム・画像あり | 中央 | — |
| 7 | 560px | — | 6カラム・画像あり | 左 | 全幅 |
| 8 | 1080px | — | 1カラム・画像あり | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#e8e8e8`（1） / `#262626`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 20:80。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.09) 2px 2px 17px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 7 箇所ある（40px×6、128px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 20枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 21:9（5枚）、3:2（4枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1888f0 }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1040px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:4px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:74px;
  padding:0px 0px; min-height:44px;
  font-size:17px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1888f0` は文字と小さな部品にだけ使う。
- 余白 96px と行間 1.92 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.92 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
