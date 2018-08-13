const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validFood(food){
  const hasTitle = typeof food.title == 'string' && food.title.trim() != '';
  return hasTitle;
}

router.get('/', (req, res) => {
  const { title, description } = req.query;
  queries.getAll({ title, description }).then(foods => {
    res.json(foods);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(food => {
    if (food){
      res.json(food);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validFood(req.body)) {
    queries.create(req.body).then(foods => {
      res.json(foods[0]);
    });
  } else {
    next(new Error('Invalid food'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validFood(req.body)) {
    queries.update(req.params.id, req.body).then(foods => {
      res.json(foods[0]);
    });
  } else {
    next(new Error('Invalid food'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;