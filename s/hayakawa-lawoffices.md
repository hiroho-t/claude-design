# Hayakawa Law Offices ふうのデザイン

- 出典: https://hayakawa-lawoffice.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: コーポレートサイト／金融･投資･保険･士業／レスポンシブ

白地に `#2c2c2c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2.6、セクション間 132px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2c2c2c;
  --sub: #3d3f3e;
  --ink: #111111;
  --ink-rev: #ffffff;
  --on: #2c2c2c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanMPs_Noto", sans-serif;
  --font-en: "YakuHanMPs_Noto", sans-serif;
  --fs-body: 14px;
  --lh-body: 2.6;
  --container: 720px;
  --read: 1220px;
  --section-y: 132px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.5% |
| 主色 | `#2c2c2c` | 12.8% |
| 副色 | `#3d3f3e` | 3.5% |
| 差し色 | `#122225` | 2.7% |
| 差し色 | `#93907e` | 2% |
| 差し色 | `#677e6f` | 1.8% |

文字色は `#111111` / `#ffffff` / `#999999` / `#b9b9b9`。

- 主色 `#2c2c2c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 4 | 0 | 0 | 3 |
| `#ffffff` | 1 | 16 | 1 | 0 |
| `#111111` | 0 | 124 | 4 | 0 |
| `#999999` | 0 | 5 | 0 | 0 |
| `#b9b9b9` | 0 | 3 | 0 | 0 |

- `#2c2c2c` は

## 文字

- 和文: YakuHanMPs_Noto
- 欧文: YakuHanMPs_Noto
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.8 |
| 見出し | 26px | 1.6 |
| 小見出し | 21px | — |
| 本文 | 14px | 2.6 |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 2.6。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 720px／読ませる段は 1220px
- セクションの上下余白: 132 / 200 / 60 / 172px（基本は 132px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 22px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 960 / 782 / 600 / 560px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2.6 | 12px / 行間 2.2 |
| 見出し | 30px | 24px / 行間 1.6 |
| セクションの上下余白 | 132px | 52px |
| 左右の余白 | — | 70px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 12px、セクション余白は 132px → 52px（PCの39%）。
- 文字サイズの段は 18 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #f5f5f5; color: #111111;
  border-radius: 0px; padding: 40px 45px; min-height: 74px;
  font-size: 24px; font-weight: 400; letter-spacing: 1.92px;
}
.btn-sub{
  background: transparent; color: #111111;
  border: 1px solid #111111;
  border-radius: 22px; padding: 1px 24px; min-height: 45px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.78px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 22px; padding: 1px 24px; min-height: 45px;
  font-size: 13px; font-weight: 400; letter-spacing: 0.78px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | 左 | 右（41:59） |
| 2 | 2340px | `#f5f5f5` | 3カラム・画像あり | 右 | 左（50:50） |
| 3 | 780px | — | 6カラム・画像あり | 左 | 左（24:76） |
| 4 | 1120px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 500px | — | 1カラム・画像あり | — | 全面 |
| 6 | 260px | — | 帯・区切り | — | — |

- 全6セクション。
- 使われている面の色: `#f5f5f5`（1）
- 見出しは左2／中央1。
- 2カラムの分け方は 41:59 / 50:50 / 24:76。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 40枚使っている
- 比率は 4:3（25枚）、1:1（15枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2c2c2c }
.container{ width:min(100% - 140px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f5f5f5; color:#111111; border-radius:0px;
  padding:40px 45px; min-height:74px;
  font-size:24px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:12px; --section-y:52px; }
  .container{ width:calc(100% - 140px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#2c2c2c` は文字と小さな部品にだけ使う。
- 余白 132px と行間 2.6 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 22px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
