# Widget Configuration

Widgets are the individual content blocks inside a template. Each widget type displays different content.

---

## Available widget types

| Widget | Description |
|--------|-------------|
| **Clock (Analogue)** | Live analogue clock |
| **Clock (Digital)** | Live digital clock with date/time formatting |
| **Counter** | Animated number count-up display |
| **Cinema Carousel** | Full-bleed image or video slideshow |
| **Stacked Images** | Multi-image collage / overlay layout |
| **Scatter Images** | Randomly placed image burst |
| **Table** | Tabular data display (single or multi-column) |
| **Bar Chart** | Animated SVG bar chart |
| **Gauge** | Semi-circular gauge / dial |
| **Stock Ticker** | Live share price ticker with company logos |
| **News Ticker** | Scrolling news/text headline band |
| **Weather** | Live weather forecast from external feed |
| **Google Sheet** | Live data pulled from a connected Google Sheet |
| **Embed** | Embedded web page or iframe |
| **Image** | Single static image |
| **Video** | Single video file |
| **Text / HTML** | Rich text or HTML snippet |
| **Marquee** | Scrolling text banner |

---

## Opening a widget's configuration

1. Select the template in the playlist editor
2. Click the widget name in the widget list
3. The configuration panel opens to the right

---

## Form View

Form View is the primary editing surface. Fields are grouped by category and only show controls relevant to the current settings (fields are conditionally hidden to reduce clutter).

Common field types:

| Field type | Rendered as |
|------------|-------------|
| Text | Single-line text input |
| Number | Numeric input |
| Toggle | On/Off switch |
| Dropdown | Select from a list of options |
| Colour picker | Inline colour selection |
| Data array | JSON textarea for structured data lists |
| CSS | Click to open CSS style modal |

### Data array fields

Several widgets use a **data array** — a JSON structure defining repeating items (e.g. rows in a table, bars in a chart). Click **Edit** to open the full-screen array editor. The field validates JSON on save.

### Preset styles

Some widgets offer **Preset** buttons that apply a pre-configured combination of settings in one click. Useful as a starting point before fine-tuning.

---

## Design View

Design View shows a live canvas with the widget positioned on the template. You can:

- **Drag** the widget to change its position
- **Resize** by dragging the corner handles
- **Stack** multiple widgets visually

Changes are reflected in the widget's `componentCustomStyle` and applied to the player in real time.

---

## JSON editor

The raw JSON tab lets advanced users directly edit the widget's `componentConfig` and `componentCustomStyle` objects. Changes here bypass validation — use with caution.

---

## Further reading

- [Reference: Widget Catalogue](../reference/widget-catalogue.md)
- [Google Sheets Integration](gsheet.md)
