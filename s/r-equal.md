# 株式会社アールイコール ふうのデザイン

- 出典: https://r-equal.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／レスポンシブ／1カラム

#f8f8f8 の地に `#3a9ac9` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f8f8f8;
  --main: #3a9ac9;
  --sub: #dbddda;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #3a9ac9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "source-han-sans-japanese", sans-serif;
  --font-en: "source-han-sans-japanese", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 600px;
  --read: 1200px;
  --section-y: 52px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f8f8f8` | 64.1% |
| 主色 | `#333333` | 17.2% |
| 副色 | `#dbddda` | 4.2% |
| 差し色 | `#3a9ac9` | 3.4% |
| 差し色 | `#0896dc` | 3.2% |
| 差し色 | `#b1c6d2` | 2.3% |

文字色は `#000000` / `#ffffff` / `#159cde` / `#1a1a1a`。

- 主色 `#3a9ac9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.08) 0px 0px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f8f8f8` | 3 | 0 | 0 | 0 |
| `#333333` | 1 | 0 | 0 | 0 |
| `#159cde` | 3 | 3 | 0 | 1 |
| `#ffffff` | 1 | 20 | 0 | 0 |
| `#000000` | 0 | 8 | 0 | 0 |
| `#1a1a1a` | 0 | 6 | 0 | 0 |

- `#3a9ac9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f8f8f8`（地） | `#3a9ac9` |
| `#159cde` | `#ffffff` |
| `#333333` | `#ffffff` |

```css
.section{ --on:#3a9ac9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: source-han-sans-japanese
- 欧文: source-han-sans-japanese
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 88px | — |
| 見出し | 50px | — |
| 小見出し | 45px | — |
| リード | 40px | — |
| リード | 18px | — |
| 本文 | 16px | 2 |
| 補助 | 15px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 600px／読ませる段は 1200px
- セクションの上下余白: 52 / 72 / 120 / 148px（基本は 52px）
- 並びの間隔: 40px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1070 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 16px / 行間 2 |
| 見出し | 88px | 28px |
| セクションの上下余白 | 52px | 36px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 40px | 40px |

- 本文は 16px → 16px、セクション余白は 52px → 36px（PCの69%）。
- 文字サイズの段は 28 / 26 / 16 / 11 / 10px。

## ボタン

```css
.btn{
  background: #159cde; color: #ffffff;
  border-radius: 51px; padding: 0px 0px; min-height: 88px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 右（63:37） |
| 2 | 980px | — | 1カラム・画像あり | — | — |
| 3 | 820px | — | 1カラム・画像あり | — | 全面 |
| 4 | 880px | — | 1カラム・画像あり | — | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f8f8f8`（3） / `#159cde`（1） / `#333333`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 63:37。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 13枚使っている
- 比率は 1:1（7枚）、4:3（2枚）、2:3（1枚）
- 角丸 16px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3a9ac9 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#159cde; color:#ffffff; border-radius:51px;
  padding:0px 0px; min-height:88px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:16px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:36px; --gap:40px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f8f8f8` のまま。主色 `#3a9ac9` は文字と小さな部品にだけ使う。
- 余白 52px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 16px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
