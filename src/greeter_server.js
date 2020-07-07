const messages = require('./hello/helloworld_pb');
const services = require('./hello/helloworld_grpc_pb');

const grpc = require('grpc');

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
    let reply = new messages.HelloReply();
    reply.setMessage('Hello ' + call.request.getName());
    callback(null, reply);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
    let server = new grpc.Server();
    server.addService(services.GreeterService, {sayHello: sayHello});
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();