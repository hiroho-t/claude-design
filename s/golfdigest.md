# ゴルフダイジェスト・オンライン ふうのデザイン

- 出典: https://company.golfdigest.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／レスポンシブ／1カラム

白地に `#02111b` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #02111b;
  --sub: #bfbfbf;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #02111b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Archivo Narrow", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.6;
  --container: 1200px;
  --read: 652px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 50.1% |
| 主色 | `#02111b` | 19.7% |
| 副色 | `#bfbfbf` | 6.5% |
| 差し色 | `#aeaeae` | 6.2% |
| 差し色 | `#a19f9d` | 3.7% |
| 差し色 | `#e7eaed` | 3.3% |

文字色は `#222222` / `#ffffff` / `#000000` / `#0062a3`。

- 主色 `#02111b` は差し色ではなく**面**で使う。画面の20%を占めている。
- 影は`rgba(34, 34, 34, 0.06) 0px 4px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 4 | 30 | 0 | 0 |
| `#02111b` | 1 | 0 | 0 | 0 |
| `#0062a3` | 1 | 7 | 0 | 1 |
| `#edeff1` | 2 | 0 | 0 | 1 |
| `#222222` | 1 | 63 | 0 | 1 |
| `#000000` | 0 | 2 | 0 | 0 |

- `#02111b` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#02111b` |
| `#02111b`（主色） | `#ffffff` |

```css
.section{ --on:#02111b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Archivo Narrow
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | — |
| 見出し | 32px | 1.5 |
| 小見出し | 22px | 1.36 |
| 本文 | 15px | 1.6 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 652px
- セクションの上下余白: 40 / 100 / 56 / 92px（基本は 40px）
- 並びの間隔: px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1120 / 768 / 736 / 560 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.6 | 14px / 行間 1.57 |
| 見出し | 40px | 32px / 行間 1.5 |
| セクションの上下余白 | 40px | 56px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 14px、セクション余白は 40px → 56px（PCの140%）。
- 文字サイズの段は 29 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #222222;
  border-radius: 0px; padding: 0px 26px; min-height: 33px;
  font-size: 22px; font-weight: 500; letter-spacing: 2.2px;
}
.btn-sub{
  background: #0062a3; color: #ffffff;
  border-radius: 5px; padding: 18px 40px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 1.6px;
}
.btn-sub{
  background: #222222; color: #ffffff;
  border-radius: 5px; padding: 4px 16px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 620px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 220px | — | 帯・区切り | — | — |
| 3 | 840px | — | 6カラム・画像あり | — | 全面 |
| 4 | 760px | — | 1カラム・画像あり | 左 | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#02111b` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（3） / `#02111b`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 13 箇所ある（24px×12、48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 12枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（5枚）、21:9（3枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#02111b }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:620px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#222222; border-radius:0px;
  padding:0px 26px; min-height:33px;
  font-size:22px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:56px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#02111b` の面を全幅で交互に置く。主色は画面の20%を占めるだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
