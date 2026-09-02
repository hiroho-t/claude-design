# コンテンツ管理の新しいスタンダード ふうのデザイン

- 出典: https://www.newt.so/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#7ee787` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 1.6、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7ee787;
  --sub: #161b22;
  --ink: #c9d1d9;
  --ink-rev: #000000;
  --on: #7ee787;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "ui-monospace", sans-serif;
  --font-en: "ui-monospace", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.6;
  --container: 616px;
  --read: 600px;
  --section-y: 100px;
  --gap: 6px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.9% |
| 主色 | `#ecded5` | 6.7% |
| 副色 | `#161b22` | 3.3% |
| 差し色 | `#c0c2c3` | 2% |
| 差し色 | `#83838f` | 1.5% |

文字色は `#c9d1d9` / `#000000` / `#7ee787` / `#79c0ff`。

- 主色 `#7ee787` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 7 | 0 | 0 | 1 |
| `#161b22` | 2 | 0 | 0 | 0 |
| `#f2f2f0` | 2 | 0 | 0 | 0 |
| `#fff0f0` | 1 | 0 | 0 | 0 |
| `#c9d1d9` | 0 | 13 | 0 | 0 |
| `#000000` | 0 | 37 | 2 | 0 |
| `#7ee787` | 0 | 24 | 0 | 0 |
| `#79c0ff` | 0 | 21 | 0 | 0 |

- `#7ee787` は文字色として24箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#7ee787` |
| `#f2f2f0` | `#7ee787` |
| `#161b22` | `#000000` |

```css
.section{ --on:#7ee787 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: ui-monospace
- 欧文: ui-monospace
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 50px | 1.5 |
| 見出し | 20px | — |
| 小見出し | 18px | — |
| リード | 15px | — |
| リード | 13px | — |
| 本文 | 12px | 1.6 |

- 本文は 12px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 616px／読ませる段は 600px
- セクションの上下余白: 100 / 140 / 152px（基本は 100px）
- 並びの間隔: 4 / 6 / 30px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1680 / 1000 / 769 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.6 | 8px / 行間 1.6 |
| 見出し | 50px | 30px / 行間 1.5 |
| セクションの上下余白 | 100px | 52px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 6px | 6px |

- 本文は 12px → 8px、セクション余白は 100px → 52px（PCの52%）。
- 文字サイズの段は 30 / 18 / 15 / 13 / 8px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 5px; padding: 5px 10px; min-height: 31px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 2px solid #ccd1c9;
  border-radius: 40px; padding: 8px 16px; min-height: 44px;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1220px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 500px | — | 1カラム・画像あり | — | — |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#f2f2f0`（2） / `#161b22`（2）
- 見出しは左0／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 5枚使っている
- 比率は 1:1（2枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7ee787 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1220px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:5px;
  padding:5px 10px; min-height:31px;
  font-size:13px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:8px; --section-y:52px; --gap:6px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#7ee787` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。
