# KINS WITH 動物病院 ふうのデザイン

- 出典: https://kinswith-vet.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ペット･動物･生き物

#f7f6f4 の地に `#9a5149` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 2、セクション間 116px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f6f4;
  --main: #9a5149;
  --sub: #e1dcd7;
  --ink: #5a3c37;
  --ink-rev: #ebd5cd;
  --on: #9a5149;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 13px;
  --lh-body: 2;
  --container: 1168px;
  --read: 1028px;
  --section-y: 116px;
  --gap: 64px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f6f4` | 78% |
| 主色 | `#9a5149` | 5.1% |
| 副色 | `#e1dcd7` | 4.2% |
| 差し色 | `#dccab7` | 3.5% |
| 差し色 | `#b37e56` | 3.1% |
| 差し色 | `#b4a59d` | 1.8% |

文字色は `#5a3c37` / `#ebd5cd` / `#f7f6f4` / `#965d57`。

- 主色 `#9a5149` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f6f4` | 5 | 3 | 0 | 0 |
| `#ffffff` | 1 | 0 | 0 | 0 |
| `#ebd5cd` | 4 | 19 | 24 | 0 |
| `#965d57` | 0 | 22 | 3 | 0 |
| `#5a3c37` | 0 | 140 | 0 | 0 |

- `#9a5149` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f1f0ee` | `#9a5149` |
| `#f7f6f4`（地） | `#9a5149` |
| `#ffffff` | `#9a5149` |
| `#f5f0ec` | `#9a5149` |

```css
.section{ --on:#9a5149 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ebd5cd; --on:#ebd5cd }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ebd5cd }
.section--main .btn--fill{ background:#ebd5cd; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 20px | 1.5 |
| 小見出し | 15px | 2 |
| リード | 14px | 1.75 |
| 本文 | 13px | 2 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 13px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1168px／読ませる段は 1028px
- セクションの上下余白: 116 / 52 / 156 / 64px（基本は 116px）
- 並びの間隔: 10 / 40 / 64 / 120px
- 角丸: 0px が基本。大きな面だけ 18px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 900 / 768 / 750 / 520 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 2 | 14px / 行間 2 |
| 見出し | 24px | 14px / 行間 1.75 |
| セクションの上下余白 | 116px | 120px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 64px | 6px |

- 本文は 13px → 14px、セクション余白は 116px → 120px（PCの103%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ebd5cd;
  border: 1px solid #ebd5cd;
  border-radius: 18px; padding: 0px 20px; min-height: 36px;
  font-size: 12px; font-weight: 300; letter-spacing: 0.5px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 右（90:10） |
| 2 | 640px | — | 1カラム・画像あり | 右 | 左（43:57） |
| 3 | 1020px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1440px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 5 | 880px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1240px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 820px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 8 | 760px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 2680px | — | 2カラム・画像あり | 左 | — |
| 10 | 520px | — | 6カラム・画像あり | — | 全面 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f1f0ee`（2） / `#f7f6f4`（1） / `#ffffff`（1） / `#f5f0ec`（1）
- 見出しは左2／中央6。
- 2カラムの分け方は 90:10 / 43:57。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（40px×4、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 29枚使っている
- 比率は 1:1（16枚）、3:2（11枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#9a5149 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ebd5cd; --on:#ebd5cd }
.section--main .btn--fill{ background:#ebd5cd; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ebd5cd; border-radius:18px;
  padding:0px 20px; min-height:36px;
  font-size:12px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:14px; --section-y:120px; --gap:6px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#f7f6f4` のまま。主色 `#9a5149` は文字と小さな部品にだけ使う。
- 余白 116px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 18px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
