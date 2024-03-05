/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function receberPorId (idCliente) {
  const parametros = [idCliente]
  const sql = 'SELECT * FROM cliente_receber_por_id($1)'
  const result = await pool.query(sql, parametros)
  return result?.rows[0]
}

async function atualizarSaldo (idCliente, dados) {
  try {
    const valor = (dados.tipo === 'd') ? dados.valor * -1 : dados.valor
    const parametros = [valor, idCliente]
    const sql = 'SELECT cliente_atualizar_saldo($1, $2)'
    await pool.query(sql, parametros)
    return true
  } catch (error) {
    return false
  }
}

module.exports = {
  receberPorId,
  atualizarSaldo
}
