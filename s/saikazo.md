# 埼玉県済生会加須病院 ふうのデザイン

- 出典: https://saikazo.org/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#626c7f` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 17px・行間 1.6、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #626c7f;
  --sub: #dddbd9;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #626c7f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Jost", sans-serif;
  --fs-body: 17px;
  --lh-body: 1.6;
  --container: 996px;
  --read: 1108px;
  --section-y: 88px;
  --gap: 11px;
  --radius: 11px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 60.2% |
| 主色 | `#f4f2eb` | 13% |
| 副色 | `#dddbd9` | 4.4% |
| 差し色 | `#8e94a0` | 3.9% |
| 差し色 | `#aebbc4` | 3.4% |
| 差し色 | `#626c7f` | 3.1% |

文字色は `#222222` / `#ffffff` / `#114fa1` / `#6db55c`。

- 主色 `#626c7f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(124, 124, 124, 0.1) 0px 6px 6px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 19 | 13 | 0 | 3 |
| `#f4f2eb` | 9 | 0 | 0 | 9 |
| `#114fa1` | 9 | 20 | 10 | 2 |
| `#d4e0f3` | 1 | 0 | 1 | 0 |
| `#222222` | 4 | 128 | 0 | 1 |
| `#6db55c` | 1 | 11 | 6 | 0 |

- `#626c7f` は

## 文字

- 和文: Noto Sans JP
- 欧文: Jost
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.4 |
| 見出し | 29px | 1.5 |
| 小見出し | 22px | 2 |
| リード | 18px | — |
| 本文 | 17px | 1.6 |
| 補助 | 15px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 996px／読ませる段は 1108px
- セクションの上下余白: 88 / 608 / 44 / 56px（基本は 88px）
- 並びの間隔: 2 / 7 / 11 / 22px
- 角丸: 11px が基本。大きな面だけ 22px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 1200 / 1150 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.6 | 15px / 行間 1.6 |
| 見出し | 38px | 27px / 行間 1.4 |
| セクションの上下余白 | 88px | 32px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 11px | 10px |

- 本文は 17px → 15px、セクション余白は 88px → 32px（PCの36%）。
- 文字サイズの段は 15 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #f4f2eb; color: #222222;
  border-radius: 1440px; padding: 0px 72px; min-height: 55px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.30996px;
}
.btn-sub{
  background: #ffffff; color: #222222;
  border-radius: 1440px; padding: 14px 31px; min-height: 55px;
  font-size: 17px; font-weight: 400; letter-spacing: 0.3321px;
}
.btn-sub{
  background: #114fa1; color: #ffffff;
  border-radius: 1440px; padding: 6px 6px; min-height: 38px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.6642px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 600px | — | 6カラム・画像あり | 右 | — |
| 3 | 920px | — | 2カラム・画像あり | 左 | 右（38:62） |
| 4 | 1140px | — | 2カラム・画像あり | 中央 | — |
| 5 | 780px | — | 5カラム・画像あり | 中央 | — |
| 6 | 680px | — | 1カラム・画像あり | 左 | — |
| 7 | 720px | — | 3カラム・画像あり | — | 全面 |
| 8 | 900px | — | 5カラム・画像あり | — | 全面 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5）
- 見出しは左2／中央2。
- 2カラムの分け方は 38:62。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #d1d1d1。面によって入れ替える */
  border-radius: 22px;
  padding: 12px 12px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #114fa1;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 4px 11px; font-size: 11px;
}
```

## 丸いもの

角丸は 11px だが、**完全な円は別扱い**で 9 箇所ある（48px×6、88px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 27枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 1:1（4枚）、3:2（3枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#626c7f }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:22px; padding:12px 12px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f4f2eb; color:#222222; border-radius:1440px;
  padding:0px 72px; min-height:55px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#626c7f` は文字と小さな部品にだけ使う。
- 余白 88px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 22px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（11px と 22px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
