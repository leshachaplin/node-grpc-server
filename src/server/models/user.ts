import {resolveSrv} from "dns";
import has = Reflect.has;

const bcrypt = require('bcrypt');

interface UserType {
    readonly UserId:string;
    Confirmed:boolean;
    readonly Password:string;
//    hashPassword(password:string):Promise<any>;
//      verifyPassword(password:string, hash:string):Promise<any>;
}

export class User implements UserType{
    readonly UserId : string;
    Confirmed : boolean;
    readonly Password : string;

    constructor(userId:string, confirmed:boolean, password:string) {
        this.UserId = userId;
        this.Confirmed = confirmed;
        this.Password = password;
    }

    set userConfirmationInfo(confirm:boolean) {
        this.Confirmed = confirm;
    }

//     async hashPassword (password:string):Promise<any> {
//         const salt = await bcrypt.genSalt(10);
//         const hash = await  bcrypt.hash(password, salt);
//         return hash;
//
//
// //        return new Promise((resolve, reject) => {
// //             return  bcrypt.genSalt(10, function(err, salt) {
// //                 if (err) {
// //                     reject(err);
// //                 }
// //
// //                 bcrypt.hash(password, salt, function(err, hash) {
// //                     if (err) {
// //                         reject(err);
// //                     }
// //                     return resolve(hash);
// //                 });
// //             });
// //         });
//     }
//
//     async verifyPassword(password:string, hash:string):Promise<any> {
//
//         // return new Promise((resolve, reject) => {
//         //     bcrypt.compare(password, hash, function (err, result) {
//         //         if (err) {
//         //             reject(err);
//         //         }
//         //
//         //         return resolve(result);
//         //     });
//         // })
//
//         return await bcrypt.compare(password, hash);
//    }
}
export default UserType ;