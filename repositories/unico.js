/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function debito (idCliente, dados) {
  try {
    const parametros = [idCliente, dados.valor, dados.descricao]
    const sql = 'SELECT debito($1, $2, $3)'
    const resultado = await pool.query(sql, parametros)

    if (resultado?.rows[0]?.debito?.error) return false
    return resultado?.rows[0]?.debito
  } catch (error) {
    return false
  }
}

async function credito (idCliente, dados) {
  try {
    const parametros = [idCliente, dados.valor, dados.descricao]
    const sql = 'SELECT credito($1, $2, $3)'
    const resultado = await pool.query(sql, parametros)
    return resultado?.rows[0]?.credito
  } catch (error) {
    return false
  }
}

async function historico (idCliente) {
  idCliente = parseInt(idCliente)
  try {
    const parametros = [idCliente]
    const sql = 'SELECT historico($1)'
    const resultado = await pool.query(sql, parametros)
    return resultado?.rows[0]
  } catch (error) {
    return false
  }
}

module.exports = {
  debito,
  credito,
  historico
}
