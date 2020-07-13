var messages = require('../lib/proto/auth_pb');
var services = require('./auth/auth_grpc_pb');
var User = require('./server/models/user.ts').User;
var grpc = require('grpc');
function main() {
    var client = new services.AuthServiceClient('localhost:50051', grpc.credentials.createInsecure());
    var request = new messages.SignUpRequest();
    var user = new User('lesha', false, 'chaplin');
    request.setLogin(user.getUserID);
    request.setPassword(user.getUserPassword);
    client.signUp(request, function (err, response) {
        console.log(err, response);
    });
}
main();
