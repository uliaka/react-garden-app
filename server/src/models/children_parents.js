'use strict';
module.exports = (sequelize, DataTypes) => {
  const children_parents = sequelize.define('children_parents', {
    childrenId: DataTypes.INTEGER,
    parentsId: DataTypes.INTEGER
  }, {
    timestamps: false
});
  children_parents.associate = function(models) {
    // associations can be defined here
  };
  return children_parents;
};