import BaseModel from './base';

//const knex = require('../connection');

//Model.knex(knex);

class Confirmation extends BaseModel {

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

        const UserModel = require('./user');

        return {
            user: {
                relation: BaseModel.HasManyRelation,
                modelClass: UserModel,
                join: {
                    from: 'Confirmation.UserId',
                    to: 'User.UserId'
                }
            }
        }
    }
}

export default Confirmation;