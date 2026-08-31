#!/usr/bin/env python3
"""スクリーンショットの実ピクセルから、面積の大きい色を順に出す。

    python3 tools/palette.py shot/<slug>-full.png

CSSの background-color だけでは、画像・SVG・グラデーションで塗られた面が取れない。
実際に見えている絵から数えることで「そのサイトの色の比率」が正しく出る。
"""
import sys, json
from PIL import Image

im = Image.open(sys.argv[1]).convert('RGB')
# 縦に長いページでも比率は変わらないので、思い切って縮めて数える
w = 240
im = im.resize((w, max(1, round(im.height * w / im.width))), Image.BILINEAR)
q = im.quantize(colors=24, method=Image.MEDIANCUT).convert('RGB')

count = {}
for px in q.getdata():
    count[px] = count.get(px, 0) + 1

def near(a, b):
    return sum((x - y) ** 2 for x, y in zip(a, b)) ** .5 < 26

merged = []
for rgb, n in sorted(count.items(), key=lambda kv: -kv[1]):
    hit = next((m for m in merged if near(m['rgb'], rgb)), None)
    if hit:
        hit['n'] += n
    else:
        merged.append({'rgb': rgb, 'n': n})

total = sum(m['n'] for m in merged) or 1
merged.sort(key=lambda m: -m['n'])
out = [{'hex': '#%02x%02x%02x' % m['rgb'], 'pct': round(m['n'] / total * 100, 1)}
       for m in merged if m['n'] / total >= 0.015][:6]
json.dump(out, sys.stdout, ensure_ascii=False)
