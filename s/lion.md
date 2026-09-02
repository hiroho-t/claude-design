# LION ふうのデザイン

- 出典: https://www.lion.co.jp/ja/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／美容･化粧品･コスメ･ケア用品

白地に `#007a46` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.7、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #007a46;
  --sub: #c68273;
  --ink: #333333;
  --ink-rev: #202020;
  --on: #007a46;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs_Noto", sans-serif;
  --font-en: "YakuHanJPs_Noto", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.7;
  --container: 1200px;
  --read: 1000px;
  --section-y: 52px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 42.2% |
| 主色 | `#007a46` | 9.7% |
| 副色 | `#c68273` | 6.6% |
| 差し色 | `#cb9fa0` | 5.9% |
| 差し色 | `#e7ebe8` | 5.1% |
| 差し色 | `#b09682` | 4.9% |

文字色は `#333333` / `#202020` / `#007a46` / `#ffffff`。

- 主色 `#007a46` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は`rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 57 | 6 | 1 | 0 |
| `#f2f6f9` | 7 | 0 | 0 | 0 |
| `#00a05c` | 1 | 0 | 0 | 0 |
| `#007a46` | 4 | 29 | 7 | 0 |
| `#00b140` | 2 | 0 | 1 | 2 |
| `#333333` | 0 | 131 | 0 | 0 |
| `#202020` | 0 | 37 | 0 | 0 |

- `#007a46` は文字色として29箇所で使うのが主。面としては4箇所しかないが、1枚が大きく画面の10%を占める。ボタンの地には使っていない。枠線にも7箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#007a46` |
| `#f3f8f6` | `#007a46` |
| `#f2f6f9` | `#007a46` |
| `#007a46`（主色） | `#202020` |

```css
.section{ --on:#007a46 }                     /* 地の面 */
.section--main{ background:var(--main); color:#202020; --on:#202020 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#202020 }
.section--main .btn--fill{ background:#202020; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#dce2e2`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs_Noto
- 欧文: YakuHanJPs_Noto
- ウェイトは 500 / 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.3 |
| 見出し | 20px | — |
| 小見出し | 18px | — |
| 本文 | 16px | 1.3 |
| 補助 | 15px | — |
| 注記 | 14px | 1.3 |
| 注記 | 13px | — |

- 本文は 16px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 1000px
- セクションの上下余白: 52 / 72 / 80 / 60px（基本は 52px）
- 並びの間隔: 20 / 25 / 30 / 40px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1240 / 1001 / 1000 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.7 | 14px / 行間 1.7 |
| 見出し | 32px | 23px / 行間 1.3 |
| セクションの上下余白 | 52px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 30px | 10px |

- 本文は 16px → 14px、セクション余白は 52px → 40px（PCの77%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #007a46;
  border: 1px solid #007a46;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #202020;
  border: 2px solid #5ebf43;
  border-radius: 3px; padding: 3px 16px; min-height: 27px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.96px;
}
.btn-sub{
  background: #00b140; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 2px; padding: 12px 10px; min-height: 42px;
  font-size: 13px; font-weight: 600; letter-spacing: 0.13008px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 140px | `#007a46` | ヒーロー | 左 | — |
| 2 | 500px | — | 6カラム・画像あり | — | 全面 |
| 3 | 960px | `#00a05c` | 1カラム・文字だけ | 中央 | — |
| 4 | 620px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 5 | 680px | `#f3f8f6` | 1カラム・画像あり | 右 | 左（73:27） |
| 6 | 600px | `#f3f8f6` | 1カラム・画像あり | 左 | 右（73:27） |
| 7 | 720px | `#f3f8f6` | 1カラム・画像あり | 右 | 左（73:27） |
| 8 | 440px | — | 2カラム・画像あり | — | 全面 |
| 9 | 1520px | `#f2f6f9` | 1カラム・画像あり | 中央 | 見出しの下 |
| 10 | 240px | — | 帯・区切り | — | — |
| 11 | 540px | `#f1f8f5` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全11セクション。
- 主色 `#007a46` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（12） / `#f3f8f6`（3） / `#f2f6f9`（2） / `#007a46`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 73:27 / 73:27 / 73:27。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dce2e2。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 62 箇所ある（24px×57、48px×3、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 31枚使っている
- 比率は 16:9（9枚）、21:9（8枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#007a46 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#202020; --on:#202020 }
.section--main .btn--fill{ background:#202020; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#007a46; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#007a46` の面を交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 52px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.7 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
