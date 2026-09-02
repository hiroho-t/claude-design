# かっこ株式会社 ふうのデザイン

- 出典: https://cacco.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#3143cf` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 2.33、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #3143cf;
  --sub: #2137e0;
  --ink: #ffffff;
  --ink-rev: #666666;
  --on: #3143cf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "dnp-shuei-gothic-kin-std", sans-serif;
  --font-en: "dnp-shuei-gothic-kin-std", sans-serif;
  --fs-body: 15px;
  --lh-body: 2.33;
  --container: 1380px;
  --read: 720px;
  --section-y: 160px;
  --gap: 86px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 84.1% |
| 主色 | `#3143cf` | 10% |
| 副色 | `#2137e0` | 1.8% |

文字色は `#ffffff` / `#666666` / `#222222` / `#3143cf`。

- 主色 `#3143cf` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 10 | 67 | 0 | 3 |
| `#3143cf` | 9 | 12 | 0 | 5 |
| `#f0f2f6` | 2 | 0 | 0 | 0 |
| `#222222` | 0 | 32 | 0 | 0 |
| `#666666` | 0 | 13 | 0 | 0 |

- `#3143cf` は面9箇所・文字12箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#3143cf` |
| `#3143cf`（主色） | `#666666` |
| `#f0f2f6` | `#3143cf` |

```css
.section{ --on:#3143cf }                     /* 地の面 */
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f0f2f6` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: dnp-shuei-gothic-kin-std
- 欧文: dnp-shuei-gothic-kin-std
- ウェイトは 600 / 350 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1 |
| 見出し | 24px | 2 |
| 小見出し | 20px | 1 |
| リード | 16px | — |
| 本文 | 15px | 2.33 |
| 補助 | 14px | 2.29 |
| 注記 | 13px | — |

- 本文は 15px・行間 2.33。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1380px／読ませる段は 720px
- セクションの上下余白: 160 / 200 / 40 / 64px（基本は 160px）
- 並びの間隔: 26 / 86px
- 角丸: 0px が基本。大きな面だけ 25px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 960 / 959 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2.33 | 13px / 行間 2 |
| 見出し | 42px | 16px / 行間 2 |
| セクションの上下余白 | 160px | 80px |
| 左右の余白 | — | 73px |
| 並びの間隔 | 86px | 12px |

- 本文は 15px → 13px、セクション余白は 160px → 80px（PCの50%）。
- 文字サイズの段は 20 / 16 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #3143cf; color: #ffffff;
  border: 2px;
  border-radius: 25px; padding: 0px 0px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.32px;
}
.btn-sub{
  background: #ffffff; color: #3143cf;
  border: 2px;
  border-radius: 25px; padding: 0px 0px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | `#ffffff` | ヒーロー | — | — |
| 2 | 820px | — | 1カラム・文字だけ | — | — |
| 3 | 880px | `#ffffff` | 1カラム・画像あり | 右 | 左（32:68） |
| 4 | 540px | `#ffffff` | 1カラム・文字だけ | — | — |
| 5 | 500px | `#ffffff` | 1カラム・文字だけ | 左 | — |
| 6 | 4800px | — | 1カラム・画像あり | 右 | — |
| 7 | 840px | `#ffffff` | 1カラム・画像あり | 左 | 右（45:55） |
| 8 | 1040px | `#f0f2f6` | 1カラム・画像あり | 左 | 見出しの下 |
| 9 | 400px | `#f0f2f6` | 2カラム | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#3143cf` の面が 4 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（7） / `#3143cf`（4） / `#f0f2f6`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 32:68 / 45:55。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 12枚使っている
- 比率は 3:2（10枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3143cf }
.container{ width:min(100% - 146px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#666666; --on:#666666 }
.section--main .btn--fill{ background:#666666; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#3143cf; color:#ffffff; border-radius:25px;
  padding:0px 0px; min-height:50px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:80px; --gap:12px; }
  .container{ width:calc(100% - 146px) }
}
```

## 守ること

やること

- 地色と主色 `#3143cf` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 160px と行間 2.33 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.33 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 25px 以外）を混ぜない。
