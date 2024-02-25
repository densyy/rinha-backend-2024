/* ---- Requires ---- */

const controllerIndex = require('../controllers/index')
const controllerError = require('../controllers/error')

/* ---- Methods ---- */

const routes = (req, res) => {
  if (req.method === 'GET' && req.url === '/') return controllerIndex(req, res)
  else return controllerError(req, res)
}

module.exports = routes
