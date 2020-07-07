exports.up = (knex, Promise) => {
    return knex.schema.createTable('confirmation', (table) => {
        table.increments().unique();
        table.string('UserId').references('UserId').inTable('users').onDelete('CASCADE');
        table.string('UuidConfirmation');
        table.timestamp('Expiration');
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('confirmation');
};