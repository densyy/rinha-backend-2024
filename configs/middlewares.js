/* ---- Requires ---- */

const densyyMorgan = require('densyy-morgan')
const densyyCors = require('densyy-cors')
const densyyHelmet = require('densyy-helmet')
const compression = require('compression')

/* ---- Constants ---- */

const urlEncodedOptions = { extended: false }

/* ---- Methods ---- */

function iniciar (app, express) {
  app.use(express.json())
  app.use(express.urlencoded(urlEncodedOptions))
  app.use(densyyCors)
  app.use(densyyHelmet)
  app.use(densyyMorgan)
  app.use(compression())
}

module.exports = { iniciar }
