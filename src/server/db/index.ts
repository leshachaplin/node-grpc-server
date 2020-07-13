import Knex from 'knex';
import { Model } from 'objection';

const knexConfig = require ('../../../knexfile');

const connect = async (): Promise<any> => {
    const knex = Knex(knexConfig);
    Model.knex(knex);

    return knex
        .select()
        .from('knex_migrations')
        .catch((err) => {
            console.log(err);
            throw new Error('Error establishing a database connection');
        });
};

export default connect;