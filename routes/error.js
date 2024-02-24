/* ---- Requires ---- */

const express = require('express')
const router = express.Router()
const helperResponse = require('densyy-response')

/* ---- Routes ---- */

router.use('/', (_req, res) => {
  helperResponse.simpleError(res, 404, 'Rota inexistente.')
})

module.exports = router
