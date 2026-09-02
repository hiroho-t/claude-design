# 桜商会 ふうのデザイン

- 出典: https://sakura-copy.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／本･出版･印刷／レスポンシブ

白地に `#222b3c` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 2.1、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #222b3c;
  --sub: #d8e0e9;
  --ink: #edf1f7;
  --ink-rev: #30416b;
  --on: #222b3c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "yakuhanjp", sans-serif;
  --font-en: "yakuhanjp", sans-serif;
  --fs-body: 15px;
  --lh-body: 2.1;
  --container: 1292px;
  --read: 676px;
  --section-y: 60px;
  --gap: 20px;
  --radius: 14px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 78.2% |
| 主色 | `#222b3c` | 6.2% |
| 副色 | `#d8e0e9` | 4.4% |
| 差し色 | `#98a7b7` | 3.1% |
| 差し色 | `#afc1d5` | 2.6% |
| 差し色 | `#c9cfd7` | 2.3% |

文字色は `#edf1f7` / `#30416b` / `#ffffff` / `#d3deeb`。

- 主色 `#222b3c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px 1px 5px 2px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 14 | 0 | 2 |
| `#f1f4f8` | 5 | 6 | 0 | 3 |
| `#222b3c` | 2 | 0 | 0 | 1 |
| `#283346` | 6 | 0 | 0 | 3 |
| `#1a57b1` | 7 | 7 | 0 | 1 |
| `#30416b` | 0 | 76 | 1 | 0 |
| `#d3deeb` | 0 | 5 | 3 | 0 |

- `#222b3c` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#222b3c` |
| `#f1f4f8` | `#222b3c` |
| `#222b3c`（主色） | `#30416b` |

```css
.section{ --on:#222b3c }                     /* 地の面 */
.section--main{ background:var(--main); color:#30416b; --on:#30416b }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#30416b }
.section--main .btn--fill{ background:#30416b; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f1f4f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: yakuhanjp
- 欧文: yakuhanjp
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 250px | — |
| 見出し | 20px | 1.8 |
| 小見出し | 18px | — |
| リード | 16px | 1.6 |
| 本文 | 15px | 2.1 |
| 補助 | 14px | — |

- 本文は 15px・行間 2.1。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1292px／読ませる段は 676px
- セクションの上下余白: 60 / 120 / 72 / 180px（基本は 60px）
- 並びの間隔: 5 / 15 / 20 / 80px
- 角丸: 14px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 768 / 576 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2.1 | 14px / 行間 2.4 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 15px |

- 本文は 15px → 14px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 128 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #30416b;
  border-radius: 0px; padding: 0px 0px; min-height: 65px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.45px;
}
.btn-sub{
  background: #f1f4f8; color: #30416b;
  border-radius: 50px; padding: 20px 20px; min-height: 65px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.45px;
}
.btn-sub{
  background: transparent; color: #e1e1e1;
  border-radius: 0px; padding: 0px 0px; min-height: 65px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.45px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1300px | — | ヒーロー（画像） | 左 | — |
| 2 | 2040px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1240px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1160px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 5 | 860px | — | 1カラム・画像あり | — | 全面 |
| 6 | 620px | `#222b3c` | 1カラム・画像あり | 左 | — |
| 7 | 1100px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（8） / `#f1f4f8`（1） / `#222b3c`（1）
- 見出しは左2／中央4。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 15px;
  padding: 30px 30px;
}
```


## 丸いもの

角丸は 14px だが、**完全な円は別扱い**で 1 箇所ある（176px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 26枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（18枚）、3:4（4枚）、16:9（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#222b3c }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1300px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#30416b; --on:#30416b }
.section--main .btn--fill{ background:#30416b; color:var(--main) }
.card{ background:#ffffff;
  border-radius:15px; padding:30px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#30416b; border-radius:0px;
  padding:0px 0px; min-height:65px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:15px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#222b3c` は文字と小さな部品にだけ使う。
- 余白 60px と行間 2.1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 15px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.1 より詰めない。
- 中途半端な角丸（14px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
