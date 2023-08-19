declare class ApplicationContextOptions {
}

interface ServiceOptions extends ApplicationContextOptions {
}
declare class App {
    create(module: any, options: ServiceOptions): void;
}

declare const _default: {
    App: typeof App;
    Version: string;
};

export { _default as default };
