var express = require('express');
var childrenService = require ('../services/childrenService.js');
var router  = express.Router();

router.post('/', function(req, res, next) {
  childrenService.createChild(req.body)
  .then((data) =>  res.status(201).send(data))
  .catch((error) => next(error));
});

router.get('/', function(req, res, next) {
  childrenService.getChildren()
  .then((data) => res.json({ data }))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
   childrenService.getChildById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((error) => next(error));
});

router.put('/:id', (req, res, next) => {
   childrenService.updateChild(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((error) => next(error));
});

router.delete('/:id', (req, res, next) => {
   childrenService.deleteChild(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});
module.exports = router;