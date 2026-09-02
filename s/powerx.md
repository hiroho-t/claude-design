# 株式会社パワーエックス ふうのデザイン

- 出典: https://power-x.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー

白地に `#42412b` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.43、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #42412b;
  --sub: #010008;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #42412b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "powerXSans", sans-serif;
  --font-en: "powerXSans", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.43;
  --container: 1024px;
  --read: 672px;
  --section-y: 32px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 48.1% |
| 主色 | `#42412b` | 10.1% |
| 副色 | `#010008` | 8.3% |
| 差し色 | `#dedede` | 5.3% |
| 差し色 | `#4d544c` | 5.3% |
| 差し色 | `#665f52` | 4.9% |

文字色は `#000000` / `#ffffff`。

- 主色 `#42412b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 5 | 80 | 0 | 0 |
| `#f6f8fc` | 23 | 9 | 2 | 10 |
| `#262626` | 3 | 0 | 0 | 2 |
| `#f1f1f1` | 1 | 0 | 0 | 0 |

- `#42412b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f6f8fc` | `#42412b` |
| `#000000` | `#ffffff` |
| `#ffffff`（地） | `#42412b` |
| `#262626` | `#ffffff` |

```css
.section{ --on:#42412b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#f6f8fc` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: powerXSans
- 欧文: powerXSans
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 72px | 1.25 |
| 見出し | 40px | 1.25 |
| 小見出し | 24px | — |
| リード | 16px | — |
| 本文 | 14px | 1.43 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.43。

## レイアウト

- コンテンツ幅: 最大 1024px／読ませる段は 672px
- セクションの上下余白: 32 / 112 / 176 / 72px（基本は 32px）
- 並びの間隔: 4 / 8 / 12 / 16px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1440 / 1080 / 720px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.43 | 16px / 行間 1.5 |
| 見出し | 72px | 24px / 行間 1.25 |
| セクションの上下余白 | 32px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 12px | 12px |

- 本文は 14px → 16px、セクション余白は 32px → 24px（PCの75%）。
- 文字サイズの段は 40 / 24 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border: 1px solid #404040;
  border-radius: 4px; padding: 8px 16px; min-height: 39px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #262626; color: #ffffff;
  border-radius: 4px; padding: 4px 0px; min-height: 28px;
  font-size: 14px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px; padding: 8px 16px; min-height: 39px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 520px | — | 1カラム・文字だけ | — | — |
| 3 | 540px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 520px | — | 3カラム・画像あり | 中央 | — |
| 5 | 1280px | — | 6カラム | 左 | — |
| 6 | 460px | — | 1カラム・文字だけ | — | — |
| 7 | 460px | — | 1カラム・文字だけ | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f6f8fc`（7） / `#000000`（5） / `#ffffff`（5） / `#262626`（1）
- 見出しは左2／中央2。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 0px;
  padding: 24px 24px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 8px 16px; font-size: 14px;
}
```

## 画像

- 4枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#42412b }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:4px;
  padding:8px 16px; min-height:39px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:720px){
  :root{ --fs-body:16px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#42412b` は文字と小さな部品にだけ使う。
- 余白 32px と行間 1.43 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.43 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
