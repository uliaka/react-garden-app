var models  = require('../models/index.js');

const childrenModel = models.children;

const createChild = (child) => childrenModel.create(child); 

const getChildren = () => childrenModel.findAll();

const getChildById = (id) => childrenModel.findAll({
    where: { id },
  });

const updateChild = (id, child) => childrenModel.update(
  child,
{
    where: { id }
}
);

const deleteChild = (id) => childrenModel.destroy({
    where: { id },
  });

module.exports = { 
  createChild,
  getChildren,
  getChildById,
  updateChild,
  deleteChild
}
