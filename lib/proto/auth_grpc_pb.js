// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');

function serialize_protocol_AddClaimsRequest(arg) {
  if (!(arg instanceof auth_pb.AddClaimsRequest)) {
    throw new Error('Expected argument of type protocol.AddClaimsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_AddClaimsRequest(buffer_arg) {
  return auth_pb.AddClaimsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ConfirmRequest(arg) {
  if (!(arg instanceof auth_pb.ConfirmRequest)) {
    throw new Error('Expected argument of type protocol.ConfirmRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_ConfirmRequest(buffer_arg) {
  return auth_pb.ConfirmRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DeleteClaimsRequest(arg) {
  if (!(arg instanceof auth_pb.DeleteClaimsRequest)) {
    throw new Error('Expected argument of type protocol.DeleteClaimsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_DeleteClaimsRequest(buffer_arg) {
  return auth_pb.DeleteClaimsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_DeleteRequest(arg) {
  if (!(arg instanceof auth_pb.DeleteRequest)) {
    throw new Error('Expected argument of type protocol.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_DeleteRequest(buffer_arg) {
  return auth_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_EmptyResponse(arg) {
  if (!(arg instanceof auth_pb.EmptyResponse)) {
    throw new Error('Expected argument of type protocol.EmptyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_EmptyResponse(buffer_arg) {
  return auth_pb.EmptyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_ForgotPasswordRequest(arg) {
  if (!(arg instanceof auth_pb.ForgotPasswordRequest)) {
    throw new Error('Expected argument of type protocol.ForgotPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_ForgotPasswordRequest(buffer_arg) {
  return auth_pb.ForgotPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_RefreshTokenRequest(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenRequest)) {
    throw new Error('Expected argument of type protocol.RefreshTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_RefreshTokenRequest(buffer_arg) {
  return auth_pb.RefreshTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_RefreshTokenResponse(arg) {
  if (!(arg instanceof auth_pb.RefreshTokenResponse)) {
    throw new Error('Expected argument of type protocol.RefreshTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_RefreshTokenResponse(buffer_arg) {
  return auth_pb.RefreshTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_RestoreRequest(arg) {
  if (!(arg instanceof auth_pb.RestoreRequest)) {
    throw new Error('Expected argument of type protocol.RestoreRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_RestoreRequest(buffer_arg) {
  return auth_pb.RestoreRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_SignInRequest(arg) {
  if (!(arg instanceof auth_pb.SignInRequest)) {
    throw new Error('Expected argument of type protocol.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_SignInRequest(buffer_arg) {
  return auth_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_SignInResponse(arg) {
  if (!(arg instanceof auth_pb.SignInResponse)) {
    throw new Error('Expected argument of type protocol.SignInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_SignInResponse(buffer_arg) {
  return auth_pb.SignInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_SignUpRequest(arg) {
  if (!(arg instanceof auth_pb.SignUpRequest)) {
    throw new Error('Expected argument of type protocol.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_SignUpRequest(buffer_arg) {
  return auth_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  signIn: {
    path: '/protocol.AuthService/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignInRequest,
    responseType: auth_pb.SignInResponse,
    requestSerialize: serialize_protocol_SignInRequest,
    requestDeserialize: deserialize_protocol_SignInRequest,
    responseSerialize: serialize_protocol_SignInResponse,
    responseDeserialize: deserialize_protocol_SignInResponse,
  },
  signUp: {
    path: '/protocol.AuthService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.SignUpRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_SignUpRequest,
    requestDeserialize: deserialize_protocol_SignUpRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
  deleteClaims: {
    path: '/protocol.AuthService/DeleteClaims',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DeleteClaimsRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_DeleteClaimsRequest,
    requestDeserialize: deserialize_protocol_DeleteClaimsRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
  delete: {
    path: '/protocol.AuthService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.DeleteRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_DeleteRequest,
    requestDeserialize: deserialize_protocol_DeleteRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
  addClaims: {
    path: '/protocol.AuthService/AddClaims',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AddClaimsRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_AddClaimsRequest,
    requestDeserialize: deserialize_protocol_AddClaimsRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
  refreshToken: {
    path: '/protocol.AuthService/RefreshToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefreshTokenRequest,
    responseType: auth_pb.RefreshTokenResponse,
    requestSerialize: serialize_protocol_RefreshTokenRequest,
    requestDeserialize: deserialize_protocol_RefreshTokenRequest,
    responseSerialize: serialize_protocol_RefreshTokenResponse,
    responseDeserialize: deserialize_protocol_RefreshTokenResponse,
  },
  confirm: {
    path: '/protocol.AuthService/Confirm',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ConfirmRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_ConfirmRequest,
    requestDeserialize: deserialize_protocol_ConfirmRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
  restore: {
    path: '/protocol.AuthService/Restore',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RestoreRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_RestoreRequest,
    requestDeserialize: deserialize_protocol_RestoreRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
  forgotPassword: {
    path: '/protocol.AuthService/ForgotPassword',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ForgotPasswordRequest,
    responseType: auth_pb.EmptyResponse,
    requestSerialize: serialize_protocol_ForgotPasswordRequest,
    requestDeserialize: deserialize_protocol_ForgotPasswordRequest,
    responseSerialize: serialize_protocol_EmptyResponse,
    responseDeserialize: deserialize_protocol_EmptyResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
