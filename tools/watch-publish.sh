#!/bin/sh
# 測定が終わるまで15分おきに公開し、終わったら最後にもう一度公開する。
cd /Users/hiroho/Documents/jp-styles
while pgrep -f "run-queue.mjs practical" >/dev/null 2>&1; do
  sleep 900
  sh tools/publish.sh || true
done
sh tools/publish.sh || true
echo "測定と公開が完了しました"
