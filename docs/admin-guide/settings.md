# Settings

The Settings page is accessible from the gear icon in the top navbar.

---

## Appearance

Choose the interface colour theme. Available themes:

- Light (default)
- Sky Blue
- Grey
- Dark Grey
- Dark
- Midnight
- Ocean
- Sunset

Your choice is stored in the browser and persists across sessions.

---

## Language

Set the interface language. PlayVisual supports multiple languages — your choice is saved per browser.

---

## Google Sheets credentials

Manage the Google service account credentials used by the Google Sheet widget. See [Google Sheets Integration](gsheet.md) for setup instructions.

---

## Player check-in interval

Controls how often player devices poll the API for updates if the Socket.IO connection drops. Default is **240 seconds**.

!!! note
    When Socket.IO is connected, the player receives updates instantly. The polling interval is a fallback only.

---

## Superadmin settings

Superadmins have additional settings available in the **SA Dashboard**, including:

- AI provider health and configuration
- Credit allocation per client
- Storage usage summary
- Backfill operations (populate missing file sizes)

Navigate to the SA Dashboard from the Home page quick-links.
