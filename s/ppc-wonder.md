# P.P.CORPORATION ふうのデザイン

- 出典: https://ppc-wonder.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／福祉･介護

白地に `#b72335` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 2、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b72335;
  --sub: #e1e4e7;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #b72335;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "RodinBokutohPro-DB", sans-serif;
  --font-en: "RodinBokutohPro-DB", sans-serif;
  --fs-body: 13px;
  --lh-body: 2;
  --container: 600px;
  --read: 720px;
  --section-y: 96px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.7% |
| 主色 | `#292825` | 11.5% |
| 副色 | `#e1e4e7` | 4.5% |
| 差し色 | `#b7b5b6` | 2.9% |

文字色は `#000000` / `#ffffff` / `#b72335`。

- 主色 `#b72335` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#292825` | 3 | 0 | 0 | 0 |
| `#ffffff` | 8 | 36 | 8 | 0 |
| `#eeece7` | 2 | 0 | 0 | 0 |
| `#4597ad` | 1 | 0 | 0 | 0 |
| `#d04570` | 1 | 0 | 0 | 0 |
| `#000000` | 3 | 28 | 0 | 0 |
| `#b72335` | 1 | 11 | 9 | 0 |

- `#b72335` は文字色として11箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも9箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#b72335` |
| `#292825` | `#ffffff` |
| `#eeece7` | `#b72335` |
| `#eeece6` | `#b72335` |

```css
.section{ --on:#b72335 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: RodinBokutohPro-DB
- 欧文: RodinBokutohPro-DB
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 54px | — |
| 見出し | 18px | — |
| 小見出し | 14px | — |
| 本文 | 13px | 2 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 13px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 600px／読ませる段は 720px
- セクションの上下余白: 96 / 48 / 60 / 160px（基本は 96px）
- 並びの間隔: px
- 角丸: 20px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1800 / 992 / 991 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 2 | 12px / 行間 1 |
| セクションの上下余白 | 96px | 60px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 16px | —px |

- 本文は 13px → 12px、セクション余白は 96px → 60px（PCの63%）。
- 文字サイズの段は 23 / 12 / 11 / 10 / 9px。

## ボタン

```css
.btn{
  background: transparent; color: #b72335;
  border: 2px solid #b72335;
  border-radius: 50px; padding: 19px 41px; min-height: 54px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.3px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50px; padding: 15px 33px; min-height: 46px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.3px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 50px; padding: 19px 41px; min-height: 54px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.3px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 200px | — | ヒーロー（画像） | — | — |
| 2 | 900px | `#ffffff` | 1カラム・画像あり | — | 全幅 |
| 3 | 580px | — | 1カラム・画像あり | 左 | — |
| 4 | 660px | — | 4カラム・画像あり | 左 | 右（42:58） |
| 5 | 620px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 840px | — | 2カラム・画像あり | 左 | 左（42:58） |
| 7 | 620px | — | 1カラム・画像あり | 左 | 右（27:73） |
| 8 | 380px | — | 2カラム・画像あり | — | — |
| 9 | 660px | `#292825` | 1カラム・画像あり | — | — |

- 全9セクション。
- 使われている面の色: `#ffffff`（6） / `#292825`（3） / `#eeece7`（1） / `#eeece6`（1）
- 見出しは左4／中央1。
- 2カラムの分け方は 42:58 / 42:58 / 27:73。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 48px 48px;
}
```

ラベル・タグ

```css
.chip{
  background: #000000; color: #000000;
  border-radius: 999px; padding: 10px 26px; font-size: 6px;
}
```

## 丸いもの

角丸は 20px だが、**完全な円は別扱い**で 4 箇所ある（48px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（11枚）、3:2（10枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b72335 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:200px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:48px 48px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#b72335; border-radius:50px;
  padding:19px 41px; min-height:54px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:60px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b72335` は文字と小さな部品にだけ使う。
- 余白 96px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（20px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
