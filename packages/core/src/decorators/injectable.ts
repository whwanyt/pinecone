import { beanMapper } from "./control";

export function Injectable(target: any) {
  beanMapper.set(target.name, { factory: new target() });
}
