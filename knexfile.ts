// Update with your config settings.

import { Knex } from "knex";

const config: Knex.Config = {
  client: 'mysql',
  connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'test_database'
  },
  migrations: {
    directory: './test/migrations',
    extension: '.ts',
    disableMigrationsListValidation: true,
  }
};

export default {
  development: {
    ...config,
  },
};
