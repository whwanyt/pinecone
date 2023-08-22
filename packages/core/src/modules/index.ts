export function Module(metadata: any): ClassDecorator {
  const propsKeys = Object.keys(metadata);
  return (target: Function) => {
    for (const property in metadata) {
      if (metadata.hasOwnProperty(property)) {
        Reflect.defineMetadata(property, (metadata as any)[property], target);
      }
    }
  };
}
