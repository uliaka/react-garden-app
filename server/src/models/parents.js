'use strict';
module.exports = (sequelize, DataTypes) => {
  const parents = sequelize.define('parents', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  parents.associate = function(models) {
    // associations can be defined here
  };
  return parents;
};