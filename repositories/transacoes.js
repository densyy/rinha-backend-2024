/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function adicionar (idCliente, dados) {
  const parametros = [idCliente, dados.valor, dados.tipo, dados.descricao]
  const sql = 'INSERT INTO transacoes (cliente_id, valor, tipo, descricao) VALUES ($1, $2, $3, $4)'
  await pool.query(sql, parametros)
}

module.exports = { adicionar }
