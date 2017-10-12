const express = require('express');
const knex = require('../db/knex');

const router = express.Router();

router.get('/', (req, res) => {
  knex('habits').select().then((habits) => {
    res.json(habits);
  });
});

router.get('/:id', (req, res) => {
  knex('habits').select().where('id', req.params.id).then((habit) => {
    res.json(habit);
  });
});

router.post('/', (req, res) => {
  knex('habits').insert(req.body).then(() => {
    knex('habits').select().then(habits => res.json(habits));
  })
});

module.exports = router;
