# Glossary

---

**Admin**
A user role with full control over a single client's playlists, devices, users and media. Cannot manage other clients.

**AI Studio**
The section of Media Studio for generating images and videos using AI providers.

**Client**
An isolated organisation within PlayVisual. Each client has its own users, devices, playlists and media library.

**Client key**
A short unique identifier for a client (e.g. `acme-corp`). Used internally to scope data. Set once at client creation and cannot be changed.

**componentConfig**
The JSON object stored on a widget that holds its content settings (text, numbers, data, toggles).

**componentCustomStyle**
The JSON object stored on a widget that holds its position, dimensions and CSS overrides as set in Design View.

**componentType**
The internal string identifier for a widget type (e.g. `digitalclock`, `barchart`, `cinemacarousel`). Lowercase, no hyphens.

**Credit**
The unit of consumption for AI generation. Each generation costs a number of credits depending on provider, quality and media type.

**Design View**
The drag-and-resize canvas editor for positioning and sizing widgets within a template.

**Device**
A physical display screen running the PlayVisual Player app.

**Device code**
A unique code displayed on screen when a Player first connects, used to identify and approve the device in the dashboard.

**Form View**
The primary configuration panel for a widget — a schema-driven form with conditional field visibility.

**GSheet / Google Sheet widget**
A widget that fetches live data from a connected Google Spreadsheet.

**Global Library**
A pool of media assets shared across all clients, managed by Superadmins.

**Kiosk**
The playv-kiosk shell that configures a Raspberry Pi or Ubuntu PC to boot directly into the Player.

**Moderator**
A user role that can edit existing playlist content but cannot manage users, devices or client settings.

**Player**
The Angular SPA that runs on display devices and renders playlist templates.

**Playlist**
An ordered sequence of templates (slides) that a device plays on loop.

**Preset**
A button in Form View that applies a pre-configured combination of settings in one click.

**Socket.IO**
The real-time communication protocol used to push playlist updates from the API to connected players.

**Superadmin (SA)**
A platform-level administrator with access to all clients, AI provider configuration, credit allocation and the SA Dashboard.

**Template**
A single slide within a playlist, containing one or more widgets. Has a configured display duration.

**Widget**
An individual content block within a template (e.g. a clock, chart, image, ticker).

**Widget catalogue**
The full list of available widget types and their configuration schemas. See [Widget Catalogue](widget-catalogue.md).
