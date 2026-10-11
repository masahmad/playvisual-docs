# Troubleshooting

---

## Device shows "Waiting for registration"

The device is not yet approved in the dashboard.

1. Note the **device code** displayed on screen
2. Log into the admin dashboard
3. Go to **Devices → Pending** and approve the device

---

## Device shows "Device not found" or blank screen

The device was deleted from the dashboard, or the device code has expired.

- If deleted: the device needs to be re-registered. Restart the Player to generate a new code
- If the code expired: restart the Player to generate a fresh code

---

## Display is not updating

Check these in order:

1. **Is the device online?** — check the Devices list for "Last seen" time
2. **Is Socket.IO connected?** — look for a green connection indicator on the player
3. **Is the playlist correct?** — confirm the device is assigned the right playlist in the dashboard
4. **Force refresh** — click the Refresh icon in the Devices list to send a reload command

If the device is offline, the next update is delivered when it reconnects or on the next poll (every 4 minutes).

---

## Player shows incorrect or stale content

1. Click **Refresh** on the device in the dashboard to force a reload
2. If the issue persists, check the widget configuration in the playlist editor
3. For Google Sheet or live data widgets, check the data source is updating correctly

---

## Black screen or Chromium crash loop

On a Raspberry Pi:

```bash
# Check service status
sudo systemctl status playvisual-player

# View logs
sudo journalctl -u playvisual-player -f

# Restart the service
sudo systemctl restart playvisual-player
```

Common causes:

- Low GPU memory on the Pi — increase `gpu_mem` in `/boot/config.txt` to 128 or 256
- Display resolution mismatch — set a fixed resolution in Raspberry Pi configuration
- Network not available when service starts — check `/etc/playvisual/kiosk.conf` API URL

---

## Display is rotated / wrong resolution

Set the correct display settings in Raspberry Pi configuration or Ubuntu display settings, then reboot.

For forced resolution on Pi, add to `/boot/config.txt`:
```
hdmi_group=2
hdmi_mode=82  # 1920×1080 60Hz
```

---

## Contacting support

If you cannot resolve an issue, provide:

- Device name and client
- Description of the problem and when it started
- Screenshot or photo of the screen if possible
- Output of `sudo journalctl -u playvisual-player --since "1 hour ago"` on Pi/Ubuntu
