# VENTURE FOR JAPAN ふうのデザイン

- 出典: https://ventureforjapan.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／求人･マッチング･転職･人材ビジネス／レスポンシブ

#f3f3f4 の地に `#b29e93` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.4、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f3f3f4;
  --main: #b29e93;
  --sub: #464342;
  --ink: #231815;
  --ink-rev: #dedede;
  --on: #b29e93;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "YakuHanJP_Noto", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.4;
  --container: 1088px;
  --read: 748px;
  --section-y: 64px;
  --gap: 35px;
  --radius: 3px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f3f3f4` | 86.2% |
| 主色 | `#cfc8c1` | 1.9% |
| 副色 | `#464342` | 1.6% |
| 差し色 | `#b29e93` | 1.6% |
| 差し色 | `#d5dee3` | 1.5% |

文字色は `#231815` / `#dedede` / `#e60012` / `#999999`。

- 主色 `#b29e93` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 53 | 11 | 0 | 19 |
| `#f3f3f4` | 3 | 0 | 0 | 0 |
| `#e60012` | 9 | 20 | 6 | 7 |
| `#e8e8e8` | 6 | 0 | 0 | 6 |
| `#231815` | 0 | 190 | 6 | 0 |
| `#dedede` | 0 | 1 | 2 | 0 |
| `#999999` | 0 | 32 | 0 | 0 |

- `#b29e93` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#b29e93` |
| `#f3f3f4`（地） | `#b29e93` |
| `#e60012` | `#dedede` |

```css
.section{ --on:#b29e93 }                     /* 地の面 */
.section--main{ background:var(--main); color:#dedede; --on:#dedede }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#dedede }
.section--main .btn--fill{ background:#dedede; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: YakuHanJP_Noto
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 45px | 1.3 |
| 見出し | 39px | 1.3 |
| 小見出し | 36px | — |
| リード | 25px | — |
| リード | 23px | 1.4 |
| 本文 | 16px | 1.4 |
| 補助 | 15px | — |

- 本文は 16px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1088px／読ませる段は 748px
- セクションの上下余白: 64 / 80 / 180 / 116px（基本は 64px）
- 並びの間隔: 14 / 20 / 35 / 36px
- 角丸: 3px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1680 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.4 | 15px / 行間 1.4 |
| 見出し | 45px | 21px / 行間 1.4 |
| セクションの上下余白 | 64px | 24px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 35px | 12px |

- 本文は 16px → 15px、セクション余白は 64px → 24px（PCの38%）。
- 文字サイズの段は 21 / 19 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #231815;
  border-radius: 3px; padding: 0px 7px; min-height: 37px;
  font-size: 25px; font-weight: 500; letter-spacing: -0.495px;
}
.btn-sub{
  background: transparent; color: #231815;
  border-radius: 0px; padding: 0px 0px; min-height: 62px;
  font-size: 14px; font-weight: 500; letter-spacing: -0.225px;
}
.btn-sub{
  background: #e8e8e8; color: #231815;
  border-radius: 3px; padding: 0px 14px; min-height: 34px;
  font-size: 14px; font-weight: 500; letter-spacing: -0.225px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 2160px | — | ヒーロー | 中央 | — |
| 2 | 1140px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1780px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 4020px | — | 6カラム・画像あり | 右 | 左（45:55） |
| 5 | 1040px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#f3f3f4`（3） / `#e60012`（2）
- 見出しは左0／中央4。
- 2カラムの分け方は 45:55。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 84枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（30枚）、1:1（25枚）、4:3（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b29e93 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:2160px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#dedede; --on:#dedede }
.section--main .btn--fill{ background:#dedede; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#231815; border-radius:3px;
  padding:0px 7px; min-height:37px;
  font-size:25px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#f3f3f4` のまま。主色 `#b29e93` は文字と小さな部品にだけ使う。
- 余白 64px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。
- 中途半端な角丸（3px と 0px 以外）を混ぜない。
