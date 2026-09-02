# 武蔵新城駅前歯科 ふうのデザイン

- 出典: https://musashishinjo-shika.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ベビー･子ども･子育て

#f7f7f7 の地に `#03b2eb` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 17px・行間 2.5、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f7f7;
  --main: #03b2eb;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #03b2eb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans", sans-serif;
  --font-en: "Noto Sans", sans-serif;
  --fs-body: 17px;
  --lh-body: 2.5;
  --container: 736px;
  --read: 840px;
  --section-y: 56px;
  --gap: 11px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f7f7` | 93.6% |

文字色は `#000000` / `#ffffff` / `#03b2eb` / `#ebaecc`。

- 主色 `#03b2eb` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(145, 145, 145, 0.16) 0px 0px 31.68px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f7f7` | 4 | 0 | 0 | 0 |
| `#ffffff` | 11 | 9 | 0 | 4 |
| `#ebaecc` | 8 | 1 | 1 | 1 |
| `#03b2eb` | 6 | 11 | 6 | 0 |
| `#74c1da` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 88 | 3 | 0 |

- `#03b2eb` は面6箇所・文字11箇所を行き来する。ボタンの地には使っていない。枠線にも6箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f7f7`（地） | `#03b2eb` |
| `#ffffff` | `#03b2eb` |

```css
.section{ --on:#03b2eb }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans
- 欧文: Noto Sans
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 27px | 1.16 |
| 見出し | 25px | — |
| 小見出し | 19px | — |
| 本文 | 17px | 2.5 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 2.5。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 736px／読ませる段は 840px
- セクションの上下余白: 56 / 32 / 144 / 52px（基本は 56px）
- 並びの間隔: 4 / 10 / 11 / 40px
- 角丸: 0px が基本。大きな面だけ 11px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2.5 | 14px / 行間 1.86 |
| セクションの上下余白 | 56px | 36px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 11px | 4px |

- 本文は 17px → 14px、セクション余白は 56px → 36px（PCの64%）。
- 文字サイズの段は 20 / 16 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 11px 0px; min-height: 32px;
  font-size: 15px; font-weight: 600; letter-spacing: 1.76256px;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 19px; font-weight: 600; letter-spacing: 2.28096px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border-radius: 10px; padding: 6px 10px; min-height: 50px;
  font-size: 25px; font-weight: 600; letter-spacing: 1.52064px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 880px | — | ヒーロー（画像） | 左 | 右（73:27） |
| 2 | 680px | — | 1カラム・画像あり | — | 全面 |
| 3 | 500px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1100px | — | 1カラム・画像あり | 左 | 全幅 |
| 5 | 5140px | `#f7f7f7` | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 980px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f7f7f7`（4） / `#ffffff`（3）
- 見出しは左2／中央3。
- 2カラムの分け方は 73:27。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #03b2eb;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 6px 31px; font-size: 17px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 16 箇所ある（24px×12、32px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 69枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（33枚）、4:3（12枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#03b2eb }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:880px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:11px 0px; min-height:32px;
  font-size:15px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:36px; --gap:4px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#f7f7f7` のまま。主色 `#03b2eb` は文字と小さな部品にだけ使う。
- 余白 56px と行間 2.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 11px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
