# 株式会社サンアンドホープ ふうのデザイン

- 出典: https://www.sun-hope.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／農業･畜産業･林業･漁業･園芸

白地に `#a3b093` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.43、セクション間 108px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #a3b093;
  --sub: #0f0c0b;
  --ink: #374453;
  --ink-rev: #251e1c;
  --on: #a3b093;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.43;
  --container: 1116px;
  --read: 624px;
  --section-y: 108px;
  --gap: 23px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68% |
| 主色 | `#deecea` | 11.4% |
| 副色 | `#0f0c0b` | 6% |
| 差し色 | `#a3b093` | 3.6% |
| 差し色 | `#2a261e` | 3.2% |
| 差し色 | `#53b361` | 2.7% |

文字色は `#374453` / `#251e1c` / `#ffffff` / `#999999`。

- 主色 `#a3b093` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px 0px 50px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 20 | 1 | 1 |
| `#f4f4f4` | 3 | 1 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#44b45c` | 9 | 7 | 7 | 6 |
| `#251e1c` | 1 | 11 | 0 | 0 |
| `#374453` | 0 | 34 | 0 | 0 |
| `#999999` | 0 | 8 | 0 | 0 |

- `#a3b093` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#a3b093` |
| `#f4f4f4` | `#a3b093` |
| `#000000` | `#251e1c` |
| `#44b45c` | `#a3b093` |

```css
.section{ --on:#a3b093 }                     /* 地の面 */
.section--main{ background:var(--main); color:#251e1c; --on:#251e1c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#251e1c }
.section--main .btn--fill{ background:#251e1c; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f4f4f4` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 1.09 |
| 見出し | 52px | 1.3 |
| 小見出し | 20px | — |
| リード | 19px | — |
| 本文 | 16px | 1.43 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.43。

## レイアウト

- コンテンツ幅: 最大 1116px／読ませる段は 624px
- セクションの上下余白: 108 / 52 / 56 / 92px（基本は 108px）
- 並びの間隔: 11 / 20 / 23 / 90px
- 角丸: 0px が基本。大きな面だけ 23px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.43 | 15px / 行間 1.43 |
| 見出し | 64px | 30px / 行間 1.2 |
| セクションの上下余白 | 108px | 240px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 23px | 16px |

- 本文は 16px → 15px、セクション余白は 108px → 240px（PCの222%）。
- 文字サイズの段は 30 / 15 / 14 / 11 / 10px。

## ボタン

```css
.btn{
  background: #44b45c; color: #ffffff;
  border: 2px solid #44b45c;
  border-radius: 112489px; padding: 20px 32px; min-height: 68px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.585px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 68px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.585px;
}
.btn-sub{
  background: transparent; color: #44b45c;
  border-radius: 0px; padding: 0px 0px; min-height: 90px;
  font-size: 14px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 820px | — | 1カラム・画像あり | 右 | 左（25:75） |
| 3 | 1480px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 840px | — | 1カラム・画像あり | 左 | 右（75:25） |
| 5 | 520px | — | 1カラム・画像あり | 右 | 左（38:62） |
| 6 | 600px | — | 2カラム・画像あり | 中央 | — |
| 7 | 500px | — | 1カラム・画像あり | 左 | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#f4f4f4`（3） / `#000000`（1） / `#44b45c`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 25:75 / 75:25 / 38:62。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 23px;
  padding: 40px 46px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（88px×2、136px×1、320px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 39枚使っている。うち 16 枚は画面いっぱいに置く
- 比率は 1:1（10枚）、4:3（6枚）、3:4（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a3b093 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#251e1c; --on:#251e1c }
.section--main .btn--fill{ background:#251e1c; color:var(--main) }
.card{ background:#ffffff;
  border-radius:23px; padding:40px 46px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#44b45c; color:#ffffff; border-radius:112489px;
  padding:20px 32px; min-height:68px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:240px; --gap:16px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#a3b093` は文字と小さな部品にだけ使う。
- 余白 108px と行間 1.43 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 23px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.43 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 23px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
