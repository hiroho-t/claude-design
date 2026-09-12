# 株式会社天辻鋼球製作所 ふうのデザイン

- 出典: https://www.aksball.co.jp/
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#1c2734` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 1.8、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1c2734;
  --sub: #1c2734;
  --ink: #434750;
  --ink-rev: #dee2eb;
  --on: #1c2734;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.8;
  --container: 936px;
  --read: 720px;
  --section-y: 56px;
  --gap: 37px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.7% |
| 主色 | `#cdd4db` | 6.3% |
| 副色 | `#1c2734` | 2.8% |
| 差し色 | `#a4b0c1` | 1.9% |

文字色は `#434750` / `#dee2eb` / `#a0acba` / `#ffffff`。

- 主色 `#1c2734` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f7f9` | 1 | 0 | 0 | 0 |
| `#a0acba` | 11 | 27 | 0 | 0 |
| `#ffffff` | 9 | 10 | 2 | 1 |
| `#e60012` | 14 | 8 | 16 | 3 |
| `#434750` | 0 | 76 | 0 | 0 |
| `#dee2eb` | 0 | 4 | 10 | 0 |

- `#1c2734` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1c2734` |
| `#f6f7f9` | `#1c2734` |
| `#a0acba` | `#1c2734` |

```css
.section{ --on:#1c2734 }                     /* 地の面 */
.section--main{ background:var(--main); color:#dee2eb; --on:#dee2eb }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#dee2eb }
.section--main .btn--fill{ background:#dee2eb; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 | 上の余白 | 下の余白 |
|---|---|---|---|---|
| 大見出し | 187px | — | — | — |
| 見出し | 62px | 1.4 | 7px | 45px |
| 小見出し | 46px | 1.4 | 7px | 49px |
| リード | 29px | 1.8 | 318px | 124px |
| 本文 | 18px | 1.8 | — | — |
| 補助 | 16px | — | — | — |
| 注記 | 14px | — | — | — |

- 余白は margin ではなく**実際に描かれた間隔**。その要素の上端 − ひとつ上の文字要素の下端（下はその逆）で測っている。行間の余りぶんを含む。
- 「—」は見出しに使われていないサイズ。測る相手がないので数字が出ない。
- 上の余白は、セクションの先頭に来る見出しだとセクションの上下余白（56px）を含む。まとまりの中の間隔は「見出しのまとまり」を見る。

- 本文は 18px・行間 1.8。

## 見出しのまとまり

小さいラベルを見出しの上に置く型を 5箇所で使っている（見出し12箇所のうち）。
「近接」はここの間隔で決まるので、セクションの上下余白より先にこちらをそろえる。

| | 実測 |
|---|---|
| ラベルの文字 | 英字 |
| ラベルのサイズ | 14px |
| ラベルの字間 | 0.065em |
| ラベルの太さ | 400 |
| ラベルの色 | `#a0acba` |
| ラベル → 見出し | 43px |
| 見出しのサイズ | 23px |
| 見出し → 本文 | 19px |
| 罫線 | なし |
| 組み方 | **兄弟に並べる**（囲まずに続けて置く） |

```html
<p class="c-head__label">SERVICE</p>
<h2 class="c-head__title">サービス</h2>
<p>本文…</p>
```

```css
.c-head__label{ font-size:14px; font-weight:400; letter-spacing:0.065em;
  color:#a0acba; text-transform:uppercase }
.c-head__title{ font-size:23px; line-height:1.4; margin-top:43px }
.c-head__title + *{ margin-top:19px }
```

- ラベルと見出しの間は 43px、見出しと本文の間は 19px。この2つを同じにしない。

## レイアウト

- コンテンツ幅: 最大 936px／読ませる段は 720px
- セクションの上下余白: 56 / 112 / 132 / 76px（基本は 56px）
- 並びの間隔: 16 / 18 / 37 / 56px
- 角丸: 0px が基本。大きな面だけ 19px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1299 / 1023 / 767 / 567 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.8 | 16px / 行間 1.8 |
| 見出し | 187px | 50px / 行間 1.4 |
| セクションの上下余白 | 56px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 37px | 16px |

- 本文は 18px → 16px、セクション余白は 56px → 32px（PCの57%）。
- 文字サイズの段は 101 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #a0acba;
  border-radius: 0px; padding: 0px 0px; min-height: 65px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.886939px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 67px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.886939px;
}
.btn-sub{
  background: #e60012; color: #ffffff;
  border: 1px solid #e60012;
  border-radius: 999px; padding: 12px 9px; min-height: 67px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.886939px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 4480px | — | ヒーロー | — | — |
| 2 | 900px | — | 5カラム・画像あり | — | 全面 |
| 3 | 1700px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 4 | 940px | `#f6f7f9` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 760px | — | 1カラム・画像あり | 左 | 右（28:72） |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#f6f7f9`（1） / `#a0acba`（1）
- 見出しは左1／中央2。
- 2カラムの分け方は 28:72。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #e60012;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 1px 13px; font-size: 9px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 24 箇所ある（48px×17、40px×4、72px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている
- 比率は 3:4（16枚）、3:2（6枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```html
<section class="section">
  <div class="container">
    <p class="c-head__label">SERVICE</p>
    <h2 class="c-head__title">サービス</h2>
    <p>本文…</p>
  </div>
</section>
```

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1c2734 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:4480px; display:grid; align-content:center }
.c-head__label{ font-size:14px; font-weight:400; letter-spacing:0.065em; color:#a0acba }
.c-head__title{ font-size:23px; line-height:1.4; margin-top:43px }
.c-head__title + *{ margin-top:19px }

.section--main{ background:var(--main); color:#dee2eb; --on:#dee2eb }
.section--main .btn--fill{ background:#dee2eb; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#a0acba; border-radius:0px;
  padding:0px 0px; min-height:65px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:16px; --section-y:32px; --gap:16px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#1c2734` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 19px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
