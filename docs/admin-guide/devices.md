# Managing Devices

Devices are the display screens that run the PlayVisual player and show your playlists.

---

## How devices connect

1. The PlayVisual **Player app** is installed on the display device (a Raspberry Pi, Ubuntu PC, or Kiosk)
2. On first launch the player generates a unique **device code** and shows it on screen
3. An Admin approves the device in the dashboard and assigns a playlist
4. The player receives the playlist and begins playing

---

## Approving a pending device

1. Go to **Devices** in the top navbar
2. Click the **Pending** tab (or look for the pending count badge)
3. Find the device — it shows the code displayed on screen, plus a timestamp
4. Click **Approve**
5. Set the device **name**, **location** (optional) and **playlist**
6. Click **Save**

The device starts playing immediately.

---

## Viewing and managing active devices

The **Devices** list shows all approved devices:

| Column | Description |
|--------|-------------|
| Name | Friendly name set at approval |
| Location | Optional location label |
| Playlist | Currently assigned playlist |
| Last seen | Timestamp of last successful ping |
| Status | Online / Offline |

---

## Reassigning a playlist

1. Find the device in the list
2. Click the edit icon
3. Change the **Playlist** field
4. Click **Save**

The player receives the new playlist via Socket.IO and switches within seconds.

---

## Refreshing a device

To force a player to reload without physically touching it, click the **Refresh** icon next to a device. This sends a reload command via Socket.IO.

---

## Deleting a device

Click the delete icon. The player continues running but will no longer receive updates and will show a "device not found" error on the next check-in.

---

## Further reading

- [Kiosk Setup (Pi / Ubuntu)](../player-setup/kiosk.md)
- [Registering a Device](../player-setup/registering.md)
- [Troubleshooting](../player-setup/troubleshooting.md)
