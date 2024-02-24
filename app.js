/* ---- Requires ---- */

require('dotenv/config')
const express = require('express')

const app = express()
const configs = require('./configs/index')

/* ---- Configs ---- */

configs.middlewares.iniciar(app, express)
configs.routes.registrar(app)

module.exports = app
