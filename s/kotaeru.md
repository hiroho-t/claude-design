# フロンティア信託株式会社 ふうのデザイン

- 出典: https://trust.kotaeru.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／金融･投資･保険･士業

#062d59 の地に `#062d59` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #062d59;
  --main: #062d59;
  --sub: #d6e8e6;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #062d59;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "wfont_707f5b_bea56f186be84b5f996cc3e57b3d8110", sans-serif;
  --font-en: "wfont_707f5b_bea56f186be84b5f996cc3e57b3d8110", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 888px;
  --read: 892px;
  --section-y: 84px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#062d59` | 47.3% |
| 主色 | `#ffffff` | 36.8% |
| 副色 | `#d6e8e6` | 7.9% |
| 差し色 | `#48617e` | 2.1% |
| 差し色 | `#778ea0` | 1.6% |
| 差し色 | `#9bbabd` | 1.5% |

文字色は `#000000` / `#ffffff` / `#062d59`。

- 主色 `#062d59` は差し色ではなく**面**で使う。画面の47%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 44 | 5 | 2 |
| `#062d59` | 5 | 15 | 5 | 0 |
| `#d6e8e6` | 3 | 0 | 0 | 0 |
| `#f0f0f0` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 25 | 0 | 0 |

- `#062d59` は文字色として15箇所で使うのが主。面としては5箇所しかないが、1枚が大きく画面の47%を占める。ボタンの地には使っていない。枠線にも5箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#062d59` |
| `#062d59`（地） | `#ffffff` |
| `#d6e8e6` | `#062d59` |
| `#f0f0f0` | `#062d59` |

```css
.section{ --on:#ffffff }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: wfont_707f5b_bea56f186be84b5f996cc3e57b3d8110
- 欧文: wfont_707f5b_bea56f186be84b5f996cc3e57b3d8110
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 60px | 1.35 |
| 見出し | 40px | 1.3 |
| 小見出し | 21px | 1.5 |
| リード | 17px | — |
| 本文 | 16px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 888px／読ませる段は 892px
- セクションの上下余白: 84 / 44 / 100px（基本は 84px）
- 並びの間隔: 6 / 10 / 12 / 21px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1240 / 1000 / 768 / 750 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| 見出し | 60px | 24px / 行間 1.3 |
| セクションの上下余白 | 84px | 40px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 12px | 10px |

- 本文は 16px → 14px、セクション余白は 84px → 40px（PCの48%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #062d59;
  border: 1px solid #062d59;
  border-radius: 8px; padding: 8px 8px; min-height: 60px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 960px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 400px | — | 3カラム・画像あり | 中央 | — |
| 4 | 1040px | — | 4カラム・画像あり | 左 | 右（62:38） |
| 5 | 420px | — | 3カラム・画像あり | 左 | 右（62:38） |
| 6 | 580px | — | 4カラム・画像あり | 左 | 右（44:56） |
| 7 | 480px | — | 2カラム・画像あり | 左 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#062d59` の面が 5 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（6） / `#062d59`（5） / `#d6e8e6`（3） / `#f0f0f0`（1）
- 見出しは左5／中央2。
- 2カラムの分け方は 62:38 / 62:38 / 44:56。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 39枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（17枚）、1:1（6枚）、21:9（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffffff }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#062d59; border-radius:8px;
  padding:8px 8px; min-height:60px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地色と主色 `#062d59` の面を全幅で交互に置く。主色は画面の47%を占めるだけ使う。
- 余白 84px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。
