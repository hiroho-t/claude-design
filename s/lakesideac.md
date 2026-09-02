# レイクサイド動物病院 ふうのデザイン

- 出典: https://www.lakeside-ac.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ペット･動物･生き物

白地に `#c3dae9` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.2、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c3dae9;
  --sub: #cac4bb;
  --ink: #46403b;
  --ink-rev: #036eb8;
  --on: #c3dae9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.2;
  --container: 820px;
  --read: 860px;
  --section-y: 120px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 75.9% |
| 主色 | `#dce6e8` | 8.1% |
| 副色 | `#cac4bb` | 4.2% |
| 差し色 | `#818993` | 3.6% |
| 差し色 | `#c3dae9` | 2.9% |
| 差し色 | `#554e4f` | 2.9% |

文字色は `#46403b` / `#036eb8` / `#ffffff` / `#333333`。

- 主色 `#c3dae9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 58 | 13 | 0 | 0 |
| `#f9f6f0` | 10 | 0 | 0 | 0 |
| `#036eb7` | 7 | 32 | 10 | 0 |
| `#b2ddfb` | 22 | 0 | 0 | 0 |
| `#946134` | 4 | 0 | 0 | 0 |
| `#46403b` | 0 | 65 | 0 | 0 |
| `#333333` | 0 | 1 | 0 | 0 |

- `#c3dae9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f9f6f0` | `#c3dae9` |
| `#ffffff`（地） | `#c3dae9` |

```css
.section{ --on:#c3dae9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#036eb8; --on:#036eb8 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#036eb8 }
.section--main .btn--fill{ background:#036eb8; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Material Icons
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.4 |
| 見出し | 24px | 1.6 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.2 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.2。

## レイアウト

- コンテンツ幅: 最大 820px／読ませる段は 860px
- セクションの上下余白: 120 / 40 / 60 / 80px（基本は 120px）
- 並びの間隔: 6 / 8 / 10 / 20px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.2 | 15px / 行間 1.4 |
| 見出し | 28px | 22px / 行間 1.4 |
| セクションの上下余白 | 120px | 80px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 10px | 6px |

- 本文は 16px → 15px、セクション余白は 120px → 80px（PCの67%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #46403b;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #46403b;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 680px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 740px | `#f9f6f0` | 1カラム・文字だけ | 左 | — |
| 3 | 960px | `#f9f6f0` | 1カラム・画像あり | — | 全幅 |
| 4 | 760px | `#f9f6f0` | 1カラム・画像あり | 左 | 全幅 |
| 5 | 1100px | — | 3カラム・画像あり | 左 | 右（29:71） |
| 6 | 680px | — | 6カラム | 右 | — |
| 7 | 860px | `#ffffff` | 1カラム・画像あり | 左 | — |
| 8 | 700px | — | 4カラム | 左 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f9f6f0`（5） / `#ffffff`（3）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 29:71。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 28 箇所ある（24px×13、48px×12、32px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 7枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c3dae9 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:680px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#036eb8; --on:#036eb8 }
.section--main .btn--fill{ background:#036eb8; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#46403b; border-radius:0px;
  padding:0px 0px; min-height:30px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:80px; --gap:6px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#c3dae9` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
