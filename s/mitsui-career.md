# 三井物産 採用ポータルサイト ふうのデザイン

- 出典: https://career.mitsui.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: 採用サイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#3860be` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 13px・行間 1.6、セクション間 200px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #3860be;
  --sub: #abb1b0;
  --ink: #1e1e1e;
  --ink-rev: #696969;
  --on: #3860be;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "A+mfCv-AXIS Font ベーシック M ProN", sans-serif;
  --font-en: "Haas Grot Disp Web", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.6;
  --container: 1052px;
  --read: 1008px;
  --section-y: 200px;
  --gap: 24px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.2% |
| 主色 | `#d7d9d9` | 5.9% |
| 副色 | `#abb1b0` | 2% |
| 差し色 | `#bec5c5` | 1.7% |
| 差し色 | `#2a3231` | 1.6% |

文字色は `#1e1e1e` / `#696969` / `#3860be` / `#ffffff`。

- 主色 `#3860be` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.2) 0px 0px 18px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 3 | 4 | 0 | 1 |
| `#000a02` | 2 | 1 | 54 | 2 |
| `#1e1e1e` | 0 | 130 | 0 | 0 |
| `#696969` | 0 | 1 | 0 | 0 |
| `#3860be` | 0 | 2 | 0 | 0 |

- `#3860be` は文字色として2箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 文字

- 和文: A+mfCv-AXIS Font ベーシック M ProN
- 欧文: Haas Grot Disp Web
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 59px | — |
| 見出し | 29px | 1 |
| 小見出し | 23px | — |
| リード | 17px | — |
| リード | 14px | — |
| 本文 | 13px | 1 |
| 補助 | 12px | — |

- 本文は 13px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1052px／読ませる段は 1008px
- セクションの上下余白: 200 / 48 / 92 / 164px（基本は 200px）
- 並びの間隔: 4 / 19 / 24 / 48px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 896 / 782 / 769 / 600 / 550px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.6 | 12px / 行間 1.6 |
| 見出し | 59px | 13px / 行間 1 |
| セクションの上下余白 | 200px | 68px |
| 左右の余白 | — | 45px |
| 並びの間隔 | 24px | 5px |

- 本文は 13px → 12px、セクション余白は 200px → 68px（PCの34%）。
- 文字サイズの段は 36 / 18 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #1e1e1e;
  border: 1px solid #000000;
  border-radius: 5px; padding: 0px 19px; min-height: 49px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #1e1e1e;
  border: 1px solid #000000;
  border-radius: 5px; padding: 0px 19px; min-height: 39px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #000a02; color: #ffffff;
  border: 1px solid #000a02;
  border-radius: 2px; padding: 12px 10px; min-height: 42px;
  font-size: 13px; font-weight: 600; letter-spacing: 0.13008px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 160px | — | ヒーロー（画像） | — | — |
| 2 | 900px | — | 1カラム・文字だけ | — | — |
| 3 | 3320px | — | 6カラム・画像あり | 右 | 左（73:27） |
| 4 | 900px | — | 4カラム・画像あり | 左 | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 73:27。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #1e1e1e;
  border: 1px solid currentColor;
  border-radius: 5px; padding: 0px 19px; font-size: 13px;
}
```

## 画像

- 14枚使っている
- 比率は 1:1（9枚）、16:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3860be }
.container{ width:min(100% - 90px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:160px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#1e1e1e; border-radius:5px;
  padding:0px 19px; min-height:49px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:896px){
  :root{ --fs-body:12px; --section-y:68px; --gap:5px; }
  .container{ width:calc(100% - 90px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#3860be` は文字と小さな部品にだけ使う。
- 余白 200px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。
