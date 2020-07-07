exports.up = (knex, Promise) => {
    return knex.schema.createTable('refresh', (table) => {
        table.increments().unique();
        table.string('UserId').references('UserId').inTable('users').onDelete('CASCADE');
        table.timestamp('Expiration');
        table.timestamp('Token').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('refresh');
};