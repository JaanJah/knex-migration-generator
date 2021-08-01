// Update with your config settings.

export default {
  development: {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test_database'
    },
    migrations: {
      directory: './test/migrations'
    }
  },
};
