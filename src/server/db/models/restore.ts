import BaseModel from './base';
//const knex = require('../connection');

//Model.knex(knex);

class Restore extends BaseModel {

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

        const UserModel = require('./user');

        return {
            user: {
                relation: BaseModel.HasManyRelation,
                modelClass: UserModel,
                join: {
                    from: 'Restore.UserId',
                    to: 'User.UserId'
                }
            }
        }
    }
}

export default Restore;