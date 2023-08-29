import { Injectable } from "@pinecone/core";

@Injectable
export class UserServer {
  find() {
    console.log("userServer find");
  }
}
