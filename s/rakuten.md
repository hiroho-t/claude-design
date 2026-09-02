# 楽天グループ株式会社コーポレートサイト ふうのデザイン

- 出典: https://corp.rakuten.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

#f6f6f6 の地に `#cf032c` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.46、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f6f6f6;
  --main: #cf032c;
  --sub: #99a096;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #cf032c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "RakutenSansJP2_W", sans-serif;
  --font-en: "RakutenSansJP2_W", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.46;
  --container: 1095px;
  --read: 1096px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f6f6f6` | 56.1% |
| 主色 | `#888680` | 6.9% |
| 副色 | `#99a096` | 5.4% |
| 差し色 | `#cf032c` | 4.4% |
| 差し色 | `#2e3242` | 4.3% |
| 差し色 | `#a2c9c6` | 4.2% |

文字色は `#000000` / `#ffffff` / `#bf0000` / `#636363`。

- 主色 `#cf032c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 0px 2px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f6f6` | 10 | 0 | 0 | 0 |
| `#ffffff` | 8 | 24 | 2 | 2 |
| `#313036` | 2 | 0 | 0 | 0 |
| `#bf0000` | 2 | 9 | 2 | 0 |
| `#000000` | 3 | 191 | 0 | 0 |
| `#636363` | 0 | 5 | 0 | 0 |

- `#cf032c` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f6f6f6`（地） | `#cf032c` |
| `#bf0000` | `#ffffff` |
| `#313036` | `#ffffff` |
| `#ffffff` | `#cf032c` |

```css
.section{ --on:#cf032c }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: RakutenSansJP2_W
- 欧文: RakutenSansJP2_W
- ウェイトは 600 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.2 |
| 見出し | 22px | 1.4 |
| 小見出し | 18px | 1.4 |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.4 |
| 補助 | 13px | — |

- 本文は 14px・行間 1.46。

## レイアウト

- コンテンツ幅: 最大 1095px／読ませる段は 1096px
- セクションの上下余白: 40 / 80 / 60 / 44px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768 / 640 / 480 / 479px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.46 | 14px / 行間 1.5 |
| 見出し | 30px | 24px / 行間 1.2 |
| セクションの上下余白 | 40px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 40px → 40px（PCの100%）。
- 文字サイズの段は 22 / 20 / 15 / 14 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #bf0000;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 13px; font-weight: 300; letter-spacing: 0.26px;
}
.btn-sub{
  background: #ffffff; color: #bf0000;
  border: 1px solid #bf0000;
  border-radius: 200px; padding: 20px 50px; min-height: 62px;
  font-size: 13px; font-weight: 300; letter-spacing: 0.26px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 200px; padding: 16px 40px; min-height: 54px;
  font-size: 13px; font-weight: 300; letter-spacing: 0.26px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 180px | — | ヒーロー（画像） | 中央 | 右（23:77） |
| 2 | 3760px | — | 1カラム・画像あり | 左 | 全幅 |
| 3 | 680px | `#f6f6f6` | 1カラム・画像あり | — | 全面 |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f6f6f6`（10） / `#bf0000`（2） / `#313036`（2） / `#ffffff`（1）
- 見出しは左1／中央1。
- 2カラムの分け方は 23:77。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #f6f6f6;
  border-radius: 0px;
  padding: 26px 26px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（32px×1、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 16枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（11枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#cf032c }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f6f6f6;
  border-radius:0px; padding:26px 26px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#bf0000; border-radius:0px;
  padding:0px 0px; min-height:30px;
  font-size:13px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f6f6f6` のまま。主色 `#cf032c` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.46 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.46 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
