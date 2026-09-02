# Happy Holidays！（with）LOWRYS FARM ふうのデザイン

- 出典: https://www.dot-st.com/lowrysfarm/cp/2024holiday
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 特設サイト･キャンペーンサイト･プロモーションサイト／ファッション･アパレル･アクセサリー･ジュエリー／レスポンシブ

#2e394c の地に `#2e394c` を大きな面で置く配色。影も枠線もほとんど使わない。本文 9px・行間 null、セクション間 undefinedpx。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #2e394c;
  --main: #2e394c;
  --sub: #d4d5d3;
  --ink: #ffffff;
  --ink-rev: #e0a6a6;
  --on: #2e394c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "antarctican-mono", sans-serif;
  --fs-body: 9px;
  --lh-body: null;
  --container: 768px;
  --section-y: 0px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#2e394c` | 76.2% |
| 主色 | `#b4b3ac` | 5.6% |
| 副色 | `#d4d5d3` | 3.9% |
| 差し色 | `#201f23` | 2.2% |
| 差し色 | `#91928b` | 1.7% |
| 差し色 | `#615f60` | 1.5% |

文字色は `#ffffff` / `#e0a6a6`。

- 主色 `#2e394c` は差し色ではなく**面**で使う。画面の76%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 5 | 39 | 0 | 0 |
| `#e5e5e5` | 12 | 0 | 0 | 0 |
| `#2e394c` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 1 |
| `#e0a6a6` | 0 | 16 | 0 | 0 |

- `#2e394c` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: antarctican-mono
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 11px | — |
| 見出し | 10px | — |
| 本文 | 9px | — |
| 補助 | 7px | — |

- 本文は 9px・行間 null。

## レイアウト

- コンテンツ幅: 最大 768px
- セクションの上下余白: px（基本は 0px）
- 並びの間隔: 1 / 5 / 20 / 23px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 9px | 10px |
| セクションの上下余白 | 0px | —px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 20px | 5px |

- 本文は 9px → 10px。
- 文字サイズの段は 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 31px;
  font-size: 11px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 0px; padding: 7px 17px; min-height: 31px;
  font-size: 11px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|


- 全0セクション。
- 使われている面の色: `#ffffff`（3）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 19枚使っている
- 比率は 1:1（8枚）、2:3（2枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e0a6a6 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }

.hero{  display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:31px;
  font-size:11px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:10px; --gap:5px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#2e394c` の面を交互に置く。主色は画面の76%を占めるだけ使う。
- 余白 0px と行間 null を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
