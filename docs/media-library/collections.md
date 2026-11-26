# Collections

Collections are named groups that let you organise media items within your library. A collection might represent a campaign, a season, a brand, or any logical grouping that makes sense for your workflow.

There are two types of collection:

- **Client collections** — scoped to a single client; created and managed by Admins and Superadmins
- **Global Library collections** — scoped to the shared Global Library; created and managed by Superadmins only, but visible and filterable by all Admins

---

## Creating a collection

1. Go to **Media Studio → Collections**
2. Click **New collection**
3. Enter a name (required) and an optional description
4. Click **Create**

Collections are scoped to the currently selected client. You cannot share a collection across clients.

---

## Managing collections

The Collections tab lists all collections for the selected client with a count of media items and AI generation log entries in each.

| Action | How |
|--------|-----|
| **Rename** | Click the edit (pencil) icon on a collection row, update the name or description, then click **Save** |
| **Delete** | Click the delete (trash) icon — media items in the collection are **not** deleted, only unlinked from it |
| **Browse contents** | Click **View in library** to open the Media Library filtered to that collection |

!!! warning
    Deleting a collection cannot be undone. The collection name and description are removed permanently, though all media files remain in your library.

---

## Adding media to a collection

### During upload

1. Go to **Media Studio → Upload Media**
2. Select the target client
3. Choose a collection from the **Add to collection** dropdown (optional)
4. Upload your file — it is automatically assigned to the selected collection

### In the Media Library

1. Click a media card to open the detail panel
2. Scroll to the **Collection** field in the metadata section
3. Select a collection from the dropdown
4. Click **Save metadata**

To remove a media item from a collection, select **None** in the Collection dropdown and save.

---

## Adding AI-generated media to a collection

In AI Studio, a **Save to collection** dropdown appears below the aspect ratio controls when at least one collection exists for the selected client. Any image or video you generate and save to your library will be assigned to the selected collection.

---

## Filtering by collection

In the Media Library, expand the **More filters** panel and choose a collection from the **Collection** dropdown. The grid shows only media assigned to that collection.

When the **Show global media** toggle is on, the Collection dropdown groups entries under **Client** and **Global Library** headings so you can filter by either.

---

## Global Library collections

Superadmins can create collections within the Global Library to group shared assets by industry, theme, or use case — for example "Coffee Shop", "Retail Essentials", or "Corporate Backgrounds". This makes it easier for client Admins to discover relevant shared assets without having to know the right tags or filters.

### Creating a Global Library collection

1. Go to **Media Studio → Collections**
2. Click the **globe icon** in the top-right of the panel (visible to Superadmins only)
3. The panel switches to Global Library mode
4. Click **New collection** and enter a name and optional description

### Who can do what

| Action | Admin | Superadmin |
|--------|-------|-----------|
| View Global Library collections | ✓ (read-only) | ✓ |
| Filter the library by a Global collection | ✓ | ✓ |
| Create / rename / delete Global collections | ✗ | ✓ |

!!! note
    Global Library collections appear in the collection filter for all Admin users when **Show global media** is toggled on in the Media Library.

---

## Further reading

- [Organising & Tagging](organising.md)
- [Uploading Media](uploading.md)
- [AI Studio — Generate Images](../ai-studio/generate-images.md)
