module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    nome: Sequelize.STRING
  })

  return Usuario
}
