import { createServer } from "http";
import { ApplicationContextOptions } from "./ApplicationContextOptions";
import { Transport } from "./modal";
import { Server, ServerOptions as SocketServerOptions } from "socket.io";
import { Log } from "@pinecone/logger";

interface ServiceOptions<T> extends ApplicationContextOptions {
  transport: Transport;
  options: T;
}

class App {
  private server: Server | undefined;

  async create<T = SocketServerOptions>(
    appModule: any,
    options: ServiceOptions<T>
  ) {
    const server = await this.initialize<T>(options);
    this.server = server;
    return this;
  }
  async initialize<T>(options: ServiceOptions<T>) {
    switch (options.transport) {
      case Transport.GRPC:
        break;
      default:
        const httpServer = createServer();
        return new Server(httpServer, options.options as SocketServerOptions);
    }
    const httpServer = createServer();
    return new Server(httpServer, options.options as SocketServerOptions);
  }

  listen(port: number) {
    this.server!.listen(port);
    Log.Info(`Server prot ${port}`, "AppServer");
  }
}

export const AppFactory = new App();
