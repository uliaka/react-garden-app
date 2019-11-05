var models  = require('../models/index.js');

const childrenParentsModel = models.children_parents;

const addChildrenToParents = (parents) => childrenParentsModel.bulkCreate(parents); 

const getParentsdByChildId = (id) => childrenParentsModel.findAll({
    where: { childrenId: id },
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
  addChildrenToParents,
  getParentsdByChildId,
  updateChild,
  deleteChild
}
