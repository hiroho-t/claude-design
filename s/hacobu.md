# 物流DXツール・コンサルならHacobu ふうのデザイン

- 出典: https://hacobu.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

#fafafa の地に `#ff0000` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fafafa;
  --main: #ff0000;
  --sub: #e6e6e6;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #ff0000;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1120px;
  --read: 1076px;
  --section-y: 52px;
  --gap: 15px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fafafa` | 63% |
| 主色 | `#262626` | 17.6% |
| 副色 | `#e6e6e6` | 12.2% |
| 差し色 | `#a9a7a8` | 2.2% |

文字色は `#000000` / `#ffffff` / `#8c8c8c` / `#ff0000`。

- 主色 `#ff0000` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.08) 0px 5px 30px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e6e6e6` | 106 | 0 | 0 | 0 |
| `#fafafa` | 11 | 93 | 0 | 6 |
| `#262626` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 65 | 3 | 0 |
| `#313131` | 1 | 0 | 0 | 0 |
| `#8c8c8c` | 0 | 5 | 0 | 0 |
| `#ff0000` | 0 | 3 | 0 | 0 |

- `#ff0000` は文字色として3箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e6e6e6` | `#ff0000` |
| `#ffffff` | `#ff0000` |
| `#000000` | `#ffffff` |
| `#fafafa`（地） | `#ff0000` |

```css
.section{ --on:#ff0000 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#313131` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 500 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | 1.3 |
| 見出し | 36px | 1.44 |
| 小見出し | 30px | 1.8 |
| リード | 18px | — |
| 本文 | 16px | 1 |
| 補助 | 15px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1076px
- セクションの上下余白: 52 / 180 / 72 / 80px（基本は 52px）
- 並びの間隔: 6 / 10 / 15 / 20px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1500 / 1300 / 1100 / 1000 / 999px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 12px / 行間 1.8 |
| 見出し | 44px | 27px / 行間 1.3 |
| セクションの上下余白 | 52px | 52px |
| 左右の余白 | — | 38px |
| 並びの間隔 | 15px | 15px |

- 本文は 16px → 12px、セクション余白は 52px → 52px（PCの100%）。
- 文字サイズの段は 16 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 13px; font-weight: 500; letter-spacing: 1.3px;
}
.btn-sub{
  background: #e6172c; color: #ffffff;
  border: 1px solid #e6172c;
  border-radius: 25px; padding: 10px 27px; min-height: 50px;
  font-size: 13px; font-weight: 500; letter-spacing: 1.3px;
}
.btn-sub{
  background: transparent; color: #e6172c;
  border-radius: 0px; padding: 0px 0px; min-height: 48px;
  font-size: 13px; font-weight: 500; letter-spacing: 1.3px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 480px | — | ヒーロー | — | — |
| 2 | 480px | — | 1カラム・文字だけ | — | — |
| 3 | 480px | — | 1カラム・文字だけ | — | — |
| 4 | 480px | — | 1カラム・文字だけ | — | — |
| 5 | 480px | — | 1カラム・文字だけ | — | — |
| 6 | 480px | — | 1カラム・文字だけ | — | — |
| 7 | 480px | — | 1カラム・文字だけ | — | — |
| 8 | 480px | — | 1カラム・文字だけ | — | — |
| 9 | 480px | — | 1カラム・文字だけ | — | — |
| 10 | 480px | — | 1カラム・文字だけ | — | — |
| 11 | 480px | — | 1カラム・文字だけ | — | — |
| 12 | 480px | — | 1カラム・文字だけ | — | — |
| 13 | 480px | — | 1カラム・文字だけ | — | — |
| 14 | 480px | — | 1カラム・文字だけ | — | — |
| 15 | 480px | — | 1カラム・文字だけ | — | — |

- 全15セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e6e6e6`（57） / `#ffffff`（4） / `#000000`（1） / `#fafafa`（1）


## 部品

囲み（90箇所で同じ形）

```css
.card{
  background: #e6e6e6;
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 5px; padding: 4px 12px; font-size: 16px;
}
```

## 画像

- 1枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff0000 }
.container{ width:min(100% - 76px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:480px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#e6e6e6;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:50px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:52px; --gap:15px; }
  .container{ width:calc(100% - 76px) }
}
```

## 守ること

やること

- 地は `#fafafa` のまま。主色 `#ff0000` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。
