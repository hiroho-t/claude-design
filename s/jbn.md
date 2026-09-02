# 株式会社JBN ふうのデザイン

- 出典: https://www.jbnet.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／レスポンシブ

白地に `#111111` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 18px・行間 1.4、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #111111;
  --sub: #efeff0;
  --ink: #111111;
  --ink-rev: #ffffff;
  --on: #111111;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.4;
  --container: 1312px;
  --read: 628px;
  --section-y: 160px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.9% |
| 主色 | `#111111` | 21.7% |
| 副色 | `#efeff0` | 5% |
| 差し色 | `#d7d8d8` | 5% |
| 差し色 | `#b3b6b9` | 2.9% |
| 差し色 | `#6e6069` | 2.5% |

文字色は `#111111` / `#ffffff` / `#333333` / `#000000`。

- 主色 `#111111` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(111, 111, 111) 1px 2px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 28 | 40 | 4 | 22 |
| `#111111` | 4 | 139 | 9 | 1 |
| `#f5f5f5` | 3 | 0 | 2 | 0 |
| `#000000` | 3 | 28 | 3 | 2 |
| `#d5d5d5` | 2 | 0 | 0 | 0 |
| `#333333` | 0 | 48 | 0 | 0 |

- `#111111` は文字色として139箇所で使うのが主。面としては4箇所しかないが、1枚が大きく画面の22%を占める。ボタンの地にも使う。枠線にも9箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#111111` |
| `#d5d5d5` | `#111111` |
| `#111111`（主色） | `#ffffff` |
| `#f5f5f5` | `#111111` |

```css
.section{ --on:#111111 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.4 |
| 見出し | 36px | 1.5 |
| 小見出し | 34px | 1.4 |
| 本文 | 18px | 1.4 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1312px／読ませる段は 628px
- セクションの上下余白: 160 / 120 / 36 / 60px（基本は 160px）
- 並びの間隔: 7 / 8 / 14 / 24px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1180 / 1000 / 767 / 500 / 499px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.4 | 11px / 行間 1.5 |
| 見出し | 40px | 22px / 行間 1.4 |
| セクションの上下余白 | 160px | 156px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 14px | 8px |

- 本文は 18px → 11px、セクション余白は 160px → 156px（PCの98%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #111111;
  border-radius: 5px; padding: 24px 24px; min-height: 70px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #111111;
  border-radius: 0px; padding: 15px 32px; min-height: 52px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #111111;
  border: 1px solid #111111;
  border-radius: 30px; padding: 20px 20px; min-height: 64px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | — | 全面 |
| 2 | 580px | — | 1カラム・画像あり | — | 全面 |
| 3 | 1920px | `#111111` | 3カラム・画像あり | — | 全面 |
| 4 | 900px | — | 2カラム | 中央 | — |
| 5 | 1580px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1140px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 920px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 8 | 680px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 9 | 760px | — | 2カラム・画像あり | 左 | 右（14:86） |
| 10 | 580px | — | 1カラム・文字だけ | 中央 | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#d5d5d5`（2） / `#111111`（1） / `#f5f5f5`（1）
- 見出しは左2／中央5。
- 2カラムの分け方は 14:86。半分ずつには割らない。


## 部品

囲み（15箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 0px;
  padding: 270px 0px;
}
```


## 画像

- 47枚使っている
- 比率は 16:9（23枚）、3:2（15枚）、2:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#111111 }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:270px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#111111; border-radius:5px;
  padding:24px 24px; min-height:70px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:11px; --section-y:156px; --gap:8px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#111111` は文字と小さな部品にだけ使う。
- 余白 160px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。
