/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const validationTransacoes = require('../validations/transacoes')
const repositoryClientes = require('../repositories/clientes')
const repositoryUnico = require('../repositories/unico')

/* ---- Methods ---- */

async function route (req, res) {
  try {
    // step 1 - validate
    const validacaoOk = validationTransacoes(req.body)
    if (!validacaoOk) return helperResponse.simpleError(res, 422, { message: 'Há erros de validação' })

    // step 2 - get id
    const idCliente = req.url.split('/')[2]
    const cliente = await repositoryClientes.receberPorId(idCliente)

    // step 3 - check saldo ok
    const limiteOk = limiteValido(cliente, req.body)
    if (!limiteOk) return helperResponse.simpleError(res, 422, { message: 'Transação inconsistente' })

    // step 4 - update db
    const resultado = await repositoryUnico.adicionarTransacao(idCliente, req.body)

    helperResponse.success(res, resultado)
  } catch (_error) {
    return helperResponse.serverError(res)
  }
}

function limiteValido (cliente, body) {
  if (body.tipo === 'c') return true

  const saldoFuturo = cliente.saldo - body.valor
  const prejuizoMaximo = cliente.limite * -1
  if (saldoFuturo >= prejuizoMaximo) return true

  return false
}

module.exports = route
