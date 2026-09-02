# 医療法人ハートフル ふうのデザイン

- 出典: https://heartful.hiroshima.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬

白地に `#009644` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 1.87、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #009644;
  --sub: #939893;
  --ink: #555555;
  --ink-rev: #777777;
  --on: #009644;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "UDKakugoC80Pro-R", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.87;
  --container: 1120px;
  --read: 1116px;
  --section-y: 40px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.4% |
| 主色 | `#e9e9ea` | 5.1% |
| 副色 | `#939893` | 3.9% |
| 差し色 | `#c2c9ca` | 3.7% |

文字色は `#555555` / `#777777` / `#000000` / `#009644`。

- 主色 `#009644` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 4px 14px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 10 | 0 | 0 | 2 |
| `#009644` | 0 | 7 | 1 | 0 |
| `#555555` | 0 | 114 | 0 | 0 |
| `#777777` | 0 | 16 | 0 | 0 |
| `#000000` | 0 | 10 | 0 | 0 |

- `#009644` は文字色として7箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも1箇所。

## 文字

- 和文: FP-HiraginoUDSansFStdN-W4（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: UDKakugoC80Pro-R
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 46px | 1.88 |
| 見出し | 28px | 1.67 |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 1.67 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 1.87。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1116px
- セクションの上下余白: 40 / 32 / 52 / 180px（基本は 40px）
- 並びの間隔: 4 / 5 / 10 / 20px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.87 | 14px / 行間 1.67 |
| 見出し | 46px | 20px / 行間 1.67 |
| セクションの上下余白 | 40px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 20px |

- 本文は 15px → 14px、セクション余白は 40px → 60px（PCの150%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #555555;
  border: 1px;
  border-radius: 0px; padding: 10px 0px; min-height: 41px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #009644;
  border-radius: 900px; padding: 8px 80px; min-height: 48px;
  font-size: 17px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #009644;
  border: 2px solid #009644;
  border-radius: 5px; padding: 6px 15px; min-height: 36px;
  font-size: 14px; font-weight: 600; letter-spacing: 0.27px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | 中央 | 右（73:27） |
| 2 | 260px | — | 帯・区切り | 左 | 見出しの下 |
| 3 | 3660px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 4 | 420px | — | 6カラム・画像あり | 左 | 左（39:61） |
| 5 | 540px | — | 1カラム・画像あり | 左 | 右（87:13） |
| 6 | 500px | — | 6カラム・画像あり | 左 | 見出しの下 |

- 全6セクション。
- 使われている面の色: 
- 見出しは左5／中央1。
- 2カラムの分け方は 73:27 / 39:61 / 87:13。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（48px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 25枚使っている
- 比率は 1:1（10枚）、16:9（6枚）、3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#009644 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.card{ background:#ffffff;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#555555; border-radius:0px;
  padding:10px 0px; min-height:41px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:60px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#009644` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.87 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.87 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
