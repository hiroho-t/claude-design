# CHAGOCORO ふうのデザイン

- 出典: https://www.chagocoro.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ECサイト･オンラインショップ／ポータルサイト･メディア･情報サイト／生活用品･雑貨･インテリア･家具

白地に `#6d643f` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 10px・行間 1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #6d643f;
  --sub: #4a4522;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #6d643f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 10px;
  --lh-body: 1;
  --container: 1172px;
  --read: 872px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 15px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 80.1% |
| 主色 | `#6d643f` | 3.4% |
| 副色 | `#4a4522` | 2.6% |
| 差し色 | `#8c8562` | 2.4% |
| 差し色 | `#020307` | 2.3% |

文字色は `#000000` / `#ffffff` / `#999999` / `#777777`。

- 主色 `#6d643f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px 0px 0px 2px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f9f6` | 10 | 0 | 0 | 3 |
| `#ffffff` | 73 | 49 | 0 | 35 |
| `#000000` | 0 | 110 | 0 | 0 |
| `#999999` | 0 | 102 | 0 | 0 |
| `#777777` | 0 | 4 | 0 | 0 |

- `#6d643f` は

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 18px | 1.6 |
| 見出し | 17px | 1.7 |
| 小見出し | 13px | — |
| リード | 12px | — |
| リード | 11px | — |
| 本文 | 10px | 1 |

- 本文は 10px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1172px／読ませる段は 872px
- セクションの上下余白: 100 / 72 / 120px（基本は 100px）
- 並びの間隔: px
- 角丸: 15px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1500 / 1350 / 1080 / 800 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 10px / 行間 1 | 10px / 行間 1.7 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 14px |
| 並びの間隔 | 16px | —px |

- 本文は 10px → 10px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 16 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 15px; padding: 0px 10px; min-height: 30px;
  font-size: 12px; font-weight: 600; letter-spacing: 1.2px;
}
.btn-sub{
  background: #f9f9f6; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.55px;
}
.btn-sub{
  background: #f9f9f6; color: #000000;
  border-radius: 20px; padding: 0px 0px; min-height: 40px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.55px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 5160px | — | ヒーロー（画像） | 左 | 見出しの下 |

- 全1セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f9f9f6`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border-radius: 999px; padding: 0px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 15px だが、**完全な円は別扱い**で 4 箇所ある（48px×3、16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 17枚使っている
- 比率は 16:9（15枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#6d643f }
.container{ width:min(100% - 28px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:5160px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:15px;
  padding:0px 10px; min-height:30px;
  font-size:12px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:800px){
  :root{ --fs-body:10px; --section-y:40px; }
  .container{ width:calc(100% - 28px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#6d643f` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（15px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
