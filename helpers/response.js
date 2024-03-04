/* ---- Methods ---- */

function success (res, message) {
  return sendResponse(res, 200, message)
}

function simpleError (res, statusCode) {
  return sendResponse(res, statusCode, null)
}

function serverError (res) {
  const statusCode = 500
  return sendResponse(res, statusCode, null)
}

/* ---- Aux Functions ---- */

function sendResponse (res, statusCode, body) {
  const message = (body) ? JSON.stringify(body) : null
  res.writeHead(statusCode)
  res.end(message)
}

module.exports = {
  success,
  simpleError,
  serverError
}
