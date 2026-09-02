# リニエ シューレ ふうのデザイン

- 出典: https://schule.linie-group.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／福祉･介護／ベビー･子ども･子育て

#f4f4f4 の地に `#dfcfb0` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.5、セクション間 76px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f4f4f4;
  --main: #dfcfb0;
  --sub: #dfcfb0;
  --ink: #56534f;
  --ink-rev: #ffffff;
  --on: #dfcfb0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "source-han-sans-japanese", sans-serif;
  --font-en: "source-han-sans-japanese", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.5;
  --container: 920px;
  --read: 656px;
  --section-y: 76px;
  --gap: 11px;
  --radius: 14px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f4f4f4` | 75.4% |
| 主色 | `#d8e2dc` | 8.4% |
| 副色 | `#dfcfb0` | 3.9% |
| 差し色 | `#5f9081` | 3.8% |
| 差し色 | `#5a5552` | 2.9% |
| 差し色 | `#979e8e` | 2.9% |

文字色は `#56534f` / `#ffffff` / `#719c8b` / `#969696`。

- 主色 `#dfcfb0` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 14.4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 19 | 30 | 5 | 3 |
| `#ebe5d9` | 1 | 0 | 0 | 0 |
| `#f4f4f4` | 1 | 0 | 0 | 0 |
| `#e6e6e6` | 10 | 0 | 0 | 0 |
| `#56534f` | 4 | 106 | 2 | 4 |
| `#719c8b` | 4 | 21 | 1 | 3 |
| `#969696` | 0 | 6 | 33 | 0 |

- `#dfcfb0` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#dfcfb0` |
| `#ebe5d9` | `#dfcfb0` |
| `#f4f4f4`（地） | `#dfcfb0` |

```css
.section{ --on:#dfcfb0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f4f4f4` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: source-han-sans-japanese
- 欧文: source-han-sans-japanese
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 29px | 1.08 |
| 見出し | 23px | 1.35 |
| 小見出し | 22px | 1.5 |
| リード | 16px | — |
| 本文 | 14px | 1.5 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 920px／読ませる段は 656px
- セクションの上下余白: 76 / 92 / 36 / 40px（基本は 76px）
- 並びの間隔: 4 / 9 / 11 / 41px
- 角丸: 14px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 768 / 641 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 29px | 25px / 行間 1.08 |
| セクションの上下余白 | 76px | 64px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 11px | 16px |

- 本文は 14px → 12px、セクション余白は 76px → 64px（PCの84%）。
- 文字サイズの段は 19 / 17 / 16 / 12 / 10px。

## ボタン

```css
.btn{
  background: #56534f; color: #ffffff;
  border: 1px solid #969696;
  border-radius: 14px; padding: 14px 18px; min-height: 90px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.72px;
}
.btn-sub{
  background: transparent; color: #719c8b;
  border-radius: 0px; padding: 0px 0px; min-height: 36px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #719c8b;
  border: 1px solid #d9d8d6;
  border-radius: 5px; padding: 0px 12px; min-height: 36px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 300px | — | 6カラム・画像あり | — | 全面 |
| 3 | 1660px | — | 3カラム・画像あり | — | 全幅 |
| 4 | 1200px | — | 2カラム・画像あり | 左 | 右（35:65） |
| 5 | 1620px | — | 6カラム・画像あり | 中央 | 左（24:76） |
| 6 | 440px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 7 | 800px | — | 3カラム・画像あり | 左 | 右（19:81） |
| 8 | 500px | `#ffffff` | 2カラム・画像あり | 左 | 右（16:84） |
| 9 | 660px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（10） / `#ebe5d9`（1） / `#f4f4f4`（1）
- 見出しは左4／中央2。
- 2カラムの分け方は 35:65 / 24:76 / 19:81 / 16:84。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 14px;
  padding: 26px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 14.4px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #e8e884; color: #56534f;
  border-radius: 999px; padding: 0px 14px; font-size: 11px;
}
```

## 丸いもの

角丸は 14px だが、**完全な円は別扱い**で 15 箇所ある（48px×11、32px×2、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 50枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（15枚）、16:9（13枚）、1:1（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dfcfb0 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:14px; padding:26px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#56534f; color:#ffffff; border-radius:14px;
  padding:14px 18px; min-height:90px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:64px; --gap:16px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#f4f4f4` のまま。主色 `#dfcfb0` は文字と小さな部品にだけ使う。
- 余白 76px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 14px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（14px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
