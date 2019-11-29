module.exports = (sequelize, Sequelize) => {
  const Horario = sequelize.define('Horario', {
    dia: Sequelize.INTEGER,
    mes: Sequelize.INTEGER,
    ano: Sequelize.INTEGER,
    hora: Sequelize.INTEGER,
    minuto: Sequelize.INTEGER,
    tipo: Sequelize.STRING
  })

  return Horario
}
