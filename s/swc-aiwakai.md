# 社会福祉法人 愛和会 ふうのデザイン

- 出典: https://swc-aiwakai.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／福祉･介護

#fdfcfa の地に `#fa863e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 17px・行間 2、セクション間 128px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fdfcfa;
  --main: #fa863e;
  --sub: #898d88;
  --ink: #483c34;
  --ink-rev: #ffffff;
  --on: #fa863e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Work Sans", sans-serif;
  --fs-body: 17px;
  --lh-body: 2;
  --container: 576px;
  --read: 824px;
  --section-y: 128px;
  --gap: 8px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fdfcfa` | 75.9% |
| 主色 | `#483c34` | 16% |
| 副色 | `#898d88` | 1.6% |

文字色は `#483c34` / `#ffffff` / `#fa863e` / `#fd862f`。

- 主色 `#fa863e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fdfcfa` | 11 | 76 | 0 | 9 |
| `#483c34` | 6 | 38 | 6 | 5 |
| `#3e332c` | 1 | 0 | 0 | 0 |
| `#fa863e` | 2 | 10 | 0 | 0 |
| `#fd862f` | 0 | 9 | 0 | 0 |

- `#fa863e` は文字色として10箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fdfcfa`（地） | `#fa863e` |
| `#483c34` | `#ffffff` |
| `#3e332c` | `#ffffff` |

```css
.section{ --on:#fa863e }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Work Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | — |
| 見出し | 22px | — |
| 小見出し | 20px | — |
| 本文 | 17px | 2 |
| 補助 | 16px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 576px／読ませる段は 824px
- セクションの上下余白: 128 / 252 / 76 / 84px（基本は 128px）
- 並びの間隔: 4 / 8px
- 角丸: 16px が基本。大きな面だけ 13px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1024 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2 | 16px / 行間 2 |
| セクションの上下余白 | 128px | 32px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 8px | 4px |

- 本文は 17px → 16px、セクション余白は 128px → 32px（PCの25%）。
- 文字サイズの段は 26 / 18 / 16 / 11 / 4px。

## ボタン

```css
.btn{
  background: #ffffff; color: #fd862f;
  border-radius: 16px; padding: 0px 25px; min-height: 32px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #483c34;
  border: 1px solid #483c34;
  border-radius: 6px; padding: 0px 0px; min-height: 66px;
  font-size: 17px; font-weight: 700; letter-spacing: 0.51px;
}
.btn-sub{
  background: #483c34; color: #fdfcfa;
  border: 1px solid #e2e1e0;
  border-radius: 13px; padding: 0px 9px; min-height: 27px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.48px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 880px | — | 6カラム・画像あり | — | 全面 |
| 3 | 740px | — | 1カラム・文字だけ | 右 | — |
| 4 | 980px | — | 1カラム・画像あり | 左 | — |
| 5 | 1120px | — | 1カラム・画像あり | 中央 | 左（32:68） |
| 6 | 1180px | — | 1カラム・画像あり | 左 | 右（83:17） |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fdfcfa`（2） / `#483c34`（1） / `#3e332c`（1）
- 見出しは左2／中央1。
- 2カラムの分け方は 32:68 / 83:17。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #fd862f;
  border-radius: 16px; padding: 0px 25px; font-size: 14px;
}
```

## 丸いもの

角丸は 16px だが、**完全な円は別扱い**で 2 箇所ある（48px×1、64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 23枚使っている
- 比率は 2:3（19枚）、3:4（2枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fa863e }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#fd862f; border-radius:16px;
  padding:0px 25px; min-height:32px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#fdfcfa` のまま。主色 `#fa863e` は文字と小さな部品にだけ使う。
- 余白 128px と行間 2 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（16px と 13px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
