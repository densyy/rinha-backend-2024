/* ---- Requires ---- */

const controllerTransacoes = require('../controllers/transacoes')
const controllerExtratos = require('../controllers/extratos')
const controllerError = require('../controllers/error')

/* ---- Methods ---- */

const routes = (req, res) => {
  if (req.method === 'GET') return methodGet(req, res)
  if (req.method === 'POST') return parseJsonPost(req, res)
  return controllerError(req, res)
}

//
// GET
//

function methodGet (req, res) {
  if (!req.url.startsWith('/clientes/') || !req.url.endsWith('/extrato')) return controllerError(req, res)

  const clienteId = req.url.split('/')[2]
  if (!['1', '2', '3', '4', '5'].includes(clienteId)) return controllerError(req, res)

  return controllerExtratos(req, res)
}

//
// POST
//

function parseJsonPost (req, res) {
  let body = ''
  req.on('data', chunk => { body += chunk.toString() })
  req.on('end', () => {
    try {
      req.body = JSON.parse(body)
    } catch (error) {
      return controllerError(req, res)
    }

    return methodPost(req, res)
  })
}

function methodPost (req, res) {
  if (!req.url.startsWith('/clientes/') || !req.url.endsWith('/transacoes')) return controllerError(req, res)

  const clienteId = req.url.split('/')[2]
  if (!['1', '2', '3', '4', '5'].includes(clienteId)) return controllerError(req, res)

  return controllerTransacoes(req, res)
}

module.exports = routes
