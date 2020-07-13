//const userDB = require('../server/db/queries/user.ts');
import {User} from '../server/models/user';
import UserModel from '../server/db/models/user';
import Refresh from '../server/db/models/refresh';
import RefreshObj from '../server/models/refresh';
import * as Auth from '../server/db/entities/auth';
import * as claimsQueries from '../server/mongoDB/queries/claims';
import * as tokens from '../jwtToken/token';
import {ClaimObj} from "../server/models/claims";

//const claimsQueries = require('../server/mongoDB/queries/claims');
//const jwt = require('../jwtToken/token');

const signInResponse = {
    token: 'string',
    refreshToken: 'string'
}

export type SignInResp = typeof signInResponse;

export async function SignUp(login, password) {
    if (login === '' || password === '') {
        throw new Error('invalid password or login');
    }

    if (await UserModel.ifExistUser(login)) {
        throw new Error('enter other login');
    }

    let user = new User(login, false, password);

    return await Auth.register({UserId: user.UserId, Password: user.Password});
}

export async function SignIn(login, password): Promise<SignInResp> {
    const user = await UserModel.findUser(login);

    if (!user) {
        throw new Error("user not found");
    }

    if (!(await user.verifyPassword(password))) {
        throw new Error("invalid password")
    }

    const claims = claimsQueries.getClaims();

    const token = tokens.CreatTokenAuth(login, claims);

    const refreshToken = tokens.CreatTokenRefresh(user.UserId);

    await Refresh.addRefreshToken(refreshToken);


    return {
        token: token,
        refreshToken: refreshToken.Token
    };
}

export function AddClaims(claims: Map<string, string>, login: string): Promise<void> {
    let claimsReq: ClaimObj[] = [];
    claims.forEach((key, value) => {
        let claim: ClaimObj = {
            login: login,
            description: key,
            value: value
        }
        claimsReq.push(claim);
    })
    return claimsQueries.addClaims(claimsReq);
}

export function DeleteClaims(claims: Map<string, string>, login: string): Promise<void> {
    let claimsReq: ClaimObj[] = [];
    claims.forEach((key, value) => {
        let claim: ClaimObj = {
            login: login,
            description: key,
            value: value
        }
        claimsReq.push(claim);
    })
    return claimsQueries.deleteClaims(claimsReq);
}

export async function DeleteUser(login: string): Promise<any> {
    return UserModel.deleteUser(login);
}