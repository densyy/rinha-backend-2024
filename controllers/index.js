/* ---- Requires ---- */

const helperResponse = require('../helpers/response')

/* ---- Methods ---- */

function route (_req, res) {
  return helperResponse.success(res, { message: 'Bem vindo à Api Rinha de Backend' })
}

module.exports = route
