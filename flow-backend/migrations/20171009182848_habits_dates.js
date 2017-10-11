exports.up = function(knex, Promise) {
  return knex.schema.createTable('habits_dates', function(table){
    table.increments();
    table.integer('habit_id');
    table.date('date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('habits_dates');
};
