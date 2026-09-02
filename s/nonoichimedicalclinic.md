# ののいちメディカルクリニック ふうのデザイン

- 出典: https://www.nono-medtown.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#fe1f54` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.6、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #fe1f54;
  --ink: #454545;
  --ink-rev: #7e8c8d;
  --on: #fe1f54;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 924px;
  --read: 1120px;
  --section-y: 40px;
  --gap: 15px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 87.8% |
| 主色 | `#d1d4d7` | 2.4% |

文字色は `#454545` / `#7e8c8d` / `#ffffff` / `#fe1f54`。

- 主色 `#fe1f54` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.08) 0px 2px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#faf9f7` | 57 | 20 | 0 | 11 |
| `#6abbe8` | 4 | 6 | 0 | 0 |
| `#ffecf0` | 1 | 0 | 0 | 0 |
| `#6683a4` | 2 | 6 | 0 | 0 |
| `#83c2be` | 2 | 6 | 0 | 0 |
| `#454545` | 0 | 87 | 0 | 0 |
| `#7e8c8d` | 0 | 24 | 0 | 0 |
| `#fe1f54` | 0 | 4 | 0 | 0 |

- `#fe1f54` は文字色として4箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#faf9f7` | `#fe1f54` |
| `#6abbe8` | `#fe1f54` |
| `#ffffff`（地） | `#fe1f54` |
| `#6683a4` | `#7e8c8d` |

```css
.section{ --on:#fe1f54 }                     /* 地の面 */
.section--main{ background:var(--main); color:#7e8c8d; --on:#7e8c8d }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#7e8c8d }
.section--main .btn--fill{ background:#7e8c8d; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#faf9f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 68px | 1.6 |
| 見出し | 20px | — |
| 本文 | 16px | 1.6 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 924px／読ませる段は 1120px
- セクションの上下余白: 40 / 160 / 52 / 80px（基本は 40px）
- 並びの間隔: 5 / 10 / 15 / 20px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1701 / 1441 / 1081 / 1080 / 769px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 16px / 行間 1.8 |
| 見出し | 68px | 35px / 行間 1.3 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 15px | 10px |

- 本文は 16px → 16px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #454545;
  border-radius: 0px; padding: 0px 0px; min-height: 62px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: #ffffff; color: #454545;
  border: 1px solid #dde5e6;
  border-radius: 5px; padding: 10px 18px; min-height: 62px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 18px; font-weight: 700; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | 中央 | 右（38:62） |
| 2 | 200px | — | 帯・区切り | — | — |
| 3 | 700px | — | 1カラム・画像あり | 右 | 右（42:58） |
| 4 | 940px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 5 | 1040px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 300px | — | 6カラム・画像あり | — | 全面 |
| 7 | 780px | — | 1カラム・文字だけ | 左 | — |
| 8 | 160px | — | 2カラム・画像あり | — | 全面 |
| 9 | 700px | — | 2カラム | — | — |
| 10 | 580px | — | 1カラム・画像あり | — | 全幅 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#faf9f7`（10） / `#6abbe8`（4） / `#ffffff`（2） / `#6683a4`（2）
- 見出しは左3／中央1。
- 2カラムの分け方は 38:62 / 42:58。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #6abbe8;
  border-radius: 10px;
  padding: 0px 146px;
}
```

ラベル・タグ

```css
.chip{
  background: #0abab5; color: #ffffff;
  border-radius: 999px; padding: 5px 15px; font-size: 12px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 12 箇所ある（40px×12）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 89枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（40枚）、2:3（36枚）、1:1（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fe1f54 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#7e8c8d; --on:#7e8c8d }
.section--main .btn--fill{ background:#7e8c8d; color:var(--main) }
.card{ background:#6abbe8;
  border-radius:10px; padding:0px 146px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#454545; border-radius:0px;
  padding:0px 0px; min-height:62px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:16px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#fe1f54` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
