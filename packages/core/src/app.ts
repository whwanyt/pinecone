import { createServer } from "http";
import { ApplicationContextOptions } from "./ApplicationContextOptions";
import { Transport } from "./modal";
import { Log } from "@pinecone/logger";
import { SocketServer } from "@pinecone/platform-socket.io";
import { GrpcServer } from "@pinecone/platform-grpc";

interface ServiceOptions extends ApplicationContextOptions {
  transport: Transport;
  options: any;
}

class App {
  private server: SocketServer | GrpcServer | undefined;

  private options: ServiceOptions | undefined;

  async create(appModule: any, options: ServiceOptions) {
    this.options = options;
    const server = await this.initialize(options);
    this.server = server;
    return this;
  }
  async initialize(options: ServiceOptions) {
    switch (options.transport) {
      case Transport.GRPC:
        return new GrpcServer().create();
      default:
        return new SocketServer().create(options.options);
    }
  }

  listen(port: number) {
    switch (this.options!.transport) {
      case Transport.GRPC:
        (this.server! as GrpcServer).listen("0.0.0.0:" + port);
        Log.Info(`GrpcServer prot ${port}`, "AppServer");
        break;
      case Transport.SOCKET:
        (this.server! as SocketServer).listen(port);
        Log.Info(`SocketServer prot http://127.0.0.1:${port}`, "AppServer");
        break;
      default:
        Log.Error(`暂不支持该服务类型`, "AppServer");
        break;
    }
  }
}

export const AppFactory = new App();
