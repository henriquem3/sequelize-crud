const express = require('express')

const { Usuario } = require('../app/models')

const router = express.Router()

router
  .route('/usuario/:id')
  // DETALHAR
  .get(async (req, res) => {
    const { id } = req.params
    const usuario = await Usuario.findOne({ where: { id } })
    return res.json(usuario)
  })
  // ATUALIZAR
  .put((req, res) => {})
  // REMOVER
  .delete(async (req, res) => {
    const { id } = req.params
    const removido = await Usuario.destroy({ where: { id } })
    if (removido) {
      return res.json({ Msg: 'Removido' })
    } else {
      return res.json({ Msg: 'Falha na remoção' })
    }
  })

router
  .route('/usuario')
  // LISTAR
  .get(async (req, res) => {
    const usuarios = await Usuario.findAll()
    return res.json(usuarios)
  })
  // CRIAR
  .post(async (req, res) => {
    const { nome } = req.body
    await Usuario.create({ nome: nome })
    return res.json({ Msg: 'Criado!' })
  })

module.exports = router
