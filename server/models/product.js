'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Product extends Model{}

  Product.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    UserId: {
      type: DataTypes.INTEGER,
      references:{
        model : "Users",
        key: "id"
      }
    }
  }, { sequelize });
  Product.associate = function(models) {
    Product.belongsTo(models.User, {foreignKey: "UserId", targetKey: "id"})
  };
  return Product;
};