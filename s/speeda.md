# 経済情報プラットフォーム スピーダ(Speeda) ふうのデザイン

- 出典: https://jp.ub-speeda.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／AI･人工知能

#f5f5f5 の地に `#f72a48` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.75、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #f72a48;
  --ink: #191919;
  --ink-rev: #6f6f6f;
  --on: #f72a48;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Shorai Sans StdN Medium", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 880px;
  --read: 1040px;
  --section-y: 120px;
  --gap: 10px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 95.4% |
| 主色 | `#cbcbcb` | 3.5% |

文字色は `#191919` / `#6f6f6f` / `#f72a48` / `#ffffff`。

- 主色 `#f72a48` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 35 | 11 | 5 | 0 |
| `#f5f5f5` | 16 | 0 | 0 | 0 |
| `#cbcbcb` | 1 | 0 | 17 | 0 |
| `#ededed` | 4 | 0 | 1 | 0 |
| `#e60f3d` | 4 | 1 | 0 | 2 |
| `#191919` | 0 | 106 | 0 | 0 |
| `#6f6f6f` | 0 | 57 | 0 | 0 |
| `#f72a48` | 0 | 32 | 0 | 0 |

- `#f72a48` は文字色として32箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#f72a48` |
| `#f5f5f5`（地） | `#f72a48` |
| `#cbcbcb` | `#f72a48` |

```css
.section{ --on:#f72a48 }                     /* 地の面 */
.section--main{ background:var(--main); color:#6f6f6f; --on:#6f6f6f }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#6f6f6f }
.section--main .btn--fill{ background:#6f6f6f; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Shorai Sans StdN Medium
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1.4 |
| 見出し | 20px | 1.4 |
| 小見出し | 16px | 1.75 |
| 本文 | 14px | 1.75 |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 880px／読ませる段は 1040px
- セクションの上下余白: 120 / 80 / 40 / 60px（基本は 120px）
- 並びの間隔: 4 / 5 / 10 / 15px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 1024 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 12px / 行間 1.75 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 10px |

- 本文は 14px → 12px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 20 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffe8e8; color: #d30030;
  border-radius: 9999px; padding: 10px 18px; min-height: 44px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.48px;
}
.btn-sub{
  background: #e60f3d; color: #ffffff;
  border-radius: 9999px; padding: 10px 18px; min-height: 44px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.48px;
}
.btn-sub{
  background: #e60f3d; color: #ffffff;
  border-radius: 9999px; padding: 11px 22px; min-height: 46px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.48px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 9340px | — | ヒーロー（画像） | 左 | 右（36:64） |
| 2 | 1040px | `#cbcbcb` | 3カラム・画像あり | — | — |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（22） / `#f5f5f5`（2） / `#cbcbcb`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 36:64。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 40px 30px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffe8e8; color: #d30030;
  border-radius: 999px; padding: 0px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 11 箇所ある（32px×11）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている
- 比率は 3:2（8枚）、16:9（8枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f72a48 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:9340px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#6f6f6f; --on:#6f6f6f }
.section--main .btn--fill{ background:#6f6f6f; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:40px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffe8e8; color:#d30030; border-radius:9999px;
  padding:10px 18px; min-height:44px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f5f5f5` のまま。主色 `#f72a48` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
