const {Model} = require('objection');
//const db = require('../../db');

//Model.knex(db);

class Confirmation extends Model {

    static get tableName() {
        return 'confirmation';
    }

    static get jsonSchema() {
        return {
            type: "object",

            properties: {
                UserId: {type: 'string'},
                Expiration: {type: 'string', minLength: 1, maxLength: 255},
                UuidConfirmation: {type: 'string', minLength: 1, maxLength: 255},
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
                    from: 'Confirmation.UserId',
                    to: 'User.UserId'
                }
            }
        }
    }
}

module.exports = {Confirmation};