module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define('usuario', {
    nome: Sequelize.STRING
  })

  return Usuario
}
