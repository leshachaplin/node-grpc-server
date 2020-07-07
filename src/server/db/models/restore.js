const {Model} = require('objection');
//const db = require('../../db');

//Model.knex(db);

class Restore extends Model {

    static get tableName() {
        return 'restore';
    }

    static get jsonSchema() {
        return {
            type: "object",

            properties: {
                UserId: {type: 'string'},
                Exp: {type: 'string', minLength: 1, maxLength: 255},
                UuidRestore: {type: 'string', minLength: 1, maxLength: 255},
            }
        }
    }

    static get relationMappings() {

        const User = require('./user');

        return {
            user: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'Restore.UserId',
                    to: 'User.UserId'
                }
            }
        }
    }
}

module.exports = {Restore};