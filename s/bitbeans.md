# 東京・新宿のWEB制作会社・ホームページ制作会社 ふうのデザイン

- 出典: https://bitbeans.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#66707f` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 2.33、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #66707f;
  --sub: #d2d3d4;
  --ink: #292d33;
  --ink-rev: #91949a;
  --on: #66707f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanMP", sans-serif;
  --font-en: "YakuHanMP", sans-serif;
  --fs-body: 14px;
  --lh-body: 2.33;
  --container: 1080px;
  --read: 660px;
  --section-y: 92px;
  --gap: 9px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 91.8% |
| 主色 | `#eeeeee` | 2.2% |
| 副色 | `#d2d3d4` | 1.6% |

文字色は `#292d33` / `#91949a` / `#ffffff` / `#66707f`。

- 主色 `#66707f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 10px 10px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fafafa` | 14 | 7 | 0 | 0 |
| `#292d33` | 1 | 200 | 0 | 0 |
| `#66707f` | 1 | 3 | 0 | 0 |
| `#32323a` | 1 | 0 | 0 | 0 |
| `#00aad9` | 1 | 0 | 0 | 1 |
| `#91949a` | 0 | 80 | 0 | 0 |

- `#66707f` は文字色として3箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fafafa` | `#66707f` |
| `#ffffff`（地） | `#66707f` |
| `#292d33` | `#91949a` |
| `#66707f`（主色） | `#91949a` |

```css
.section{ --on:#66707f }                     /* 地の面 */
.section--main{ background:var(--main); color:#91949a; --on:#91949a }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#91949a }
.section--main .btn--fill{ background:#91949a; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fafafa` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanMP
- 欧文: YakuHanMP
- ウェイトは 550 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 31px | 1.44 |
| 見出し | 22px | 1.3 |
| 小見出し | 18px | — |
| リード | 16px | 1 |
| 本文 | 14px | 2.33 |
| 補助 | 13px | 2.33 |
| 注記 | 11px | — |

- 本文は 14px・行間 2.33。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1080px／読ませる段は 660px
- セクションの上下余白: 92 / 144 / 56 / 72px（基本は 92px）
- 並びの間隔: 5 / 7 / 9 / 26px
- 角丸: 0px が基本。大きな面だけ 29px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1601 / 1025 / 1024 / 767 / 751px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2.33 | 14px / 行間 2.33 |
| 見出し | 31px | 29px / 行間 1.62 |
| セクションの上下余白 | 92px | 28px |
| 左右の余白 | — | 65px |
| 並びの間隔 | 9px | 12px |

- 本文は 14px → 14px、セクション余白は 92px → 28px（PCの30%）。
- 文字サイズの段は 18 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #00aad9; color: #ffffff;
  border-radius: 29px; padding: 9px 10px; min-height: 30px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.25px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | 中央 | 右（46:54） |
| 2 | 920px | — | 6カラム・画像あり | 左 | — |
| 3 | 2480px | `#fafafa` | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 860px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 520px | — | 4カラム・画像あり | 左 | — |
| 6 | 680px | `#fafafa` | 6カラム・画像あり | 左 | 右（15:85） |
| 7 | 720px | — | 1カラム・文字だけ | 左 | — |
| 8 | 720px | `#fafafa` | 1カラム・画像あり | 右 | 見出しの下 |
| 9 | 560px | — | 1カラム・画像あり | 左 | — |
| 10 | 300px | — | 帯・区切り | 右 | 左（33:67） |

- 全10セクション。
- 使われている面の色: `#fafafa`（10） / `#ffffff`（3） / `#292d33`（1） / `#66707f`（1）
- 見出しは左7／中央1。
- 2カラムの分け方は 46:54 / 15:85 / 33:67。半分ずつには割らない。


## 部品

囲み（57箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 0px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 15px 0px;
}
```


## 画像

- 89枚使っている
- 比率は 16:9（66枚）、1:1（11枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#66707f }
.container{ width:min(100% - 130px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#91949a; --on:#91949a }
.section--main .btn--fill{ background:#91949a; color:var(--main) }
.card{ background:transparent;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#00aad9; color:#ffffff; border-radius:29px;
  padding:9px 10px; min-height:30px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:28px; --gap:12px; }
  .container{ width:calc(100% - 130px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#66707f` は文字と小さな部品にだけ使う。
- 余白 92px と行間 2.33 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.33 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 29px 以外）を混ぜない。
