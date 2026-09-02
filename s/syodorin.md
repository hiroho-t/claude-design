# 唱導林 ふうのデザイン

- 出典: https://syodorin.org/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／寺･神社･葬儀･仏壇／レスポンシブ

#fbfbfb の地に `#6d5847` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.8、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fbfbfb;
  --main: #6d5847;
  --sub: #2c2219;
  --ink: #111111;
  --ink-rev: #ffffff;
  --on: #6d5847;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Noto Serif JP", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.8;
  --container: 880px;
  --read: 740px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fbfbfb` | 65.1% |
| 主色 | `#d5d8d7` | 12.5% |
| 副色 | `#2c2219` | 8.7% |
| 差し色 | `#eceae5` | 3.4% |
| 差し色 | `#6d5847` | 3.1% |
| 差し色 | `#120c0b` | 2.9% |

文字色は `#111111` / `#ffffff`。

- 主色 `#6d5847` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 7 | 13 | 0 | 3 |
| `#111111` | 1 | 73 | 0 | 0 |

- `#6d5847` は

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Noto Serif JP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1.8 |
| 見出し | 25px | 1.8 |
| 小見出し | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.8 |
| 補助 | 13px | — |
| 注記 | 11px | — |

- 本文は 14px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 880px／読ませる段は 740px
- セクションの上下余白: 40 / 180 / 120 / 160px（基本は 40px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 960 / 782 / 600 / 560px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.8 | 12px / 行間 2.2 |
| 見出し | 26px | 18px / 行間 1.8 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 16px | —px |

- 本文は 14px → 12px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 18 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #111111;
  border-radius: 0px; padding: 25px 0px; min-height: 81px;
  font-size: 17px; font-weight: 400; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #111111;
  border-radius: 0px; padding: 0px 0px; min-height: 81px;
  font-size: 17px; font-weight: 400; letter-spacing: 1.2px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 360px | — | ヒーロー（画像） | — | 全面 |
| 2 | 580px | — | 1カラム・文字だけ | 中央 | — |
| 3 | 680px | — | 1カラム・文字だけ | 中央 | — |
| 4 | 460px | — | 3カラム・画像あり | 左 | — |
| 5 | 1420px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 6 | 1360px | — | 1カラム・文字だけ | 中央 | — |

- 全6セクション。
- 使われている面の色: `#ffffff`（1）
- 見出しは左2／中央3。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 100px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（200px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている
- 比率は 1:1（12枚）、16:9（4枚）、3:2（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#6d5847 }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:360px; display:grid; align-content:center }
.card{ background:#ffffff;
  border-radius:100px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#111111; border-radius:0px;
  padding:25px 0px; min-height:81px;
  font-size:17px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:12px; --section-y:32px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地は `#fbfbfb` のまま。主色 `#6d5847` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 100px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
