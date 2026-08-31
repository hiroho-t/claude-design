# Goodpatch Anywhere ふうのデザイン

- 出典: https://anywhere.goodpatch.com/
- 実測: 2026-09-01／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: デザイン会社・採用

白地に `#096fca` を大きな面で置く配色。影も枠線もほとんど使わない。本文 20px・行間 2、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #096fca;
  --sub: #e3d7d5;
  --ink: #096fca;
  --ink-rev: #ffffff;
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 20px;
  --lh-body: 2;
  --container: 1376px;
  --read: 672px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 49.5% |
| 主色 | `#096fca` | 37.8% |
| 副色 | `#e3d7d5` | 7.1% |

文字色は `#096fca` / `#ffffff` / `#000000`。

- 主色 `#096fca` は差し色ではなく**面**で使う。画面の38%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 文字

- 和文: ゴシックMB101 M JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Helvetica Neue
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 72px | 1.6 |
| 見出し | 48px | 1.5 |
| 小見出し | 32px | — |
| 本文 | 20px | 2 |
| 補助 | 18px | — |
| 注記 | 16px | 1.6 |
| 注記 | 13px | — |

- 本文は 20px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1376px／読ませる段は 672px
- セクションの上下余白: 120 / 100 / 140 / 200px（基本は 120px）
- 並びの間隔: 4 / 8 / 16 / 24px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1160 / 768 / 480 / 320px

## ボタン

```css
.btn{
  background: #096fca; color: #ffffff;
  border-radius: 4px; padding: 0px 48px; min-height: 48px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px; padding: 20px 32px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## 守ること

- 配色の比率を崩さない。主色を線やボタンだけに使うと、このサイトらしさは出ない。
- 余白 120px と行間 2 を先に決めてから中身を入れる。
- 角丸と影を足さない。角は立てたまま。
