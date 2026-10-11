# Player & Device Setup

The PlayVisual **Player** is the app that runs on display devices and shows your playlists. It works on:

- **Raspberry Pi** (recommended for permanent installations)
- **Ubuntu PC / Intel NUC** (for larger or higher-resolution displays)
- Any device that can run a Chromium-based browser

---

## How the player connects

1. The Player app launches and displays a **device code** on screen
2. An Admin approves the device in the dashboard and assigns a playlist
3. The Player downloads the playlist and begins playing
4. While running, the player maintains a **Socket.IO connection** to the API for live updates

---

## Live updates

When an Admin updates a widget in a playlist, the player receives the change instantly via Socket.IO — no reload or manual refresh is needed. If the connection drops, the player falls back to polling every 240 seconds.

---

## Quick links

- [Registering a Device](registering.md) — first-time setup, approving in the dashboard
- [Kiosk Setup (Pi / Ubuntu)](kiosk.md) — installing the Kiosk shell for unattended operation
- [Troubleshooting](troubleshooting.md) — common issues and fixes

---

## Requirements

| Item | Minimum |
|------|---------|
| OS | Raspberry Pi OS (Bookworm), Ubuntu 22.04+ |
| Browser | Chromium 110+ |
| Network | Stable connection to the PlayVisual API URL |
| Screen | HDMI display (any resolution) |
