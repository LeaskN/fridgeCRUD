const knex = require('./knex');
module.exports = {
  /* eslint-disable */
  getAll(query) {
    const knexQuery = knex('food');
    if(query.title){
      knexQuery.where('title', 'like', `%${query.title}%`);
    }
    if(query.description) {
      knexQuery.where('description', 'like', `%${query.description}%`);
    }
    return knexQuery;
  },
  /* eslint-enable */
  getOne(id) {
    return knex('food').where('id', id).first();
  },
  create(food) {
    return knex('food').insert(food, '*');
  },
  update(id, food) {
    return knex('food').where('id', id).update(food, '*');
  },
  delete(id) {
    return knex('food').where('id', id).del();
  }
};