import * as Knex from 'knex';

exports.up = (knex:Knex):Promise<any> => {
    return knex.schema.createTable('refresh', (table) => {
        table.increments().unique();
        table.string('UserId').references('UserId').inTable('users').onDelete('CASCADE');
        table.timestamp('Expiration');
        table.string('Token').notNullable();
    });
};

exports.down = (knex:Knex):Promise<any> => {
    return knex.schema.dropTable('refresh');
};