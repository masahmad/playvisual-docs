# Copy & Move Media

Admins who manage multiple clients can copy or move media assets between clients without re-uploading.

!!! info "Who can use this?"
    Copy and Move are available to **Admins** and **Superadmins** only. The destination must be a client you have access to.

---

## How to copy or move a file

1. Open **Media Studio → Media Library**
2. Select the client that currently owns the file
3. Click the media card to open the detail panel
4. Scroll down to the **Copy / Move** section
5. Select a destination client from the dropdown
6. Click **Copy** or **Move**

### Copy vs Move

| Action | Result |
|--------|--------|
| **Copy** | Original stays in the source client; a new copy is created in the destination |
| **Move** | File is removed from the source client and transferred to the destination |

!!! warning "Move is permanent"
    Once moved, the asset no longer appears in the source client's library. Any playlist widgets that referenced the original URL will need to be updated.

---

## Global Library

Superadmins can copy any client's asset into the **Global Library** (client key `_global`). Global assets are available to all clients as read-only — non-SA users cannot delete global items.

When an asset is copied to the Global Library, a `globalCopyId` reference is stored on the source document. If the global copy is later deleted, that reference is automatically cleared.

---

## Storage indicator

A compact storage summary appears next to the client selector. It shows:

- Total storage used by the selected client
- Count of image and video files

If sizes are missing for older uploads, a **Populate sizes** button appears — click it to backfill size data from storage (runs in the background).
