# BONX WORK 公式ウェブサイト ふうのデザイン

- 出典: https://bonx.co/work/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#23b553` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 1.4、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #23b553;
  --sub: #23b553;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #23b553;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.4;
  --container: 1128px;
  --read: 840px;
  --section-y: 120px;
  --gap: 12px;
  --radius: 36px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 41.9% |
| 主色 | `#2a262c` | 34.4% |
| 副色 | `#23b553` | 14% |
| 差し色 | `#484547` | 2.1% |
| 差し色 | `#a8ccba` | 1.8% |
| 差し色 | `#9d948d` | 1.7% |

文字色は `#222222` / `#ffffff` / `#848484` / `#23b553`。

- 主色 `#23b553` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は`rgba(19, 22, 22, 0.2) 0px 9.99999px 50px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#2a262c` | 5 | 0 | 2 | 2 |
| `#ffffff` | 72 | 83 | 2 | 1 |
| `#f0f4f5` | 15 | 0 | 3 | 0 |
| `#23b553` | 5 | 16 | 4 | 3 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#222222` | 0 | 148 | 0 | 0 |
| `#848484` | 0 | 19 | 0 | 0 |

- `#23b553` は文字色として16箇所で使うのが主。面としては5箇所しかないが、1枚が大きく画面の14%を占める。ボタンの地にも使う。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f0f4f5` | `#23b553` |
| `#ffffff`（地） | `#23b553` |
| `#2a262c` | `#ffffff` |
| `#23b553`（主色） | `#23b553` |

```css
.section{ --on:#23b553 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | — |
| 見出し | 30px | 1.4 |
| 小見出し | 17px | 1.5 |
| リード | 16px | — |
| 本文 | 15px | 1.4 |
| 補助 | 14px | 1.55 |
| 注記 | 13px | — |

- 本文は 15px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1128px／読ませる段は 840px
- セクションの上下余白: 120 / 140 / 56 / 32px（基本は 120px）
- 並びの間隔: 4 / 10 / 12 / 14px
- 角丸: 36px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.4 | 15px / 行間 1.5 |
| 見出し | 36px | 10px / 行間 1.55 |
| セクションの上下余白 | 120px | 64px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 12px | 6px |

- 本文は 15px → 15px、セクション余白は 120px → 64px（PCの53%）。
- 文字サイズの段は 15 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #2a262c; color: #ffffff;
  border: 1px solid #2a262c;
  border-radius: 160px; padding: 25px 48px; min-height: 68px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #23b553; color: #ffffff;
  border: 1px solid #23b553;
  border-radius: 170px; padding: 26px 48px; min-height: 70px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #23b553; color: #ffffff;
  border: 1px solid #23b553;
  border-radius: 130px; padding: 8px 18px; min-height: 31px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 9140px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 1280px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1660px | `#f0f4f5` | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1040px | `#2a262c` | 4カラム・画像あり | 中央 | 見出しの下 |
| 5 | 860px | `#f0f4f5` | 2カラム・画像あり | 中央 | — |
| 6 | 900px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 520px | `#ffffff` | 3カラム | 左 | — |
| 8 | 820px | `#f0f4f5` | 5カラム・画像あり | 中央 | 見出しの下 |
| 9 | 440px | — | 1カラム・文字だけ | 中央 | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#23b553` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f0f4f5`（15） / `#ffffff`（11） / `#2a262c`（3） / `#23b553`（2）
- 見出しは左1／中央8。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #f0f4f5;
  border-radius: 8px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #222222;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 8px; font-size: 12px;
}
```

## 画像

- 266枚使っている
- 比率は 16:9（31枚）、1:1（18枚）、3:4（9枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#23b553 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:9140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f0f4f5;
  border-radius:8px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#2a262c; color:#ffffff; border-radius:160px;
  padding:25px 48px; min-height:68px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:64px; --gap:6px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#23b553` の面を全幅で交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 120px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.4 より詰めない。
- 中途半端な角丸（36px と 0px 以外）を混ぜない。
