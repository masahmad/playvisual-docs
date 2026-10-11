# Widget Catalogue

Full reference for all available widget types, their inputs and configuration options.

---

## Clock (Analogue)

Displays a live analogue clock face.

| Field | Type | Description |
|-------|------|-------------|
| Show second hand | Toggle | Display or hide the seconds hand |
| Colour scheme | Select | Light or dark face |
| Size | CSS | Set clock size via CSS |

---

## Clock (Digital)

Displays a live digital clock with optional date.

| Field | Type | Description |
|-------|------|-------------|
| Show date | Toggle | Display the date below the time |
| Date format | Select | DD/MM/YYYY, MM/DD/YYYY, etc. |
| Time format | Select | 12h or 24h |
| Font colour | Colour picker | Time text colour |
| Font size | Number | px size for time text |

---

## Counter

An animated number that counts up to a target value.

| Field | Type | Description |
|-------|------|-------------|
| Target value | Number | The number to count up to |
| Duration (ms) | Number | How long the count-up animation takes |
| Label | Text | Label displayed above or below the number |
| Prefix / Suffix | Text | E.g. "£" prefix or "%" suffix |

---

## Cinema Carousel

A full-bleed slideshow of images and/or videos.

| Field | Type | Description |
|-------|------|-------------|
| Slides | Data array | Each slide: `{ url, type, duration, caption }` |
| Transition | Select | Fade, Slide, Zoom |
| Show captions | Toggle | Display caption overlay |

---

## Table

Displays structured data in rows and columns.

| Field | Type | Description |
|-------|------|-------------|
| Data | Data array | Array of row objects |
| Show header | Toggle | Display column headers |
| Columns | Text | Comma-separated column keys |
| Header labels | Text | Comma-separated display names |
| Row height | Number | px height of each row |

---

## Bar Chart

Animated SVG bar chart.

| Field | Type | Description |
|-------|------|-------------|
| Data | Data array | `[{ label, value, colour }]` |
| Show values | Toggle | Display value labels on bars |
| Y-axis label | Text | Label for the Y axis |
| Bar colour | Colour | Default bar colour (overridden per bar) |

---

## Gauge

Animated semi-circular gauge/dial.

| Field | Type | Description |
|-------|------|-------------|
| Value | Number | Current reading |
| Min / Max | Number | Scale range |
| Label | Text | Label under the gauge |
| Colour | Colour | Arc colour |

---

## Stock Ticker

Live share price ticker with company logos from Logo.dev.

| Field | Type | Description |
|-------|------|-------------|
| Symbols | Text | Comma-separated ticker symbols (e.g. AAPL,MSFT) |
| Refresh interval | Number | Seconds between data refreshes |
| Show change % | Toggle | Display percentage change |

---

## News Ticker

A scrolling horizontal text band for headlines or announcements.

| Field | Type | Description |
|-------|------|-------------|
| Items | Data array | `[{ text }]` — headline strings |
| Speed | Number | Scroll speed (px/s) |
| Font colour | Colour | Text colour |
| Background | Colour | Band background colour |

---

## Google Sheet

Live data display from a connected Google Spreadsheet.

| Field | Type | Description |
|-------|------|-------------|
| Spreadsheet | Select | Registered GSheet credential |
| Sheet name | Text | Tab name within the spreadsheet |
| Widget type | Select | Table, Chart, Gauge, Counter, Ticker |
| Refresh interval | Number | Seconds between refreshes |

See [Google Sheets Integration](../admin-guide/gsheet.md) for setup.

---

## Image

A single static image.

| Field | Type | Description |
|-------|------|-------------|
| Image URL / file | Media picker | Select from library or enter a URL |
| Object fit | Select | Cover, Contain, Fill |

---

## Video

A single video file, auto-played and looped.

| Field | Type | Description |
|-------|------|-------------|
| Video URL / file | Media picker | Select from library or enter a URL |
| Muted | Toggle | Mute audio (required for autoplay) |
| Loop | Toggle | Loop the video |

---

## Text / HTML

Rich text or an HTML snippet.

| Field | Type | Description |
|-------|------|-------------|
| Content | Textarea | Plain text or HTML markup |
| Font size | Number | Base font size in px |
| Font colour | Colour | Text colour |

---

## Glossary

See [Glossary](glossary.md) for definitions of terms used in this catalogue.
