/* ---- Requires ---- */

const pool = require('./postgres')

/* ---- Methods ---- */

async function adicionarTransacao (idCliente, dados) {
  const valor = (dados.tipo === 'd') ? dados.valor * -1 : dados.valor
  const parametros = [idCliente, dados.valor, dados.tipo, dados.descricao, valor]
  const sql = `
  WITH add_transacoes AS (
    INSERT INTO transacoes (cliente_id, valor, tipo, descricao) VALUES ($1, $2, $3, $4)
  )
  UPDATE clientes SET saldo = saldo + $5 WHERE id = $1 RETURNING saldo, limite
  `
  const result = await pool.query(sql, parametros)
  return result?.rows
}

module.exports = {
  adicionarTransacao
}
