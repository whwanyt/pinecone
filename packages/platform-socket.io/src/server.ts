import { createServer } from "http";
import { Server, ServerOptions as SocketServerOptions } from "socket.io";

export class SocketServer {
  
  private server: Server | undefined;

  create(options: SocketServerOptions) {
    const httpServer = createServer();
    this.server = new Server(httpServer, options as SocketServerOptions);
    return this;
  }

  listen(port: number) {
    this.server!.listen(port);
  }
}
