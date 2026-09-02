# SUR 株式会社 数理計画 Environment&Information ふうのデザイン

- 出典: https://www.sur.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

#f5f4f2 の地に `#02704c` を大きな面で置く配色。影を使って浮かせる。本文 18px・行間 1.55、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f4f2;
  --main: #02704c;
  --sub: #02704c;
  --ink: #333333;
  --ink-rev: #666666;
  --on: #02704c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.55;
  --container: 1280px;
  --read: 600px;
  --section-y: 120px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f4f2` | 71.8% |
| 主色 | `#252626` | 12.4% |
| 副色 | `#02704c` | 8.8% |
| 差し色 | `#bdcac8` | 2.1% |
| 差し色 | `#e1dfdc` | 1.8% |
| 差し色 | `#7f9a8a` | 1.8% |

文字色は `#333333` / `#666666` / `#ffffff` / `#999999`。

- 主色 `#02704c` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は`rgba(51, 51, 51, 0.12) 2px 4px 16px 1px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f4f2` | 6 | 0 | 0 | 0 |
| `#ffffff` | 22 | 20 | 0 | 7 |
| `#6b6c6b` | 1 | 78 | 0 | 0 |
| `#026e4b` | 4 | 0 | 0 | 3 |
| `#028057` | 5 | 3 | 5 | 5 |
| `#333333` | 0 | 69 | 0 | 0 |
| `#999999` | 0 | 20 | 0 | 0 |

- `#02704c` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f4f2`（地） | `#02704c` |
| `#ffffff` | `#02704c` |
| `#026e4b` | `#666666` |
| `#6b6c6b` | `#666666` |

```css
.section{ --on:#02704c }                     /* 地の面 */
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f4f2` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.46 |
| 見出し | 20px | 1.46 |
| 本文 | 18px | 1.55 |
| 補助 | 16px | — |
| 注記 | 15px | 1.78 |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 18px・行間 1.55。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 600px
- セクションの上下余白: 120 / 68 / 40 / 56px（基本は 120px）
- 並びの間隔: 6 / 8 / 20 / 24px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 782 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.55 | 16px / 行間 1.55 |
| 見出し | 28px | 20px / 行間 1.46 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 60px |
| 並びの間隔 | 20px | 18px |

- 本文は 18px → 16px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #028057; color: #ffffff;
  border: 1px solid #028057;
  border-radius: 4px; padding: 19px 40px; min-height: 63px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 63px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
.btn-sub{
  background: transparent; color: #333333;
  border: 1px solid #e5e5e3;
  border-radius: 4px; padding: 18px 40px; min-height: 60px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 780px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1440px | `#f5f4f2` | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1440px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 760px | `#f5f4f2` | 6カラム・画像あり | 左 | 左（56:44） |
| 6 | 680px | `#f5f4f2` | 6カラム・画像あり | 中央 | 右（56:44） |
| 7 | 1040px | `#f5f4f2` | 1カラム・画像あり | 左 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f4f2`（6） / `#ffffff`（4） / `#026e4b`（1） / `#6b6c6b`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 56:44 / 56:44。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #f5f4f2;
  border-radius: 4px;
  padding: 40px 60px;
}
```

ラベル・タグ

```css
.chip{
  background: #026e4b; color: #dbdbdb;
  border-radius: 4px; padding: 9px 24px; font-size: 13px;
}
```

## 画像

- 67枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（54枚）、1:1（3枚）
- 角丸 4px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#02704c }
.container{ width:min(100% - 120px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }
.card{ background:#f5f4f2;
  border-radius:4px; padding:40px 60px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#028057; color:#ffffff; border-radius:4px;
  padding:19px 40px; min-height:63px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:4px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:16px; --section-y:40px; --gap:18px; }
  .container{ width:calc(100% - 120px) }
}
```

## 守ること

やること

- 地色と主色 `#02704c` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 120px と行間 1.55 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 4px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.55 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
