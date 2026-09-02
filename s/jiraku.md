# 社会福祉法人 慈楽福祉会 ふうのデザイン

- 出典: https://jiraku.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／福祉･介護

#f9f8f4 の地に `#a6bb9d` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 null、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f9f8f4;
  --main: #a6bb9d;
  --sub: #58714e;
  --ink: #3a3937;
  --ink-rev: #4e58a4;
  --on: #a6bb9d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Maru Gothic", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 14px;
  --lh-body: null;
  --container: 1264px;
  --read: 720px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f9f8f4` | 87.1% |
| 主色 | `#a6bb9d` | 3% |
| 副色 | `#58714e` | 2.3% |
| 差し色 | `#435c3f` | 2.1% |

文字色は `#3a3937` / `#4e58a4` / `#f9f8f4` / `#ffffff`。

- 主色 `#a6bb9d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(58, 57, 55, 0.4) 0px 10px 35px -5px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#4e58a4` | 6 | 24 | 0 | 0 |
| `#faf8f5` | 1 | 12 | 0 | 0 |
| `#ffffff` | 5 | 8 | 2 | 0 |
| `#deebf5` | 21 | 0 | 0 | 0 |
| `#fdc073` | 5 | 0 | 0 | 0 |
| `#3a3937` | 0 | 84 | 0 | 0 |

- `#a6bb9d` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#4e58a4` | `#4e58a4` |
| `#faf8f5` | `#a6bb9d` |

```css
.section{ --on:#a6bb9d }                     /* 地の面 */
.section--main{ background:var(--main); color:#4e58a4; --on:#4e58a4 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#4e58a4 }
.section--main .btn--fill{ background:#4e58a4; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Maru Gothic
- 欧文: YakuHanJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.5 |
| 見出し | 16px | — |
| 小見出し | 15px | — |
| 本文 | 14px | — |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1264px／読ませる段は 720px
- セクションの上下余白: 52 / 124 / 80 / 36px（基本は 52px）
- 並びの間隔: 6 / 10 / 16 / 30px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1570 / 1200 / 1024 / 897 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px | 14px / 行間 1 |
| 見出し | 28px | 24px / 行間 1.5 |
| セクションの上下余白 | 52px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 6px |

- 本文は 14px → 14px、セクション余白は 52px → 60px（PCの115%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #4e58a4;
  border-radius: 0px; padding: 15px 0px; min-height: 55px;
  font-size: 11px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #4e58a4;
  border-radius: 0px; padding: 0px 0px; min-height: 44px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px; padding: 8px 8px; min-height: 33px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 4360px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 520px | `#4e58a4` | 1カラム・画像あり | — | 全面 |
| 3 | 400px | — | 1カラム・画像あり | — | — |

- 全3セクション。
- 使われている面の色: `#4e58a4`（1） / `#faf8f5`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #deebf5; color: #3a3937;
  border-radius: 4px; padding: 6px 6px; font-size: 12px;
}
```

## 画像

- 24枚使っている
- 比率は 16:9（9枚）、3:2（5枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a6bb9d }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:4360px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#4e58a4; --on:#4e58a4 }
.section--main .btn--fill{ background:#4e58a4; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#4e58a4; border-radius:0px;
  padding:15px 0px; min-height:55px;
  font-size:11px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:897px){
  :root{ --fs-body:14px; --section-y:60px; --gap:6px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f9f8f4` のまま。主色 `#a6bb9d` は文字と小さな部品にだけ使う。
- 余白 52px と行間 null を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
