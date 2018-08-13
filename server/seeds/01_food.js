const all_food = require('../all_food');

exports.seed = async function(knex) {
  await knex.raw('ALTER SEQUENCE food_id_seq RESTART with 11');
  await knex('food').del();
  return knex('food').insert(all_food);
};
