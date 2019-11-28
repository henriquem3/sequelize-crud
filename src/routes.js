const express = require('express')
const moment = require('moment')

const { Horario } = require('../app/models')

const router = express.Router()

router.get('/', async (req, res) => {
  const horarios = await Horario.findAll()
  return res.json({ horarios })
})

router.get('/entrada', async (req, res) => {
  const date = moment()
  const dia = date.date()
  const mes = date.month() + 1
  const ano = date.year()

  const horario = await Horario.create({ dia, mes, ano })
  return res.json(horario)
})

module.exports = router
