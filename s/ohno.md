# 大野記念病院 ふうのデザイン

- 出典: https://www.ohno.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬

白地に `#5a7393` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 17px・行間 null、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #5a7393;
  --sub: #c1b5c1;
  --ink: #2e2e2e;
  --ink-rev: #ffffff;
  --on: #5a7393;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 17px;
  --lh-body: null;
  --container: 864px;
  --read: 712px;
  --section-y: 72px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 59.2% |
| 主色 | `#eae7e6` | 6.7% |
| 副色 | `#c1b5c1` | 4.9% |
| 差し色 | `#5a7393` | 3.6% |
| 差し色 | `#e1b172` | 3.3% |
| 差し色 | `#a5acb5` | 3.1% |

文字色は `#2e2e2e` / `#ffffff` / `#3c3c3c` / `#4f4f4f`。

- 主色 `#5a7393` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(173, 173, 173, 0.22) 0px 0px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 32 | 44 | 7 | 1 |
| `#f5f8fa` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 0 | 0 | 0 |
| `#4082c4` | 2 | 0 | 0 | 0 |
| `#b18fdd` | 2 | 0 | 0 | 0 |
| `#2e2e2e` | 0 | 45 | 0 | 0 |
| `#3c3c3c` | 0 | 49 | 0 | 0 |
| `#4f4f4f` | 0 | 24 | 44 | 0 |

- `#5a7393` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#5a7393` |
| `#f5f8fa` | `#5a7393` |
| `#000000` | `#ffffff` |
| `#67c15b` | `#5a7393` |

```css
.section{ --on:#5a7393 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f5f8fa` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: 游ゴシック体（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Roboto
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | 1.5 |
| 見出し | 25px | — |
| 小見出し | 24px | — |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 17px | — |
| 補助 | 16px | — |

- 本文は 17px・行間 null。

## レイアウト

- コンテンツ幅: 最大 864px／読ませる段は 712px
- セクションの上下余白: 72 / 64 / 44 / 56px（基本は 72px）
- 並びの間隔: 10 / 12 / 20 / 36px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1025 / 1024 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px | 17px |
| 見出し | 52px | 29px / 行間 1.5 |
| セクションの上下余白 | 72px | 28px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 10px |

- 本文は 17px → 17px、セクション余白は 72px → 28px（PCの39%）。
- 文字サイズの段は 20 / 17 / 16 / 15 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 9999px; padding: 0px 40px; min-height: 47px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #2e2e2e;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー（画像） | — | — |
| 2 | 780px | `#ffffff` | 6カラム・画像あり | — | — |
| 3 | 900px | `#000000` | 1カラム・文字だけ | — | — |
| 4 | 4520px | — | 6カラム・画像あり | 左 | 右（64:36） |
| 5 | 980px | `#ffffff` | 4カラム・画像あり | — | 全面 |

- 全5セクション。
- 使われている面の色: `#ffffff`（27） / `#f5f8fa`（1） / `#000000`（1） / `#67c15b`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 64:36。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 26px 40px;
  box-shadow: rgba(173, 173, 173, 0.22) 0px 0px 16px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（64px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 27枚使っている
- 比率は 16:9（13枚）、3:4（4枚）、4:3（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#5a7393 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:26px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:9999px;
  padding:0px 40px; min-height:47px;
  font-size:17px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:17px; --section-y:28px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#5a7393` は文字と小さな部品にだけ使う。
- 余白 72px と行間 null を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
