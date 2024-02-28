/* ---- Methods ---- */

function validate (body) {
  // valida tipos de dados
  if (typeof body.tipo !== 'string') return false
  if (typeof body.valor !== 'number') return false
  if (typeof body.descricao !== 'string') return false

  // valida body.tipo
  if (!['c', 'd'].includes(body.tipo)) return false

  // valida body.valor
  if (body.valor < 0) return false
  if (!Number.isInteger(body.valor)) return false

  // valida body.descricao
  if (body.descricao.length < 1) return false
  if (body.descricao.length > 10) return false

  return true
}

module.exports = validate
