#!/usr/bin/env python3
"""Convert captured slide frames to a single PDF."""
import sys
import os
from PIL import Image

FRAMES_TXT = os.path.join(os.path.dirname(__file__), '../slides-pdf-frames/frames.txt')
OUTPUT_PDF = os.path.join(os.path.dirname(__file__), '../slides.pdf')

with open(FRAMES_TXT) as f:
    frames = [line.strip() for line in f if line.strip()]

if not frames:
    print("No frames found.")
    sys.exit(1)

images = []
for fp in frames:
    img = Image.open(fp).convert('RGB')
    images.append(img)
    print(f"Loaded: {os.path.basename(fp)}")

first = images[0]
rest = images[1:]
first.save(OUTPUT_PDF, save_all=True, append_images=rest, resolution=144)
print(f"\nSaved {len(images)} pages to: {os.path.abspath(OUTPUT_PDF)}")
