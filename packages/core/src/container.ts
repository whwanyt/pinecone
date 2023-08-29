import { ModuleParams } from "./modal";

interface ModuleTree {
  item: ClassDecorator;
  controllers: ClassDecorator[];
  providers: ClassDecorator[];
  children: ModuleTree[];
}

export class AppContainer {
  initialization(moduleCls: any) {
    const appImports: ClassDecorator[] = Reflect.getMetadata(
      ModuleParams.imports,
      moduleCls
    );
    const appControllers: ClassDecorator[] = Reflect.getMetadata(
      ModuleParams.controllers,
      moduleCls
    );
    const appProviders: ClassDecorator[] = Reflect.getMetadata(
      ModuleParams.providers,
      moduleCls
    );
    const moduleTree: ModuleTree = {
      item: moduleCls,
      controllers: appControllers,
      providers: appProviders,
      children: this.forModule(appImports),
    };
    console.log("initialization");
    console.log(moduleTree);
    console.log("initialization");
  }

  forModule(moduleCls: ClassDecorator[]) {
    let importsList: ModuleTree[] = [];
    if (moduleCls === undefined) return importsList;
    for (const iterator of moduleCls) {
      const itemImports: ClassDecorator[] = Reflect.getMetadata(
        ModuleParams.imports,
        iterator
      );
      const itemControllers: ClassDecorator[] = Reflect.getMetadata(
        ModuleParams.controllers,
        iterator
      );
      const itemProviders: ClassDecorator[] = Reflect.getMetadata(
        ModuleParams.providers,
        iterator
      );
      importsList.push({
        item: iterator,
        children: this.forModule(itemImports),
        controllers: itemControllers || [],
        providers: itemProviders || [],
      });
    }
    return importsList;
  }
}
