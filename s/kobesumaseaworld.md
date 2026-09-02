# 【神戸須磨シーワールド】 ふうのデザイン

- 出典: https://www.kobesuma-seaworld.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／体験･交流／商業施設･レジャー施設･文化施設

白地に `#0071bc` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.65、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0071bc;
  --sub: #022458;
  --ink: #ffffff;
  --ink-rev: #002b60;
  --on: #0071bc;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 14px;
  --lh-body: 1.65;
  --container: 1000px;
  --read: 1028px;
  --section-y: 60px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.8% |
| 主色 | `#0071bc` | 3.5% |
| 副色 | `#022458` | 1.9% |
| 差し色 | `#013b8f` | 1.7% |

文字色は `#ffffff` / `#002b60` / `#ff3f5f` / `#0071bc`。

- 主色 `#0071bc` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.3) 0px 0px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#0071bc` | 26 | 3 | 0 | 2 |
| `#c8e8ef` | 1 | 0 | 0 | 0 |
| `#8ae1fa` | 1 | 0 | 0 | 0 |
| `#ffffff` | 21 | 76 | 16 | 10 |
| `#002b60` | 17 | 44 | 3 | 2 |
| `#ff3f5f` | 0 | 6 | 0 | 0 |

- `#0071bc` は面として26箇所、文字として3箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#0071bc`（主色） | `#002b60` |
| `#002b60` | `#002b60` |
| `#ffffff`（地） | `#0071bc` |
| `#ffe3e8` | `#0071bc` |

```css
.section{ --on:#0071bc }                     /* 地の面 */
.section--main{ background:var(--main); color:#002b60; --on:#002b60 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#002b60 }
.section--main .btn--fill{ background:#002b60; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.23 |
| 見出し | 22px | — |
| 小見出し | 20px | — |
| リード | 16px | — |
| 本文 | 14px | 1.65 |
| 補助 | 12px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.65。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 1028px
- セクションの上下余白: 60 / 80 / 100 / 40px（基本は 60px）
- 並びの間隔: 10 / 20 / 30 / 40px
- 角丸: 0px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1367 / 1366 / 1025 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.65 | 12px / 行間 1.23 |
| 見出し | 34px | 22px / 行間 1.23 |
| セクションの上下余白 | 60px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 30px | 10px |

- 本文は 14px → 12px、セクション余白は 60px → 40px（PCの67%）。
- 文字サイズの段は 16 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #002b60;
  border-radius: 50%; padding: 0px 0px; min-height: 80px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #002b60;
  border: 2px solid #ffffff;
  border-radius: 50px; padding: 0px 15px; min-height: 50px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #333333;
  border: 2px solid #002b60;
  border-radius: 1440px; padding: 1px 6px; min-height: 64px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 560px | — | 1カラム・画像あり | — | 全面 |
| 3 | 480px | — | 3カラム・画像あり | — | 全面 |
| 4 | 840px | — | 1カラム・画像あり | 中央 | — |
| 5 | 1000px | — | 1カラム・画像あり | — | 全面 |
| 6 | 1200px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1020px | `#c8e8ef` | 2カラム・画像あり | 中央 | 見出しの下 |
| 8 | 560px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 900px | — | 1カラム・文字だけ | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#0071bc`（19） / `#002b60`（3） / `#ffffff`（1） / `#ffe3e8`（1）
- 見出しは左0／中央4。


## 部品

囲み（11箇所で同じ形）

```css
.card{
  background: #0071bc;
  border-radius: 12px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 39 箇所ある（40px×12、72px×8、120px×6）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 48枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（16枚）、1:1（12枚）、16:9（9枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0071bc }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#002b60; --on:#002b60 }
.section--main .btn--fill{ background:#002b60; color:var(--main) }
.card{ background:#0071bc;
  border-radius:12px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#002b60; border-radius:50%;
  padding:0px 0px; min-height:80px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0071bc` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.65 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.65 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 12px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
