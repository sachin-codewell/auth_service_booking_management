'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');

const { serverConfig } = require('../config/index')

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
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false,
      unique: true
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6,20] // allow password length 6 to 20
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  },
  );
  User.addHook('beforeCreate', (user, options) => {
    const hashedPassword = bcrypt.hashSync(user.password, Number(serverConfig.SALTRound));
    console.log(hashedPassword);
    user.password = hashedPassword
  });
  return User;
};

