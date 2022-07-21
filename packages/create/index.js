const path = require("path");
const fs = require("fs-extra");
const initPackageJson = require("pify")(require("init-package-json"));

function factory(argv) {
  console.log("create factory");
  return new CreateCommand(argv).execute();
}

class CreateCommand {
  constructor(options) {
    this.options = options;
    this.rootPath = path.resolve();
  }

  async execute() {
    const { name, registry } = this.options;
    const targetDir = path.join(this.rootPath, `packages/${name}`);
    console.log(targetDir);
    this.libDir = path.join(targetDir, "lib");
    this.testDir = path.join(targetDir, "__tests__");
    await fs.mkdirp(this.libDir);
    await fs.mkdirp(this.testDir);
    // 弹出选项填写package json信息
    // 可以把回调的方式改成promise方式
    await initPackageJson(targetDir, "");
  }
}

module.exports = factory;
