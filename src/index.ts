import generateFile from './commands/generateFile';
import generateMigrations from './commands/generateMigrations';
import getTables from './commands/getTables';

const main = async () => {
    const tables = await getTables();
    const migrations = await generateMigrations(tables);
    await generateFile(migrations);
    process.exit(0);
}

main().then();