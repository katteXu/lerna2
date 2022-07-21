const yargs = require("yargs/yargs");
const [, , ...argv] = process.argv;
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
cli
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
  .epilogue("结束语")
  .command({
    command: "create <name>",
    describe: "创建一个lerna管理的包",
    builder: (yargs) => {
      yargs
        .positional("name", {
          type: "string",
          describe: "包名",
        })
        .options({
          registry: {
            group: "Command Groups",
            describe: "配置包的发布仓库地址",
            type: "string",
          },
        });
    },
    handler: (argv) => {
      console.log("执行init命令", argv);
    },
  })
  .parse(argv);

// console.log(cli);
