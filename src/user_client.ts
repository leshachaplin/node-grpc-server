const messages = require('../lib/proto/auth_pb');
const services = require('../lib/proto/auth_grpc_pb');
import { User } from './server/models/user';

const grpc = require('grpc');

function main() {
    let client = new services.AuthServiceClient('localhost:50051',
        grpc.credentials.createInsecure());
    let SignUpRequest = new messages.SignUpRequest();
    let signInRequest = new messages.SignInRequest;
    let addClaimsRequest = new messages.AddClaimsRequest();
    let deleteClaimsRequest = new messages.DeleteClaimsRequest();
    let deleteUserRequest = new messages.DeleteRequest();
    let user = new User('lesha', false, 'chaplin');
    let claims = new Map<string,string>();
    claims.set('one', 'two');
    claims.set('three', 'four');
    claims.set('five', 'six');

    let claimsToDelete = new Map<string,string>();
    claimsToDelete.set('one', 'two');
    claimsToDelete.set('five', 'six');

    SignUpRequest.setLogin(user.UserId);
    SignUpRequest.setPassword(user.Password);

    addClaimsRequest.setLogin(user.UserId);
    let mapClaims = addClaimsRequest.getClaimsMap();
    mapClaims.set('one', 'two');
    mapClaims.set('three', 'four');
    mapClaims.set('five', 'six');

    signInRequest.setLogin(user.UserId);
    signInRequest.setPassword(user.Password);

    deleteClaimsRequest.setLogin(user.UserId);
    let deleteMap = deleteClaimsRequest.getClaimsMap();
    deleteMap.set('one', 'two');
    deleteMap.set('five', 'six');


    deleteUserRequest.setLogin(user.UserId);

//    console.log(SignUpRequest);
//    console.log(addClaimsRequest);
    console.log(signInRequest);
    // console.log(deleteClaimsRequest);
    // console.log(deleteUserRequest);

    // client.signUp(SignUpRequest, function(err, response) {
    //     console.log(err, response);
    // });

    // client.signIn(signInRequest, function(err, response) {
    //     console.log(err, response);
    // });
    //
    // client.deleteClaims(deleteClaimsRequest, function(err, response) {
    //     console.log(err, response);
    // });
    //
    client.delete(deleteUserRequest, function(err, response) {
        console.log(err, response);
    });

    // client.addClaims(addClaimsRequest, function(err, response) {
    //     console.log(err, response);
    // });
}

main();