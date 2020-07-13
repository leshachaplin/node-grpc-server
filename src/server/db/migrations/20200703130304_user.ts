import * as Knex from 'knex';

exports.up = (knex: Knex): Promise<any> => {
    return knex.schema.createTable('users', (table) => {
        table.string('UserId').notNullable().primary();
        table.string('Password').notNullable().unique();
        table.boolean('Confirmed').notNullable();
        table.timestamp('deletedAt');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
    });
};

exports.down = (knex: Knex):Promise<any> => {
    return knex.schema.dropTable('users');
};