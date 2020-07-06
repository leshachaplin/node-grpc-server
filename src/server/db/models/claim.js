const {Model} = require('objection');
const {User} = require('./user');
//const db = require('../../db');

//Model.knex(db);

class Claim extends Model {

    static get tableName() {
        return 'claim';
    }

    static get jsonSchema() {
        return {
            type: "object",

            properties: {
                UserId: {type: 'string'},
                value: {type: 'string', minLength: 1, maxLength: 255},
                key: {type: 'string', minLength: 1, maxLength: 255},
            }
        }
    }

    static relationMappings = {
        user: {
            relation: Model.HasManyRelation,
            modelClass: User,
            join: {
                from: 'Claim.UserId',
                to: 'User.UserId'
            }
        }
    }
}

module.exports = {Claim};