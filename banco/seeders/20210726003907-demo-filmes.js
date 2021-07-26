'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.bulkInsert('filmes', [
      {
        nome: 'Vovozona',
        genero: 'Comédia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Todo mundo em pânico',
        genero: 'Comédia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Minha mãe é uma peça',
        genero: 'Comédia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('filmes', null, {});
  }
};
