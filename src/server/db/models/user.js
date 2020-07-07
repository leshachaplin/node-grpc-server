const {Model} = require('objection');
const {Claim} = require('./claim');
const {Refresh} = require('./refresh');
const {Confirmation} = require('./confirmation');
const {Restore} = require('./restore');
const knex = require('../connection');

Model.knex(knex);

class User extends Model {

    static get tableName() {
        return 'users';
    }

    static get idColumn() {
        return 'UserId';
    }

    static get jsonSchema() {
        return {
            type: "object",

            properties: {
                UserId: {type: 'string'},
                Password: {type: 'string', minLength: 1, maxLength: 255},
                Confirmed: {type: 'boolean'},
            }
        }
    }

    static relationMappings = {
        claims: {
            relation: Model.HasManyRelation,
            modelClass: Claim,
            join: {
                from: 'User.UserId',
                to: 'Claim.UserId'
            }
        },

        refresh: {
          relation: Model.HasOneRelation,
          modelClass: Refresh,
          join: {
              from: "User.UserId",
              to: "Refresh.UserId"
          }
        },

        confirmation: {
            relation: Model.HasOneRelation,
            modelClass: Confirmation,
            join: {
                from: "User.UserId",
                to: "Confirmation.UserId"
            }
        },

        restore: {
            relation: Model.HasOneRelation,
            modelClass: Restore,
            join: {
                from: "User.UserId",
                to: "Restore.UserId"
            }
        }
        }
}

module.exports = {User};