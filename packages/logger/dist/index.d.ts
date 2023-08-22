declare function Error(message: string): void;
declare function Error(message: string, name: string): void;
declare function Info(message: string): void;
declare function Info(message: string, name: string): void;
declare const Log: {
    Error: typeof Error;
    Info: typeof Info;
};

export { Log };
