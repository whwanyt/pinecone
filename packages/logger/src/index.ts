import chalk from "chalk";
import dayjs from "dayjs";
function Error(message: string): void;
function Error(message: string, name: string): void;
function Error(message: string, name?: string) {
  let text = "";
  if (name) {
    text = text + " " + chalk.bold(name);
  }
  if (message) {
    text = text + " " + chalk.red(message);
  }
  console.log(
    chalk.bgGreen(" " + dayjs().format("YYYY-MM-DDTHH:mm:ss" + " ")) + text
  );
}

function Info(message: string): void;
function Info(message: string, name: string): void;
function Info(message: string, name?: string) {
  let text = "";
  if (name) {
    text = text + " " + chalk.bold(name);
  }
  if (message) {
    text = text + " " + chalk.green(message);
  }
  console.log(
    chalk.bgGreen(" " + dayjs().format("YYYY-MM-DDTHH:mm:ss") + " ") + text
  );
}

export const Log = {
  Error,
  Info,
};
