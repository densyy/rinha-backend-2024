/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function adicionar (idCliente, dados) {
  const parametros = [idCliente, dados.valor, dados.tipo, dados.descricao]
  const sql = 'SELECT transacoes_adicionar($1, $2, $3, $4)'
  await pool.query(sql, parametros)
  return true
}

async function receberHistorico (idCliente) {
  const parametros = [idCliente]
  const sql = 'SELECT * FROM transacoes_receber_historico($1)'
  const result = await pool.query(sql, parametros)
  return result?.rows
}

module.exports = {
  adicionar,
  receberHistorico
}
