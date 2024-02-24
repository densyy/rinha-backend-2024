/* ---- Requires ---- */

const http = require('http')
const packageJson = require('../package.json')

/* ---- Sistema ---- */

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const versao = packageJson.version
    const nome = packageJson.name
    response(res, 200, `Bem vindo à ${nome} (${versao})`)
  } else {
    response(res, 404, 'Rota não existe')
  }
})

/* ---- Aux Functions ---- */

function response (res, statusCode, message) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  res.end(`{ status: 'ok', statusCode: 200, body: ${message} }`)
}

/* ---- Server ---- */

const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
