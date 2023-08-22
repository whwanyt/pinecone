import * as socket_io_dist_typed_events from 'socket.io/dist/typed-events';
import { ServerOptions, Server } from 'socket.io';

declare class ApplicationContextOptions {
}

declare enum Transport {
    GRPC = "GRPC",
    SOCKET = "SOCKET"
}
interface ServerAdapter {
}

interface ServiceOptions<T> extends ApplicationContextOptions {
    transport: Transport;
    options: T;
}
declare class App {
    private server;
    create<T = ServerOptions>(appModule: any, options: ServiceOptions<T>): Promise<this>;
    initialize<T>(options: ServiceOptions<T>): Promise<Server<socket_io_dist_typed_events.DefaultEventsMap, socket_io_dist_typed_events.DefaultEventsMap, socket_io_dist_typed_events.DefaultEventsMap, any>>;
    listen(port: number): void;
}
declare const AppFactory: App;

declare const Version: string;

declare function Module(metadata: any): ClassDecorator;

export { AppFactory, Module, ServerAdapter, Transport, Version };
