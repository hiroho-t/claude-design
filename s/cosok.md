# 光束工業 ふうのデザイン

- 出典: https://cosok.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#e31e23` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e31e23;
  --sub: #ededed;
  --ink: #ffffff;
  --ink-rev: #222020;
  --on: #e31e23;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1230px;
  --read: 856px;
  --section-y: 72px;
  --gap: 16px;
  --radius: 24px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 38.6% |
| 主色 | `#222020` | 22.5% |
| 副色 | `#ededed` | 19.5% |
| 差し色 | `#7a7d7d` | 3.4% |
| 差し色 | `#373939` | 3.1% |
| 差し色 | `#c1c2c7` | 3.1% |

文字色は `#ffffff` / `#222020` / `#000000` / `#e31e23`。

- 主色 `#e31e23` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ededed` | 2 | 0 | 0 | 0 |
| `#ffffff` | 3 | 49 | 6 | 0 |
| `#222020` | 3 | 67 | 1 | 1 |
| `#000000` | 1 | 5 | 0 | 0 |
| `#0f0e0e` | 2 | 0 | 0 | 2 |
| `#e31e23` | 1 | 6 | 4 | 1 |

- `#e31e23` は文字色として6箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ededed` | `#e31e23` |
| `#ffffff`（地） | `#e31e23` |
| `#222020` | `#222020` |
| `#000000` | `#222020` |

```css
.section{ --on:#e31e23 }                     /* 地の面 */
.section--main{ background:var(--main); color:#222020; --on:#222020 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#222020 }
.section--main .btn--fill{ background:#222020; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Poppins
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.7 |
| 見出し | 24px | 1.67 |
| 小見出し | 20px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2 |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1230px／読ませる段は 856px
- セクションの上下余白: 72 / 120 / 260 / 56px（基本は 72px）
- 並びの間隔: px
- 角丸: 24px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1220 / 1160 / 1024 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 14px / 行間 2 |
| 見出し | 36px | 19px / 行間 1.67 |
| セクションの上下余白 | 72px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 72px → 32px（PCの44%）。
- 文字サイズの段は 24 / 20 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #222020;
  border: 1px solid #afafaf;
  border-radius: 24px; padding: 0px 15px; min-height: 28px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.6px;
}
.btn-sub{
  background: transparent; color: #e31e23;
  border: 1px solid #e31e23;
  border-radius: 30px; padding: 0px 50px; min-height: 60px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #afafaf;
  border-radius: 24px; padding: 0px 20px; min-height: 28px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1300px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1620px | `#ededed` | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1400px | `#ffffff` | 1カラム・画像あり | 左 | 右（33:67） |
| 4 | 1660px | `#222020` | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1560px | `#ededed` | 2カラム・画像あり | 左 | — |
| 6 | 400px | `#222020` | 2カラム | 中央 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ededed`（2） / `#ffffff`（2） / `#222020`（2） / `#000000`（1）
- 見出しは左4／中央2。
- 2カラムの分け方は 33:67。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #222020;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 15px; font-size: 12px;
}
```

## 丸いもの

角丸は 24px だが、**完全な円は別扱い**で 2 箇所ある（64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている
- 比率は 1:1（16枚）、4:3（4枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e31e23 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1300px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#222020; --on:#222020 }
.section--main .btn--fill{ background:#222020; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#222020; border-radius:24px;
  padding:0px 15px; min-height:28px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e31e23` は文字と小さな部品にだけ使う。
- 余白 72px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（24px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
