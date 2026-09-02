# グラスコート佐賀テニススクール ふうのデザイン

- 出典: https://gcs-tc-school.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／運動･スポーツ･ジム／スクール･習い事･教材

白地に `#4db6ac` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 null、セクション間 168px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #4db6ac;
  --sub: #ff7a21;
  --ink: #081211;
  --ink-rev: #212121;
  --on: #4db6ac;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Quicksand", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1176px;
  --read: 648px;
  --section-y: 168px;
  --gap: 16px;
  --radius: 24px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 59% |
| 主色 | `#4db6ac` | 21.4% |
| 副色 | `#ff7a21` | 13% |
| 差し色 | `#ffa24e` | 2.7% |

文字色は `#081211` / `#212121` / `#616161` / `#ffffff`。

- 主色 `#4db6ac` は差し色ではなく**面**で使う。画面の21%を占めている。
- 影は`rgba(0, 0, 0, 0.05) 0px 8px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 36 | 23 | 19 | 2 |
| `#ff7a21` | 16 | 12 | 12 | 6 |
| `#4db6ac` | 2 | 13 | 3 | 1 |
| `#fff8f4` | 1 | 0 | 0 | 0 |
| `#cc621a` | 4 | 0 | 0 | 0 |
| `#081211` | 0 | 19 | 0 | 0 |
| `#212121` | 0 | 25 | 0 | 0 |
| `#616161` | 0 | 6 | 0 | 0 |

- `#4db6ac` は文字色として13箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の21%を占める。ボタンの地にも使う。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#4db6ac` |
| `#ff7a21` | `#4db6ac` |
| `#fff8f4` | `#4db6ac` |
| `#4db6ac`（主色） | `#4db6ac` |

```css
.section{ --on:#4db6ac }                     /* 地の面 */
.section--main{ background:var(--main); color:#212121; --on:#212121 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#212121 }
.section--main .btn--fill{ background:#212121; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#4db6ac` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ゴシックMB101 M JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Quicksand
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.5 |
| 見出し | 36px | 1.5 |
| 小見出し | 24px | — |
| リード | 18px | 1 |
| 本文 | 16px | — |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1176px／読ませる段は 648px
- セクションの上下余白: 168 / 64 / 104 / 336px（基本は 168px）
- 並びの間隔: 8 / 12 / 16 / 24px
- 角丸: 24px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 1.4 |
| 見出し | 48px | 14px / 行間 1 |
| セクションの上下余白 | 168px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 16px |

- 本文は 16px → 14px、セクション余白は 168px → 24px（PCの14%）。
- 文字サイズの段は 24 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ff7a21; color: #ffffff;
  border: 1px solid #ff7a21;
  border-radius: 96px; padding: 8px 8px; min-height: 66px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #333333;
  border-radius: 0px; padding: 0px 0px; min-height: 54px;
  font-size: 36px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ff7a21; color: #ffffff;
  border: 1px solid #ff7a21;
  border-radius: 128px; padding: 16px 32px; min-height: 84px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | `#ff7a21` | ヒーロー（画像） | 左 | 右（43:57） |
| 2 | 900px | `#ff7a21` | 1カラム・画像あり | 左 | 右（33:67） |
| 3 | 1220px | `#ff7a21` | 1カラム・画像あり | 右 | 左（64:36） |
| 4 | 1980px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 840px | — | 4カラム・画像あり | 中央 | 全幅 |
| 6 | 2920px | `#4db6ac` | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 1120px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 8 | 900px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 9 | 480px | — | 2カラム・画像あり | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#4db6ac` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（14） / `#ff7a21`（3） / `#fff8f4`（1） / `#4db6ac`（1）
- 見出しは左4／中央3。
- 2カラムの分け方は 43:57 / 33:67 / 64:36。半分ずつには割らない。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 24px;
  padding: 16px 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 8px 16px 0px;
}
```


## 丸いもの

角丸は 24px だが、**完全な円は別扱い**で 19 箇所ある（48px×8、16px×4、40px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 57枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（33枚）、2:3（12枚）、3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4db6ac }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#212121; --on:#212121 }
.section--main .btn--fill{ background:#212121; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:24px; padding:16px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ff7a21; color:#ffffff; border-radius:96px;
  padding:8px 8px; min-height:66px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#4db6ac` の面を全幅で交互に置く。主色は画面の21%を占めるだけ使う。
- 余白 168px と行間 null を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 24px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（24px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
