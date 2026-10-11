# Roles & Permissions

PlayVisual has four user roles. Your role determines which parts of the admin app you can see and what actions you can take.

## Role summary

| Role | Abbreviation | Who it is for |
|------|-------------|---------------|
| **Superadmin** | SA | Platform operators who manage all clients |
| **Admin** | Admin | Client managers who control one or more clients |
| **Moderator** | Mod | Content editors with limited access within a client |
| **User** | User | End users — no admin access |

---

## Superadmin

Superadmins have unrestricted access to the entire platform.

**Can do everything Admins can, plus:**

- Create, edit and delete clients
- View and manage all users across all clients
- Access the Global Media Library (upload, delete, manage shared assets)
- View platform-wide storage and AI usage statistics
- Manage AI credit allocations per client
- See all devices across all clients
- Access the SA Dashboard (provider health, credit summaries)

---

## Admin

Admins have full control within their assigned client(s).

**Can:**

- Create and manage users within their client(s)
- Create, edit and delete playlists and templates
- Upload and manage media in their client's library
- Copy media to other clients they manage
- Use AI Studio to generate images and videos
- Register and manage devices
- Configure Google Sheets widget integration
- View storage usage for their client

**Cannot:**

- Access other clients' data (unless explicitly assigned to multiple clients)
- Delete assets from the Global Library
- Access platform-level SA Dashboard

---

## Moderator

Moderators are content editors with a scoped view.

**Can:**

- View and edit playlists assigned to their client
- Upload media to their client's library
- Preview content

**Cannot:**

- Create or delete users
- Register or delete devices
- Access the Media Library's copy/move tools
- Use AI Studio
- Access client or system settings

---

## User

The User role is for accounts that authenticate with the API but do not have admin app access. Typically used for player devices or API integrations.

---

## Changing a user's role

Roles are assigned by an Admin or Superadmin when creating or editing a user account. See [Managing Users](../admin-guide/users.md).
