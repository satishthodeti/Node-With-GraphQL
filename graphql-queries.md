# 🚀 GraphQL Queries & Mutations – Users & Roles

This document contains all **CRUD operations** for `User` and `Role` models in a Node.js + Apollo Server + PostgreSQL setup.

---

## 🔍 USERS – QUERIES

### ✅ Get All Users

```graphql
query GetUsers {
  users {
    id
    username
    email
    role {
      id
      name
    }
  }
}
````

---

### ✅ Get User by ID

```graphql
query GetUserById {
  user(id: 1) {
    id
    username
    email
    role {
      id
      name
    }
  }
}
```

---

## ✍️ USERS – MUTATIONS

### ➕ Create User

```graphql
mutation CreateUser {
  createUser(
    username: "john_doe"
    email: "john@example.com"
    role_id: 1
  ) {
    id
    username
    email
    role {
      id
      name
    }
  }
}
```

---

### ♻️ Update User

```graphql
mutation UpdateUser {
  updateUser(
    id: 1
    username: "john_updated"
    email: "john_updated@example.com"
    role_id: 2
  ) {
    id
    username
    email
    role {
      id
      name
    }
  }
}
```

---

### ❌ Delete User

```graphql
mutation DeleteUser {
  deleteUser(id: 1) {
    id
    username
  }
}
```

---

## 🔍 ROLES – QUERIES

### ✅ Get All Roles

```graphql
query GetRoles {
  roles {
    id
    name
    description
  }
}
```

---

### ✅ Get Role by ID

```graphql
query GetRoleById {
  role(id: 1) {
    id
    name
    description
  }
}
```

---

## ✍️ ROLES – MUTATIONS

### ➕ Create Role

```graphql
mutation CreateRole {
  createRole(
    name: "ADMIN"
    description: "Administrator Role"
  ) {
    id
    name
    description
  }
}
```

---

### ♻️ Update Role

```graphql
mutation UpdateRole {
  updateRole(
    id: 1
    name: "ADMIN_UPDATED"
    description: "Updated administrator role"
  ) {
    id
    name
    description
  }
}
```

---

### ❌ Delete Role

```graphql
mutation DeleteRole {
  deleteRole(id: 1) {
    id
    name
  }
}
```