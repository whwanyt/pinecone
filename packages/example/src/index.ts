import { AppFactory, Transport } from "@pinecone/core";
import { AppModule } from "./app";


async function main() {
  const app = await AppFactory.create(AppModule, {
    transport: Transport.SOCKET,
    options: {},
  });
  app.listen(3000);
}
main();
