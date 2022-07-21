const path = require("path");
const fs = require("fs-extra");
const execa = require("execa");

function factory(argv) {
  console.log("init factory");
  return new InitCommand(argv).execute();
}

class InitCommand {
  constructor(options) {
    this.argv = options;
    this.rootPath = path.resolve();
  }

  async execute() {
    console.log("initializing git repository");
    await execa("git", ["init"], { stdio: "pipe" });
    await this.ensurePackageJSON();
    await this.ensureLernaConfig();
    await this.ensurePackagesDir();
    console.log("initialized lerna files");
  }

  async ensurePackageJSON() {
    console.info("==> 创建package.json");
    await fs.writeJson(
      path.join(this.rootPath, "package.json"),
      {
        name: "root",
        private: true,
        devDependencies: {
          lerna: "^5.1.8",
        },
      },
      { spaces: 2 }
    );
  }

  async ensureLernaConfig() {
    console.info("==> 创建lerna.json");
    await fs.writeJson(
      path.join(this.rootPath, "lerna.json"),
      {
        packages: ["packages/*"],
        useNx: false,
        version: "0.0.0",
      },
      { spaces: 2 }
    );
  }

  async ensurePackagesDir() {
    console.info("==> 创建packages");
    await fs.mkdir(path.join(this.rootPath, "packages"));
  }
}

module.exports = factory;
