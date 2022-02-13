import getField from "./builder/getField";
import database from '../utils/database';
import Column from "../interfaces/Column";

const ignoreTables = ['knex_migrations', 'knex_migrations_lock'];
let text = '';

export default async (tables: string[]) => {
    text += 'import { Knex } from "knex";\n\n';
    tables = tables.filter((x) => !ignoreTables.includes(x));
    await migrateUp(tables);
    migrateDown(tables);

    return text;
}

const migrateUp = async (tables: string[]) => {
    text += 'export const up = async (knex: Knex) => {\n';
    // Generate tables
    for (const table of tables) {
        const [fields] = await database.raw<[Column[], Column[]]>(`SHOW FULL COLUMNS FROM ${table}`);

        text += `   await knex.schema.createTable('${table}', (table) => {\n`;
        fields.forEach((field) => {
            text += generateField(field);
        });
        text += `   });\n\n`;
    }
    // Generate indexes
    for (const table of tables) {
        const [fields] = await database.raw(`SHOW INDEXES FROM ${table}`);

        if (!fields.length) {
            continue;
        }
    }
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

const generateField = (field: Column) => {
    let text = 'table.';

    text += getField(field);

    return `        ${text};\n`;
}

const generateIndex = (field: any) => {

}