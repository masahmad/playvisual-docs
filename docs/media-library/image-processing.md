# Image Resize, Rotate & Flip

The image processing tool lets you create a resized, rotated or flipped copy of any image in the library. It uses the server's built-in image processor and returns in seconds — no cloud job is needed.

The original file is never modified. A new Media item is created and linked to the source.

---

## How to process an image

1. Open **Media Studio → Media Library**
2. Click an image — it opens in the detail panel
3. Click the **Tools** tab
4. Use the **Resize / Rotate / Flip** section at the top

---

## Operations

### Rotate

Rotates the pixel content of the image by 90°, 90° counter-clockwise or 180°. Unlike CSS rotation, this physically changes the file — the new image is already the correct orientation in any viewer.

| Option | Result |
|--------|--------|
| 90° clockwise | Landscape → portrait (right side becomes top) |
| 90° counter-clockwise | Landscape → portrait (left side becomes top) |
| 180° | Upside-down |

### Flip

Mirrors the image without rotating it.

| Option | Result |
|--------|--------|
| Flip horizontal | Mirror image (left ↔ right) |
| Flip vertical | Upside-down mirror (top ↔ bottom) |

### Resize

Creates a narrower copy while keeping the aspect ratio. Larger files are never created — if the target width is wider than the source, the original size is kept.

| Preset | Output width |
|--------|-------------|
| 1920 px (HD) | 1920 px |
| 1280 px (720p) | 1280 px |
| 720 px | 720 px |
| 480 px | 480 px |
| 3840 px (4K) | 3840 px |
| Custom width… | Enter a pixel value |

---

## Output format

Choose **JPEG** (default, broadly compatible) or **WebP** (smaller file, modern browsers). The new file is saved to your library in the selected format.

---

## Finding the new file

After processing the panel shows the new filename and dimensions. The library reloads automatically — the new item appears alongside the original. You can see the relationship in the detail panel's **Source** field.

---

## Further reading

- [Video Transcoding](transcoding.md)
- [Organising & Tagging](organising.md)
