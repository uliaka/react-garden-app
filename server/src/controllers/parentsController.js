var express = require('express');
var parentsService = require ('../services/parentsService.js');
var router  = express.Router();

router.post('/', function(req, res, next) {
  parentsService.createParent(req.body)
  .then((data) => res.status(201).send(data))
  .catch((error) => next(error));
});

router.get('/', function(req, res, next) {
  parentsService.getParents()
  .then((data) => res.json({ data }))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  parentsService.getParentById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((error) => next(error));
});

router.put('/:id', (req, res, next) => {
  parentsService.updateParent(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((error) => next(error));
});

router.delete('/:id', (req, res, next) => {
  parentsService.deleteParent(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});
module.exports = router;