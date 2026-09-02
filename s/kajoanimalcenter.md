# 山形霞城どうぶつ医療センター ふうのデザイン

- 出典: https://kajo-animal.center/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ペット･動物･生き物

白地に `#00a5be` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 1.4、セクション間 148px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #00a5be;
  --sub: #104d56;
  --ink: #ffffff;
  --ink-rev: #1a1311;
  --on: #00a5be;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lexend Deca", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.4;
  --container: 1244px;
  --read: 620px;
  --section-y: 148px;
  --gap: 19px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 52.6% |
| 主色 | `#00a5be` | 32.3% |
| 副色 | `#104d56` | 5.7% |
| 差し色 | `#e1e1dc` | 1.5% |

文字色は `#ffffff` / `#1a1311` / `#00a5be` / `#f5f4f4`。

- 主色 `#00a5be` は差し色ではなく**面**で使う。画面の32%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 11 | 89 | 19 | 1 |
| `#00a5be` | 7 | 20 | 2 | 0 |
| `#1a1311` | 3 | 44 | 2 | 0 |
| `#0098b3` | 12 | 0 | 0 | 2 |
| `#f5f4f4` | 0 | 1 | 0 | 0 |

- `#00a5be` は面7箇所・文字20箇所を行き来する。ボタンの地には使っていない。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#00a5be` |
| `#00a5be`（主色） | `#1a1311` |
| `#0098b3` | `#1a1311` |
| `#1a1311` | `#1a1311` |

```css
.section{ --on:#00a5be }                     /* 地の面 */
.section--main{ background:var(--main); color:#1a1311; --on:#1a1311 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1a1311 }
.section--main .btn--fill{ background:#1a1311; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#00a5be` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Lexend Deca
- ウェイトは 400 / 500 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.44 |
| 見出し | 30px | — |
| 小見出し | 21px | 1.45 |
| リード | 19px | 2.22 |
| リード | 17px | 1.75 |
| 本文 | 15px | 1.4 |
| 補助 | 13px | — |

- 本文は 15px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1244px／読ませる段は 620px
- セクションの上下余白: 148 / 168 / 212 / 84px（基本は 148px）
- 並びの間隔: 5 / 16 / 19 / 66px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1025 / 1024 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.4 | 14px / 行間 2 |
| 見出し | 36px | 13px / 行間 1 |
| セクションの上下余白 | 148px | 28px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 19px | 12px |

- 本文は 15px → 14px、セクション余白は 148px → 28px（PCの19%）。
- 文字サイズの段は 16 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 100%; padding: 0px 0px; min-height: 83px;
  font-size: 19px; font-weight: 500; letter-spacing: 1.26501px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 9999px; padding: 4px 20px; min-height: 38px;
  font-size: 17px; font-weight: 500; letter-spacing: 0.843338px;
}
.btn-sub{
  background: transparent; color: #1a1311;
  border: 2px solid #1a1311;
  border-radius: 100%; padding: 0px 0px; min-height: 83px;
  font-size: 19px; font-weight: 500; letter-spacing: 1.26501px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#00a5be` | ヒーロー（画像） | 左 | 右（43:57） |
| 2 | 460px | `#00a5be` | 4カラム・画像あり | — | — |
| 3 | 1040px | `#00a5be` | 1カラム・文字だけ | 左 | — |
| 4 | 1140px | `#00a5be` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 800px | `#ffffff` | 1カラム・画像あり | — | 全面 |
| 6 | 840px | `#ffffff` | 3カラム | 中央 | — |
| 7 | 800px | `#ffffff` | 1カラム・画像あり | — | 全面 |
| 8 | 920px | `#ffffff` | 1カラム・画像あり | 中央 | 右（27:73） |
| 9 | 760px | `#ffffff` | 1カラム・文字だけ | 左 | — |
| 10 | 1400px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 11 | 900px | `#1a1311` | 1カラム・文字だけ | 中央 | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#00a5be` の面が 7 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（9） / `#00a5be`（7） / `#0098b3`（4） / `#1a1311`（3）
- 見出しは左3／中央5。
- 2カラムの分け方は 43:57 / 27:73。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #0098b3;
  border-radius: 32px;
  padding: 0px 42px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #1a1311;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 13px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 21 箇所ある（16px×14、56px×6、104px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 6枚使っている
- 比率は 16:9（3枚）、21:9（2枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00a5be }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1a1311; --on:#1a1311 }
.section--main .btn--fill{ background:#1a1311; color:var(--main) }
.card{ background:#0098b3;
  border-radius:32px; padding:0px 42px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:100%;
  padding:0px 0px; min-height:83px;
  font-size:19px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:14px; --section-y:28px; --gap:12px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#00a5be` の面を全幅で交互に置く。主色は画面の32%を占めるだけ使う。
- 余白 148px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 32px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
