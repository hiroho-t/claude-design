# inadani sees ふうのデザイン

- 出典: https://inadani-sees.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／体験･交流／スタジオ･レンタルスペース･シェアオフィス

#f0f0f0 の地に `#55a4c6` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 3、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f0f0f0;
  --main: #55a4c6;
  --sub: #94a9a6;
  --ink: #000000;
  --ink-rev: #e94709;
  --on: #55a4c6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-PA1GothicStd-Regular", sans-serif;
  --font-en: "MFW-PA1GothicStd-Regular", sans-serif;
  --fs-body: 14px;
  --lh-body: 3;
  --container: 1324px;
  --read: 660px;
  --section-y: 48px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f0f0f0` | 73.3% |
| 主色 | `#55a4c6` | 5.4% |
| 副色 | `#94a9a6` | 5.4% |
| 差し色 | `#beccc5` | 3.8% |
| 差し色 | `#6c90a3` | 3.5% |
| 差し色 | `#dfdfdd` | 3% |

文字色は `#000000` / `#e94709` / `#ffffff`。

- 主色 `#55a4c6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 80px 6.4px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 40 | 6 | 0 | 3 |
| `#cccccc` | 10 | 0 | 0 | 0 |
| `#d5d5d5` | 4 | 0 | 0 | 0 |
| `#f47a2e` | 1 | 0 | 0 | 0 |
| `#000000` | 3 | 99 | 0 | 0 |
| `#e94709` | 0 | 6 | 0 | 0 |

- `#55a4c6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#55a4c6` |
| `#cccccc` | `#55a4c6` |
| `#f9f9f9` | `#55a4c6` |

```css
.section{ --on:#55a4c6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#e94709; --on:#e94709 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#e94709 }
.section--main .btn--fill{ background:#e94709; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f0f0f0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: MFW-PA1GothicStd-Regular
- 欧文: MFW-PA1GothicStd-Regular
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1 |
| 見出し | 22px | — |
| 小見出し | 16px | — |
| 本文 | 14px | 3 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 3。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1324px／読ませる段は 660px
- セクションの上下余白: 48 / 116 / 144 / 72px（基本は 48px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1366 / 1280 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 3 | 14px / 行間 3 |
| 見出し | 34px | 23px / 行間 1 |
| セクションの上下余白 | 48px | 24px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 48px → 24px（PCの50%）。
- 文字サイズの段は 23 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #000000;
  border-radius: 32px; padding: 0px 16px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.72px;
}
.btn-sub{
  background: #e63418; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 72px;
  font-size: 28px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 7020px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 140px | — | 帯・区切り | — | — |
| 3 | 900px | — | 1カラム・画像あり | — | 全面 |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#cccccc`（3） / `#f9f9f9`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 48px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 80px 6.4px;
}
```

ラベル・タグ

```css
.chip{
  background: #000000; color: #ffffff;
  border-radius: 999px; padding: 0px 9px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（32px×3、136px×1、176px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 31枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 16:9（11枚）、1:1（10枚）、2:3（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#55a4c6 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:7020px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#e94709; --on:#e94709 }
.section--main .btn--fill{ background:#e94709; color:var(--main) }
.card{ background:#ffffff;
  border-radius:16px; padding:48px 48px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#000000; border-radius:32px;
  padding:0px 16px; min-height:29px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f0f0f0` のまま。主色 `#55a4c6` は文字と小さな部品にだけ使う。
- 余白 48px と行間 3 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 3 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
