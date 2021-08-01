
const tableOne = async (knex) => {
    return knex.schema.createTable('table_one', (table) => {
        table.increments('id').comment('Primary key for table_one with the name id');
        table.integer('integer_col', 20);
        table.bigInteger('big_integer_col');
        table.text('mediumtext_col', 'mediumtext');
        table.text('longtext_col', 'longtext');
        table.text('text_col');
        table.string('string_col', 256);
        table.float('float_col', 8, 2);
        table.decimal('double_col', 8, 2);
        table.boolean('boolean_col');
        table.date('date_col');
        table.datetime('datetime_col', { precision: 6}).defaultTo(knex.fn.now(6));
        table.time('time_col', { precision: 6 });
        table.timestamp('timestamp_col').defaultTo(knex.fn.now());
        table.timestamps(true, true);
        table.binary('binary_col');
        table.enu('enum_col', ['ONE', 'TWO']);
        table.json('json_col');
        table.uuid('uuid_col');
        table.jsonb('jsonb_col');
    })
};

const tableTwo = async (knex) => {

};

const tableThree = async (knex) => {

};

export const up = async (knex) => {
    await tableOne(knex);
    await tableTwo(knex);
    await tableThree(knex);
};

export const down = async (knex) => {
    await knex.schema.dropTableIfExists('table_one');
    await knex.schema.dropTableIfExists('table_two');
    await knex.schema.dropTableIfExists('table_three');
};
