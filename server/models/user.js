'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  
  class User extends Model {}

  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          args: true,
          msg: "Add email properly!"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
    },
    role: DataTypes.ENUM(["admin", "user"])
  }, { 
    sequelize,
    hooks: {
      beforeCreate(user) {
        user.password = bcrypt.hashSync(user.password, 10);
        user.role = 'user'
      },
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Product, {foreignKey: "UserId", sourceKey: "id"})
  };
  return User;
};