# レトロ印刷 ふうのデザイン

- 出典: https://retroinsatsu.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／本･出版･印刷／1カラム

白地に `#f16a59` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 2、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f16a59;
  --sub: #f16a59;
  --ink: #222222;
  --ink-rev: #4a91d6;
  --on: #f16a59;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1120px;
  --read: 1200px;
  --section-y: 64px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 60.7% |
| 主色 | `#d7d7d5` | 23.3% |
| 副色 | `#f16a59` | 6.3% |
| 差し色 | `#a9b4b3` | 3% |
| 差し色 | `#a87870` | 2.1% |
| 差し色 | `#edeeef` | 1.6% |

文字色は `#222222` / `#4a91d6`。

- 主色 `#f16a59` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.2) 0px 0px 8px -4px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 58 | 0 | 0 | 21 |
| `#f3f3f3` | 7 | 0 | 0 | 0 |
| `#f8e62d` | 4 | 0 | 0 | 0 |
| `#a6d3ff` | 1 | 0 | 0 | 0 |
| `#222222` | 0 | 172 | 39 | 0 |
| `#4a91d6` | 0 | 6 | 5 | 0 |

- `#f16a59` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f16a59` |
| `#f3f3f3` | `#f16a59` |
| `#f8e62d` | `#f16a59` |
| `#fcfcfc` | `#f16a59` |

```css
.section{ --on:#f16a59 }                     /* 地の面 */
.section--main{ background:var(--main); color:#4a91d6; --on:#4a91d6 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#4a91d6 }
.section--main .btn--fill{ background:#4a91d6; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.1 |
| 見出し | 20px | 1.1 |
| 小見出し | 18px | — |
| リード | 17px | — |
| 本文 | 15px | 2 |
| 補助 | 14px | 1.5 |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1200px
- セクションの上下余白: 64 / 40 / 48 / 56px（基本は 64px）
- 並びの間隔: 10 / 40 / 56px
- 角丸: 0px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1156 / 768 / 600 / 480 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 14px / 行間 2 |
| 見出し | 30px | 20px / 行間 1.1 |
| セクションの上下余白 | 64px | 192px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 40px | 10px |

- 本文は 15px → 14px、セクション余白は 64px → 192px（PCの300%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #222222;
  border: 2px solid #222222;
  border-radius: 16px; padding: 12px 16px; min-height: 82px;
  font-size: 15px; font-weight: 500; letter-spacing: 1.125px;
}
.btn-sub{
  background: #ffffff; color: #4a91d6;
  border: 2px solid #4a91d6;
  border-radius: 8px; padding: 0px 40px; min-height: 56px;
  font-size: 17px; font-weight: 500; letter-spacing: 1.125px;
}
.btn-sub{
  background: #ffffff; color: #4a91d6;
  border: 2px solid #4a91d6;
  border-radius: 8px; padding: 0px 40px; min-height: 40px;
  font-size: 15px; font-weight: 500; letter-spacing: 1.125px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | — | — |
| 2 | 440px | — | 1カラム・画像あり | 右 | 左（19:81） |
| 3 | 440px | `#f3f3f3` | 1カラム・画像あり | 左 | 左（21:79） |
| 4 | 2180px | — | 5カラム | 左 | — |
| 5 | 700px | `#f3f3f3` | 3カラム・画像あり | — | 全面 |
| 6 | 560px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1000px | `#f3f3f3` | 4カラム・画像あり | 中央 | 全幅 |
| 8 | 920px | `#ffffff` | 2カラム | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（31） / `#f3f3f3`（3） / `#f8e62d`（2） / `#fcfcfc`（1）
- 見出しは左2／中央3。
- 2カラムの分け方は 19:81 / 21:79。半分ずつには割らない。


## 部品

囲み（16箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px -4px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（280px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 48枚使っている
- 比率は 4:3（25枚）、3:2（16枚）、1:1（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f16a59 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#4a91d6; --on:#4a91d6 }
.section--main .btn--fill{ background:#4a91d6; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#222222; border-radius:16px;
  padding:12px 16px; min-height:82px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:192px; --gap:10px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#f16a59` は文字と小さな部品にだけ使う。
- 余白 64px と行間 2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
