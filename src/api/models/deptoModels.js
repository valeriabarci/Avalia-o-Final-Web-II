const { Model, DataTypes} = require('sequelize');

class Departamento extends Model{
    static init (sequelize) {
        super.init({
            dep_descricao: DataTypes.STRING,
            dep_responsavel: DataTypes.STRING,
            dep_ramal: DataTypes.INTEGER
        },{
            sequelize,
            tableName: 'departamentodbs'
        })

        return this;
    }
}

module.exports = Departamento;