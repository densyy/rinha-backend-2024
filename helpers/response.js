/* ---- Methods ---- */

function success (res, message) {
  return sendResponse(res, 'ok', 200, message)
}

function simpleError (res, statusCode, message) {
  return sendResponse(res, 'error', statusCode, message)
}

function serverError (res) {
  const statusCode = 500
  const message = 'Houve um erro interno'
  return sendResponse(res, 'error', statusCode, message)
}

/* ---- Aux Functions ---- */

function sendResponse (res, status, statusCode, body) {
  const headers = { 'Content-Type': 'application/json' }
  res.writeHead(statusCode, headers)
  const response = { status, statusCode, body }
  res.end(JSON.stringify(response))
}

module.exports = {
  success,
  simpleError,
  serverError
}
