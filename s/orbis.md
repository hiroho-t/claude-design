# ここちを美しく ふうのデザイン

- 出典: https://www.orbis.co.jp/brand/
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／美容室･サロン･エステ･ヨガ／レスポンシブ

白地に `#e7eaeb` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 10px・行間 2、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e7eaeb;
  --sub: #e9d6d4;
  --ink: #424242;
  --ink-rev: #7e7e7e;
  --on: #e7eaeb;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJPs_Narrow", sans-serif;
  --font-en: "YakuHanJPs_Narrow", sans-serif;
  --fs-body: 10px;
  --lh-body: 2;
  --container: 1152px;
  --read: 772px;
  --section-y: 64px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.6% |
| 主色 | `#e7eaeb` | 7% |
| 副色 | `#e9d6d4` | 2.3% |

文字色は `#424242` / `#7e7e7e` / `#818688` / `#212121`。

- 主色 `#e7eaeb` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f7f7` | 1 | 0 | 0 | 0 |
| `#e7eaeb` | 1 | 0 | 3 | 0 |
| `#ffffff` | 3 | 0 | 0 | 0 |
| `#424242` | 0 | 96 | 2 | 0 |
| `#7e7e7e` | 0 | 21 | 0 | 0 |
| `#818688` | 0 | 10 | 0 | 0 |
| `#212121` | 0 | 5 | 0 | 0 |

- `#e7eaeb` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e7eaeb` |
| `#f7f7f7` | `#e7eaeb` |
| `#e7eaeb`（主色） | `#e7eaeb` |

```css
.section{ --on:#e7eaeb }                     /* 地の面 */
.section--main{ background:var(--main); color:#7e7e7e; --on:#7e7e7e }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#7e7e7e }
.section--main .btn--fill{ background:#7e7e7e; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanJPs_Narrow
- 欧文: YakuHanJPs_Narrow
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 | 上の余白 | 下の余白 |
|---|---|---|---|---|
| 大見出し | 38px | 1.4 | 5px | 104px |
| 見出し | 24px | — | — | — |
| 小見出し | 22px | 1.4 | 5px | 75px |
| リード | 16px | — | — | — |
| 本文 | 10px | 2 | — | — |

- 余白は margin ではなく**実際に描かれた間隔**。その要素の上端 − ひとつ上の文字要素の下端（下はその逆）で測っている。行間の余りぶんを含む。
- 「—」は見出しに使われていないサイズ。測る相手がないので数字が出ない。
- 上の余白は、セクションの先頭に来る見出しだとセクションの上下余白（64px）を含む。まとまりの中の間隔は「見出しのまとまり」を見る。

- 本文は 10px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## 見出しのまとまり

小さいラベルを見出しの上に置く型を 5箇所で使っている（見出し6箇所のうち）。
「近接」はここの間隔で決まるので、セクションの上下余白より先にこちらをそろえる。

| | 実測 |
|---|---|
| ラベルの文字 | 英字（大文字） |
| ラベルのサイズ | 12px |
| ラベルの字間 | 0.08em |
| ラベルの太さ | 400 |
| ラベルの色 | `#818688` |
| ラベル → 見出し | 5px |
| 見出しのサイズ | 22px |
| 見出し → 本文 | 75px |
| 罫線 | なし |
| 組み方 | **箱で包む**（ラベルと見出しが1つのまとまりとして囲まれている） |

```html
<div class="c-head">
  <p class="c-head__label">SERVICE</p>
  <h2 class="c-head__title">サービス</h2>
</div>
<p>本文…</p>
```

```css
.c-head__label{ font-size:12px; font-weight:400; letter-spacing:0.08em;
  color:#818688; text-transform:uppercase }
.c-head__title{ font-size:22px; line-height:1.4; margin-top:5px }
.c-head + *{ margin-top:75px }
```

- ラベルと見出しの間は 5px、見出しと本文の間は 75px。ラベル側を詰めて、本文側を空ける。この差がまとまりを作っている。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 772px
- セクションの上下余白: 64 / 168 / 272 / 40px（基本は 64px）
- 並びの間隔: 8 / 16 / 24 / 64px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768 / 668 / 600 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 10px / 行間 2 | 10px / 行間 2 |
| 見出し | 38px | 22px / 行間 1.4 |
| セクションの上下余白 | 64px | 64px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 8px |

- 本文は 10px → 10px、セクション余白は 64px → 64px（PCの100%）。
- 文字サイズの段は 20 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #959595;
  border: 1px solid #959595;
  border-radius: 50%; padding: 0px 0px; min-height: 68px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | — |
| 2 | 680px | — | 2カラム・画像あり | — | 全面 |
| 3 | 3160px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1620px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1040px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 880px | — | 1カラム・画像あり | — | 全面 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（3） / `#f7f7f7`（1） / `#e7eaeb`（1）
- 見出しは左1／中央2。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（80px×2、72px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 16枚使っている
- 比率は 3:4（6枚）、16:9（4枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```html
<section class="section">
  <div class="container">
    <div class="c-head">
      <p class="c-head__label">SERVICE</p>
      <h2 class="c-head__title">サービス</h2>
    </div>
    <p>本文…</p>
  </div>
</section>
```

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e7eaeb }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.c-head__label{ font-size:12px; font-weight:400; letter-spacing:0.08em; color:#818688 }
.c-head__title{ font-size:22px; line-height:1.4; margin-top:5px }
.c-head + *{ margin-top:75px }

.section--main{ background:var(--main); color:#7e7e7e; --on:#7e7e7e }
.section--main .btn--fill{ background:#7e7e7e; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#959595; border-radius:50%;
  padding:0px 0px; min-height:68px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:10px; --section-y:64px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e7eaeb` は文字と小さな部品にだけ使う。
- 余白 64px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
