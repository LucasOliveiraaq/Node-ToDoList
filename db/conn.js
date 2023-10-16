const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodesmvc', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql' //qual banco sequelize vai conectar.
});

try {
    sequelize.authenticate();//Usar o authenticate para conectar ao banco.
    console.log('Conectamos com sucesso com o sequelize!');
} catch (err) {
    console.log('Não foi possível conectar: ' + err);
}

module.exports = sequelize;