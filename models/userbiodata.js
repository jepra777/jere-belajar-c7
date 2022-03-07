'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserBiodata.belongsTo(models.User)
    }
  }
  UserBiodata.init({
    name: DataTypes.STRING,
    gender: {
      types: DataTypes.ENUM,
      values: ["male", "female", "null"],
      validate: {
        isIn: [["male", "female", "null"]]
      }
    },
    dob: DataTypes.DATE,
    status: DataTypes.STRING,
    UserId:{
      type: DataTypes.INTEGER,
      validate:{
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'UserBiodata',
  });
  return UserBiodata;
};