/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function adicionar (idCliente, dados) {
  const parametros = [idCliente, dados.valor, dados.tipo, dados.descricao]
  const sql = 'INSERT INTO transacoes (cliente_id, valor, tipo, descricao) VALUES ($1, $2, $3, $4)'
  await pool.query(sql, parametros)
}

async function receberHistorico (idCliente) {
  const parametros = [idCliente]
  const sql = 'SELECT * FROM transacoes WHERE cliente_id=$1 ORDER BY data_registro DESC LIMIT 10'
  const result = await pool.query(sql, parametros)
  return result?.rows
}

module.exports = {
  adicionar,
  receberHistorico
}
