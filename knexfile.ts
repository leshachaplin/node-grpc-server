const path = require('path');
//
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
//
// const config = {
//     client: 'pg',
//     connection: 'postgres://su:su@localhost:5432/node_grpc',
//     migrations: {
//         directory: path.join(BASE_PATH, 'migrations')
//     }
// };
//
// module.exports = config;

const shouldLogDebug = process.env.USE_KNEX_DEBUG && JSON.parse(process.env.USE_KNEX_DEBUG);

const knexConfig = {
    client: 'pg',
    useNullAsDefault: true,
    debug: shouldLogDebug,
    connection: 'postgres://su:su@localhost:5432/node_grpc',
    migrations: {
        directory: path.join(BASE_PATH, 'migrations')
    },
    pool: {
        min: 1,
        max: 10,
    },
};

module.exports = knexConfig;