/* ---- Requires ---- */

const helperResponse = require('../helpers/response')

/* ---- Methods ---- */

function route (_req, res) {
  return helperResponse.simpleError(res, 404)
}

module.exports = route
