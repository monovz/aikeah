'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  class Transaction extends Model {}

  Transaction.init({
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: 'id',
      },
    },
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Products",
        key: 'id',
      },
    },
    status: DataTypes.ENUM(["to cart", "finished"]),
    amount: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 1,
          msg: 'min. amount is 1!'
        }
      }
    },
  }, { sequelize });
  Transaction.associate = function(models) {
    Transaction.belongsTo(models.Product, {foreignKey: "ProductId", targetKey: "id"})
    Transaction.belongsTo(models.User, {foreignKey: "UserId", targetKey: "id"})
  };
  return Transaction;
};