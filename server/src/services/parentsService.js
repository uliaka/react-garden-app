var models  = require('../models/index.js');

const parentsModel = models.parents;

const createParent = (parent) => parentsModel.create(parent); 

const getParents = () => parentsModel.findAll();

const getParentById = (id) => parentsModel.findAll({
    where: { id },
  });

const updateParent = (id, parent) => parentsModel.update(
  parent,
{
    where: { id }
}
);

const deleteParent = (id) => parentsModel.destroy({
    where: { id },
  });

module.exports = { 
  createParent,
  getParents,
  getParentById,
  updateParent,
  deleteParent
}
