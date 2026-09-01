#!/bin/sh
# できたぶんを https://hiroho-t.github.io/claude-design/ に反映する。
set -e
cd /Users/hiroho/Documents/jp-styles
cp -f data/categories.json data/groups.json .    # 一覧が読む辞書（実体で置く）
N=$(ls s/*.md 2>/dev/null | wc -l | tr -d " ")
git add -A
if git diff --cached --quiet; then echo "変更なし"; exit 0; fi
git -c user.name=hiroho-t -c user.email=hiroho.tsukiji@gmail.com commit -q -m "デザイン参考集を更新（${N}サイト）"
git push -q origin main
echo "反映しました: https://hiroho-t.github.io/claude-design/ （${N}サイト）"
