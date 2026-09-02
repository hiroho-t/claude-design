# 西岡テント ふうのデザイン

- 出典: https://nishiokatent.net/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／生活用品･雑貨･インテリア･家具

白地に `#1955a6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 152px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1955a6;
  --sub: #a4a6a4;
  --ink: #333333;
  --ink-rev: #1955a6;
  --on: #1955a6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", "Noto Sans JP", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1200px;
  --read: 572px;
  --section-y: 152px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.5% |
| 主色 | `#333333` | 7.7% |
| 副色 | `#a4a6a4` | 2.1% |
| 差し色 | `#cad4d3` | 1.8% |

文字色は `#333333` / `#1955a6` / `#ffffff` / `#77756f`。

- 主色 `#1955a6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 18 | 16 | 0 | 0 |
| `#eff8f9` | 2 | 0 | 0 | 1 |
| `#f8f6ef` | 10 | 0 | 0 | 0 |
| `#333333` | 6 | 63 | 1 | 2 |
| `#1955a6` | 2 | 23 | 13 | 0 |
| `#77756f` | 0 | 6 | 0 | 0 |

- `#1955a6` は文字色として23箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも13箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1955a6` |
| `#f8f6ef` | `#1955a6` |
| `#333333` | `#1955a6` |
| `#eff8f9` | `#1955a6` |

```css
.section{ --on:#1955a6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1955a6; --on:#1955a6 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1955a6 }
.section--main .btn--fill{ background:#1955a6; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: A1ゴシック R JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic Antique**、なければ Noto Sans JP
- 欧文: Material Icons
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.4 |
| 見出し | 24px | — |
| 小見出し | 22px | 1.2 |
| リード | 18px | — |
| 本文 | 16px | — |
| 補助 | 15px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 572px
- セクションの上下余白: 152 / 100 / 80 / 132px（基本は 152px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 990 / 690 / 360px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 16px |
| 見出し | 40px | 28px / 行間 1.4 |
| セクションの上下余白 | 152px | 72px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 152px → 72px（PCの47%）。
- 文字サイズの段は 28 / 24 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: #eff8f9; color: #1955a6;
  border: 1px solid #1955a6;
  border-radius: 50px; padding: 12px 20px; min-height: 40px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.75px;
}
.btn-sub{
  background: #333333; color: #ffffff;
  border: 1px solid #333333;
  border-radius: 50px; padding: 12px 20px; min-height: 40px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.75px;
}
.btn-sub{
  background: #333333; color: #ffffff;
  border-radius: 50px; padding: 20px 50px; min-height: 70px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全面 |
| 2 | 980px | — | 3カラム・画像あり | 左 | 右（50:50） |
| 3 | 640px | — | 2カラム・画像あり | 右 | 左（48:52） |
| 4 | 1260px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 420px | `#333333` | 2カラム・画像あり | 左 | — |
| 6 | 2800px | `#eff8f9` | 3カラム・画像あり | 左 | 見出しの下 |
| 7 | 520px | `#333333` | 2カラム・画像あり | 左 | — |
| 8 | 960px | — | 1カラム・画像あり | 左 | — |
| 9 | 700px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 10 | 920px | — | 1カラム・画像あり | 左 | — |
| 11 | 640px | `#f8f6ef` | 1カラム・画像あり | 左 | — |
| 12 | 400px | — | 1カラム・文字だけ | — | — |
| 13 | 1120px | `#ffffff` | 1カラム・画像あり | 中央 | — |

- 全13セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#f8f6ef`（4） / `#333333`（2） / `#eff8f9`（1）
- 見出しは左9／中央1。
- 2カラムの分け方は 50:50 / 48:52。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 24枚使っている
- 比率は 3:4（8枚）、3:2（7枚）、4:3（3枚）
- 角丸 8px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1955a6 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1955a6; --on:#1955a6 }
.section--main .btn--fill{ background:#1955a6; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#eff8f9; color:#1955a6; border-radius:50px;
  padding:12px 20px; min-height:40px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:8px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:690px){
  :root{ --fs-body:16px; --section-y:72px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1955a6` は文字と小さな部品にだけ使う。
- 余白 152px と行間 null を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 8px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。
