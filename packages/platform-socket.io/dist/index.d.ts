import { ServerOptions } from 'socket.io';

declare class SocketServer {
    private server;
    create(options: ServerOptions): this;
    listen(port: number): void;
}

export { SocketServer };
