import chalk from "chalk";
import dayjs from "dayjs";
function Error(message: any): void;
function Error(message: any, name: string): void;
function Error(message: any, name?: string) {
  let text = "";
  if (name) {
    text = text + " " + chalk.red(name);
  }
  if (message) {
    text = text + " " + message;
  }
  console.log(
    chalk.bgGreen(" " + dayjs().format("YYYY-MM-DDTHH:mm:ss" + " ")) + text
  );
}

function Info(message: any): void;
function Info(message: any, name: string): void;
function Info(message: any, name?: string) {
  let text = "";
  if (name) {
    text = text + " " + chalk.green(name);
  }
  if (message) {
    text = text + " " + message;
  }
  console.log(
    chalk.green(" " + dayjs().format("YYYY-MM-DDTHH:mm:ss") + " ") + text
  );
}

export const Log = {
  Error,
  Info,
};
