# 【公式】城崎温泉 深山 ふうのデザイン

- 出典: https://shinzan-kinosaki.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ホテル･旅館･温泉／レスポンシブ

#f5f5f5 の地に `#922e41` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #922e41;
  --sub: #e4e4e4;
  --ink: #282828;
  --ink-rev: #ffffff;
  --on: #922e41;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Cardo", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1184px;
  --read: 864px;
  --section-y: 72px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 64.8% |
| 主色 | `#4f5240` | 10.2% |
| 副色 | `#e4e4e4` | 7.7% |
| 差し色 | `#1d1f21` | 6.2% |
| 差し色 | `#0e0c0d` | 3.2% |
| 差し色 | `#5f6159` | 2.7% |

文字色は `#282828` / `#ffffff` / `#000000` / `#922e41`。

- 主色 `#922e41` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 5 | 6 | 0 | 0 |
| `#ffffff` | 4 | 16 | 1 | 0 |
| `#e9e9e6` | 4 | 0 | 0 | 0 |
| `#4f5240` | 1 | 0 | 0 | 0 |
| `#626458` | 2 | 0 | 0 | 0 |
| `#282828` | 0 | 56 | 3 | 0 |
| `#000000` | 1 | 7 | 0 | 0 |
| `#922e41` | 1 | 3 | 2 | 1 |

- `#922e41` は文字色として3箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e9e9e6` | `#922e41` |
| `#ffffff` | `#922e41` |
| `#f5f5f5`（地） | `#922e41` |
| `#626458` | `#ffffff` |

```css
.section{ --on:#922e41 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d9d9d9`。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Yu Gothic（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Cardo
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 24px | 1.5 |
| 小見出し | 20px | 1.6 |
| 本文 | 16px | 2 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1184px／読ませる段は 864px
- セクションの上下余白: 72 / 176 / 80 / 96px（基本は 72px）
- 並びの間隔: 4 / 8 / 14 / 132px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 781 / 769 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 13px / 行間 1.8 |
| 見出し | 28px | 13px / 行間 1.6 |
| セクションの上下余白 | 72px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 14px | 4px |

- 本文は 16px → 13px、セクション余白は 72px → 32px（PCの44%）。
- 文字サイズの段は 22 / 16 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #282828;
  border: 1px solid #282828;
  border-radius: 0px; padding: 11px 10px; min-height: 40px;
  font-size: 16px; font-weight: 400; letter-spacing: -1.44px;
}
.btn-sub{
  background: transparent; color: #f3f3f3;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 16px; font-weight: 400; letter-spacing: -1.12px;
}
.btn-sub{
  background: #922e41; color: #f3f3f3;
  border: 1px solid #922e41;
  border-radius: 0px; padding: 11px 20px; min-height: 40px;
  font-size: 16px; font-weight: 400; letter-spacing: -1.12px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 140px | `#d9d9d9` | ヒーロー（画像） | 中央 | — |
| 2 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 180px | `#626458` | 帯・区切り | 中央 | 左（11:89） |
| 4 | 1200px | — | 6カラム・画像あり | 右 | 見出しの下 |
| 5 | 4060px | `#f5f5f5` | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 1780px | `#ffffff` | 1カラム・画像あり | 左 | 全幅 |
| 7 | 1280px | `#f5f5f5` | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1660px | `#f5f5f5` | 1カラム・文字だけ | 中央 | — |

- 全8セクション。
- 使われている面の色: `#e9e9e6`（4） / `#ffffff`（4） / `#f5f5f5`（3） / `#626458`（1）
- 見出しは左2／中央4。
- 2カラムの分け方は 11:89。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d9d9d9。面によって入れ替える */
  border-radius: 0px;
  padding: 46px 50px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 89枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（85枚）、3:4（1枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#922e41 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:46px 50px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#282828; border-radius:0px;
  padding:11px 10px; min-height:40px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:13px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f5f5f5` のまま。主色 `#922e41` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
