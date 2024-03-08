/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const validationTransacoes = require('../validations/transacoes')
const repositoryUnico = require('../repositories/unico')

/* ---- Methods ---- */

async function route (req, res) {
  try {
    // step 1 - validate
    const validacaoOk = validationTransacoes(req.body)
    if (!validacaoOk) return helperResponse.simpleError(res, 422)

    const idCliente = req.url.split('/')[2]
    let resultado = ''

    if (req.body.tipo === 'c') resultado = await repositoryUnico.credito(idCliente, req.body)
    else resultado = await repositoryUnico.debito(idCliente, req.body)

    if (resultado === false) return helperResponse.simpleError(res, 422)
    return helperResponse.success(res, resultado)
  } catch (_error) {
    return helperResponse.serverError(res)
  }
}

module.exports = route
