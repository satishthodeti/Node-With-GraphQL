const UserModel = require('../models/userModel');
const RoleModel = require('../models/roleModel');

const resolvers = {
  // Query Resolvers
  Query: {
    users: async () => {
      return await UserModel.getAll();
    },
    user: async (_, { id }) => {
      return await UserModel.getById(id);
    },
    roles: async () => {
      return await RoleModel.getAll();
    },
    role: async (_, { id }) => {
      return await RoleModel.getById(id);
    },
  },

  // Mutation Resolvers
  Mutation: {
    createUser: async (_, args) => {
      return await UserModel.create(args);
    },
    updateUser: async (_, args) => {
      return await UserModel.update(args);
    },
    deleteUser: async (_, { id }) => {
      return await UserModel.delete(id);
    },

    createRole: async (_, args) => {
      return await RoleModel.create(args);
    },
    updateRole: async (_, args) => {
      return await RoleModel.update(args);
    },
    deleteRole: async (_, { id }) => {
      return await RoleModel.delete(id);
    },
  },

  // Resolver for nested role in User
  User: {
    role: async (parent) => {
      return await RoleModel.getById(parent.role_id);
    },
  },
};

module.exports = resolvers;
