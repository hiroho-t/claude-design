# 株式会社ユリ電気商会 ふうのデザイン

- 出典: https://www.yuridenki.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#8da6ad` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2.3、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #8da6ad;
  --sub: #434c4f;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #8da6ad;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP_Noto", sans-serif;
  --font-en: "YakuHanJP_Noto", sans-serif;
  --fs-body: 14px;
  --lh-body: 2.3;
  --container: 700px;
  --read: 628px;
  --section-y: 72px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 79.4% |
| 主色 | `#e2e2e2` | 7.7% |
| 副色 | `#434c4f` | 5% |
| 差し色 | `#cbd3d6` | 4% |
| 差し色 | `#8da6ad` | 3.9% |

文字色は `#333333` / `#ffffff` / `#efefef` / `#e5e5e5`。

- 主色 `#8da6ad` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 6 | 1 | 0 | 0 |
| `#ffffff` | 4 | 11 | 1 | 0 |
| `#444444` | 1 | 0 | 0 | 0 |
| `#eaeaea` | 0 | 1 | 0 | 0 |
| `#333333` | 1 | 91 | 0 | 0 |

- `#8da6ad` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5` | `#8da6ad` |
| `#ffffff`（地） | `#8da6ad` |
| `#f2f8f8` | `#8da6ad` |
| `#444444` | `#ffffff` |

```css
.section{ --on:#8da6ad }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanJP_Noto
- 欧文: YakuHanJP_Noto
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 46px | 1.4 |
| 見出し | 24px | 1.4 |
| 小見出し | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2.3 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 2.3。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 700px／読ませる段は 628px
- セクションの上下余白: 72 / 120 / 36 / 52px（基本は 72px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 960 / 782 / 600 / 560px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2.3 | 13px / 行間 1.8 |
| セクションの上下余白 | 72px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 13px、セクション余白は 72px → 32px（PCの44%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #333333;
  border-radius: 0px; padding: 0px 93px; min-height: 47px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.48px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 40px; padding: 0px 0px; min-height: 80px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.84px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1060px | `#f5f5f5` | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1940px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 860px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 1780px | — | 2カラム・画像あり | 右 | 見出しの下 |
| 5 | 760px | — | 1カラム・画像あり | — | 全面 |
| 6 | 760px | — | 1カラム・画像あり | — | 全面 |
| 7 | 1060px | — | 1カラム・文字だけ | 左 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5f5f5`（3） / `#ffffff`（3） / `#f2f8f8`（1） / `#444444`（1）
- 見出しは左3／中央1。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dddddd。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 48px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（64px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 26枚使っている
- 比率は 1:1（19枚）、3:2（5枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#8da6ad }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1060px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 48px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#333333; border-radius:0px;
  padding:0px 93px; min-height:47px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:13px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#8da6ad` は文字と小さな部品にだけ使う。
- 余白 72px と行間 2.3 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.3 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
