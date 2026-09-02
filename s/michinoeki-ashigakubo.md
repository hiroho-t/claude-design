# 【公式】道の駅 果樹公園あしがくぼ ふうのデザイン

- 出典: https://michinoeki-ashigakubo.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／旅行･観光･遊び／体験･交流

白地に `#99a8b3` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.75、セクション間 124px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #99a8b3;
  --sub: #827f6e;
  --ink: #222222;
  --ink-rev: #1f9f60;
  --on: #99a8b3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Outfit", sans-serif;
  --font-en: "Outfit", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 1060px;
  --read: 712px;
  --section-y: 124px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 72.6% |
| 主色 | `#99a8b3` | 7.8% |
| 副色 | `#827f6e` | 4.1% |
| 差し色 | `#4b4c3f` | 3% |
| 差し色 | `#bfcbbc` | 2.8% |
| 差し色 | `#e8eeec` | 2.8% |

文字色は `#222222` / `#1f9f60` / `#1797f4` / `#ffffff`。

- 主色 `#99a8b3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0f9ff` | 1 | 0 | 0 | 0 |
| `#1797f4` | 1 | 4 | 0 | 0 |
| `#1f9f60` | 0 | 9 | 1 | 0 |
| `#ffffff` | 2 | 3 | 0 | 2 |
| `#222222` | 2 | 80 | 0 | 0 |

- `#99a8b3` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f0f9ff` | `#99a8b3` |
| `#1797f4` | `#1f9f60` |

```css
.section{ --on:#99a8b3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1f9f60; --on:#1f9f60 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1f9f60 }
.section--main .btn--fill{ background:#1f9f60; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Outfit
- 欧文: Outfit
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 72px | 1 |
| 見出し | 32px | — |
| 小見出し | 18px | 1.2 |
| 本文 | 16px | 1.5 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1060px／読ませる段は 712px
- セクションの上下余白: 124 / 60 / 64 / 72px（基本は 124px）
- 並びの間隔: 15 / 30 / 40 / 60px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1820 / 1440 / 1200 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 16px / 行間 1.75 |
| 見出し | 72px | 50px / 行間 1 |
| セクションの上下余白 | 124px | 40px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 40px | 16px |

- 本文は 16px → 16px、セクション余白は 124px → 40px（PCの32%）。
- 文字サイズの段は 19 / 17 / 16 / 15 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #1797f4;
  border-radius: 2px; padding: 2px 6px; min-height: 26px;
  font-size: 19px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #1797f4;
  border-radius: 0px; padding: 0px 0px; min-height: 51px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 6620px | — | ヒーロー（画像） | 右 | 全幅 |

- 全1セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f0f9ff`（1） / `#1797f4`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（40px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 21枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（13枚）、4:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#99a8b3 }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:6620px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1f9f60; --on:#1f9f60 }
.section--main .btn--fill{ background:#1f9f60; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#1797f4; border-radius:2px;
  padding:2px 6px; min-height:26px;
  font-size:19px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:40px; --gap:16px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#99a8b3` は文字と小さな部品にだけ使う。
- 余白 124px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
