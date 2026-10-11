# Kiosk Setup (Pi / Ubuntu)

The **PlayVisual Kiosk** shell configures a Raspberry Pi or Ubuntu PC to boot directly into the Player, run unattended and recover automatically from crashes.

---

## Raspberry Pi

### What you need

- Raspberry Pi 4 (2 GB RAM minimum; 4 GB recommended)
- Raspberry Pi OS Bookworm (64-bit Lite recommended)
- MicroSD card (16 GB minimum)
- HDMI display
- Network connection (Ethernet preferred for reliability)

### Installation

1. Flash Raspberry Pi OS to the SD card using **Raspberry Pi Imager**
2. Enable SSH in Imager settings (add your WiFi credentials if using wireless)
3. Boot the Pi and SSH in
4. Clone the Kiosk setup repo or copy the install script:
   ```bash
   curl -sL <install-script-url> | bash
   ```
5. Follow the prompts to enter the **API URL** and **client key**
6. The script installs Chromium, configures auto-start, and sets up the watchdog service

On reboot the Pi launches the Player automatically and displays the device registration screen.

### Auto-restart

The Kiosk shell includes a **systemd service** (`playvisual-player.service`) that:

- Starts Chromium on boot in kiosk mode (no address bar, no cursor, no OS chrome)
- Restarts automatically if Chromium crashes
- Optionally reboots the Pi daily at a configured time to clear memory

---

## Ubuntu PC / Intel NUC

The same Kiosk shell supports Ubuntu 22.04+. Installation is the same — run the install script, which installs Chromium and sets up the systemd service.

For Intel NUC or similar x86 hardware, use the `--platform=x86` flag:

```bash
curl -sL <install-script-url> | bash -s -- --platform=x86
```

---

## Configuration file

After installation, edit `/etc/playvisual/kiosk.conf` to change settings:

```ini
API_URL=https://your-api.example.com
PLAYER_URL=https://your-player.example.com
REBOOT_TIME=03:00
```

Restart the service after editing:
```bash
sudo systemctl restart playvisual-player
```

---

## Remote management

Once registered, devices can be refreshed from the admin dashboard:

1. Go to **Devices**
2. Click the **Refresh** icon on the device row

This sends a reload command to the player via Socket.IO.

---

## Further reading

- [Registering a Device](registering.md)
- [Troubleshooting](troubleshooting.md)
