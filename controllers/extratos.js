/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const repositoryClientes = require('../repositories/clientes')
const repositoryTransacoes = require('../repositories/transacoes')

/* ---- Methods ---- */

async function route (req, res) {
  const idCliente = req.url.split('/')[2]
  const cliente = await repositoryClientes.receberPorId(idCliente)
  const transacoes = await repositoryTransacoes.receberHistorico(idCliente)

  const resultado = formatarResultado(cliente, transacoes)
  return helperResponse.success(res, resultado)
}

function formatarResultado (cliente, transacoes) {
  const agora = new Date()

  const ultimasTransacoes = transacoes?.map(transacao => {
    return {
      valor: transacao.valor,
      tipo: transacao.tipo,
      descricao: transacao.descricao,
      realizada_em: transacao.data_registro
    }
  })

  return {
    saldo: {
      total: cliente.saldo,
      data_extrato: agora,
      limite: cliente.limite
    },
    ultimas_transacoes: ultimasTransacoes
  }
}

module.exports = route
