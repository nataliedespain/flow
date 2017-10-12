const express = require('express');
const knex = require('../db/knex');

const router = express.Router();

// get all dates
router.get('/', (req, res) => {
  knex('habits_dates').select()
    .then((dates) => {
      res.json(dates);
    });
});

// get all dates for specific user
router.get('/:uid', (req, res) => {
  knex.raw(`SELECT habits_dates.*, habits.user_id FROM habits_dates JOIN habits ON habit_id = habits.id WHERE habits.user_id = '${req.params.uid}'`)
    .then((dates) => {
      res.json(dates.rows);
    });
});

router.post('/', (req, res) => {
  knex('habits_dates').insert(req.body).then(() => {
    knex('habits_dates').select().then(dates => res.json(dates));
  });
});

module.exports = router;
