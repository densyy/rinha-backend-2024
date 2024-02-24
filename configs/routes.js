/* ---- Methods ---- */

function registrar (app) {
  index(app)
  paginas(app)
  erro(app)
}

function paginas (_app) {
}

function index (app) {
  const ROUTE_INDEX = require('../routes/index')
  app.use('/', ROUTE_INDEX)
}

function erro (app) {
  const ROUTE_ERROR = require('../routes/error')
  app.use('/', ROUTE_ERROR)
}

module.exports = { registrar }
