# 民泊清掃代行のM's B（エムズビー） ふうのデザイン

- 出典: https://ms-b.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／ビルメンテナンス･清掃･警備

白地に `#e60012` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.87、セクション間 136px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e60012;
  --ink: #231815;
  --ink-rev: #e60012;
  --on: #e60012;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.87;
  --container: 1232px;
  --read: 596px;
  --section-y: 136px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 95% |

文字色は `#231815` / `#e60012` / `#ffffff`。

- 主色 `#e60012` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f4f4` | 47 | 0 | 1 | 3 |
| `#ffffff` | 58 | 20 | 0 | 0 |
| `#f38089` | 16 | 0 | 0 | 0 |
| `#e60012` | 12 | 94 | 41 | 0 |
| `#d8d5d5` | 1 | 0 | 51 | 0 |
| `#231815` | 3 | 211 | 0 | 2 |

- `#e60012` は文字色として94箇所で使うのが主。面としては12箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも41箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f4f4` | `#e60012` |
| `#ffffff`（地） | `#e60012` |
| `#f38089` | `#e60012` |
| `#e60012`（主色） | `#e60012` |

```css
.section{ --on:#e60012 }                     /* 地の面 */
.section--main{ background:var(--main); color:#e60012; --on:#e60012 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#e60012 }
.section--main .btn--fill{ background:#e60012; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.25 |
| 見出し | 24px | 1.25 |
| 小見出し | 20px | — |
| リード | 18px | — |
| リード | 16px | 2 |
| 本文 | 15px | 1.87 |
| 補助 | 14px | — |

- 本文は 15px・行間 1.87。

## レイアウト

- コンテンツ幅: 最大 1232px／読ませる段は 596px
- セクションの上下余白: 136 / 40 / 64 / 120px（基本は 136px）
- 並びの間隔: 8 / 16 / 24 / 40px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1160 / 769 / 768 / 767 / 479px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.87 | 14px / 行間 1.79 |
| 見出し | 32px | 24px / 行間 1.33 |
| セクションの上下余白 | 136px | 80px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 16px |

- 本文は 15px → 14px、セクション余白は 136px → 80px（PCの59%）。
- 文字サイズの段は 20 / 16 / 15 / 14 / 13px。

## ボタン

```css
.btn{
  background: transparent; color: #e60012;
  border: 1px solid #e60012;
  border-radius: 15px; padding: 8px 16px; min-height: 32px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #231815;
  border-radius: 0px; padding: 0px 0px; min-height: 72px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #f5f4f4; color: #231815;
  border-radius: 36px; padding: 20px 24px; min-height: 72px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1040px | `#ffffff` | ヒーロー（画像） | 左 | 右（36:64） |
| 2 | 200px | — | 帯・区切り | — | 全面 |
| 3 | 940px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1780px | `#f5f4f4` | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 820px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 540px | `#f5f4f4` | 1カラム・文字だけ | 左 | — |
| 7 | 560px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 2780px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 9 | 1380px | `#f5f4f4` | 2カラム | 左 | — |
| 10 | 1980px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 11 | 1340px | `#f5f4f4` | 1カラム・画像あり | 左 | 右（35:65） |
| 12 | 940px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 13 | 700px | `#f5f4f4` | 3カラム・画像あり | 左 | — |
| 14 | 680px | `#e60012` | 2カラム・画像あり | 左 | 右（28:72） |
| 15 | 640px | `#d8d5d5` | 1カラム・画像あり | 中央 | 全幅 |
| 16 | 600px | `#ffffff` | 2カラム・画像あり | — | — |

- 全16セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f4f4`（17） / `#ffffff`（13） / `#f38089`（10） / `#e60012`（1）
- 見出しは左12／中央1。
- 2カラムの分け方は 36:64 / 35:65 / 28:72。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #f5f4f4;
  border-radius: 24px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #e60012;
  border: 1px solid currentColor;
  border-radius: 15px; padding: 8px 16px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 23 箇所ある（64px×12、120px×6、40px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 88枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 1:1（43枚）、16:9（23枚）、3:2（12枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e60012 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1040px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#e60012; --on:#e60012 }
.section--main .btn--fill{ background:#e60012; color:var(--main) }
.card{ background:#f5f4f4;
  border-radius:24px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#e60012; border-radius:15px;
  padding:8px 16px; min-height:32px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:80px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e60012` は文字と小さな部品にだけ使う。
- 余白 136px と行間 1.87 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 24px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.87 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
