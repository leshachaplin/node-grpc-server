import {error} from "../../services/logger";

const service = require('../service/user.ts');
const messages = require('../../lib/proto/auth_pb');

function signUpRequest(call, callback) {
    service.SignUp(call.request.getLogin(), call.request.getPassword()).then(() => {
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    }).catch(error => {
        console.log(error);
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    })
}

//TODO:implement me
function signInRequest(call, callback) {
    service.SignIn(call.request.getLogin(), call.request.getPassword()).then((result) => {
        let reply = new messages.SignInResponse();
        reply.setToken(result.token);
        reply.setRefreshtoken(result.refreshToken);
        console.log(reply);
        callback(null, reply)
    }).catch((error, result) => {
        console.log(error);
        let reply = new messages.SignInResponse();
        reply.setToken(result.token);
        reply.setRefreshtoken(result.refreshToken);
        console.log(reply);
        callback(null, reply)
    })
}

function addClaims(call, callback) {
    service.AddClaims(call.request.getClaimsMap(), call.request.getLogin()).then(() => {
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    }).catch(error => {
        console.log(error);
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    })
}

//TODO:implement me
function deleteClaims(call, callback) {
    service.DeleteClaims(call.request.getClaimsMap(), call.request.getLogin()).then(() => {
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    }).catch(error => {
        console.log(error);
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    })
}

//TODO:implement me
function del(call, callback) {
    service.DeleteUser(call.request.getLogin()).then(() => {
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    }).catch(error => {
        console.log(error);
        let reply = new messages.EmptyResponse();
        callback(null, reply);
    })
}

//TODO:implement me
function refreshToken(call, callback) {}

//TODO:implement me
function confirm(call, callback) {}

//TODO:implement me
function restore(call, callback) {}

//TODO:implement me
function forgotPassword(call, callback) {}

module.exports = {
    signUpRequest,
    signInRequest,
    deleteClaims,
    del,
    addClaims,
    refreshToken,
    confirm,
    restore,
    forgotPassword
}