declare function Error(message: any): void;
declare function Error(message: any, name: string): void;
declare function Info(message: any): void;
declare function Info(message: any, name: string): void;
declare const Log: {
    Error: typeof Error;
    Info: typeof Info;
};

export { Log };
