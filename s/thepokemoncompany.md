# 株式会社ポケモン ふうのデザイン

- 出典: https://corporate.pokemon.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／自社プロダクト･サービス運営／漫画･アニメ･ゲーム

白地に `#292f32` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 1.5、セクション間 68px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #292f32;
  --sub: #d6d8da;
  --ink: #292f32;
  --ink-rev: #8d969b;
  --on: #292f32;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "googleSansFlex", sans-serif;
  --font-en: "googleSansFlex", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.5;
  --container: 1168px;
  --read: 568px;
  --section-y: 68px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 51.9% |
| 主色 | `#292f32` | 22.7% |
| 副色 | `#d6d8da` | 7.1% |
| 差し色 | `#131619` | 5.1% |
| 差し色 | `#819588` | 3% |
| 差し色 | `#afafae` | 2.8% |

文字色は `#292f32` / `#8d969b` / `#ffffff` / `#6f787d`。

- 主色 `#292f32` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.08) 0px 8px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#292f32` | 4 | 30 | 2 | 0 |
| `#edf2f5` | 8 | 0 | 0 | 0 |
| `#131619` | 1 | 0 | 0 | 0 |
| `#ffffff` | 8 | 16 | 3 | 0 |
| `#525a5e` | 1 | 6 | 3 | 0 |
| `#8d969b` | 0 | 57 | 2 | 0 |
| `#6f787d` | 0 | 7 | 0 | 0 |

- `#292f32` は文字色として30箇所で使うのが主。面としては4箇所しかないが、1枚が大きく画面の23%を占める。ボタンの地には使っていない。枠線にも2箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#edf2f5` | `#292f32` |
| `#292f32`（主色） | `#8d969b` |
| `#131619` | `#8d969b` |

```css
.section{ --on:#292f32 }                     /* 地の面 */
.section--main{ background:var(--main); color:#8d969b; --on:#8d969b }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#8d969b }
.section--main .btn--fill{ background:#8d969b; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: googleSansFlex
- 欧文: googleSansFlex
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.4 |
| 見出し | 25px | — |
| 小見出し | 22px | — |
| リード | 16px | — |
| リード | 14px | 1.45 |
| 本文 | 12px | 1.5 |

- 本文は 12px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1168px／読ませる段は 568px
- セクションの上下余白: 68 / 100 / 32 / 80px（基本は 68px）
- 並びの間隔: 4 / 8 / 12 / 24px
- 角丸: 0px が基本。大きな面だけ 28px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1090 / 344px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.5 | 12px / 行間 1.5 |
| 見出し | 34px | 29px / 行間 1.4 |
| セクションの上下余白 | 68px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 12px | 16px |

- 本文は 12px → 12px、セクション余白は 68px → 32px（PCの47%）。
- 文字サイズの段は 29 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #292f32;
  border-radius: 0px; padding: 0px 0px; min-height: 46px;
  font-size: 34px; font-weight: 700; letter-spacing: 0.68px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 2px solid #8d969b;
  border-radius: 9999px; padding: 10px 12px; min-height: 56px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.32px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 180px | — | ヒーロー（画像） | — | 全面 |
| 2 | 4940px | — | 3カラム・画像あり | 中央 | 全幅 |
| 3 | 900px | `#292f32` | 4カラム・画像あり | — | 全面 |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#edf2f5`（6） / `#292f32`（3） / `#131619`（1）
- 見出しは左0／中央1。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #edf2f5;
  border-radius: 9999px;
  padding: 16px 16px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #292f32;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 10 箇所ある（48px×7、32px×2、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 108枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（58枚）、1:1（18枚）、4:3（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#292f32 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#8d969b; --on:#8d969b }
.section--main .btn--fill{ background:#8d969b; color:var(--main) }
.card{ background:#edf2f5;
  border-radius:9999px; padding:16px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#292f32; border-radius:0px;
  padding:0px 0px; min-height:46px;
  font-size:34px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:344px){
  :root{ --fs-body:12px; --section-y:32px; --gap:16px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#292f32` は文字と小さな部品にだけ使う。
- 余白 68px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 9999px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 28px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
