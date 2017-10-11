exports.up = function(knex, Promise) {
  return knex.schema.createTable('habits', function(table){
    table.increments();
    table.string('name');
    table.integer('time');
    table.string('user_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('habits');
};
