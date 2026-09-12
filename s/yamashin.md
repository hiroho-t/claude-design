# 山進産業はステンレスをはじめとした特殊鋼を扱う金属専門商社 ふうのデザイン

- 出典: https://yamashin.yamco.co.jp/
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#d9000c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.5、セクション間 240px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d9000c;
  --sub: #303131;
  --ink: #ffffff;
  --ink-rev: #222222;
  --on: #d9000c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YuGothic", sans-serif;
  --font-en: "YuGothic", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.5;
  --container: 1270px;
  --read: 800px;
  --section-y: 240px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 44.8% |
| 主色 | `#151515` | 15.5% |
| 副色 | `#303131` | 7.5% |
| 差し色 | `#3e4246` | 6.5% |
| 差し色 | `#edeeee` | 5.8% |
| 差し色 | `#b0aeae` | 4.8% |

文字色は `#ffffff` / `#222222` / `#929292` / `#d9000c`。

- 主色 `#d9000c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#000000` | 1 | 0 | 0 | 0 |
| `#ffffff` | 1 | 43 | 2 | 0 |
| `#f6f6f4` | 4 | 0 | 0 | 4 |
| `#d9000c` | 1 | 9 | 3 | 0 |
| `#222222` | 0 | 24 | 0 | 0 |
| `#929292` | 0 | 26 | 0 | 0 |

- `#d9000c` は文字色として9箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも3箇所。

## 文字

- 和文: YuGothic
- 欧文: YuGothic
- ウェイトは 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 | 上の余白 | 下の余白 |
|---|---|---|---|---|
| 大見出し | 60px | 1 | 347px | 25px |
| 見出し | 32px | — | — | — |
| 小見出し | 19px | 1 | 15px | 193px |
| 本文 | 16px | 1 | 18px | 66px |
| 補助 | 15px | — | — | — |
| 注記 | 14px | — | — | — |

- 余白は margin ではなく**実際に描かれた間隔**。その要素の上端 − ひとつ上の文字要素の下端（下はその逆）で測っている。行間の余りぶんを含む。
- 「—」は見出しに使われていないサイズ。測る相手がないので数字が出ない。
- 上の余白は、セクションの先頭に来る見出しだとセクションの上下余白（240px）を含む。まとまりの中の間隔は「見出しのまとまり」を見る。

- 本文は 16px・行間 2.5。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## 見出しのまとまり

小さいラベルを見出しの上に置く型を 6箇所で使っている。
「近接」はここの間隔で決まるので、セクションの上下余白より先にこちらをそろえる。

| | 実測 |
|---|---|
| ラベルの文字 | 英字 |
| ラベルのサイズ | 12px |
| ラベルの字間 | 0.05em |
| ラベルの太さ | 400 |
| ラベルの色 | `#ffffff` |
| ラベル → 見出し | 15px |
| 見出しのサイズ | 19px |
| 見出し → 本文 | 193px |
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
.c-head__label{ font-size:12px; font-weight:400; letter-spacing:0.05em;
  color:#ffffff; text-transform:uppercase }
.c-head__title{ font-size:19px; line-height:1; margin-top:15px }
.c-head + *{ margin-top:193px }
```

- ラベルと見出しの間は 15px、見出しと本文の間は 193px。ラベル側を詰めて、本文側を空ける。この差がまとまりを作っている。

## レイアウト

- コンテンツ幅: 最大 1270px／読ませる段は 800px
- セクションの上下余白: 240 / 220 / 56 / 60px（基本は 240px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 25px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1460 / 1240 / 1150 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.5 | 15px / 行間 2 |
| セクションの上下余白 | 240px | 132px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 15px、セクション余白は 240px → 132px（PCの55%）。
- 文字サイズの段は 46 / 22 / 20 / 15 / 12px。

## ボタン

```css
.btn{
  background: #f6f6f4; color: #002c45;
  border-radius: 0px; padding: 0px 0px; min-height: 70px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: transparent; color: #d9000c;
  border: 1px solid #d9000c;
  border-radius: 25px; padding: 0px 12px; min-height: 26px;
  font-size: 14px; font-weight: 500; letter-spacing: 1.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1040px | — | 1カラム・画像あり | 左 | 右（45:55） |
| 3 | 1120px | — | 3カラム | 中央 | — |
| 4 | 1120px | — | 6カラム・画像あり | 左 | — |
| 5 | 900px | — | 1カラム・画像あり | 右 | 左（35:65） |
| 6 | 960px | — | 1カラム・画像あり | 左 | — |
| 7 | 500px | — | 1カラム・画像あり | 中央 | 右（12:88） |
| 8 | 960px | `#000000` | 1カラム・画像あり | — | — |

- 全8セクション。
- 使われている面の色: `#000000`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 45:55 / 35:65 / 12:88。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #d9000c;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 12px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（176px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 5枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 2:3（3枚）、3:2（1枚）、16:9（1枚）
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

.section{ padding:var(--section-y) 0; --on:#d9000c }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.c-head__label{ font-size:12px; font-weight:400; letter-spacing:0.05em; color:#ffffff }
.c-head__title{ font-size:19px; line-height:1; margin-top:15px }
.c-head + *{ margin-top:193px }

.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f6f6f4; color:#002c45; border-radius:0px;
  padding:0px 0px; min-height:70px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:132px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d9000c` は文字と小さな部品にだけ使う。
- 余白 240px と行間 2.5 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 25px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
