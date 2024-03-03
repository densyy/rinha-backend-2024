/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function receberPorId (idCliente) {
  const parametros = [idCliente]
  const sql = 'SELECT * FROM clientes WHERE id=$1'
  const result = await pool.query(sql, parametros)
  return result?.rows[0]
}

async function atualizarSaldo (idCliente, dados) {
  const valor = (dados.tipo === 'd') ? dados.valor * -1 : dados.valor
  const parametros = [valor, idCliente]
  const sql = 'UPDATE clientes SET saldo = saldo + $1 WHERE id = $2'
  await pool.query(sql, parametros)
  return true
}

module.exports = {
  receberPorId,
  atualizarSaldo
}
