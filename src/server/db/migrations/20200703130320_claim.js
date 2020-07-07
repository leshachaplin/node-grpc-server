exports.up = (knex, Promise) => {
    return knex.schema.createTable('claim', (table) => {
        table.increments('id').unique().primary();
        table.string('UserId').references('UserId').inTable('users').onDelete('CASCADE');
        table.string('value').notNullable();
        table.string('key').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('claim');
};