exports.up = (knex, Promise) => {
    return knex.schema.createTable('restore', (table) => {
        table.increments().unique();
        table.string('UserId').references('UserId').inTable('users').onDelete('CASCADE');
        table.string('UuidRestore');
        table.timestamp('Exp');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('restore');
};