# 桜十字病院 ふうのデザイン

- 出典: https://sakurajuji.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬

白地に `#ff1f54` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 13px・行間 1.6、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ff1f54;
  --sub: #e7e4e7;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #ff1f54;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Open Sans", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.6;
  --container: 1700px;
  --read: 900px;
  --section-y: 72px;
  --gap: 15px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69.5% |
| 主色 | `#c4cdd3` | 15.6% |
| 副色 | `#e7e4e7` | 9.5% |
| 差し色 | `#b2b3b6` | 3.2% |
| 差し色 | `#827474` | 2.2% |

文字色は `#333333` / `#ffffff` / `#ff1f54` / `#555555`。

- 主色 `#ff1f54` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 8px 8px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 72 | 18 | 0 | 1 |
| `#000000` | 1 | 0 | 4 | 0 |
| `#f7f5f2` | 1 | 0 | 0 | 0 |
| `#6581c0` | 12 | 0 | 0 | 0 |
| `#77bd31` | 1 | 0 | 0 | 0 |
| `#333333` | 0 | 255 | 0 | 0 |
| `#ff1f54` | 0 | 6 | 0 | 0 |
| `#555555` | 0 | 12 | 0 | 0 |

- `#ff1f54` は文字色として6箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ff1f54` |
| `#f7f5f2` | `#ff1f54` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#ff1f54 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Yu Gothic（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Open Sans
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 16px | — |
| 見出し | 14px | — |
| 本文 | 13px | 1.6 |
| 補助 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 13px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1700px／読ませる段は 900px
- セクションの上下余白: 72 / 52 / 40 / 60px（基本は 72px）
- 並びの間隔: 10 / 15 / 40px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 1000 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.6 | 13px / 行間 1.6 |
| セクションの上下余白 | 72px | 52px |
| 左右の余白 | — | 10px |
| 並びの間隔 | 15px | 10px |

- 本文は 13px → 13px、セクション余白は 72px → 52px（PCの72%）。
- 文字サイズの段は 15 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #333333;
  border-radius: 10px; padding: 15px 20px; min-height: 62px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | `#f7f5f2` | ヒーロー（画像） | — | 全幅 |
| 2 | 160px | — | 帯・区切り | — | — |
| 3 | 1040px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 4 | 400px | — | 3カラム・画像あり | 左 | — |
| 5 | 520px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 6 | 520px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 1480px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 8 | 240px | — | 4カラム・画像あり | 左 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（21） / `#f7f5f2`（1） / `#000000`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（21箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 5px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 8px 8px 20px 0px;
}
```


## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 4 箇所ある（24px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 49枚使っている。うち 12 枚は画面いっぱいに置く
- 比率は 16:9（12枚）、4:3（12枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff1f54 }
.container{ width:min(100% - 20px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#333333; border-radius:10px;
  padding:15px 20px; min-height:62px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:52px; --gap:10px; }
  .container{ width:calc(100% - 20px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ff1f54` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
