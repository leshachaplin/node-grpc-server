exports.seed = (knex, Promise) => {
    return knex('users').del()
        .then(() => {
            return knex('users').insert({
                UserId: 'lesha',
                Password: 'Fantasy',
                Confirmed: false
            });
        })
        .then(() => {
            return knex('users').insert({
                UserId: 'a',
                Password: 'Science Fiction',
                Confirmed: true
            });
        })
};

