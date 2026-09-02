# 六本松の歯医者 六本松MI歯科 ふうのデザイン

- 出典: https://6mi-dental.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#2b414f` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 17px・行間 2.2、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2b414f;
  --sub: #2b414f;
  --ink: #053864;
  --ink-rev: #ffffff;
  --on: #2b414f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FP-こぶりなゴシック StdN W3", sans-serif;
  --font-en: "AGaramondPro-Regular", sans-serif;
  --fs-body: 17px;
  --lh-body: 2.2;
  --container: 932px;
  --read: 704px;
  --section-y: 56px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 78.7% |
| 主色 | `#d8e0e1` | 11.2% |
| 副色 | `#2b414f` | 2.2% |
| 差し色 | `#b5d2dc` | 2.2% |
| 差し色 | `#636d75` | 2.1% |
| 差し色 | `#7fa7b4` | 1.9% |

文字色は `#053864` / `#ffffff`。

- 主色 `#2b414f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#053864` | 1 | 72 | 0 | 1 |
| `#ffffff` | 0 | 17 | 0 | 0 |

- `#2b414f` は

## 文字

- 和文: FP-こぶりなゴシック StdN W3
- 欧文: AGaramondPro-Regular
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.75 |
| 見出し | 18px | — |
| 本文 | 17px | 1.95 |
| 補助 | 15px | 1 |
| 注記 | 14px | 1 |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 17px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 932px／読ませる段は 704px
- セクションの上下余白: 56 / 120 / 140 / 152px（基本は 56px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1601 / 1439 / 1420 / 1380 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 2.2 | 14px / 行間 1 |
| 見出し | 30px | 14px / 行間 1 |
| セクションの上下余白 | 56px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 16px | —px |

- 本文は 17px → 14px、セクション余白は 56px → 32px（PCの57%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #053864;
  border: 1px solid #d9e1e8;
  border-radius: 0px; padding: 11px 4px; min-height: 38px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.84px;
}
.btn-sub{
  background: transparent; color: #053864;
  border: 1px solid #d9e1e8;
  border-radius: 0px; padding: 12px 34px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.84px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 260px | — | ヒーロー（画像） | — | 全面 |
| 2 | 260px | — | 帯・区切り | — | 全面 |
| 3 | 260px | — | 帯・区切り | — | 全面 |
| 4 | 260px | — | 帯・区切り | — | 全面 |
| 5 | 260px | — | 帯・区切り | — | 全面 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: 


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d9e1e8。面によって入れ替える */
  border-radius: 0px;
  padding: 40px 34px;
}
```


## 画像

- 74枚使っている
- 比率は 3:2（41枚）、2:3（14枚）、3:4（10枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2b414f }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:260px; display:grid; align-content:center }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:40px 34px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#053864; border-radius:0px;
  padding:11px 4px; min-height:38px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:14px; --section-y:32px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#2b414f` は文字と小さな部品にだけ使う。
- 余白 56px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 20px 以外）を混ぜない。
