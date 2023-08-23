"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GrpcServer: () => GrpcServer
});
module.exports = __toCommonJS(src_exports);

// src/server.ts
var import_grpc_js = require("@grpc/grpc-js");
var import_proto_loader = __toESM(require("@grpc/proto-loader"));
var GrpcServer = class {
  create() {
    this.server = new import_grpc_js.Server();
    return this;
  }
  addService(protoPath, name, funs) {
    const packageDefinition = import_proto_loader.default.loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });
    const proto = (0, import_grpc_js.loadPackageDefinition)(packageDefinition)[name];
    this.server.addService(proto.Greeter.service, funs);
  }
  listen(host) {
    this.server.bindAsync(host, import_grpc_js.ServerCredentials.createInsecure(), () => {
      this.server.start();
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GrpcServer
});
