const moment = require('moment')

const { Horario } = require('../models')

class HorarioController {
  async index(req, res) {
    const horarios = await Horario.findAll()
    return res.status(200).json(horarios)
  }

  async store(req, res) {
    const tiposValidos = ['entrada', 'saida']

    const date = moment()
    const dia = date.date()
    const mes = date.month() + 1
    const ano = date.year()
    const hora = date.hour()
    const minuto = date.minute()

    const { tipo } = req.body

    if (date.day() === 0 || date.day() === 6) {
      return res.status(403).json({ mensagem: 'Operação não permitida' })
    }

    if (!tiposValidos.includes(tipo)) {
      return res.status(400).json({ mensagem: 'Tipo inválido' })
    }

    const horario = await Horario.create({ dia, mes, ano, hora, minuto, tipo })
    return res.status(201).json(horario)
  }

  async query(req, res) {
    const tiposValidos = ['entrada', 'saida']
    const { tipo } = req.params

    if (!tiposValidos.includes(tipo)) {
      return res.status(400).json({ mensagem: 'Tipo inválido' })
    }
    const horarios = await Horario.findAll({ where: { tipo } })
    return res.status(200).json(horarios)
  }
}

module.exports = new HorarioController()
