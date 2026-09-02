# 東京都庭園美術館 ふうのデザイン

- 出典: https://www.teien-art-museum.ne.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／商業施設･レジャー施設･文化施設／カルチャー･アート

白地に `#7fbaaa` を大きな面で置く配色。影を使って浮かせる。本文 11px・行間 1.5、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7fbaaa;
  --sub: #7fbaaa;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #7fbaaa;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poiret One", sans-serif;
  --fs-body: 11px;
  --lh-body: 1.5;
  --container: 1184px;
  --read: 1128px;
  --section-y: 96px;
  --gap: 6px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 45.7% |
| 主色 | `#ede8e2` | 24.9% |
| 副色 | `#7fbaaa` | 14.4% |
| 差し色 | `#00695b` | 8.9% |
| 差し色 | `#c6d3d5` | 5.5% |

文字色は `#000000` / `#ffffff` / `#9b8821` / `#00695b`。

- 主色 `#7fbaaa` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は`rgba(0, 0, 0, 0.15) 0px 0px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ede8e2` | 5 | 0 | 15 | 0 |
| `#7fbaaa` | 2 | 0 | 0 | 0 |
| `#00695b` | 1 | 11 | 5 | 0 |
| `#c6d3d5` | 1 | 0 | 0 | 0 |
| `#ffffff` | 7 | 13 | 0 | 1 |
| `#000000` | 3 | 139 | 2 | 3 |
| `#9b8821` | 0 | 2 | 0 | 0 |

- `#7fbaaa` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ede8e2` | `#7fbaaa` |
| `#7fbaaa`（主色） | `#7fbaaa` |
| `#ffffff`（地） | `#7fbaaa` |
| `#00695b` | `#ffffff` |

```css
.section{ --on:#7fbaaa }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#7fbaaa` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poiret One
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 18px | 1.5 |
| 見出し | 16px | 1.5 |
| 小見出し | 15px | — |
| リード | 13px | — |
| 本文 | 11px | 1.5 |
| 補助 | 8px | — |

- 本文は 11px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1184px／読ませる段は 1128px
- セクションの上下余白: 96 / 100 / 84 / 44px（基本は 96px）
- 並びの間隔: 4 / 5 / 6 / 18px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1129 / 1024 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 11px / 行間 1.5 | 10px / 行間 1.5 |
| 見出し | 18px | 16px / 行間 1.5 |
| セクションの上下余白 | 96px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 6px | 5px |

- 本文は 11px → 10px、セクション余白は 96px → 32px（PCの33%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #00695b;
  border: 1px solid #707070;
  border-radius: 5px; padding: 10px 23px; min-height: 46px;
  font-size: 15px; font-weight: 500; letter-spacing: 1.12px;
}
.btn-sub{
  background: transparent; color: #00695b;
  border: 1px solid #707070;
  border-radius: 5px; padding: 11px 30px; min-height: 54px;
  font-size: 16px; font-weight: 500; letter-spacing: 1.12px;
}
.btn-sub{
  background: #ffffff; color: #00695b;
  border: 1px solid #707070;
  border-radius: 50px; padding: 2px 10px; min-height: 26px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.91px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#ede8e2` | ヒーロー（画像） | — | 全面 |
| 2 | 180px | `#7fbaaa` | 帯・区切り | — | 全面 |
| 3 | 680px | `#7fbaaa` | 2カラム・画像あり | 左 | 見出しの下 |
| 4 | 920px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 860px | `#ede8e2` | 2カラム・画像あり | 左 | 見出しの下 |
| 6 | 1680px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 7 | 600px | `#00695b` | 4カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#7fbaaa` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ede8e2`（5） / `#7fbaaa`（2） / `#ffffff`（2） / `#00695b`（1）
- 見出しは左3／中央2。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ede8e2;
  border-radius: 0px;
  padding: 6px 6px;
}
```

ラベル・タグ

```css
.chip{
  background: #ede8e2; color: #000000;
  border-radius: 999px; padding: 2px 18px; font-size: 13px;
}
```

## 画像

- 33枚使っている
- 比率は 3:2（15枚）、1:1（8枚）、3:4（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7fbaaa }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ede8e2;
  border-radius:0px; padding:6px 6px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#00695b; border-radius:5px;
  padding:10px 23px; min-height:46px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:10px; --section-y:32px; --gap:5px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#7fbaaa` の面を全幅で交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 96px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。
