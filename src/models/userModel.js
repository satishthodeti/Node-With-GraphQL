const pool = require('../config/db');

const UserModel = {
  getAll: async () => (await pool.query('SELECT * FROM users')).rows,
  getById: async (id) => (await pool.query('SELECT * FROM users WHERE id=$1', [id])).rows[0],
  create: async ({ username, email, role_id }) =>
    (await pool.query('INSERT INTO users (username, email, role_id) VALUES ($1, $2, $3) RETURNING *', [username, email, role_id])).rows[0],
  update: async ({ id, username, email, role_id }) =>
    (await pool.query('UPDATE users SET username=$1, email=$2, role_id=$3 WHERE id=$4 RETURNING *', [username, email, role_id, id])).rows[0],
  delete: async (id) =>
    (await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [id])).rows[0],
};

module.exports = UserModel;
