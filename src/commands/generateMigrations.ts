import getField from "./builder/getField";
import database from '../utils/database';

const ignoreTables = ['knex_migrations', 'knex_migrations_lock'];
let text = '';

export default async (tables: string[]) => {
    await migrateUp(tables);
    migrateDown(tables);

    return text;
}

const migrateUp = async (tables: string[]) => {

    text += 'import { Knex } from "knex";\n\n';
    text += 'export const up = async (knex: Knex) => {\n';
    for (const table of tables) {
        if (ignoreTables.includes(table)) {
            continue;
        }

        const [fields] = await database.raw(`DESCRIBE ${table}`);

        text += `   await knex.schema.createTable('${table}', (table) => {\n`;
        fields.forEach((field: any) => {
            text += generateField(field);
        });
        text += `   });\n`;
    }
    text += '};\n';
};

const migrateDown = (tables: string[]) => {
    text += '\nexport const down = async (knex: Knex) => {\n';
    for (const table of tables) {
        if (ignoreTables.includes(table)) {
            continue;
        }

        text += `   await knex.schema.dropTable('${table}');\n`;
    }
    text += '};\n';
}

const generateField = (field: any) => {
    let text = 'table.';

    text += getField(field);

    return `        ${text};\n`;
}