🚀 GRAPHQL QUERIES & MUTATIONS FOR USERS & ROLES
This document contains all CRUD GraphQL operations for the User and Role models based on your current schema using Apollo Server with Express and PostgreSQL.

🔍 USERS — QUERIES
✅ GET ALL USERS
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


✅ GET USER BY ID
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


✍️ USERS — MUTATIONS
➕ CREATE USER
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


♻️ UPDATE USER
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


❌ DELETE USER
mutation DeleteUser {
  deleteUser(id: 1) {
    id
    username
  }
}


🔍 ROLES — QUERIES
✅ GET ALL ROLES
query GetRoles {
  roles {
    id
    name
    description
  }
}


✅ GET ROLE BY ID
query GetRoleById {
  role(id: 1) {
    id
    name
    description
  }
}


✍️ ROLES — MUTATIONS
➕ CREATE ROLE
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


♻️ UPDATE ROLE
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


❌ DELETE ROLE
mutation DeleteRole {
  deleteRole(id: 1) {
    id
    name
  }
}