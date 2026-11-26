# Video Transcoding

The Transcode tool lets you create a new, re-encoded copy of a video at a different resolution — for example converting a 4K source down to 1080p or 720p for use on lower-bandwidth screens. The original file is never modified.

---

## When to use it

| Situation | Recommended action |
|-----------|-------------------|
| Source video is 4K but your screens are 1080p | Transcode to HD 1080p |
| Uploading to a location with limited bandwidth | Transcode to SD 480p |
| Video was filmed in portrait but plays in landscape | Use the Rotate preset (if enabled by your SA) |
| Source is already at the target resolution or lower | Not needed — transcoding downscales only |

---

## How to transcode a video

1. Open **Media Studio → Media Library**
2. Click the video you want to transcode — it opens in the detail panel on the right
3. Click the **Transcode** tab (between Details and Tools)
4. Select a **preset** from the list
5. Review the explainer text — it describes what the output will be and warns about any aspect-ratio mismatches
6. Click **Start Transcode**

The job runs in the background on Google Cloud. A progress indicator appears while it runs.

When the job finishes, the new video appears in your Media Library with a quality badge (HD / SD) showing the output resolution.

---

## Presets

| Preset | Output | Notes |
|--------|--------|-------|
| 1080p HD | 1920 × 1080 | Full HD — best quality, larger file |
| 720p HD | 1280 × 720 | Good balance of quality and size |
| 480p SD | 854 × 480 | Smallest file — lowest bandwidth |
| Portrait 1080p | 1080 × 1920 | For portrait screens |
| Portrait 720p | 720 × 1280 | Smaller portrait variant |
| Rotate 90° CW | source dims swapped | Pixel-accurate rotation (must be enabled by SA) |
| Rotate 90° CCW | source dims swapped | Pixel-accurate rotation (must be enabled by SA) |
| Rotate 180° | source dims | Pixel-accurate rotation (must be enabled by SA) |

**Auto-orient**: if your source is portrait (taller than wide) and you pick a landscape preset, the dimensions are automatically swapped so the output stays portrait. The explainer text confirms when this happens.

**Rotation presets** use FFmpeg on the server and are only available when your Superadmin has enabled them in SA Dashboard → Transcode → Rotation feature.

---

## Cost

Transcoding is a paid service (Google Cloud Transcoder API). Estimated cost is shown before you confirm:

| Quality | Estimated cost per minute of output |
|---------|-------------------------------------|
| HD (720p – 1080p) | ~$0.015 / min |
| SD (up to 480p) | ~$0.0085 / min |

A 2-minute HD video costs approximately $0.03. Rotation jobs are free.

Your Superadmin may have set a monthly budget cap. If the estimated cost would exceed the cap, the transcode is blocked with a budget warning.

---

## What happens to the original?

Nothing — the original file stays in your library unchanged. The transcoded copy appears as a separate item. The two files are linked: you can see which variants were created from a source by looking at the **Variants** section at the bottom of the detail panel.

---

## Troubleshooting

**"Output resolution matches or exceeds source"** — You picked a preset whose dimensions are equal to or larger than the source. Choose a lower preset.

**"Monthly transcode budget exceeded"** — Your account has a budget cap. Contact your Superadmin to raise it or reset the counter.

**Job stuck on "Processing…" for more than 15 minutes** — The job has timed out on the server side. It will appear as Failed in the SA job queue. Contact your SA to investigate.

**Transcoded video has black bars / distortion** — The source and output have different aspect ratios. Use the explainer text to choose a compatible preset, or use a Rotate preset if the video needs to be physically flipped.

---

## Further reading

- [Uploading Media](uploading.md)
- [Organising & Tagging](organising.md)
