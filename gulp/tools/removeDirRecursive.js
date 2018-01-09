const fse = require("fs-extra");
const retry = require("./retryPromise");

async function removeDirRecursive(path) {
  const exists = await fse.pathExists(path);
  if (exists) {
    await fse.remove(path);
  }
};

module.exports = retry(removeDirRecursive);