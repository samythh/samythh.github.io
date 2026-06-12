"""Render PNG/ICO favicons matching favicon.svg (dark rounded square + ember 'M')."""
from PIL import Image, ImageDraw

S = 256          # supersample resolution
BG = (22, 19, 15, 255)
INK = (249, 138, 91, 255)
RADIUS = 60
WIDTH = 24
# M path points, scaled 64 -> 256 (x4)
PTS = [(68, 184), (68, 80), (128, 148), (188, 80), (188, 184)]

def render(size):
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=RADIUS, fill=BG)
    d.line(PTS, fill=INK, width=WIDTH, joint="curve")
    r = WIDTH // 2
    for x, y in PTS:                       # round the caps + joints
        d.ellipse([x - r, y - r, x + r, y + r], fill=INK)
    return im.resize((size, size), Image.LANCZOS)

render(180).save("apple-touch-icon.png")
render(32).save("favicon-32.png")
render(256).save("favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("wrote apple-touch-icon.png, favicon-32.png, favicon.ico")
