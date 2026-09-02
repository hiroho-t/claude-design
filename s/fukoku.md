# 【公式】フコク生命 ふうのデザイン

- 出典: https://www.fukoku-life.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／金融･投資･保険･士業

白地に `#760b24` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.6、セクション間 36px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #760b24;
  --sub: #760b24;
  --ink: #414141;
  --ink-rev: #686868;
  --on: #760b24;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "line", sans-serif;
  --font-en: "line", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.6;
  --container: 1280px;
  --read: 1200px;
  --section-y: 36px;
  --gap: 20px;
  --radius: 6px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.7% |
| 主色 | `#f7e2e4` | 7.9% |
| 副色 | `#760b24` | 3.1% |
| 差し色 | `#f8d5c9` | 3% |
| 差し色 | `#e5b0b0` | 2.5% |
| 差し色 | `#97b0b1` | 2.4% |

文字色は `#414141` / `#686868` / `#c6061c` / `#ffffff`。

- 主色 `#760b24` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(65, 65, 65, 0.16) 0px 3px 6px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 43 | 15 | 0 | 4 |
| `#f7f7f7` | 2 | 0 | 0 | 0 |
| `#fdeff0` | 7 | 0 | 0 | 6 |
| `#c6061c` | 13 | 26 | 24 | 6 |
| `#818181` | 1 | 0 | 0 | 1 |
| `#414141` | 0 | 157 | 1 | 0 |
| `#686868` | 0 | 14 | 0 | 0 |

- `#760b24` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#760b24` |
| `#f7f7f7` | `#760b24` |
| `#fdeff0` | `#760b24` |

```css
.section{ --on:#760b24 }                     /* 地の面 */
.section--main{ background:var(--main); color:#686868; --on:#686868 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#686868 }
.section--main .btn--fill{ background:#686868; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e2e2e2`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: line
- 欧文: line
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.6 |
| 見出し | 28px | 1.61 |
| 小見出し | 20px | 1.6 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.6 |

- 本文は 14px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 1200px
- セクションの上下余白: 36 / 40 / 100 / 32px（基本は 36px）
- 並びの間隔: 11 / 15 / 20 / 25px
- 角丸: 6px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.6 | 15px / 行間 1.6 |
| 見出し | 32px | 25px / 行間 1.6 |
| セクションの上下余白 | 36px | 32px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 20px | 16px |

- 本文は 14px → 15px、セクション余白は 36px → 32px（PCの89%）。
- 文字サイズの段は 17 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #c6061c;
  border: 1px solid #c6061c;
  border-radius: 7px; padding: 10px 10px; min-height: 44px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #414141;
  border-radius: 0px; padding: 0px 0px; min-height: 44px;
  font-size: 26px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #c6061c; color: #ffffff;
  border: 1px solid #c6061c;
  border-radius: 7px; padding: 10px 10px; min-height: 44px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 480px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 9 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 10 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 11 | 480px | — | 1カラム・画像あり | — | 全幅 |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（27） / `#f7f7f7`（2） / `#fdeff0`（1）


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e2e2e2。面によって入れ替える */
  border-radius: 0px;
  padding: 40px 0px;
}
```


## 丸いもの

角丸は 6px だが、**完全な円は別扱い**で 9 箇所ある（40px×5、48px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 28枚使っている。うち 22 枚は画面いっぱいに置く
- 比率は 3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#760b24 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:480px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#686868; --on:#686868 }
.section--main .btn--fill{ background:#686868; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:40px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#c6061c; border-radius:7px;
  padding:10px 10px; min-height:44px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:32px; --gap:16px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#760b24` は文字と小さな部品にだけ使う。
- 余白 36px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（6px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
