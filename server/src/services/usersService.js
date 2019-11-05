var models  = require('../models/index.js');

const usersModel = models.User;

const createUser = (user) => usersModel.create(user); 

const getUsers = () => usersModel.findAll();

const getUserById = (id) => usersModel.findAll({
    where: { id },
  });

const updateUser = (id, user) => usersModel.update(
user,
{
    where: { id }
}
);

const deleteUser = (id) => usersModel.destroy({
    where: { id },
  });

module.exports = { 
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}
