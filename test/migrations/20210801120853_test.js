
export const up = async function(knex) {
  return knex.schema.createTable('table_one', (table) => {
      table.increments();
  });
};

export const down = async function(knex) {
  return knex.schema.dropTable('table_one');
};
