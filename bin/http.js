/* ---- Requires ---- */

const http = require('http')
const helperRoutes = require('../helpers/routes')

/* ---- Constants ---- */

const PORT = process.env.PORT

/* ---- Server ---- */

const server = http.createServer(helperRoutes)

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
