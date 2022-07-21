exports.command = "init";
exports.describe = "创建一个新的仓库";
exports.builder = (yargs) => {
  console.log("init builder");
};
// init命令真正的处理逻辑
exports.handler = (argv) => {
  console.log("执行init命令", argv);
  return require(".")(argv);
};
