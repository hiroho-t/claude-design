# 中村ブレイス株式会社 ふうのデザイン

- 出典: https://www.nakamura-brace.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

#87d2d2 の地に `#87d2d2` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 2.5、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #87d2d2;
  --main: #87d2d2;
  --sub: #c8aa8c;
  --ink: #323232;
  --ink-rev: #ffffff;
  --on: #87d2d2;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Maru Gothic", sans-serif;
  --font-en: "YakuHanMPs", sans-serif;
  --fs-body: 15px;
  --lh-body: 2.5;
  --container: 980px;
  --read: 652px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#87d2d2` | 32.4% |
| 主色 | `#bedcb4` | 14.3% |
| 副色 | `#c8aa8c` | 11.3% |
| 差し色 | `#ebb4b4` | 9.5% |
| 差し色 | `#fdecda` | 8.5% |
| 差し色 | `#fdfcf9` | 5.2% |

文字色は `#323232` / `#ffffff` / `#a44d8d` / `#284696`。

- 主色 `#87d2d2` は差し色ではなく**面**で使う。画面の32%を占めている。
- 影は`rgba(0, 0, 0, 0.05) 0px 1px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#87d2d2` | 1 | 0 | 0 | 0 |
| `#bedcb4` | 1 | 0 | 0 | 0 |
| `#fdecda` | 1 | 0 | 0 | 0 |
| `#c8aa8c` | 1 | 0 | 0 | 0 |
| `#fdfcf8` | 5 | 3 | 0 | 3 |
| `#323232` | 0 | 92 | 14 | 0 |
| `#a44d8d` | 0 | 1 | 0 | 0 |
| `#284696` | 0 | 1 | 0 | 0 |

- `#87d2d2` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#87d2d2`（地） | `#87d2d2` |
| `#fdecda` | `#87d2d2` |
| `#c8aa8c` | `#87d2d2` |
| `#bedcb4` | `#87d2d2` |

```css
.section{ --on:#87d2d2 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Maru Gothic
- 欧文: YakuHanMPs
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 21px | — |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| 本文 | 15px | 2.5 |
| 補助 | 13px | — |
| 注記 | 11px | — |

- 本文は 15px・行間 2.5。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 980px／読ませる段は 652px
- セクションの上下余白: 52 / 92 / 100 / 156px（基本は 52px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1180 / 1060 / 1001 / 1000 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2.5 | 15px / 行間 1.7 |
| セクションの上下余白 | 52px | 28px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 15px、セクション余白は 52px → 28px（PCの54%）。
- 文字サイズの段は 16 / 15 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #323232;
  border: 1px solid #323232;
  border-radius: 30px; padding: 3px 10px; min-height: 26px;
  font-size: 10px; font-weight: 400; letter-spacing: 1px;
}
.btn-sub{
  background: #fffcf8; color: #323232;
  border-radius: 50px; padding: 0px 0px; min-height: 67px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 840px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 840px | — | 1カラム・画像あり | — | 全幅 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#87d2d2` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#87d2d2`（1） / `#fdecda`（1） / `#c8aa8c`（1） / `#bedcb4`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #323232;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 10px; font-size: 10px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（144px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 77枚使っている。うち 20 枚は画面いっぱいに置く
- 比率は 3:2（38枚）、1:1（18枚）、16:9（16枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#87d2d2 }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#323232; border-radius:30px;
  padding:3px 10px; min-height:26px;
  font-size:10px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:15px; --section-y:28px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地色と主色 `#87d2d2` の面を全幅で交互に置く。主色は画面の32%を占めるだけ使う。
- 余白 52px と行間 2.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
