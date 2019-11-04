var express = require('express');
var users = require('../controllers/usersController.js')
var parents = require ('../controllers/parentsController.js')
const children = require('../controllers/childrenController.js')
var router  = express.Router();

router.use('/users', users);
router.use('/parents', parents);
router.use('/children', children)

module.exports = router;
