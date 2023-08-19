"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// package.json
var package_default = {
  name: "@pinecone/core",
  version: "0.0.1",
  description: "",
  main: "src/index.ts",
  scripts: {
    start: "npm run build --watch",
    build: "tsup src/index.ts",
    test: 'echo "Error: no test specified" && exit 1'
  },
  keywords: [],
  author: "",
  license: "ISC"
};

// src/app.ts
var App = class {
  create(module2, options) {
  }
};

// src/index.ts
var src_default = {
  App,
  Version: package_default.version
};
