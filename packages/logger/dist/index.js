"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Log: () => Log
});
module.exports = __toCommonJS(src_exports);
var import_chalk = __toESM(require("chalk"));
var import_dayjs = __toESM(require("dayjs"));
function Error2(message, name) {
  let text = "";
  if (name) {
    text = text + " " + import_chalk.default.bold(name);
  }
  if (message) {
    text = text + " " + import_chalk.default.red(message);
  }
  console.log(
    import_chalk.default.bgGreen(" " + (0, import_dayjs.default)().format("YYYY-MM-DDTHH:mm:ss ")) + text
  );
}
function Info(message, name) {
  let text = "";
  if (name) {
    text = text + " " + import_chalk.default.bold(name);
  }
  if (message) {
    text = text + " " + import_chalk.default.green(message);
  }
  console.log(
    import_chalk.default.bgGreen(" " + (0, import_dayjs.default)().format("YYYY-MM-DDTHH:mm:ss") + " ") + text
  );
}
var Log = {
  Error: Error2,
  Info
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Log
});
