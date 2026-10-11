# Registering a Device

---

## Step 1 — Launch the Player

Start the PlayVisual Player app on the display device.

- On a **Kiosk** (Pi/Ubuntu), the app starts automatically on boot
- Manually, open the Kiosk shell or launch Chromium pointed at the player URL

On first run (or after a reset), the player shows a **device registration screen** with:

- A large **device code** (6–8 characters)
- A QR code
- The API URL it is connecting to

---

## Step 2 — Approve in the dashboard

1. Log into the admin dashboard on any device
2. Click **Devices** in the navbar
3. Click the **Pending** tab (look for the orange count badge)
4. Find the device that matches the code shown on screen
5. Click **Approve**

---

## Step 3 — Configure the device

After clicking Approve, a configuration dialog opens:

| Field | Description |
|-------|-------------|
| Name | Friendly name (e.g. "Lobby Screen", "Café Display") |
| Location | Optional location label |
| Playlist | Select the playlist this device should play |

Click **Save**.

---

## Step 4 — Player starts

The Player receives the assignment and begins playing the playlist within a few seconds.

The device now appears in the **Devices** list as active.

---

## Re-registering a device

If a device loses its registration (e.g. after a factory reset), it returns to the registration screen. Go through the same approval process — it will appear again in the Pending list.

!!! tip
    Give devices meaningful names at approval time. "Pi_001" is harder to find than "Reception North Screen" when troubleshooting.
