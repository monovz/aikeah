'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_Transactions_UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
      .then(_=>{
        return queryInterface.addConstraint('Transactions', {
          fields: ['ProductId'],
          type: 'foreign key',
          name: 'custom_fkey_Transactions_ProductId',
          references: { //Required field
            table: 'Products',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Transactions', 'custom_fkey_Transactions_UserId')
    .then(_=>{
      return queryInterface.removeConstraint('Transactions', 'custom_fkey_Transactions_ProductId')
    })
  }
};
