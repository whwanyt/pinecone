export enum Transport {
  GRPC = "GRPC",
  SOCKET = "SOCKET",
}

export enum ModuleParams {
  imports = "imports",
  controllers = "controllers",
  providers = "providers",
}

export interface ServerAdapter {}

export interface ModuleMetadata {
  imports?: Array<any>;
  controllers?: Array<any>;
  providers?: Array<any>;
}
