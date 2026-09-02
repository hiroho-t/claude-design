# 採用情報 ふうのデザイン

- 出典: https://recruit.garage.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#c2b3a9` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.75、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c2b3a9;
  --sub: #d7d8d8;
  --ink: #000000;
  --ink-rev: #424242;
  --on: #c2b3a9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "lemonde-sans", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 1200px;
  --read: 780px;
  --section-y: 120px;
  --gap: 30px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 72.8% |
| 主色 | `#232228` | 13.6% |
| 副色 | `#d7d8d8` | 2.4% |
| 差し色 | `#c2b3a9` | 1.9% |
| 差し色 | `#e8e9e9` | 1.7% |
| 差し色 | `#199b66` | 1.6% |

文字色は `#000000` / `#424242` / `#ffffff` / `#969696`。

- 主色 `#c2b3a9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.2) 0px 6px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 22 | 64 | 5 | 5 |
| `#20992b` | 7 | 0 | 0 | 0 |
| `#d96111` | 5 | 0 | 0 | 0 |
| `#5132c7` | 5 | 0 | 0 | 0 |
| `#109c9e` | 1 | 0 | 0 | 0 |
| `#000000` | 7 | 115 | 5 | 5 |
| `#424242` | 0 | 53 | 0 | 0 |
| `#969696` | 0 | 7 | 0 | 0 |

- `#c2b3a9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#c2b3a9` |
| `#20992b` | `#424242` |
| `#109c9e` | `#424242` |
| `#d96111` | `#424242` |

```css
.section{ --on:#c2b3a9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#424242; --on:#424242 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#424242 }
.section--main .btn--fill{ background:#424242; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: lemonde-sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.25 |
| 見出し | 44px | 1.25 |
| 小見出し | 24px | — |
| リード | 22px | — |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 14px | 1.75 |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 780px
- セクションの上下余白: 120 / 48 / 160 / 56px（基本は 120px）
- 並びの間隔: 8 / 16 / 30 / 120px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 22px / 行間 1.4 |
| 見出し | 48px | 32px / 行間 1.25 |
| セクションの上下余白 | 120px | 196px |
| 左右の余白 | — | 51px |
| 並びの間隔 | 30px | 8px |

- 本文は 14px → 22px、セクション余白は 120px → 196px（PCの163%）。
- 文字サイズの段は 22 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border: 1px solid #000000;
  border-radius: 4px; padding: 0px 36px; min-height: 52px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 4px; padding: 0px 60px; min-height: 80px;
  font-size: 20px; font-weight: 700; letter-spacing: 1px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 4px; padding: 0px 36px; min-height: 52px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全面 |
| 2 | 960px | — | 1カラム・画像あり | 左 | 右（55:45） |
| 3 | 920px | `#ffffff` | 2カラム・画像あり | — | 全幅 |
| 4 | 1020px | — | 4カラム | 中央 | — |
| 5 | 960px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 940px | `#ffffff` | 4カラム・画像あり | 中央 | 全幅 |
| 7 | 620px | `#ffffff` | 1カラム・画像あり | 左 | 右（50:50） |
| 8 | 520px | `#ffffff` | 2カラム・画像あり | 左 | 右（16:84） |
| 9 | 740px | `#ffffff` | 1カラム・画像あり | 中央 | 全幅 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（14） / `#20992b`（1） / `#109c9e`（1） / `#d96111`（1）
- 見出しは左4／中央3。
- 2カラムの分け方は 55:45 / 50:50 / 16:84。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f5f5f5; color: #000000;
  border-radius: 999px; padding: 2px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 2 箇所ある（64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 52枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（43枚）、4:3（2枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c2b3a9 }
.container{ width:min(100% - 102px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#424242; --on:#424242 }
.section--main .btn--fill{ background:#424242; color:var(--main) }
.card{ background:#ffffff;
  border-radius:4px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:4px;
  padding:0px 36px; min-height:52px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:22px; --section-y:196px; --gap:8px; }
  .container{ width:calc(100% - 102px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#c2b3a9` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
