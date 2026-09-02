# DRIVEN BASE（ドリブンベース） ふうのデザイン

- 出典: https://www.denso.com/jp/ja/driven-base/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ポータルサイト･メディア･情報サイト／Web･IT･XR･デジタル･テクノロジー／製造業･工業･メーカー･商社･物流

白地に `#dc0032` を大きな面で置く配色。影を使って浮かせる。本文 18px・行間 1.6、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #dc0032;
  --sub: #dc0032;
  --ink: #ffffff;
  --ink-rev: #333333;
  --on: #dc0032;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "denso-en", sans-serif;
  --font-en: "denso-en", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.6;
  --container: 684px;
  --read: 1280px;
  --section-y: 92px;
  --gap: 20px;
  --radius: 24px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 37.9% |
| 主色 | `#4d4d4d` | 15.5% |
| 副色 | `#dc0032` | 13.8% |
| 差し色 | `#a6a3a4` | 6.4% |
| 差し色 | `#d83271` | 3.4% |
| 差し色 | `#bf788d` | 3.1% |

文字色は `#ffffff` / `#333333` / `#666666` / `#dc0032`。

- 主色 `#dc0032` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は`rgba(0, 0, 0, 0.25) 0px 30px 50px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 15 | 258 | 4 | 3 |
| `#000000` | 2 | 0 | 0 | 0 |
| `#be50f1` | 9 | 0 | 0 | 0 |
| `#64afb9` | 9 | 0 | 0 | 0 |
| `#34915e` | 9 | 0 | 0 | 0 |
| `#333333` | 0 | 39 | 0 | 0 |
| `#666666` | 0 | 18 | 0 | 0 |
| `#dc0032` | 35 | 2 | 0 | 1 |

- `#dc0032` は面として35箇所、文字として2箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#be50f1` | `#333333` |
| `#64afb9` | `#dc0032` |
| `#34915e` | `#333333` |
| `#dc0032`（主色） | `#333333` |

```css
.section{ --on:#dc0032 }                     /* 地の面 */
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: denso-en
- 欧文: denso-en
- ウェイトは 443 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 24px | 1.6 |
| 本文 | 18px | 1.6 |
| 補助 | 16px | 1 |
| 注記 | 14px | — |
| 注記 | 11px | — |

- 本文は 18px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 684px／読ませる段は 1280px
- セクションの上下余白: 92 / 80 / 60 / 32px（基本は 92px）
- 並びの間隔: 8 / 18 / 20 / 32px
- 角丸: 24px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1090 / 1080 / 1079 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.6 | 13px / 行間 1.6 |
| 見出し | 28px | 20px / 行間 1.6 |
| セクションの上下余白 | 92px | 60px |
| 左右の余白 | — | 12px |
| 並びの間隔 | 20px | 8px |

- 本文は 18px → 13px、セクション余白は 92px → 60px（PCの65%）。
- 文字サイズの段は 19 / 18 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #333333;
  border: 1px solid #dddddd;
  border-radius: 30px; padding: 18px 15px; min-height: 52px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border: 1px solid #dddddd;
  border-radius: 30px; padding: 16px 16px; min-height: 48px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border-radius: 0px; padding: 0px 0px; min-height: 52px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1080px | `#ffffff` | ヒーロー（画像） | — | 全幅 |
| 2 | 360px | `#dc0032` | 1カラム・画像あり | — | 全面 |
| 3 | 1420px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1220px | `#db0033` | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 660px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1200px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 340px | `#dc0032` | 1カラム・画像あり | — | — |

- 全7セクション。
- 主色 `#dc0032` の面が 5 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#be50f1`（9） / `#64afb9`（9） / `#34915e`（9） / `#dc0032`（5）
- 見出しは左0／中央3。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #be50f1;
  border-radius: 24px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 50px 0px;
}
```


## 丸いもの

角丸は 24px だが、**完全な円は別扱い**で 35 箇所ある（40px×27、48px×3、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 108枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 16:9（78枚）、4:3（28枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dc0032 }
.container{ width:min(100% - 24px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1080px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#333333; --on:#333333 }
.section--main .btn--fill{ background:#333333; color:var(--main) }
.card{ background:#be50f1;
  border-radius:24px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#333333; border-radius:30px;
  padding:18px 15px; min-height:52px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:60px; --gap:8px; }
  .container{ width:calc(100% - 24px) }
}
```

## 守ること

やること

- 地色と主色 `#dc0032` の面を交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 92px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 24px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（24px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
