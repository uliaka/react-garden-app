var express = require('express');
var usersService = require ('../services/usersService.js');
var router  = express.Router();

router.post('/', function(req, res, next) {
  usersService.createUser(req.body)
  .then((user) => res.status(201).send(user))
  .catch((error) => next(error));
});

router.get('/', function(req, res, next) {
    usersService.getUsers()
  .then((data) => res.json({ data }))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  usersService.getUserById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((error) => next(error));
});

router.put('/:id', (req, res, next) => {
  usersService.updateUser(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((error) => next(error));
});

router.delete('/:id', (req, res, next) => {
  usersService.deleteUser(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});
module.exports = router;