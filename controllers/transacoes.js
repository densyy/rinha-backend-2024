/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const validationTransacoes = require('../validations/transacoes')
const repositoryClientes = require('../repositories/clientes')
const repositoryTransacoes = require('../repositories/transacoes')

/* ---- Methods ---- */

async function route (req, res) {
  try {
    // step 1 - validate
    const validacaoOk = validationTransacoes(req.body)
    if (!validacaoOk) return helperResponse.simpleError(res, 422, 'Há erros de validação')

    // step 2 - get id
    const idCliente = req.url.split('/')[2]
    const cliente = await repositoryClientes.receberPorId(idCliente)

    // step 3 - check saldo ok
    const limiteOk = limiteValido(cliente, req.body)
    if (!limiteOk) return helperResponse.simpleError(res, 422, 'Transação inconsistente')

    // step 4 - update db
    await repositoryTransacoes.adicionar(cliente.id, req.body)
    await repositoryClientes.atualizarSaldo(cliente.id, req.body)

    const retorno = formatarRetorno(cliente, req.body)
    return helperResponse.success(res, retorno)
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

function formatarRetorno (cliente, body) {
  const tipo = (body.tipo === 'd') ? -1 : 1
  const limite = cliente.limite
  const saldo = cliente.saldo + (body.valor * tipo)
  return { limite, saldo }
}

module.exports = route
