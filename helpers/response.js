/* ---- Methods ---- */

function success (res, message) {
  return sendResponse(res, 'ok', 200, message)
}

function simpleError (res, statusCode, message) {
  return sendResponse(res, 'error', statusCode, message)
}

function serverError (res) {
  const statusCode = 500
  const message = { message: 'Houve um erro interno' }
  return sendResponse(res, 'error', statusCode, message)
}

/* ---- Aux Functions ---- */

function sendResponse (res, _status, statusCode, body) {
  const headers = { 'Content-Type': 'application/json' }
  const response = { ...body }
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify(response))
  return true
}

module.exports = {
  success,
  simpleError,
  serverError
}
