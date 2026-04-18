const { Pool } = require("pg");

const sqlConnectionString = process.env.SQL_CONNECTION_STRING;

const pool = sqlConnectionString
  ? new Pool({ connectionString: sqlConnectionString })
  : null;

async function getLeetCodeStatsFromSql(username) {
  if (!pool) {
    return null;
  }

  try {
    const query = `
      SELECT username, total_solved, easy_solved, medium_solved, hard_solved, updated_at
      FROM leetcode_stats
      WHERE username = $1
      LIMIT 1;
    `;
    const values = [username];
    const result = await pool.query(query, values);

    if (!result.rows.length) {
      return null;
    }

    const row = result.rows[0];
    return {
      username: row.username,
      totalSolved: row.total_solved,
      easy: row.easy_solved,
      medium: row.medium_solved,
      hard: row.hard_solved,
      updatedAt: row.updated_at,
    };
  } catch (error) {
    console.warn("SQL query failed. Falling back to mock stats.");
    console.warn(error.message);
    return null;
  }
}

module.exports = {
  getLeetCodeStatsFromSql,
};
