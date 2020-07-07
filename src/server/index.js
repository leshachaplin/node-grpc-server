const service = require('../../src/service/user');
const {messages} = require('../../src/auth/auth_pb');

let grpc = require('grpc');

function signUpRequest(call, callback) {
    let reply = new messages.SignUpRequest();
    reply.EmptyResponse(call.request.SignUp());
    callback(null, reply);
}

//TODO:implement me
function signInRequest(call, callback) {}

//TODO:implement me
function deleteClaims(call, callback) {}

//TODO:implement me
function del(call, callback) {}

//TODO:implement me
function addClaims(call, callback) {}

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