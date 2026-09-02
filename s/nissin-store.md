# 日清食品グループ オンラインストア ふうのデザイン

- 出典: https://store.nissin.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ECサイト･オンラインショップ／料理･食べ物･飲み物･食品製造／レスポンシブ

白地に `#ff0404` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.65、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ff0404;
  --sub: #ff0404;
  --ink: #000000;
  --ink-rev: #ff0000;
  --on: #ff0404;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Helvetica", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.65;
  --container: 836px;
  --read: 1280px;
  --section-y: 72px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68.5% |
| 主色 | `#eff1ef` | 4.2% |
| 副色 | `#ff0404` | 2.8% |
| 差し色 | `#eb8d65` | 2.6% |
| 差し色 | `#dbdbcf` | 2.6% |
| 差し色 | `#62938c` | 2.5% |

文字色は `#000000` / `#ff0000` / `#ffffff` / `#939393`。

- 主色 `#ff0404` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 129 | 62 | 0 | 0 |
| `#ff0000` | 54 | 80 | 1 | 40 |
| `#f5f5f5` | 3 | 0 | 0 | 0 |
| `#c39000` | 2 | 0 | 0 | 0 |
| `#00b900` | 2 | 0 | 0 | 0 |
| `#000000` | 1 | 223 | 0 | 1 |
| `#939393` | 0 | 14 | 0 | 0 |

- `#ff0404` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ff0404` |
| `#f5f5f5` | `#ff0404` |
| `#ff0000` | `#ff0000` |

```css
.section{ --on:#ff0404 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ff0000; --on:#ff0000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ff0000 }
.section--main .btn--fill{ background:#ff0000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e2e0e0`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ヒラギノ角ゴシック（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Helvetica
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.5 |
| 見出し | 20px | — |
| 本文 | 15px | 1.65 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 1.65。

## レイアウト

- コンテンツ幅: 最大 836px／読ませる段は 1280px
- セクションの上下余白: 72 / 52 / 60 / 80px（基本は 72px）
- 並びの間隔: 4 / 8 / 20 / 24px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 1008 / 767 / 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.65 | 11px / 行間 1.4 |
| 見出し | 36px | 18px / 行間 1.5 |
| セクションの上下余白 | 72px | 36px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 20px | 6px |

- 本文は 15px → 11px、セクション余白は 72px → 36px（PCの50%）。
- 文字サイズの段は 15 / 12 / 11 / 10 / 9px。

## ボタン

```css
.btn{
  background: #ff0000; color: #ffffff;
  border-radius: 3px; padding: 5px 10px; min-height: 35px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.65px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 140px; padding: 0px 28px; min-height: 40px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.65px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー（画像） | — | 全面 |
| 2 | 540px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1740px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 700px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 920px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 800px | `#ff0000` | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 940px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 8 | 500px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 9 | 840px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 10 | 800px | — | 2カラム・画像あり | 中央 | 見出しの下 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（54） / `#f5f5f5`（1） / `#ff0000`（1）
- 見出しは左0／中央9。


## 部品

囲み（32箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #e2e0e0。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffdbdb; color: #ff0000;
  border-radius: 5px; padding: 6px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 24 箇所ある（40px×13、72px×10、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 87枚使っている
- 比率は 1:1（52枚）、21:9（21枚）、3:2（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff0404 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ff0000; --on:#ff0000 }
.section--main .btn--fill{ background:#ff0000; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ff0000; color:#ffffff; border-radius:3px;
  padding:5px 10px; min-height:35px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:11px; --section-y:36px; --gap:6px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ff0404` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.65 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.65 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
