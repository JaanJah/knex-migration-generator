import database from '../utils/database';

export default async (): Promise<string[]> => {
    const [result, _]: any[] = await database.raw('SHOW TABLES');
    let tables: string[] = [];
    for (const x of Object.values(result)) {
        const value: any = Object.values(x as any)[0];
        tables.push(value);
    }

    return tables;
}