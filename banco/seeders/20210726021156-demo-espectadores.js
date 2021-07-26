'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
  await queryInterface.bulkInsert('espectadores', [
    {
      nome: 'Hiran Neri',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nome: 'José Silva',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Gabriel Santos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
], {});
    
  },

  down: async (queryInterface, Sequelize) => {    
 
      await queryInterface.bulkDelete('espectadores', null, {});
     
  }
};
