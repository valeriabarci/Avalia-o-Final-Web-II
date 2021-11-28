const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const conexao = new Sequelize(dbConfig);

const deptos = require('../api/models/deptoModels');
const func = require('../api/models/funcModels');

try {
    conexao.authenticate()
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

deptos.init(conexao)
func.init(conexao)

module.exports = conexao;