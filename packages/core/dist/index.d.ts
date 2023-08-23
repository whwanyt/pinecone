import { SocketServer } from '@pinecone/platform-socket.io';
import { GrpcServer } from '@pinecone/platform-grpc';

declare class ApplicationContextOptions {
}

declare enum Transport {
    GRPC = "GRPC",
    SOCKET = "SOCKET"
}
interface ServerAdapter {
}

interface ServiceOptions extends ApplicationContextOptions {
    transport: Transport;
    options: any;
}
declare class App {
    private server;
    private options;
    create(appModule: any, options: ServiceOptions): Promise<this>;
    initialize(options: ServiceOptions): Promise<SocketServer | GrpcServer>;
    listen(port: number): void;
}
declare const AppFactory: App;

declare const Version: string;

declare function Module(metadata: any): ClassDecorator;

export { AppFactory, Module, ServerAdapter, Transport, Version };
