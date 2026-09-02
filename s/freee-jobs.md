# 採用情報 ふうのデザイン

- 出典: https://jobs.freee.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#bea896` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 2.2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #bea896;
  --sub: #e2e3e0;
  --ink: #323232;
  --ink-rev: #5a5a5a;
  --on: #bea896;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 18px;
  --lh-body: 2.2;
  --container: 1288px;
  --read: 576px;
  --section-y: 80px;
  --gap: 18px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 84.6% |
| 主色 | `#bcc7d1` | 3.9% |
| 副色 | `#e2e3e0` | 3.1% |
| 差し色 | `#837374` | 2.3% |
| 差し色 | `#bea896` | 2% |
| 差し色 | `#3e373d` | 1.7% |

文字色は `#323232` / `#5a5a5a` / `#6e6b6b` / `#2864f0`。

- 主色 `#bea896` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f5f5` | 20 | 0 | 0 | 17 |
| `#ebf3ff` | 6 | 0 | 0 | 0 |
| `#ffffff` | 11 | 3 | 0 | 5 |
| `#2864f0` | 1 | 9 | 5 | 0 |
| `#323232` | 0 | 91 | 0 | 0 |
| `#5a5a5a` | 0 | 58 | 0 | 0 |
| `#6e6b6b` | 0 | 12 | 0 | 0 |

- `#bea896` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ebf3ff` | `#bea896` |
| `#f7f5f5` | `#bea896` |
| `#ffffff`（地） | `#bea896` |

```css
.section{ --on:#bea896 }                     /* 地の面 */
.section--main{ background:var(--main); color:#5a5a5a; --on:#5a5a5a }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#5a5a5a }
.section--main .btn--fill{ background:#5a5a5a; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.6 |
| 本文 | 18px | 1.4 |
| 補助 | 17px | — |
| 注記 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1288px／読ませる段は 576px
- セクションの上下余白: 80 / 100 / 120 / 60px（基本は 80px）
- 並びの間隔: 8 / 10 / 18 / 30px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1288 / 1024 / 1023 / 520 / 519px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2.2 | 16px / 行間 1.6 |
| 見出し | 38px | 25px / 行間 1.6 |
| セクションの上下余白 | 80px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 18px | 10px |

- 本文は 18px → 16px、セクション余白は 80px → 32px（PCの40%）。
- 文字サイズの段は 18 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #f7f5f5; color: #5a5a5a;
  border-radius: 0px; padding: 6px 8px; min-height: 28px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.28px;
}
.btn-sub{
  background: #ffffff; color: #323232;
  border-radius: 30px; padding: 8px 16px; min-height: 30px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #323232;
  border-radius: 0px; padding: 0px 0px; min-height: 43px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 9820px | — | ヒーロー（画像） | 右 | 見出しの下 |
| 2 | 840px | `#f7f5f5` | 6カラム・画像あり | 左 | — |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ebf3ff`（5） / `#f7f5f5`（2） / `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 2px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 10px;
  padding: 2px 2px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #323232;
  border-radius: 999px; padding: 8px 16px; font-size: 15px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（40px×5、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 21枚使っている
- 比率は 3:2（11枚）、1:1（6枚）、21:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#bea896 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:9820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#5a5a5a; --on:#5a5a5a }
.section--main .btn--fill{ background:#5a5a5a; color:var(--main) }
.card{ background:transparent; border:2px solid var(--on);
  border-radius:10px; padding:2px 2px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f7f5f5; color:#5a5a5a; border-radius:0px;
  padding:6px 8px; min-height:28px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:520px){
  :root{ --fs-body:16px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#bea896` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
