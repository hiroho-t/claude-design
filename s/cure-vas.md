# 難治性血管腫・血管奇形薬物療法研究班情報サイト ふうのデザイン

- 出典: https://cure-vas.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#988878` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.88、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #988878;
  --sub: #988878;
  --ink: #6d553d;
  --ink-rev: #ff8f8f;
  --on: #988878;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", "Noto Serif JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.88;
  --container: 1200px;
  --read: 1080px;
  --section-y: 40px;
  --gap: 32px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 42.7% |
| 主色 | `#f8eded` | 35% |
| 副色 | `#988878` | 6% |
| 差し色 | `#ffcecd` | 5.2% |
| 差し色 | `#d1d7da` | 4% |
| 差し色 | `#f1a8a1` | 2.7% |

文字色は `#6d553d` / `#ff8f8f` / `#998877` / `#ffffff`。

- 主色 `#988878` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(153, 136, 119, 0.2) 0px 5px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f8eded` | 6 | 0 | 0 | 0 |
| `#ffffff` | 12 | 12 | 0 | 0 |
| `#ff8f8f` | 12 | 23 | 0 | 7 |
| `#ffcaca` | 3 | 0 | 0 | 1 |
| `#998877` | 1 | 16 | 7 | 0 |
| `#6d553d` | 6 | 130 | 0 | 0 |

- `#988878` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#988878` |
| `#f8eded` | `#988878` |
| `#ffecec` | `#988878` |
| `#ff8f8f` | `#988878` |

```css
.section{ --on:#988878 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ff8f8f; --on:#ff8f8f }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ff8f8f }
.section--main .btn--fill{ background:#ff8f8f; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f8eded` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 秀英丸ゴシック L（有料）→ 無料で近いのは **Shippori Mincho**、なければ Noto Serif JP
- 欧文: Montserrat
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.25 |
| 見出し | 32px | 1.25 |
| 小見出し | 24px | 1.25 |
| リード | 18px | — |
| 本文 | 16px | 1.88 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.88。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 1080px
- セクションの上下余白: 40 / 36 / 44 / 80px（基本は 40px）
- 並びの間隔: 5 / 32 / 48px
- 角丸: 4px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.88 | 14px / 行間 1.88 |
| 見出し | 56px | 24px / 行間 1.25 |
| セクションの上下余白 | 40px | 28px |
| 左右の余白 | — | 27px |
| 並びの間隔 | 32px | 1px |

- 本文は 16px → 14px、セクション余白は 40px → 28px（PCの70%）。
- 文字サイズの段は 24 / 18 / 16 / 14 / 11px。

## ボタン

```css
.btn{
  background: #ffe7d8; color: #6d553d;
  border-radius: 4px; padding: 14px 4px; min-height: 45px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #998877;
  border: 1px solid #998877;
  border-radius: 8px; padding: 16px 40px; min-height: 64px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #ebffde; color: #6d553d;
  border-radius: 4px; padding: 14px 4px; min-height: 45px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 480px | `#f8eded` | ヒーロー | 中央 | — |
| 2 | 320px | — | 帯・区切り | 左 | — |
| 3 | 680px | — | 1カラム・画像あり | 中央 | 全幅 |
| 4 | 2280px | `#f8eded` | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 2360px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1080px | `#f8eded` | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1040px | — | 5カラム・画像あり | 中央 | — |
| 8 | 340px | — | 2カラム | — | — |
| 9 | 720px | — | 1カラム・文字だけ | 中央 | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（12） / `#f8eded`（3） / `#ffecec`（2） / `#ff8f8f`（1）
- 見出しは左1／中央7。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 16px;
  padding: 76px 28px;
}
```


## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 24 箇所ある（88px×12、104px×7、184px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 28枚使っている。うち 9 枚は画面いっぱいに置く
- 比率は 3:2（9枚）、2:3（6枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#988878 }
.container{ width:min(100% - 54px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:480px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ff8f8f; --on:#ff8f8f }
.section--main .btn--fill{ background:#ff8f8f; color:var(--main) }
.card{ background:#ffffff;
  border-radius:16px; padding:76px 28px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffe7d8; color:#6d553d; border-radius:4px;
  padding:14px 4px; min-height:45px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:28px; --gap:1px; }
  .container{ width:calc(100% - 54px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#988878` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.88 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.88 より詰めない。
- 中途半端な角丸（4px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
