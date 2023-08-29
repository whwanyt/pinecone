import { beanMapper, resourceObjects } from "./control";

export function Inject(target: any, propertyKey: string): void {
  const type = Reflect.getMetadata("design:type", target, propertyKey);
  Object.defineProperty(target, propertyKey, {
    get: () => {
      const targetObject = beanMapper.get(type.name);
      if (targetObject === undefined) {
        const resourceKey = [
          target.constructor.name,
          propertyKey,
          type.name,
        ].toString();
        if (!resourceObjects.has(resourceKey)) {
          resourceObjects.set(resourceKey, new type());
        }
        return resourceObjects.get(resourceKey);
      }
      return targetObject["factory"];
    },
  });
}
