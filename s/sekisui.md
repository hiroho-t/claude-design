# 積水化学工業株式会社 ふうのデザイン

- 出典: https://www.sekisui.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／科学･研究

白地に `#a5d3e9` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #a5d3e9;
  --sub: #3288c8;
  --ink: #555555;
  --ink-rev: #004ea2;
  --on: #a5d3e9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 964px;
  --read: 1294px;
  --section-y: 120px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.9% |
| 主色 | `#a5d3e9` | 4.3% |
| 副色 | `#3288c8` | 3.7% |
| 差し色 | `#ddf5fb` | 3.5% |
| 差し色 | `#004b9c` | 3.5% |
| 差し色 | `#89a0b4` | 3% |

文字色は `#555555` / `#004ea2` / `#ffffff` / `#333333`。

- 主色 `#a5d3e9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 78, 162, 0.1) 0px 10px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 55 | 11 | 0 | 0 |
| `#1d93ed` | 1 | 0 | 0 | 0 |
| `#f6f6f6` | 7 | 0 | 0 | 0 |
| `#004ea2` | 7 | 45 | 9 | 5 |
| `#555555` | 0 | 270 | 0 | 0 |
| `#333333` | 0 | 6 | 0 | 0 |

- `#a5d3e9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#a5d3e9` |
| `#ebf3f5` | `#a5d3e9` |
| `#1d93ed` | `#004ea2` |
| `#004ea2` | `#004ea2` |

```css
.section{ --on:#a5d3e9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#004ea2; --on:#004ea2 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#004ea2 }
.section--main .btn--fill{ background:#004ea2; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#004ea2` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 600 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1 |
| 見出し | 32px | 1.6 |
| 小見出し | 28px | 1.8 |
| リード | 24px | 1 |
| リード | 20px | — |
| リード | 18px | — |
| リード | 16px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 964px／読ませる段は 1294px
- セクションの上下余白: 120 / 48 / 96 / 40px（基本は 120px）
- 並びの間隔: 16 / 20 / 24 / 32px
- 角丸: 0px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1326 / 1024 / 1023 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 14px / 行間 1 |
| 見出し | 40px | 26px / 行間 1 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 15px |
| 並びの間隔 | 24px | 4px |

- 本文は 14px → 14px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #004ea2; color: #ffffff;
  border: 1px solid #004ea2;
  border-radius: 50px; padding: 20px 80px; min-height: 74px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.512px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 74px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.512px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1040px | `#ffffff` | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 360px | `#ffffff` | 1カラム・画像あり | 左 | — |
| 3 | 1340px | — | 4カラム・画像あり | 左 | 右（52:48） |
| 4 | 960px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 2040px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1600px | `#1d93ed` | 1カラム・画像あり | 中央 | — |
| 7 | 520px | `#004ea2` | 6カラム・画像あり | — | 全面 |
| 8 | 680px | — | 1カラム・画像あり | 左 | — |
| 9 | 580px | — | 6カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（17） / `#ebf3f5`（1） / `#1d93ed`（1） / `#004ea2`（1）
- 見出しは左3／中央4。
- 2カラムの分け方は 52:48。半分ずつには割らない。


## 部品

囲み（18箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 21 箇所ある（32px×8、48px×8、24px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 81枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（42枚）、4:3（18枚）、1:1（16枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a5d3e9 }
.container{ width:min(100% - 30px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1040px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#004ea2; --on:#004ea2 }
.section--main .btn--fill{ background:#004ea2; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#004ea2; color:#ffffff; border-radius:50px;
  padding:20px 80px; min-height:74px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 30px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#a5d3e9` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 12px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
