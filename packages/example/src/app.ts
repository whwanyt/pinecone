import { Module } from "@pinecone/core";
import { DataBase } from "./dataBase";
import { UserModule } from "./modules/user/userModule";
import { EmailModule } from "./modules/email/emailModule";

@Module({ imports: [DataBase, EmailModule, UserModule] })
export class AppModule {}
