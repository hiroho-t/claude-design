#!/bin/sh
# 1サイト追加する。
#   sh tools/add.sh https://example.jp/ example "業種"
set -e
URL="$1"; SLUG="$2"; IND="$3"
node tools/extract.mjs "$URL" "$SLUG"                       # 数値を測る
node tools/shot.mjs    "$URL" "$SLUG"                       # サムネと配色用の全ページ画像
python3 tools/palette.py "shot/$SLUG-full.png" > "data/$SLUG.palette.json"   # 実ピクセルから配色
node tools/build.mjs   "$SLUG" "$IND"                       # s/*.md と data.json
sips -s format jpeg -s formatOptions 72 -Z 1000 "shot/$SLUG.png" --out "shot/$SLUG.jpg" >/dev/null 2>&1 || cp "shot/$SLUG.png" "shot/$SLUG.jpg"
rm -f "shot/$SLUG-full.png" "shot/$SLUG.png"
echo "できました: s/$SLUG.md ／ shot/$SLUG.jpg"
