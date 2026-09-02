# 採用情報 ふうのデザイン

- 出典: https://career.lycomm.co.jp/ja/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#1839b1` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1839b1;
  --sub: #1f1f1f;
  --ink: #585858;
  --ink-rev: #111111;
  --on: #1839b1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "LINESeedJP", sans-serif;
  --font-en: "LINESeedJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1200px;
  --read: 576px;
  --section-y: 60px;
  --gap: 30px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 50.5% |
| 主色 | `#e6e9ea` | 16.3% |
| 副色 | `#1f1f1f` | 9.2% |
| 差し色 | `#bfc7c6` | 8.1% |
| 差し色 | `#677565` | 4.6% |
| 差し色 | `#b0afa5` | 4.4% |

文字色は `#585858` / `#111111` / `#1839b1` / `#ffffff`。

- 主色 `#1839b1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px 8px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#dddddd` | 15 | 0 | 0 | 0 |
| `#ffffff` | 22 | 15 | 0 | 1 |
| `#f8f8f8` | 2 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 1 | 0 |
| `#1f1f1f` | 1 | 0 | 0 | 0 |
| `#585858` | 0 | 22 | 1 | 0 |
| `#111111` | 0 | 36 | 0 | 0 |
| `#1839b1` | 2 | 36 | 0 | 1 |

- `#1839b1` は文字色として36箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1839b1` |
| `#dddddd` | `#1839b1` |
| `#f8f8f8` | `#1839b1` |
| `#1f1f1f` | `#111111` |

```css
.section{ --on:#1839b1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#111111; --on:#111111 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#111111 }
.section--main .btn--fill{ background:#111111; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f8f8f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: LINESeedJP
- 欧文: LINESeedJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 70px | — |
| 見出し | 48px | 1.3 |
| 小見出し | 24px | — |
| リード | 20px | — |
| 本文 | 16px | 1.8 |
| 補助 | 14px | 1.8 |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 576px
- セクションの上下余白: 60 / 72 / 100 / 120px（基本は 60px）
- 並びの間隔: 8 / 20 / 30 / 48px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1141 / 1140 / 767 / 568 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 12px / 行間 1.8 |
| 見出し | 70px | 28px / 行間 1.3 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 30px | 12px |

- 本文は 16px → 12px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 20 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #1839b1; color: #ffffff;
  border-radius: 180px; padding: 11px 10px; min-height: 54px;
  font-size: 18px; font-weight: 700; letter-spacing: 0.48px;
}
.btn-sub{
  background: #ffffff; color: #555555;
  border: 1px solid #555555;
  border-radius: 160px; padding: 17px 10px; min-height: 65px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.48px;
}
.btn-sub{
  background: transparent; color: #949494;
  border: 1px solid #949494;
  border-radius: 140px; padding: 9px 10px; min-height: 45px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.48px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 720px | `#f8f8f8` | 2カラム | 中央 | — |
| 3 | 2040px | — | 6カラム | 中央 | — |
| 4 | 1360px | `#f8f8f8` | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 720px | — | 2カラム | 中央 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（19） / `#dddddd`（15） / `#f8f8f8`（2） / `#1f1f1f`（1）
- 見出しは左0／中央4。


## 部品

囲み（18箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 20px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 8px 16px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 1px 6px; font-size: 0px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（40px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている
- 比率は 4:3（18枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1839b1 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#111111; --on:#111111 }
.section--main .btn--fill{ background:#111111; color:var(--main) }
.card{ background:#ffffff;
  border-radius:20px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#1839b1; color:#ffffff; border-radius:180px;
  padding:11px 10px; min-height:54px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:12px; --section-y:32px; --gap:12px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1839b1` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 20px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
