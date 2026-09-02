# 西伊丹幼稚園・認定こども園 西伊丹保育園 ふうのデザイン

- 出典: https://nishi-itami-k.ed.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／保育園･幼稚園･こども園／ベビー･子ども･子育て

白地に `#f73636` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.57、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f73636;
  --sub: #51595c;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #f73636;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Quicksand", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.57;
  --container: 1000px;
  --read: 744px;
  --section-y: 80px;
  --gap: 15px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 35.3% |
| 主色 | `#e5f5fa` | 19.3% |
| 副色 | `#51595c` | 14.2% |
| 差し色 | `#abadaa` | 4.5% |
| 差し色 | `#a9bbc0` | 4.5% |
| 差し色 | `#a08d89` | 3.8% |

文字色は `#000000` / `#ffffff` / `#111111` / `#f73636`。

- 主色 `#f73636` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.16) 3px 3px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e5f5fa` | 1 | 0 | 0 | 0 |
| `#51595c` | 1 | 1 | 0 | 0 |
| `#76b1eb` | 3 | 4 | 3 | 2 |
| `#ffffff` | 5 | 34 | 2 | 4 |
| `#000000` | 0 | 7 | 0 | 0 |
| `#111111` | 0 | 7 | 0 | 0 |
| `#f73636` | 3 | 4 | 0 | 3 |

- `#f73636` は面3箇所・文字4箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e5f5fa` | `#f73636` |
| `#76b1eb` | `#f73636` |
| `#5498db` | `#f73636` |
| `#4088d0` | `#ffffff` |

```css
.section{ --on:#f73636 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Quicksand
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.73 |
| 見出し | 19px | — |
| 本文 | 16px | 1.57 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 16px・行間 1.57。

## レイアウト

- コンテンツ幅: 最大 1000px／読ませる段は 744px
- セクションの上下余白: 80 / 36 / 92 / 116px（基本は 80px）
- 並びの間隔: 5 / 9 / 15 / 16px
- 角丸: 0px が基本。大きな面だけ 6px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1023 / 768 / 767 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.57 | 14px / 行間 1.57 |
| 見出し | 30px | 23px / 行間 1.73 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 15px | 9px |

- 本文は 16px → 14px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 26 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #76b1eb;
  border: 2px solid #76b1eb;
  border-radius: 6px; padding: 5px 16px; min-height: 31px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.96px;
}
.btn-sub{
  background: #ffffff; color: #f73636;
  border-radius: 999px; padding: 19px 40px; min-height: 59px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 95px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | 左 | 右（79:21） |
| 2 | 2600px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 3 | 440px | `#51595c` | 1カラム・文字だけ | — | — |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e5f5fa`（1） / `#76b1eb`（1） / `#5498db`（1） / `#4088d0`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 79:21。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #76b1eb;
  border: 2px solid currentColor;
  border-radius: 6px; padding: 5px 16px; font-size: 12px;
}
```

## 画像

- 8枚使っている
- 比率は 3:2（6枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f73636 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#76b1eb; border-radius:6px;
  padding:5px 16px; min-height:31px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:9px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#f73636` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.57 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.57 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 6px 以外）を混ぜない。
