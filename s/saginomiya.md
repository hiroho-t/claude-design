# 株式会社鷺宮製作所 ふうのデザイン

- 出典: https://www.saginomiya.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

#f5f5f5 の地に `#41536a` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.75、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #41536a;
  --ink: #41536a;
  --ink-rev: #ffffff;
  --on: #41536a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "IBM Plex Sans JP", sans-serif;
  --font-en: "IBM Plex Sans JP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 572px;
  --read: 568px;
  --section-y: 120px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 96.7% |

文字色は `#41536a` / `#ffffff` / `#0a7fd3` / `#c5ccd4`。

- 主色 `#41536a` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#efeeed` | 9 | 0 | 0 | 0 |
| `#ffffff` | 2 | 41 | 2 | 0 |
| `#41536a` | 1 | 55 | 10 | 0 |
| `#0a7fd3` | 4 | 13 | 2 | 0 |
| `#c5ccd4` | 0 | 17 | 0 | 0 |

- `#41536a` は文字色として55箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも10箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#efeeed` | `#41536a` |
| `#41536a`（主色） | `#ffffff` |
| `#ffffff` | `#41536a` |
| `#0a7fd3` | `#ffffff` |

```css
.section{ --on:#41536a }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: IBM Plex Sans JP
- 欧文: IBM Plex Sans JP
- ウェイトは 600 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.75 |
| 見出し | 20px | 1 |
| 小見出し | 18px | 1.75 |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 572px／読ませる段は 568px
- セクションの上下余白: 120 / 320 / 48 / 180px（基本は 120px）
- 並びの間隔: 15 / 30 / 32 / 74px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1244 / 1079 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 14px / 行間 1.86 |
| セクションの上下余白 | 120px | 36px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 32px | 8px |

- 本文は 16px → 14px、セクション余白は 120px → 36px（PCの30%）。
- 文字サイズの段は 56 / 19 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #41536a;
  border: 1px solid #41536a;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 16px; font-weight: 400; letter-spacing: -0.32px;
}
.btn-sub{
  background: transparent; color: #41536a;
  border-radius: 0px; padding: 6px 24px; min-height: 50px;
  font-size: 16px; font-weight: 600; letter-spacing: -0.32px;
}
.btn-sub{
  background: transparent; color: #41536a;
  border: 1px solid #41536a;
  border-radius: 0px; padding: 9px 9px; min-height: 34px;
  font-size: 14px; font-weight: 400; letter-spacing: -0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 560px | — | 2カラム・画像あり | 左 | 右（29:71） |
| 3 | 980px | — | 1カラム・画像あり | 中央 | 右（30:70） |
| 4 | 1100px | — | 1カラム・画像あり | 中央 | 右（30:70） |
| 5 | 2060px | — | 1カラム・画像あり | 右 | 見出しの下 |
| 6 | 3000px | — | 2カラム・画像あり | 右 | 見出しの下 |
| 7 | 940px | — | 1カラム・画像あり | 右 | 全幅 |
| 8 | 1160px | — | 1カラム・画像あり | 右 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#efeeed`（2） / `#41536a`（1） / `#ffffff`（1） / `#0a7fd3`（1）
- 見出しは左1／中央2。
- 2カラムの分け方は 29:71 / 30:70 / 30:70。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 42枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 3:2（24枚）、4:3（9枚）、2:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#41536a }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#41536a; border-radius:0px;
  padding:0px 0px; min-height:64px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:36px; --gap:8px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#f5f5f5` のまま。主色 `#41536a` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。
