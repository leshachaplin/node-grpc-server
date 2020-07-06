const service = require('../../src/service/user');
const {messages} = require('../../src/auth/auth_pb');

let grpc = require('grpc');

function SignUpRequest(call, callback) {
    let reply = new messages.SignUpRequest();
    reply.EmptyResponse(call.request.SignUp());
    callback(null, reply);
}

module.exports = {
    SignUpRequest
}