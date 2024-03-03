/* ---- Requires ---- */

const { Pool } = require('pg')

/* ---- Configs ---- */

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  max: 50,
  idleTimeoutMillis: 30000
})

module.exports = pool
