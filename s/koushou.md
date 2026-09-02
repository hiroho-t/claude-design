# 株式会社 工匠 ふうのデザイン

- 出典: https://koushou-inc.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

#fff0de の地に `#fff0de` を大きな面で置く配色。影を使って浮かせる。本文 20px・行間 2、セクション間 272px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fff0de;
  --main: #fff0de;
  --sub: #3e9e71;
  --ink: #111111;
  --ink-rev: #a3d29e;
  --on: #fff0de;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "dnp-shuei-gothic-kin-std", sans-serif;
  --font-en: "dnp-shuei-gothic-kin-std", sans-serif;
  --fs-body: 20px;
  --lh-body: 2;
  --container: 1304px;
  --read: 632px;
  --section-y: 272px;
  --gap: 45px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fff0de` | 87.7% |
| 主色 | `#008742` | 6.8% |
| 副色 | `#3e9e71` | 3.3% |
| 差し色 | `#cbdcba` | 1.6% |

文字色は `#111111` / `#a3d29e` / `#008742` / `#ffffff`。

- 主色 `#fff0de` は差し色ではなく**面**で使う。画面の88%を占めている。
- 影は`rgba(228, 220, 212, 0.5) 0px 4px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#008742` | 1 | 7 | 6 | 0 |
| `#fff7ee` | 7 | 0 | 0 | 6 |
| `#4c965c` | 0 | 0 | 3 | 0 |
| `#a3d29e` | 3 | 22 | 0 | 0 |
| `#111111` | 0 | 34 | 0 | 0 |
| `#ffffff` | 7 | 8 | 0 | 0 |

- `#fff0de` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fff7ee` | `#fff0de` |
| `#008742` | `#a3d29e` |

```css
.section{ --on:#fff0de }                     /* 地の面 */
.section--main{ background:var(--main); color:#a3d29e; --on:#a3d29e }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#a3d29e }
.section--main .btn--fill{ background:#a3d29e; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: dnp-shuei-gothic-kin-std
- 欧文: dnp-shuei-gothic-kin-std
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1.5 |
| 見出し | 22px | — |
| 本文 | 20px | 2 |
| 補助 | 18px | — |
| 注記 | 16px | — |
| 注記 | 13px | — |

- 本文は 20px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1304px／読ませる段は 632px
- セクションの上下余白: 272 / 92 / 112 / 80px（基本は 272px）
- 並びの間隔: 9 / 11 / 45 / 157px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 920 / 919px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 2 | 12px / 行間 1.67 |
| 見出し | 36px | 25px / 行間 1.5 |
| セクションの上下余白 | 272px | 168px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 45px | 8px |

- 本文は 20px → 12px、セクション余白は 272px → 168px（PCの62%）。
- 文字サイズの段は 25 / 19 / 17 / 15 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #111111;
  border-radius: 0px; padding: 0px 0px; min-height: 31px;
  font-size: 13px; font-weight: 400; letter-spacing: 1px;
}
.btn-sub{
  background: #fff7ee; color: #111111;
  border-radius: 4px; padding: 4px 13px; min-height: 31px;
  font-size: 13px; font-weight: 400; letter-spacing: 1px;
}
.btn-sub{
  background: transparent; color: #008742;
  border: 1px solid #008742;
  border-radius: 112px; padding: 9px 36px; min-height: 60px;
  font-size: 20px; font-weight: 600; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 11100px | — | ヒーロー（画像） | 右 | 見出しの下 |
| 2 | 960px | `#008742` | 1カラム・画像あり | — | 全面 |
| 3 | 900px | — | 1カラム・文字だけ | — | — |
| 4 | 900px | — | 1カラム・文字だけ | — | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fff7ee`（1） / `#008742`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #fff7ee; color: #111111;
  border-radius: 4px; padding: 4px 13px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（16px×3、40px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 12枚使っている
- 比率は 3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fff0de }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:11100px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#a3d29e; --on:#a3d29e }
.section--main .btn--fill{ background:#a3d29e; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#111111; border-radius:0px;
  padding:0px 0px; min-height:31px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:168px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#fff0de` の面を全幅で交互に置く。主色は画面の88%を占めるだけ使う。
- 余白 272px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
