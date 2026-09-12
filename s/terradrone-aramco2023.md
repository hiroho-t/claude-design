# 資金調達特設サイト ふうのデザイン

- 出典: https://fundingwebsite2023.terra-drone.net/
- 実測: 2026-09-12／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 特設サイト･キャンペーンサイト･プロモーションサイト／Web･IT･XR･デジタル･テクノロジー／製造業･工業･メーカー･商社･物流

#edf0f2 の地に `#c9dae6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #edf0f2;
  --main: #c9dae6;
  --sub: #4f6662;
  --ink: #2e3033;
  --ink-rev: #5c6166;
  --on: #c9dae6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto2", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1076px;
  --read: 968px;
  --section-y: 48px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#edf0f2` | 84.3% |
| 主色 | `#c9dae6` | 3.1% |
| 副色 | `#4f6662` | 2.7% |
| 差し色 | `#273e3e` | 2.1% |
| 差し色 | `#6d8b88` | 1.8% |
| 差し色 | `#c5c5c7` | 1.8% |

文字色は `#2e3033` / `#5c6166` / `#45484d` / `#006ae4`。

- 主色 `#c9dae6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#edf0f2` | 2 | 0 | 0 | 0 |
| `#adbccc` | 1 | 0 | 0 | 0 |
| `#2e3033` | 9 | 39 | 8 | 0 |
| `#c0c5cc` | 0 | 0 | 3 | 0 |
| `#5c6166` | 0 | 33 | 0 | 0 |
| `#45484d` | 0 | 3 | 0 | 0 |
| `#006ae4` | 0 | 11 | 0 | 0 |

- `#c9dae6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#edf0f2`（地） | `#c9dae6` |
| `#2e3033` | `#5c6166` |
| `#adbccc` | `#c9dae6` |

```css
.section{ --on:#c9dae6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#5c6166; --on:#5c6166 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#5c6166 }
.section--main .btn--fill{ background:#5c6166; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Hiragino Sans（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Roboto2
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 | 上の余白 | 下の余白 |
|---|---|---|---|---|
| 大見出し | 54px | 1.4 | — | 55px |
| 見出し | 32px | 1 | 50px | 58px |
| 小見出し | 29px | 1.6 | 36px | 29px |
| リード | 22px | 2 | 13px | 112px |
| 本文 | 14px | 2 | — | — |
| 補助 | 13px | — | — | — |
| 注記 | 12px | — | — | — |

- 余白は margin ではなく**実際に描かれた間隔**。その要素の上端 − ひとつ上の文字要素の下端（下はその逆）で測っている。行間の余りぶんを含む。
- 「—」は見出しに使われていないサイズ。測る相手がないので数字が出ない。
- 上の余白は、セクションの先頭に来る見出しだとセクションの上下余白（48px）を含む。まとまりの中の間隔は「見出しのまとまり」を見る。

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## 見出しのまとまり

小さいラベルを見出しの上に置く型を 6箇所で使っている（見出し14箇所のうち）。
「近接」はここの間隔で決まるので、セクションの上下余白より先にこちらをそろえる。

| | 実測 |
|---|---|
| ラベルの文字 | 和文 |
| ラベルのサイズ | 13px |
| ラベルの字間 | 0.057em |
| ラベルの太さ | 500 |
| ラベルの色 | `#5c6166` |
| ラベル → 見出し | 13px |
| 見出しのサイズ | 22px |
| 見出し → 本文 | 112px |
| 罫線 | なし |
| 組み方 | **兄弟に並べる**（囲まずに続けて置く） |

```html
<p class="c-head__label">私たちの仕事</p>
<h2 class="c-head__title">サービス</h2>
<p>本文…</p>
```

```css
.c-head__label{ font-size:13px; font-weight:500; letter-spacing:0.057em;
  color:#5c6166 }
.c-head__title{ font-size:22px; line-height:2; margin-top:13px }
.c-head__title + *{ margin-top:112px }
```

- ラベルと見出しの間は 13px、見出しと本文の間は 112px。ラベル側を詰めて、本文側を空ける。この差がまとまりを作っている。

## レイアウト

- コンテンツ幅: 最大 1076px／読ませる段は 968px
- セクションの上下余白: 48 / 2072 / 128 / 108px（基本は 48px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 834 / 769 / 768 / 560 / 559px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 16px / 行間 1.88 |
| セクションの上下余白 | 48px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 16px、セクション余白は 48px → 40px（PCの83%）。
- 文字サイズの段は 25 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #2e3033;
  border: 1px solid #c0c5cc;
  border-radius: 30px; padding: 13px 51px; min-height: 42px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.72px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1980px | — | 1カラム・画像あり | 右 | 見出しの下 |
| 3 | 860px | — | 1カラム・画像あり | 右 | 左（44:56） |
| 4 | 9180px | — | 6カラム・画像あり | — | 全幅 |
| 5 | 1080px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 6 | 1420px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1940px | — | 1カラム・画像あり | 左 | 右（16:84） |
| 8 | 940px | `#adbccc` | 6カラム・画像あり | — | 全面 |
| 9 | 500px | — | 2カラム | 左 | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#edf0f2`（2） / `#2e3033`（1） / `#adbccc`（1）
- 見出しは左3／中央1。
- 2カラムの分け方は 44:56 / 16:84。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #5c6166;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 4px 10px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 11 箇所ある（48px×9、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 82枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（53枚）、1:1（17枚）、3:2（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```html
<section class="section">
  <div class="container">
    <p class="c-head__label">私たちの仕事</p>
    <h2 class="c-head__title">サービス</h2>
    <p>本文…</p>
  </div>
</section>
```

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c9dae6 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.c-head__label{ font-size:13px; font-weight:500; letter-spacing:0.057em; color:#5c6166 }
.c-head__title{ font-size:22px; line-height:2; margin-top:13px }
.c-head__title + *{ margin-top:112px }

.section--main{ background:var(--main); color:#5c6166; --on:#5c6166 }
.section--main .btn--fill{ background:#5c6166; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#2e3033; border-radius:30px;
  padding:13px 51px; min-height:42px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:834px){
  :root{ --fs-body:16px; --section-y:40px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#edf0f2` のまま。主色 `#c9dae6` は文字と小さな部品にだけ使う。
- 余白 48px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
