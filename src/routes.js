const express = require('express')

const HorarioController = require('../app/controllers/HorarioController')
const ImprimirController = require('../app/controllers/ImprimirController')

const router = express.Router()

router.get('/', HorarioController.index)
router.post('/', HorarioController.store)
router.get('/horarios/:tipo', HorarioController.query)

router.get('/imprimir/:mes', ImprimirController.query)

module.exports = router
