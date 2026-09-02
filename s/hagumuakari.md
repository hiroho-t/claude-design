# はぐむのあかりクリニック【鷹の巣】 ふうのデザイン

- 出典: https://hagumu-akari.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／ベビー･子ども･子育て

白地に `#1c3b73` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1c3b73;
  --sub: #eceeed;
  --ink: #2c4198;
  --ink-rev: #565656;
  --on: #1c3b73;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-筑紫A丸ゴシック Std D", sans-serif;
  --font-en: "Work Sans", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1020px;
  --read: 776px;
  --section-y: 60px;
  --gap: 86px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 82.9% |
| 主色 | `#c6d3d7` | 5% |
| 副色 | `#eceeed` | 4.2% |
| 差し色 | `#1c3b73` | 2.7% |
| 差し色 | `#c8b3a1` | 2.2% |
| 差し色 | `#635c6b` | 1.7% |

文字色は `#2c4198` / `#565656` / `#ffffff` / `#be8b4c`。

- 主色 `#1c3b73` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.3) 0px 1px 4px -1px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e5e3df` | 1 | 0 | 0 | 0 |
| `#f3f8fb` | 2 | 0 | 0 | 0 |
| `#2c4198` | 10 | 63 | 23 | 7 |
| `#ffffff` | 35 | 16 | 0 | 0 |
| `#fffcdd` | 1 | 0 | 0 | 0 |
| `#565656` | 0 | 10 | 0 | 0 |
| `#be8b4c` | 0 | 9 | 0 | 0 |

- `#1c3b73` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f3f8fb` | `#1c3b73` |
| `#e5e3df` | `#1c3b73` |
| `#f3fafa` | `#1c3b73` |

```css
.section{ --on:#1c3b73 }                     /* 地の面 */
.section--main{ background:var(--main); color:#565656; --on:#565656 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#565656 }
.section--main .btn--fill{ background:#565656; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: FOT-筑紫A丸ゴシック Std D
- 欧文: Work Sans
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 37px | 1 |
| 見出し | 30px | 1.75 |
| 小見出し | 22px | 1 |
| リード | 20px | 1.6 |
| リード | 17px | — |
| 本文 | 16px | 1 |
| 補助 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1020px／読ませる段は 776px
- セクションの上下余白: 60 / 44 / 140 / 56px（基本は 60px）
- 並びの間隔: 80 / 86px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1380 / 1360 / 1240 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 1.75 |
| 見出し | 37px | 14px / 行間 1.5 |
| セクションの上下余白 | 60px | 44px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 86px | 20px |

- 本文は 16px → 13px、セクション余白は 60px → 44px（PCの73%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 9px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.6px;
}
.btn-sub{
  background: #2c4198; color: #ffffff;
  border-radius: 30px; padding: 11px 25px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.6px;
}
.btn-sub{
  background: #2c4198; color: #ffffff;
  border-radius: 30px; padding: 11px 24px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.96px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | — | 全面 |
| 2 | 580px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 820px | — | 1カラム・画像あり | 左 | 全幅 |
| 4 | 860px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 5 | 1260px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 320px | — | 帯・区切り | 中央 | — |
| 7 | 400px | `#f3fafa` | 1カラム・画像あり | 右 | 左（35:65） |

- 全7セクション。
- 使われている面の色: `#f3f8fb`（1） / `#e5e3df`（1） / `#f3fafa`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 35:65。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #2c4198; color: #ffffff;
  border-radius: 999px; padding: 3px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（40px×2、224px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 61枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（31枚）、4:3（12枚）、3:2（11枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1c3b73 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#565656; --on:#565656 }
.section--main .btn--fill{ background:#565656; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:42px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:13px; --section-y:44px; --gap:20px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1c3b73` は文字と小さな部品にだけ使う。
- 余白 60px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
