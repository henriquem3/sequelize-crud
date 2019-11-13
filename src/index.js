const express = require('express')

const { Usuario } = require('../app/models')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3333, () => {
  console.log('servidor iniciado')
})
