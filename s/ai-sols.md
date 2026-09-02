# Aiソリューションズ ふうのデザイン

- 出典: https://www.ai-sols.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／製造業･工業･メーカー･商社･物流

白地に `#db1a1a` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 2.02、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #db1a1a;
  --sub: #aba59e;
  --ink: #999999;
  --ink-rev: #111111;
  --on: #db1a1a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Work Sans", sans-serif;
  --fs-body: 14px;
  --lh-body: 2.02;
  --container: 1156px;
  --read: 784px;
  --section-y: 140px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 83.2% |
| 主色 | `#232729` | 8.9% |
| 副色 | `#aba59e` | 1.7% |

文字色は `#999999` / `#111111` / `#ffffff` / `#cccccc`。

- 主色 `#db1a1a` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 34 | 46 | 11 | 0 |
| `#f3f4f5` | 20 | 0 | 19 | 5 |
| `#232729` | 3 | 0 | 0 | 1 |
| `#db1a1a` | 8 | 6 | 0 | 2 |
| `#111111` | 11 | 90 | 1 | 11 |
| `#999999` | 0 | 40 | 0 | 0 |
| `#cccccc` | 0 | 7 | 0 | 0 |

- `#db1a1a` は面として8箇所、文字として6箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#db1a1a` |
| `#f3f4f5` | `#db1a1a` |
| `#f5f6f7` | `#db1a1a` |
| `#db1a1a`（主色） | `#111111` |

```css
.section{ --on:#db1a1a }                     /* 地の面 */
.section--main{ background:var(--main); color:#111111; --on:#111111 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#111111 }
.section--main .btn--fill{ background:#111111; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#f5f6f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Yu Gothic Medium（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Work Sans
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | 1.7 |
| 見出し | 18px | 1.6 |
| 小見出し | 16px | 1.8 |
| 本文 | 14px | 2.02 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 2.02。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1156px／読ませる段は 784px
- セクションの上下余白: 140 / 92 / 120 / 32px（基本は 140px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1023 / 767 / 600 / 567px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2.02 | 14px / 行間 1.8 |
| セクションの上下余白 | 140px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 14px、セクション余白は 140px → 24px（PCの17%）。
- 文字サイズの段は 18 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 93px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.786939px;
}
.btn-sub{
  background: transparent; color: #999999;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.786939px;
}
.btn-sub{
  background: #111111; color: #ffffff;
  border-radius: 0px; padding: 0px 12px; min-height: 28px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.786939px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 5500px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 760px | — | 1カラム・画像あり | 左 | 左（16:84） |
| 3 | 860px | — | 2カラム・画像あり | 左 | 右（39:61） |
| 4 | 720px | — | 1カラム・画像あり | 左 | 全幅 |
| 5 | 260px | — | 帯・区切り | 左 | — |
| 6 | 720px | `#232729` | 1カラム・画像あり | — | 全面 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（12） / `#f3f4f5`（1） / `#f5f6f7`（1） / `#db1a1a`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 16:84 / 39:61。半分ずつには割らない。


## 部品

囲み（11箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 0px;
  padding: 46px 52px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 9 箇所ある（48px×6、56px×2、64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている
- 比率は 1:1（2枚）、3:2（1枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#db1a1a }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:5500px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#111111; --on:#111111 }
.section--main .btn--fill{ background:#111111; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:0px; padding:46px 52px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:93px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:24px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#db1a1a` は文字と小さな部品にだけ使う。
- 余白 140px と行間 2.02 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.02 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
