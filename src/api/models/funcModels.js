const { Model, DataTypes} = require('sequelize');

class Funcionario extends Model{
    static init (sequelize) {
        super.init({
            fun_nome: DataTypes.STRING,
            fun_apelido: DataTypes.STRING,
            fun_sexo: DataTypes.CHAR,
            fun_nascimento: DataTypes.DATE,
            dep_codigo: DataTypes.INTEGER
        },{
            sequelize,
            tableName: 'funcionariodbs'
        })

        return this;
    }
}

module.exports = Funcionario;