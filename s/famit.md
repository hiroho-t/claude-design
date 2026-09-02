# 大阪府全域に対応 ふうのデザイン

- 出典: https://www.famit.info/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

#f5f5f5 の地に `#0f52a1` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #0f52a1;
  --sub: #8d8d8d;
  --ink: #262626;
  --ink-rev: #ffffff;
  --on: #0f52a1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Cinzel", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1100px;
  --read: 680px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 59.5% |
| 主色 | `#2e2e2e` | 13.1% |
| 副色 | `#8d8d8d` | 8.3% |
| 差し色 | `#0f52a1` | 5.4% |
| 差し色 | `#d5dcda` | 3.3% |
| 差し色 | `#c3bcac` | 2.1% |

文字色は `#262626` / `#ffffff` / `#000000` / `#0f52a1`。

- 主色 `#0f52a1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 3 | 0 | 0 | 0 |
| `#262626` | 6 | 82 | 0 | 0 |
| `#eeeeee` | 1 | 0 | 0 | 0 |
| `#0f52a1` | 3 | 2 | 4 | 0 |
| `#f38716` | 1 | 0 | 0 | 1 |
| `#ffffff` | 0 | 41 | 3 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#0f52a1` は面として3箇所、文字として2箇所。塗りが主役。ボタンの地には使っていない。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#262626` | `#ffffff` |
| `#f5f5f5`（地） | `#0f52a1` |
| `#eeeeee` | `#0f52a1` |
| `#0f52a1`（主色） | `#ffffff` |

```css
.section{ --on:#0f52a1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#dddddd`。ただしその囲みは `#f5f5f5` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Cinzel
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 62px | 1 |
| 見出し | 50px | 1 |
| 小見出し | 30px | 1 |
| リード | 20px | — |
| リード | 19px | — |
| リード | 18px | 1.2 |
| リード | 16px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 680px
- セクションの上下余白: 100 / 40 / 60 / 80px（基本は 100px）
- 並びの間隔: 4 / 8 / 16 / 80px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 14px / 行間 2 |
| 見出し | 62px | 48px / 行間 1 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | 4px |

- 本文は 15px → 14px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 18 / 17 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.3px;
}
.btn-sub{
  background: transparent; color: #262626;
  border-radius: 0px; padding: 0px 0px; min-height: 27px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.3px;
}
.btn-sub{
  background: #f38716; color: #ffffff;
  border-radius: 0px; padding: 33px 30px; min-height: 89px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | — | 全面 |
| 2 | 2840px | — | 4カラム・画像あり | 左 | — |
| 3 | 540px | — | 1カラム・文字だけ | — | — |
| 4 | 540px | — | 3カラム・画像あり | 左 | — |
| 5 | 380px | `#0f52a1` | 1カラム・画像あり | 右 | 左（39:61） |
| 6 | 480px | — | 3カラム・画像あり | 中央 | — |
| 7 | 520px | — | 1カラム・画像あり | 中央 | — |
| 8 | 380px | — | 4カラム・画像あり | 左 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#262626`（3） / `#f5f5f5`（1） / `#eeeeee`（1） / `#0f52a1`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 39:61。半分ずつには割らない。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dddddd。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（48px×9、80px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 4枚使っている
- 比率は 1:1（2枚）、21:9（1枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0f52a1 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:28px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f5f5f5` のまま。主色 `#0f52a1` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
