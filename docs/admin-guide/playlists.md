# Playlists & Templates

A **playlist** is a sequence of templates (slides) that a device plays in a loop. Each template contains one or more **widgets** that display content.

---

## Creating a playlist

1. Go to **Playlists** in the top navbar
2. Click **+ New Playlist**
3. Give it a name and click **Create**

---

## Adding templates (slides)

Inside the playlist editor:

1. Click **+ Add Template**
2. Enter a name and **duration** (how long this slide shows, in seconds)
3. Click **Save**

Repeat to build up a sequence of slides.

---

## Reordering templates

Drag the handle on the left of each template row to reorder the slide sequence.

---

## Adding widgets to a template

1. Select a template in the list
2. Click **+ Add Widget**
3. Choose a widget type from the catalogue
4. The widget appears in the widget list for that template
5. Click the widget to open its configuration panel

---

## Configuring a widget

The configuration panel has three tabs:

| Tab | Purpose |
|-----|---------|
| **Form View** | Guided field-by-field configuration |
| **JSON** | Raw JSON for advanced users |
| **Design View** | Visual drag-and-resize canvas |

Set all required fields in Form View, then optionally fine-tune position and size in Design View.

See [Widget Configuration](widgets.md) for details on each widget type.

---

## Publishing a playlist

Changes are **auto-saved** as you work. Connected devices running that playlist receive updates in real time via Socket.IO — there is no manual publish step.

---

## Duplicating a playlist

Click the **copy** icon on a playlist row to clone it. Useful for creating variations of an existing layout.

---

## Deleting a playlist

Click the **delete** icon. Devices assigned to the deleted playlist will stop displaying content until reassigned.

---

## Further reading

- [Widget Configuration](widgets.md)
- [Google Sheets Integration](gsheet.md)
- [Managing Devices](devices.md)
