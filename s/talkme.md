# あなたのいばしょ ふうのデザイン

- 出典: https://talkme.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

#faf9f4 の地に `#799db3` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #faf9f4;
  --main: #799db3;
  --sub: #d0d4d8;
  --ink: #002144;
  --ink-rev: #ffffff;
  --on: #799db3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", "Noto Sans JP", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 648px;
  --read: 920px;
  --section-y: 40px;
  --gap: 50px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#faf9f4` | 84.2% |
| 主色 | `#e3e6ed` | 12.2% |
| 副色 | `#d0d4d8` | 1.9% |
| 差し色 | `#799db3` | 1.7% |

文字色は `#002144` / `#ffffff` / `#0198da` / `#e13009`。

- 主色 `#799db3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 0px 2px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#faf9f4` | 4 | 0 | 0 | 0 |
| `#ffffff` | 24 | 31 | 2 | 2 |
| `#0198da` | 7 | 14 | 1 | 0 |
| `#e13009` | 5 | 17 | 1 | 0 |
| `#002144` | 10 | 103 | 1 | 0 |

- `#799db3` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#799db3` |
| `#faf9f4`（地） | `#799db3` |
| `#0198da` | `#ffffff` |
| `#e13009` | `#ffffff` |

```css
.section{ --on:#799db3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#faf9f4` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: A1ゴシック M JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic Antique**、なければ Noto Sans JP
- 欧文: Material Icons
- ウェイトは 400 / 700 / 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.45 |
| 見出し | 32px | 1.6 |
| 小見出し | 22px | 1.4 |
| リード | 20px | 1.6 |
| リード | 18px | 1.6 |
| リード | 16px | — |
| 本文 | 15px | 2 |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 648px／読ませる段は 920px
- セクションの上下余白: 40 / 60 / 80 / 92px（基本は 40px）
- 並びの間隔: 20 / 50px
- 角丸: 0px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 15px / 行間 1.6 |
| 見出し | 36px | 21px / 行間 1.45 |
| セクションの上下余白 | 40px | 24px |
| 左右の余白 | — | 29px |
| 並びの間隔 | 50px | 20px |

- 本文は 15px → 15px、セクション余白は 40px → 24px（PCの60%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #e13009;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.75px;
}
.btn-sub{
  background: transparent; color: #0198da;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.75px;
}
.btn-sub{
  background: #ffffff; color: #0198da;
  border: 1px solid #ffffff;
  border-radius: 36px; padding: 0px 0px; min-height: 70px;
  font-size: 18px; font-weight: 400; letter-spacing: 1.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 680px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 2120px | `#faf9f4` | 4カラム・画像あり | 中央 | — |
| 3 | 880px | — | 2カラム | 中央 | — |
| 4 | 1020px | — | 4カラム・画像あり | 左 | 右（16:84） |
| 5 | 1340px | — | 5カラム・画像あり | 左 | 右（16:84） |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（14） / `#faf9f4`（4） / `#0198da`（4） / `#e13009`（3）
- 見出しは左3／中央2。
- 2カラムの分け方は 16:84 / 16:84。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 12px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 13 箇所ある（24px×10、48px×1、72px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 10枚使っている
- 比率は 16:9（8枚）、2:3（1枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#799db3 }
.container{ width:min(100% - 58px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:680px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:12px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#e13009; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:15px; --section-y:24px; --gap:20px; }
  .container{ width:calc(100% - 58px) }
}
```

## 守ること

やること

- 地は `#faf9f4` のまま。主色 `#799db3` は文字と小さな部品にだけ使う。
- 余白 40px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 12px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
