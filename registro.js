const db = require('./db')

const Ponto = db.sequelize.define('registro',{
    dataponto: {
        type: db.Sequelize.DATE
    },
tipoponto:{
    type: db.Sequelize.STRING 
},
observacao: {
    type: db.Sequelize.STRING
}
})

module.exports = Ponto
