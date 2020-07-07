exports.seed = (knex, Promise) => {
    return knex('claim').del()
        .then(() => {
            return knex('claim').insert({
                UserId: 'lesha',
                key: "false",
                value: 'Fantasy'
            });
        })
        .then(() => {
            return knex('claim').insert({
                UserId: 'lesha',
                key: "true",
                value: 'Science Fiction'
            });
        })
        .then(() => {
            return knex('claim').insert({
                UserId: 'a',
                key: "false",
                value: 'Action/Romance'
            });
        })
        .then(() => {
            return knex('claim').insert({
                UserId: "a",
                key: "c",
                value: "b"
            })
        });
};
