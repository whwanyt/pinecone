import {
  Server,
  ServerCredentials,
  loadPackageDefinition,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

export class GrpcServer {

  private server: Server | undefined;
  
  create() {
    this.server = new Server();
    return this;
  }

  addService(
    protoPath: string,
    name: string,
    funs: UntypedServiceImplementation
  ) {
    const packageDefinition = protoLoader.loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    const proto = loadPackageDefinition(packageDefinition)[name];
    // @ts-ignore
    this.server!.addService(proto.Greeter.service, funs);
  }

  listen(host: string) {
    this.server!.bindAsync(host, ServerCredentials.createInsecure(), () => {
      this.server!.start();
    });
  }
}
