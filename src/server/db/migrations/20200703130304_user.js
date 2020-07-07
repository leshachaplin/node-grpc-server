exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
        table.string('UserId').notNullable().primary();
        table.string('Password').notNullable().unique();
        table.boolean('Confirmed').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};