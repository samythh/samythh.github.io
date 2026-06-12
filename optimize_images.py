"""Optimize portfolio images to web-sized WebP. Originals are kept untouched."""
import os
from PIL import Image, ImageOps

SRC = os.path.join("assets")
# filename (without ext) -> max width in px (2x of display size for retina)
TARGETS = {
    "profile": 1000,
    "proteksi-1": 1280, "proteksi-2": 1280, "proteksi-3": 1280,
    "spk-dashboard": 1280, "spk-hierarki": 1280, "spk-hasil": 1280,
    "perisai-juara": 1280, "perisai-pitch": 1000, "perisai-pitchday": 1000,
}
QUALITY = 80

def human(n):
    for u in ("B", "KB", "MB"):
        if n < 1024:
            return f"{n:.0f}{u}"
        n /= 1024
    return f"{n:.1f}GB"

total_old = total_new = 0
for name, maxw in TARGETS.items():
    src = os.path.join(SRC, name + ".png")
    if not os.path.exists(src):
        print(f"  skip (missing): {name}.png")
        continue
    old = os.path.getsize(src)
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)
    if im.mode in ("RGBA", "P"):
        im = im.convert("RGB")
    if im.width > maxw:
        h = round(im.height * maxw / im.width)
        im = im.resize((maxw, h), Image.LANCZOS)
    out = os.path.join(SRC, name + ".webp")
    im.save(out, "WEBP", quality=QUALITY, method=6)
    new = os.path.getsize(out)
    total_old += old
    total_new += new
    print(f"  {name:16s} {human(old):>8s} -> {human(new):>8s}  ({im.width}px)")

print(f"\nTOTAL  {human(total_old)} -> {human(total_new)}  "
      f"({100 * (1 - total_new / total_old):.0f}% smaller)")
