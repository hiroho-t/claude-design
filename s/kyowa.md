# 共和電業 ふうのデザイン

- 出典: https://www.kyowa-ei.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#0069bc` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 1.75、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0069bc;
  --sub: #d4d1d2;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #0069bc;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "TazuganeGothicStdN-Bold", sans-serif;
  --font-en: "TazuganeGothicStdN-Bold", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.75;
  --container: 1152px;
  --read: 576px;
  --section-y: 80px;
  --gap: 12px;
  --radius: 2px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.3% |
| 主色 | `#22222f` | 10% |
| 副色 | `#d4d1d2` | 3.1% |
| 差し色 | `#0069bc` | 2.7% |
| 差し色 | `#6b9ab3` | 2.1% |
| 差し色 | `#b2a6a5` | 2% |

文字色は `#ffffff` / `#000000` / `#22222f` / `#a7a7ac`。

- 主色 `#0069bc` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.5) 0px 5px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#22222f` | 4 | 23 | 0 | 1 |
| `#0069bc` | 5 | 2 | 3 | 3 |
| `#ffffff` | 5 | 34 | 0 | 3 |
| `#fcf0f0` | 1 | 0 | 0 | 0 |
| `#e55e43` | 6 | 2 | 2 | 6 |
| `#000000` | 0 | 4 | 0 | 0 |
| `#a7a7ac` | 0 | 30 | 0 | 0 |

- `#0069bc` は面として5箇所、文字として2箇所。塗りが主役。ボタンの地にも使う。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#0069bc`（主色） | `#000000` |
| `#22222f` | `#000000` |
| `#ffffff`（地） | `#0069bc` |

```css
.section{ --on:#0069bc }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: TazuganeGothicStdN-Bold
- 欧文: TazuganeGothicStdN-Bold
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 24px | 1.5 |
| 小見出し | 18px | — |
| リード | 16px | — |
| リード | 14px | — |
| リード | 13px | — |
| 本文 | 12px | 1.75 |

- 本文は 12px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 576px
- セクションの上下余白: 80 / 120 / 96 / 32px（基本は 80px）
- 並びの間隔: 4 / 8 / 12 / 24px
- 角丸: 2px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1090 / 960 / 640 / 344px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 32px | 22px / 行間 1.5 |
| セクションの上下余白 | 80px | 64px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 12px | 8px |

- 本文は 12px → 14px、セクション余白は 80px → 64px（PCの80%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #e55e43; color: #ffffff;
  border-radius: 2px; padding: 8px 16px; min-height: 48px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #0066b3; color: #ffffff;
  border: 1px solid #0066b3;
  border-radius: 18px; padding: 6px 14px; min-height: 42px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #e55e43;
  border: 2px solid #e55e43;
  border-radius: 2px; padding: 8px 14px; min-height: 48px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 600px | — | ヒーロー | — | — |
| 2 | 540px | — | 1カラム・文字だけ | — | — |
| 3 | 300px | — | 帯・区切り | — | — |
| 4 | 280px | — | 帯・区切り | 中央 | — |
| 5 | 680px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 2700px | — | 3カラム・画像あり | — | 全面 |
| 7 | 1000px | — | 1カラム・画像あり | — | — |
| 8 | 840px | `#22222f` | 1カラム・画像あり | — | 全面 |
| 9 | 660px | — | 1カラム・画像あり | 左 | — |
| 10 | 520px | — | 2カラム・画像あり | — | — |

- 全10セクション。
- 使われている面の色: `#0069bc`（2） / `#22222f`（2） / `#ffffff`（1）
- 見出しは左1／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 9枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 4:3（6枚）、3:2（2枚）
- 角丸 2px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0069bc }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:600px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e55e43; color:#ffffff; border-radius:2px;
  padding:8px 16px; min-height:48px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:2px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:14px; --section-y:64px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0069bc` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 2px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（2px と 0px 以外）を混ぜない。
