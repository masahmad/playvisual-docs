# Generating Playlists with AI

The **AI** tab in the playlist editor builds slides from a plain-English description, for example *"A 3-slide welcome playlist for a calm spa reception: a heading, the time, and a QR code to book"*.

!!! note "Beta"
    The AI tab is labelled **AI (SA)** for Super Admins while the feature is in beta. Other users see it only when a Super Admin turns on **AI Playlist Generation (Beta)** in SA Dashboard → AI Settings.

---

## Generating slides

1. Open a playlist and select the **AI** tab
2. Describe what you want, including the number of slides, the widgets, the colours and the mood
3. Choose an **Apply mode**:
    - **Add to existing templates** keeps your current slides and adds the new ones
    - **Replace all templates** removes the existing slides (you are warned how many first)
4. Click **Generate Playlist** and review the preview
5. Click **Apply (Add)** or **Apply (Replace)**. The slides are added to the playlist and **saved automatically**, so they show straight away in the **Preview** tab.

The preview lists each slide with its name, duration and background (a colour swatch or an image thumbnail), followed by its widgets and what each one shows. Look out for two tags:

- **N/N stock**: the widget uses stock placeholder photos, because nothing in your media library matched its subject. Replace them after applying, or tag your own media so the AI picks it next time.
- **link a Google Sheet after applying**: the widget's content comes only from a linked Google Sheet.

The total at the top also counts the stock placeholder images. **View raw JSON** shows the full generated config.

Nothing is saved until you click Apply. **Generate Playlist** is disabled while a result is waiting, so apply it or click **Clear** before generating again. **Apply (Replace)** asks you to confirm when the playlist already has slides, because it saves straight away and the replaced slides cannot be recovered. Each slide gets a normal template, so you can edit the result in Form View, JSON or Design View.

---

## Seeing the slides before you apply them

Click **Show visual preview** above the result to play the generated slides in the real player, inside a screen frame. Use the slide buttons (**1**, **2**, …) to switch slides. After each change you make with **Change something**, or each **Undo**, the preview updates by itself. Nothing is saved: the preview shows the unapplied result, and the playlist stays as it was until you click **Apply**. Click **Hide** to close it, or **Reload** if it stops responding (for example, when the preview session expires).

## Changing the result before you apply it

Under the preview, type a change into **Change something** and click **Update** (or press Ctrl+Enter). For example:

- "Make the clock bigger"
- "Swap the leaderboard for a bar chart"
- "Change the heading to Good Morning, Acme"
- "Add a slide with our opening hours"

The preview updates in place, and only what you asked for changes. Each change is listed in order. **Undo last change** steps back one change at a time. You can make as many changes as you like: nothing is saved until you click **Apply**. A change costs about the same as a generation.

## Writing a good prompt

| Include | Example |
|---------|---------|
| **Slide count** | "3 slides" (the AI is held to the number you ask for) |
| **Widgets** | "a heading, a clock and a scrolling news ticker" |
| **Look and mood** | "dark, calm, nature theme", "bright retail colours" |
| **Background** | "video background", "image background", "gradient background" |
| **Your own URLs** | Paste an image or video URL and it is used as given |

---

## Backgrounds and images come from your Media Library

The AI picks backgrounds, picture boxes, image carousels and video players from **your client's Media Library first**, then the [Global Library](../media-library/global-library.md). It matches the words in your prompt against each item's tags, mood, category, description, *Suitable for* and colours.

- Media marked **Usage type: Background** is preferred for slide backgrounds. Product shots and logos (**Content** / **Logo**) are never used as backgrounds.
- Picture boxes and carousel slides use a library image only when its tags match that slide's subject (for example, a slide labelled "Skyline at Night" needs an image tagged *skyline* or *night*). Background textures are never used as slide content.
- Media in the playlist's orientation is preferred
- **Text contrast** helps the AI choose readable text colours over a background
- If nothing in the library fits, a placeholder stock photo is used for images. Video backgrounds fall back to a plain dark colour, because the AI never invents video links.

!!! tip "Tag your media"
    The better your media is tagged, the better the AI's choices. Use **Auto-tag** on the media detail panel, then add mood and usage type. See [Organising & Tagging](../media-library/organising.md).

---

## Widgets that need a Google Sheet

Some widgets only show data from a linked Google Sheet: **Stock Ticker**, **Currency Ticker**, **Scrolling Table** and the stock/currency card modes of the **Sphere Carousel**.

- If your prompt mentions *Google Sheets* or a *spreadsheet*, the AI may add these widgets. Link the sheet after generating (see [Google Sheets Integration](gsheet.md)).
- Otherwise the AI uses alternatives that work without a sheet: a **Smart Ticker** with a business news feed instead of stock or currency tickers, and a **Data Table** instead of a scrolling table.

---

## Widgets the AI will not add

**News Ticker** (the original ticker) and the legacy **3D Cube** are deprecated. The AI uses **Smart Ticker** and the stock/currency **3D Cube** widgets instead. Existing deprecated widgets keep playing.

---

## Further reading

- [Playlists & Templates](playlists.md)
- [Organising & Tagging](../media-library/organising.md)
- [Widget Catalogue](../reference/widget-catalogue.md)
