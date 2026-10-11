# Managing Clients

!!! info "Superadmin only"
    Client management is only available to Superadmins. Admins cannot create, edit or delete clients.

---

## What is a client?

A **client** is an isolated organisation within PlayVisual. Each client has its own:

- Users (with roles scoped to that client)
- Devices
- Playlists and templates
- Media library
- AI credit allocation

---

## Viewing clients

1. Log in as Superadmin
2. Click the **Clients** icon in the top navbar
3. The client list shows all registered organisations

---

## Creating a client

1. Click **+ Add Client**
2. Fill in:
   - **Client name** — display name for the organisation
   - **Client key** — short unique identifier (lowercase, no spaces); used internally to scope data
3. Click **Save**

!!! warning
    The client key cannot be changed after creation. Choose it carefully.

---

## Editing a client

Click the edit icon next to a client to update its display name or settings.

---

## Deleting a client

Click the delete icon. This is permanent and removes all associated devices, playlists, users and media.

!!! danger
    Deleting a client cannot be undone. All of that client's data is permanently removed.

---

## AI credit allocation

From the **SA Dashboard**, Superadmins can allocate a monthly credit budget to each client. See [Credits & Usage](../ai-studio/credits.md) for details.
