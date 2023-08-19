import { ApplicationContextOptions } from "./ApplicationContextOptions";

interface ServiceOptions extends ApplicationContextOptions {}

export default class App {
  create(module: any, options: ServiceOptions) {
  }
}
