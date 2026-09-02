# fil ふうのデザイン

- 出典: https://fil-toyama.com/index.html
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト／体験･交流

白地に `#4e3c2f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 136px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #4e3c2f;
  --sub: #c8cec7;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #4e3c2f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 720px;
  --read: 768px;
  --section-y: 136px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68.9% |
| 主色 | `#b3b9b1` | 4.8% |
| 副色 | `#c8cec7` | 3.8% |
| 差し色 | `#dadcdb` | 3.2% |
| 差し色 | `#4e3c2f` | 2.4% |
| 差し色 | `#b29173` | 2.4% |

文字色は `#333333` / `#ffffff`。

- 主色 `#4e3c2f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 2 | 13 | 0 | 0 |
| `#000000` | 13 | 0 | 3 | 7 |
| `#333333` | 0 | 80 | 0 | 0 |

- `#4e3c2f` は

## 文字

- 和文: Noto Sans JP
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 22px | 1 |
| 見出し | 18px | 1 |
| 小見出し | 15px | — |
| 本文 | 14px | 1.8 |
| 補助 | 13px | — |
| 注記 | 12px | 1 |
| 注記 | 11px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 720px／読ませる段は 768px
- セクションの上下余白: 136 / 48 / 60 / 92px（基本は 136px）
- 並びの間隔: 10px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1710 / 1520 / 1290 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 13px / 行間 1.9 |
| 見出し | 22px | 18px / 行間 1 |
| セクションの上下余白 | 136px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 10px | 10px |

- 本文は 14px → 13px、セクション余白は 136px → 32px（PCの24%）。
- 文字サイズの段は 18 / 15 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.45px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 0px; padding: 20px 0px; min-height: 60px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.45px;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 75px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.39px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 940px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1180px | `#ffffff` | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 920px | — | 2カラム・画像あり | 左 | 右（50:50） |
| 4 | 880px | — | 2カラム・画像あり | 右 | 左（50:50） |
| 5 | 680px | — | 2カラム・画像あり | 左 | 右（50:50） |
| 6 | 740px | — | 1カラム・画像あり | 中央 | — |
| 7 | 580px | — | 1カラム・画像あり | 中央 | — |
| 8 | 580px | — | 1カラム・文字だけ | 中央 | — |
| 9 | 200px | — | 帯・区切り | 中央 | — |

- 全9セクション。
- 使われている面の色: `#ffffff`（1）
- 見出しは左3／中央4。
- 2カラムの分け方は 50:50 / 50:50 / 50:50。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 34枚使っている
- 比率は 4:3（12枚）、3:2（6枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4e3c2f }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:940px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#4e3c2f` は文字と小さな部品にだけ使う。
- 余白 136px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
