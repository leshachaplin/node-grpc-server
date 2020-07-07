const messages = require('./auth/auth_pb');
const services = require('./auth/auth_grpc_pb');
const {User} = require('./server/models/user');

const grpc = require('grpc');

function main() {
    let client = new services.AuthServiceClient('localhost:50051',
        grpc.credentials.createInsecure());
    let request = new messages.SignUpRequest();
    let user = new User('lesha', false, 'chaplin');

    request.setLogin(user.getUserID);
    request.setPassword(user.getUserPassword);

    client.signUp(request, function(err, response) {
        console.log(err, response);
    });
}

main();