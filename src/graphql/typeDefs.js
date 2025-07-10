const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Role type
  type Role {
    id: ID!
    name: String!
    description: String
  }

  # User type
  type User {
    id: ID!
    username: String!
    email: String!
    role: Role
  }

  # Root Query
  type Query {
    users: [User]                # Get all users
    user(id: ID!): User          # Get a single user by ID
    roles: [Role]                # Get all roles
    role(id: ID!): Role          # Get a single role by ID
  }

  # Root Mutation
  type Mutation {
    createUser(
      username: String!
      email: String!
      role_id: Int
    ): User

    updateUser(
      id: ID!
      username: String
      email: String
      role_id: Int
    ): User

    deleteUser(id: ID!): User

    createRole(
      name: String!
      description: String
    ): Role

    updateRole(
      id: ID!
      name: String
      description: String
    ): Role

    deleteRole(id: ID!): Role
  }
`;

module.exports = typeDefs;
