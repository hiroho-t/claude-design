# 洛和会音羽病院 ふうのデザイン

- 出典: https://rakuwa-otowa.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#00aa63` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.5、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #00aa63;
  --sub: #cbd3d1;
  --ink: #262626;
  --ink-rev: #ffffff;
  --on: #00aa63;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1040px;
  --read: 928px;
  --section-y: 56px;
  --gap: 12px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.1% |
| 主色 | `#e9ebe6` | 3.9% |
| 副色 | `#cbd3d1` | 2.7% |
| 差し色 | `#00aa63` | 2.4% |
| 差し色 | `#2e4557` | 2.1% |
| 差し色 | `#afaca9` | 1.8% |

文字色は `#262626` / `#ffffff` / `#00aa5c` / `#737373`。

- 主色 `#00aa63` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 13 | 83 | 8 | 5 |
| `#f7f4f2` | 2 | 0 | 0 | 0 |
| `#fffdf2` | 15 | 0 | 0 | 0 |
| `#00aa5c` | 10 | 57 | 1 | 2 |
| `#0490cc` | 1 | 0 | 1 | 0 |
| `#262626` | 8 | 133 | 1 | 0 |
| `#737373` | 0 | 6 | 0 | 0 |

- `#00aa63` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fffdf2` | `#00aa63` |
| `#ffffff`（地） | `#00aa63` |
| `#00aa5c` | `#ffffff` |
| `#f7f4f2` | `#00aa63` |

```css
.section{ --on:#00aa63 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Inter
- ウェイトは 500 / 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 70px | 1.5 |
| 見出し | 40px | — |
| 小見出し | 30px | 1.2 |
| リード | 18px | — |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1040px／読ませる段は 928px
- セクションの上下余白: 56 / 104 / 120 / 48px（基本は 56px）
- 並びの間隔: 8 / 10 / 12 / 16px
- 角丸: 4px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 768 / 767 / 360px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 14px / 行間 1.43 |
| 見出し | 70px | 37px / 行間 1.5 |
| セクションの上下余白 | 56px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 12px | 12px |

- 本文は 16px → 14px、セクション余白は 56px → 24px（PCの43%）。
- 文字サイズの段は 28 / 24 / 18 / 16 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50px; padding: 8px 16px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #262626;
  border-radius: 33554400px; padding: 2px 16px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #00aa5c; color: #ffffff;
  border-radius: 4px; padding: 0px 0px; min-height: 64px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 600px | — | 6カラム・画像あり | 中央 | — |
| 3 | 1480px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1460px | `#f7f4f2` | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1560px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 760px | `#f7f4f2` | 1カラム・文字だけ | 左 | — |

- 全6セクション。
- 使われている面の色: `#fffdf2`（15） / `#ffffff`（7） / `#00aa5c`（2） / `#f7f4f2`（2）
- 見出しは左3／中央3。


## 部品

囲み（15箇所で同じ形）

```css
.card{
  background: #fffdf2;
  border: 1px solid var(--on);   /* 実測は #cccccc。面によって入れ替える */
  border-radius: 20px;
  padding: 44px 44px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 8px 16px; font-size: 16px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 3 箇所ある（24px×2、56px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 24枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 4:3（9枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00aa63 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#fffdf2; border:1px solid var(--on);
  border-radius:20px; padding:44px 44px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:50px;
  padding:8px 16px; min-height:42px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#00aa63` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 20px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（4px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
