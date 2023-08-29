import { SocketServer } from '@pinecone/platform-socket.io';
import { GrpcServer } from '@pinecone/platform-grpc';

declare abstract class ApplicationContextOptions {
}

declare enum Transport {
    GRPC = "GRPC",
    SOCKET = "SOCKET"
}
declare enum ModuleParams {
    imports = "imports",
    controllers = "controllers",
    providers = "providers"
}
interface ServerAdapter {
}
interface ModuleMetadata {
    imports?: Array<any>;
    controllers?: Array<any>;
    providers?: Array<any>;
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

declare function Inject(target: any, propertyKey: string): void;

declare function Injectable(target: any): void;

declare function Module(metadata: ModuleMetadata): ClassDecorator;

export { AppFactory, Inject, Injectable, Module, ModuleMetadata, ModuleParams, ServerAdapter, Transport, Version };
