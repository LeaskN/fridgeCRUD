module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/fridge_contents'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-fridge_contents'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
