# 幻冬舎 / Gentosha ふうのデザイン

- 出典: https://www.gentosha.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／本･出版･印刷

白地に `#7e9993` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 41px・行間 1.5、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7e9993;
  --sub: #eeeceb;
  --ink: #000000;
  --ink-rev: #d0d0d0;
  --on: #7e9993;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Font-mincho", sans-serif;
  --font-en: "Font-mincho", sans-serif;
  --fs-body: 41px;
  --lh-body: 1.5;
  --container: 1200px;
  --read: 576px;
  --section-y: 72px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.6% |
| 主色 | `#383838` | 17.7% |
| 副色 | `#eeeceb` | 6.8% |
| 差し色 | `#101312` | 4.2% |
| 差し色 | `#7e9993` | 3.1% |
| 差し色 | `#5b534f` | 2.7% |

文字色は `#000000` / `#d0d0d0` / `#ffffff` / `#ededed`。

- 主色 `#7e9993` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.16) 0px 3px 6px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 26 | 32 | 5 | 19 |
| `#f5f5f5` | 17 | 3 | 0 | 1 |
| `#383838` | 4 | 0 | 0 | 0 |
| `#ededed` | 13 | 1 | 0 | 0 |
| `#000000` | 14 | 141 | 8 | 8 |
| `#d0d0d0` | 0 | 18 | 0 | 0 |

- `#7e9993` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5` | `#7e9993` |
| `#383838` | `#d0d0d0` |
| `#ffffff`（地） | `#7e9993` |
| `#e0e0e0` | `#7e9993` |

```css
.section{ --on:#7e9993 }                     /* 地の面 */
.section--main{ background:var(--main); color:#d0d0d0; --on:#d0d0d0 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#d0d0d0 }
.section--main .btn--fill{ background:#d0d0d0; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Font-mincho
- 欧文: Font-mincho
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 本文 | 41px | 1.5 |
| 補助 | 31px | 1.55 |
| 注記 | 24px | 1.5 |
| 注記 | 22px | — |
| 注記 | 20px | — |
| 注記 | 17px | — |
| 注記 | 16px | — |

- 本文は 41px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 576px
- セクションの上下余白: 72 / 96 / 40 / 48px（基本は 72px）
- 並びの間隔: 4 / 10 / 14 / 41px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 41px / 行間 1.5 | 32px / 行間 1.5 |
| 見出し | 41px | 19px / 行間 1.5 |
| セクションの上下余白 | 72px | 32px |
| 左右の余白 | — | 19px |
| 並びの間隔 | 14px | 8px |

- 本文は 41px → 32px、セクション余白は 72px → 32px（PCの44%）。
- 文字サイズの段は 32 / 20 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border: 1px solid #e0e0e0;
  border-radius: 32px; padding: 6px 16px; min-height: 39px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.64px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1460px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 900px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 3 | 780px | `#383838` | 1カラム・画像あり | 左 | 右（34:66） |
| 4 | 1460px | — | 4カラム・画像あり | 中央 | — |
| 5 | 800px | — | 1カラム・画像あり | 右 | 左（29:71） |
| 6 | 180px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 7 | 180px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 8 | 840px | — | 2カラム・画像あり | — | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f5f5`（9） / `#383838`（4） / `#ffffff`（3） / `#e0e0e0`（3）
- 見出しは左4／中央2。
- 2カラムの分け方は 34:66 / 29:71。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #f5f5f5;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 6px 16px; font-size: 16px;
}
```

## 画像

- 34枚使っている
- 比率は 2:3（12枚）、3:4（9枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7e9993 }
.container{ width:min(100% - 38px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1460px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#d0d0d0; --on:#d0d0d0 }
.section--main .btn--fill{ background:#d0d0d0; color:var(--main) }
.card{ background:#f5f5f5;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:32px;
  padding:6px 16px; min-height:39px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:32px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 38px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#7e9993` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
