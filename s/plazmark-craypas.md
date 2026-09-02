# プラズマインジケータ「PLAZMARK」 ふうのデザイン

- 出典: https://plazmark.craypas.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#3cc2ca` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 2.04、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #3cc2ca;
  --sub: #ebf1ef;
  --ink: #111111;
  --ink-rev: #ffffff;
  --on: #3cc2ca;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "futura", sans-serif;
  --fs-body: 14px;
  --lh-body: 2.04;
  --container: 1088px;
  --read: 932px;
  --section-y: 112px;
  --gap: 5px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.9% |
| 主色 | `#3cc2ca` | 6.8% |
| 副色 | `#ebf1ef` | 2.4% |
| 差し色 | `#c3e2df` | 2.3% |

文字色は `#111111` / `#ffffff` / `#062542` / `#12aabc`。

- 主色 `#3cc2ca` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 1px 1px 2px 0px inset`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f4f6f8` | 6 | 0 | 0 | 0 |
| `#ffffff` | 23 | 29 | 12 | 4 |
| `#f0ff49` | 11 | 2 | 5 | 0 |
| `#12aabc` | 6 | 24 | 3 | 4 |
| `#0e578a` | 3 | 14 | 0 | 1 |
| `#111111` | 0 | 63 | 0 | 0 |
| `#062542` | 0 | 19 | 0 | 0 |

- `#3cc2ca` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#3cc2ca` |
| `#f4f6f8` | `#3cc2ca` |
| `#f0ff49` | `#3cc2ca` |

```css
.section{ --on:#3cc2ca }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: futura
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 21px | 1.45 |
| 見出し | 19px | — |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 14px | 2.04 |
| 補助 | 12px | — |

- 本文は 14px・行間 2.04。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1088px／読ませる段は 932px
- セクションの上下余白: 112 / 92 / 48 / 36px（基本は 112px）
- 並びの間隔: 5px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 767 / 760 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2.04 | 13px / 行間 1.8 |
| セクションの上下余白 | 112px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 5px | —px |

- 本文は 14px → 13px、セクション余白は 112px → 32px（PCの29%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #111111;
  border-radius: 0px; padding: 0px 0px; min-height: 49px;
  font-size: 16px; font-weight: 600; letter-spacing: 1.56082px;
}
.btn-sub{
  background: transparent; color: #12aabc;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 16px; font-weight: 300; letter-spacing: 1.56082px;
}
.btn-sub{
  background: #ffffff; color: #12aabc;
  border: 2px solid #ffffff;
  border-radius: 9999px; padding: 11px 0px; min-height: 44px;
  font-size: 16px; font-weight: 600; letter-spacing: 1.56082px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#f4f6f8` | ヒーロー（画像） | — | 全面 |
| 2 | 320px | — | 帯・区切り | — | 全面 |
| 3 | 1740px | — | 3カラム・画像あり | 右 | 見出しの下 |
| 4 | 940px | — | 1カラム・画像あり | 左 | — |
| 5 | 1440px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 6 | 1040px | `#f4f6f8` | 3カラム・画像あり | 左 | 見出しの下 |
| 7 | 540px | — | 1カラム・画像あり | 左 | — |
| 8 | 500px | — | 3カラム・画像あり | — | 全面 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（8） / `#f4f6f8`（2） / `#f0ff49`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #12aabc; color: #ffffff;
  border-radius: 5px; padding: 7px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 17 箇所ある（40px×6、32px×5、48px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている
- 比率は 1:1（16枚）、3:2（3枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3cc2ca }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#111111; border-radius:0px;
  padding:0px 0px; min-height:49px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:13px; --section-y:32px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#3cc2ca` は文字と小さな部品にだけ使う。
- 余白 112px と行間 2.04 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.04 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
