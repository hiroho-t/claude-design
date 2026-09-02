# 特定医療法人 萬生会 熊本第一病院 ふうのデザイン

- 出典: https://vansay.jp/kumamoto/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

#fbfaf6 の地に `#f8ae60` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.7、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fbfaf6;
  --main: #f8ae60;
  --sub: #1f212f;
  --ink: #5a5a5a;
  --ink-rev: #ffffff;
  --on: #f8ae60;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "MFW-UDShinMGoPro-DeBold", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.7;
  --container: 796px;
  --read: 592px;
  --section-y: 48px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fbfaf6` | 88.6% |
| 主色 | `#e6eaeb` | 2.8% |
| 副色 | `#1f212f` | 2.1% |
| 差し色 | `#f8ae60` | 1.7% |

文字色は `#5a5a5a` / `#ffffff` / `#f87700` / `#333333`。

- 主色 `#f8ae60` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.06) 0px 0px 40px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 35 | 41 | 0 | 5 |
| `#f4f2e9` | 5 | 0 | 0 | 4 |
| `#f87700` | 5 | 18 | 0 | 0 |
| `#333333` | 1 | 10 | 0 | 1 |
| `#f8f8f8` | 3 | 0 | 0 | 3 |
| `#5a5a5a` | 0 | 56 | 0 | 0 |

- `#f8ae60` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#f8ae60` |
| `#f87700` | `#ffffff` |
| `#f4f2e9` | `#f8ae60` |
| `#fbfaf6`（地） | `#f8ae60` |

```css
.section{ --on:#f8ae60 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fbfaf6` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: MFW-UDShinMGoPro-DeBold
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1.4 |
| 見出し | 22px | 1.7 |
| 小見出し | 20px | 1.4 |
| リード | 18px | — |
| リード | 15px | — |
| 本文 | 14px | 1.7 |
| 補助 | 13px | — |

- 本文は 14px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 796px／読ませる段は 592px
- セクションの上下余白: 48 / 80 / 100 / 32px（基本は 48px）
- 並びの間隔: 16px
- 角丸: 20px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1100 / 767 / 600 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.7 | 13px / 行間 1.9 |
| 見出し | 24px | 12px / 行間 1.4 |
| セクションの上下余白 | 48px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 12px |

- 本文は 14px → 13px、セクション余白は 48px → 24px（PCの50%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #f0f0f0; color: #555555;
  border-radius: 60px; padding: 8px 16px; min-height: 29px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #f8f8f8; color: #f87700;
  border-radius: 20px; padding: 5px 10px; min-height: 44px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.72px;
}
.btn-sub{
  background: #ffffff; color: #555555;
  border-radius: 20px; padding: 0px 0px; min-height: 96px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | 中央 | 右（41:59） |
| 2 | 340px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 520px | — | 1カラム・文字だけ | 左 | — |
| 4 | 780px | — | 3カラム・画像あり | 左 | 右（28:72） |
| 5 | 760px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 800px | — | 6カラム・画像あり | 中央 | — |
| 7 | 660px | — | 1カラム・画像あり | 左 | 右（54:46） |
| 8 | 480px | `#f4f2e9` | 3カラム・画像あり | 中央 | — |

- 全8セクション。
- 使われている面の色: `#ffffff`（15） / `#f87700`（1） / `#f4f2e9`（1） / `#fbfaf6`（1）
- 見出しは左3／中央5。
- 2カラムの分け方は 41:59 / 28:72 / 54:46。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 46px 46px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 40px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 10px; font-size: 10px;
}
```

## 丸いもの

角丸は 20px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 37枚使っている
- 比率は 3:2（18枚）、3:4（12枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f8ae60 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:46px 46px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f0f0f0; color:#555555; border-radius:60px;
  padding:8px 16px; min-height:29px;
  font-size:13px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:13px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#fbfaf6` のまま。主色 `#f8ae60` は文字と小さな部品にだけ使う。
- 余白 48px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（20px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
