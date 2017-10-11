
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('habits').del()
    .then(function() {
      // Inserts seed entries
      return knex('habits').insert([
        {
          name: 'Meditate',
          time: '1',
          user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        },
        // {
        //   name: 'Walk the dog',
        //   time: '1',
        //   user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        // },
        // {
        //   name: 'Eat breakfast',
        //   time: '1',
        //   user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        // },
        {
          name: 'Check mail',
          time: '2',
          user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        },
        // {
        //   name: 'Go to the gym',
        //   time: '2',
        //   user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        // },
        // {
        //   name: 'Yoga',
        //   time: '3',
        //   user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        // },
        {
          name: 'Journal',
          time: '3',
          user_id:'mrjztrr7AoQgIN6cxabjDZ3GWJV2'
        },
      ]);
    });
};
