
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('habits_dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('habits_dates').insert([
        {
          habit_id: 1,
          date: '2017-10-03'
        },
        {
          habit_id: 1,
          date: '2017-10-04'
        },
        {
          habit_id: 1,
          date: '2017-10-05'
        },
        {
          habit_id: 1,
          date: '2017-10-06'
        },
        {
          habit_id: 1,
          date: '2017-10-08'
        },
        {
          habit_id: 2,
          date: '2017-10-03'
        },
        {
          habit_id: 2,
          date: '2017-10-05'
        },
        {
          habit_id: 2,
          date: '2017-10-07'
        },
        {
          habit_id: 3,
          date: '2017-10-04'
        },
        {
          habit_id: 3,
          date: '2017-10-05'
        },
        {
          habit_id: 3,
          date: '2017-10-06'
        },
        {
          habit_id: 3,
          date: '2017-10-07'
        },
        {
          habit_id: 3,
          date: '2017-10-08'
        },
      ]);
    });
};
