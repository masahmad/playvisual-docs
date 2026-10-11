# AI Studio

AI Studio lets Admins generate images and videos from text prompts, then save them to the Media Library for use in playlists.

Access it from **Media Studio → AI Studio**.

---

## The three-stage workflow

AI Studio follows a fixed progression — you cannot skip stages:

```
Stage 1           Stage 2            Stage 3
────────────────  ─────────────────  ─────────────────
Generate a        Animate it into    Promote to
scene image  ───► a quick video ───► full HD video
                  (fast, low cost)   (saved to library)
```

1. **Scene image** — write a prompt (and optionally supply a reference image), click **Generate**
2. **Quick video** — once the image looks right, click **Animate** to generate a fast preview video
3. **HD video** — if the quick video is good, click **Generate HD & Save to Library** to produce the final version

You can save the image at any stage and stop — you don't have to produce a video.

---

## Draft media expiry

Draft media (not yet saved to library) expires automatically:

| Type | Expiry |
|------|--------|
| Images | 24 hours |
| Videos (quick) | 72 hours |

Save to your library before expiry to keep the asset permanently.

---

## AI credits

Each generation consumes credits from your client's allocation. The current balance appears as a badge in the Media Studio tab bar when you are on the AI Studio tab — click it to open the credit usage log.

!!! warning "Credits are consumed on generation, not on save"
    If you generate an image and discard it without saving, the credits are still deducted.

---

## Generation Queue

The **AI Generation Queue** panel at the bottom of AI Studio shows in-progress and recently completed jobs — useful when a video generation is taking a while (up to 3 minutes).

---

## How It Works tab

The **How It Works** tab in Media Studio (`Media Studio → How It Works`) explains the AI providers, quality levels and credit costs in plain language — worth reading before your first generation.

---

## Further reading

- [Generating Images](generate-images.md)
- [Generating Videos](generate-videos.md)
- [Credits & Usage](credits.md)
