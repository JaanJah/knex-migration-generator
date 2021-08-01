import knex from 'knex';

const instance = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        debug: false,
        password: '',
        database: 'test_database'
    },
});

const main = async () => {
    console.log(await instance.select(1));
    process.exit(0);
}

await main();