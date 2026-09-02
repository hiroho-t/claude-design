# TOMATEC ふうのデザイン

- 出典: https://tomatec.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／科学･研究

白地に `#384153` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #384153;
  --sub: #384153;
  --ink: #0f347f;
  --ink-rev: #dde2ed;
  --on: #384153;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1240px;
  --read: 1032px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 31.8% |
| 主色 | `#dde2ed` | 12.7% |
| 副色 | `#384153` | 11.9% |
| 差し色 | `#060b0d` | 9.8% |
| 差し色 | `#061e4f` | 7.1% |
| 差し色 | `#a0b8ce` | 6.2% |

文字色は `#0f347f` / `#dde2ed` / `#1d1d1f` / `#ffffff`。

- 主色 `#384153` は差し色ではなく**面**で使う。画面の12%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#dde2ed` | 2 | 47 | 1 | 0 |
| `#0f347f` | 6 | 97 | 7 | 3 |
| `#384153` | 1 | 0 | 0 | 0 |
| `#061e4e` | 1 | 0 | 0 | 0 |
| `#f1f4f8` | 11 | 0 | 0 | 0 |
| `#1d1d1f` | 0 | 7 | 0 | 0 |
| `#ffffff` | 3 | 6 | 1 | 0 |

- `#384153` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#dde2ed` | `#384153` |
| `#0f347f` | `#dde2ed` |
| `#ffffff`（地） | `#384153` |
| `#384153`（主色） | `#dde2ed` |

```css
.section{ --on:#384153 }                     /* 地の面 */
.section--main{ background:var(--main); color:#dde2ed; --on:#dde2ed }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#dde2ed }
.section--main .btn--fill{ background:#dde2ed; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Roboto
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 見出し | 20px | 1.5 |
| 小見出し | 17px | — |
| 本文 | 16px | 1.69 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1240px／読ませる段は 1032px
- セクションの上下余白: 100 / 120 / 192 / 36px（基本は 100px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1200 / 1000 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 16px / 行間 1.69 |
| 見出し | 24px | 16px / 行間 1.69 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 16px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 18 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #d22141; color: #ffffff;
  border: 1px solid #d22141;
  border-radius: 50px; padding: 13px 13px; min-height: 44px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #0f347f; color: #dde2ed;
  border-radius: 0px; padding: 18px 40px; min-height: 52px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: null;
  border: 1px solid #0f347f;
  border-radius: 35px; padding: 0px 0px; min-height: 35px;
  font-size: 0px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 180px | — | ヒーロー | — | — |
| 2 | 180px | — | 帯・区切り | — | — |
| 3 | 180px | — | 帯・区切り | — | — |
| 4 | 180px | — | 帯・区切り | — | — |
| 5 | 180px | — | 帯・区切り | — | — |
| 6 | 180px | — | 帯・区切り | — | — |
| 7 | 180px | — | 帯・区切り | — | — |
| 8 | 180px | — | 帯・区切り | — | — |
| 9 | 180px | — | 帯・区切り | — | — |
| 10 | 180px | — | 帯・区切り | — | — |
| 11 | 180px | — | 帯・区切り | — | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#384153` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#dde2ed`（2） / `#0f347f`（2） / `#ffffff`（1） / `#384153`（1）


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #f1f4f8;
  border-radius: 10px;
  padding: 18px 18px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 11 箇所ある（32px×10、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 6枚使っている
- 比率は 3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#384153 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#dde2ed; --on:#dde2ed }
.section--main .btn--fill{ background:#dde2ed; color:var(--main) }
.card{ background:#f1f4f8;
  border-radius:10px; padding:18px 18px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#d22141; color:#ffffff; border-radius:50px;
  padding:13px 13px; min-height:44px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#384153` の面を全幅で交互に置く。主色は画面の12%を占めるだけ使う。
- 余白 100px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
