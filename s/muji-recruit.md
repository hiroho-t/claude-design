# 新卒採用 ふうのデザイン

- 出典: https://careers.muji.com/jp/recruit
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: 採用サイト／生活用品･雑貨･インテリア･家具／レスポンシブ

白地に `#d5c5b5` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d5c5b5;
  --sub: #252325;
  --ink: #3c3c43;
  --ink-rev: #76767b;
  --on: #d5c5b5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP Variable", sans-serif;
  --font-en: sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 1224px;
  --read: 584px;
  --section-y: 96px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 78.3% |
| 主色 | `#dadcd5` | 2.9% |
| 副色 | `#252325` | 2.6% |
| 差し色 | `#f2f1ed` | 2% |
| 差し色 | `#b5b8b1` | 1.7% |
| 差し色 | `#d5c5b5` | 1.6% |

文字色は `#3c3c43` / `#76767b` / `#ffffff`。

- 主色 `#d5c5b5` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 8 | 0 | 0 | 1 |
| `#ffffff` | 21 | 3 | 0 | 19 |
| `#3c3c43` | 2 | 125 | 0 | 2 |
| `#76767b` | 0 | 3 | 0 | 0 |

- `#d5c5b5` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5f5f5` | `#d5c5b5` |
| `#ffffff`（地） | `#d5c5b5` |

```css
.section{ --on:#d5c5b5 }                     /* 地の面 */
.section--main{ background:var(--main); color:#76767b; --on:#76767b }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#76767b }
.section--main .btn--fill{ background:#76767b; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP Variable
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 1.6 |
| 見出し | 36px | 1.6 |
| 小見出し | 28px | 1.6 |
| リード | 20px | 1.76 |
| リード | 18px | 1.6 |
| リード | 16px | — |
| 本文 | 14px | 1.6 |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1224px／読ませる段は 584px
- セクションの上下余白: 96 / 40 / 64px（基本は 96px）
- 並びの間隔: 4 / 8 / 12 / 24px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1300 / 1200 / 1004 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 64px | 40px / 行間 1.6 |
| セクションの上下余白 | 96px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 12px | 8px |

- 本文は 14px → 14px、セクション余白は 96px → 40px（PCの42%）。
- 文字サイズの段は 32 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #3c3c43;
  border: 1px solid #c4c4c6;
  border-radius: 3px; padding: 8px 8px; min-height: 40px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.48px;
}
.btn-sub{
  background: #ffffff; color: #3c3c43;
  border: 1px solid #c4c4c6;
  border-radius: 4px; padding: 16px 24px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.48px;
}
.btn-sub{
  background: #ffffff; color: #3c3c43;
  border: 1px solid #c4c4c6;
  border-radius: 4px; padding: 20px 32px; min-height: 71px;
  font-size: 18px; font-weight: 700; letter-spacing: 0.48px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 640px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 140px | — | 帯・区切り | 中央 | — |
| 3 | 200px | — | 帯・区切り | — | — |
| 4 | 500px | — | 1カラム・画像あり | 右 | 左（56:44） |
| 5 | 500px | — | 1カラム・画像あり | 左 | 右（56:44） |
| 6 | 700px | — | 1カラム・画像あり | 右 | 左（73:27） |
| 7 | 760px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 8 | 800px | — | 1カラム・画像あり | 左 | 右（42:58） |
| 9 | 500px | — | 1カラム・画像あり | 右 | 左（56:44） |
| 10 | 940px | — | 4カラム・画像あり | 左 | 右（24:76） |
| 11 | 320px | — | 3カラム | 中央 | — |
| 12 | 160px | — | 帯・区切り | — | — |
| 13 | 760px | — | 1カラム・文字だけ | 左 | — |
| 14 | 660px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 15 | 180px | — | 帯・区切り | — | 全幅 |

- 全15セクション。
- 使われている面の色: `#f5f5f5`（7） / `#ffffff`（1）
- 見出しは左5／中央4。
- 2カラムの分け方は 56:44 / 56:44 / 73:27 / 42:58 / 56:44 / 24:76。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #f5f5f5;
  border-radius: 0px;
  padding: 40px 40px;
}
```


## 画像

- 25枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（13枚）、3:4（5枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d5c5b5 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:640px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#76767b; --on:#76767b }
.section--main .btn--fill{ background:#76767b; color:var(--main) }
.card{ background:#f5f5f5;
  border-radius:0px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#3c3c43; border-radius:3px;
  padding:8px 8px; min-height:40px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d5c5b5` は文字と小さな部品にだけ使う。
- 余白 96px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
