import BaseModel from './base';
import RefreshModel from '../../models/refresh'
import UserType from "../../models/user";
//const knex = require('../connection');

//Model.knex(knex);

class Refresh extends BaseModel {
    UserId!: string;
    Expiration!: Date;
    Token!: string;

    static get tableName() {
        return 'refresh';
    }

    static get idColumn() {
        return 'UserId';
    }

    static get jsonSchema() {
        return {
            type: "object",

            properties: {
                UserId: {type: 'string'},
                Expiration: {type: 'timestamp', minLength: 1, maxLength: 255},
                Token: {type: 'string', minLength: 1, maxLength: 255},
            }
        }
    }

    static async getRefreshToken(UserId: string) {
        return Refresh.query().findOne({UserId: UserId});
    }

    static addRefreshToken(refreshToken: RefreshModel) {
        return Refresh.query()
            .insert({
                UserId: refreshToken.UserId,
                Expiration: refreshToken.Expiration,
                Token: refreshToken.Token
            });
    }

    static get relationMappings() {

        const UserModel = require('./user');

        return {
            user: {
                relation: BaseModel.HasManyRelation,
                modelClass: UserModel,
                join: {
                    from: 'Refresh.UserId',
                    to: 'User.UserId'
                }
            }
        }
    }
}

export default Refresh;