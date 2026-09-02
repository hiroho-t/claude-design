# 有限会社KKI製造部 ふうのデザイン

- 出典: https://manufacture.v-kki.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#aacdd7` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 2.3、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #aacdd7;
  --sub: #aacdd7;
  --ink: #465059;
  --ink-rev: #006dd2;
  --on: #aacdd7;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 15px;
  --lh-body: 2.3;
  --container: 1192px;
  --read: 1048px;
  --section-y: 32px;
  --gap: 16px;
  --radius: 28px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 88.9% |
| 主色 | `#d7e1e9` | 6.3% |
| 副色 | `#aacdd7` | 3.4% |

文字色は `#465059` / `#006dd2` / `#ffffff` / `#8c8d8d`。

- 主色 `#aacdd7` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 10 | 6 | 4 | 0 |
| `#006dd2` | 5 | 15 | 5 | 0 |
| `#465059` | 0 | 8 | 0 | 0 |
| `#8c8d8d` | 0 | 10 | 0 | 0 |

- `#aacdd7` は

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 400 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.7 |
| 見出し | 28px | — |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 2.3 |
| 補助 | 13px | — |
| 注記 | 11px | — |

- 本文は 15px・行間 2.3。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1192px／読ませる段は 1048px
- セクションの上下余白: 32 / 36 / 40 / 76px（基本は 32px）
- 並びの間隔: 8 / 10 / 16 / 40px
- 角丸: 28px が基本。大きな面だけ 20px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2.3 | 14px / 行間 2.3 |
| 見出し | 40px | 14px / 行間 2.3 |
| セクションの上下余白 | 32px | 32px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 24px |

- 本文は 15px → 14px、セクション余白は 32px → 32px（PCの100%）。
- 文字サイズの段は 20 / 16 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #006dd2;
  border: 1px solid #88c8ff;
  border-radius: 40px; padding: 20px 30px; min-height: 74px;
  font-size: 16px; font-weight: 350; letter-spacing: 1.28px;
}
.btn-sub{
  background: transparent; color: #006dd2;
  border-radius: 0px; padding: 0px 0px; min-height: 66px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.28px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1540px | — | ヒーロー | — | — |
| 2 | 260px | — | 帯・区切り | — | — |
| 3 | 1120px | — | 1カラム・文字だけ | — | — |
| 4 | 1000px | — | 1カラム・文字だけ | — | — |
| 5 | 120px | — | 帯・区切り | — | — |
| 6 | 760px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 7 | 1040px | — | 1カラム・画像あり | — | 全面 |
| 8 | 1080px | — | 1カラム・画像あり | 右 | 左（31:69） |
| 9 | 560px | — | 2カラム・画像あり | 左 | — |
| 10 | 500px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 11 | 420px | — | 1カラム・画像あり | 左 | — |
| 12 | 520px | — | 1カラム・画像あり | — | — |

- 全12セクション。
- 使われている面の色: `#ffffff`（6）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 31:69。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 28px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 28px だが、**完全な円は別扱い**で 5 箇所ある（64px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 9枚使っている
- 比率は 2:3（3枚）、3:4（2枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#aacdd7 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1540px; display:grid; align-content:center }
.card{ background:#ffffff;
  border-radius:28px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#006dd2; border-radius:40px;
  padding:20px 30px; min-height:74px;
  font-size:16px; font-weight:350 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:2/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:24px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#aacdd7` は文字と小さな部品にだけ使う。
- 余白 32px と行間 2.3 を先に決めてから中身を入れる。
- 画像は 2:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 28px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.3 より詰めない。
- 中途半端な角丸（28px と 20px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
