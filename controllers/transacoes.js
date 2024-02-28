/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const validationTransacoes = require('../validations/transacoes')

/* ---- Methods ---- */

function route (req, res) {
  // step 1 - validate
  const validacaoOk = validationTransacoes(req.body)
  if (!validacaoOk) return helperResponse.simpleError(res, 422, 'Há erros de validação')

  // step 2 - get id
  // const idCliente = req.url.split('/')[2]

  // step 3 - check saldo ok

  // step 4 - update db

  return helperResponse.success(res, 'Deu certo')
}

module.exports = route
