# 伊坂美術印刷株式会社 ふうのデザイン

- 出典: https://isaka.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／本･出版･印刷

白地に `#e92627` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 18px・行間 1.75、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #e92627;
  --sub: #a5b1b9;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #e92627;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanMP_Noto", sans-serif;
  --font-en: "YakuHanMP_Noto", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.75;
  --container: 912px;
  --read: 676px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.5% |
| 主色 | `#d9e2ea` | 7.2% |
| 副色 | `#a5b1b9` | 2% |

文字色は `#222222` / `#ffffff`。

- 主色 `#e92627` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 10px 10px 15px 15px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f1f8f9` | 1 | 0 | 0 | 0 |
| `#ffffff` | 3 | 19 | 0 | 0 |
| `#e92627` | 1 | 0 | 1 | 1 |
| `#222222` | 0 | 83 | 3 | 0 |

- `#e92627` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#e92627` |
| `#f1f8f9` | `#e92627` |

```css
.section{ --on:#e92627 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanMP_Noto
- 欧文: YakuHanMP_Noto
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 60px | 1.3 |
| 見出し | 36px | 1.5 |
| 小見出し | 28px | 1.5 |
| リード | 20px | 1.5 |
| 本文 | 18px | 1.75 |
| 補助 | 17px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 912px／読ませる段は 676px
- セクションの上下余白: 40 / 208 / 72 / 180px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 30px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 980 / 959 / 920 / 840 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.75 | 12px / 行間 1.75 |
| 見出し | 60px | 18px / 行間 1.5 |
| セクションの上下余白 | 40px | 24px |
| 左右の余白 | — | 34px |
| 並びの間隔 | 16px | —px |

- 本文は 18px → 12px、セクション余白は 40px → 24px（PCの60%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #222222;
  border: 1px solid #222222;
  border-radius: 200px; padding: 5px 27px; min-height: 45px;
  font-size: 18px; font-weight: 500; letter-spacing: 0.72px;
}
.btn-sub{
  background: #e92627; color: #ffffff;
  border: 1px solid #e92627;
  border-radius: 50px; padding: 23px 30px; min-height: 66px;
  font-size: 18px; font-weight: 500; letter-spacing: 0.72px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1320px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 7 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 8 | 1320px | — | 1カラム・画像あり | 左 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#f1f8f9`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（48px×2、152px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 13枚使っている
- 比率は 4:3（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#e92627 }
.container{ width:min(100% - 68px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1320px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#222222; border-radius:200px;
  padding:5px 27px; min-height:45px;
  font-size:18px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:12px; --section-y:24px; }
  .container{ width:calc(100% - 68px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#e92627` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 30px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
