/* ---- Requires ---- */

const express = require('express')
const router = express.Router()
const helperResponse = require('densyy-response')
const packageJson = require('../package.json')

/* ---- Routes ---- */

router.get('/', (_req, res) => {
  const versao = packageJson.version
  const nome = packageJson.name
  helperResponse.success(res, `Bem vindo à ${nome} (${versao})`)
})

module.exports = router
