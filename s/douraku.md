# かに道楽 ふうのデザイン

- 出典: https://douraku.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト

#f2eee5 の地に `#eae0cf` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 1.8、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2eee5;
  --main: #eae0cf;
  --sub: #8c5c6a;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #eae0cf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", sans-serif;
  --font-en: "Shippori Mincho", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.8;
  --container: 824px;
  --read: 1140px;
  --section-y: 140px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2eee5` | 44.9% |
| 主色 | `#eae0cf` | 12.7% |
| 副色 | `#8c5c6a` | 12.3% |
| 差し色 | `#ffffff` | 12.2% |
| 差し色 | `#cf362e` | 9.5% |
| 差し色 | `#b67763` | 3.1% |

文字色は `#000000` / `#ffffff` / `#d04537` / `#7f7e7e`。

- 主色 `#eae0cf` は差し色ではなく**面**で使う。画面の13%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 20px 40px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 26 | 22 | 0 | 0 |
| `#f5e7de` | 1 | 0 | 0 | 0 |
| `#cb2f26` | 1 | 2 | 0 | 1 |
| `#000000` | 0 | 86 | 0 | 0 |
| `#d04537` | 0 | 19 | 0 | 0 |
| `#7f7e7e` | 0 | 3 | 0 | 0 |

- `#eae0cf` は

## 文字

- 和文: Shippori Mincho
- 欧文: Shippori Mincho
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.63 |
| 見出し | 40px | — |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 15px | 1.8 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 824px／読ませる段は 1140px
- セクションの上下余白: 140 / 124 / 104 / 136px（基本は 140px）
- 並びの間隔: px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1080 / 768 / 375 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.8 | 14px / 行間 1.7 |
| 見出し | 48px | 32px |
| セクションの上下余白 | 140px | 24px |
| 左右の余白 | — | 40px |
| 並びの間隔 | 16px | —px |

- 本文は 15px → 14px、セクション余白は 140px → 24px（PCの17%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #cccccc;
  border-radius: 4px; padding: 0px 0px; min-height: 31px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.3px;
}
.btn-sub{
  background: #cb2f26; color: #ffffff;
  border-radius: 4px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.3px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 700px | — | 4カラム・画像あり | — | 全面 |
| 3 | 1560px | — | 3カラム・画像あり | 右 | 左（62:38） |
| 4 | 1720px | — | 6カラム・画像あり | 左 | 右（35:65） |
| 5 | 820px | — | 1カラム・画像あり | 左 | 右（74:26） |
| 6 | 900px | — | 2カラム・画像あり | — | 全面 |
| 7 | 780px | `#ffffff` | 1カラム・画像あり | 左 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（16）
- 見出しは左3／中央1。
- 2カラムの分け方は 62:38 / 35:65 / 74:26。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 26px 26px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 40px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #d04537;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 3 箇所ある（40px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、16:9（7枚）、3:4（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#eae0cf }
.container{ width:min(100% - 80px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.card{ background:#ffffff;
  border-radius:4px; padding:26px 26px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:4px;
  padding:0px 0px; min-height:31px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; }
  .container{ width:calc(100% - 80px) }
}
```

## 守ること

やること

- 地色と主色 `#eae0cf` の面を全幅で交互に置く。主色は画面の13%を占めるだけ使う。
- 余白 140px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
