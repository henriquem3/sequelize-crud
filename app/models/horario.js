module.exports = (sequelize, Sequelize) => {
  const Horario = sequelize.define('Horario', {
    dia: Sequelize.INTEGER(2),
    mes: Sequelize.INTEGER(2),
    ano: Sequelize.INTEGER(4),
    tipo: Sequelize.INTEGER(1)
  })

  return Horario
}
