# 奈良の司法書士・行政書士ならこやま法務事務所 ふうのデザイン

- 出典: https://koyama-houmu.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

白地に `#1a3b56` を大きな面で置く配色。影も枠線もほとんど使わない。本文 17px・行間 2、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1a3b56;
  --sub: #d2d3d3;
  --ink: #13334e;
  --ink-rev: #ffffff;
  --on: #1a3b56;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 17px;
  --lh-body: 2;
  --container: 1040px;
  --read: 580px;
  --section-y: 56px;
  --gap: 16px;
  --radius: 29px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 67.6% |
| 主色 | `#1a3b56` | 11.1% |
| 副色 | `#d2d3d3` | 5.4% |
| 差し色 | `#6e7772` | 4.1% |
| 差し色 | `#bdc4be` | 4.1% |
| 差し色 | `#9a8f88` | 2.3% |

文字色は `#13334e` / `#ffffff` / `#1a3b56`。

- 主色 `#1a3b56` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 1 | 29 | 1 | 0 |
| `#1a3b56` | 1 | 1 | 2 | 0 |
| `#13334e` | 0 | 31 | 0 | 0 |

- `#1a3b56` は面として1箇所、文字として1箇所。塗りが主役。ボタンの地には使っていない。枠線にも2箇所。

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1 |
| 見出し | 29px | — |
| 小見出し | 26px | 1 |
| リード | 22px | 1 |
| 本文 | 17px | 1 |
| 補助 | 16px | — |
| 注記 | 15px | — |

- 本文は 17px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1040px／読ませる段は 580px
- セクションの上下余白: 56 / 116 / 156 / 60px（基本は 56px）
- 並びの間隔: px
- 角丸: 29px が基本。大きな面だけ 33px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 880 / 768 / 640 / 430px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2 | 14px / 行間 2 |
| 見出し | 40px | 27px / 行間 1 |
| セクションの上下余白 | 56px | 32px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 17px → 14px、セクション余白は 56px → 32px（PCの57%）。
- 文字サイズの段は 23 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #1a3b56;
  border: 1px solid #1a3b56;
  border-radius: 29px; padding: 0px 0px; min-height: 58px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 33px; padding: 0px 0px; min-height: 65px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1780px | — | ヒーロー（画像） | 中央 | 右（62:38） |
| 2 | 2740px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 720px | — | 3カラム・画像あり | 左 | 右（72:28） |
| 4 | 620px | — | 1カラム・文字だけ | 左 | — |

- 全4セクション。
- 使われている面の色: 
- 見出しは左3／中央1。
- 2カラムの分け方は 62:38 / 72:28。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 29px だが、**完全な円は別扱い**で 3 箇所ある（40px×1、64px×1、112px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 14枚使っている
- 比率は 1:1（4枚）、2:3（4枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1a3b56 }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1780px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#1a3b56; border-radius:29px;
  padding:0px 0px; min-height:58px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:880px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#1a3b56` の面を交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 56px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（29px と 33px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
