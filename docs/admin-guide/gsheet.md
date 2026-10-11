# Google Sheets Integration

The **Google Sheet widget** can pull live data from a Google Spreadsheet and display it on a template, updating automatically as the sheet changes.

---

## How it works

1. You connect a Google Sheet to PlayVisual using a **service account credential**
2. The widget fetches data from a named sheet/tab via the Google Sheets API
3. Data is refreshed at a configurable interval and pushed to connected players

---

## Setting up a GSheet credential

Before adding a Google Sheet widget you need to register credentials:

1. Ask your Superadmin to set up a Google Cloud service account and share the Google Sheet with it (see SA docs)
2. Go to **Settings → Google Sheets** (or from the playlist editor, open a Google Sheet widget and click **Manage credentials**)
3. Click **+ Add Credential**
4. Enter the **Spreadsheet ID** (from the Google Sheets URL) and a friendly name
5. Click **Validate** — PlayVisual checks it can access the sheet
6. Click **Save**

---

## Configuring the Google Sheet widget

1. Add a **Google Sheet** widget to your template
2. In Form View, select the credential from the **Spreadsheet** dropdown
3. Set the **Sheet name** (tab within the spreadsheet)
4. Set the **Widget type** — how the data is displayed:

| Type | Rendered as |
|------|-------------|
| Table | Rows and columns |
| Bar chart | Animated bar chart |
| Gauge | Dial / gauge |
| Counter | Count-up number |
| Ticker | Scrolling text band |

5. Configure display options (column to use, header row, refresh interval)

---

## Data refresh

The widget refreshes data on the interval set in its configuration. The default is every **60 seconds**. The player receives new data via Socket.IO without a page reload.

---

## Troubleshooting

| Problem | Likely cause |
|---------|-------------|
| Widget shows "No data" | Credential not validated, or wrong sheet name |
| Data is stale | Increase refresh interval; check API quota |
| Permission error | Service account has not been given view access to the sheet |
