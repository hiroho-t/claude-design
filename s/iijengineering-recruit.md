# 株式会社IIJエンジニアリング 採用サイト ふうのデザイン

- 出典: https://recruit.iij-engineering.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／Web･IT･XR･デジタル･テクノロジー／企画･開発･マーケティング･コンサルティング

#f0f3f6 の地に `#9ebac4` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.8、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f0f3f6;
  --main: #9ebac4;
  --sub: #9ebac4;
  --ink: #111111;
  --ink-rev: #ffffff;
  --on: #9ebac4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto sans JP", sans-serif;
  --font-en: "PT Sans", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.8;
  --container: 1268px;
  --read: 608px;
  --section-y: 100px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f0f3f6` | 69.5% |
| 主色 | `#222222` | 20.5% |
| 副色 | `#9ebac4` | 2.5% |
| 差し色 | `#d9e5ed` | 2.2% |
| 差し色 | `#d65354` | 1.7% |
| 差し色 | `#2e5060` | 1.6% |

文字色は `#111111` / `#ffffff` / `#616161` / `#ed2446`。

- 主色 `#9ebac4` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0f3f6` | 9 | 0 | 4 | 2 |
| `#222222` | 2 | 0 | 0 | 0 |
| `#ffffff` | 22 | 99 | 0 | 3 |
| `#e0e0e0` | 0 | 0 | 10 | 0 |
| `#111111` | 0 | 74 | 0 | 0 |
| `#616161` | 0 | 1 | 0 | 0 |
| `#ed2446` | 1 | 1 | 0 | 1 |

- `#9ebac4` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eef1f4` | `#9ebac4` |
| `#ffffff` | `#9ebac4` |
| `#f0f3f6`（地） | `#9ebac4` |
| `#222222` | `#ffffff` |

```css
.section{ --on:#9ebac4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto sans JP
- 欧文: PT Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | — |
| 見出し | 22px | — |
| 小見出し | 20px | — |
| リード | 16px | — |
| 本文 | 15px | 1.8 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1268px／読ませる段は 608px
- セクションの上下余白: 100 / 140 / 160 / 40px（基本は 100px）
- 並びの間隔: 15 / 20 / 30px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 1160 / 1000 / 920 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.8 | 14px / 行間 2.2 |
| セクションの上下余白 | 100px | 172px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 15px |

- 本文は 15px → 14px、セクション余白は 100px → 172px（PCの172%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #111111;
  border-radius: 6px; padding: 0px 12px; min-height: 74px;
  font-size: 19px; font-weight: 700; letter-spacing: 1.33px;
}
.btn-sub{
  background: #eaeff3; color: #111111;
  border-radius: 6px; padding: 0px 12px; min-height: 74px;
  font-size: 19px; font-weight: 700; letter-spacing: 1.33px;
}
.btn-sub{
  background: #ed2446; color: #ffffff;
  border-radius: 8px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 700; letter-spacing: 1.05px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1480px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 740px | `#f0f3f6` | 1カラム・画像あり | 左 | 右（38:62） |
| 4 | 1860px | `#f0f3f6` | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 1080px | `#222222` | 1カラム・画像あり | 左 | 見出しの下 |
| 6 | 880px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 7 | 500px | `#eef1f4` | 1カラム・文字だけ | 左 | — |
| 8 | 640px | `#222222` | 1カラム・画像あり | — | 全面 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#eef1f4`（5） / `#ffffff`（4） / `#f0f3f6`（2） / `#222222`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 38:62。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dbdfe3。面によって入れ替える */
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（48px×2、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 55枚使っている
- 比率は 3:2（17枚）、2:3（15枚）、1:1（11枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#9ebac4 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#111111; border-radius:6px;
  padding:0px 12px; min-height:74px;
  font-size:19px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:172px; --gap:15px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f0f3f6` のまま。主色 `#9ebac4` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
