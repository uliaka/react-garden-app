'use strict';
module.exports = (sequelize, DataTypes) => {
  const children = sequelize.define('children', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    joinDate: DataTypes.STRING
  }, {});
  children.associate = function(models) {
    // associations can be defined here
  };
  return children;
};