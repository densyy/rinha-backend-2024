/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const validationTransacoes = require('../validations/transacoes')
const repositoryUnico = require('../repositories/unico')

/* ---- Methods ---- */

async function route (req, res) {
  try {
    // step 1 - validate
    const validacaoOk = validationTransacoes(req.body)
    if (!validacaoOk) return helperResponse.simpleError(res, 422, { message: 'Há erros de validação' })

    // step 2 - update db
    const idCliente = req.url.split('/')[2]
    const resultado = await repositoryUnico.adicionarTransacao(idCliente, req.body)
    if (!resultado) return helperResponse.simpleError(res, 422, { message: 'Transação inconsistente' })

    helperResponse.success(res, resultado)
  } catch (_error) {
    return helperResponse.serverError(res)
  }
}

module.exports = route
