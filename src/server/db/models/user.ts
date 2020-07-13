import Refresh from './refresh';
import Confirmation from './confirmation';
import Restore from './restore';
import {ValidationError} from 'objection';
import BaseModel from './base';
import Password from '../plugins/password';
import UserType from '../../models/user';

export type RegisterData = {
    UserId: string;
    Password: string;
};
// const knex = require('../connection');
//
// BaseModel.knex(knex);

export default class UserModel extends Password(BaseModel) {
    Confirmed!: boolean;
    UserId!: string;
    Password!: string;

    static timestamp = true;
    static tableName = 'users';
    static hidden = ['password'];

    static async create(data: RegisterData) {
        const user = await UserModel.query().findOne({UserId: data.UserId});

        if (user) {
            throw new ValidationError({
                data: {
                    login: `User with email '${data.UserId}' already exists.`,
                },
                type: 'ModelValidation',
            });
        }

        return UserModel.query().insert({
            UserId: data.UserId,
            Confirmed: false,
            Password: data.Password,
        });
    }

    static async ifExistUser(id: string) {
        console.log(id);
        let user = await UserModel.query().findOne({UserId: id});
        console.log(user);
        if (!user) {
            return false;
        }
        return true;
    }

    static async deleteUser(id: string) {
        return UserModel.query()
            .delete()
            .where('UserId', '=', id);
    }

    static async findUser(UserId: string) {
        return UserModel.query().findOne({UserId: UserId});
    }

    static addUser(user: UserType) {
        return UserModel.query()
            .insert({
                UserId: user.UserId,
                Password: user.Password,
                Confirmed: user.Confirmed
            });
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
                createdAt: {type: 'timestamp'},
                updatedAt: {type: 'timestamp'},
                deletedAt: {type: 'timestamp'}
            }
        }
    }

    static get relationMappings() {

        return {
            refresh: {
                relation: BaseModel.HasOneRelation,
                modelClass: Refresh,
                join: {
                    from: "User.UserId",
                    to: "Refresh.UserId"
                }
            },

            confirmation: {
                relation: BaseModel.HasOneRelation,
                modelClass: Confirmation,
                join: {
                    from: "User.UserId",
                    to: "Confirmation.UserId"
                }
            },

            restore: {
                relation: BaseModel.HasOneRelation,
                modelClass: Restore,
                join: {
                    from: "User.UserId",
                    to: "Restore.UserId"
                }
            }
        }
    }
}