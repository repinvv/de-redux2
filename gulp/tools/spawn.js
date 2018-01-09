const childProcess = require("child_process");
const needsPath = ["node", "webdriver-manager"];

function spawnIt(cmd, parameters, options) {
  switch (process.platform) {
    case "win32":
      const spawn = require("cross-spawn");
      return spawn(cmd, parameters, options);
    
    case "darwin":
      if(needsPath.indexOf(cmd) !== -1){
		const shelljs = require("shelljs");
        cmd = shelljs.which(cmd).toString();
      }
      
      return childProcess.spawn(cmd, parameters, options);
    
    default:
      return childProcess.spawn(cmd, parameters, options);
  }
}

function spawn(cmd, parameters, options, done, name) {
  const spawned = spawnIt(cmd, parameters, options);
  spawned.setMaxListeners(0);
  spawned.on("close", function(exitCode){
    if (exitCode !== 0) {
      throw new Error(name + " error");
    }
    
    done();
  });
}

module.exports = spawn;
