/* ---- Requires ---- */

const helperResponse = require('../helpers/response')

/* ---- Methods ---- */

function route (req, res) {
  // step 1 - get id
  // const idCliente = req.url.split('/')[2]

  // step 2 - get db

  return helperResponse.success(res, 'Deu certo')
}

module.exports = route
