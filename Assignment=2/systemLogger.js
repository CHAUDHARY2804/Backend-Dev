const os = require("os");
const fs = require("fs");

function logSystemInfo() {
  const cpu = os.cpus()[0].model;
  const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2);
  const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);
  const platform = os.platform();
  const time = new Date().toLocaleString();

  const log = `
Time: ${time}
Platform: ${platform}
CPU: ${cpu}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
---------------------------
`;

  fs.appendFileSync("system-log.txt", log);
}


setInterval(logSystemInfo, 5000);
