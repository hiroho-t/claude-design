# Winfield Japan ふうのデザイン

- 出典: https://winfieldjapan.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建設･インフラ･土木･設備／レスポンシブ

白地に `#b5e0f6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b5e0f6;
  --sub: #f0efe9;
  --ink: #203424;
  --ink-rev: #ffffff;
  --on: #b5e0f6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Poppins", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 732px;
  --read: 840px;
  --section-y: 32px;
  --gap: 4px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 68% |
| 主色 | `#b5e0f6` | 7.6% |
| 副色 | `#f0efe9` | 5.8% |
| 差し色 | `#7fa38b` | 4% |
| 差し色 | `#b3c6c0` | 3% |
| 差し色 | `#d8d7d1` | 2.3% |

文字色は `#203424` / `#ffffff` / `#479560`。

- 主色 `#b5e0f6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 66 | 0 | 0 |
| `#f0efe9` | 1 | 0 | 4 | 0 |
| `#000000` | 11 | 0 | 0 | 0 |
| `#2a402f` | 6 | 0 | 0 | 5 |
| `#f08c1e` | 2 | 0 | 0 | 2 |
| `#203424` | 0 | 58 | 0 | 0 |
| `#479560` | 0 | 4 | 0 | 0 |

- `#b5e0f6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#000000` | `#ffffff` |
| `#ffffff`（地） | `#b5e0f6` |
| `#f0efe9` | `#b5e0f6` |

```css
.section{ --on:#b5e0f6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Poppins
- 欧文: Poppins
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 1 |
| 見出し | 18px | — |
| 小見出し | 16px | — |
| 本文 | 14px | 2 |
| 補助 | 12px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 732px／読ませる段は 840px
- セクションの上下余白: 32 / 128 / 160 / 48px（基本は 32px）
- 並びの間隔: 4px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1180 / 1025 / 1024 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 14px / 行間 2 |
| 見出し | 24px | 16px / 行間 1 |
| セクションの上下余白 | 32px | 24px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 4px | 3px |

- 本文は 14px → 14px、セクション余白は 32px → 24px（PCの75%）。
- 文字サイズの段は 16 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #2a402f; color: #ffffff;
  border-radius: 56px; padding: 0px 0px; min-height: 56px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #f08c1e; color: #ffffff;
  border-radius: 40px; padding: 0px 0px; min-height: 40px;
  font-size: 13px; font-weight: 600; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 160px | `#ffffff` | 帯・区切り | 左 | — |
| 3 | 960px | `#ffffff` | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1100px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 480px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 940px | `#f0efe9` | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 800px | — | 6カラム・画像あり | 左 | 右（51:49） |
| 8 | 7200px | — | 1カラム・画像あり | 右 | 全幅 |
| 9 | 380px | `#ffffff` | 2カラム・画像あり | 左 | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#000000`（10） / `#ffffff`（8） / `#f0efe9`（1）
- 見出しは左5／中央2。
- 2カラムの分け方は 51:49。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #000000;
  border-radius: 5px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（64px×2、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 35枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（14枚）、2:3（8枚）、4:3（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b5e0f6 }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#000000;
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#2a402f; color:#ffffff; border-radius:56px;
  padding:0px 0px; min-height:56px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:3px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b5e0f6` は文字と小さな部品にだけ使う。
- 余白 32px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
