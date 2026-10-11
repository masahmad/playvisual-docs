# Media Library

The Media Library is the central store for all images, videos and audio files used in your playlists. It is accessible from **Media Studio → Media Library**.

---

## What you can store

| Type | Formats |
|------|---------|
| Images | JPEG, PNG, GIF, WebP, SVG |
| Videos | MP4, WebM, MOV |
| Audio | MP3, WAV, OGG |

AI-generated images and videos (created in AI Studio) are automatically saved here when you save them to your library.

---

## Browsing your library

The library shows all media belonging to your selected client. Use the filter bar to narrow results:

- **Media type** — Images, Videos, Audio
- **Tag / mood / category** — applied when uploading or via auto-tag
- **Search** — filename or tag keyword
- **Show global media** — toggle to include or exclude the shared Global Library

Switch between **Grid** and **List** view using the icons in the top-right.

---

## Uploading media

1. Go to **Media Studio → Upload Media**
2. Select the target client from the dropdown
3. Drag and drop files onto the upload area, or click to browse
4. Files upload immediately; progress is shown per file

!!! note
    Files are stored in Google Cloud Storage. There is no file size limit enforced by the interface, but very large files (>500 MB) may time out on slow connections.

---

## Viewing and editing metadata

Click any media card to open the detail panel on the right. From here you can:

- See filename, type, size, upload date and GCS path
- Edit **tags**, **mood**, **category**, **suitable for**, **usage type**, **orientation** and **text contrast** fields
- Click **Save metadata** to apply changes
- Run **Auto-tag** to have AI suggest tags based on image content

---

## Deleting media

Click the **delete** (trash) icon on a media card.

!!! warning
    Deletion is permanent. The file is removed from storage and cannot be recovered. Assets from the Global Library can only be deleted by a Superadmin.

---

## Further reading

- [Organising & Tagging](organising.md)
- [Global Library](global-library.md)
- [Copy & Move Media](copy-move.md)
