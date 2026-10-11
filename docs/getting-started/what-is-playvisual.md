# What is PlayVisual?

PlayVisual is a cloud-hosted **digital signage platform** built for managing content across a network of display screens. It consists of three parts that work together:

| Component | What it does |
|-----------|-------------|
| **Admin app** | Web interface used by admins and moderators to create playlists, configure widgets, manage users and devices, and generate AI media |
| **API** | Backend service that stores all configuration and streams live updates to players |
| **Player app** | Runs on each display device, receives playlists from the API and renders the content on screen |

---

## Key concepts

### Clients
A **client** is an organisation or brand that owns a set of devices and playlists. Superadmins manage multiple clients; admins belong to one client (or several, if granted access).

### Playlists
A **playlist** is an ordered list of **templates** (slides). Each template has a defined duration and contains one or more **widgets**.

### Widgets
A **widget** is a self-contained content block — a clock, a table of data, an image, a chart, a news ticker. Widgets are configured individually and can pull data from static config, a Google Sheet, or an AI-generated media source.

### Devices
A **device** is a display screen registered to a client. It runs the Player app and shows whichever playlist is assigned to it.

### Media Library
Uploaded images, videos and AI-generated assets are stored in the **Media Library**. Each client has its own library; there is also a **Global Library** of shared assets managed by Superadmins.

---

## How content reaches the screen

```
Admin configures playlist  →  API saves to database
                           →  API notifies connected players (Socket.IO)
                           →  Player refreshes widget data without reloading
```

If the live connection drops, the player falls back to polling the API every 4 minutes.

---

## Next steps

- [Log in to the admin dashboard](logging-in.md)
- [Understand roles and permissions](roles.md)
