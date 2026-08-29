const fs = require("fs");
const v = require("../package.json").version;
let py = fs.readFileSync("pyproject.toml", "utf8");
if (!/^version = "/m.test(py)) {
  console.error("version field not found in pyproject.toml");
  process.exit(1);
}
py = py.replace(/^version = ".*"/m, `version = "${v}"`);
fs.writeFileSync("pyproject.toml", py);
