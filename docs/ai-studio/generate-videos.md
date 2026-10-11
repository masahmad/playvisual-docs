# Generating Videos

Videos in AI Studio are always generated **from an existing image** — you animate a scene rather than describing motion from scratch. This gives you control over the visual before committing to the (more expensive) video generation step.

---

## Step 1 — Have an image ready

You need a scene image before you can generate a video. Either:

- Generate a new image in AI Studio (see [Generating Images](generate-images.md)) — the Animate button appears automatically once an image is ready
- Or use an existing image from your library — expand **Use product image**, pick an image, and click **Generate Video from this image**

---

## Step 2 — Describe the motion (optional)

When you're in the video stage, the prompt box changes to ask for **motion**, not scene description:

> *"slow cinematic pan left"*
> *"gentle zoom in, leaves rustling"*
> *"camera push forward"*

Leave the prompt blank for natural movement inferred from the image.

---

## Step 3 — Quick video (Preview)

Click **Animate** to generate a fast preview video. This is low-cost and takes 30–120 seconds.

The video appears in the result panel. Review it carefully before proceeding — the HD step is more expensive.

!!! tip
    If the motion isn't right, click **Re-generate image** to try a different scene, or just animate again.

---

## Step 4 — HD video

If the quick video looks right, click **Generate HD & Save to Library**.

- HD generation takes longer (up to 3 minutes)
- The video is **automatically saved** to your Media Library when complete
- If auto-save fails, a notice appears — use the Media Library to save manually

!!! warning "Draft expiry"
    Quick (preview) videos expire after **72 hours**. HD videos are saved to the library immediately on generation.

---

## Generation Queue

While a video is generating you can navigate away safely. The **AI Generation Queue** panel at the bottom of AI Studio tracks in-progress and recently completed jobs.

---

## Using videos in playlists

Saved videos appear in your Media Library. Use them in:

- **Cinema Carousel** widget — as a video slide
- **Video** widget — single full-screen video

---

## Further reading

- [Generating Images](generate-images.md)
- [Credits & Usage](credits.md)
