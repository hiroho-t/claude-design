# studio.CBR ふうのデザイン

- 出典: https://kaitori.studiocbr.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ファッション･アパレル･アクセサリー･ジュエリー／レスポンシブ

#f5f3ed の地に `#6d513e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f3ed;
  --main: #6d513e;
  --sub: #6d513e;
  --ink: #44514b;
  --ink-rev: #ffffff;
  --on: #6d513e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Lato", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1680px;
  --read: 1080px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f3ed` | 73.4% |
| 主色 | `#44514b` | 9.5% |
| 副色 | `#6d513e` | 4.9% |
| 差し色 | `#d3d0c5` | 2.5% |
| 差し色 | `#e7e5dc` | 2.2% |
| 差し色 | `#ad632f` | 1.9% |

文字色は `#44514b` / `#ffffff` / `#c06223`。

- 主色 `#6d513e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ede9e0` | 1 | 0 | 0 | 0 |
| `#44514b` | 4 | 188 | 9 | 1 |
| `#080808` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#ffffff` | 10 | 52 | 7 | 5 |
| `#c06223` | 12 | 2 | 0 | 11 |

- `#6d513e` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#6d513e` |
| `#f5f3ed`（地） | `#6d513e` |
| `#080808` | `#ffffff` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#6d513e }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f3ed` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Lato
- 欧文: Lato
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 28px | 1.5 |
| 小見出し | 24px | 1.5 |
| リード | 20px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | 1.5 |
| 注記 | 12px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1680px／読ませる段は 1080px
- セクションの上下余白: 60 / 80 / 120 / 40px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 15px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1760 / 769 / 768 / 720 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| 見出し | 32px | 20px / 行間 1.5 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #c06223; color: #ffffff;
  border-radius: 100px; padding: 18px 30px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.32px;
}
.btn-sub{
  background: #ffffff; color: #44514b;
  border-radius: 100px; padding: 15px 15px; min-height: 44px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #c06223;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 160px | — | ヒーロー（画像） | 右 | — |
| 2 | 900px | — | 1カラム・文字だけ | 右 | — |
| 3 | 8000px | — | 6カラム・画像あり | 左 | 右（44:56） |
| 4 | 1020px | — | 1カラム・画像あり | 右 | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#f5f3ed`（3） / `#080808`（1） / `#000000`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 44:56。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 15px;
  padding: 40px 40px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #44514b;
  border-radius: 999px; padding: 15px 15px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（40px×3、32px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 51枚使っている
- 比率は 4:3（50枚）、3:4（1枚）
- 角丸 15px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#6d513e }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:160px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:15px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#c06223; color:#ffffff; border-radius:100px;
  padding:18px 30px; min-height:60px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:15px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地は `#f5f3ed` のまま。主色 `#6d513e` は文字と小さな部品にだけ使う。
- 余白 60px と行間 2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 15px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 15px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 15px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
