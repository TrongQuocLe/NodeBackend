const os = require("os");
const { clearScreenDown } = require("readline");

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Infor
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total mem
console.log(os.totalmem());

// Uptime
console.log(os.uptime());
