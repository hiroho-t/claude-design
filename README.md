# claude-design（日本のサイトの実測台帳）

https://hiroho-t.github.io/claude-design/

日本で公開されているサイトを **ブラウザ幅1440pxで実際に描かれた値**で測り、
そのまま CSS 変数にできる形にしたもの。色コード・寸法・書体名だけを扱い、
**文言・写真・ロゴ・クラス名は持ち出さない。**

## ファイルの読み方

| ファイル | 中身 |
|---|---|
| `data.json` | 一覧。1行1サイト。業種・タグ・配色に加えて**判型**（下表）が入っている |
| `s/<slug>.md` | 1サイトぶんの詳しい数値。これを読んで組む |
| `p/<slug>.html` | 同じ内容を、実物のサイズと色のまま見せるページ |
| `blocked.json` | **測りに行けなかったサイト。**載っていない理由が分かる |
| `categories.json` / `groups.json` | 一覧の絞り込みに使う辞書 |
| `s/_要望_*.md` | 台帳への改善要望（使う側が置く） |
| `s/_要望への対応.md` | それに何をしたか（台帳側が書く） |

### `data.json` の判型

業種の文字列ではなく**寸法**で似たサイトを絞るための欄。

| 欄 | 中身 |
|---|---|
| `container` | 版面の最大幅（px） |
| `bodyFs` / `bodyLh` | 本文の文字サイズ（px）と行間 |
| `sectionY` | セクションの上下余白（px） |
| `radius` | 角丸（px） |
| `accent` | 主色 |
| `labelHead` | ラベル付き見出しの型（`fs` / `gap` / `headFs` / `wrapped`）。無ければ `null` |

```bash
curl -s https://hiroho-t.github.io/claude-design/data.json -o /tmp/lib.json
node -e "
const l=require('/tmp/lib.json');
l.filter(x=>Math.abs(x.container-1162)<=80 && Math.abs(x.bodyFs-16)<=1)
 .forEach(x=>console.log(x.slug, x.container+'px', x.bodyFs+'px', x.sectionY+'px', x.industry));
"
```

### `s/<slug>.md` に入っているもの

配色と面積比／色の使い分け（面・文字・枠・ボタンの箇所数）／面と線の関係／
書体と**文字サイズの段（サイズ・行間・上の余白・下の余白）**／**見出しのまとまり**／
版面・セクション余白・並びの間隔・角丸・ブレイクポイント／スマホ390pxの測り直し／
ボタン／セクションの並び／囲み・ラベル・丸・画像／そのまま置ける骨格（HTML＋CSS）。

**入っていないもの：**見出しまわり以外の要素どうしの間隔（カードの中の余白など）。
必要なときは要望を出してください。

## 要望の出し方

`s/_要望_<日付>_<件名>.md` を置く。毎日見にいって、できたものから台帳に入れ、
`s/_要望への対応.md` に何をしたかを書きます。

## 作り直し（手元）

```bash
node tools/collect.mjs <カテゴリー>      # 測る相手の一覧を作る
node tools/run-queue.mjs <カテゴリー> 3  # 一覧を順に測って台帳に足す
sh   tools/add.sh <URL> <slug> "<業種>"  # 1件だけ足す
node tools/remeasure.mjs <欄名> 3        # 測り方を増やしたあと、足りないサイトだけ測り直す
node tools/blocked.mjs                   # blocked.json を作り直す
sh   tools/publish.sh                    # GitHub Pages に反映する
```

測る相手のサーバーには1件ずつ間隔をあけて当たる。同時数は3までにしてある。
