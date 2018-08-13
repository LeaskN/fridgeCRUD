
exports.up = function(knex) {
  return knex.schema.createTable('food', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('description');
    table.float('importance');
    table.text('url');
    table.integer('quantity').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('food');
};
