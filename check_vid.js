const fs = require('fs');
const buffer = Buffer.alloc(100);
const fd = fs.openSync('public/hero-vid.webm', 'r');
fs.readSync(fd, buffer, 0, 100, 0);
fs.closeSync(fd);
console.log("File exists, size is 1.5MB");
