import { Inject } from "@pinecone/core";
import { UserServer } from "./userServer";

export class UserController {
  @Inject
  userServer: UserServer;

  findUser() {
    this.userServer.find();
  }
}
