# ヒカリノ診療所 ふうのデザイン

- 出典: https://hikarino.clinic/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#c9dce2` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 36px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c9dce2;
  --sub: #eceef4;
  --ink: #00367f;
  --ink-rev: #e5ebf2;
  --on: #c9dce2;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "cabin", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1152px;
  --read: 576px;
  --section-y: 36px;
  --gap: 16px;
  --radius: 20px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 71.5% |
| 主色 | `#c9dce2` | 9.6% |
| 副色 | `#eceef4` | 4.5% |
| 差し色 | `#243340` | 2.5% |
| 差し色 | `#88af7e` | 2.3% |
| 差し色 | `#737f70` | 2.1% |

文字色は `#00367f` / `#e5ebf2` / `#000000` / `#cccccc`。

- 主色 `#c9dce2` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は`rgba(0, 0, 0, 0.08) 0px 2px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 9 | 6 | 0 | 0 |
| `#00367f` | 4 | 73 | 8 | 3 |
| `#d8b5ed` | 7 | 2 | 0 | 0 |
| `#e5ebf2` | 0 | 1 | 0 | 0 |
| `#000000` | 0 | 3 | 0 | 0 |
| `#cccccc` | 0 | 14 | 0 | 0 |

- `#c9dce2` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#c9dce2` |
| `#f7f9fb` | `#c9dce2` |

```css
.section{ --on:#c9dce2 }                     /* 地の面 */
.section--main{ background:var(--main); color:#e5ebf2; --on:#e5ebf2 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#e5ebf2 }
.section--main .btn--fill{ background:#e5ebf2; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: cabin
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1.5 |
| 見出し | 24px | 1.8 |
| 小見出し | 22px | 1.5 |
| リード | 17px | — |
| 本文 | 16px | 1.8 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 576px
- セクションの上下余白: 36 / 120 / 160 / 40px（基本は 36px）
- 並びの間隔: px
- 角丸: 20px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 5000 / 1001 / 1000 / 600 / 0px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 26px | 20px / 行間 1.8 |
| セクションの上下余白 | 36px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 36px → 32px（PCの89%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #00367f; color: #ffffff;
  border-radius: 50px; padding: 18px 49px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 右 | 左（51:49） |
| 2 | 240px | — | 帯・区切り | 左 | — |
| 3 | 940px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1660px | — | 2カラム・画像あり | 左 | 全幅 |
| 5 | 880px | — | 1カラム・画像あり | 左 | 右（34:66） |
| 6 | 460px | — | 3カラム・画像あり | 左 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#f7f9fb`（1）
- 見出しは左4／中央1。
- 2カラムの分け方は 51:49 / 34:66。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 10px;
  padding: 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 5px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #d8b5ed; color: #000000;
  border: 2px solid currentColor;
  border-radius: 999px; padding: 1px 6px; font-size: 0px;
}
```

## 丸いもの

角丸は 20px だが、**完全な円は別扱い**で 6 箇所ある（40px×4、32px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 11枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（4枚）、3:2（2枚）、3:4（2枚）
- 角丸 10px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c9dce2 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#e5ebf2; --on:#e5ebf2 }
.section--main .btn--fill{ background:#e5ebf2; color:var(--main) }
.card{ background:transparent;
  border-radius:10px; padding:20px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#00367f; color:#ffffff; border-radius:50px;
  padding:18px 49px; min-height:60px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:10px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#c9dce2` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 36px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 10px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（20px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
