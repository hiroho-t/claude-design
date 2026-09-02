# 高浜市やきものの里 かわら美術館・図書館（ミュージアム） ふうのデザイン

- 出典: https://www.takahama-kawara-museum.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／商業施設･レジャー施設･文化施設／カルチャー･アート

#eeebe5 の地に `#e3c29d` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 1.88、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #eeebe5;
  --main: #e3c29d;
  --sub: #fefefe;
  --ink: #442c16;
  --ink-rev: #ffffff;
  --on: #e3c29d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shuei KakuGo Gin B", sans-serif;
  --font-en: "Shuei KakuGo Gin B", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.88;
  --container: 604px;
  --read: 580px;
  --section-y: 80px;
  --gap: 8px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#eeebe5` | 50.9% |
| 主色 | `#e3c29d` | 9.3% |
| 副色 | `#fefefe` | 5.5% |
| 差し色 | `#c6ce56` | 5% |
| 差し色 | `#49331b` | 4.5% |
| 差し色 | `#d5ab82` | 4.3% |

文字色は `#442c16` / `#ffffff` / `#c16c26` / `#ee763f`。

- 主色 `#e3c29d` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は`rgba(60, 40, 8, 0.1) 0px 0px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 23 | 86 | 2 | 0 |
| `#ede9e4` | 16 | 0 | 1 | 0 |
| `#ee763f` | 3 | 14 | 4 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#63594c` | 1 | 0 | 0 | 0 |
| `#442c16` | 14 | 179 | 9 | 8 |
| `#c16c26` | 12 | 35 | 1 | 0 |

- `#e3c29d` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eeeae4` | `#e3c29d` |
| `#ffffff` | `#e3c29d` |
| `#ee763f` | `#ffffff` |
| `#442c16` | `#ffffff` |

```css
.section{ --on:#e3c29d }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Shuei KakuGo Gin B
- 欧文: Shuei KakuGo Gin B
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.58 |
| 見出し | 40px | 1.4 |
| 小見出し | 32px | 1.4 |
| リード | 18px | 1 |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.88 |

- 本文は 14px・行間 1.88。

## レイアウト

- コンテンツ幅: 最大 604px／読ませる段は 580px
- セクションの上下余白: 80 / 132 / 60 / 36px（基本は 80px）
- 並びの間隔: 4 / 6 / 8 / 16px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.88 | 13px / 行間 1.88 |
| 見出し | 48px | 16px / 行間 1 |
| セクションの上下余白 | 80px | 40px |
| 左右の余白 | — | 27px |
| 並びの間隔 | 8px | 7px |

- 本文は 14px → 13px、セクション余白は 80px → 40px（PCの50%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #442c16; color: #ffffff;
  border-radius: 100px; padding: 14px 23px; min-height: 58px;
  font-size: 16px; font-weight: 500; letter-spacing: 1.6px;
}
.btn-sub{
  background: #ebf8ff; color: #ffffff;
  border-radius: 0px; padding: 2px 2px; min-height: 70px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 780px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 9 | 780px | — | 1カラム・画像あり | — | 全幅 |
| 10 | 780px | — | 1カラム・画像あり | — | 全幅 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#eeeae4`（13） / `#ffffff`（9） / `#ee763f`（1） / `#442c16`（1）


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #eeeae4;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #442c16; color: #ffffff;
  border-radius: 4px; padding: 0px 4px; font-size: 9px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 15 箇所ある（72px×6、24px×4、40px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 34枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 16:9（11枚）、3:2（10枚）、2:3（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e3c29d }
.container{ width:min(100% - 54px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:780px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#eeeae4;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#442c16; color:#ffffff; border-radius:100px;
  padding:14px 23px; min-height:58px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:40px; --gap:7px; }
  .container{ width:calc(100% - 54px) }
}
```

## 守ること

やること

- 地色と主色 `#e3c29d` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 80px と行間 1.88 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.88 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
