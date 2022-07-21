exports.command = "create <name>";
exports.describe = "创建一个新的管理包";
exports.builder = (yargs) => {
  console.log("create builder");
  yargs
    .positional("name", {
      type: "string",
      describe: "包名",
    })
    .options({
      registry: {
        group: "Command Groups",
        describe: "配置发不过饱",
        type: "string",
      },
    });
};
// init命令真正的处理逻辑
exports.handler = (argv) => {
  console.log("执行create命令", argv);
  return require(".")(argv);
};
