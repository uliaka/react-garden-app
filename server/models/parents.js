'use strict';
module.exports = (sequelize, DataTypes) => {
  const parents = sequelize.define('parents', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  parents.associate = function(models) {
    // associations can be defined here
  };
  return parents;
};