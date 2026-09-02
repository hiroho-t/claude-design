# 株式会社ニュートラルワークス ふうのデザイン

- 出典: https://n-works.link/recruit/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: 採用サイト／デザイン･イラスト･写真･映像･制作／企画･開発･マーケティング･コンサルティング

白地に `#9ca7b7` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 null、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #9ca7b7;
  --sub: #151516;
  --ink: #303234;
  --ink-rev: #ffffff;
  --on: #9ca7b7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "yakuhanjp", sans-serif;
  --font-en: "yakuhanjp", sans-serif;
  --fs-body: 14px;
  --lh-body: null;
  --container: 604px;
  --read: 1252px;
  --section-y: 80px;
  --gap: 15px;
  --radius: 12px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.9% |
| 主色 | `#303234` | 6.3% |
| 副色 | `#151516` | 5.9% |
| 差し色 | `#020303` | 4.6% |
| 差し色 | `#c0c2c3` | 3.6% |
| 差し色 | `#dcdcdc` | 2.1% |

文字色は `#303234` / `#ffffff` / `#9ca7b7` / `#d9d9d9`。

- 主色 `#9ca7b7` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f9f9` | 28 | 35 | 1 | 5 |
| `#020202` | 1 | 0 | 0 | 0 |
| `#151516` | 1 | 0 | 0 | 0 |
| `#303234` | 3 | 122 | 6 | 1 |
| `#0e7ae0` | 2 | 7 | 3 | 1 |
| `#9ca7b7` | 0 | 33 | 0 | 0 |
| `#d9d9d9` | 0 | 37 | 0 | 0 |

- `#9ca7b7` は文字色として33箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#9ca7b7` |
| `#f9f9f9` | `#9ca7b7` |
| `#303234` | `#ffffff` |
| `#020202` | `#ffffff` |

```css
.section{ --on:#9ca7b7 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: yakuhanjp
- 欧文: yakuhanjp
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | 1.3 |
| 見出し | 16px | 1.5 |
| 本文 | 14px | — |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 null。

## レイアウト

- コンテンツ幅: 最大 604px／読ませる段は 1252px
- セクションの上下余白: 80 / 56 / 60 / 72px（基本は 80px）
- 並びの間隔: 10 / 14 / 15 / 16px
- 角丸: 12px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 768 / 576 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px | 16px / 行間 1.6 |
| セクションの上下余白 | 80px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 15px | 10px |

- 本文は 14px → 16px、セクション余白は 80px → 60px（PCの75%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #303234;
  border: 1px solid #303234;
  border-radius: 30px; padding: 16px 56px; min-height: 60px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #303234;
  border-radius: 30px; padding: 16px 56px; min-height: 58px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #f1f6f8; color: #ffffff;
  border-radius: 20px; padding: 0px 10px; min-height: 40px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 780px | — | ヒーロー（画像） | 左 | 右（47:53） |
| 2 | 760px | — | 2カラム・画像あり | 右 | 左（47:53） |
| 3 | 4940px | — | 2カラム・画像あり | 左 | 右（43:57） |
| 4 | 820px | — | 3カラム・画像あり | 左 | 右（30:70） |
| 5 | 940px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 840px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 7 | 900px | `#f9f9f9` | 5カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（15） / `#f9f9f9`（3） / `#303234`（1） / `#020202`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 47:53 / 47:53 / 43:57 / 30:70。半分ずつには割らない。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 24px;
}
```


## 画像

- 111枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:4（54枚）、1:1（40枚）、3:2（17枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#9ca7b7 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:780px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:16px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#303234; border-radius:30px;
  padding:16px 56px; min-height:60px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:60px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#9ca7b7` は文字と小さな部品にだけ使う。
- 余白 80px と行間 null を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（12px と 30px 以外）を混ぜない。
