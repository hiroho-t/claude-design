# 小学館パブリッシング・サービス ふうのデザイン

- 出典: https://www.sho-ps.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／本･出版･印刷／レスポンシブ

白地に `#009f5d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #009f5d;
  --sub: #c5d0d2;
  --ink: #333333;
  --ink-rev: #9e9e9e;
  --on: #009f5d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Almarai", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 880px;
  --read: 600px;
  --section-y: 40px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 71% |
| 主色 | `#edf2f0` | 14% |
| 副色 | `#c5d0d2` | 3% |
| 差し色 | `#131d1f` | 2% |
| 差し色 | `#a19c94` | 1.6% |
| 差し色 | `#c1bcb4` | 1.5% |

文字色は `#333333` / `#9e9e9e` / `#009f5d` / `#ffffff`。

- 主色 `#009f5d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 24 | 7 | 2 | 1 |
| `#edf2f0` | 5 | 0 | 7 | 0 |
| `#f7f7f7` | 3 | 0 | 0 | 0 |
| `#333333` | 7 | 93 | 0 | 0 |
| `#009f5d` | 6 | 9 | 6 | 0 |
| `#9e9e9e` | 0 | 73 | 0 | 0 |

- `#009f5d` は面6箇所・文字9箇所を行き来する。ボタンの地には使っていない。枠線にも6箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#009f5d` |
| `#f2f2f2` | `#009f5d` |
| `#edf2f0` | `#009f5d` |

```css
.section{ --on:#009f5d }                     /* 地の面 */
.section--main{ background:var(--main); color:#9e9e9e; --on:#9e9e9e }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#9e9e9e }
.section--main .btn--fill{ background:#9e9e9e; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e6e6e6`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Almarai
- ウェイトは 500 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 50px | 1.34 |
| 見出し | 40px | 1.2 |
| 小見出し | 24px | 1.2 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.8 |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 880px／読ませる段は 600px
- セクションの上下余白: 40 / 32 / 100 / 64px（基本は 40px）
- 並びの間隔: 6 / 8 / 10 / 16px
- 角丸: 0px が基本。大きな面だけ 1px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 13px / 行間 2 |
| 見出し | 50px | 32px / 行間 1.3 |
| セクションの上下余白 | 40px | 36px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 10px | 6px |

- 本文は 14px → 13px、セクション余白は 40px → 36px（PCの90%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #333333;
  border: 1px solid #f0f0f0;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 10px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | 右 | 左（61:39） |
| 2 | 1040px | — | 2カラム・画像あり | 中央 | 右（21:79） |
| 3 | 440px | — | 2カラム・画像あり | 左 | 右（39:61） |
| 4 | 620px | — | 2カラム・画像あり | 右 | 左（31:69） |
| 5 | 740px | — | 1カラム・画像あり | 左 | — |
| 6 | 660px | `#edf2f0` | 3カラム・画像あり | 中央 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#f2f2f2`（1） / `#edf2f0`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 61:39 / 21:79 / 39:61 / 31:69。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e6e6e6。面によって入れ替える */
  border-radius: 0px;
  padding: 48px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 18 箇所ある（32px×7、16px×4、48px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 26枚使っている
- 比率は 4:3（18枚）、3:2（5枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#009f5d }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#9e9e9e; --on:#9e9e9e }
.section--main .btn--fill{ background:#9e9e9e; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:48px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#333333; border-radius:0px;
  padding:0px 0px; min-height:34px;
  font-size:10px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:36px; --gap:6px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#009f5d` は文字と小さな部品にだけ使う。
- 余白 40px と行間 2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 1px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
