'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const admin = {
      username: 'admin',
      email: 'admin@mail.com',
      password: bcrypt.hashSync('1234', bcrypt.genSaltSync(10)),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return queryInterface.bulkInsert('Users', [admin]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
