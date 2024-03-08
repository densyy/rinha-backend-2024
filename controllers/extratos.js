/* ---- Requires ---- */

const helperResponse = require('../helpers/response')
const repositoryUnico = require('../repositories/unico')

/* ---- Methods ---- */

async function route (req, res) {
  try {
    const idCliente = req.url.split('/')[2]
    const resultado = await repositoryUnico.historico(idCliente)
    if (resultado === false) return helperResponse.serverError(res)

    const resultadoFormatado = formatarResultado(resultado)
    return helperResponse.success(res, resultadoFormatado)
  } catch (error) {
    return helperResponse.serverError(res)
  }
}

function formatarResultado (resultado) {
  const agora = new Date()

  const ultimasTransacoes = resultado?.transacoes?.map(transacao => {
    return {
      valor: transacao.valor,
      tipo: transacao.tipo,
      descricao: transacao.descricao,
      realizada_em: transacao.data_registro
    }
  })

  return {
    saldo: {
      total: resultado?.cliente?.saldo,
      data_extrato: agora,
      limite: resultado?.cliente?.limite
    },
    ultimas_transacoes: ultimasTransacoes
  }
}

module.exports = route
