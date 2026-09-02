# 株式会社カナリー ふうのデザイン

- 出典: https://corp.canary-app.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#0487f0` を大きな面で置く配色。影を使って浮かせる。本文 14px・行間 2、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0487f0;
  --sub: #00bbd5;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #0487f0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "degular", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 852px;
  --read: 612px;
  --section-y: 32px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 46.6% |
| 主色 | `#0487f0` | 13.4% |
| 副色 | `#00bbd5` | 11.6% |
| 差し色 | `#e9f3f7` | 8.7% |
| 差し色 | `#03a5f5` | 6.2% |
| 差し色 | `#0d6de6` | 4.3% |

文字色は `#ffffff` / `#000000` / `#00bbd5`。

- 主色 `#0487f0` は差し色ではなく**面**で使う。画面の13%を占めている。
- 影は`rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(161, 175, 187, 0.25) 0px 0px 24px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 20 | 32 | 0 | 4 |
| `#00bbd5` | 2 | 10 | 1 | 1 |
| `#000000` | 0 | 26 | 0 | 0 |

- `#0487f0` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0487f0` |
| `#00bbd5` | `#0487f0` |

```css
.section{ --on:#0487f0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: degular
- ウェイトは 600 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 160px | — |
| 見出し | 42px | 1.5 |
| 小見出し | 28px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.8 |
| 補助 | 13px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 852px／読ませる段は 612px
- セクションの上下余白: 32 / 160 / 104 / 64px（基本は 32px）
- 並びの間隔: 12 / 14 / 20 / 48px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1280 / 960 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 14px / 行間 2 |
| 見出し | 160px | 14px / 行間 1.8 |
| セクションの上下余白 | 32px | 40px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 20px | 14px |

- 本文は 14px → 14px、セクション余白は 32px → 40px（PCの125%）。
- 文字サイズの段は 104 / 18 / 16 / 14 / 13px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 77px;
  font-size: 48px; font-weight: 200; letter-spacing: -1.44px;
}
.btn-sub{
  background: #ffffff; color: #00bbd5;
  border: 1px solid #e6ecf2;
  border-radius: 9999px; padding: 8px 8px; min-height: 64px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #00bbd5; color: #ffffff;
  border: 1px solid #00bbd5;
  border-radius: 9999px; padding: 4px 4px; min-height: 40px;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 360px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1220px | — | 1カラム・画像あり | 左 | 全幅 |
| 3 | 1680px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1180px | — | 1カラム・画像あり | 右 | 左（13:87） |
| 5 | 900px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 6 | 740px | — | 2カラム・画像あり | — | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#00bbd5`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 13:87。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #e6ecf2。面によって入れ替える */
  border-radius: 12px;
  padding: 120px 44px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 12 箇所ある（48px×9、88px×2、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 25枚使っている
- 比率は 3:4（16枚）、16:9（5枚）、4:3（3枚）
- 角丸 6px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0487f0 }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:360px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:12px; padding:120px 44px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:77px;
  font-size:48px; font-weight:200 }

img{ width:100%; height:auto; border-radius:6px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:14px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地色と主色 `#0487f0` の面を全幅で交互に置く。主色は画面の13%を占めるだけ使う。
- 余白 32px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 6px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
