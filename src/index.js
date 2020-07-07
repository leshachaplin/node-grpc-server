const services = require('./auth/auth_grpc_pb');
//const messages = require('./auth/auth_pb');
const Server = require('./server/index')

let grpc = require('grpc');

function main() {
    let server = new grpc.Server();
    server.addService(services.AuthServiceService, {
        signUp: Server.signUpRequest,
        signIn: Server.signInRequest,
        deleteClaims: Server.deleteClaims,
        delete: Server.del,
        addClaims: Server.addClaims,
        refreshToken: Server.refreshToken,
        confirm: Server.confirm,
        restore: Server.restore,
        forgotPassword: Server.forgotPassword
    });
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('server start on port 0.0.0.0:50051');
}

main();