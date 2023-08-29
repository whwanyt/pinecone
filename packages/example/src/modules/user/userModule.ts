import { Module } from "@pinecone/core";
import { UserController } from "./userController";

@Module({ imports: [], controllers: [UserController] })
export class UserModule {}
