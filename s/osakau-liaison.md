# 大阪大学大学院工学研究科 社会連携室 ふうのデザイン

- 出典: https://liaison-office.eng.osaka-u.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 学校･教育／科学･研究／レスポンシブ

#f6f9fb の地に `#d4e6ef` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f6f9fb;
  --main: #d4e6ef;
  --sub: #d4e6ef;
  --ink: #364246;
  --ink-rev: #ffffff;
  --on: #d4e6ef;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1200px;
  --read: 900px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f6f9fb` | 77.8% |
| 主色 | `#364246` | 13% |
| 副色 | `#d4e6ef` | 5.4% |
| 差し色 | `#8a9fb4` | 3.3% |

文字色は `#364246` / `#ffffff` / `#006ea8` / `#747f83`。

- 主色 `#d4e6ef` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f6f9` | 6 | 0 | 12 | 0 |
| `#ffffff` | 10 | 22 | 0 | 0 |
| `#364246` | 6 | 69 | 0 | 5 |
| `#006ea8` | 0 | 8 | 0 | 0 |
| `#747f83` | 0 | 2 | 0 | 0 |

- `#d4e6ef` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f6f9fb`（地） | `#d4e6ef` |
| `#ffffff` | `#d4e6ef` |
| `#f2f6f9` | `#d4e6ef` |
| `#f7f9fa` | `#d4e6ef` |

```css
.section{ --on:#d4e6ef }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#cccccc`。ただしその囲みは `#f2f6f9` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | — |
| 見出し | 18px | — |
| 小見出し | 17px | — |
| 本文 | 16px | 1.8 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 900px
- セクションの上下余白: 100 / 44 / 60 / 72px（基本は 100px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 890 / 768 / 767 / 576 / 460px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 16px / 行間 1.5 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 24 / 18 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #364246; color: #ffffff;
  border-radius: 30px; padding: 0px 7px; min-height: 60px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 920px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 960px | `#f6f9fb` | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1240px | `#f6f9fb` | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 920px | `#f7f9fa` | 1カラム・文字だけ | 左 | — |
| 6 | 280px | `#f6f9fb` | 3カラム・画像あり | — | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f6f9fb`（3） / `#ffffff`（2） / `#f2f6f9`（1） / `#f7f9fa`（1）
- 見出しは左1／中央3。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #cccccc。面によって入れ替える */
  border-radius: 0px;
  padding: 36px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（48px×10、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 8枚使っている
- 比率は 3:2（6枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d4e6ef }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:36px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:890px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f6f9fb` のまま。主色 `#d4e6ef` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
