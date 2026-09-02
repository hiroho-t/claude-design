# データインテリジェンス×マーケティングで価値創造をともに ふうのデザイン

- 出典: https://www.valuesccg.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#173b35` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.5、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #173b35;
  --sub: #26554c;
  --ink: #2d3b35;
  --ink-rev: #d0d6d3;
  --on: #173b35;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Titillium Web", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1200px;
  --read: 864px;
  --section-y: 56px;
  --gap: 16px;
  --radius: 2px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 92.9% |
| 主色 | `#173b35` | 3.5% |
| 副色 | `#26554c` | 2.1% |

文字色は `#2d3b35` / `#d0d6d3` / `#ffffff` / `#33a947`。

- 主色 `#173b35` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.08) 0px 4px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#2d3b35` | 1 | 89 | 15 | 0 |
| `#ffffff` | 21 | 24 | 0 | 12 |
| `#26554c` | 2 | 1 | 0 | 0 |
| `#f2f5f4` | 13 | 0 | 0 | 8 |
| `#d0d6d3` | 0 | 21 | 16 | 0 |
| `#33a947` | 0 | 18 | 10 | 0 |

- `#173b35` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#173b35` |
| `#2d3b35` | `#d0d6d3` |

```css
.section{ --on:#173b35 }                     /* 地の面 */
.section--main{ background:var(--main); color:#d0d6d3; --on:#d0d6d3 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#d0d6d3 }
.section--main .btn--fill{ background:#d0d6d3; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Titillium Web
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.5 |
| 見出し | 20px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 864px
- セクションの上下余白: 56 / 128 / 40 / 48px（基本は 56px）
- 並びの間隔: 8 / 12 / 16 / 24px
- 角丸: 2px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1359 / 960 / 959 / 640 / 639px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 16px / 行間 1.5 |
| 見出し | 28px | 16px / 行間 1.5 |
| セクションの上下余白 | 56px | 24px |
| 左右の余白 | — | 17px |
| 並びの間隔 | 16px | 8px |

- 本文は 16px → 16px、セクション余白は 56px → 24px（PCの43%）。
- 文字サイズの段は 28 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #2d3b35;
  border: 1px solid #2d3b35;
  border-radius: 100px; padding: 2px 12px; min-height: 26px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #f2f5f4; color: #2d3b35;
  border: 1px solid #d0d6d3;
  border-radius: 2px; padding: 0px 12px; min-height: 26px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #2d3b35;
  border: 1px solid #688177;
  border-radius: 200px; padding: 4px 12px; min-height: 40px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 380px | — | ヒーロー | 左 | — |
| 2 | 720px | — | 3カラム・画像あり | 左 | 右（60:40） |
| 3 | 680px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 4 | 140px | — | 3カラム・画像あり | — | 全面 |
| 5 | 900px | — | 3カラム・画像あり | 右 | 左（60:40） |
| 6 | 680px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 7 | 580px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 8 | 120px | — | 帯・区切り | 左 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#2d3b35`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 60:40 / 60:40。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #26554c;
  border-radius: 8px;
  padding: 24px 24px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #2d3b35;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 2px だが、**完全な円は別扱い**で 7 箇所ある（40px×7）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 35枚使っている
- 比率は 3:2（20枚）、16:9（10枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#173b35 }
.container{ width:min(100% - 34px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:380px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#d0d6d3; --on:#d0d6d3 }
.section--main .btn--fill{ background:#d0d6d3; color:var(--main) }
.card{ background:#26554c;
  border-radius:8px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#2d3b35; border-radius:100px;
  padding:2px 12px; min-height:26px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:16px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 34px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#173b35` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（2px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
