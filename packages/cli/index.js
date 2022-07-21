const yargs = require("yargs/yargs");

function LernaCLI() {
  const cli = yargs();
  const globalOptions = {
    logLevel: {
      type: "string",
      describe: "日志级别",
      defaultDescription: "info",
      alias: "L",
    },
  };

  const globalKeys = Object.keys(globalOptions).concat(["help", "version"]);
  return cli
    .options(globalOptions)
    .group(globalKeys, "Global Options:")
    .usage("Usage $0 <command> [options]")
    .demandCommand(1, "至少需要一个命令")
    .strict()
    .recommendCommands()
    .fail((msg, error) => {
      console.error(msg);
      console.error(error);
    })
    .alias("h", "help")
    .alias("v", "version")
    .epilogue("结束语");
}

module.exports = LernaCLI;
