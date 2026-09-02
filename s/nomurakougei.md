# 株式会社乃村工藝社 / NOMURA Co.,Ltd. ふうのデザイン

- 出典: https://www.nomurakougei.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

白地に `#b5b9d0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.5、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b5b9d0;
  --sub: #6b6e6f;
  --ink: #191a18;
  --ink-rev: #ffffff;
  --on: #b5b9d0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs", sans-serif;
  --font-en: "YakuHanJPs", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 1228px;
  --read: 728px;
  --section-y: 40px;
  --gap: 15px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.8% |
| 主色 | `#a6a5ab` | 5.7% |
| 副色 | `#6b6e6f` | 3.5% |
| 差し色 | `#b5b9d0` | 3.3% |
| 差し色 | `#c8cbdb` | 3.2% |
| 差し色 | `#dfdddd` | 3% |

文字色は `#191a18` / `#ffffff` / `#f4f4f4`。

- 主色 `#b5b9d0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 1px 1px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 14 | 33 | 0 | 6 |
| `#a2a2a2` | 1 | 0 | 0 | 0 |
| `#595c56` | 10 | 0 | 0 | 8 |
| `#f4f4f4` | 7 | 5 | 0 | 0 |
| `#191a18` | 0 | 191 | 1 | 0 |

- `#b5b9d0` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#b5b9d0` |
| `#a2a2a2` | `#b5b9d0` |

```css
.section{ --on:#b5b9d0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJPs
- 欧文: YakuHanJPs
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 16px | 1.5 |
| 本文 | 14px | 1.5 |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1228px／読ませる段は 728px
- セクションの上下余白: 40 / 112 / 44 / 60px（基本は 40px）
- 並びの間隔: 5 / 10 / 15 / 24px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1800 / 1365 / 1100 / 901 / 900px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 13px / 行間 1 |
| セクションの上下余白 | 40px | 40px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 15px | 20px |

- 本文は 14px → 13px、セクション余白は 40px → 40px（PCの100%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #595c56; color: #ffffff;
  border-radius: 18px; padding: 0px 0px; min-height: 36px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #191a18;
  border: 1px solid #e2e2e2;
  border-radius: 0px; padding: 18px 24px; min-height: 62px;
  font-size: 11px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 36px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 940px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 620px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 3 | 960px | — | 1カラム・画像あり | — | 全面 |
| 4 | 880px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 900px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 640px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 600px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 8 | 140px | — | 帯・区切り | — | — |
| 9 | 420px | — | 1カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#a2a2a2`（1）
- 見出しは左1／中央5。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 26px 30px;
}
```

ラベル・タグ

```css
.chip{
  background: #f4f4f4; color: #191a18;
  border-radius: 4px; padding: 2px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 10 箇所ある（16px×10）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 40枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 3:2（29枚）、1:1（3枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b5b9d0 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:940px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:4px; padding:26px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#595c56; color:#ffffff; border-radius:18px;
  padding:0px 0px; min-height:36px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:13px; --section-y:40px; --gap:20px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b5b9d0` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
