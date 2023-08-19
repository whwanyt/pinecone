#!/usr/bin/env node
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/error.js
  var require_error = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/error.js"(exports) {
      "use strict";
      var CommanderError2 = class extends Error {
        /**
         * Constructs the CommanderError class
         * @param {number} exitCode suggested exit code which could be used with process.exit
         * @param {string} code an id string representing the error
         * @param {string} message human-readable description of the error
         * @constructor
         */
        constructor(exitCode, code, message) {
          super(message);
          Error.captureStackTrace(this, this.constructor);
          this.name = this.constructor.name;
          this.code = code;
          this.exitCode = exitCode;
          this.nestedError = void 0;
        }
      };
      var InvalidArgumentError2 = class extends CommanderError2 {
        /**
         * Constructs the InvalidArgumentError class
         * @param {string} [message] explanation of why argument is invalid
         * @constructor
         */
        constructor(message) {
          super(1, "commander.invalidArgument", message);
          Error.captureStackTrace(this, this.constructor);
          this.name = this.constructor.name;
        }
      };
      exports.CommanderError = CommanderError2;
      exports.InvalidArgumentError = InvalidArgumentError2;
    }
  });

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/argument.js
  var require_argument = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/argument.js"(exports) {
      "use strict";
      var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
      var Argument2 = class {
        /**
         * Initialize a new command argument with the given name and description.
         * The default is that the argument is required, and you can explicitly
         * indicate this with <> around the name. Put [] around the name for an optional argument.
         *
         * @param {string} name
         * @param {string} [description]
         */
        constructor(name, description) {
          this.description = description || "";
          this.variadic = false;
          this.parseArg = void 0;
          this.defaultValue = void 0;
          this.defaultValueDescription = void 0;
          this.argChoices = void 0;
          switch (name[0]) {
            case "<":
              this.required = true;
              this._name = name.slice(1, -1);
              break;
            case "[":
              this.required = false;
              this._name = name.slice(1, -1);
              break;
            default:
              this.required = true;
              this._name = name;
              break;
          }
          if (this._name.length > 3 && this._name.slice(-3) === "...") {
            this.variadic = true;
            this._name = this._name.slice(0, -3);
          }
        }
        /**
         * Return argument name.
         *
         * @return {string}
         */
        name() {
          return this._name;
        }
        /**
         * @api private
         */
        _concatValue(value, previous) {
          if (previous === this.defaultValue || !Array.isArray(previous)) {
            return [value];
          }
          return previous.concat(value);
        }
        /**
         * Set the default value, and optionally supply the description to be displayed in the help.
         *
         * @param {any} value
         * @param {string} [description]
         * @return {Argument}
         */
        default(value, description) {
          this.defaultValue = value;
          this.defaultValueDescription = description;
          return this;
        }
        /**
         * Set the custom handler for processing CLI command arguments into argument values.
         *
         * @param {Function} [fn]
         * @return {Argument}
         */
        argParser(fn) {
          this.parseArg = fn;
          return this;
        }
        /**
         * Only allow argument value to be one of choices.
         *
         * @param {string[]} values
         * @return {Argument}
         */
        choices(values) {
          this.argChoices = values.slice();
          this.parseArg = (arg, previous) => {
            if (!this.argChoices.includes(arg)) {
              throw new InvalidArgumentError2(`Allowed choices are ${this.argChoices.join(", ")}.`);
            }
            if (this.variadic) {
              return this._concatValue(arg, previous);
            }
            return arg;
          };
          return this;
        }
        /**
         * Make argument required.
         */
        argRequired() {
          this.required = true;
          return this;
        }
        /**
         * Make argument optional.
         */
        argOptional() {
          this.required = false;
          return this;
        }
      };
      function humanReadableArgName(arg) {
        const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
        return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
      }
      exports.Argument = Argument2;
      exports.humanReadableArgName = humanReadableArgName;
    }
  });

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/help.js
  var require_help = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/help.js"(exports) {
      "use strict";
      var { humanReadableArgName } = require_argument();
      var Help2 = class {
        constructor() {
          this.helpWidth = void 0;
          this.sortSubcommands = false;
          this.sortOptions = false;
          this.showGlobalOptions = false;
        }
        /**
         * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
         *
         * @param {Command} cmd
         * @returns {Command[]}
         */
        visibleCommands(cmd) {
          const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
          if (cmd._hasImplicitHelpCommand()) {
            const [, helpName, helpArgs] = cmd._helpCommandnameAndArgs.match(/([^ ]+) *(.*)/);
            const helpCommand = cmd.createCommand(helpName).helpOption(false);
            helpCommand.description(cmd._helpCommandDescription);
            if (helpArgs)
              helpCommand.arguments(helpArgs);
            visibleCommands.push(helpCommand);
          }
          if (this.sortSubcommands) {
            visibleCommands.sort((a, b) => {
              return a.name().localeCompare(b.name());
            });
          }
          return visibleCommands;
        }
        /**
         * Compare options for sort.
         *
         * @param {Option} a
         * @param {Option} b
         * @returns number
         */
        compareOptions(a, b) {
          const getSortKey = (option) => {
            return option.short ? option.short.replace(/^-/, "") : option.long.replace(/^--/, "");
          };
          return getSortKey(a).localeCompare(getSortKey(b));
        }
        /**
         * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
         *
         * @param {Command} cmd
         * @returns {Option[]}
         */
        visibleOptions(cmd) {
          const visibleOptions = cmd.options.filter((option) => !option.hidden);
          const showShortHelpFlag = cmd._hasHelpOption && cmd._helpShortFlag && !cmd._findOption(cmd._helpShortFlag);
          const showLongHelpFlag = cmd._hasHelpOption && !cmd._findOption(cmd._helpLongFlag);
          if (showShortHelpFlag || showLongHelpFlag) {
            let helpOption;
            if (!showShortHelpFlag) {
              helpOption = cmd.createOption(cmd._helpLongFlag, cmd._helpDescription);
            } else if (!showLongHelpFlag) {
              helpOption = cmd.createOption(cmd._helpShortFlag, cmd._helpDescription);
            } else {
              helpOption = cmd.createOption(cmd._helpFlags, cmd._helpDescription);
            }
            visibleOptions.push(helpOption);
          }
          if (this.sortOptions) {
            visibleOptions.sort(this.compareOptions);
          }
          return visibleOptions;
        }
        /**
         * Get an array of the visible global options. (Not including help.)
         *
         * @param {Command} cmd
         * @returns {Option[]}
         */
        visibleGlobalOptions(cmd) {
          if (!this.showGlobalOptions)
            return [];
          const globalOptions = [];
          for (let parentCmd = cmd.parent; parentCmd; parentCmd = parentCmd.parent) {
            const visibleOptions = parentCmd.options.filter((option) => !option.hidden);
            globalOptions.push(...visibleOptions);
          }
          if (this.sortOptions) {
            globalOptions.sort(this.compareOptions);
          }
          return globalOptions;
        }
        /**
         * Get an array of the arguments if any have a description.
         *
         * @param {Command} cmd
         * @returns {Argument[]}
         */
        visibleArguments(cmd) {
          if (cmd._argsDescription) {
            cmd._args.forEach((argument) => {
              argument.description = argument.description || cmd._argsDescription[argument.name()] || "";
            });
          }
          if (cmd._args.find((argument) => argument.description)) {
            return cmd._args;
          }
          return [];
        }
        /**
         * Get the command term to show in the list of subcommands.
         *
         * @param {Command} cmd
         * @returns {string}
         */
        subcommandTerm(cmd) {
          const args = cmd._args.map((arg) => humanReadableArgName(arg)).join(" ");
          return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + // simplistic check for non-help option
          (args ? " " + args : "");
        }
        /**
         * Get the option term to show in the list of options.
         *
         * @param {Option} option
         * @returns {string}
         */
        optionTerm(option) {
          return option.flags;
        }
        /**
         * Get the argument term to show in the list of arguments.
         *
         * @param {Argument} argument
         * @returns {string}
         */
        argumentTerm(argument) {
          return argument.name();
        }
        /**
         * Get the longest command term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestSubcommandTermLength(cmd, helper) {
          return helper.visibleCommands(cmd).reduce((max, command) => {
            return Math.max(max, helper.subcommandTerm(command).length);
          }, 0);
        }
        /**
         * Get the longest option term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestOptionTermLength(cmd, helper) {
          return helper.visibleOptions(cmd).reduce((max, option) => {
            return Math.max(max, helper.optionTerm(option).length);
          }, 0);
        }
        /**
         * Get the longest global option term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestGlobalOptionTermLength(cmd, helper) {
          return helper.visibleGlobalOptions(cmd).reduce((max, option) => {
            return Math.max(max, helper.optionTerm(option).length);
          }, 0);
        }
        /**
         * Get the longest argument term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        longestArgumentTermLength(cmd, helper) {
          return helper.visibleArguments(cmd).reduce((max, argument) => {
            return Math.max(max, helper.argumentTerm(argument).length);
          }, 0);
        }
        /**
         * Get the command usage to be displayed at the top of the built-in help.
         *
         * @param {Command} cmd
         * @returns {string}
         */
        commandUsage(cmd) {
          let cmdName = cmd._name;
          if (cmd._aliases[0]) {
            cmdName = cmdName + "|" + cmd._aliases[0];
          }
          let parentCmdNames = "";
          for (let parentCmd = cmd.parent; parentCmd; parentCmd = parentCmd.parent) {
            parentCmdNames = parentCmd.name() + " " + parentCmdNames;
          }
          return parentCmdNames + cmdName + " " + cmd.usage();
        }
        /**
         * Get the description for the command.
         *
         * @param {Command} cmd
         * @returns {string}
         */
        commandDescription(cmd) {
          return cmd.description();
        }
        /**
         * Get the subcommand summary to show in the list of subcommands.
         * (Fallback to description for backwards compatibility.)
         *
         * @param {Command} cmd
         * @returns {string}
         */
        subcommandDescription(cmd) {
          return cmd.summary() || cmd.description();
        }
        /**
         * Get the option description to show in the list of options.
         *
         * @param {Option} option
         * @return {string}
         */
        optionDescription(option) {
          const extraInfo = [];
          if (option.argChoices) {
            extraInfo.push(
              // use stringify to match the display of the default value
              `choices: ${option.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
            );
          }
          if (option.defaultValue !== void 0) {
            const showDefault = option.required || option.optional || option.isBoolean() && typeof option.defaultValue === "boolean";
            if (showDefault) {
              extraInfo.push(`default: ${option.defaultValueDescription || JSON.stringify(option.defaultValue)}`);
            }
          }
          if (option.presetArg !== void 0 && option.optional) {
            extraInfo.push(`preset: ${JSON.stringify(option.presetArg)}`);
          }
          if (option.envVar !== void 0) {
            extraInfo.push(`env: ${option.envVar}`);
          }
          if (extraInfo.length > 0) {
            return `${option.description} (${extraInfo.join(", ")})`;
          }
          return option.description;
        }
        /**
         * Get the argument description to show in the list of arguments.
         *
         * @param {Argument} argument
         * @return {string}
         */
        argumentDescription(argument) {
          const extraInfo = [];
          if (argument.argChoices) {
            extraInfo.push(
              // use stringify to match the display of the default value
              `choices: ${argument.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
            );
          }
          if (argument.defaultValue !== void 0) {
            extraInfo.push(`default: ${argument.defaultValueDescription || JSON.stringify(argument.defaultValue)}`);
          }
          if (extraInfo.length > 0) {
            const extraDescripton = `(${extraInfo.join(", ")})`;
            if (argument.description) {
              return `${argument.description} ${extraDescripton}`;
            }
            return extraDescripton;
          }
          return argument.description;
        }
        /**
         * Generate the built-in help text.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {string}
         */
        formatHelp(cmd, helper) {
          const termWidth = helper.padWidth(cmd, helper);
          const helpWidth = helper.helpWidth || 80;
          const itemIndentWidth = 2;
          const itemSeparatorWidth = 2;
          function formatItem(term, description) {
            if (description) {
              const fullText = `${term.padEnd(termWidth + itemSeparatorWidth)}${description}`;
              return helper.wrap(fullText, helpWidth - itemIndentWidth, termWidth + itemSeparatorWidth);
            }
            return term;
          }
          function formatList(textArray) {
            return textArray.join("\n").replace(/^/gm, " ".repeat(itemIndentWidth));
          }
          let output = [`Usage: ${helper.commandUsage(cmd)}`, ""];
          const commandDescription = helper.commandDescription(cmd);
          if (commandDescription.length > 0) {
            output = output.concat([helper.wrap(commandDescription, helpWidth, 0), ""]);
          }
          const argumentList = helper.visibleArguments(cmd).map((argument) => {
            return formatItem(helper.argumentTerm(argument), helper.argumentDescription(argument));
          });
          if (argumentList.length > 0) {
            output = output.concat(["Arguments:", formatList(argumentList), ""]);
          }
          const optionList = helper.visibleOptions(cmd).map((option) => {
            return formatItem(helper.optionTerm(option), helper.optionDescription(option));
          });
          if (optionList.length > 0) {
            output = output.concat(["Options:", formatList(optionList), ""]);
          }
          if (this.showGlobalOptions) {
            const globalOptionList = helper.visibleGlobalOptions(cmd).map((option) => {
              return formatItem(helper.optionTerm(option), helper.optionDescription(option));
            });
            if (globalOptionList.length > 0) {
              output = output.concat(["Global Options:", formatList(globalOptionList), ""]);
            }
          }
          const commandList = helper.visibleCommands(cmd).map((cmd2) => {
            return formatItem(helper.subcommandTerm(cmd2), helper.subcommandDescription(cmd2));
          });
          if (commandList.length > 0) {
            output = output.concat(["Commands:", formatList(commandList), ""]);
          }
          return output.join("\n");
        }
        /**
         * Calculate the pad width from the maximum term length.
         *
         * @param {Command} cmd
         * @param {Help} helper
         * @returns {number}
         */
        padWidth(cmd, helper) {
          return Math.max(
            helper.longestOptionTermLength(cmd, helper),
            helper.longestGlobalOptionTermLength(cmd, helper),
            helper.longestSubcommandTermLength(cmd, helper),
            helper.longestArgumentTermLength(cmd, helper)
          );
        }
        /**
         * Wrap the given string to width characters per line, with lines after the first indented.
         * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
         *
         * @param {string} str
         * @param {number} width
         * @param {number} indent
         * @param {number} [minColumnWidth=40]
         * @return {string}
         *
         */
        wrap(str, width, indent, minColumnWidth = 40) {
          const indents = " \\f\\t\\v\xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF";
          const manualIndent = new RegExp(`[\\n][${indents}]+`);
          if (str.match(manualIndent))
            return str;
          const columnWidth = width - indent;
          if (columnWidth < minColumnWidth)
            return str;
          const leadingStr = str.slice(0, indent);
          const columnText = str.slice(indent).replace("\r\n", "\n");
          const indentString = " ".repeat(indent);
          const zeroWidthSpace = "\u200B";
          const breaks = `\\s${zeroWidthSpace}`;
          const regex = new RegExp(`
|.{1,${columnWidth - 1}}([${breaks}]|$)|[^${breaks}]+?([${breaks}]|$)`, "g");
          const lines = columnText.match(regex) || [];
          return leadingStr + lines.map((line, i) => {
            if (line === "\n")
              return "";
            return (i > 0 ? indentString : "") + line.trimEnd();
          }).join("\n");
        }
      };
      exports.Help = Help2;
    }
  });

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/option.js
  var require_option = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/option.js"(exports) {
      "use strict";
      var { InvalidArgumentError: InvalidArgumentError2 } = require_error();
      var Option2 = class {
        /**
         * Initialize a new `Option` with the given `flags` and `description`.
         *
         * @param {string} flags
         * @param {string} [description]
         */
        constructor(flags, description) {
          this.flags = flags;
          this.description = description || "";
          this.required = flags.includes("<");
          this.optional = flags.includes("[");
          this.variadic = /\w\.\.\.[>\]]$/.test(flags);
          this.mandatory = false;
          const optionFlags = splitOptionFlags(flags);
          this.short = optionFlags.shortFlag;
          this.long = optionFlags.longFlag;
          this.negate = false;
          if (this.long) {
            this.negate = this.long.startsWith("--no-");
          }
          this.defaultValue = void 0;
          this.defaultValueDescription = void 0;
          this.presetArg = void 0;
          this.envVar = void 0;
          this.parseArg = void 0;
          this.hidden = false;
          this.argChoices = void 0;
          this.conflictsWith = [];
          this.implied = void 0;
        }
        /**
         * Set the default value, and optionally supply the description to be displayed in the help.
         *
         * @param {any} value
         * @param {string} [description]
         * @return {Option}
         */
        default(value, description) {
          this.defaultValue = value;
          this.defaultValueDescription = description;
          return this;
        }
        /**
         * Preset to use when option used without option-argument, especially optional but also boolean and negated.
         * The custom processing (parseArg) is called.
         *
         * @example
         * new Option('--color').default('GREYSCALE').preset('RGB');
         * new Option('--donate [amount]').preset('20').argParser(parseFloat);
         *
         * @param {any} arg
         * @return {Option}
         */
        preset(arg) {
          this.presetArg = arg;
          return this;
        }
        /**
         * Add option name(s) that conflict with this option.
         * An error will be displayed if conflicting options are found during parsing.
         *
         * @example
         * new Option('--rgb').conflicts('cmyk');
         * new Option('--js').conflicts(['ts', 'jsx']);
         *
         * @param {string | string[]} names
         * @return {Option}
         */
        conflicts(names) {
          this.conflictsWith = this.conflictsWith.concat(names);
          return this;
        }
        /**
         * Specify implied option values for when this option is set and the implied options are not.
         *
         * The custom processing (parseArg) is not called on the implied values.
         *
         * @example
         * program
         *   .addOption(new Option('--log', 'write logging information to file'))
         *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
         *
         * @param {Object} impliedOptionValues
         * @return {Option}
         */
        implies(impliedOptionValues) {
          let newImplied = impliedOptionValues;
          if (typeof impliedOptionValues === "string") {
            newImplied = { [impliedOptionValues]: true };
          }
          this.implied = Object.assign(this.implied || {}, newImplied);
          return this;
        }
        /**
         * Set environment variable to check for option value.
         *
         * An environment variable is only used if when processed the current option value is
         * undefined, or the source of the current value is 'default' or 'config' or 'env'.
         *
         * @param {string} name
         * @return {Option}
         */
        env(name) {
          this.envVar = name;
          return this;
        }
        /**
         * Set the custom handler for processing CLI option arguments into option values.
         *
         * @param {Function} [fn]
         * @return {Option}
         */
        argParser(fn) {
          this.parseArg = fn;
          return this;
        }
        /**
         * Whether the option is mandatory and must have a value after parsing.
         *
         * @param {boolean} [mandatory=true]
         * @return {Option}
         */
        makeOptionMandatory(mandatory = true) {
          this.mandatory = !!mandatory;
          return this;
        }
        /**
         * Hide option in help.
         *
         * @param {boolean} [hide=true]
         * @return {Option}
         */
        hideHelp(hide = true) {
          this.hidden = !!hide;
          return this;
        }
        /**
         * @api private
         */
        _concatValue(value, previous) {
          if (previous === this.defaultValue || !Array.isArray(previous)) {
            return [value];
          }
          return previous.concat(value);
        }
        /**
         * Only allow option value to be one of choices.
         *
         * @param {string[]} values
         * @return {Option}
         */
        choices(values) {
          this.argChoices = values.slice();
          this.parseArg = (arg, previous) => {
            if (!this.argChoices.includes(arg)) {
              throw new InvalidArgumentError2(`Allowed choices are ${this.argChoices.join(", ")}.`);
            }
            if (this.variadic) {
              return this._concatValue(arg, previous);
            }
            return arg;
          };
          return this;
        }
        /**
         * Return option name.
         *
         * @return {string}
         */
        name() {
          if (this.long) {
            return this.long.replace(/^--/, "");
          }
          return this.short.replace(/^-/, "");
        }
        /**
         * Return option name, in a camelcase format that can be used
         * as a object attribute key.
         *
         * @return {string}
         * @api private
         */
        attributeName() {
          return camelcase(this.name().replace(/^no-/, ""));
        }
        /**
         * Check if `arg` matches the short or long flag.
         *
         * @param {string} arg
         * @return {boolean}
         * @api private
         */
        is(arg) {
          return this.short === arg || this.long === arg;
        }
        /**
         * Return whether a boolean option.
         *
         * Options are one of boolean, negated, required argument, or optional argument.
         *
         * @return {boolean}
         * @api private
         */
        isBoolean() {
          return !this.required && !this.optional && !this.negate;
        }
      };
      var DualOptions = class {
        /**
         * @param {Option[]} options
         */
        constructor(options) {
          this.positiveOptions = /* @__PURE__ */ new Map();
          this.negativeOptions = /* @__PURE__ */ new Map();
          this.dualOptions = /* @__PURE__ */ new Set();
          options.forEach((option) => {
            if (option.negate) {
              this.negativeOptions.set(option.attributeName(), option);
            } else {
              this.positiveOptions.set(option.attributeName(), option);
            }
          });
          this.negativeOptions.forEach((value, key) => {
            if (this.positiveOptions.has(key)) {
              this.dualOptions.add(key);
            }
          });
        }
        /**
         * Did the value come from the option, and not from possible matching dual option?
         *
         * @param {any} value
         * @param {Option} option
         * @returns {boolean}
         */
        valueFromOption(value, option) {
          const optionKey = option.attributeName();
          if (!this.dualOptions.has(optionKey))
            return true;
          const preset = this.negativeOptions.get(optionKey).presetArg;
          const negativeValue = preset !== void 0 ? preset : false;
          return option.negate === (negativeValue === value);
        }
      };
      function camelcase(str) {
        return str.split("-").reduce((str2, word) => {
          return str2 + word[0].toUpperCase() + word.slice(1);
        });
      }
      function splitOptionFlags(flags) {
        let shortFlag;
        let longFlag;
        const flagParts = flags.split(/[ |,]+/);
        if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1]))
          shortFlag = flagParts.shift();
        longFlag = flagParts.shift();
        if (!shortFlag && /^-[^-]$/.test(longFlag)) {
          shortFlag = longFlag;
          longFlag = void 0;
        }
        return { shortFlag, longFlag };
      }
      exports.Option = Option2;
      exports.splitOptionFlags = splitOptionFlags;
      exports.DualOptions = DualOptions;
    }
  });

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/suggestSimilar.js
  var require_suggestSimilar = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/suggestSimilar.js"(exports) {
      "use strict";
      var maxDistance = 3;
      function editDistance(a, b) {
        if (Math.abs(a.length - b.length) > maxDistance)
          return Math.max(a.length, b.length);
        const d = [];
        for (let i = 0; i <= a.length; i++) {
          d[i] = [i];
        }
        for (let j = 0; j <= b.length; j++) {
          d[0][j] = j;
        }
        for (let j = 1; j <= b.length; j++) {
          for (let i = 1; i <= a.length; i++) {
            let cost = 1;
            if (a[i - 1] === b[j - 1]) {
              cost = 0;
            } else {
              cost = 1;
            }
            d[i][j] = Math.min(
              d[i - 1][j] + 1,
              // deletion
              d[i][j - 1] + 1,
              // insertion
              d[i - 1][j - 1] + cost
              // substitution
            );
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
              d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
            }
          }
        }
        return d[a.length][b.length];
      }
      function suggestSimilar(word, candidates) {
        if (!candidates || candidates.length === 0)
          return "";
        candidates = Array.from(new Set(candidates));
        const searchingOptions = word.startsWith("--");
        if (searchingOptions) {
          word = word.slice(2);
          candidates = candidates.map((candidate) => candidate.slice(2));
        }
        let similar = [];
        let bestDistance = maxDistance;
        const minSimilarity = 0.4;
        candidates.forEach((candidate) => {
          if (candidate.length <= 1)
            return;
          const distance = editDistance(word, candidate);
          const length = Math.max(word.length, candidate.length);
          const similarity = (length - distance) / length;
          if (similarity > minSimilarity) {
            if (distance < bestDistance) {
              bestDistance = distance;
              similar = [candidate];
            } else if (distance === bestDistance) {
              similar.push(candidate);
            }
          }
        });
        similar.sort((a, b) => a.localeCompare(b));
        if (searchingOptions) {
          similar = similar.map((candidate) => `--${candidate}`);
        }
        if (similar.length > 1) {
          return `
(Did you mean one of ${similar.join(", ")}?)`;
        }
        if (similar.length === 1) {
          return `
(Did you mean ${similar[0]}?)`;
        }
        return "";
      }
      exports.suggestSimilar = suggestSimilar;
    }
  });

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/command.js
  var require_command = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/lib/command.js"(exports) {
      "use strict";
      var EventEmitter = __require("events").EventEmitter;
      var childProcess = __require("child_process");
      var path = __require("path");
      var fs = __require("fs");
      var process2 = __require("process");
      var { Argument: Argument2, humanReadableArgName } = require_argument();
      var { CommanderError: CommanderError2 } = require_error();
      var { Help: Help2 } = require_help();
      var { Option: Option2, splitOptionFlags, DualOptions } = require_option();
      var { suggestSimilar } = require_suggestSimilar();
      var Command2 = class _Command extends EventEmitter {
        /**
         * Initialize a new `Command`.
         *
         * @param {string} [name]
         */
        constructor(name) {
          super();
          this.commands = [];
          this.options = [];
          this.parent = null;
          this._allowUnknownOption = false;
          this._allowExcessArguments = true;
          this._args = [];
          this.args = [];
          this.rawArgs = [];
          this.processedArgs = [];
          this._scriptPath = null;
          this._name = name || "";
          this._optionValues = {};
          this._optionValueSources = {};
          this._storeOptionsAsProperties = false;
          this._actionHandler = null;
          this._executableHandler = false;
          this._executableFile = null;
          this._executableDir = null;
          this._defaultCommandName = null;
          this._exitCallback = null;
          this._aliases = [];
          this._combineFlagAndOptionalValue = true;
          this._description = "";
          this._summary = "";
          this._argsDescription = void 0;
          this._enablePositionalOptions = false;
          this._passThroughOptions = false;
          this._lifeCycleHooks = {};
          this._showHelpAfterError = false;
          this._showSuggestionAfterError = true;
          this._outputConfiguration = {
            writeOut: (str) => process2.stdout.write(str),
            writeErr: (str) => process2.stderr.write(str),
            getOutHelpWidth: () => process2.stdout.isTTY ? process2.stdout.columns : void 0,
            getErrHelpWidth: () => process2.stderr.isTTY ? process2.stderr.columns : void 0,
            outputError: (str, write) => write(str)
          };
          this._hidden = false;
          this._hasHelpOption = true;
          this._helpFlags = "-h, --help";
          this._helpDescription = "display help for command";
          this._helpShortFlag = "-h";
          this._helpLongFlag = "--help";
          this._addImplicitHelpCommand = void 0;
          this._helpCommandName = "help";
          this._helpCommandnameAndArgs = "help [command]";
          this._helpCommandDescription = "display help for command";
          this._helpConfiguration = {};
        }
        /**
         * Copy settings that are useful to have in common across root command and subcommands.
         *
         * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
         *
         * @param {Command} sourceCommand
         * @return {Command} `this` command for chaining
         */
        copyInheritedSettings(sourceCommand) {
          this._outputConfiguration = sourceCommand._outputConfiguration;
          this._hasHelpOption = sourceCommand._hasHelpOption;
          this._helpFlags = sourceCommand._helpFlags;
          this._helpDescription = sourceCommand._helpDescription;
          this._helpShortFlag = sourceCommand._helpShortFlag;
          this._helpLongFlag = sourceCommand._helpLongFlag;
          this._helpCommandName = sourceCommand._helpCommandName;
          this._helpCommandnameAndArgs = sourceCommand._helpCommandnameAndArgs;
          this._helpCommandDescription = sourceCommand._helpCommandDescription;
          this._helpConfiguration = sourceCommand._helpConfiguration;
          this._exitCallback = sourceCommand._exitCallback;
          this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
          this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
          this._allowExcessArguments = sourceCommand._allowExcessArguments;
          this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
          this._showHelpAfterError = sourceCommand._showHelpAfterError;
          this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
          return this;
        }
        /**
         * Define a command.
         *
         * There are two styles of command: pay attention to where to put the description.
         *
         * @example
         * // Command implemented using action handler (description is supplied separately to `.command`)
         * program
         *   .command('clone <source> [destination]')
         *   .description('clone a repository into a newly created directory')
         *   .action((source, destination) => {
         *     console.log('clone command called');
         *   });
         *
         * // Command implemented using separate executable file (description is second parameter to `.command`)
         * program
         *   .command('start <service>', 'start named service')
         *   .command('stop [service]', 'stop named service, or all if no name supplied');
         *
         * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
         * @param {Object|string} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
         * @param {Object} [execOpts] - configuration options (for executable)
         * @return {Command} returns new command for action handler, or `this` for executable command
         */
        command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
          let desc = actionOptsOrExecDesc;
          let opts = execOpts;
          if (typeof desc === "object" && desc !== null) {
            opts = desc;
            desc = null;
          }
          opts = opts || {};
          const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
          const cmd = this.createCommand(name);
          if (desc) {
            cmd.description(desc);
            cmd._executableHandler = true;
          }
          if (opts.isDefault)
            this._defaultCommandName = cmd._name;
          cmd._hidden = !!(opts.noHelp || opts.hidden);
          cmd._executableFile = opts.executableFile || null;
          if (args)
            cmd.arguments(args);
          this.commands.push(cmd);
          cmd.parent = this;
          cmd.copyInheritedSettings(this);
          if (desc)
            return this;
          return cmd;
        }
        /**
         * Factory routine to create a new unattached command.
         *
         * See .command() for creating an attached subcommand, which uses this routine to
         * create the command. You can override createCommand to customise subcommands.
         *
         * @param {string} [name]
         * @return {Command} new command
         */
        createCommand(name) {
          return new _Command(name);
        }
        /**
         * You can customise the help with a subclass of Help by overriding createHelp,
         * or by overriding Help properties using configureHelp().
         *
         * @return {Help}
         */
        createHelp() {
          return Object.assign(new Help2(), this.configureHelp());
        }
        /**
         * You can customise the help by overriding Help properties using configureHelp(),
         * or with a subclass of Help by overriding createHelp().
         *
         * @param {Object} [configuration] - configuration options
         * @return {Command|Object} `this` command for chaining, or stored configuration
         */
        configureHelp(configuration) {
          if (configuration === void 0)
            return this._helpConfiguration;
          this._helpConfiguration = configuration;
          return this;
        }
        /**
         * The default output goes to stdout and stderr. You can customise this for special
         * applications. You can also customise the display of errors by overriding outputError.
         *
         * The configuration properties are all functions:
         *
         *     // functions to change where being written, stdout and stderr
         *     writeOut(str)
         *     writeErr(str)
         *     // matching functions to specify width for wrapping help
         *     getOutHelpWidth()
         *     getErrHelpWidth()
         *     // functions based on what is being written out
         *     outputError(str, write) // used for displaying errors, and not used for displaying help
         *
         * @param {Object} [configuration] - configuration options
         * @return {Command|Object} `this` command for chaining, or stored configuration
         */
        configureOutput(configuration) {
          if (configuration === void 0)
            return this._outputConfiguration;
          Object.assign(this._outputConfiguration, configuration);
          return this;
        }
        /**
         * Display the help or a custom message after an error occurs.
         *
         * @param {boolean|string} [displayHelp]
         * @return {Command} `this` command for chaining
         */
        showHelpAfterError(displayHelp = true) {
          if (typeof displayHelp !== "string")
            displayHelp = !!displayHelp;
          this._showHelpAfterError = displayHelp;
          return this;
        }
        /**
         * Display suggestion of similar commands for unknown commands, or options for unknown options.
         *
         * @param {boolean} [displaySuggestion]
         * @return {Command} `this` command for chaining
         */
        showSuggestionAfterError(displaySuggestion = true) {
          this._showSuggestionAfterError = !!displaySuggestion;
          return this;
        }
        /**
         * Add a prepared subcommand.
         *
         * See .command() for creating an attached subcommand which inherits settings from its parent.
         *
         * @param {Command} cmd - new subcommand
         * @param {Object} [opts] - configuration options
         * @return {Command} `this` command for chaining
         */
        addCommand(cmd, opts) {
          if (!cmd._name) {
            throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
          }
          opts = opts || {};
          if (opts.isDefault)
            this._defaultCommandName = cmd._name;
          if (opts.noHelp || opts.hidden)
            cmd._hidden = true;
          this.commands.push(cmd);
          cmd.parent = this;
          return this;
        }
        /**
         * Factory routine to create a new unattached argument.
         *
         * See .argument() for creating an attached argument, which uses this routine to
         * create the argument. You can override createArgument to return a custom argument.
         *
         * @param {string} name
         * @param {string} [description]
         * @return {Argument} new argument
         */
        createArgument(name, description) {
          return new Argument2(name, description);
        }
        /**
         * Define argument syntax for command.
         *
         * The default is that the argument is required, and you can explicitly
         * indicate this with <> around the name. Put [] around the name for an optional argument.
         *
         * @example
         * program.argument('<input-file>');
         * program.argument('[output-file]');
         *
         * @param {string} name
         * @param {string} [description]
         * @param {Function|*} [fn] - custom argument processing function
         * @param {*} [defaultValue]
         * @return {Command} `this` command for chaining
         */
        argument(name, description, fn, defaultValue) {
          const argument = this.createArgument(name, description);
          if (typeof fn === "function") {
            argument.default(defaultValue).argParser(fn);
          } else {
            argument.default(fn);
          }
          this.addArgument(argument);
          return this;
        }
        /**
         * Define argument syntax for command, adding multiple at once (without descriptions).
         *
         * See also .argument().
         *
         * @example
         * program.arguments('<cmd> [env]');
         *
         * @param {string} names
         * @return {Command} `this` command for chaining
         */
        arguments(names) {
          names.trim().split(/ +/).forEach((detail) => {
            this.argument(detail);
          });
          return this;
        }
        /**
         * Define argument syntax for command, adding a prepared argument.
         *
         * @param {Argument} argument
         * @return {Command} `this` command for chaining
         */
        addArgument(argument) {
          const previousArgument = this._args.slice(-1)[0];
          if (previousArgument && previousArgument.variadic) {
            throw new Error(`only the last argument can be variadic '${previousArgument.name()}'`);
          }
          if (argument.required && argument.defaultValue !== void 0 && argument.parseArg === void 0) {
            throw new Error(`a default value for a required argument is never used: '${argument.name()}'`);
          }
          this._args.push(argument);
          return this;
        }
        /**
         * Override default decision whether to add implicit help command.
         *
         *    addHelpCommand() // force on
         *    addHelpCommand(false); // force off
         *    addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom details
         *
         * @return {Command} `this` command for chaining
         */
        addHelpCommand(enableOrNameAndArgs, description) {
          if (enableOrNameAndArgs === false) {
            this._addImplicitHelpCommand = false;
          } else {
            this._addImplicitHelpCommand = true;
            if (typeof enableOrNameAndArgs === "string") {
              this._helpCommandName = enableOrNameAndArgs.split(" ")[0];
              this._helpCommandnameAndArgs = enableOrNameAndArgs;
            }
            this._helpCommandDescription = description || this._helpCommandDescription;
          }
          return this;
        }
        /**
         * @return {boolean}
         * @api private
         */
        _hasImplicitHelpCommand() {
          if (this._addImplicitHelpCommand === void 0) {
            return this.commands.length && !this._actionHandler && !this._findCommand("help");
          }
          return this._addImplicitHelpCommand;
        }
        /**
         * Add hook for life cycle event.
         *
         * @param {string} event
         * @param {Function} listener
         * @return {Command} `this` command for chaining
         */
        hook(event, listener) {
          const allowedValues = ["preSubcommand", "preAction", "postAction"];
          if (!allowedValues.includes(event)) {
            throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
          }
          if (this._lifeCycleHooks[event]) {
            this._lifeCycleHooks[event].push(listener);
          } else {
            this._lifeCycleHooks[event] = [listener];
          }
          return this;
        }
        /**
         * Register callback to use as replacement for calling process.exit.
         *
         * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
         * @return {Command} `this` command for chaining
         */
        exitOverride(fn) {
          if (fn) {
            this._exitCallback = fn;
          } else {
            this._exitCallback = (err) => {
              if (err.code !== "commander.executeSubCommandAsync") {
                throw err;
              } else {
              }
            };
          }
          return this;
        }
        /**
         * Call process.exit, and _exitCallback if defined.
         *
         * @param {number} exitCode exit code for using with process.exit
         * @param {string} code an id string representing the error
         * @param {string} message human-readable description of the error
         * @return never
         * @api private
         */
        _exit(exitCode, code, message) {
          if (this._exitCallback) {
            this._exitCallback(new CommanderError2(exitCode, code, message));
          }
          process2.exit(exitCode);
        }
        /**
         * Register callback `fn` for the command.
         *
         * @example
         * program
         *   .command('serve')
         *   .description('start service')
         *   .action(function() {
         *      // do work here
         *   });
         *
         * @param {Function} fn
         * @return {Command} `this` command for chaining
         */
        action(fn) {
          const listener = (args) => {
            const expectedArgsCount = this._args.length;
            const actionArgs = args.slice(0, expectedArgsCount);
            if (this._storeOptionsAsProperties) {
              actionArgs[expectedArgsCount] = this;
            } else {
              actionArgs[expectedArgsCount] = this.opts();
            }
            actionArgs.push(this);
            return fn.apply(this, actionArgs);
          };
          this._actionHandler = listener;
          return this;
        }
        /**
         * Factory routine to create a new unattached option.
         *
         * See .option() for creating an attached option, which uses this routine to
         * create the option. You can override createOption to return a custom option.
         *
         * @param {string} flags
         * @param {string} [description]
         * @return {Option} new option
         */
        createOption(flags, description) {
          return new Option2(flags, description);
        }
        /**
         * Add an option.
         *
         * @param {Option} option
         * @return {Command} `this` command for chaining
         */
        addOption(option) {
          const oname = option.name();
          const name = option.attributeName();
          if (option.negate) {
            const positiveLongFlag = option.long.replace(/^--no-/, "--");
            if (!this._findOption(positiveLongFlag)) {
              this.setOptionValueWithSource(name, option.defaultValue === void 0 ? true : option.defaultValue, "default");
            }
          } else if (option.defaultValue !== void 0) {
            this.setOptionValueWithSource(name, option.defaultValue, "default");
          }
          this.options.push(option);
          const handleOptionValue = (val, invalidValueMessage, valueSource) => {
            if (val == null && option.presetArg !== void 0) {
              val = option.presetArg;
            }
            const oldValue = this.getOptionValue(name);
            if (val !== null && option.parseArg) {
              try {
                val = option.parseArg(val, oldValue);
              } catch (err) {
                if (err.code === "commander.invalidArgument") {
                  const message = `${invalidValueMessage} ${err.message}`;
                  this.error(message, { exitCode: err.exitCode, code: err.code });
                }
                throw err;
              }
            } else if (val !== null && option.variadic) {
              val = option._concatValue(val, oldValue);
            }
            if (val == null) {
              if (option.negate) {
                val = false;
              } else if (option.isBoolean() || option.optional) {
                val = true;
              } else {
                val = "";
              }
            }
            this.setOptionValueWithSource(name, val, valueSource);
          };
          this.on("option:" + oname, (val) => {
            const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
            handleOptionValue(val, invalidValueMessage, "cli");
          });
          if (option.envVar) {
            this.on("optionEnv:" + oname, (val) => {
              const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
              handleOptionValue(val, invalidValueMessage, "env");
            });
          }
          return this;
        }
        /**
         * Internal implementation shared by .option() and .requiredOption()
         *
         * @api private
         */
        _optionEx(config, flags, description, fn, defaultValue) {
          if (typeof flags === "object" && flags instanceof Option2) {
            throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");
          }
          const option = this.createOption(flags, description);
          option.makeOptionMandatory(!!config.mandatory);
          if (typeof fn === "function") {
            option.default(defaultValue).argParser(fn);
          } else if (fn instanceof RegExp) {
            const regex = fn;
            fn = (val, def) => {
              const m = regex.exec(val);
              return m ? m[0] : def;
            };
            option.default(defaultValue).argParser(fn);
          } else {
            option.default(fn);
          }
          return this.addOption(option);
        }
        /**
         * Define option with `flags`, `description` and optional
         * coercion `fn`.
         *
         * The `flags` string contains the short and/or long flags,
         * separated by comma, a pipe or space. The following are all valid
         * all will output this way when `--help` is used.
         *
         *     "-p, --pepper"
         *     "-p|--pepper"
         *     "-p --pepper"
         *
         * @example
         * // simple boolean defaulting to undefined
         * program.option('-p, --pepper', 'add pepper');
         *
         * program.pepper
         * // => undefined
         *
         * --pepper
         * program.pepper
         * // => true
         *
         * // simple boolean defaulting to true (unless non-negated option is also defined)
         * program.option('-C, --no-cheese', 'remove cheese');
         *
         * program.cheese
         * // => true
         *
         * --no-cheese
         * program.cheese
         * // => false
         *
         * // required argument
         * program.option('-C, --chdir <path>', 'change the working directory');
         *
         * --chdir /tmp
         * program.chdir
         * // => "/tmp"
         *
         * // optional argument
         * program.option('-c, --cheese [type]', 'add cheese [marble]');
         *
         * @param {string} flags
         * @param {string} [description]
         * @param {Function|*} [fn] - custom option processing function or default value
         * @param {*} [defaultValue]
         * @return {Command} `this` command for chaining
         */
        option(flags, description, fn, defaultValue) {
          return this._optionEx({}, flags, description, fn, defaultValue);
        }
        /**
        * Add a required option which must have a value after parsing. This usually means
        * the option must be specified on the command line. (Otherwise the same as .option().)
        *
        * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
        *
        * @param {string} flags
        * @param {string} [description]
        * @param {Function|*} [fn] - custom option processing function or default value
        * @param {*} [defaultValue]
        * @return {Command} `this` command for chaining
        */
        requiredOption(flags, description, fn, defaultValue) {
          return this._optionEx({ mandatory: true }, flags, description, fn, defaultValue);
        }
        /**
         * Alter parsing of short flags with optional values.
         *
         * @example
         * // for `.option('-f,--flag [value]'):
         * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
         * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
         *
         * @param {Boolean} [combine=true] - if `true` or omitted, an optional value can be specified directly after the flag.
         */
        combineFlagAndOptionalValue(combine = true) {
          this._combineFlagAndOptionalValue = !!combine;
          return this;
        }
        /**
         * Allow unknown options on the command line.
         *
         * @param {Boolean} [allowUnknown=true] - if `true` or omitted, no error will be thrown
         * for unknown options.
         */
        allowUnknownOption(allowUnknown = true) {
          this._allowUnknownOption = !!allowUnknown;
          return this;
        }
        /**
         * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
         *
         * @param {Boolean} [allowExcess=true] - if `true` or omitted, no error will be thrown
         * for excess arguments.
         */
        allowExcessArguments(allowExcess = true) {
          this._allowExcessArguments = !!allowExcess;
          return this;
        }
        /**
         * Enable positional options. Positional means global options are specified before subcommands which lets
         * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
         * The default behaviour is non-positional and global options may appear anywhere on the command line.
         *
         * @param {Boolean} [positional=true]
         */
        enablePositionalOptions(positional = true) {
          this._enablePositionalOptions = !!positional;
          return this;
        }
        /**
         * Pass through options that come after command-arguments rather than treat them as command-options,
         * so actual command-options come before command-arguments. Turning this on for a subcommand requires
         * positional options to have been enabled on the program (parent commands).
         * The default behaviour is non-positional and options may appear before or after command-arguments.
         *
         * @param {Boolean} [passThrough=true]
         * for unknown options.
         */
        passThroughOptions(passThrough = true) {
          this._passThroughOptions = !!passThrough;
          if (!!this.parent && passThrough && !this.parent._enablePositionalOptions) {
            throw new Error("passThroughOptions can not be used without turning on enablePositionalOptions for parent command(s)");
          }
          return this;
        }
        /**
          * Whether to store option values as properties on command object,
          * or store separately (specify false). In both cases the option values can be accessed using .opts().
          *
          * @param {boolean} [storeAsProperties=true]
          * @return {Command} `this` command for chaining
          */
        storeOptionsAsProperties(storeAsProperties = true) {
          this._storeOptionsAsProperties = !!storeAsProperties;
          if (this.options.length) {
            throw new Error("call .storeOptionsAsProperties() before adding options");
          }
          return this;
        }
        /**
         * Retrieve option value.
         *
         * @param {string} key
         * @return {Object} value
         */
        getOptionValue(key) {
          if (this._storeOptionsAsProperties) {
            return this[key];
          }
          return this._optionValues[key];
        }
        /**
         * Store option value.
         *
         * @param {string} key
         * @param {Object} value
         * @return {Command} `this` command for chaining
         */
        setOptionValue(key, value) {
          return this.setOptionValueWithSource(key, value, void 0);
        }
        /**
          * Store option value and where the value came from.
          *
          * @param {string} key
          * @param {Object} value
          * @param {string} source - expected values are default/config/env/cli/implied
          * @return {Command} `this` command for chaining
          */
        setOptionValueWithSource(key, value, source) {
          if (this._storeOptionsAsProperties) {
            this[key] = value;
          } else {
            this._optionValues[key] = value;
          }
          this._optionValueSources[key] = source;
          return this;
        }
        /**
          * Get source of option value.
          * Expected values are default | config | env | cli | implied
          *
          * @param {string} key
          * @return {string}
          */
        getOptionValueSource(key) {
          return this._optionValueSources[key];
        }
        /**
          * Get source of option value. See also .optsWithGlobals().
          * Expected values are default | config | env | cli | implied
          *
          * @param {string} key
          * @return {string}
          */
        getOptionValueSourceWithGlobals(key) {
          let source;
          getCommandAndParents(this).forEach((cmd) => {
            if (cmd.getOptionValueSource(key) !== void 0) {
              source = cmd.getOptionValueSource(key);
            }
          });
          return source;
        }
        /**
         * Get user arguments from implied or explicit arguments.
         * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
         *
         * @api private
         */
        _prepareUserArgs(argv, parseOptions) {
          if (argv !== void 0 && !Array.isArray(argv)) {
            throw new Error("first parameter to parse must be array or undefined");
          }
          parseOptions = parseOptions || {};
          if (argv === void 0) {
            argv = process2.argv;
            if (process2.versions && process2.versions.electron) {
              parseOptions.from = "electron";
            }
          }
          this.rawArgs = argv.slice();
          let userArgs;
          switch (parseOptions.from) {
            case void 0:
            case "node":
              this._scriptPath = argv[1];
              userArgs = argv.slice(2);
              break;
            case "electron":
              if (process2.defaultApp) {
                this._scriptPath = argv[1];
                userArgs = argv.slice(2);
              } else {
                userArgs = argv.slice(1);
              }
              break;
            case "user":
              userArgs = argv.slice(0);
              break;
            default:
              throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);
          }
          if (!this._name && this._scriptPath)
            this.nameFromFilename(this._scriptPath);
          this._name = this._name || "program";
          return userArgs;
        }
        /**
         * Parse `argv`, setting options and invoking commands when defined.
         *
         * The default expectation is that the arguments are from node and have the application as argv[0]
         * and the script being run in argv[1], with user parameters after that.
         *
         * @example
         * program.parse(process.argv);
         * program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
         * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
         *
         * @param {string[]} [argv] - optional, defaults to process.argv
         * @param {Object} [parseOptions] - optionally specify style of options with from: node/user/electron
         * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
         * @return {Command} `this` command for chaining
         */
        parse(argv, parseOptions) {
          const userArgs = this._prepareUserArgs(argv, parseOptions);
          this._parseCommand([], userArgs);
          return this;
        }
        /**
         * Parse `argv`, setting options and invoking commands when defined.
         *
         * Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.
         *
         * The default expectation is that the arguments are from node and have the application as argv[0]
         * and the script being run in argv[1], with user parameters after that.
         *
         * @example
         * await program.parseAsync(process.argv);
         * await program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
         * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
         *
         * @param {string[]} [argv]
         * @param {Object} [parseOptions]
         * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
         * @return {Promise}
         */
        async parseAsync(argv, parseOptions) {
          const userArgs = this._prepareUserArgs(argv, parseOptions);
          await this._parseCommand([], userArgs);
          return this;
        }
        /**
         * Execute a sub-command executable.
         *
         * @api private
         */
        _executeSubCommand(subcommand, args) {
          args = args.slice();
          let launchWithNode = false;
          const sourceExt = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
          function findFile(baseDir, baseName) {
            const localBin = path.resolve(baseDir, baseName);
            if (fs.existsSync(localBin))
              return localBin;
            if (sourceExt.includes(path.extname(baseName)))
              return void 0;
            const foundExt = sourceExt.find((ext) => fs.existsSync(`${localBin}${ext}`));
            if (foundExt)
              return `${localBin}${foundExt}`;
            return void 0;
          }
          this._checkForMissingMandatoryOptions();
          this._checkForConflictingOptions();
          let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
          let executableDir = this._executableDir || "";
          if (this._scriptPath) {
            let resolvedScriptPath;
            try {
              resolvedScriptPath = fs.realpathSync(this._scriptPath);
            } catch (err) {
              resolvedScriptPath = this._scriptPath;
            }
            executableDir = path.resolve(path.dirname(resolvedScriptPath), executableDir);
          }
          if (executableDir) {
            let localFile = findFile(executableDir, executableFile);
            if (!localFile && !subcommand._executableFile && this._scriptPath) {
              const legacyName = path.basename(this._scriptPath, path.extname(this._scriptPath));
              if (legacyName !== this._name) {
                localFile = findFile(executableDir, `${legacyName}-${subcommand._name}`);
              }
            }
            executableFile = localFile || executableFile;
          }
          launchWithNode = sourceExt.includes(path.extname(executableFile));
          let proc;
          if (process2.platform !== "win32") {
            if (launchWithNode) {
              args.unshift(executableFile);
              args = incrementNodeInspectorPort(process2.execArgv).concat(args);
              proc = childProcess.spawn(process2.argv[0], args, { stdio: "inherit" });
            } else {
              proc = childProcess.spawn(executableFile, args, { stdio: "inherit" });
            }
          } else {
            args.unshift(executableFile);
            args = incrementNodeInspectorPort(process2.execArgv).concat(args);
            proc = childProcess.spawn(process2.execPath, args, { stdio: "inherit" });
          }
          if (!proc.killed) {
            const signals = ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"];
            signals.forEach((signal) => {
              process2.on(signal, () => {
                if (proc.killed === false && proc.exitCode === null) {
                  proc.kill(signal);
                }
              });
            });
          }
          const exitCallback = this._exitCallback;
          if (!exitCallback) {
            proc.on("close", process2.exit.bind(process2));
          } else {
            proc.on("close", () => {
              exitCallback(new CommanderError2(process2.exitCode || 0, "commander.executeSubCommandAsync", "(close)"));
            });
          }
          proc.on("error", (err) => {
            if (err.code === "ENOENT") {
              const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
              const executableMissing = `'${executableFile}' does not exist
 - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
              throw new Error(executableMissing);
            } else if (err.code === "EACCES") {
              throw new Error(`'${executableFile}' not executable`);
            }
            if (!exitCallback) {
              process2.exit(1);
            } else {
              const wrappedError = new CommanderError2(1, "commander.executeSubCommandAsync", "(error)");
              wrappedError.nestedError = err;
              exitCallback(wrappedError);
            }
          });
          this.runningCommand = proc;
        }
        /**
         * @api private
         */
        _dispatchSubcommand(commandName, operands, unknown) {
          const subCommand = this._findCommand(commandName);
          if (!subCommand)
            this.help({ error: true });
          let hookResult;
          hookResult = this._chainOrCallSubCommandHook(hookResult, subCommand, "preSubcommand");
          hookResult = this._chainOrCall(hookResult, () => {
            if (subCommand._executableHandler) {
              this._executeSubCommand(subCommand, operands.concat(unknown));
            } else {
              return subCommand._parseCommand(operands, unknown);
            }
          });
          return hookResult;
        }
        /**
         * Invoke help directly if possible, or dispatch if necessary.
         * e.g. help foo
         *
         * @api private
         */
        _dispatchHelpCommand(subcommandName) {
          if (!subcommandName) {
            this.help();
          }
          const subCommand = this._findCommand(subcommandName);
          if (subCommand && !subCommand._executableHandler) {
            subCommand.help();
          }
          return this._dispatchSubcommand(subcommandName, [], [this._helpLongFlag]);
        }
        /**
         * Check this.args against expected this._args.
         *
         * @api private
         */
        _checkNumberOfArguments() {
          this._args.forEach((arg, i) => {
            if (arg.required && this.args[i] == null) {
              this.missingArgument(arg.name());
            }
          });
          if (this._args.length > 0 && this._args[this._args.length - 1].variadic) {
            return;
          }
          if (this.args.length > this._args.length) {
            this._excessArguments(this.args);
          }
        }
        /**
         * Process this.args using this._args and save as this.processedArgs!
         *
         * @api private
         */
        _processArguments() {
          const myParseArg = (argument, value, previous) => {
            let parsedValue = value;
            if (value !== null && argument.parseArg) {
              try {
                parsedValue = argument.parseArg(value, previous);
              } catch (err) {
                if (err.code === "commander.invalidArgument") {
                  const message = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'. ${err.message}`;
                  this.error(message, { exitCode: err.exitCode, code: err.code });
                }
                throw err;
              }
            }
            return parsedValue;
          };
          this._checkNumberOfArguments();
          const processedArgs = [];
          this._args.forEach((declaredArg, index) => {
            let value = declaredArg.defaultValue;
            if (declaredArg.variadic) {
              if (index < this.args.length) {
                value = this.args.slice(index);
                if (declaredArg.parseArg) {
                  value = value.reduce((processed, v) => {
                    return myParseArg(declaredArg, v, processed);
                  }, declaredArg.defaultValue);
                }
              } else if (value === void 0) {
                value = [];
              }
            } else if (index < this.args.length) {
              value = this.args[index];
              if (declaredArg.parseArg) {
                value = myParseArg(declaredArg, value, declaredArg.defaultValue);
              }
            }
            processedArgs[index] = value;
          });
          this.processedArgs = processedArgs;
        }
        /**
         * Once we have a promise we chain, but call synchronously until then.
         *
         * @param {Promise|undefined} promise
         * @param {Function} fn
         * @return {Promise|undefined}
         * @api private
         */
        _chainOrCall(promise, fn) {
          if (promise && promise.then && typeof promise.then === "function") {
            return promise.then(() => fn());
          }
          return fn();
        }
        /**
         *
         * @param {Promise|undefined} promise
         * @param {string} event
         * @return {Promise|undefined}
         * @api private
         */
        _chainOrCallHooks(promise, event) {
          let result = promise;
          const hooks = [];
          getCommandAndParents(this).reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
            hookedCommand._lifeCycleHooks[event].forEach((callback) => {
              hooks.push({ hookedCommand, callback });
            });
          });
          if (event === "postAction") {
            hooks.reverse();
          }
          hooks.forEach((hookDetail) => {
            result = this._chainOrCall(result, () => {
              return hookDetail.callback(hookDetail.hookedCommand, this);
            });
          });
          return result;
        }
        /**
         *
         * @param {Promise|undefined} promise
         * @param {Command} subCommand
         * @param {string} event
         * @return {Promise|undefined}
         * @api private
         */
        _chainOrCallSubCommandHook(promise, subCommand, event) {
          let result = promise;
          if (this._lifeCycleHooks[event] !== void 0) {
            this._lifeCycleHooks[event].forEach((hook) => {
              result = this._chainOrCall(result, () => {
                return hook(this, subCommand);
              });
            });
          }
          return result;
        }
        /**
         * Process arguments in context of this command.
         * Returns action result, in case it is a promise.
         *
         * @api private
         */
        _parseCommand(operands, unknown) {
          const parsed = this.parseOptions(unknown);
          this._parseOptionsEnv();
          this._parseOptionsImplied();
          operands = operands.concat(parsed.operands);
          unknown = parsed.unknown;
          this.args = operands.concat(unknown);
          if (operands && this._findCommand(operands[0])) {
            return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
          }
          if (this._hasImplicitHelpCommand() && operands[0] === this._helpCommandName) {
            return this._dispatchHelpCommand(operands[1]);
          }
          if (this._defaultCommandName) {
            outputHelpIfRequested(this, unknown);
            return this._dispatchSubcommand(this._defaultCommandName, operands, unknown);
          }
          if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
            this.help({ error: true });
          }
          outputHelpIfRequested(this, parsed.unknown);
          this._checkForMissingMandatoryOptions();
          this._checkForConflictingOptions();
          const checkForUnknownOptions = () => {
            if (parsed.unknown.length > 0) {
              this.unknownOption(parsed.unknown[0]);
            }
          };
          const commandEvent = `command:${this.name()}`;
          if (this._actionHandler) {
            checkForUnknownOptions();
            this._processArguments();
            let actionResult;
            actionResult = this._chainOrCallHooks(actionResult, "preAction");
            actionResult = this._chainOrCall(actionResult, () => this._actionHandler(this.processedArgs));
            if (this.parent) {
              actionResult = this._chainOrCall(actionResult, () => {
                this.parent.emit(commandEvent, operands, unknown);
              });
            }
            actionResult = this._chainOrCallHooks(actionResult, "postAction");
            return actionResult;
          }
          if (this.parent && this.parent.listenerCount(commandEvent)) {
            checkForUnknownOptions();
            this._processArguments();
            this.parent.emit(commandEvent, operands, unknown);
          } else if (operands.length) {
            if (this._findCommand("*")) {
              return this._dispatchSubcommand("*", operands, unknown);
            }
            if (this.listenerCount("command:*")) {
              this.emit("command:*", operands, unknown);
            } else if (this.commands.length) {
              this.unknownCommand();
            } else {
              checkForUnknownOptions();
              this._processArguments();
            }
          } else if (this.commands.length) {
            checkForUnknownOptions();
            this.help({ error: true });
          } else {
            checkForUnknownOptions();
            this._processArguments();
          }
        }
        /**
         * Find matching command.
         *
         * @api private
         */
        _findCommand(name) {
          if (!name)
            return void 0;
          return this.commands.find((cmd) => cmd._name === name || cmd._aliases.includes(name));
        }
        /**
         * Return an option matching `arg` if any.
         *
         * @param {string} arg
         * @return {Option}
         * @api private
         */
        _findOption(arg) {
          return this.options.find((option) => option.is(arg));
        }
        /**
         * Display an error message if a mandatory option does not have a value.
         * Called after checking for help flags in leaf subcommand.
         *
         * @api private
         */
        _checkForMissingMandatoryOptions() {
          for (let cmd = this; cmd; cmd = cmd.parent) {
            cmd.options.forEach((anOption) => {
              if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) {
                cmd.missingMandatoryOptionValue(anOption);
              }
            });
          }
        }
        /**
         * Display an error message if conflicting options are used together in this.
         *
         * @api private
         */
        _checkForConflictingLocalOptions() {
          const definedNonDefaultOptions = this.options.filter(
            (option) => {
              const optionKey = option.attributeName();
              if (this.getOptionValue(optionKey) === void 0) {
                return false;
              }
              return this.getOptionValueSource(optionKey) !== "default";
            }
          );
          const optionsWithConflicting = definedNonDefaultOptions.filter(
            (option) => option.conflictsWith.length > 0
          );
          optionsWithConflicting.forEach((option) => {
            const conflictingAndDefined = definedNonDefaultOptions.find(
              (defined) => option.conflictsWith.includes(defined.attributeName())
            );
            if (conflictingAndDefined) {
              this._conflictingOption(option, conflictingAndDefined);
            }
          });
        }
        /**
         * Display an error message if conflicting options are used together.
         * Called after checking for help flags in leaf subcommand.
         *
         * @api private
         */
        _checkForConflictingOptions() {
          for (let cmd = this; cmd; cmd = cmd.parent) {
            cmd._checkForConflictingLocalOptions();
          }
        }
        /**
         * Parse options from `argv` removing known options,
         * and return argv split into operands and unknown arguments.
         *
         * Examples:
         *
         *     argv => operands, unknown
         *     --known kkk op => [op], []
         *     op --known kkk => [op], []
         *     sub --unknown uuu op => [sub], [--unknown uuu op]
         *     sub -- --unknown uuu op => [sub --unknown uuu op], []
         *
         * @param {String[]} argv
         * @return {{operands: String[], unknown: String[]}}
         */
        parseOptions(argv) {
          const operands = [];
          const unknown = [];
          let dest = operands;
          const args = argv.slice();
          function maybeOption(arg) {
            return arg.length > 1 && arg[0] === "-";
          }
          let activeVariadicOption = null;
          while (args.length) {
            const arg = args.shift();
            if (arg === "--") {
              if (dest === unknown)
                dest.push(arg);
              dest.push(...args);
              break;
            }
            if (activeVariadicOption && !maybeOption(arg)) {
              this.emit(`option:${activeVariadicOption.name()}`, arg);
              continue;
            }
            activeVariadicOption = null;
            if (maybeOption(arg)) {
              const option = this._findOption(arg);
              if (option) {
                if (option.required) {
                  const value = args.shift();
                  if (value === void 0)
                    this.optionMissingArgument(option);
                  this.emit(`option:${option.name()}`, value);
                } else if (option.optional) {
                  let value = null;
                  if (args.length > 0 && !maybeOption(args[0])) {
                    value = args.shift();
                  }
                  this.emit(`option:${option.name()}`, value);
                } else {
                  this.emit(`option:${option.name()}`);
                }
                activeVariadicOption = option.variadic ? option : null;
                continue;
              }
            }
            if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
              const option = this._findOption(`-${arg[1]}`);
              if (option) {
                if (option.required || option.optional && this._combineFlagAndOptionalValue) {
                  this.emit(`option:${option.name()}`, arg.slice(2));
                } else {
                  this.emit(`option:${option.name()}`);
                  args.unshift(`-${arg.slice(2)}`);
                }
                continue;
              }
            }
            if (/^--[^=]+=/.test(arg)) {
              const index = arg.indexOf("=");
              const option = this._findOption(arg.slice(0, index));
              if (option && (option.required || option.optional)) {
                this.emit(`option:${option.name()}`, arg.slice(index + 1));
                continue;
              }
            }
            if (maybeOption(arg)) {
              dest = unknown;
            }
            if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
              if (this._findCommand(arg)) {
                operands.push(arg);
                if (args.length > 0)
                  unknown.push(...args);
                break;
              } else if (arg === this._helpCommandName && this._hasImplicitHelpCommand()) {
                operands.push(arg);
                if (args.length > 0)
                  operands.push(...args);
                break;
              } else if (this._defaultCommandName) {
                unknown.push(arg);
                if (args.length > 0)
                  unknown.push(...args);
                break;
              }
            }
            if (this._passThroughOptions) {
              dest.push(arg);
              if (args.length > 0)
                dest.push(...args);
              break;
            }
            dest.push(arg);
          }
          return { operands, unknown };
        }
        /**
         * Return an object containing local option values as key-value pairs.
         *
         * @return {Object}
         */
        opts() {
          if (this._storeOptionsAsProperties) {
            const result = {};
            const len = this.options.length;
            for (let i = 0; i < len; i++) {
              const key = this.options[i].attributeName();
              result[key] = key === this._versionOptionName ? this._version : this[key];
            }
            return result;
          }
          return this._optionValues;
        }
        /**
         * Return an object containing merged local and global option values as key-value pairs.
         *
         * @return {Object}
         */
        optsWithGlobals() {
          return getCommandAndParents(this).reduce(
            (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
            {}
          );
        }
        /**
         * Display error message and exit (or call exitOverride).
         *
         * @param {string} message
         * @param {Object} [errorOptions]
         * @param {string} [errorOptions.code] - an id string representing the error
         * @param {number} [errorOptions.exitCode] - used with process.exit
         */
        error(message, errorOptions) {
          this._outputConfiguration.outputError(`${message}
`, this._outputConfiguration.writeErr);
          if (typeof this._showHelpAfterError === "string") {
            this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
          } else if (this._showHelpAfterError) {
            this._outputConfiguration.writeErr("\n");
            this.outputHelp({ error: true });
          }
          const config = errorOptions || {};
          const exitCode = config.exitCode || 1;
          const code = config.code || "commander.error";
          this._exit(exitCode, code, message);
        }
        /**
         * Apply any option related environment variables, if option does
         * not have a value from cli or client code.
         *
         * @api private
         */
        _parseOptionsEnv() {
          this.options.forEach((option) => {
            if (option.envVar && option.envVar in process2.env) {
              const optionKey = option.attributeName();
              if (this.getOptionValue(optionKey) === void 0 || ["default", "config", "env"].includes(this.getOptionValueSource(optionKey))) {
                if (option.required || option.optional) {
                  this.emit(`optionEnv:${option.name()}`, process2.env[option.envVar]);
                } else {
                  this.emit(`optionEnv:${option.name()}`);
                }
              }
            }
          });
        }
        /**
         * Apply any implied option values, if option is undefined or default value.
         *
         * @api private
         */
        _parseOptionsImplied() {
          const dualHelper = new DualOptions(this.options);
          const hasCustomOptionValue = (optionKey) => {
            return this.getOptionValue(optionKey) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
          };
          this.options.filter((option) => option.implied !== void 0 && hasCustomOptionValue(option.attributeName()) && dualHelper.valueFromOption(this.getOptionValue(option.attributeName()), option)).forEach((option) => {
            Object.keys(option.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
              this.setOptionValueWithSource(impliedKey, option.implied[impliedKey], "implied");
            });
          });
        }
        /**
         * Argument `name` is missing.
         *
         * @param {string} name
         * @api private
         */
        missingArgument(name) {
          const message = `error: missing required argument '${name}'`;
          this.error(message, { code: "commander.missingArgument" });
        }
        /**
         * `Option` is missing an argument.
         *
         * @param {Option} option
         * @api private
         */
        optionMissingArgument(option) {
          const message = `error: option '${option.flags}' argument missing`;
          this.error(message, { code: "commander.optionMissingArgument" });
        }
        /**
         * `Option` does not have a value, and is a mandatory option.
         *
         * @param {Option} option
         * @api private
         */
        missingMandatoryOptionValue(option) {
          const message = `error: required option '${option.flags}' not specified`;
          this.error(message, { code: "commander.missingMandatoryOptionValue" });
        }
        /**
         * `Option` conflicts with another option.
         *
         * @param {Option} option
         * @param {Option} conflictingOption
         * @api private
         */
        _conflictingOption(option, conflictingOption) {
          const findBestOptionFromValue = (option2) => {
            const optionKey = option2.attributeName();
            const optionValue = this.getOptionValue(optionKey);
            const negativeOption = this.options.find((target) => target.negate && optionKey === target.attributeName());
            const positiveOption = this.options.find((target) => !target.negate && optionKey === target.attributeName());
            if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) {
              return negativeOption;
            }
            return positiveOption || option2;
          };
          const getErrorMessage = (option2) => {
            const bestOption = findBestOptionFromValue(option2);
            const optionKey = bestOption.attributeName();
            const source = this.getOptionValueSource(optionKey);
            if (source === "env") {
              return `environment variable '${bestOption.envVar}'`;
            }
            return `option '${bestOption.flags}'`;
          };
          const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
          this.error(message, { code: "commander.conflictingOption" });
        }
        /**
         * Unknown option `flag`.
         *
         * @param {string} flag
         * @api private
         */
        unknownOption(flag) {
          if (this._allowUnknownOption)
            return;
          let suggestion = "";
          if (flag.startsWith("--") && this._showSuggestionAfterError) {
            let candidateFlags = [];
            let command = this;
            do {
              const moreFlags = command.createHelp().visibleOptions(command).filter((option) => option.long).map((option) => option.long);
              candidateFlags = candidateFlags.concat(moreFlags);
              command = command.parent;
            } while (command && !command._enablePositionalOptions);
            suggestion = suggestSimilar(flag, candidateFlags);
          }
          const message = `error: unknown option '${flag}'${suggestion}`;
          this.error(message, { code: "commander.unknownOption" });
        }
        /**
         * Excess arguments, more than expected.
         *
         * @param {string[]} receivedArgs
         * @api private
         */
        _excessArguments(receivedArgs) {
          if (this._allowExcessArguments)
            return;
          const expected = this._args.length;
          const s = expected === 1 ? "" : "s";
          const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
          const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
          this.error(message, { code: "commander.excessArguments" });
        }
        /**
         * Unknown command.
         *
         * @api private
         */
        unknownCommand() {
          const unknownName = this.args[0];
          let suggestion = "";
          if (this._showSuggestionAfterError) {
            const candidateNames = [];
            this.createHelp().visibleCommands(this).forEach((command) => {
              candidateNames.push(command.name());
              if (command.alias())
                candidateNames.push(command.alias());
            });
            suggestion = suggestSimilar(unknownName, candidateNames);
          }
          const message = `error: unknown command '${unknownName}'${suggestion}`;
          this.error(message, { code: "commander.unknownCommand" });
        }
        /**
         * Set the program version to `str`.
         *
         * This method auto-registers the "-V, --version" flag
         * which will print the version number when passed.
         *
         * You can optionally supply the  flags and description to override the defaults.
         *
         * @param {string} str
         * @param {string} [flags]
         * @param {string} [description]
         * @return {this | string} `this` command for chaining, or version string if no arguments
         */
        version(str, flags, description) {
          if (str === void 0)
            return this._version;
          this._version = str;
          flags = flags || "-V, --version";
          description = description || "output the version number";
          const versionOption = this.createOption(flags, description);
          this._versionOptionName = versionOption.attributeName();
          this.options.push(versionOption);
          this.on("option:" + versionOption.name(), () => {
            this._outputConfiguration.writeOut(`${str}
`);
            this._exit(0, "commander.version", str);
          });
          return this;
        }
        /**
         * Set the description.
         *
         * @param {string} [str]
         * @param {Object} [argsDescription]
         * @return {string|Command}
         */
        description(str, argsDescription) {
          if (str === void 0 && argsDescription === void 0)
            return this._description;
          this._description = str;
          if (argsDescription) {
            this._argsDescription = argsDescription;
          }
          return this;
        }
        /**
         * Set the summary. Used when listed as subcommand of parent.
         *
         * @param {string} [str]
         * @return {string|Command}
         */
        summary(str) {
          if (str === void 0)
            return this._summary;
          this._summary = str;
          return this;
        }
        /**
         * Set an alias for the command.
         *
         * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
         *
         * @param {string} [alias]
         * @return {string|Command}
         */
        alias(alias) {
          if (alias === void 0)
            return this._aliases[0];
          let command = this;
          if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
            command = this.commands[this.commands.length - 1];
          }
          if (alias === command._name)
            throw new Error("Command alias can't be the same as its name");
          command._aliases.push(alias);
          return this;
        }
        /**
         * Set aliases for the command.
         *
         * Only the first alias is shown in the auto-generated help.
         *
         * @param {string[]} [aliases]
         * @return {string[]|Command}
         */
        aliases(aliases) {
          if (aliases === void 0)
            return this._aliases;
          aliases.forEach((alias) => this.alias(alias));
          return this;
        }
        /**
         * Set / get the command usage `str`.
         *
         * @param {string} [str]
         * @return {String|Command}
         */
        usage(str) {
          if (str === void 0) {
            if (this._usage)
              return this._usage;
            const args = this._args.map((arg) => {
              return humanReadableArgName(arg);
            });
            return [].concat(
              this.options.length || this._hasHelpOption ? "[options]" : [],
              this.commands.length ? "[command]" : [],
              this._args.length ? args : []
            ).join(" ");
          }
          this._usage = str;
          return this;
        }
        /**
         * Get or set the name of the command.
         *
         * @param {string} [str]
         * @return {string|Command}
         */
        name(str) {
          if (str === void 0)
            return this._name;
          this._name = str;
          return this;
        }
        /**
         * Set the name of the command from script filename, such as process.argv[1],
         * or require.main.filename, or __filename.
         *
         * (Used internally and public although not documented in README.)
         *
         * @example
         * program.nameFromFilename(require.main.filename);
         *
         * @param {string} filename
         * @return {Command}
         */
        nameFromFilename(filename) {
          this._name = path.basename(filename, path.extname(filename));
          return this;
        }
        /**
         * Get or set the directory for searching for executable subcommands of this command.
         *
         * @example
         * program.executableDir(__dirname);
         * // or
         * program.executableDir('subcommands');
         *
         * @param {string} [path]
         * @return {string|Command}
         */
        executableDir(path2) {
          if (path2 === void 0)
            return this._executableDir;
          this._executableDir = path2;
          return this;
        }
        /**
         * Return program help documentation.
         *
         * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
         * @return {string}
         */
        helpInformation(contextOptions) {
          const helper = this.createHelp();
          if (helper.helpWidth === void 0) {
            helper.helpWidth = contextOptions && contextOptions.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
          }
          return helper.formatHelp(this, helper);
        }
        /**
         * @api private
         */
        _getHelpContext(contextOptions) {
          contextOptions = contextOptions || {};
          const context = { error: !!contextOptions.error };
          let write;
          if (context.error) {
            write = (arg) => this._outputConfiguration.writeErr(arg);
          } else {
            write = (arg) => this._outputConfiguration.writeOut(arg);
          }
          context.write = contextOptions.write || write;
          context.command = this;
          return context;
        }
        /**
         * Output help information for this command.
         *
         * Outputs built-in help, and custom text added using `.addHelpText()`.
         *
         * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
         */
        outputHelp(contextOptions) {
          let deprecatedCallback;
          if (typeof contextOptions === "function") {
            deprecatedCallback = contextOptions;
            contextOptions = void 0;
          }
          const context = this._getHelpContext(contextOptions);
          getCommandAndParents(this).reverse().forEach((command) => command.emit("beforeAllHelp", context));
          this.emit("beforeHelp", context);
          let helpInformation = this.helpInformation(context);
          if (deprecatedCallback) {
            helpInformation = deprecatedCallback(helpInformation);
            if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
              throw new Error("outputHelp callback must return a string or a Buffer");
            }
          }
          context.write(helpInformation);
          this.emit(this._helpLongFlag);
          this.emit("afterHelp", context);
          getCommandAndParents(this).forEach((command) => command.emit("afterAllHelp", context));
        }
        /**
         * You can pass in flags and a description to override the help
         * flags and help description for your command. Pass in false to
         * disable the built-in help option.
         *
         * @param {string | boolean} [flags]
         * @param {string} [description]
         * @return {Command} `this` command for chaining
         */
        helpOption(flags, description) {
          if (typeof flags === "boolean") {
            this._hasHelpOption = flags;
            return this;
          }
          this._helpFlags = flags || this._helpFlags;
          this._helpDescription = description || this._helpDescription;
          const helpFlags = splitOptionFlags(this._helpFlags);
          this._helpShortFlag = helpFlags.shortFlag;
          this._helpLongFlag = helpFlags.longFlag;
          return this;
        }
        /**
         * Output help information and exit.
         *
         * Outputs built-in help, and custom text added using `.addHelpText()`.
         *
         * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
         */
        help(contextOptions) {
          this.outputHelp(contextOptions);
          let exitCode = process2.exitCode || 0;
          if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
            exitCode = 1;
          }
          this._exit(exitCode, "commander.help", "(outputHelp)");
        }
        /**
         * Add additional text to be displayed with the built-in help.
         *
         * Position is 'before' or 'after' to affect just this command,
         * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
         *
         * @param {string} position - before or after built-in help
         * @param {string | Function} text - string to add, or a function returning a string
         * @return {Command} `this` command for chaining
         */
        addHelpText(position, text) {
          const allowedValues = ["beforeAll", "before", "after", "afterAll"];
          if (!allowedValues.includes(position)) {
            throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
          }
          const helpEvent = `${position}Help`;
          this.on(helpEvent, (context) => {
            let helpStr;
            if (typeof text === "function") {
              helpStr = text({ error: context.error, command: context.command });
            } else {
              helpStr = text;
            }
            if (helpStr) {
              context.write(`${helpStr}
`);
            }
          });
          return this;
        }
      };
      function outputHelpIfRequested(cmd, args) {
        const helpOption = cmd._hasHelpOption && args.find((arg) => arg === cmd._helpLongFlag || arg === cmd._helpShortFlag);
        if (helpOption) {
          cmd.outputHelp();
          cmd._exit(0, "commander.helpDisplayed", "(outputHelp)");
        }
      }
      function incrementNodeInspectorPort(args) {
        return args.map((arg) => {
          if (!arg.startsWith("--inspect")) {
            return arg;
          }
          let debugOption;
          let debugHost = "127.0.0.1";
          let debugPort = "9229";
          let match;
          if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
            debugOption = match[1];
          } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
            debugOption = match[1];
            if (/^\d+$/.test(match[3])) {
              debugPort = match[3];
            } else {
              debugHost = match[3];
            }
          } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
            debugOption = match[1];
            debugHost = match[3];
            debugPort = match[4];
          }
          if (debugOption && debugPort !== "0") {
            return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
          }
          return arg;
        });
      }
      function getCommandAndParents(startCommand) {
        const result = [];
        for (let command = startCommand; command; command = command.parent) {
          result.push(command);
        }
        return result;
      }
      exports.Command = Command2;
    }
  });

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/index.js
  var require_commander = __commonJS({
    "../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/index.js"(exports, module) {
      "use strict";
      var { Argument: Argument2 } = require_argument();
      var { Command: Command2 } = require_command();
      var { CommanderError: CommanderError2, InvalidArgumentError: InvalidArgumentError2 } = require_error();
      var { Help: Help2 } = require_help();
      var { Option: Option2 } = require_option();
      exports = module.exports = new Command2();
      exports.program = exports;
      exports.Argument = Argument2;
      exports.Command = Command2;
      exports.CommanderError = CommanderError2;
      exports.Help = Help2;
      exports.InvalidArgumentError = InvalidArgumentError2;
      exports.InvalidOptionArgumentError = InvalidArgumentError2;
      exports.Option = Option2;
    }
  });

  // package.json
  var package_default = {
    name: "@pinecone/cli",
    version: "0.0.1",
    description: "Development scaffolding for Pinecone CLI",
    main: "index.js",
    publishConfig: {
      access: "public"
    },
    engines: {
      node: ">= 16"
    },
    bin: {
      pinecone: "bin/index.js"
    },
    scripts: {
      start: "npm run build --watch",
      build: "tsup src/index.ts",
      test: 'echo "Error: no test specified" && exit 1'
    },
    keywords: [],
    author: "",
    license: "ISC",
    dependencies: {
      "@inquirer/prompts": "^3.0.3",
      chalk: "^5.3.0",
      chokidar: "^3.5.3",
      commander: "^11.0.0"
    }
  };

  // ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/ansi-styles/index.js
  var ANSI_BACKGROUND_OFFSET = 10;
  var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
  var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
  var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
  var styles = {
    modifier: {
      reset: [0, 0],
      // 21 isn't widely supported and 22 does the same thing
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      // Bright color
      blackBright: [90, 39],
      gray: [90, 39],
      // Alias of `blackBright`
      grey: [90, 39],
      // Alias of `blackBright`
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // Bright color
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      // Alias of `bgBlackBright`
      bgGrey: [100, 49],
      // Alias of `bgBlackBright`
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  var modifierNames = Object.keys(styles.modifier);
  var foregroundColorNames = Object.keys(styles.color);
  var backgroundColorNames = Object.keys(styles.bgColor);
  var colorNames = [...foregroundColorNames, ...backgroundColorNames];
  function assembleStyles() {
    const codes = /* @__PURE__ */ new Map();
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi = wrapAnsi16();
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value(red, green, blue) {
          if (red === green && green === blue) {
            if (red < 8) {
              return 16;
            }
            if (red > 248) {
              return 231;
            }
            return Math.round((red - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value(hex) {
          const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let [colorString] = matches;
          if (colorString.length === 3) {
            colorString = [...colorString].map((character) => character + character).join("");
          }
          const integer = Number.parseInt(colorString, 16);
          return [
            /* eslint-disable no-bitwise */
            integer >> 16 & 255,
            integer >> 8 & 255,
            integer & 255
            /* eslint-enable no-bitwise */
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      },
      ansi256ToAnsi: {
        value(code) {
          if (code < 8) {
            return 30 + code;
          }
          if (code < 16) {
            return 90 + (code - 8);
          }
          let red;
          let green;
          let blue;
          if (code >= 232) {
            red = ((code - 232) * 10 + 8) / 255;
            green = red;
            blue = red;
          } else {
            code -= 16;
            const remainder = code % 36;
            red = Math.floor(code / 36) / 5;
            green = Math.floor(remainder / 6) / 5;
            blue = remainder % 6 / 5;
          }
          const value = Math.max(red, green, blue) * 2;
          if (value === 0) {
            return 30;
          }
          let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
          if (value === 2) {
            result += 60;
          }
          return result;
        },
        enumerable: false
      },
      rgbToAnsi: {
        value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
        enumerable: false
      },
      hexToAnsi: {
        value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  var ansiStyles = assembleStyles();
  var ansi_styles_default = ansiStyles;

  // ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/supports-color/index.js
  var import_node_process = __toESM(__require("process"), 1);
  var import_node_os = __toESM(__require("os"), 1);
  var import_node_tty = __toESM(__require("tty"), 1);
  function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  }
  var { env } = import_node_process.default;
  var flagForceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    flagForceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    flagForceColor = 1;
  }
  function envForceColor() {
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        return 1;
      }
      if (env.FORCE_COLOR === "false") {
        return 0;
      }
      return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
    const noFlagForceColor = envForceColor();
    if (noFlagForceColor !== void 0) {
      flagForceColor = noFlagForceColor;
    }
    const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
    if (forceColor === 0) {
      return 0;
    }
    if (sniffFlags) {
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
    }
    if ("TF_BUILD" in env && "AGENT_NAME" in env) {
      return 1;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (import_node_process.default.platform === "win32") {
      const osRelease = import_node_os.default.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
        return 3;
      }
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if (env.TERM === "xterm-kitty") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app": {
          return version >= 3 ? 3 : 2;
        }
        case "Apple_Terminal": {
          return 2;
        }
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function createSupportsColor(stream, options = {}) {
    const level = _supportsColor(stream, {
      streamIsTTY: stream && stream.isTTY,
      ...options
    });
    return translateLevel(level);
  }
  var supportsColor = {
    stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
    stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
  };
  var supports_color_default = supportsColor;

  // ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/utilities.js
  function stringReplaceAll(string, substring, replacer) {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string.slice(endIndex, index) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
  }
  function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string[index - 1] === "\r";
      returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
      endIndex = index + 1;
      index = string.indexOf("\n", endIndex);
    } while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
  }

  // ../../node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/index.js
  var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
  var GENERATOR = Symbol("GENERATOR");
  var STYLER = Symbol("STYLER");
  var IS_EMPTY = Symbol("IS_EMPTY");
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles2 = /* @__PURE__ */ Object.create(null);
  var applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === void 0 ? colorLevel : options.level;
  };
  var chalkFactory = (options) => {
    const chalk2 = (...strings) => strings.join(" ");
    applyOptions(chalk2, options);
    Object.setPrototypeOf(chalk2, createChalk.prototype);
    return chalk2;
  };
  function createChalk(options) {
    return chalkFactory(options);
  }
  Object.setPrototypeOf(createChalk.prototype, Function.prototype);
  for (const [styleName, style] of Object.entries(ansi_styles_default)) {
    styles2[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
        Object.defineProperty(this, styleName, { value: builder });
        return builder;
      }
    };
  }
  styles2.visible = {
    get() {
      const builder = createBuilder(this, this[STYLER], true);
      Object.defineProperty(this, "visible", { value: builder });
      return builder;
    }
  };
  var getModelAnsi = (model, level, type, ...arguments_) => {
    if (model === "rgb") {
      if (level === "ansi16m") {
        return ansi_styles_default[type].ansi16m(...arguments_);
      }
      if (level === "ansi256") {
        return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
      }
      return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
    }
    if (model === "hex") {
      return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
    }
    return ansi_styles_default[type][model](...arguments_);
  };
  var usedModels = ["rgb", "hex", "ansi256"];
  for (const model of usedModels) {
    styles2[model] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles2[bgModel] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {
  }, {
    ...styles2,
    level: {
      enumerable: true,
      get() {
        return this[GENERATOR].level;
      },
      set(level) {
        this[GENERATOR].level = level;
      }
    }
  });
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === void 0) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self, _styler, _isEmpty) => {
    const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    Object.setPrototypeOf(builder, proto);
    builder[GENERATOR] = self;
    builder[STYLER] = _styler;
    builder[IS_EMPTY] = _isEmpty;
    return builder;
  };
  var applyStyle = (self, string) => {
    if (self.level <= 0 || !string) {
      return self[IS_EMPTY] ? "" : string;
    }
    let styler = self[STYLER];
    if (styler === void 0) {
      return string;
    }
    const { openAll, closeAll } = styler;
    if (string.includes("\x1B")) {
      while (styler !== void 0) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf("\n");
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  Object.defineProperties(createChalk.prototype, styles2);
  var chalk = createChalk();
  var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
  var source_default = chalk;

  // ../../node_modules/.pnpm/commander@11.0.0/node_modules/commander/esm.mjs
  var import_index = __toESM(require_commander(), 1);
  var {
    program,
    createCommand,
    createArgument,
    createOption,
    CommanderError,
    InvalidArgumentError,
    InvalidOptionArgumentError,
    // deprecated old name
    Command,
    Argument,
    Option,
    Help
  } = import_index.default;

  // src/index.ts
  var program2 = new Command();
  program2.name("Pinecone_CLI").description(package_default.description).version(package_default.version);
  program2.command("init").description("init project").action((str, options) => {
    console.log(source_default.green("\u811A\u624B\u67B6\u642D\u5EFA\u6210\u529F"));
  });
  program2.parse();
})();
