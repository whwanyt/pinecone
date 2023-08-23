import { UntypedServiceImplementation } from '@grpc/grpc-js';

declare class GrpcServer {
    private server;
    create(): this;
    addService(protoPath: string, name: string, funs: UntypedServiceImplementation): void;
    listen(host: string): void;
}

export { GrpcServer };
