const {Model} = require('objection');
//const db = require('../../db');

//Model.knex(db);

class Refresh extends Model {

    static get tableName() {
        return 'refresh';
    }

    static get jsonSchema() {
        return {
            type: "object",

            properties: {
                UserId: {type: 'string'},
                Expiration: {type: 'string', minLength: 1, maxLength: 255},
                Token: {type: 'string', minLength: 1, maxLength: 255},
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
                    from: 'Refresh.UserId',
                    to: 'User.UserId'
                }
            }
        }
    }
}

module.exports = {Refresh};