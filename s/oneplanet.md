# 株式会社OnePlanet ふうのデザイン

- 出典: https://1planet.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

白地に `#505a10` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #505a10;
  --sub: #232317;
  --ink: #1c1c1c;
  --ink-rev: #f7f7f7;
  --on: #505a10;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Ubuntu", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1280px;
  --read: 612px;
  --section-y: 60px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.9% |
| 主色 | `#8e8378` | 2.6% |
| 副色 | `#232317` | 2% |
| 差し色 | `#505a10` | 1.8% |
| 差し色 | `#645c3f` | 1.8% |
| 差し色 | `#747251` | 1.6% |

文字色は `#1c1c1c` / `#f7f7f7` / `#606060` / `#ffffff`。

- 主色 `#505a10` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 23 | 8 | 0 | 0 |
| `#1c1c1c` | 1 | 37 | 0 | 0 |
| `#f7f7f7` | 2 | 5 | 0 | 0 |
| `#ee3e3e` | 7 | 6 | 2 | 2 |
| `#e8e8e8` | 0 | 0 | 3 | 0 |
| `#606060` | 0 | 23 | 0 | 0 |

- `#505a10` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#505a10` |
| `#1c1c1c` | `#f7f7f7` |
| `#f7f7f7` | `#505a10` |
| `#f4f3f3` | `#505a10` |

```css
.section{ --on:#505a10 }                     /* 地の面 */
.section--main{ background:var(--main); color:#f7f7f7; --on:#f7f7f7 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#f7f7f7 }
.section--main .btn--fill{ background:#f7f7f7; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Ubuntu
- ウェイトは 500 / 700 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 160px | 1.4 |
| 見出し | 140px | 1.4 |
| 小見出し | 62px | 1.2 |
| リード | 56px | 1.4 |
| リード | 22px | 1.5 |
| リード | 20px | — |
| 本文 | 16px | 1.6 |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 612px
- セクションの上下余白: 60 / 100 / 64 / 80px（基本は 60px）
- 並びの間隔: 8 / 20 / 40 / 60px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 960 / 680 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 18px / 行間 1.4 |
| 見出し | 160px | 32px / 行間 1.2 |
| セクションの上下余白 | 60px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 40px | 8px |

- 本文は 16px → 18px、セクション余白は 60px → 24px（PCの40%）。
- 文字サイズの段は 20 / 18 / 17 / 14 / 13px。

## ボタン

```css
.btn{
  background: transparent; color: #1c1c1c;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 15px; font-weight: 500; letter-spacing: 1.8px;
}
.btn-sub{
  background: transparent; color: #ee3e3e;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 16px; font-weight: 500; letter-spacing: 1.28px;
}
.btn-sub{
  background: #ee3e3e; color: #333333;
  border: 2px solid #ee3e3e;
  border-radius: 128px; padding: 12px 24px; min-height: 46px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | 左 | — |
| 2 | 140px | — | 6カラム・画像あり | 左 | — |
| 3 | 2880px | — | 4カラム | 右 | — |
| 4 | 540px | — | 3カラム | 右 | — |
| 5 | 620px | — | 3カラム | 右 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（10） / `#1c1c1c`（1） / `#f7f7f7`（1） / `#f4f3f3`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（40px×3、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 1枚使っている
- 比率は 一定しない
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#505a10 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#f7f7f7; --on:#f7f7f7 }
.section--main .btn--fill{ background:#f7f7f7; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#1c1c1c; border-radius:0px;
  padding:0px 0px; min-height:28px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:680px){
  :root{ --fs-body:18px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#505a10` は文字と小さな部品にだけ使う。
- 余白 60px と行間 null を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
