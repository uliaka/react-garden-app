var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res, next) {
  const user = req.body;
  models.User.create(user)
  .then(() => res.status(201).send())
  .catch((error) => next(error));
});

router.get('/', function(req, res, next) {
  models.User.findAll()
  .then((req) => res.json({ req }))
  .catch((error) => next(error));
});


module.exports = router;