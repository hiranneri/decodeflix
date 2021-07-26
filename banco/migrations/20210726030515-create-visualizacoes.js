'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('visualizacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      filmes_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'filmes', key: 'id'}
      },
      espectadores_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'espectadores', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('visualizacoes');
  }
};