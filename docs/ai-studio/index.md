# AI Studio

AI Studio lets Admins generate images and videos using AI providers, then save them directly to the Media Library for use in playlists.

Access it from **Media Studio → AI Studio**.

---

## Overview

AI Studio is a three-stage workflow:

1. **Configure** — choose media type (image or video), provider, quality, size and aspect ratio
2. **Generate** — submit the prompt and wait for the result
3. **Save** — review the preview and save to the Media Library, or discard

---

## AI credits

Each generation consumes **credits** from your client's allocation. The current balance is shown as a badge in the tab bar when you are on the AI Studio tab.

Click the credit badge to open the **Credit Usage Log**, which shows a full history of generations, their cost, provider and status.

!!! warning "Credits are consumed on generation, not on save"
    If you generate an image and then discard it, the credits are still deducted. Preview quality uses fewer credits than standard or high quality.

---

## Generating an image

1. Select **Text → Image** or **Image → Image** (edit an existing image)
2. Choose a **provider** from the dropdown (available providers depend on your platform configuration)
3. Enter a **prompt** describing the image you want
4. Optionally select **quality**, **size** and **aspect ratio**
5. Click **Generate**
6. The result appears as a preview — click **Save to Library** to keep it, or **Discard** to remove it

### Prompt tips

- Be specific: describe subject, style, lighting, mood
- Mention the intended use: "for a digital signage display", "landscape orientation"
- Use **Enhance prompt** (if available) to have the AI expand your prompt before generating

---

## Generating a video

Video generation is available for supported providers. The workflow is the same as image generation but generation takes longer (typically 30–120 seconds).

!!! note
    Not all providers support video. The provider list only shows options that are configured and available for your client.

---

## Generation Log

**Media Studio → Generation Log** shows all past AI generations. Each entry includes:

- Thumbnail preview
- Prompt used
- Provider, quality and credits consumed
- Save status (saved to library / discarded / pending)

---

## Further reading

- [Generating Images](generate-images.md)
- [Generating Videos](generate-videos.md)
- [Credits & Usage](credits.md)
