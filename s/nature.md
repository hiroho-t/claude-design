# Nature ふうのデザイン

- 出典: https://nature.global/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／家電･電気製品

白地に `#011c29` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 2、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #011c29;
  --sub: #b9cfdd;
  --ink: #3a3a3a;
  --ink-rev: #ffffff;
  --on: #011c29;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 12px;
  --lh-body: 2;
  --container: 1280px;
  --read: 640px;
  --section-y: 48px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 71% |
| 主色 | `#011c29` | 7.1% |
| 副色 | `#b9cfdd` | 4.3% |
| 差し色 | `#295e58` | 3.2% |
| 差し色 | `#878883` | 2.8% |
| 差し色 | `#72716d` | 2.6% |

文字色は `#3a3a3a` / `#ffffff` / `#152332` / `#e5d7c2`。

- 主色 `#011c29` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 6 | 1 | 0 |
| `#011c29` | 12 | 7 | 1 | 11 |
| `#f4f7f9` | 2 | 0 | 1 | 0 |
| `#b9cfdd` | 1 | 0 | 0 | 0 |
| `#295e58` | 1 | 0 | 0 | 0 |
| `#3a3a3a` | 0 | 73 | 0 | 0 |
| `#152332` | 1 | 12 | 1 | 1 |
| `#e5d7c2` | 0 | 36 | 0 | 0 |

- `#011c29` は面として12箇所、文字として7箇所。塗りが主役。ボタンの地にも使う。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#011c29` |
| `#f4f7f9` | `#011c29` |
| `#295e58` | `#ffffff` |
| `#b9cfdd` | `#011c29` |

```css
.section{ --on:#011c29 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e8e8e8`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.4 |
| 見出し | 24px | 1.5 |
| 小見出し | 20px | 1.5 |
| リード | 16px | 1.8 |
| リード | 14px | — |
| 本文 | 12px | 2 |

- 本文は 12px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 640px
- セクションの上下余白: 48 / 40 / 120 / 80px（基本は 48px）
- 並びの間隔: 8 / 29 / 32 / 40px
- 角丸: 0px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 768 / 640 / 639px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 2 | 10px / 行間 1.5 |
| 見出し | 32px | 24px / 行間 1.5 |
| セクションの上下余白 | 48px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 32px | 8px |

- 本文は 12px → 10px、セクション余白は 48px → 40px（PCの83%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #e5d7c2;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: #011c29; color: #e5d7c2;
  border-radius: 56px; padding: 10px 24px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 44px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 160px | — | 帯・区切り | — | — |
| 3 | 660px | — | 2カラム・画像あり | — | 全面 |
| 4 | 640px | — | 2カラム・画像あり | 左 | 右（50:50） |
| 5 | 160px | — | 帯・区切り | — | — |
| 6 | 500px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 7 | 160px | — | 帯・区切り | — | — |
| 8 | 540px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 9 | 160px | — | 帯・区切り | — | — |
| 10 | 360px | — | 1カラム・画像あり | 中央 | 全幅 |
| 11 | 160px | — | 帯・区切り | — | — |
| 12 | 2240px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 13 | 620px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 14 | 160px | — | 帯・区切り | — | — |
| 15 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 16 | 160px | — | 帯・区切り | — | — |
| 17 | 640px | — | 2カラム・画像あり | 右 | 左（50:50） |
| 18 | 160px | — | 帯・区切り | — | — |
| 19 | 500px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 20 | 160px | — | 帯・区切り | — | — |

- 全20セクション。
- 使われている面の色: `#ffffff`（6） / `#f4f7f9`（2） / `#295e58`（1） / `#b9cfdd`（1）
- 見出しは左2／中央6。
- 2カラムの分け方は 50:50 / 50:50。半分ずつには割らない。


## 部品

囲み（11箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e8e8e8。面によって入れ替える */
  border-radius: 16px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #011c29; color: #e5d7c2;
  border-radius: 999px; padding: 10px 24px; font-size: 14px;
}
```

## 画像

- 33枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 1:1（26枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#011c29 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:16px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#e5d7c2; border-radius:0px;
  padding:0px 0px; min-height:40px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:10px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#011c29` は文字と小さな部品にだけ使う。
- 余白 48px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 16px 以外）を混ぜない。
