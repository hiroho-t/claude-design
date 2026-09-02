# 下原自動車株式会社 ふうのデザイン

- 出典: https://shimohara-auto.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／暮らし･生活／車･乗り物･モビリティ

白地に `#c7e7f6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.5、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c7e7f6;
  --sub: #29313b;
  --ink: #344a63;
  --ink-rev: #ffffff;
  --on: #c7e7f6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Jost", sans-serif;
  --font-en: "Jost", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.5;
  --container: 1360px;
  --read: 1152px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.8% |
| 主色 | `#c7e7f6` | 6.2% |
| 副色 | `#29313b` | 1.6% |

文字色は `#344a63` / `#ffffff` / `#008acd` / `#8c96a9`。

- 主色 `#c7e7f6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 1 | 31 | 0 | 0 |
| `#f2fafe` | 1 | 0 | 0 | 0 |
| `#344a63` | 0 | 73 | 0 | 0 |
| `#008acd` | 0 | 16 | 0 | 0 |
| `#8c96a9` | 0 | 5 | 4 | 0 |

- `#c7e7f6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#c7e7f6` |
| `#f2fafe` | `#c7e7f6` |

```css
.section{ --on:#c7e7f6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Jost
- 欧文: Jost
- ウェイトは 600 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.5 |
| 見出し | 33px | 1.7 |
| 小見出し | 28px | — |
| 本文 | 16px | 1.2 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 2.5。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 1152px
- セクションの上下余白: 80 / 100 / 60 / 120px（基本は 80px）
- 並びの間隔: px
- 角丸: 4px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 991 / 768 / 767 / 576 / 575px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.5 | 16px / 行間 2 |
| セクションの上下余白 | 80px | 60px |
| 左右の余白 | — | 70px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 80px → 60px（PCの75%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #344a63;
  border: 1px;
  border-radius: 4px; padding: 11px 65px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px;
  border-radius: 4px; padding: 11px 65px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | 中央 | 右（80:20） |
| 2 | 980px | — | 1カラム・画像あり | 右 | 左（42:58） |
| 3 | 1060px | — | 5カラム・画像あり | 左 | — |
| 4 | 480px | — | 1カラム・画像あり | 左 | — |
| 5 | 740px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 440px | — | 3カラム・画像あり | 中央 | — |
| 7 | 660px | — | 1カラム・画像あり | 左 | 右（53:47） |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#f2fafe`（1）
- 見出しは左4／中央2。
- 2カラムの分け方は 80:20 / 42:58 / 53:47。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #344a63;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 4 箇所ある（64px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 21枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（13枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c7e7f6 }
.container{ width:min(100% - 140px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#344a63; border-radius:4px;
  padding:11px 65px; min-height:48px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:60px; }
  .container{ width:calc(100% - 140px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#c7e7f6` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2.5 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.5 より詰めない。
- 中途半端な角丸（4px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
