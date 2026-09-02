# PRONI株式会社 ふうのデザイン

- 出典: https://www.proni.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#e10000` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.15、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e10000;
  --sub: #c3d6e5;
  --ink: #1a1a1a;
  --ink-rev: #ffffff;
  --on: #e10000;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Schibsted Grotesk", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.15;
  --container: 1120px;
  --read: 832px;
  --section-y: 60px;
  --gap: 24px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 71.6% |
| 主色 | `#e10000` | 14.6% |
| 副色 | `#c3d6e5` | 2.8% |
| 差し色 | `#e2e7ec` | 2.5% |
| 差し色 | `#b6bbc0` | 2.1% |
| 差し色 | `#dbd5d7` | 1.8% |

文字色は `#1a1a1a` / `#ffffff` / `#e10000` / `#9f7356`。

- 主色 `#e10000` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は`rgba(0, 0, 0, 0.04) 0px 0px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 33 | 61 | 0 | 1 |
| `#e10000` | 5 | 4 | 0 | 1 |
| `#f6f6f6` | 13 | 0 | 26 | 9 |
| `#1a1a1a` | 0 | 95 | 0 | 0 |
| `#9f7356` | 0 | 8 | 0 | 0 |

- `#e10000` は面として5箇所、文字として4箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e10000` |
| `#f6f6f6` | `#e10000` |
| `#e10000`（主色） | `#ffffff` |

```css
.section{ --on:#e10000 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#f6f6f6`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Schibsted Grotesk
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.4 |
| 見出し | 40px | — |
| 小見出し | 20px | 1.5 |
| 本文 | 16px | 1.15 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 16px・行間 1.15。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 832px
- セクションの上下余白: 60 / 240 / 80 / 172px（基本は 60px）
- 並びの間隔: 8 / 20 / 24 / 64px
- 角丸: 16px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1220 / 1050 / 435 / 375px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.15 | 16px / 行間 1.15 |
| 見出し | 48px | 32px / 行間 1.4 |
| セクションの上下余白 | 60px | 24px |
| 左右の余白 | — | 63px |
| 並びの間隔 | 24px | 8px |

- 本文は 16px → 16px、セクション余白は 60px → 24px（PCの40%）。
- 文字サイズの段は 32 / 18 / 16 / 12 / 11px。

## ボタン

```css
.btn{
  background: #f6f6f6; color: #1a1a1a;
  border-radius: 40px; padding: 24px 24px; min-height: 80px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #e10000; color: #ffffff;
  border-radius: 0px; padding: 4px 4px; min-height: 56px;
  font-size: 12px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #1a1a1a;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1340px | — | ヒーロー | 中央 | — |
| 2 | 2840px | `#ffffff` | 5カラム・画像あり | 右 | 見出しの下 |
| 3 | 1840px | `#ffffff` | 6カラム・画像あり | 右 | — |
| 4 | 2160px | `#ffffff` | 4カラム・画像あり | 右 | 見出しの下 |
| 5 | 1280px | `#ffffff` | 6カラム・画像あり | — | 全面 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#e10000` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（29） / `#f6f6f6`（4） / `#e10000`（3）
- 見出しは左0／中央1。


## 部品

囲み（20箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 2px solid var(--on);   /* 実測は #f6f6f6。面によって入れ替える */
  border-radius: 16px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 16px だが、**完全な円は別扱い**で 2 箇所ある（32px×1、64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 25枚使っている
- 比率は 4:3（13枚）、16:9（6枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e10000 }
.container{ width:min(100% - 126px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1340px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:2px solid var(--on);
  border-radius:16px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f6f6f6; color:#1a1a1a; border-radius:40px;
  padding:24px 24px; min-height:80px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:435px){
  :root{ --fs-body:16px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 126px) }
}
```

## 守ること

やること

- 地色と主色 `#e10000` の面を全幅で交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 60px と行間 1.15 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.15 より詰めない。
- 中途半端な角丸（16px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
