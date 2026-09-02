# アマノ病院 ふうのデザイン

- 出典: https://amanohospital.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#009644` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.87、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #009644;
  --sub: #afb4ba;
  --ink: #555555;
  --ink-rev: #ffffff;
  --on: #009644;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "TsukuARdGothicStd-B", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.87;
  --container: 1360px;
  --read: 1200px;
  --section-y: 100px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.8% |
| 主色 | `#979c9f` | 7.9% |
| 副色 | `#afb4ba` | 4.6% |
| 差し色 | `#8e8982` | 4.2% |
| 差し色 | `#5c5d56` | 3.5% |
| 差し色 | `#6f7575` | 2.4% |

文字色は `#555555` / `#ffffff`。

- 主色 `#009644` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 5px 10px 20px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 12 | 4 | 1 |
| `#555555` | 0 | 133 | 1 | 0 |

- `#009644` は

## 文字

- 和文: FP-HiraginoUDSansFStdN-W4（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: TsukuARdGothicStd-B
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | — |
| 見出し | 18px | — |
| 小見出し | 15px | — |
| 本文 | 14px | 1.87 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 1.87。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 1200px
- セクションの上下余白: 100 / 40 / 60 / 32px（基本は 100px）
- 並びの間隔: 9 / 10 / 20 / 48px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.87 | 14px / 行間 1.78 |
| セクションの上下余白 | 100px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 20px |

- 本文は 14px → 14px、セクション余白は 100px → 24px（PCの24%）。
- 文字サイズの段は 20 / 18 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #555555;
  border: 1px;
  border-radius: 0px; padding: 10px 0px; min-height: 44px;
  font-size: 14px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #555555;
  border: 1px;
  border-radius: 0px; padding: 10px 0px; min-height: 42px;
  font-size: 12px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #555555;
  border: 1px solid #ffffff;
  border-radius: 33554400px; padding: 3px 16px; min-height: 30px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 120px | — | ヒーロー（画像） | 左 | — |
| 2 | 3880px | — | 6カラム・画像あり | 左 | 全幅 |
| 3 | 700px | `#ffffff` | 1カラム・画像あり | — | — |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 5px 10px 20px 0px;
}
```


## 画像

- 9枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（6枚）、4:3（2枚）、3:2（1枚）
- 角丸 10px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#009644 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:120px; display:grid; align-content:center }
.card{ background:#ffffff;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#555555; border-radius:0px;
  padding:10px 0px; min-height:44px;
  font-size:14px; font-weight:600 }

img{ width:100%; height:auto; border-radius:10px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#009644` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.87 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 10px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.87 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。
