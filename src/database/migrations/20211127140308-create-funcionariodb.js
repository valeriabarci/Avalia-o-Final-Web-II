'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('funcionariodbs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fun_nome: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      fun_apelido: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      fun_sexo: {
        allowNull: false,
        type: Sequelize.CHAR(1),
      },
      fun_nascimento: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dep_codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'departamentodbs',
          key: 'id'
          },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('funcionariodbs');
  }
};