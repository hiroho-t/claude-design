#!/bin/sh
# できたぶんを https://hiroho-t.github.io/site-wireframe/ に反映する。
#   sh tools/publish.sh
set -e
ROOT=/Users/hiroho/Documents/site-wireframe
DEST="$ROOT/styles"
mkdir -p "$DEST"
rsync -a index.html data.json "$DEST/"
rsync -a data/categories.json data/groups.json "$DEST/" 2>/dev/null || true
rsync -a --delete s/ "$DEST/s/"
rsync -a --delete p/ "$DEST/p/"
rsync -a --delete --include="*.jpg" --exclude="*" shot/ "$DEST/shot/"
# ルートの index.html は、styles/ を見にいく同じ画面
sed 's|<body>|<body data-base="styles/">|' index.html > "$ROOT/index.html"

N=$(ls s/*.md 2>/dev/null | wc -l | tr -d " ")
cd "$ROOT"
git add -A index.html styles
if git diff --cached --quiet; then echo "変更なし"; exit 0; fi
git -c user.name=hiroho-t -c user.email=hiroho.tsukiji@gmail.com commit -q -m "デザイン参考集を更新（${N}サイト）"
git push -q origin main
echo "反映しました: https://hiroho-t.github.io/site-wireframe/ （${N}サイト）"
