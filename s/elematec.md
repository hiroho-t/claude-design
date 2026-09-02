# エレマテック株式会社 ふうのデザイン

- 出典: https://www.elematec.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#7d919b` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.15、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7d919b;
  --sub: #7d919b;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #7d919b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.15;
  --container: 1160px;
  --read: 652px;
  --section-y: 120px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.4% |
| 主色 | `#b7bfc5` | 2.3% |
| 副色 | `#7d919b` | 2% |
| 差し色 | `#35383b` | 2% |

文字色は `#000000` / `#ffffff` / `#2f509f`。

- 主色 `#7d919b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.15) 0px 3px 30px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 14 | 42 | 4 | 0 |
| `#2f509f` | 6 | 2 | 2 | 4 |
| `#000000` | 1 | 56 | 0 | 0 |
| `#f0a60f` | 1 | 0 | 1 | 1 |
| `#f6f6f6` | 5 | 0 | 0 | 0 |

- `#7d919b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#7d919b` |
| `#2f509f` | `#ffffff` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#7d919b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 600 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.6 |
| 見出し | 26px | — |
| 小見出し | 20px | — |
| 本文 | 16px | 1.6 |
| 補助 | 14px | 1.6 |
| 注記 | 13px | 1.6 |
| 注記 | 11px | — |

- 本文は 16px・行間 1.15。

## レイアウト

- コンテンツ幅: 最大 1160px／読ませる段は 652px
- セクションの上下余白: 120 / 80 / 40 / 160px（基本は 120px）
- 並びの間隔: 16 / 20 / 24 / 40px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1340 / 1040 / 1024 / 1000 / 999px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.15 | 14px / 行間 1.6 |
| 見出し | 36px | 24px / 行間 1.6 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 16px |

- 本文は 16px → 14px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 24 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 20px; font-weight: 600; letter-spacing: 0.6px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.48px;
}
.btn-sub{
  background: #2f509f; color: #ffffff;
  border: 2px solid #2f509f;
  border-radius: 3px; padding: 0px 60px; min-height: 76px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.48px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 500px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 500px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 500px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 500px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 500px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#2f509f`（1） / `#000000`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #f6f6f6; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（24px×9、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 27枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 3:2（9枚）、3:4（6枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7d919b }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:500px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:20px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#7d919b` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.15 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.15 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
