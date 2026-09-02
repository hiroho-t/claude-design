# JTウェブサイト ふうのデザイン

- 出典: https://www.jti.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／レスポンシブ／1カラム

白地に `#06513b` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.5、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #06513b;
  --sub: #06513b;
  --ink: #033824;
  --ink-rev: #707f89;
  --on: #06513b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Cormorant Infant", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 1328px;
  --read: 1332px;
  --section-y: 96px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86% |
| 主色 | `#d4dbd9` | 2.5% |
| 副色 | `#06513b` | 2.2% |
| 差し色 | `#267958` | 1.8% |

文字色は `#033824` / `#707f89` / `#5c7364` / `#fafafa`。

- 主色 `#06513b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(7, 103, 64, 0.2) 0px 16px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 4 | 14 | 0 | 1 |
| `#f1f4f3` | 9 | 0 | 0 | 5 |
| `#056740` | 6 | 3 | 0 | 3 |
| `#00ae68` | 4 | 3 | 0 | 3 |
| `#033824` | 0 | 93 | 1 | 0 |
| `#707f89` | 0 | 53 | 0 | 0 |
| `#5c7364` | 0 | 14 | 0 | 0 |

- `#06513b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#06513b` |
| `#f1f4f3` | `#06513b` |

```css
.section{ --on:#06513b }                     /* 地の面 */
.section--main{ background:var(--main); color:#707f89; --on:#707f89 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#707f89 }
.section--main .btn--fill{ background:#707f89; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Cormorant Infant
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1.45 |
| 見出し | 24px | — |
| 小見出し | 18px | 2 |
| リード | 16px | — |
| 本文 | 14px | 1.5 |
| 補助 | 12px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1328px／読ませる段は 1332px
- セクションの上下余白: 96 / 32 / 56 / 64px（基本は 96px）
- 並びの間隔: 4 / 8 / 16 / 24px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1119 / 1050 / 1049 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 42px | 37px / 行間 1.44 |
| セクションの上下余白 | 96px | 24px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 16px | 4px |

- 本文は 14px → 12px、セクション余白は 96px → 24px（PCの25%）。
- 文字サイズの段は 20 / 19 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #033824;
  border-radius: 0px; padding: 0px 0px; min-height: 84px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.6px;
}
.btn-sub{
  background: #f1f4f3; color: #033824;
  border: 1px;
  border-radius: 24px; padding: 0px 16px; min-height: 48px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.6px;
}
.btn-sub{
  background: transparent; color: #fafafa;
  border-radius: 0px; padding: 0px 0px; min-height: 52px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 560px | — | ヒーロー（画像） | — | 全面 |
| 2 | 400px | — | 3カラム・画像あり | 左 | 右（19:81） |
| 3 | 720px | — | 1カラム・文字だけ | 左 | — |
| 4 | 1140px | — | 6カラム・画像あり | 左 | 全幅 |
| 5 | 840px | — | 4カラム・画像あり | 左 | 見出しの下 |

- 全5セクション。
- 使われている面の色: `#ffffff`（2） / `#f1f4f3`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 19:81。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #056740; color: #fafafa;
  border-radius: 999px; padding: 5px 8px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（24px×3、16px×1、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 15枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（9枚）、21:9（1枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#06513b }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:560px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#707f89; --on:#707f89 }
.section--main .btn--fill{ background:#707f89; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#033824; border-radius:0px;
  padding:0px 0px; min-height:84px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:24px; --gap:4px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#06513b` は文字と小さな部品にだけ使う。
- 余白 96px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
