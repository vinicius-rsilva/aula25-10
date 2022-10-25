const Sequelize = require("sequelize")

const sequelize = new Sequelize('aula','root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(function(){
    console.log('conectado com DB !!!');
})

.catch(function(){
    console.log('Erro de conexão');
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}