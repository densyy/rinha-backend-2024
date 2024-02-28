/* ---- Requires ---- */

const controllerIndex = require('../controllers/index')
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
  if (req.url === '/') return controllerIndex(req, res)
  if (req.url.match(/^\/clientes\/[1-5]\/extrato$/)) return controllerExtratos(req, res)
  return controllerError(req, res)
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
  if (req.url.match(/^\/clientes\/[1-5]\/transacoes$/)) return controllerTransacoes(req, res)
  return controllerError(req, res)
}

module.exports = routes
