import  '../../env';
import * as jwt from 'jsonwebtoken';
import {ClaimObj} from '../server/models/claims';
import RefreshModel from '../server/models/refresh';

export function CreatTokenAuth(login:string, claims:ClaimObj[]):string {

    let jwtClaims = {};
    let map = new Map<string,string>();

    for (const i in claims) {
        let key = claims[i].description;
        let value = claims[i].value;
        map.set(key, value);
        map.forEach((value, key) => {
            jwtClaims[key] = value
        });
    }

    return  jwt.sign({
        login: login,
        ...jwtClaims
    }, process.env.SECRET_KEY, { expiresIn: 60 * 30 });
}

export function getTokenAuth(token) {
    return jwt.decode(token, {complete: true});
}

export function CreatTokenRefresh(uuid:string):RefreshModel {
    let token = jwt.sign({
        login: uuid,
    }, process.env.SECRET_KEY_REFRESH, { expiresIn: 60 * 60 * 24 });

    let data = getTokenRefresh(token);


    let result:RefreshModel = {
        UserId: uuid,
        Expiration: new Date(data['payload']['exp']),
        Token: token
    }

    return  result;
}

export function getTokenRefresh(refreshToken) {
    return jwt.decode(refreshToken, {complete: true});
}

let claims:ClaimObj[] =[
    {
        login: 'lesha',
        description: 'chaplin',
        value: 'first'
    },
    {
        login: 'lesha',
        description: 'chaplin2',
        value: 'first2'
    },
]

// function test(login:string, claims: ClaimObj[]) {
//     let token = CreatTokenAuth(login, claims);
//     let data = getTokenAuth(token);
//     console.log(data["payload"]["exp"]);
// }
//
// test('lesha', claims);