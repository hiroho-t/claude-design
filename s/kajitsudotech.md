# 株式会社果実堂テクノロジー ふうのデザイン

- 出典: https://www.kajitsudotech.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / モノトーン
- 業種: コーポレートサイト／農業･畜産業･林業･漁業･園芸／レスポンシブ

白地に `#a3c97b` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #a3c97b;
  --sub: #2a2c34;
  --ink: #555555;
  --ink-rev: #ffffff;
  --on: #a3c97b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Helvetica", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1216px;
  --read: 608px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 15px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 46.1% |
| 主色 | `#e7f6df` | 16.9% |
| 副色 | `#2a2c34` | 5.8% |
| 差し色 | `#a3c97b` | 4.4% |
| 差し色 | `#b2a9a2` | 4% |
| 差し色 | `#cee6f8` | 4% |

文字色は `#555555` / `#ffffff` / `#333333` / `#111111`。

- 主色 `#a3c97b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.06) 0px 10px 40px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 3 | 32 | 2 | 0 |
| `#f7f7f7` | 1 | 0 | 0 | 0 |
| `#292929` | 1 | 0 | 0 | 0 |
| `#808080` | 1 | 0 | 0 | 0 |
| `#777777` | 0 | 5 | 1 | 0 |
| `#555555` | 0 | 6 | 0 | 0 |
| `#333333` | 0 | 25 | 0 | 0 |
| `#111111` | 0 | 7 | 0 | 0 |

- `#a3c97b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#a3c97b` |
| `#f7f7f7` | `#a3c97b` |
| `#292929` | `#ffffff` |

```css
.section{ --on:#a3c97b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Helvetica
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.5 |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1216px／読ませる段は 608px
- セクションの上下余白: 80 / 52 / 40 / 64px（基本は 80px）
- 並びの間隔: px
- 角丸: 15px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1279 / 959 / 768 / 668 / 667px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 12px / 行間 2 |
| 見出し | 34px | 26px / 行間 1.5 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 12px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 15px; padding: 18px 0px; min-height: 53px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 15px; padding: 22px 60px; min-height: 61px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |

- 全1セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#f7f7f7`（1） / `#292929`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 15px だが、**完全な円は別扱い**で 17 箇所ある（16px×16、48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 9枚使っている
- 比率は 3:2（5枚）、4:3（3枚）、21:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a3c97b }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:15px;
  padding:18px 0px; min-height:53px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#a3c97b` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（15px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
