# Smart相談室 ふうのデザイン

- 出典: https://smart-sou.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／レスポンシブ

白地に `#30a0bc` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 null、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #30a0bc;
  --sub: #d0d8da;
  --ink: #3d3a2b;
  --ink-rev: #006e96;
  --on: #30a0bc;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Material Icons", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1084px;
  --read: 1120px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.5% |
| 主色 | `#30a0bc` | 5.1% |
| 副色 | `#d0d8da` | 4.7% |
| 差し色 | `#e9efef` | 2.4% |
| 差し色 | `#7f6a7d` | 2.3% |
| 差し色 | `#99aeb4` | 2.3% |

文字色は `#3d3a2b` / `#006e96` / `#333333` / `#ffffff`。

- 主色 `#30a0bc` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px 8px 16px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 31 | 19 | 0 | 1 |
| `#eaf6f9` | 17 | 0 | 0 | 15 |
| `#30a0bc` | 1 | 0 | 0 | 0 |
| `#d93564` | 3 | 0 | 2 | 1 |
| `#73c2d9` | 1 | 0 | 0 | 0 |
| `#3d3a2b` | 0 | 71 | 0 | 0 |
| `#006e96` | 1 | 27 | 6 | 0 |
| `#333333` | 0 | 29 | 0 | 0 |

- `#30a0bc` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#30a0bc` |
| `#fafafa` | `#30a0bc` |
| `#eaf6f9` | `#30a0bc` |
| `#30a0bc`（主色） | `#006e96` |

```css
.section{ --on:#30a0bc }                     /* 地の面 */
.section--main{ background:var(--main); color:#006e96; --on:#006e96 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#006e96 }
.section--main .btn--fill{ background:#006e96; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fafafa` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Material Icons
- ウェイトは 700 / 800 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.6 |
| 見出し | 24px | — |
| 小見出し | 20px | 1.4 |
| リード | 18px | 1.5 |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1084px／読ませる段は 1120px
- セクションの上下余白: 52 / 100 / 84 / 32px（基本は 52px）
- 並びの間隔: 6 / 10 / 16 / 32px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 498 / 480 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 16px |
| 見出し | 40px | 22px / 行間 1.5 |
| セクションの上下余白 | 52px | 60px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 16px |

- 本文は 16px → 16px、セクション余白は 52px → 60px（PCの115%）。
- 文字サイズの段は 24 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #f5f5f5; color: #3d3a2b;
  border-radius: 4px; padding: 4px 8px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #f5f5f5; color: #333333;
  border-radius: 4px; padding: 4px 8px; min-height: 26px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.72px;
}
.btn-sub{
  background: #f5f5f5; color: #2e2e2e;
  border-radius: 4px; padding: 4px 8px; min-height: 26px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.72px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 160px | `#ffffff` | ヒーロー（画像） | — | — |
| 2 | 640px | — | 2カラム・画像あり | 左 | — |
| 3 | 200px | `#ffffff` | 帯・区切り | — | — |
| 4 | 1020px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1160px | — | 1カラム・画像あり | — | 全面 |
| 6 | 860px | `#fafafa` | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 980px | `#fafafa` | 4カラム・画像あり | 左 | 見出しの下 |
| 8 | 680px | `#fafafa` | 1カラム・文字だけ | 中央 | — |
| 9 | 520px | `#fafafa` | 1カラム・画像あり | — | — |
| 10 | 760px | `#ffffff` | 1カラム・画像あり | 左 | 見出しの下 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（20） / `#fafafa`（4） / `#eaf6f9`（2） / `#30a0bc`（1）
- 見出しは左3／中央3。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 16px 16px;
}
```

ラベル・タグ

```css
.chip{
  background: #f5f5f5; color: #3d3a2b;
  border-radius: 4px; padding: 4px 8px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（64px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 15枚使っている
- 比率は 16:9（10枚）、4:3（3枚）、3:2（1枚）
- 角丸 8px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#30a0bc }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:160px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#006e96; --on:#006e96 }
.section--main .btn--fill{ background:#006e96; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:16px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f5f5f5; color:#3d3a2b; border-radius:4px;
  padding:4px 8px; min-height:29px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:8px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:16px; --section-y:60px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#30a0bc` は文字と小さな部品にだけ使う。
- 余白 52px と行間 null を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 8px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
