# 株式会社インフォマート ふうのデザイン

- 出典: https://corp.infomart.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

#f8f8f8 の地に `#025c54` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 1.6、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f8f8f8;
  --main: #025c54;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #025c54;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Figtree", sans-serif;
  --font-en: "Figtree", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.6;
  --container: 1120px;
  --read: 640px;
  --section-y: 80px;
  --gap: 8px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f8f8f8` | 74.2% |
| 主色 | `#025c54` | 21.8% |

文字色は `#ffffff` / `#000000` / `#81aeaa` / `#eff2f1`。

- 主色 `#025c54` は差し色ではなく**面**で使う。画面の22%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f8f8f8` | 1 | 0 | 0 | 0 |
| `#025c54` | 2 | 8 | 0 | 1 |
| `#148871` | 1 | 0 | 0 | 0 |
| `#ffffff` | 9 | 63 | 4 | 0 |
| `#6eb72f` | 5 | 2 | 0 | 3 |
| `#000000` | 0 | 23 | 0 | 0 |
| `#81aeaa` | 0 | 16 | 0 | 0 |
| `#eff2f1` | 0 | 1 | 0 | 0 |

- `#025c54` は文字色として8箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の22%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#025c54` |
| `#f8f8f8`（地） | `#025c54` |
| `#148871` | `#000000` |
| `#025c54`（主色） | `#000000` |

```css
.section{ --on:#025c54 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d9e0de`。ただしその囲みは `#f8f8f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Figtree
- 欧文: Figtree
- ウェイトは 700 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 162px | 1 |
| 見出し | 34px | — |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 1.6 |
| 補助 | 14px | 1.5 |
| 注記 | 12px | — |

- 本文は 15px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 640px
- セクションの上下余白: 80 / 112 / 40 / 56px（基本は 80px）
- 並びの間隔: 4 / 6 / 8 / 16px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1170 / 1080 / 1024 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.6 | 14px / 行間 1.5 |
| 見出し | 162px | 10px / 行間 1.75 |
| セクションの上下余白 | 80px | 56px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 8px | 6px |

- 本文は 15px → 14px、セクション余白は 80px → 56px（PCの70%）。
- 文字サイズの段は 15 / 14 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 46px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.56px;
}
.btn-sub{
  background: #6eb72f; color: #ffffff;
  border-radius: 3px; padding: 10px 24px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #00645a; color: #ffffff;
  border-radius: 0px; padding: 13px 20px; min-height: 46px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 380px | — | 1カラム・画像あり | 左 | — |
| 3 | 1160px | — | 1カラム・画像あり | 中央 | 全幅 |
| 4 | 880px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1180px | — | 2カラム・画像あり | — | 全面 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#025c54` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（5） / `#f8f8f8`（1） / `#148871`（1） / `#025c54`（1）
- 見出しは左1／中央2。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #d9e0de。面によって入れ替える */
  border-radius: 4px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 8 箇所ある（48px×4、32px×2、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 21枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 16:9（4枚）、4:3（4枚）、21:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#025c54 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:4px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:46px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:56px; --gap:6px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#025c54` の面を全幅で交互に置く。主色は画面の22%を占めるだけ使う。
- 余白 80px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 4px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
