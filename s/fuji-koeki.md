# 総合専門商社の株式会社富士交易 ふうのデザイン

- 出典: https://www.fuji-koeki.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#0e264c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0e264c;
  --sub: #0e264c;
  --ink: #111111;
  --ink-rev: #123d83;
  --on: #0e264c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1100px;
  --read: 828px;
  --section-y: 80px;
  --gap: 8px;
  --radius: 15px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 43.2% |
| 主色 | `#e6f0f7` | 30% |
| 副色 | `#0e264c` | 6.7% |
| 差し色 | `#52b7cc` | 3.3% |
| 差し色 | `#b5b6b8` | 2.9% |
| 差し色 | `#405665` | 2.6% |

文字色は `#111111` / `#123d83` / `#ffffff` / `#1eb8d4`。

- 主色 `#0e264c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e6f0f7` | 13 | 0 | 2 | 0 |
| `#0e264c` | 3 | 0 | 0 | 0 |
| `#ffffff` | 18 | 14 | 3 | 12 |
| `#123d83` | 9 | 70 | 6 | 0 |
| `#d6141c` | 1 | 1 | 0 | 0 |
| `#111111` | 0 | 46 | 0 | 0 |
| `#1eb8d4` | 0 | 8 | 0 | 0 |

- `#0e264c` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e6f0f7` | `#0e264c` |
| `#0e264c`（主色） | `#123d83` |
| `#0e264d` | `#123d83` |
| `#ffffff`（地） | `#0e264c` |

```css
.section{ --on:#0e264c }                     /* 地の面 */
.section--main{ background:var(--main); color:#123d83; --on:#123d83 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#123d83 }
.section--main .btn--fill{ background:#123d83; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e6f0f7`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.5 |
| 見出し | 32px | 1.6 |
| 小見出し | 22px | 1.5 |
| リード | 18px | 1.5 |
| リード | 16px | 1.5 |
| 本文 | 15px | 2 |
| 補助 | 14px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 828px
- セクションの上下余白: 80 / 40 / 64 / 120px（基本は 80px）
- 並びの間隔: 6 / 7 / 8 / 12px
- 角丸: 15px が基本。大きな面だけ 24px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 15px / 行間 1.6 |
| 見出し | 34px | 30px / 行間 1.5 |
| セクションの上下余白 | 80px | 48px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 8px | 8px |

- 本文は 15px → 15px、セクション余白は 80px → 48px（PCの60%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #123d83;
  border-radius: 15px; padding: 4px 14px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.7px;
}
.btn-sub{
  background: transparent; color: #123d83;
  border-radius: 0px; padding: 0px 0px; min-height: 47px;
  font-size: 11px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #123d83;
  border: 2px solid #123d83;
  border-radius: 24px; padding: 10px 22px; min-height: 48px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全面 |
| 2 | 620px | — | 1カラム・画像あり | 右 | 左（28:72） |
| 3 | 940px | `#e6f0f7` | 1カラム・画像あり | 左 | 右（36:64） |
| 4 | 280px | — | 帯・区切り | 左 | — |
| 5 | 560px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1260px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 460px | — | 1カラム・画像あり | 中央 | 左（14:86） |
| 8 | 420px | — | 1カラム・画像あり | 左 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e6f0f7`（4） / `#0e264c`（2） / `#0e264d`（1） / `#ffffff`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 28:72 / 36:64 / 14:86。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e6f0f7。面によって入れ替える */
  border-radius: 8px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #123d83;
  border-radius: 999px; padding: 4px 14px; font-size: 14px;
}
```

## 丸いもの

角丸は 15px だが、**完全な円は別扱い**で 20 箇所ある（16px×10、48px×7、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 19枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（9枚）、3:4（5枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0e264c }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#123d83; --on:#123d83 }
.section--main .btn--fill{ background:#123d83; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:8px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#123d83; border-radius:15px;
  padding:4px 14px; min-height:29px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:15px; --section-y:48px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0e264c` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（15px と 24px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
