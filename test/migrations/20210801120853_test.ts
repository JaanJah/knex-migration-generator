import { Knex } from "knex";

export const up = async (knex: Knex) => {
   await knex.schema.createTable('table_one', (table) => {
        table.integer('id').unsigned().defaultTo(null).comment('Primary key for table_one with the name id');
        table.integer('integer_col').nullable().defaultTo(null);
        table.bigInteger('big_integer_col').nullable().defaultTo(null);
        table.text('mediumtext_col', 'mediumtext').nullable().defaultTo(null);
        table.text('longtext_col', 'longtext').nullable().defaultTo(null);
        table.text('text_col', 'text').nullable().defaultTo(null);
        table.specificType('string_col', `varchar(256)`).nullable().defaultTo(null);
        table.specificType('float_col', `float(8,2)`).nullable().defaultTo(null);
        table.specificType('double_col', `decimal(8,2)`).nullable().defaultTo(null);
        table.specificType('boolean_col', `tinyint(1)`).nullable().defaultTo(null);
        table.date('date_col').nullable().defaultTo(null);
        table.specificType('datetime_col', `datetime(6)`).nullable().defaultTo(knex.fn.now(6));
        table.specificType('time_col', `time`).nullable().defaultTo(null);
        table.timestamp('timestamp_col').nullable().defaultTo(knex.fn.now());
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.binary('binary_col').nullable().defaultTo(null);
        table.specificType('enum_col', `enum('ONE','TWO')`).nullable().defaultTo(null);
        table.json('json_col').nullable().defaultTo(null);
        table.specificType('uuid_col', `char(36)`).nullable().defaultTo(null);
        table.json('jsonb_col').nullable().defaultTo(null);
        table.specificType('point_col', `point`).nullable().defaultTo(null);
   });
   await knex.schema.createTable('table_three', (table) => {
        table.integer('id').unsigned().defaultTo(null);
   });
   await knex.schema.createTable('table_two', (table) => {
        table.integer('id').unsigned().defaultTo(null);
   });
};

export const down = async (knex: Knex) => {
   await knex.schema.dropTable('table_one');
   await knex.schema.dropTable('table_three');
   await knex.schema.dropTable('table_two');
};
