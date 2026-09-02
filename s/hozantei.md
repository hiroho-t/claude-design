# 黒川温泉 源流の宿 帆山亭 ふうのデザイン

- 出典: https://www.hozantei.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ホテル･旅館･温泉／レスポンシブ

白地に `#43678d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.4、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #43678d;
  --sub: #1f3235;
  --ink: #58574c;
  --ink-rev: #ffffff;
  --on: #43678d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-筑紫Aオールド明朝 Pr6 R", sans-serif;
  --font-en: "AGaramondPro-Regular", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.4;
  --container: 1200px;
  --read: 1100px;
  --section-y: 100px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.8% |
| 主色 | `#030606` | 4.2% |
| 副色 | `#1f3235` | 2.3% |
| 差し色 | `#43678d` | 1.8% |
| 差し色 | `#0b191b` | 1.7% |

文字色は `#58574c` / `#ffffff`。

- 主色 `#43678d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#58574c` | 2 | 38 | 2 | 0 |
| `#ffffff` | 0 | 14 | 0 | 0 |

- `#43678d` は

## 文字

- 和文: FOT-筑紫Aオールド明朝 Pr6 R
- 欧文: AGaramondPro-Regular
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.2 |
| 見出し | 24px | 1.6 |
| 小見出し | 18px | — |
| 本文 | 16px | 1.2 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 2.4。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 1100px
- セクションの上下余白: 100 / 80 / 92 / 152px（基本は 100px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1500 / 1200 / 960 / 769 / 500px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.4 | 14px / 行間 2.6 |
| セクションの上下余白 | 100px | 100px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 100px → 100px（PCの100%）。
- 文字サイズの段は 20 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #58574c;
  border: 1px solid #58574c;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 15px; font-weight: 400; letter-spacing: 3.75px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 65px;
  font-size: 12px; font-weight: 400; letter-spacing: 4.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | 右 | — |
| 2 | 1400px | — | 2カラム・画像あり | 左 | 全幅 |
| 3 | 1240px | — | 1カラム・画像あり | 左 | 全幅 |
| 4 | 660px | — | 6カラム・画像あり | 右 | 見出しの下 |
| 5 | 580px | — | 3カラム・画像あり | 右 | 見出しの下 |
| 6 | 220px | — | 帯・区切り | — | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: 
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 15枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（8枚）、3:2（3枚）、16:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#43678d }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#58574c; border-radius:0px;
  padding:0px 0px; min-height:60px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:100px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#43678d` は文字と小さな部品にだけ使う。
- 余白 100px と行間 2.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
