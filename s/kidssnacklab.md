# KIDS SNACK LAB（キッズスナックラボ） ふうのデザイン

- 出典: https://kidssnacklab.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／ベビー･子ども･子育て

白地に `#f7ddcf` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f7ddcf;
  --sub: #eed8a1;
  --ink: #ffffff;
  --ink-rev: #9b5000;
  --on: #f7ddcf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 1360px;
  --read: 820px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 55.2% |
| 主色 | `#f7ddcf` | 5.9% |
| 副色 | `#eed8a1` | 4.4% |
| 差し色 | `#b9b5b0` | 3.9% |
| 差し色 | `#d4cdbc` | 3.4% |
| 差し色 | `#a2d2b3` | 2.9% |

文字色は `#ffffff` / `#9b5000` / `#ed5402` / `#8c4600`。

- 主色 `#f7ddcf` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 34 | 191 | 0 | 22 |
| `#ec3533` | 2 | 0 | 0 | 0 |
| `#00d2a2` | 2 | 10 | 0 | 0 |
| `#4a53d5` | 2 | 10 | 0 | 0 |
| `#e9bc00` | 2 | 2 | 0 | 0 |
| `#9b5000` | 0 | 56 | 0 | 0 |
| `#ed5402` | 8 | 20 | 0 | 4 |
| `#8c4600` | 3 | 10 | 3 | 3 |

- `#f7ddcf` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#f7ddcf` |
| `#ec3533` | `#9b5000` |
| `#00d2a2` | `#f7ddcf` |
| `#4a53d5` | `#9b5000` |

```css
.section{ --on:#f7ddcf }                     /* 地の面 */
.section--main{ background:var(--main); color:#9b5000; --on:#9b5000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#9b5000 }
.section--main .btn--fill{ background:#9b5000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1 |
| 見出し | 26px | — |
| 小見出し | 18px | — |
| リード | 16px | 1 |
| 本文 | 14px | 1 |
| 補助 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 820px
- セクションの上下余白: 100 / 52 / 60 / 160px（基本は 100px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 15px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1200 / 980 / 780 / 720px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 14px / 行間 1 |
| 見出し | 34px | 14px / 行間 2 |
| セクションの上下余白 | 100px | 44px |
| 左右の余白 | — | 59px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 100px → 44px（PCの44%）。
- 文字サイズの段は 26 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 81px;
  font-size: 10px; font-weight: 600; letter-spacing: 1.4px;
}
.btn-sub{
  background: #ffffff; color: #00d2a2;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 11px; font-weight: 600; letter-spacing: 1.4px;
}
.btn-sub{
  background: #ffffff; color: #4a53d5;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 11px; font-weight: 600; letter-spacing: 1.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全面 |
| 2 | 520px | — | 1カラム・画像あり | — | 全面 |
| 3 | 480px | — | 1カラム・画像あり | 左 | 右（62:38） |
| 4 | 920px | — | 4カラム・画像あり | 中央 | 右（32:68） |
| 5 | 840px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 560px | — | 1カラム・画像あり | 左 | 左（16:84） |
| 7 | 460px | — | 1カラム・画像あり | 中央 | — |
| 8 | 760px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 440px | — | 1カラム・画像あり | 中央 | — |

- 全9セクション。
- 使われている面の色: `#ffffff`（3） / `#ec3533`（2） / `#00d2a2`（2） / `#4a53d5`（2）
- 見出しは左3／中央4。
- 2カラムの分け方は 62:38 / 32:68 / 16:84。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 44枚使っている
- 比率は 1:1（29枚）、3:2（14枚）
- 角丸 20px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f7ddcf }
.container{ width:min(100% - 118px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#9b5000; --on:#9b5000 }
.section--main .btn--fill{ background:#9b5000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:81px;
  font-size:10px; font-weight:600 }

img{ width:100%; height:auto; border-radius:20px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:780px){
  :root{ --fs-body:14px; --section-y:44px; }
  .container{ width:calc(100% - 118px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#f7ddcf` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 20px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 15px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
