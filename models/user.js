'use strict';
const {
  Model
} = require('sequelize');
const { encode } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type:  DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Email is required'},
        notNull: {msg: 'Email is required'},
        isEmail: {msg: 'Email must be an email format'}
      }
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password is required'},
        notNull: {msg: 'Password is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, options){
        user.password = encode(user.password)
      }
    }
  });
  return User;
};