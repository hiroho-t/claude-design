# マネックス証券株式会社 採用サイト ふうのデザイン

- 出典: https://www.monexgroup.jp/recruit/index.html
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: 採用サイト／金融･投資･保険･士業／レスポンシブ

白地に `#976f26` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 18px・行間 1.9、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #976f26;
  --sub: #000000;
  --ink: #000000;
  --ink-rev: #595959;
  --on: #976f26;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.9;
  --container: 1320px;
  --read: 780px;
  --section-y: 120px;
  --gap: 60px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.6% |
| 主色 | `#ccced1` | 10.3% |
| 副色 | `#000000` | 5.5% |
| 差し色 | `#b1b4b5` | 4.1% |
| 差し色 | `#a49c95` | 3.5% |
| 差し色 | `#3a302b` | 2.8% |

文字色は `#000000` / `#595959` / `#ffffff` / `#976f26`。

- 主色 `#976f26` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.3) 2px 2px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f9f9` | 17 | 13 | 0 | 0 |
| `#000000` | 5 | 62 | 3 | 4 |
| `#c3ac80` | 2 | 0 | 4 | 2 |
| `#dedede` | 1 | 0 | 3 | 0 |
| `#595959` | 0 | 12 | 0 | 0 |
| `#976f26` | 0 | 4 | 0 | 0 |

- `#976f26` は文字色として4箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f9f9f9` | `#976f26` |
| `#ffffff`（地） | `#976f26` |
| `#000000` | `#595959` |

```css
.section{ --on:#976f26 }                     /* 地の面 */
.section--main{ background:var(--main); color:#595959; --on:#595959 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#595959 }
.section--main .btn--fill{ background:#595959; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#c3ac80`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.6 |
| 見出し | 36px | — |
| 小見出し | 30px | — |
| リード | 24px | 1.9 |
| リード | 20px | — |
| 本文 | 18px | 1.9 |
| 補助 | 16px | — |

- 本文は 18px・行間 1.9。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1320px／読ませる段は 780px
- セクションの上下余白: 120 / 80 / 64 / 40px（基本は 120px）
- 並びの間隔: 20 / 60px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1320 / 1200 / 897 / 896 / 700px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.9 | 16px / 行間 1.9 |
| 見出し | 48px | 20px / 行間 1.9 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 15px |
| 並びの間隔 | 60px | 10px |

- 本文は 18px → 16px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 22 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 84px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 50px; padding: 25px 0px; min-height: 84px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #c3ac80; color: #000000;
  border-radius: 5px; padding: 15px 30px; min-height: 50px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 780px | — | ヒーロー（画像） | — | 全面 |
| 2 | 660px | — | 1カラム・文字だけ | — | — |
| 3 | 640px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 1080px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 660px | `#f9f9f9` | 1カラム・文字だけ | 右 | — |
| 6 | 780px | — | 1カラム・画像あり | 左 | 右（43:57） |
| 7 | 760px | `#f9f9f9` | 2カラム・画像あり | 左 | 見出しの下 |
| 8 | 1300px | — | 1カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション。
- 使われている面の色: `#f9f9f9`（3） / `#ffffff`（1） / `#000000`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 43:57。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 4px solid var(--on);   /* 実測は #c3ac80。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 23枚使っている
- 比率は 1:1（10枚）、3:4（8枚）、16:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#976f26 }
.container{ width:min(100% - 30px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:780px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#595959; --on:#595959 }
.section--main .btn--fill{ background:#595959; color:var(--main) }
.card{ background:#ffffff; border:4px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:84px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:897px){
  :root{ --fs-body:16px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 30px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#976f26` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.9 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 4px の線＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.9 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
