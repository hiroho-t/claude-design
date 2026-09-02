# 自費リハビリ施設 ふうのデザイン

- 出典: https://r-reha.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

#f8f8f8 の地に `#577082` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 17px・行間 1.8、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f8f8f8;
  --main: #577082;
  --sub: #cdcece;
  --ink: #434343;
  --ink-rev: #577082;
  --on: #577082;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 17px;
  --lh-body: 1.8;
  --container: 584px;
  --read: 1200px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f8f8f8` | 90.6% |
| 主色 | `#e1e7e9` | 2.3% |
| 副色 | `#cdcece` | 2.1% |
| 差し色 | `#7b8c87` | 1.8% |
| 差し色 | `#a9bdaf` | 1.7% |

文字色は `#434343` / `#577082` / `#ffffff`。

- 主色 `#577082` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.16) 0px 3px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f8f8f8` | 2 | 0 | 0 | 0 |
| `#eaedf0` | 5 | 0 | 0 | 0 |
| `#ffffff` | 21 | 11 | 2 | 0 |
| `#222222` | 1 | 0 | 0 | 0 |
| `#577082` | 8 | 44 | 12 | 5 |
| `#434343` | 0 | 66 | 0 | 0 |

- `#577082` は文字色として44箇所で使うのが主。面としては8箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。枠線にも12箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eaedf0` | `#577082` |
| `#d5dbe0` | `#577082` |
| `#ffffff` | `#577082` |
| `#f8f8f8`（地） | `#577082` |

```css
.section{ --on:#577082 }                     /* 地の面 */
.section--main{ background:var(--main); color:#577082; --on:#577082 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#577082 }
.section--main .btn--fill{ background:#577082; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d5dbe0`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Lato
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.5 |
| 見出し | 40px | — |
| 小見出し | 24px | 1.8 |
| リード | 20px | 1.8 |
| リード | 18px | — |
| 本文 | 17px | 1.8 |
| 補助 | 14px | — |

- 本文は 17px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 584px／読ませる段は 1200px
- セクションの上下余白: 120 / 56 / 60 / 36px（基本は 120px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1240 / 1024 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.8 | 17px / 行間 2 |
| 見出し | 56px | 28px / 行間 1.5 |
| セクションの上下余白 | 120px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 17px → 17px、セクション余白は 120px → 24px（PCの20%）。
- 文字サイズの段は 28 / 20 / 18 / 17 / 15px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #577082; color: #ffffff;
  border: 1px solid #577082;
  border-radius: 60px; padding: 0px 0px; min-height: 60px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #577082;
  border: 1px solid #d5dbe0;
  border-radius: 8px; padding: 0px 0px; min-height: 56px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.51px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1140px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 1120px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1180px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 640px | — | 1カラム・画像あり | 中央 | — |
| 5 | 740px | — | 6カラム | 中央 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#eaedf0`（5） / `#d5dbe0`（3） / `#ffffff`（3） / `#f8f8f8`（1）
- 見出しは左0／中央5。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d5dbe0。面によって入れ替える */
  border-radius: 0px;
  padding: 22px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（48px×3、144px×3、40px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 34枚使っている
- 比率は 1:1（30枚）、4:3（3枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#577082 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#577082; --on:#577082 }
.section--main .btn--fill{ background:#577082; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:22px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:17px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:17px; --section-y:24px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f8f8f8` のまま。主色 `#577082` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
