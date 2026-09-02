# 日亜鋼業株式会社 ふうのデザイン

- 出典: https://www.nichiasteel.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#2b84b8` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2b84b8;
  --sub: #e3eff6;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #2b84b8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Din Demi", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1172px;
  --read: 1168px;
  --section-y: 112px;
  --gap: 82px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.3% |
| 主色 | `#2b84b8` | 5.3% |
| 副色 | `#e3eff6` | 3% |
| 差し色 | `#63604f` | 2.2% |
| 差し色 | `#424a3f` | 2.2% |
| 差し色 | `#27322d` | 2.1% |

文字色は `#000000` / `#ffffff` / `#006eaf` / `#7e889a`。

- 主色 `#2b84b8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 6 | 33 | 0 | 0 |
| `#f5f8fb` | 3 | 0 | 0 | 0 |
| `#006eaf` | 5 | 13 | 1 | 2 |
| `#525760` | 10 | 8 | 2 | 7 |
| `#000000` | 0 | 59 | 0 | 0 |
| `#7e889a` | 0 | 14 | 0 | 0 |

- `#2b84b8` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#2b84b8` |
| `#006eaf` | `#ffffff` |
| `#f4f4f6` | `#2b84b8` |
| `#f5f8fb` | `#2b84b8` |

```css
.section{ --on:#2b84b8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Hiragino Sans（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Din Demi
- ウェイトは 400 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.1 |
| 見出し | 29px | — |
| 小見出し | 23px | 1.6 |
| リード | 17px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1172px／読ませる段は 1168px
- セクションの上下余白: 112 / 92 / 76 / 140px（基本は 112px）
- 並びの間隔: 14 / 19 / 82 / 93px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1299 / 1023 / 767 / 567px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 2 |
| 見出し | 56px | 30px / 行間 1.1 |
| セクションの上下余白 | 112px | 32px |
| 左右の余白 | — | 22px |
| 並びの間隔 | 82px | 10px |

- 本文は 16px → 13px、セクション余白は 112px → 32px（PCの29%）。
- 文字サイズの段は 21 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.56082px;
}
.btn-sub{
  background: #525760; color: #ffffff;
  border-radius: 9999px; padding: 4px 18px; min-height: 31px;
  font-size: 12px; font-weight: 400; letter-spacing: 1.56082px;
}
.btn-sub{
  background: #525760; color: #ffffff;
  border-radius: 9999px; padding: 7px 7px; min-height: 45px;
  font-size: 14px; font-weight: 600; letter-spacing: 1.56082px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1200px | — | 1カラム・画像あり | — | 全面 |
| 3 | 3440px | — | 4カラム・画像あり | 左 | 全幅 |
| 4 | 1140px | — | 5カラム・画像あり | 右 | 左（48:52） |
| 5 | 1220px | `#f5f8fb` | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 720px | — | 1カラム・画像あり | — | 全面 |
| 7 | 1000px | `#f4f4f6` | 4カラム・画像あり | 左 | — |
| 8 | 820px | — | 1カラム・画像あり | 左 | 右（69:31） |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#006eaf`（2） / `#f4f4f6`（2） / `#f5f8fb`（1）
- 見出しは左3／中央1。
- 2カラムの分け方は 48:52 / 69:31。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #525760; color: #ffffff;
  border-radius: 999px; padding: 4px 18px; font-size: 12px;
}
```

## 画像

- 26枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 3:4（5枚）、16:9（5枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2b84b8 }
.container{ width:min(100% - 44px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:13px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 44px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#2b84b8` は文字と小さな部品にだけ使う。
- 余白 112px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。
