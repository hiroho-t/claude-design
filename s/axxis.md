# アクシス株式会社(Axxis inc.) ふうのデザイン

- 出典: https://axxis.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／自社プロダクト･サービス運営／求人･マッチング･転職･人材ビジネス

#f4f4f5 の地に `#0553dd` を大きな面で置く配色。影を使って浮かせる。本文 13px・行間 1.5、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f4f4f5;
  --main: #0553dd;
  --sub: #0553dd;
  --ink: #ffffff;
  --ink-rev: #202733;
  --on: #0553dd;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Hanken Grotesk", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.5;
  --container: 1184px;
  --read: 596px;
  --section-y: 80px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f4f4f5` | 61.2% |
| 主色 | `#202733` | 24% |
| 副色 | `#0553dd` | 13.5% |

文字色は `#ffffff` / `#202733` / `#0553dd`。

- 主色 `#0553dd` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は`rgba(0, 0, 0, 0.08) 3px 3px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 16 | 70 | 8 | 5 |
| `#202733` | 5 | 60 | 1 | 0 |
| `#f4f4f5` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#0553dd` | 6 | 10 | 4 | 2 |

- `#0553dd` は面6箇所・文字10箇所を行き来する。ボタンの地にも使う。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#0553dd` |
| `#202733` | `#202733` |
| `#f4f4f5`（地） | `#0553dd` |
| `#000000` | `#202733` |

```css
.section{ --on:#0553dd }                     /* 地の面 */
.section--main{ background:var(--main); color:#202733; --on:#202733 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#202733 }
.section--main .btn--fill{ background:#202733; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#c9d1db`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Hanken Grotesk
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 280px | — |
| 見出し | 32px | 1.63 |
| 小見出し | 18px | 1.5 |
| リード | 15px | — |
| リード | 14px | 1.5 |
| 本文 | 13px | 1.5 |
| 補助 | 12px | — |

- 本文は 13px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1184px／読ませる段は 596px
- セクションの上下余白: 80 / 40 / 32 / 112px（基本は 80px）
- 並びの間隔: 20 / 30px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1250 / 1060 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.5 | 13px / 行間 1.5 |
| 見出し | 280px | 22px / 行間 1.59 |
| セクションの上下余白 | 80px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 30px | 20px |

- 本文は 13px → 13px、セクション余白は 80px → 60px（PCの75%）。
- 文字サイズの段は 120 / 16 / 15 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #202733;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.52px;
}
.btn-sub{
  background: #ffffff; color: #202733;
  border: 1px solid #c9d1db;
  border-radius: 100px; padding: 16px 16px; min-height: 56px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.52px;
}
.btn-sub{
  background: #0553dd; color: #ffffff;
  border: 1px solid #0553dd;
  border-radius: 100px; padding: 0px 0px; min-height: 32px;
  font-size: 12px; font-weight: 500; letter-spacing: -0.12px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 2020px | — | ヒーロー（画像） | 右 | 全幅 |
| 2 | 1280px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 3 | 980px | — | 1カラム・画像あり | 右 | 左（58:42） |
| 4 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 1500px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 520px | — | 3カラム・画像あり | — | 全幅 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#202733`（4） / `#f4f4f5`（1） / `#000000`（1）
- 見出しは左2／中央1。
- 2カラムの分け方は 58:42。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #c9d1db。面によって入れ替える */
  border-radius: 8px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #202733;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（24px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 14枚使っている
- 比率は 3:2（8枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0553dd }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:2020px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#202733; --on:#202733 }
.section--main .btn--fill{ background:#202733; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:8px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#202733; border-radius:0px;
  padding:0px 0px; min-height:56px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:60px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#0553dd` の面を全幅で交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 80px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
