# Managing Playlists (Moderator)

As a Moderator, you can edit the content of existing playlists but cannot create or delete them.

---

## Opening a playlist

1. Click **Playlists** in the navbar
2. The list shows all playlists for your client
3. Click a playlist name to open it

---

## Editing widget content

1. In the playlist editor, select a **template** (slide) from the list on the left
2. The widget list for that template appears on the right
3. Click a widget name to open its configuration panel

Make your changes in **Form View** — see [Widget Configuration](../admin-guide/widgets.md) for field-by-field guidance.

Changes are saved automatically. Connected devices receive updates in real time.

---

## What you can change

In Form View you can edit any field in the widget's configuration:

- Text content (headlines, labels, body copy)
- Data arrays (table rows, chart data, ticker items)
- Toggle options (show/hide elements, layout switches)
- Colours and styles
- Image or video selection (pick from Media Library)

---

## What you cannot change

Moderators cannot:

- Add or remove widgets from a template
- Add, remove or reorder templates in a playlist
- Change the playlist name or duration settings
- Delete a playlist

If the layout itself needs to change, ask an Admin.

---

## Using the Media Library

When a widget's Form View has a media picker field, click it to open the **Media Selector** modal. Browse and filter your client's media and click **Select** to use an asset.

---

## Checking your changes

After saving, the changes take effect on connected displays immediately via Socket.IO. If a display is not connected, it picks up the changes on its next poll (within 4 minutes by default).
