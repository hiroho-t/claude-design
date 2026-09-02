# 外壁塗装・屋根塗装の三和ペイント ふうのデザイン

- 出典: https://www.sanwa-paint.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア

白地に `#0879be` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.5、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0879be;
  --sub: #bbe5f2;
  --ink: #ffffff;
  --ink-rev: #204483;
  --on: #0879be;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Heebo", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 1060px;
  --read: 620px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 46.9% |
| 主色 | `#0879be` | 7.2% |
| 副色 | `#bbe5f2` | 5.8% |
| 差し色 | `#21b8eb` | 5.1% |
| 差し色 | `#65d4f7` | 5% |
| 差し色 | `#53bce9` | 4% |

文字色は `#ffffff` / `#204483` / `#333333` / `#008ad2`。

- 主色 `#0879be` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.5) 0px 0px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#008ad2` | 12 | 4 | 0 | 0 |
| `#ffffff` | 2 | 57 | 0 | 0 |
| `#f2f5f9` | 3 | 0 | 0 | 3 |
| `#005290` | 1 | 0 | 0 | 1 |
| `#204483` | 0 | 21 | 0 | 0 |
| `#333333` | 0 | 5 | 0 | 0 |

- `#0879be` は

## 文字

- 和文: Noto Sans JP
- 欧文: Heebo
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 80px | 1 |
| 見出し | 26px | — |
| 小見出し | 20px | 1.3 |
| リード | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 1.5 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1060px／読ませる段は 620px
- セクションの上下余白: 60 / 76 / 152 / 44px（基本は 60px）
- 並びの間隔: px
- 角丸: 30px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 781 / 768 / 640 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 14px / 行間 1.8 |
| 見出し | 80px | 14px / 行間 1.3 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 22 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #204483;
  border-radius: 0px; padding: 10px 0px; min-height: 70px;
  font-size: 20px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #204483;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #204483;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 560px | — | 1カラム・文字だけ | 左 | — |
| 3 | 1120px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1120px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 680px | — | 5カラム・画像あり | 中央 | 左（17:83） |
| 6 | 560px | — | 1カラム・文字だけ | 左 | — |
| 7 | 600px | — | 1カラム・画像あり | — | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: 
- 見出しは左2／中央3。
- 2カラムの分け方は 17:83。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #f2f5f9; color: #204483;
  border-radius: 999px; padding: 9px 8px; font-size: 12px;
}
```

## 丸いもの

角丸は 30px だが、**完全な円は別扱い**で 13 箇所ある（24px×8、64px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 25枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 16:9（6枚）、3:2（4枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0879be }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#204483; border-radius:0px;
  padding:10px 0px; min-height:70px;
  font-size:20px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0879be` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（30px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
