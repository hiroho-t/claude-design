# 株式会社SmartHR ふうのデザイン

- 出典: https://smarthr.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#b4eff1` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.9、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b4eff1;
  --sub: #d8dcdd;
  --ink: #1d1c1b;
  --ink-rev: #ffffff;
  --on: #b4eff1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.9;
  --container: 1140px;
  --read: 680px;
  --section-y: 160px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 64.3% |
| 主色 | `#1d1c1b` | 13.5% |
| 副色 | `#d8dcdd` | 5.2% |
| 差し色 | `#b4eff1` | 3.8% |
| 差し色 | `#3ad6db` | 3.2% |
| 差し色 | `#b7b9b0` | 2.7% |

文字色は `#1d1c1b` / `#ffffff` / `#484644` / `#e6e9e9`。

- 主色 `#b4eff1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#1d1c1b` | 18 | 33 | 18 | 1 |
| `#ffffff` | 12 | 44 | 0 | 8 |
| `#55fffd` | 1 | 0 | 0 | 0 |
| `#ffe556` | 1 | 0 | 0 | 0 |
| `#484644` | 0 | 6 | 3 | 0 |
| `#e6e9e9` | 0 | 1 | 0 | 0 |

- `#b4eff1` は

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 37px | — |
| 見出し | 29px | 1.5 |
| 小見出し | 17px | — |
| 本文 | 16px | 1.9 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.9。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1140px／読ませる段は 680px
- セクションの上下余白: 160 / 80 / 48 / 96px（基本は 160px）
- 並びの間隔: 6 / 8 / 14 / 40px
- 角丸: 0px が基本。大きな面だけ 27px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1520 / 1100 / 992 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.9 | 16px / 行間 1.9 |
| セクションの上下余白 | 160px | 24px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 14px | 16px |

- 本文は 16px → 16px、セクション余白は 160px → 24px（PCの15%）。
- 文字サイズの段は 17 / 16 / 15 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #ffffff;
  border: 1px solid #1d1c1b;
  border-radius: 0px; padding: 16px 24px; min-height: 58px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #1d1c1b; color: #ffffff;
  border-radius: 5px; padding: 10px 10px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1860px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 700px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 860px | — | 1カラム・画像あり | 中央 | — |
| 4 | 860px | — | 2カラム・画像あり | — | 全幅 |
| 5 | 920px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#1d1c1b`（1）
- 見出しは左0／中央4。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 9 箇所ある（24px×5、40px×2、16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 33枚使っている。うち 10 枚は画面いっぱいに置く
- 比率は 2:3（12枚）、1:1（8枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b4eff1 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1860px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#ffffff; border-radius:0px;
  padding:16px 24px; min-height:58px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b4eff1` は文字と小さな部品にだけ使う。
- 余白 160px と行間 1.9 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.9 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 27px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
