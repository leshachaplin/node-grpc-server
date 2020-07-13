import {Claim} from '../Claims';
import mongoose from "mongoose";
import {ClaimObj} from '../../models/claims';

export function getClaims() {
    let claims:ClaimObj[] = [];
     Claim.find({}, function(err, docs){
        mongoose.disconnect();

        if(err) return console.log(err);

        claims = docs;
    });
     return claims;
}

export function ifExistClaims(login:string) {
    return Claim.findOne({login: login}, function (err, docs) {
        mongoose.disconnect();

        if (err) return console.log(err);

        console.log(docs);
    });
}

export async function addClaims(claims:ClaimObj[]):Promise<void> {
    claims.forEach((claim) => {

        Claim.create(claim, function(err, doc) {
            mongoose.disconnect();

            if(err) return console.log(err);

            console.log("save object claims", doc);
        });

    })
}

export function deleteAllClaims() {
    return  Claim.remove(function(err, result){
        mongoose.disconnect();

        if(err) return console.log(err);

        console.log(result);
    });
}

export async function deleteClaims(claims:ClaimObj[]):Promise<void> {
    claims.forEach((claim) => {

        Claim.findOneAndDelete(claim, function (err, doc) {
            mongoose.disconnect();

            if(err) return console.log(err);

            console.log(doc);
        })

    })
}

// let claims:ClaimObj[] =[
//     {
//         login: 'lesha',
//         description: 'chaplin2',
//         value: 'first2'
//     },
// ]
//
// async function  test(claims: ClaimObj[]) {
//     await deleteClaims(claims);
// }
//
// test(claims);