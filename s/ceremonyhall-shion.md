# 大台町・大紀町の水と緑に囲まれた安らぎの葬儀会館 ふうのデザイン

- 出典: https://ceremonyhall-shion.com/
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／寺･神社･葬儀･仏壇／レスポンシブ

白地に `#b78cc5` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 2、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b78cc5;
  --ink: #151515;
  --ink-rev: #ffffff;
  --on: #b78cc5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Noto Serif JP", sans-serif;
  --fs-body: 13px;
  --lh-body: 2;
  --container: 1136px;
  --read: 596px;
  --section-y: 88px;
  --gap: 30px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 92.4% |
| 主色 | `#ececec` | 3.2% |

文字色は `#151515` / `#ffffff` / `#b78cc5` / `#000000`。

- 主色 `#b78cc5` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 16 | 22 | 1 | 8 |
| `#beaac5` | 1 | 0 | 0 | 0 |
| `#ac88b9` | 1 | 0 | 0 | 1 |
| `#151515` | 0 | 53 | 6 | 0 |
| `#b78cc5` | 0 | 13 | 0 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#b78cc5` は文字色として13箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#b78cc5` |
| `#beaac5` | `#b78cc5` |

```css
.section{ --on:#b78cc5 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Noto Serif JP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 | 上の余白 | 下の余白 |
|---|---|---|---|---|
| 大見出し | 32px | 1 | 140px | 85px |
| 見出し | 30px | 1 | 30px | 90px |
| 小見出し | 18px | — | — | — |
| リード | 16px | — | — | — |
| 本文 | 13px | 2 | — | — |
| 補助 | 12px | — | — | — |

- 余白は margin ではなく**実際に描かれた間隔**。その要素の上端 − ひとつ上の文字要素の下端（下はその逆）で測っている。行間の余りぶんを含む。
- 「—」は見出しに使われていないサイズ。測る相手がないので数字が出ない。
- 上の余白は、セクションの先頭に来る見出しだとセクションの上下余白（88px）を含む。まとまりの中の間隔は「見出しのまとまり」を見る。

- 本文は 13px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## 見出しのまとまり

小さいラベルを見出しの上に置く型を 5箇所で使っている。
「近接」はここの間隔で決まるので、セクションの上下余白より先にこちらをそろえる。

| | 実測 |
|---|---|
| ラベルの文字 | 英字 |
| ラベルのサイズ | 16px |
| ラベルの字間 | 0.1em |
| ラベルの太さ | 500 |
| ラベルの色 | `#b78cc5` |
| ラベル → 見出し | 30px |
| 見出しのサイズ | 30px |
| 見出し → 本文 | 90px |
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
.c-head__label{ font-size:16px; font-weight:500; letter-spacing:0.1em;
  color:#b78cc5; text-transform:uppercase }
.c-head__title{ font-size:30px; line-height:1; margin-top:30px }
.c-head + *{ margin-top:90px }
```

- ラベルと見出しの間は 30px、見出しと本文の間は 90px。ラベル側を詰めて、本文側を空ける。この差がまとまりを作っている。

## レイアウト

- コンテンツ幅: 最大 1136px／読ませる段は 596px
- セクションの上下余白: 88 / 72 / 100 / 212px（基本は 88px）
- 並びの間隔: 8 / 25 / 30 / 35px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1180 / 865 / 540 / 330px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 2 | 13px / 行間 2 |
| 見出し | 32px | 27px / 行間 1.75 |
| セクションの上下余白 | 88px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 30px | 14px |

- 本文は 13px → 13px、セクション余白は 88px → 24px（PCの27%）。
- 文字サイズの段は 24 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #151515;
  border: 1px solid #161515;
  border-radius: 0px; padding: 0px 15px; min-height: 48px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.64px;
}
.btn-sub{
  background: transparent; color: #151515;
  border: 1px solid #161515;
  border-radius: 6px; padding: 12px 24px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.42px;
}
.btn-sub{
  background: #ac88b9; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 6px; padding: 12px 24px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.42px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 580px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 580px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 580px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 580px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 580px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 580px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 580px | — | 1カラム・画像あり | — | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（8） / `#beaac5`（1）


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 40px 40px;
}
```


## 画像

- 25枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 1:1（11枚）、3:4（2枚）、3:2（2枚）
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

.section{ padding:var(--section-y) 0; --on:#b78cc5 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:580px; display:grid; align-content:center }
.c-head__label{ font-size:16px; font-weight:500; letter-spacing:0.1em; color:#b78cc5 }
.c-head__title{ font-size:30px; line-height:1; margin-top:30px }
.c-head + *{ margin-top:90px }

.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#151515; border-radius:0px;
  padding:0px 15px; min-height:48px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:865px){
  :root{ --fs-body:13px; --section-y:24px; --gap:14px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b78cc5` は文字と小さな部品にだけ使う。
- 余白 88px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。
