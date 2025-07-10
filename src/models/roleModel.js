const pool = require('../config/db');

const RoleModel = {
  getAll: async () => (await pool.query('SELECT * FROM roles')).rows,
  getById: async (id) => (await pool.query('SELECT * FROM roles WHERE id = $1', [id])).rows[0],
  create: async ({ name, description }) =>
    (await pool.query('INSERT INTO roles (name, description) VALUES ($1, $2) RETURNING *', [name, description])).rows[0],
  update: async ({ id, name, description }) =>
    (await pool.query('UPDATE roles SET name=$1, description=$2 WHERE id=$3 RETURNING *', [name, description, id])).rows[0],
  delete: async (id) =>
    (await pool.query('DELETE FROM roles WHERE id=$1 RETURNING *', [id])).rows[0],
};

module.exports = RoleModel;
