# マツシタホーム ふうのデザイン

- 出典: https://matsushitahome.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア

白地に `#6d7b8f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 1.92、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #6d7b8f;
  --sub: #20232e;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #6d7b8f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.92;
  --container: 1324px;
  --read: 656px;
  --section-y: 84px;
  --gap: 38px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 77.1% |
| 主色 | `#6d7b8f` | 4.2% |
| 副色 | `#20232e` | 3.3% |
| 差し色 | `#273655` | 3% |
| 差し色 | `#48586f` | 2.1% |

文字色は `#000000` / `#ffffff`。

- 主色 `#6d7b8f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 6 | 73 | 18 | 5 |
| `#ffffff` | 2 | 13 | 3 | 0 |
| `#f3ebeb` | 1 | 0 | 0 | 0 |
| `#eae8dd` | 1 | 0 | 0 | 0 |

- `#6d7b8f` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#6d7b8f` |
| `#000000` | `#ffffff` |
| `#f3ebeb` | `#6d7b8f` |
| `#eae8dd` | `#6d7b8f` |

```css
.section{ --on:#6d7b8f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Lato
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | 2 |
| 見出し | 16px | 1 |
| 小見出し | 15px | — |
| リード | 14px | 1 |
| 本文 | 13px | 1.92 |
| 補助 | 11px | — |

- 本文は 13px・行間 1.92。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1324px／読ませる段は 656px
- セクションの上下余白: 84 / 40 / 80 / 44px（基本は 84px）
- 並びの間隔: 10 / 38 / 55px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 767 / 561 / 560px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.92 | 12px / 行間 1.78 |
| 見出し | 20px | 14px / 行間 1 |
| セクションの上下余白 | 84px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 38px | 5px |

- 本文は 13px → 12px、セクション余白は 84px → 40px（PCの48%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 100px; padding: 8px 19px; min-height: 32px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.5px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.5px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px; padding: 0px 0px; min-height: 50px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 460px | — | 1カラム・文字だけ | — | — |
| 3 | 2080px | — | 1カラム・画像あり | — | 全面 |
| 4 | 1580px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 5 | 580px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 440px | — | 1カラム・画像あり | 中央 | 全幅 |
| 7 | 500px | — | 3カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#000000`（1） / `#f3ebeb`（1） / `#eae8dd`（1）
- 見出しは左3／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 6px 13px; font-size: 11px;
}
```

## 画像

- 37枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（18枚）、3:2（10枚）、2:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#6d7b8f }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:100px;
  padding:8px 19px; min-height:32px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:12px; --section-y:40px; --gap:5px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#6d7b8f` は文字と小さな部品にだけ使う。
- 余白 84px と行間 1.92 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.92 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。
