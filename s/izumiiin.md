# 泉胃腸科外科医院 ふうのデザイン

- 出典: https://www.izumiiin.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

#fefff5 の地に `#76785c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fefff5;
  --main: #76785c;
  --sub: #a3a3a1;
  --ink: #555555;
  --ink-rev: #76785c;
  --on: #76785c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-HiraKakuProN-W3", sans-serif;
  --font-en: "MFW-HiraKakuProN-W3", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 616px;
  --read: 944px;
  --section-y: 48px;
  --gap: 12px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fefff5` | 84.9% |
| 主色 | `#e1e5d4` | 5.7% |
| 副色 | `#a3a3a1` | 1.7% |

文字色は `#555555` / `#76785c` / `#1e8c63` / `#453721`。

- 主色 `#76785c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 5 | 3 | 0 | 0 |
| `#f4f4e8` | 5 | 0 | 0 | 5 |
| `#1e8c63` | 2 | 8 | 0 | 0 |
| `#3fa7d1` | 1 | 0 | 0 | 0 |
| `#453721` | 0 | 14 | 0 | 0 |
| `#555555` | 0 | 10 | 0 | 0 |
| `#76785c` | 0 | 3 | 0 | 0 |

- `#76785c` は文字色として3箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fefff5`（地） | `#76785c` |
| `#ffffff` | `#76785c` |

```css
.section{ --on:#76785c }                     /* 地の面 */
.section--main{ background:var(--main); color:#76785c; --on:#76785c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#76785c }
.section--main .btn--fill{ background:#76785c; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: MFW-HiraKakuProN-W3
- 欧文: MFW-HiraKakuProN-W3
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 18px | 1 |
| 見出し | 16px | — |
| 小見出し | 15px | — |
| 本文 | 14px | 1.8 |
| 補助 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 616px／読ませる段は 944px
- セクションの上下余白: 48 / 32 / 100 / 128px（基本は 48px）
- 並びの間隔: 6 / 10 / 12 / 16px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1264 / 1199 / 958 / 559 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 12px / 行間 1.8 |
| 見出し | 18px | 15px / 行間 1 |
| セクションの上下余白 | 48px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 12px | 6px |

- 本文は 14px → 12px、セクション余白は 48px → 24px（PCの50%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #f4f4e8; color: #453721;
  border: 1px solid #e8e8e8;
  border-radius: 0px; padding: 20px 24px; min-height: 59px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #f4f4e8; color: #453721;
  border-radius: 8px; padding: 20px 24px; min-height: 58px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 2320px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 960px | — | 3カラム・画像あり | 中央 | — |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fefff5`（1） / `#ffffff`（1）
- 見出しは左1／中央1。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #1e8c63;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 8px; font-size: 11px;
}
```

## 画像

- 15枚使っている
- 比率は 3:4（14枚）
- 角丸 16px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#76785c }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:2320px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#76785c; --on:#76785c }
.section--main .btn--fill{ background:#76785c; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f4f4e8; color:#453721; border-radius:0px;
  padding:20px 24px; min-height:59px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:16px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:559px){
  :root{ --fs-body:12px; --section-y:24px; --gap:6px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#fefff5` のまま。主色 `#76785c` は文字と小さな部品にだけ使う。
- 余白 48px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 16px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。
