# Money Forward Design ふうのデザイン

- 出典: https://design.moneyforward.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営／レスポンシブ

白地に `#ed7100` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.6、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ed7100;
  --ink: #323232;
  --ink-rev: #ffffff;
  --on: #ed7100;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.6;
  --container: 1100px;
  --read: 648px;
  --section-y: 120px;
  --gap: 27px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 93.3% |

文字色は `#323232` / `#ffffff` / `#000000` / `#a0a0a0`。

- 主色 `#ed7100` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 16 | 6 | 0 | 5 |
| `#ed7100` | 4 | 0 | 4 | 0 |
| `#323232` | 3 | 53 | 8 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |
| `#a0a0a0` | 0 | 3 | 0 | 0 |

- `#ed7100` は面として4箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。枠線にも4箇所。

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Montserrat
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1.4 |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| リード | 15px | — |
| リード | 14px | — |
| 本文 | 12px | 1.6 |

- 本文は 12px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 648px
- セクションの上下余白: 120 / 40 / 60 / 56px（基本は 120px）
- 並びの間隔: 10 / 12 / 27 / 32px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 990 / 540 / 360px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.6 | 12px / 行間 1.6 |
| 見出し | 24px | 24px / 行間 1.4 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 27px | 10px |

- 本文は 12px → 12px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 9px。

## ボタン

```css
.btn{
  background: #ffffff; color: #ffffff;
  border: 1px solid #ed7100;
  border-radius: 32px; padding: 0px 0px; min-height: 48px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.7px;
}
.btn-sub{
  background: transparent; color: #323232;
  border-radius: 0px; padding: 0px 0px; min-height: 35px;
  font-size: 15px; font-weight: 500; letter-spacing: 1.5px;
}
.btn-sub{
  background: #ffffff; color: #323232;
  border: 1px solid #323232;
  border-radius: 128px; padding: 0px 0px; min-height: 49px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.16px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 620px | — | ヒーロー（画像） | — | 全面 |
| 2 | 460px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 620px | — | 1カラム・画像あり | 左 | 右（50:50） |
| 4 | 620px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 5 | 640px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 360px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 7 | 500px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 8 | 260px | — | 帯・区切り | — | — |

- 全8セクション。
- 使われている面の色: `#ffffff`（4）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 50:50。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 1px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（32px×10）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている
- 比率は 16:9（13枚）、3:4（4枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ed7100 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:620px; display:grid; align-content:center }
.card{ background:#ffffff;
  border-radius:1px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#ffffff; border-radius:32px;
  padding:0px 0px; min-height:48px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:540px){
  :root{ --fs-body:12px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ed7100` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 1px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
