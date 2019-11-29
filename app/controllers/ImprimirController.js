const path = require('path')

const { Horario } = require('../models')

class ImprimirController {
  async query(req, res) {
    const filename = '07457652116-122019'
    const pdf = path.join(__dirname, '..', 'static', `${filename}.pdf`)
    const { mes } = req.params
    return res.download(pdf)
  }
}

module.exports = new ImprimirController()
