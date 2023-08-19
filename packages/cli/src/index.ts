#!/usr/bin/env node
import Package from "../package.json";
import chalk from "chalk";
import { Command } from "commander";
const program = new Command();

program
  .name("Pinecone_CLI")
  .description(Package.description)
  .version(Package.version);

program
  .command("init")
  .description("init project")
  .action((str, options) => {
    console.log(chalk.green("脚手架搭建成功"));
  });

program.parse();
