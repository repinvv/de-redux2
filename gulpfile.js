const fs = require("fs");

function readTasks(dir) {
	const tasks = fs.readdirSync(dir);
	tasks.forEach(function (task) {
		const path = dir + "/" + task;
		if (fs.lstatSync(path).isFile()) {
			require(path);
		}
	});
}

readTasks("./gulp/tasks");
readTasks("./gulp/implementations");
