'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert("Chores", [{
      choreName:"Wash the dog",
      createdAt:new Date(),
      updatedAt:new Date(),

    },
  ],
  {}
  );
},

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Users', null, {});
  }
};
